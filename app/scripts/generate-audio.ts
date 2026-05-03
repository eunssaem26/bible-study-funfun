/**
 * Generate MP3 audio files for every English sentence in the lesson content
 * using OpenAI's TTS API. Files are written to public/audio/<hash>.mp3 and a
 * manifest mapping text -> hash is written to src/content/audio-manifest.json.
 *
 * Run with:
 *   OPENAI_API_KEY=sk-... npm run generate:audio
 *
 * Re-runs are incremental: a sentence whose MP3 already exists is skipped.
 */

import crypto from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { getAllLessons } from '../src/content/lessons'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const APP_ROOT = path.resolve(__dirname, '..')
const AUDIO_DIR = path.join(APP_ROOT, 'public', 'audio')
const MANIFEST_PATH = path.join(APP_ROOT, 'src', 'content', 'audio-manifest.json')

const VOICE = 'nova' // warm, friendly female voice — fits a teaching tone
const MODEL = 'tts-1' // tts-1 is ~$0.015 / 1K chars; tts-1-hd is 2x for higher fidelity
const SPEED = 0.95 // slightly slower than default for learners

const apiKey = process.env.OPENAI_API_KEY
if (!apiKey) {
  console.error('OPENAI_API_KEY env var is required.')
  process.exit(1)
}

function hashText(text: string): string {
  return crypto.createHash('sha256').update(text).digest('hex').slice(0, 16)
}

function collectSentences(): string[] {
  const set = new Set<string>()
  for (const lesson of getAllLessons()) {
    for (const s of lesson.sentences) {
      set.add(s.english.trim())
    }
  }
  return [...set]
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// Parse a hint like "Please try again in 20s" out of an OpenAI 429 body.
function parseRetryAfterMs(body: string, fallbackMs: number): number {
  const m = body.match(/try again in ([\d.]+)\s*(ms|s|m)/i)
  if (!m) return fallbackMs
  const n = parseFloat(m[1])
  const unit = m[2].toLowerCase()
  if (unit === 'ms') return Math.ceil(n)
  if (unit === 's') return Math.ceil(n * 1000)
  if (unit === 'm') return Math.ceil(n * 60_000)
  return fallbackMs
}

async function synthesize(text: string): Promise<Buffer> {
  const MAX_ATTEMPTS = 6
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    const res = await fetch('https://api.openai.com/v1/audio/speech', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: MODEL,
        voice: VOICE,
        input: text,
        response_format: 'mp3',
        speed: SPEED,
      }),
    })
    if (res.ok) return Buffer.from(await res.arrayBuffer())

    const body = await res.text()
    if (res.status === 429 || res.status >= 500) {
      // Free-tier TTS limit is 3 RPM → wait ~21s. Higher-tier transient blips
      // usually clear in a couple of seconds. Trust the API hint when present.
      const waitMs = parseRetryAfterMs(body, res.status === 429 ? 21_000 : 2000)
      const remaining = MAX_ATTEMPTS - attempt
      console.log(`  ↳ ${res.status}, waiting ${Math.round(waitMs / 1000)}s (${remaining} retries left)`)
      if (attempt < MAX_ATTEMPTS) {
        await sleep(waitMs)
        continue
      }
    }
    throw new Error(`OpenAI TTS ${res.status}: ${body}`)
  }
  throw new Error('unreachable')
}

async function main() {
  fs.mkdirSync(AUDIO_DIR, { recursive: true })
  fs.mkdirSync(path.dirname(MANIFEST_PATH), { recursive: true })

  const sentences = collectSentences()
  console.log(`Found ${sentences.length} unique sentences.`)

  const manifest: Record<string, string> = {}
  let generated = 0
  let skipped = 0

  for (const [i, text] of sentences.entries()) {
    const hash = hashText(text)
    manifest[text] = hash
    const file = path.join(AUDIO_DIR, `${hash}.mp3`)

    if (fs.existsSync(file)) {
      skipped++
      continue
    }

    process.stdout.write(`[${i + 1}/${sentences.length}] ${hash} ${text.slice(0, 50)}…  `)
    try {
      const buf = await synthesize(text)
      fs.writeFileSync(file, buf)
      generated++
      console.log(`✓ ${(buf.length / 1024).toFixed(1)} KB`)
    } catch (err) {
      console.log('✗')
      console.error(err)
      process.exit(1)
    }
  }

  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + '\n')
  console.log(`\nDone. Generated: ${generated}, skipped: ${skipped}, total in manifest: ${Object.keys(manifest).length}`)
  console.log(`Manifest: ${path.relative(APP_ROOT, MANIFEST_PATH)}`)
  console.log(`Audio:    ${path.relative(APP_ROOT, AUDIO_DIR)}/`)
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
