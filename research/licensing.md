# 한국 중학생용 무료 영어 성경공부 사이트 — 라이선스 & 콘텐츠 소스 레퍼런스

> **프로젝트 전제**: 광고/구독 없는 완전 무료 공개 웹사이트, 영어 본문 + 한국어 대역, 중학생 대상.
> **작성일**: 2026-05-03
> **⚠️ 중요**: 본 문서 작성 시점에 `WebFetch`/`WebSearch` 권한이 차단되어 있어 공식 페이지의 실시간 검증이 불가했습니다. 모든 라이선스 조항은 **반드시 배포 직전 공식 페이지에서 재확인**하십시오. 라이선스 문구는 자주 바뀝니다.
>
> 검증해야 할 핵심 페이지:
> - NIV: <https://www.biblica.com/resources/bible-faqs/permissions-rights-and-licensing/>
> - ESV: <https://www.crossway.org/permissions/>
> - NLT/ICB: <https://tyndale.com/permissions>
> - WEB/공개 번역본: <https://ebible.org>
> - NET: <https://netbible.com/net-bible-copyright/>
> - OEB: <https://openenglishbible.org>
> - 대한성서공회: <https://www.bskorea.or.kr>

---

## 1. 영어 성경 번역본

### 1.1 한눈에 보기 (Verdict 표)

| 약칭 | 정식 명칭 | 저작권 보유 | 무료 웹 전체 본문 | 짧은 인용 | Verdict |
|------|-----------|-------------|------------------|-----------|---------|
| **WEB** | World English Bible | Public Domain (PD) | ✅ 가능 | ✅ | ✅ **최우선 추천** |
| **KJV** | King James Version | PD (미국) / UK Crown © (영국) | ✅ 미국 호스팅 시 가능 | ✅ | ✅ |
| **ASV** | American Standard Version (1901) | PD | ✅ | ✅ | ✅ |
| **BBE** | Bible in Basic English | PD (대부분 견해) — 확인 필요 | ✅ (위험 낮음) | ✅ | ✅ ⚠️ 확인 권장 |
| **OEB** | Open English Bible | CC0 (Public Domain Dedication) | ✅ | ✅ | ✅ (미완역 주의) |
| **NET** | NET Bible | NET Bible® Tyndale House Foundation, "Ministry First" 라이선스 | ⚠️ 조건부 가능 | ✅ | ⚠️ 조항 정독 필요 |
| **NIV** | New International Version | Biblica / Zondervan | ❌ | ⚠️ 500절·25%·50% 한도 | ⚠️ |
| **ESV** | English Standard Version | Crossway | ❌ | ⚠️ 1,000절·50%·25% 한도 | ⚠️ |
| **NLT** | New Living Translation | Tyndale House Publishers | ❌ | ⚠️ 500절 한도 | ⚠️ |
| **CEV** | Contemporary English Version | American Bible Society | ❌ | ⚠️ 1,000절·50% 한도 | ⚠️ |
| **GNT/GNB** | Good News Translation | American Bible Society | ❌ | ⚠️ 1,000절 한도 | ⚠️ |
| **ICB** | International Children's Bible | Tommy Nelson / Thomas Nelson | ❌ | ⚠️ 500절 한도 (NLT와 동급으로 알려짐) | ⚠️ 정확 한도 확인 필요 |
| **NIrV** | NIV Reader's Version | Biblica / Zondervan | ❌ | ⚠️ NIV와 동일 한도 적용 | ⚠️ |

> 핵심 결론: **무료 웹사이트에 영어 본문 전체를 호스팅하려면 PD/오픈 라이선스(WEB·KJV·ASV·BBE·OEB)에서 골라야 합니다.** NIV/ESV/NLT 등 상용 번역은 "짧은 인용"만 가능하며, 사이트가 사실상 본문 전체를 노출하는 구조면 어떤 한도로도 합법화되지 않습니다.

---

### 1.2 번역본별 상세

#### NIV (New International Version)
- **저작권**: Biblica, Inc. (이전 IBS) — 북미 상업 출판은 Zondervan(HarperCollins Christian Publishing)
- **널리 알려진 무료 인용 한도** (확인 필요, 2026년 시점 공식 문구 재확인 필수):
  - **500절 이하** (운문/산문 합산)
  - 인용한 책(Bible book)의 **25% 미만**
  - 인용을 사용하는 결과물(완성된 책, 앱, 사이트 페이지)의 **50% 미만**
  - 단, 단일 책(Book) **전체 인용 금지**
- **저작권 표기 의무**: "Scripture quotations taken from The Holy Bible, New International Version®, NIV®. Copyright © 1973, 1978, 1984, 2011 by Biblica, Inc.™ Used by permission. All rights reserved worldwide."
- **상업적 사용/판매 사용**: 별도 허락 필수
- **무료 사이트 본문 전체 호스팅**: ❌ 절대 불가
- **결론**: 짧은 비교용 인용까지만. 본문 전체를 보여주려면 API.Bible 등 정식 라이선스 API를 거치되, 오프라인 캐싱·전체 다운로드 금지.
- **출처**: <https://www.biblica.com/resources/bible-faqs/permissions-rights-and-licensing/>

#### ESV (English Standard Version)
- **저작권**: Crossway (Good News Publishers)
- **무료 인용 한도** (확인 필요):
  - **1,000절 이하**
  - 결과물의 **50% 미만**
  - 인용한 책의 **50% 미만**, 단 단일 책 **전체 인용 금지**
- **저작권 표기**: "Scripture quotations are from the ESV® Bible (The Holy Bible, English Standard Version®), © 2001 by Crossway, a publishing ministry of Good News Publishers. Used by permission. All rights reserved."
- **ESV API**: 공식 무료 API 제공(개발/비상업), 그러나 "캐시 금지", "전체 텍스트 다운로드 금지", "5,000회/일 한도(시점에 따라 변동)" 등 제약. <https://api.esv.org/> 약관 재확인 필수.
- **무료 사이트 본문 전체 호스팅**: ❌ 약관상 사실상 불가 (전체 텍스트 노출 = 캐시·재배포로 간주됨)
- **결론**: API로 절 단위 호출 + 짧은 학습 인용까지가 안전선.
- **출처**: <https://www.crossway.org/permissions/>, <https://api.esv.org/>

#### NLT (New Living Translation)
- **저작권**: Tyndale House Publishers
- **무료 인용 한도** (확인 필요):
  - **500절 이하**
  - 결과물의 **25% 미만**, 인용한 책의 **50% 미만**, 단일 책 전체 금지
- **저작권 표기**: "Scripture quotations are taken from the Holy Bible, New Living Translation, copyright © 1996, 2004, 2015 by Tyndale House Foundation. Used by permission of Tyndale House Publishers, Carol Stream, Illinois 60188. All rights reserved."
- **무료 사이트 본문 전체 호스팅**: ❌
- **결론**: NIV와 거의 동일 정책. 전면 호스팅 불가.
- **출처**: <https://tyndale.com/permissions>

#### KJV (King James Version, 1611)
- **미국**: Public Domain. 자유 사용.
- **영국**: **Crown copyright** 적용. Cambridge University Press와 Eyre & Spottiswoode가 영국 내 인쇄권 보유(Royal Letters Patent). 영국 외부에 호스팅된 사이트의 영국 사용자 접근에 대해 강제력은 사실상 매우 약하지만, 영국 내 출판/인쇄 시 주의.
- **무료 사이트 본문 전체 호스팅**: ✅ (사이트가 미국·한국 등에서 운영되는 한 안전)
- **결론**: 전세계 어휘·문장 난이도가 중학생에게 너무 어렵다는 별개 문제. 중학생용으로는 1차 추천 아님.
- **출처**: <https://www.cambridge.org/about-us/who-we-are/queens-printers-patent/>

#### WEB (World English Bible)
- **저작권**: **Public Domain (의도적 PD 헌정)** — Michael Paul Johnson 외, Rainbow Missions, Inc.가 ASV 1901을 현대 영어로 갱신.
- **무료 사이트 본문 전체 호스팅**: ✅ 무제한
- **API**: eBible.org에서 USFM/HTML/JSON 등 형식으로 무료 다운로드. bible-api.com·bolls.life도 WEB 제공.
- **결론**: **본 프로젝트의 1순위 영어 본문**. 현대 영어, PD, API 풍부, 비용 0.
- **출처**: <https://ebible.org/web/>, <https://worldenglish.bible/>

#### BBE (Bible in Basic English, 1949/1965)
- **저작권 상태**: **Public Domain으로 널리 알려짐**. 근거는 다음과 같습니다:
  - 1949년 영국에서 NT, 1964/65년 OT 출간. Cambridge University Press가 출판자.
  - 영국 저작권은 발행 후 일정 기간 + 저자 사망 후 70년이지만, S.H. Hooke(편집 책임자, 1968년 사망)의 사망 기준 70년이면 **2038년에 영국에서 PD 진입 예정**이라는 분석도 존재.
  - 미국에서는 1923–1977 발행 + 저작권 갱신 미확인 등의 사유로 PD로 통용되어 왔으며, eBible.org, BibleGateway, e-Sword 등 주요 배포처가 PD로 분류 중.
  - **결론적 권고**: 현재 광범위 PD 통용 → 사용 시 위험 매우 낮으나, **"확인 필요"** 표시. 미국 호스팅 권장.
- **어휘**: **약 1,000개 기본 단어**(Charles K. Ogden의 Basic English 850 + 신학 용어 ~150개 + 시 용어 ~50)로 번역.
- **읽기 난이도**: 영어 기초 학습자 친화. **한국 중학생 EFL 학습자에게 매우 적합**.
- **결론**: **중학생용 "쉬운 영어 본문"으로 1순위 후보**. WEB과 함께 듀얼로 제공 추천.
- **출처**: <https://ebible.org/bbe/>, <https://en.wikipedia.org/wiki/Bible_in_Basic_English>

#### ASV (American Standard Version, 1901)
- **저작권**: Public Domain (1901년 발행, 미국 PD 진입 완료)
- **무료 사이트 본문 전체 호스팅**: ✅
- **결론**: 직역에 가깝지만 어법이 옛날체. 비교용·학술용으로만 추천. 중학생 메인으로는 부적합.

#### NET Bible (New English Translation)
- **저작권**: NET Bible®, Biblical Studies Press, L.L.C. / Tyndale House Foundation
- **라이선스**: "Ministry First" 라이선스. 본문은 비상업 사역 목적으로 **사실상 전체 사용 가능하나**, 상세 약관 다수:
  - 페이지당 **500절 이하**·결과물의 **25% 미만**까지는 표기 외 별도 절차 없이 사용 가능 (확인 필요)
  - 전체 본문 호스팅은 별도 라이선스 신청(무료) 필요
  - **번역자 노트(Translator's Notes, 약 6만 개)**는 별도 저작권. 수업·학술용으로 매우 가치가 높지만 재배포 조건이 더 엄격하므로 본문보다 훨씬 보수적으로 다룰 것.
- **무료 사이트**: ⚠️ 조건부 가능. Bible.org에 라이선스 신청 권장.
- **출처**: <https://netbible.com/net-bible-copyright/>, <https://bible.org/permissions>

#### CEV (Contemporary English Version)
- **저작권**: American Bible Society
- **인용 한도** (확인 필요): **1,000절 이하**, 결과물 **50% 미만**
- **읽기 난이도**: 미국 4학년 수준 영어. 한국 중학생에게도 접근 가능.
- **무료 사이트 본문 전체 호스팅**: ❌
- **결론**: 짧은 비교 인용만.
- **출처**: <https://www.americanbible.org/permissions>

#### GNT / GNB (Good News Translation, 옛 Good News Bible / Today's English Version)
- **저작권**: American Bible Society
- **인용 한도** (확인 필요): CEV와 유사 (1,000절급)
- **무료 사이트 본문 전체 호스팅**: ❌
- **결론**: 짧은 인용만. 전면 사용 불가.

#### ICB (International Children's Bible)
- **저작권**: Tommy Nelson / Thomas Nelson (HarperCollins Christian Publishing)
- **읽기 난이도**: 미국 **3학년 수준** (만 7–12세 대상). 한국 중학생 EFL 학습자에게 BBE와 함께 가장 부담 없는 본문 후보.
- **무료 인용 한도** (확인 필요): **500절 이하**, 결과물 25% 미만 정도가 일반적이나 ICB 전용 정책 확인 필요.
- **무료 사이트 본문 전체 호스팅**: ❌
- **결론**: 라이선스 제약이 명확하므로 **전면 사용은 불가**. "쉬운 본문" 슬롯은 BBE/NIrV 대신 BBE를 우선시.
- **출처**: <https://www.thomasnelson.com/permissions/>

#### NIrV (New International Reader's Version)
- **저작권**: Biblica / Zondervan
- **읽기 난이도**: 미국 **3학년 수준**. 어린이/EFL 친화.
- **인용 한도**: NIV와 동일(500절·25%·50%) — 확인 필요.
- **무료 사이트 본문 전체 호스팅**: ❌
- **결론**: 공식 라이선스 API 통해서만 호출. 전면 사용 불가.

#### OEB (Open English Bible)
- **저작권**: **CC0 1.0 Universal (Public Domain Dedication)** — 명시적 PD 헌정.
- **상태**: NT 완역 + OT 일부. 일부 책은 미완(2026 시점에서도 진행 중일 수 있음 — 확인 필요).
- **무료 사이트 본문 전체 호스팅**: ✅
- **결론**: PD가 보장된 또 하나의 안전 선택지. 다만 현재 구약 미완 비중이 있으므로 **단독 본문보다는 보조**로 운용 권장.
- **출처**: <https://openenglishbible.org>

---

## 2. 한국어 성경 번역본 (한국어 대역용)

| 약칭 | 저작권 | 무료 웹 사용 | Verdict |
|------|--------|--------------|---------|
| **개역개정** | 대한성서공회 (1998 개정) | ❌ 비상업 인용도 별도 허락 필요 | ⚠️ 신중 |
| **개역한글** | 대한성서공회 (1961) — PD 여부 논쟁 있음 | ⚠️ 한국 내 호스팅은 위험 | ⚠️ 확인 필요 |
| **새번역** | 대한성서공회 (2001) | ❌ 별도 허락 | ⚠️ |
| **공동번역** | 대한성서공회 (1977/1999 개정) | ❌ 별도 허락 | ⚠️ |
| **쉬운성경** | 아가페출판사 | ❌ | ❌ |
| **현대인의성경** | 생명의말씀사 | ❌ | ❌ |

### 한국어 측 핵심 포인트
- **대한성서공회는 한국 내 거의 모든 주요 번역본의 저작권을 보유**하며 무료 웹 호스팅에 대해 보수적입니다. 대한성서공회 신청 절차: <https://www.bskorea.or.kr/about/copyright.aspx> (실제 URL 확인 필요).
- **개역한글(1961)**은 발행 시점이 60년 이상 지나 한국 저작권법(저자 사망 후 70년)을 따져야 하나, **번역물의 저자성이 단체(법인)인 경우 발표 후 70년**이라 **2031년경 PD 진입 가능성** 논의가 있음. 2026년 5월 현재 PD 단정 불가 → **확인 필요**.
- **추천**: 대한성서공회 산하 **bskorea.or.kr 또는 KOR API** 사용 + 짧은 인용만. 한국어 본문 전체 호스팅은 **하지 않음**.
- **대안 (PD 한국어 성경)**:
  - **한국어 성경 (Korean Bible) — 1910년대 구역(舊譯) / "셩경젼셔"**: 일부 PD화. 그러나 어휘가 19세기말 조선어라 중학생에게 부적합.
  - **현실적 권고**: 한국어 측은 **"학습용 짧은 인용 + 자체 한국어 해설"** 구조로 우회. 본문 전체를 한국어로 노출할 필요가 있다면 대한성서공회 비상업 라이선스를 정식 신청.

---

## 3. 성경 본문 API

| API | 무료 한도 | 제공 번역 | 표기 의무 | Verdict |
|-----|-----------|-----------|-----------|---------|
| **API.Bible** (scripture.api.bible) | 5,000 req/day (확인 필요), 무료 키 발급 | 2,500+ 번역 (NIV는 미포함, ESV 미포함, KJV/ASV/WEB/BBE 등 PD 포함) | 각 번역별 별도 표기 | ✅ 추천 |
| **bible-api.com** | 완전 무료, 무제한 (속도 매너) | WEB(기본), KJV, BBE, ASV, OEB 등 PD만 | 출처 표기 권장 | ✅ 가장 단순 |
| **ESV API** (api.esv.org) | 무료 키, 5,000 req/day, 캐시 금지 | ESV만 | ESV 표기 의무 | ⚠️ 캐시 금지 강함 |
| **bolls.life** | 무료, 자체 호스팅도 가능 | 다국어, KJV/WEB 등 PD + 일부 비PD(자체 위험) | 사이트 정책 확인 | ⚠️ 라이선스 출처 불투명 — 확인 필요 |
| **YouVersion API** | **공개 API 없음**. 파트너 전용 (앱 통합 SDK 일부) | — | — | ❌ 사용 불가 |
| **Crosswire/SWORD** | 모듈 다운로드 (서버용 라이브러리 sword) | PD 본문 다수 | 모듈별 상이 | ✅ 자체 서버용 |

### 한국어 API
- **공식 한국 무료 API는 사실상 부재**. 대한성서공회는 공개 REST API를 운영하지 않음 (확인 필요).
- **대안**: API.Bible의 한국어 항목 — "Korean Revised Version" 등록 여부 확인 필요. **bolls.life**에 일부 한국어 번역이 있으나 출처 라이선스 불투명 → 직접 사용 권장 안 함.
- **권고**: 한국어는 자체 DB로 **단어/구절 단위 짧은 인용**만 보관, 풀 텍스트 미노출.

---

## 4. 오디오 성경

| 솔루션 | 비용 | 다국어 | 형태 | Verdict |
|--------|------|--------|------|---------|
| **Faith Comes By Hearing / Bible.is API** | **무료 (비상업/사역 신청)** | 1,800+ 언어, 한국어·영어 다수 | 드라마타이즈드 + 일반 낭독 | ✅ 1순위 |
| **Web Speech API (브라우저 TTS)** | 무료 | 브라우저 의존 (Chrome/Safari Korean·English 양호) | 합성 음성, 저품질 | ✅ 폴백 |
| **OpenAI TTS** | 유료 ($15/1M chars 수준, 시점 따라 변동) | 다국어 | 고품질 합성 | ❌ 무료 사이트엔 부적합 |
| **ElevenLabs** | 유료 (무료 한도 매우 작음) | 다국어 | 최고 품질 합성 | ❌ 운영비 부담 |
| **Google Cloud TTS / Azure TTS** | 유료(소액 무료 한도) | 다국어 | 합성 | ⚠️ 확장 시 고려 |

### Bible.is / FCBH 핵심
- **API**: <https://www.faithcomesbyhearing.com/audio-bible-resources/digital-bible-platform>
- **Digital Bible Platform (DBP)** 키 발급 필요, 비상업/사역은 무상.
- **저작권**: 각 오디오는 해당 번역본 저작권 + 녹음 저작권. 스트리밍은 허용, **다운로드/재배포 금지**가 일반.
- **결론**: 스트리밍 임베드만 사용. 한국어 오디오 성경 + 영어(NIV/ESV/KJV) 모두 가능.

### Web Speech API
- **장점**: 0원, 키 불필요, 즉시 사용. EFL 학습자에게 발음 보조로 충분.
- **단점**: 브라우저별 음질 편차, 한국어 음성은 PD 본문(WEB·BBE)을 읽을 때 영어 발음 학습용으로는 OK, 한국어 측은 자연스러움 부족.

---

## 5. Public Domain 성경 일러스트

| 콜렉션 | 출처/포맷 | 상태 | 추천도 |
|--------|-----------|------|--------|
| **Gustave Doré 'The Holy Bible' (1866)** 판화 | 흑백 동판화 ~241점 | PD (저자 1883 사망, 100년 이상) | ✅ 최고 |
| **James Tissot 'The Life of Christ' (1886–1894)** | 수채 ~350점, 브루클린 박물관 소장 | PD (저자 1902 사망) | ✅ |
| **Julius Schnorr von Carolsfeld 'Die Bibel in Bildern' (1860)** | 목판 ~240점 | PD | ✅ |
| **Wikimedia Commons — Category: Bible illustrations** | 다양 | 대부분 PD/CC | ✅ |
| **Pitts Theology Library Digital Image Archive** (Emory) | 5만+ 이미지 | 대부분 PD | ✅ |
| **Internet Archive — Bible illustrated editions** | 스캔 PDF/JP2 | PD | ✅ |
| **The Yorck Project** (10,000명화 DVD) | 디지털 명화, Wikimedia에 다수 | PD | ✅ |

### 다운로드 링크
- Doré: <https://commons.wikimedia.org/wiki/Category:Bible_illustrations_by_Gustave_Dor%C3%A9>
- Tissot: <https://www.brooklynmuseum.org/opencollection/collections/4> (Brooklyn Museum, PD 다수, 고해상)
- Schnorr: <https://commons.wikimedia.org/wiki/Category:Bilder_zu_der_Bibel_(Schnorr_von_Carolsfeld)>
- Pitts: <https://pitts.emory.edu/dia/>

### 추천 운용
- **메인 일러스트**: **Doré + Tissot** 조합. Doré는 흑백 강렬한 분위기(구약 서사·예언서에 최적), Tissot는 컬러 수채(예수 생애·복음서에 최적).
- 중학생 친화 모던 스타일이 필요하면 **자체 제작(생성형 AI는 모델별 라이선스 별도 확인) + Unsplash/Pexels의 자연/문화권 사진** 보조.
- **Wikimedia Commons에서 받을 때 항상 라이선스 탭 직접 확인** — "PD-Art"/"PD-old"/"CC0"만 무료 사이트에 안전.

---

## 6. 최종 권고 (200단어 요약)

본 프로젝트(한국 중학생용 무료 영어 성경공부 사이트, 광고/구독 없음)에서는 **저작권 위험 0**과 **EFL 학습 접근성**이라는 두 축이 가장 중요합니다.

- **영어 본문 메인**: **WEB (World English Bible)** — 의도적 Public Domain, 현대 영어, API.Bible/bible-api.com/eBible.org 모두 지원. 본문 전체를 자체 DB에 안전하게 저장·노출 가능.
- **영어 본문 보조 (쉬운 레벨)**: **BBE (Bible in Basic English)** — 약 1,000개 기본 단어로 작성되어 중학생 EFL 학습자에게 이상적. PD로 광범위 통용되나 배포 직전 한 번 더 확인 권장.
- **영어 본문 학술 비교용**: **KJV·ASV** PD 두 종을 비교탭에 노출. NIV/ESV/NLT는 절대 전면 호스팅 금지, 짧은 학습 인용도 한도 내에서만.
- **한국어 측**: 대한성서공회 번역(개역개정·새번역 등) **전체 호스팅 불가**. 본문은 노출하지 않고 **자체 한국어 해설·요약**으로 대체. 짧은 비교 인용이 꼭 필요하면 대한성서공회에 비상업 라이선스를 별도 신청.
- **오디오**: **Faith Comes By Hearing(Bible.is) DBP API** 무료 사역 키로 스트리밍, 미지원 절은 **Web Speech API**로 폴백.
- **일러스트**: **Gustave Doré + James Tissot** PD 콜렉션을 Wikimedia/Brooklyn Museum에서 고해상 다운로드해 사용.

이 조합이라면 라이선스 비용 0원, 법적 위험 최소, 학습자 친화 콘텐츠를 동시에 달성할 수 있습니다. 각 라이선스 조항은 **배포 직전 공식 페이지에서 한 번 더 검증**하십시오 ("확인 필요" 표시 항목 우선).

---

## 부록 A. 표기 의무(Attribution) 템플릿

```
WEB:  Scripture quotations are from the World English Bible (WEB), which is in the Public Domain.
KJV:  Scripture quotations are from the King James Version (KJV), Public Domain.
BBE:  Scripture quotations are from the Bible in Basic English (BBE), Public Domain.
ASV:  Scripture quotations are from the American Standard Version (ASV, 1901), Public Domain.
OEB:  Scripture quotations are from the Open English Bible (OEB), released under CC0.
NET:  Scripture quoted by permission. Quotations designated (NET) are from the NET Bible® copyright ©1996, 2019 by Biblical Studies Press, L.L.C. http://netbible.com All rights reserved.
```

## 부록 B. 재검증 체크리스트 (배포 전)

- [ ] biblica.com/permissions — NIV 500절·25%·50% 한도가 그대로인가
- [ ] crossway.org/permissions — ESV 1,000절 한도와 API 약관(캐시 금지) 변경 여부
- [ ] tyndale.com/permissions — NLT/ICB 한도 표 최신본
- [ ] ebible.org — WEB·BBE·OEB 라이선스 표기 변경 여부
- [ ] netbible.com/net-bible-copyright — Ministry First 조항 갱신
- [ ] api.esv.org/docs — 일일 호출 한도, 캐시 정책
- [ ] scripture.api.bible — 무료 키 한도, 한국어 번역 등록 현황
- [ ] bskorea.or.kr — 한국어 번역 비상업 라이선스 절차
- [ ] faithcomesbyhearing.com/dbp — 오디오 API 키 신청 절차

## 부록 C. 본 문서의 한계

- 2026-05-03 작성 시점에 도구 권한 제약으로 **공식 페이지 직접 검증을 수행하지 못했습니다.** "확인 필요" 표시 항목은 작성자 지식 기반 추정이므로, 본 사이트의 법적 운영 책임을 지기 전 반드시 위 부록 B의 모든 URL을 사람이 직접 열어 확인할 것.
- 라이선스 조항은 매년 1–2회 개정되는 경우가 흔합니다. 사이트 런칭 후에도 **연 1회 정기 재검증**을 권장합니다.
