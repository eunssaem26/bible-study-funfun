import { Link } from 'react-router-dom'
import { stories, getAllLessons, type Lesson, type Story } from '../content/lessons'
import { useVocab } from '../lib/vocab'
import { useProgress } from '../lib/progress'
import Ona from '../components/Ona'

export default function Home() {
  const { words } = useVocab()
  const { streak, dates, completedToday, week, completedLessons, isLessonDone } = useProgress()

  const allLessons = getAllLessons()
  // Find the next uncompleted lesson, or the last lesson if all done.
  const nextLesson = allLessons.find(l => !isLessonDone(l.storyId, l.lessonNum)) ?? allLessons[allLessons.length - 1]
  const nextStory = stories.find(s => s.id === nextLesson?.storyId)
  const allDone = allLessons.every(l => isLessonDone(l.storyId, l.lessonNum))

  return (
    <main className="min-h-dvh px-5 pt-12 pb-16 max-w-md mx-auto">
      <div className="flex items-center justify-between mb-5">
        <div className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">
          BIBLE STUDY · 베타
        </div>
        <Link
          to="/vocabulary"
          className="relative shrink-0 w-11 h-11 rounded-full bg-zinc-100 hover:bg-zinc-200 active:scale-95 flex items-center justify-center transition-all"
          aria-label="내 단어장"
        >
          <span className="text-lg" aria-hidden>📖</span>
          {words.length > 0 && (
            <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1.5 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center tabular-nums">
              {words.length}
            </span>
          )}
        </Link>
      </div>

      <header className="flex items-center gap-3 mb-9">
        <Ona mood="greeting" size={104} priority className="shrink-0 -ml-1" />
        <div className="flex-1 min-w-0">
          <h1 className="text-[26px] font-bold leading-tight">
            영어로 만나는<br />
            <span className="text-blue-600">성경 이야기</span>
          </h1>
          <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
            하루 5분, 오나가 같이 공부해줘!
          </p>
        </div>
      </header>

      {nextLesson && nextStory && (
        <section>
          <div className="text-xs font-semibold tracking-wide text-zinc-400 uppercase mb-3">
            {allDone ? '다시 도전' : '오늘의 스토리'}
          </div>
          <FeaturedCard lesson={nextLesson} story={nextStory} />
        </section>
      )}

      <section className="mt-10">
        <div className="text-xs font-semibold tracking-wide text-zinc-400 uppercase mb-3">
          전체 스토리
        </div>
        <div className="flex flex-col gap-2.5">
          {stories.map((story, idx) => {
            const storyLessons = allLessons.filter(l => l.storyId === story.id)
            const doneCount = storyLessons.filter(l => isLessonDone(l.storyId, l.lessonNum)).length
            const prevStory = stories[idx - 1]
            const prevDone = !prevStory || allLessons
              .filter(l => l.storyId === prevStory.id)
              .every(l => isLessonDone(l.storyId, l.lessonNum))
            const locked = !prevDone && doneCount === 0
            const completed = doneCount === storyLessons.length && storyLessons.length > 0
            return (
              <StoryRow
                key={story.id}
                story={story}
                lessons={storyLessons}
                doneCount={doneCount}
                locked={locked}
                completed={completed}
              />
            )
          })}
        </div>
      </section>

      <section className="mt-10">
        <div className="flex items-baseline justify-between mb-3">
          <h2 className="text-xs font-semibold tracking-wide text-zinc-400 uppercase">
            매일 도전
          </h2>
          {streak > 0 && (
            <div className="flex items-center gap-1">
              <span className="text-base" aria-hidden>🔥</span>
              <span className="text-sm font-bold text-orange-600 tabular-nums">
                {streak}일 연속
              </span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-7 gap-1.5">
          {week.map(d => {
            const done = dates.has(d.iso)
            let cls = 'bg-zinc-100 text-zinc-300'
            let content: React.ReactNode = ''
            if (done) {
              cls = 'bg-orange-100 text-orange-600'
              content = '🔥'
            }
            if (d.isToday && done) cls = 'bg-orange-500 text-white ring-2 ring-orange-200 ring-offset-1'
            if (d.isToday && !done) cls = 'bg-white border-2 border-orange-400 text-orange-600'
            if (d.isFuture) cls = 'bg-zinc-50 text-zinc-300'
            return (
              <div key={d.iso} className="text-center">
                <div className={`text-[10px] mb-1.5 ${d.isToday ? 'text-orange-600 font-bold' : 'text-zinc-400'}`}>
                  {d.label}
                </div>
                <div className={`aspect-square rounded-lg flex items-center justify-center text-xs font-semibold transition-all ${cls}`}>
                  {content}
                </div>
              </div>
            )
          })}
        </div>

        <p className="text-xs text-zinc-500 mt-3 text-center">
          {streak === 0 && '🔥 오늘부터 매일 도전을 시작해 보세요'}
          {streak > 0 && completedToday && `오늘도 완료! 내일도 만나요 ✨`}
          {streak > 0 && !completedToday && `오늘 레슨을 완료하면 ${streak + 1}일 연속!`}
        </p>

        {streak === 0 && (
          <div className="mt-4 flex justify-center">
            <Ona mood="sleeping" size={80} className="opacity-90" />
          </div>
        )}
      </section>
    </main>
  )
}

function FeaturedCard({ lesson, story }: { lesson: Lesson; story: Story }) {
  return (
    <Link to={`/lesson/${lesson.storyId}/${lesson.lessonNum}`} className="block group">
      <article className="rounded-3xl bg-white border border-zinc-200 p-6 shadow-sm hover:shadow-md hover:border-zinc-300 transition-all active:scale-[0.99]">
        <div className="flex items-start gap-4 mb-4">
          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${story.cover} flex items-center justify-center text-2xl shrink-0`}>
            <span aria-hidden>{story.emoji}</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-semibold text-blue-600 mb-1">난이도 2단계</div>
            <h2 className="text-lg font-bold leading-snug">{lesson.title}</h2>
            <p className="text-sm text-zinc-500 mt-0.5">{lesson.titleKr}</p>
          </div>
        </div>
        <p className="text-sm text-zinc-600 leading-relaxed mb-5">{lesson.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs text-zinc-500">
            <span className="flex items-center gap-1">
              <span aria-hidden>⏱</span>
              {lesson.estimatedMinutes}분
            </span>
            <span>·</span>
            <span>{lesson.sentences.length}문장</span>
            <span>·</span>
            <span>퀴즈 {lesson.quiz.length}개</span>
          </div>
          <span className="text-blue-600 font-semibold text-sm group-hover:translate-x-0.5 transition-transform">
            시작 →
          </span>
        </div>
      </article>
    </Link>
  )
}

function StoryRow({
  story,
  lessons,
  doneCount,
  locked,
  completed,
}: {
  story: Story
  lessons: Lesson[]
  doneCount: number
  locked: boolean
  completed: boolean
}) {
  const firstLesson = lessons[0]
  const linkable = !locked && firstLesson
  const target = firstLesson ? `/lesson/${firstLesson.storyId}/${firstLesson.lessonNum}` : '#'

  const Tag = linkable ? Link : 'div'

  return (
    <Tag
      to={target}
      className={`flex items-center gap-3 rounded-2xl border p-3 transition-all ${
        locked
          ? 'bg-zinc-50 border-zinc-100 cursor-not-allowed'
          : 'bg-white border-zinc-200 hover:border-zinc-300 active:scale-[0.99]'
      }`}
      {...(linkable ? {} : { 'aria-disabled': 'true' })}
    >
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${story.cover} flex items-center justify-center text-xl shrink-0 ${locked ? 'opacity-40 grayscale' : ''}`}>
        <span aria-hidden>{story.emoji}</span>
      </div>
      <div className="flex-1 min-w-0">
        <div className={`text-sm font-bold leading-snug ${locked ? 'text-zinc-400' : 'text-zinc-900'}`}>
          {story.titleKr}
        </div>
        <div className={`text-xs mt-0.5 ${locked ? 'text-zinc-400' : 'text-zinc-500'}`}>
          {story.title} · {doneCount}/{lessons.length} 레슨
        </div>
      </div>
      <div className="shrink-0 text-xs font-semibold">
        {completed ? (
          <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700">완료 ✓</span>
        ) : locked ? (
          <span className="px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-400">🔒</span>
        ) : doneCount > 0 ? (
          <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-700">계속하기</span>
        ) : (
          <span className="px-2.5 py-1 rounded-full bg-amber-50 text-amber-700">시작</span>
        )}
      </div>
    </Tag>
  )
}
