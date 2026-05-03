export type WordDef = {
  word: string
  meaning: string
  pronunciation: string
  example?: string
}

export type Sentence = {
  korean: string
  reference: string
  english: string
  words: WordDef[]
}

export type QuizQuestion = {
  question: string
  options: string[]
  correctIndex: number
  explanation?: string
}

export type LessonSource = {
  label: string
  url: string
}

export type Lesson = {
  id: string
  storyId: string
  lessonNum: number
  title: string
  titleKr: string
  description: string
  estimatedMinutes: number
  source: LessonSource
  sentences: Sentence[]
  quiz: QuizQuestion[]
}

export type Story = {
  id: string
  title: string
  titleKr: string
  emoji: string
  cover: string
  description: string
  totalLessons: number
  order: number
}

export const stories: Story[] = [
  {
    id: 'creation',
    title: 'In the Beginning',
    titleKr: '천지창조',
    emoji: '✦',
    cover: 'from-amber-100 via-rose-100 to-blue-100',
    description: '하나님이 세상을 만드신 첫 사흘. 빛이 생기고, 하늘이 펼쳐지고, 땅과 바다가 나뉘어요.',
    totalLessons: 1,
    order: 1,
  },
  {
    id: 'david',
    title: 'David and Goliath',
    titleKr: '다윗과 골리앗',
    emoji: '⚔️',
    cover: 'from-stone-200 via-amber-100 to-rose-200',
    description: '거인 골리앗 앞에 선 어린 양치기 소년 다윗. 약자가 거인을 이기는 이야기.',
    totalLessons: 2,
    order: 2,
  },
  {
    id: 'noah',
    title: "Noah's Ark",
    titleKr: '노아의 방주',
    emoji: '🌈',
    cover: 'from-sky-100 via-blue-100 to-indigo-100',
    description: '세상이 어두워졌을 때, 하나님과 함께 걷던 한 사람이 있었어요. 큰 배를 짓는 이야기.',
    totalLessons: 3,
    order: 3,
  },
  {
    id: 'jonah',
    title: 'Jonah and the Big Fish',
    titleKr: '요나와 큰 물고기',
    emoji: '🐋',
    cover: 'from-cyan-100 via-blue-100 to-indigo-100',
    description: '하나님으로부터 도망친 요나, 폭풍, 큰 물고기, 그리고 도시 전체가 변하는 이야기.',
    totalLessons: 3,
    order: 4,
  },
  {
    id: 'daniel',
    title: "Daniel in the Lions' Den",
    titleKr: '다니엘과 사자굴',
    emoji: '🦁',
    cover: 'from-orange-100 via-amber-100 to-yellow-100',
    description: '왕의 사랑을 받던 다니엘이 함정에 빠지고, 사자굴에서 밤을 보내는 이야기.',
    totalLessons: 2,
    order: 5,
  },
]

export const creationLesson1: Lesson = {
  id: 'creation-1',
  storyId: 'creation',
  lessonNum: 1,
  title: 'In the Beginning',
  titleKr: '천지창조 — 첫째부터 셋째 날',
  description: '하나님이 세상을 만드신 첫 사흘. 빛이 생기고, 하늘이 펼쳐지고, 땅과 바다가 나뉘어요.',
  estimatedMinutes: 5,
  source: {
    label: 'Genesis 1:1–13, World English Bible (WEB) — Public Domain',
    url: 'https://ebible.org/web/GEN01.htm',
  },
  sentences: [
    {
      korean: '맨 처음에 하나님이 하늘과 땅을 만드셨어요.',
      reference: 'Genesis 1:1',
      english: 'In the beginning, God created the heavens and the earth.',
      words: [
        {
          word: 'beginning',
          meaning: '시작',
          pronunciation: '/bɪˈɡɪnɪŋ/',
          example: 'in the beginning — 처음에',
        },
        {
          word: 'created',
          meaning: '창조했다, 만들었다',
          pronunciation: '/kriˈeɪtɪd/',
        },
        {
          word: 'heavens',
          meaning: '하늘 (복수형, 시적 표현)',
          pronunciation: '/ˈhɛvənz/',
        },
        {
          word: 'earth',
          meaning: '땅, 지구',
          pronunciation: '/ɜːrθ/',
        },
      ],
    },
    {
      korean: '땅은 텅 비고 모양도 없었어요. 깊은 물 위는 캄캄했어요.',
      reference: 'Genesis 1:2a',
      english: 'The earth was formless and empty. Darkness was on the surface of the deep.',
      words: [
        {
          word: 'formless',
          meaning: '모양이 없는',
          pronunciation: '/ˈfɔːrmləs/',
        },
        {
          word: 'empty',
          meaning: '비어 있는',
          pronunciation: '/ˈɛmpti/',
        },
        {
          word: 'darkness',
          meaning: '어둠',
          pronunciation: '/ˈdɑːrknəs/',
        },
        {
          word: 'surface',
          meaning: '표면, ~위',
          pronunciation: '/ˈsɜːrfəs/',
        },
        {
          word: 'deep',
          meaning: '깊은 곳, 심해',
          pronunciation: '/diːp/',
        },
      ],
    },
    {
      korean: '하나님의 영이 그 물 위를 움직이고 계셨어요.',
      reference: 'Genesis 1:2b',
      english: "God's Spirit was hovering over the surface of the waters.",
      words: [
        {
          word: 'Spirit',
          meaning: '영, 영혼',
          pronunciation: '/ˈspɪrɪt/',
        },
        {
          word: 'hovering',
          meaning: '맴도는, 떠다니는',
          pronunciation: '/ˈhʌvərɪŋ/',
        },
        {
          word: 'surface',
          meaning: '표면',
          pronunciation: '/ˈsɜːrfəs/',
        },
        {
          word: 'waters',
          meaning: '물 (복수형)',
          pronunciation: '/ˈwɔːtərz/',
        },
      ],
    },
    {
      korean: '하나님이 "빛이 있으라" 하시니, 빛이 생겼어요.',
      reference: 'Genesis 1:3',
      english: 'God said, "Let there be light," and there was light.',
      words: [
        {
          word: 'Let',
          meaning: '~하게 하라 (명령)',
          pronunciation: '/lɛt/',
          example: 'Let there be light. — 빛이 있으라.',
        },
        {
          word: 'light',
          meaning: '빛',
          pronunciation: '/laɪt/',
        },
      ],
    },
    {
      korean: '하나님이 빛을 보시고 "좋다"고 하셨어요. 그리고 빛과 어둠을 나누셨어요.',
      reference: 'Genesis 1:4',
      english: 'God saw the light, and saw that it was good. God divided the light from the darkness.',
      words: [
        {
          word: 'saw',
          meaning: '보았다 (see의 과거형)',
          pronunciation: '/sɔː/',
        },
        {
          word: 'good',
          meaning: '좋은',
          pronunciation: '/ɡʊd/',
        },
        {
          word: 'divided',
          meaning: '나누었다 (divide의 과거형)',
          pronunciation: '/dɪˈvaɪdɪd/',
        },
        {
          word: 'darkness',
          meaning: '어둠',
          pronunciation: '/ˈdɑːrknəs/',
        },
      ],
    },
    {
      korean: '하나님은 빛을 "낮", 어둠을 "밤"이라고 부르셨어요. 저녁이 되고 아침이 되니 — 첫째 날이었어요.',
      reference: 'Genesis 1:5',
      english: 'God called the light "day", and the darkness he called "night". There was evening and there was morning, the first day.',
      words: [
        {
          word: 'called',
          meaning: '불렀다, 이름 붙였다',
          pronunciation: '/kɔːld/',
        },
        {
          word: 'darkness',
          meaning: '어둠',
          pronunciation: '/ˈdɑːrknəs/',
        },
        {
          word: 'evening',
          meaning: '저녁',
          pronunciation: '/ˈiːvnɪŋ/',
        },
        {
          word: 'morning',
          meaning: '아침',
          pronunciation: '/ˈmɔːrnɪŋ/',
        },
      ],
    },
    {
      korean: '하나님이 "물 위에 단단한 둥근 천장이 있어 물과 물을 나누어라" 하셨어요.',
      reference: 'Genesis 1:6',
      english: 'God said, "Let there be an expanse in the middle of the waters, and let it divide the waters from the waters."',
      words: [
        {
          word: 'expanse',
          meaning: '광활한 공간, (성경) 궁창',
          pronunciation: '/ɪkˈspæns/',
        },
        {
          word: 'middle',
          meaning: '가운데',
          pronunciation: '/ˈmɪdl/',
        },
        {
          word: 'divide',
          meaning: '나누다',
          pronunciation: '/dɪˈvaɪd/',
        },
      ],
    },
    {
      korean: '하나님은 그 둥근 천장을 "하늘"이라 부르셨어요. 저녁이 되고 아침이 되니 — 둘째 날이었어요.',
      reference: 'Genesis 1:8',
      english: 'God called the expanse "sky". There was evening and there was morning, a second day.',
      words: [
        {
          word: 'expanse',
          meaning: '광활한 공간, (성경) 궁창',
          pronunciation: '/ɪkˈspæns/',
        },
        {
          word: 'sky',
          meaning: '하늘',
          pronunciation: '/skaɪ/',
        },
        {
          word: 'second',
          meaning: '둘째, 두 번째',
          pronunciation: '/ˈsɛkənd/',
        },
      ],
    },
    {
      korean: '하나님이 "하늘 아래 물이 한 곳에 모이고, 마른 땅이 보이게 하라" 하셨어요. 그대로 되었어요.',
      reference: 'Genesis 1:9',
      english: 'God said, "Let the waters under the sky be gathered together to one place, and let the dry land appear," and it was so.',
      words: [
        {
          word: 'gathered',
          meaning: '모였다, 모은',
          pronunciation: '/ˈɡæðərd/',
        },
        {
          word: 'together',
          meaning: '함께',
          pronunciation: '/təˈɡɛðər/',
        },
        {
          word: 'dry',
          meaning: '마른',
          pronunciation: '/draɪ/',
        },
        {
          word: 'appear',
          meaning: '나타나다',
          pronunciation: '/əˈpɪər/',
        },
      ],
    },
    {
      korean: '마른 땅은 "땅"이라 불렸고, 한 곳에 모인 물은 "바다"라 불렸어요. 하나님이 보시기에 좋았어요.',
      reference: 'Genesis 1:10',
      english: 'God called the dry land "earth", and the gathering of the waters he called "seas". God saw that it was good.',
      words: [
        {
          word: 'called',
          meaning: '불렀다, 이름 붙였다',
          pronunciation: '/kɔːld/',
        },
        {
          word: 'gathering',
          meaning: '모임, 모인 곳',
          pronunciation: '/ˈɡæðərɪŋ/',
        },
        {
          word: 'seas',
          meaning: '바다 (복수형)',
          pronunciation: '/siːz/',
        },
      ],
    },
    {
      korean: '하나님이 "땅 위에 풀이 자라고, 씨를 맺는 식물과 열매를 맺는 나무가 자라라" 하셨어요.',
      reference: 'Genesis 1:11',
      english: 'God said, "Let the earth yield grass, herbs yielding seeds, and fruit trees bearing fruit."',
      words: [
        {
          word: 'yield',
          meaning: '내다, 만들어내다',
          pronunciation: '/jiːld/',
        },
        {
          word: 'grass',
          meaning: '풀',
          pronunciation: '/ɡræs/',
        },
        {
          word: 'herbs',
          meaning: '식물들, 풀',
          pronunciation: '/ɜːrbz/',
        },
        {
          word: 'yielding',
          meaning: '내는, 만들어내는',
          pronunciation: '/ˈjiːldɪŋ/',
        },
        {
          word: 'seeds',
          meaning: '씨앗들',
          pronunciation: '/siːdz/',
        },
        {
          word: 'bearing',
          meaning: '맺는, 가지고 있는',
          pronunciation: '/ˈbɛərɪŋ/',
        },
        {
          word: 'fruit',
          meaning: '열매',
          pronunciation: '/fruːt/',
        },
      ],
    },
    {
      korean: '저녁이 되고 아침이 되니 — 셋째 날이었어요.',
      reference: 'Genesis 1:13',
      english: 'There was evening and there was morning, a third day.',
      words: [
        {
          word: 'evening',
          meaning: '저녁',
          pronunciation: '/ˈiːvnɪŋ/',
        },
        {
          word: 'morning',
          meaning: '아침',
          pronunciation: '/ˈmɔːrnɪŋ/',
        },
        {
          word: 'third',
          meaning: '셋째, 세 번째',
          pronunciation: '/θɜːrd/',
        },
      ],
    },
  ],
  quiz: [
    {
      question: '하나님이 첫째 날에 만드신 것은 무엇일까요?',
      options: [
        '빛 (light)',
        '바다 (seas)',
        '나무 (trees)',
        '하늘 (heaven)',
      ],
      correctIndex: 0,
      explanation: 'Day 1: "Let there be light." — 빛이 있으라!',
    },
    {
      question: '본문에서 "둥근 천장 / 궁창"을 의미하는 단어는?',
      options: [
        'arch / expanse',
        'earth',
        'fruit',
        'seed',
      ],
      correctIndex: 0,
      explanation: '쉬움(BBE)에서는 arch, 보통(WEB)에서는 expanse. 둘 다 하나님이 만드신 "하늘(sky / heaven)"을 가리켜요.',
    },
    {
      question: '셋째 날에 만들어지지 않은 것은?',
      options: [
        '마른 땅 (dry land)',
        '바다 (seas)',
        '풀과 나무 (grass and trees)',
        '해와 달 (sun and moon)',
      ],
      correctIndex: 3,
      explanation: '해와 달은 넷째 날에 만드셨어요 — 다음 lesson에서 만나요!',
    },
  ],
}

export const davidLesson1: Lesson = {
  id: 'david-1',
  storyId: 'david',
  lessonNum: 1,
  title: 'David Meets the Giant',
  titleKr: '다윗, 거인을 만나다',
  description: '이스라엘과 블레셋의 전쟁터. 거인 골리앗이 매일 외친다. 어린 양치기 소년 다윗이 그 앞에 선다.',
  estimatedMinutes: 5,
  source: {
    label: '1 Samuel 17, World English Bible (WEB) — Public Domain',
    url: 'https://ebible.org/web/1SA17.htm',
  },
  sentences: [
    {
      korean: '이스라엘과 블레셋이 전쟁 중이었어요.',
      reference: '1 Samuel 17:1',
      english: 'Israel and the Philistines were gathered for battle.',
      words: [
        {
          word: 'gathered',
          meaning: '모였다, 모인',
          pronunciation: '/ˈɡæðərd/',
        },
        {
          word: 'battle',
          meaning: '전투',
          pronunciation: '/ˈbætl/',
        },
        {
          word: 'Philistines',
          meaning: '블레셋 사람들',
          pronunciation: '/ˈfɪlɪˌstaɪnz/',
        },
      ],
    },
    {
      korean: '블레셋 진영에서 골리앗이라는 거인이 나왔어요. 키가 아주 크고 아주 강했어요.',
      reference: '1 Samuel 17:4',
      english: 'A champion came out from the camp of the Philistines, named Goliath. He was tall and powerful.',
      words: [
        {
          word: 'champion',
          meaning: '대표 전사, 챔피언',
          pronunciation: '/ˈtʃæmpiən/',
        },
        {
          word: 'camp',
          meaning: '진영, 야영지',
          pronunciation: '/kæmp/',
        },
        {
          word: 'tall',
          meaning: '키가 큰',
          pronunciation: '/tɔːl/',
        },
        {
          word: 'powerful',
          meaning: '힘센, 강력한',
          pronunciation: '/ˈpaʊərfəl/',
        },
      ],
    },
    {
      korean: '매일 골리앗은 이스라엘 군대를 향해 외쳤어요. "나와 싸울 사람을 보내라!"',
      reference: '1 Samuel 17:8–10',
      english: 'Each day Goliath challenged the armies of Israel, shouting, "Choose a man to fight me!"',
      words: [
        {
          word: 'each',
          meaning: '각각의',
          pronunciation: '/iːtʃ/',
        },
        {
          word: 'challenged',
          meaning: '도전했다 (challenge의 과거형)',
          pronunciation: '/ˈtʃælɪndʒd/',
        },
        {
          word: 'armies',
          meaning: '군대들',
          pronunciation: '/ˈɑːrmiz/',
        },
        {
          word: 'choose',
          meaning: '고르다, 선택하다',
          pronunciation: '/tʃuːz/',
        },
        {
          word: 'fight',
          meaning: '싸우다',
          pronunciation: '/faɪt/',
        },
      ],
    },
    {
      korean: '이스라엘 사람들은 그 말을 듣고 두려움에 떨었어요.',
      reference: '1 Samuel 17:11',
      english: 'When the men of Israel heard him, they were dismayed and greatly afraid.',
      words: [
        {
          word: 'heard',
          meaning: '들었다 (hear의 과거형)',
          pronunciation: '/hɜːrd/',
        },
        {
          word: 'dismayed',
          meaning: '당황한, 낙담한',
          pronunciation: '/dɪsˈmeɪd/',
        },
        {
          word: 'greatly',
          meaning: '크게, 매우',
          pronunciation: '/ˈɡreɪtli/',
        },
        {
          word: 'afraid',
          meaning: '두려워하는',
          pronunciation: '/əˈfreɪd/',
        },
      ],
    },
    {
      korean: '다윗은 어린 양치기 소년이었고, 집안의 막내였어요.',
      reference: '1 Samuel 17:14',
      english: "David was the youngest of eight brothers, and he kept his father's sheep.",
      words: [
        {
          word: 'youngest',
          meaning: '가장 어린, 막내',
          pronunciation: '/ˈjʌŋɡəst/',
        },
        {
          word: 'eight',
          meaning: '여덟',
          pronunciation: '/eɪt/',
        },
        {
          word: 'kept',
          meaning: '돌보았다 (keep의 과거형)',
          pronunciation: '/kɛpt/',
        },
        {
          word: 'sheep',
          meaning: '양',
          pronunciation: '/ʃiːp/',
        },
      ],
    },
    {
      korean: '다윗의 형 셋은 군인으로 군대에 있었어요.',
      reference: '1 Samuel 17:13',
      english: 'His three eldest brothers had followed Saul to the battle.',
      words: [
        {
          word: 'eldest',
          meaning: '가장 나이 많은',
          pronunciation: '/ˈɛldəst/',
        },
        {
          word: 'followed',
          meaning: '따라갔다 (follow의 과거형)',
          pronunciation: '/ˈfɒloʊd/',
        },
        {
          word: 'battle',
          meaning: '전투',
          pronunciation: '/ˈbætl/',
        },
      ],
    },
    {
      korean: '어느 날 다윗의 아버지가 말했어요. "이 빵을 진영에 있는 형들에게 가져다주렴."',
      reference: '1 Samuel 17:17',
      english: 'Jesse said to his son David, "Carry this bread quickly to your brothers at the camp."',
      words: [
        {
          word: 'Jesse',
          meaning: '이새 (다윗의 아버지 이름)',
          pronunciation: '/ˈdʒɛsi/',
        },
        {
          word: 'carry',
          meaning: '가지고 가다, 운반하다',
          pronunciation: '/ˈkæri/',
        },
        {
          word: 'quickly',
          meaning: '빨리',
          pronunciation: '/ˈkwɪkli/',
        },
        {
          word: 'camp',
          meaning: '진영',
          pronunciation: '/kæmp/',
        },
      ],
    },
    {
      korean: '다윗이 진영에 도착했을 때, 골리앗이 외치는 소리를 듣고 이스라엘 사람들이 두려워서 도망가는 모습을 보았어요.',
      reference: '1 Samuel 17:23–24',
      english: "When David arrived at the camp, he heard the giant's challenge and saw the men of Israel flee in terror.",
      words: [
        {
          word: 'arrived',
          meaning: '도착했다 (arrive의 과거형)',
          pronunciation: '/əˈraɪvd/',
        },
        {
          word: 'challenge',
          meaning: '도전, 도발',
          pronunciation: '/ˈtʃælɪndʒ/',
        },
        {
          word: 'flee',
          meaning: '도망치다',
          pronunciation: '/fliː/',
        },
        {
          word: 'terror',
          meaning: '극심한 공포',
          pronunciation: '/ˈtɛrər/',
        },
      ],
    },
    {
      korean: '다윗이 말했어요. "이스라엘의 하나님께 함부로 말하는 이 사람은 누구입니까?"',
      reference: '1 Samuel 17:26',
      english: 'David asked, "Who is this man who defies the armies of the living God?"',
      words: [
        {
          word: 'asked',
          meaning: '물었다 (ask의 과거형)',
          pronunciation: '/æskt/',
        },
        {
          word: 'defies',
          meaning: '맞선다, 거역한다',
          pronunciation: '/dɪˈfaɪz/',
        },
        {
          word: 'armies',
          meaning: '군대들',
          pronunciation: '/ˈɑːrmiz/',
        },
        {
          word: 'living',
          meaning: '살아 계신, 살아있는',
          pronunciation: '/ˈlɪvɪŋ/',
        },
      ],
    },
    {
      korean: '사울 왕이 다윗에 대한 이야기를 듣고 그를 불렀어요.',
      reference: '1 Samuel 17:31',
      english: 'When King Saul was told what David had said, he sent for him.',
      words: [
        {
          word: 'told',
          meaning: '말해졌다 (tell의 과거 수동형)',
          pronunciation: '/toʊld/',
        },
        {
          word: 'sent',
          meaning: '보냈다 (send의 과거형)',
          pronunciation: '/sɛnt/',
          example: 'sent for him — 그를 부르러 사람을 보냈다',
        },
      ],
    },
    {
      korean: '다윗이 왕에게 말했어요. "두려워하지 마세요. 제가 가서 그와 싸우겠습니다."',
      reference: '1 Samuel 17:32',
      english: "David said to Saul, \"Let no one's heart fail. Your servant will go and fight this Philistine.\"",
      words: [
        {
          word: 'heart',
          meaning: '마음, 심장',
          pronunciation: '/hɑːrt/',
        },
        {
          word: 'fail',
          meaning: '약해지다, 실패하다',
          pronunciation: '/feɪl/',
          example: 'heart fail — 마음이 무너지다',
        },
        {
          word: 'servant',
          meaning: '종, 하인',
          pronunciation: '/ˈsɜːrvənt/',
        },
      ],
    },
    {
      korean: '사울이 말했어요. "너는 아직 어린 소년이다. 그는 오랜 세월 전쟁한 사람이다."',
      reference: '1 Samuel 17:33',
      english: "Saul said, \"You can't go to fight him. You are just a boy, and he has been a warrior since his youth.\"",
      words: [
        {
          word: 'just',
          meaning: '단지, 그저',
          pronunciation: '/dʒʌst/',
        },
        {
          word: 'warrior',
          meaning: '전사',
          pronunciation: '/ˈwɔːriər/',
        },
        {
          word: 'since',
          meaning: '~부터, 이후로',
          pronunciation: '/sɪns/',
        },
        {
          word: 'youth',
          meaning: '젊은 시절, 청년기',
          pronunciation: '/juːθ/',
        },
      ],
    },
    {
      korean: '다윗이 말했어요. "사자가 양 떼에서 양 한 마리를 물어갔을 때, 제가 그 사자를 죽였어요. 하나님이 이 거인에게서도 저를 구해주실 거예요."',
      reference: '1 Samuel 17:34–37',
      english: 'David replied, "When a lion took a lamb from the flock, I struck it down and killed it. The Lord who saved me from the lion will save me from this Philistine."',
      words: [
        {
          word: 'replied',
          meaning: '대답했다 (reply의 과거형)',
          pronunciation: '/rɪˈplaɪd/',
        },
        {
          word: 'lamb',
          meaning: '어린 양',
          pronunciation: '/læm/',
        },
        {
          word: 'flock',
          meaning: '양 떼',
          pronunciation: '/flɒk/',
        },
        {
          word: 'struck',
          meaning: '쳤다, 때렸다 (strike의 과거형)',
          pronunciation: '/strʌk/',
        },
        {
          word: 'Lord',
          meaning: '주, 여호와',
          pronunciation: '/lɔːrd/',
        },
      ],
    },
    {
      korean: '그래서 사울이 말했어요. "가거라. 하나님이 너와 함께 하시기를."',
      reference: '1 Samuel 17:37',
      english: 'Saul said, "Go, and may the Lord be with you."',
      words: [
        {
          word: 'Lord',
          meaning: '주, 여호와',
          pronunciation: '/lɔːrd/',
        },
        {
          word: 'may',
          meaning: '~하시기를 (소망)',
          pronunciation: '/meɪ/',
        },
      ],
    },
  ],
  quiz: [
    {
      question: '골리앗은 어떤 사람이었을까요?',
      options: [
        '키가 매우 크고 강한 거인',
        '어린 양치기 소년',
        '이스라엘의 왕',
        '다윗의 아버지',
      ],
      correctIndex: 0,
      explanation: 'Goliath was a giant — very tall and very strong. 매일 이스라엘 군대를 향해 외쳤어요.',
    },
    {
      question: '본문에서 "두려움"을 의미하는 단어는?',
      options: [
        'fear',
        'shepherd',
        'giant',
        'camp',
      ],
      correctIndex: 0,
      explanation: 'fear는 "두려움". 보통(WEB)에서는 "terror"(극심한 공포)도 함께 쓰여요.',
    },
    {
      question: '다윗이 사울 왕에게 자신감을 보여준 근거는?',
      options: [
        '양을 노리던 사자를 죽인 적이 있어서',
        '형들이 군인이라서',
        '키가 커서',
        '왕의 친구라서',
      ],
      correctIndex: 0,
      explanation: '다윗은 양치기로서 사자와 곰으로부터 양을 지킨 경험이 있었어요. 그 힘은 자기 것이 아니라 하나님께서 주신 것이라고 믿었어요.',
    },
  ],
}

export const davidLesson2: Lesson = {
  id: 'david-2',
  storyId: 'david',
  lessonNum: 2,
  title: 'David Wins',
  titleKr: '다윗, 거인을 이기다',
  description: '갑옷을 벗고, 시냇가 돌 다섯 개와 물매 하나로 거인 앞에 선 다윗. 결정적 한 방.',
  estimatedMinutes: 5,
  source: {
    label: '1 Samuel 17:38–52, World English Bible (WEB) — Public Domain',
    url: 'https://ebible.org/web/1SA17.htm',
  },
  sentences: [
    {
      korean: '사울이 다윗에게 자기 갑옷과 칼을 주었어요.',
      reference: '1 Samuel 17:38',
      english: 'Saul clothed David with his own armor and a bronze helmet, with a sword over the armor.',
      words: [
        {
          word: 'clothed',
          meaning: '입혔다 (clothe의 과거형)',
          pronunciation: '/kloʊðd/',
        },
        {
          word: 'armor',
          meaning: '갑옷',
          pronunciation: '/ˈɑːrmər/',
        },
        {
          word: 'bronze',
          meaning: '청동',
          pronunciation: '/brɒnz/',
        },
        {
          word: 'helmet',
          meaning: '투구, 헬멧',
          pronunciation: '/ˈhɛlmɪt/',
        },
        {
          word: 'sword',
          meaning: '칼, 검',
          pronunciation: '/sɔːrd/',
        },
      ],
    },
    {
      korean: '하지만 다윗은 무거운 갑옷을 입고 걸을 수 없었어요. 한 번도 입어본 적이 없었거든요.',
      reference: '1 Samuel 17:39',
      english: 'David tried to walk, but he could not, for he had not tested it.',
      words: [
        {
          word: 'tried',
          meaning: '시도했다 (try의 과거형)',
          pronunciation: '/traɪd/',
        },
        {
          word: 'tested',
          meaning: '시험해봤다 (test의 과거형)',
          pronunciation: '/ˈtɛstɪd/',
        },
      ],
    },
    {
      korean: '그래서 다윗은 갑옷을 벗고, 본래 모습 그대로 — 막대기를 든 양치기 소년으로 나갔어요.',
      reference: '1 Samuel 17:39–40',
      english: 'David took it all off and went as he was — a shepherd boy with his staff.',
      words: [
        {
          word: 'staff',
          meaning: '지팡이, 막대',
          pronunciation: '/stæf/',
        },
      ],
    },
    {
      korean: '다윗은 시냇가로 내려가 매끄러운 돌 다섯 개를 골랐어요.',
      reference: '1 Samuel 17:40',
      english: 'He chose five smooth stones from the brook.',
      words: [
        {
          word: 'chose',
          meaning: '골랐다 (choose의 과거형)',
          pronunciation: '/tʃoʊz/',
        },
        {
          word: 'smooth',
          meaning: '매끄러운',
          pronunciation: '/smuːð/',
        },
        {
          word: 'brook',
          meaning: '시내, 작은 개울',
          pronunciation: '/brʊk/',
        },
      ],
    },
    {
      korean: '돌들을 가방에 넣고, 손에는 물매를 들었어요.',
      reference: '1 Samuel 17:40',
      english: "He put them in his shepherd's bag, and with his sling in his hand, he drew near to the Philistine.",
      words: [
        {
          word: "shepherd's",
          meaning: '양치기의',
          pronunciation: '/ˈʃɛpərdz/',
        },
        {
          word: 'sling',
          meaning: '물매',
          pronunciation: '/slɪŋ/',
        },
        {
          word: 'drew near',
          meaning: '가까이 다가갔다',
          pronunciation: '/druː nɪər/',
        },
      ],
    },
    {
      korean: '골리앗이 다윗을 향해 다가왔어요. 거인은 그 어린 소년을 보고 비웃었어요.',
      reference: '1 Samuel 17:41–42',
      english: 'When the Philistine looked and saw David, he was angry, for David was just a young boy.',
      words: [
        {
          word: 'looked',
          meaning: '보았다 (look의 과거형)',
          pronunciation: '/lʊkt/',
        },
        {
          word: 'angry',
          meaning: '화난',
          pronunciation: '/ˈæŋɡri/',
        },
        {
          word: 'just',
          meaning: '그저, 단지',
          pronunciation: '/dʒʌst/',
        },
      ],
    },
    {
      korean: '"내가 개냐? 막대기를 들고 내게 오느냐?" 골리앗이 외쳤어요.',
      reference: '1 Samuel 17:43',
      english: 'The Philistine said, "Am I a dog, that you come at me with sticks?"',
      words: [
        {
          word: 'dog',
          meaning: '개',
          pronunciation: '/dɒɡ/',
        },
        {
          word: 'sticks',
          meaning: '막대기들',
          pronunciation: '/stɪks/',
        },
      ],
    },
    {
      korean: '다윗이 말했어요. "당신은 칼을 들고 오지만, 나는 이스라엘 하나님의 이름으로 옵니다."',
      reference: '1 Samuel 17:45',
      english: 'David replied, "You come with a sword and a spear. I come in the name of the Lord, the God of the armies of Israel."',
      words: [
        {
          word: 'replied',
          meaning: '대답했다',
          pronunciation: '/rɪˈplaɪd/',
        },
        {
          word: 'spear',
          meaning: '창',
          pronunciation: '/spɪər/',
        },
        {
          word: 'Lord',
          meaning: '주, 여호와',
          pronunciation: '/lɔːrd/',
        },
        {
          word: 'armies',
          meaning: '군대들',
          pronunciation: '/ˈɑːrmiz/',
        },
      ],
    },
    {
      korean: '"오늘 온 세상이 이스라엘에 하나님이 계심을 알게 될 것입니다."',
      reference: '1 Samuel 17:46',
      english: '"This day all the earth shall know that there is a God in Israel."',
      words: [
        {
          word: 'earth',
          meaning: '땅, 온 세상',
          pronunciation: '/ɜːrθ/',
        },
        {
          word: 'shall',
          meaning: '~할 것이다 (will의 격식체)',
          pronunciation: '/ʃæl/',
        },
        {
          word: 'know',
          meaning: '알다',
          pronunciation: '/noʊ/',
        },
      ],
    },
    {
      korean: '그러고 나서 다윗은 빠르게 거인을 향해 달려갔어요.',
      reference: '1 Samuel 17:48',
      english: 'As the Philistine arose to meet him, David ran quickly toward the battle line.',
      words: [
        {
          word: 'arose',
          meaning: '일어섰다 (arise의 과거형)',
          pronunciation: '/əˈroʊz/',
        },
        {
          word: 'meet',
          meaning: '만나다',
          pronunciation: '/miːt/',
        },
        {
          word: 'battle line',
          meaning: '전선, 전투 대열',
          pronunciation: '/ˈbætl laɪn/',
        },
      ],
    },
    {
      korean: '가방에서 돌 하나를 꺼내 물매에 넣었어요.',
      reference: '1 Samuel 17:49',
      english: 'He put his hand in his bag, took out a stone, and placed it in his sling.',
      words: [
        {
          word: 'placed',
          meaning: '놓았다 (place의 과거형)',
          pronunciation: '/pleɪst/',
        },
      ],
    },
    {
      korean: '물매를 휘둘러 돌을 날렸어요.',
      reference: '1 Samuel 17:49',
      english: 'He slung the stone, and it flew through the air.',
      words: [
        {
          word: 'slung',
          meaning: '던졌다 (sling의 과거형)',
          pronunciation: '/slʌŋ/',
        },
        {
          word: 'flew',
          meaning: '날아갔다 (fly의 과거형)',
          pronunciation: '/fluː/',
        },
        {
          word: 'air',
          meaning: '공기, 공중',
          pronunciation: '/ɛər/',
        },
      ],
    },
    {
      korean: '돌이 골리앗의 이마를 맞혔어요. 거인이 땅에 쓰러졌어요.',
      reference: '1 Samuel 17:49',
      english: "The stone struck the Philistine's forehead, and he fell face down on the ground.",
      words: [
        {
          word: 'struck',
          meaning: '쳤다, 맞혔다 (strike의 과거형)',
          pronunciation: '/strʌk/',
        },
        {
          word: 'forehead',
          meaning: '이마',
          pronunciation: '/ˈfɔːrhɛd/',
        },
        {
          word: 'face down',
          meaning: '얼굴을 아래로 하고',
          pronunciation: '/feɪs daʊn/',
        },
      ],
    },
    {
      korean: '다윗이 이겼어요. 이스라엘 군대는 기뻐서 환호성을 질렀어요.',
      reference: '1 Samuel 17:51–52',
      english: 'David defeated the giant. The army of Israel rose up and shouted in triumph.',
      words: [
        {
          word: 'defeated',
          meaning: '이겼다, 무찔렀다',
          pronunciation: '/dɪˈfiːtɪd/',
        },
        {
          word: 'rose up',
          meaning: '일어섰다',
          pronunciation: '/roʊz ʌp/',
        },
        {
          word: 'shouted',
          meaning: '소리쳤다',
          pronunciation: '/ˈʃaʊtɪd/',
        },
        {
          word: 'triumph',
          meaning: '승리',
          pronunciation: '/ˈtraɪʌmf/',
        },
      ],
    },
  ],
  quiz: [
    {
      question: '다윗은 사울 왕의 갑옷을 어떻게 했나요?',
      options: [
        '입어보고 너무 무거워서 벗었다',
        '그대로 입고 나갔다',
        '다른 군인에게 줘 버렸다',
        '집으로 가져갔다',
      ],
      correctIndex: 0,
      explanation: '다윗은 갑옷을 입어봤지만 너무 무거워 걸을 수가 없었어요. 자기 본래 모습 그대로 — 양치기 소년으로 — 나갔어요.',
    },
    {
      question: '다윗이 시냇가에서 가져온 돌은 몇 개일까요?',
      options: [
        '5개',
        '1개',
        '7개',
        '10개',
      ],
      correctIndex: 0,
      explanation: 'five smooth stones — 매끄러운 돌 다섯 개. 다윗은 그중 하나만 사용해 골리앗을 쓰러뜨렸어요.',
    },
    {
      question: '다윗이 골리앗에게 한 말의 핵심은?',
      options: [
        '"이스라엘 하나님의 이름으로 너에게 간다"',
        '"내가 더 나이가 많다"',
        '"도망쳐도 좋다, 살려주겠다"',
        '"함께 손잡고 싸우자"',
      ],
      correctIndex: 0,
      explanation: '다윗은 자기 힘이 아니라 "이스라엘 하나님의 이름"으로 싸운다고 했어요. 이 이야기의 핵심은 작은 자가 큰 자를 이긴다는 것이 아니라, 두려움을 믿음으로 마주한다는 거예요.',
    },
  ],
}

export const noahLesson1: Lesson = {
  id: 'noah-1',
  storyId: 'noah',
  lessonNum: 1,
  title: 'Noah Builds a Boat',
  titleKr: '노아, 큰 배를 짓다',
  description: '세상이 어두워졌을 때 하나님과 함께 걷던 한 사람. 큰 홍수에 대비해 거대한 방주를 짓기 시작해요.',
  estimatedMinutes: 5,
  source: {
    label: 'Genesis 6, World English Bible (WEB) — Public Domain',
    url: 'https://ebible.org/web/GEN06.htm',
  },
  sentences: [
    {
      korean: '많은 세월이 흘렀어요. 세상은 나쁜 일들로 가득 차게 되었어요.',
      reference: 'Genesis 6:5',
      english: 'Many years passed, and the wickedness of mankind grew great upon the earth.',
      words: [
        {
          word: 'wickedness',
          meaning: '악함, 사악함',
          pronunciation: '/ˈwɪkɪdnəs/',
        },
        {
          word: 'mankind',
          meaning: '인류, 사람들',
          pronunciation: '/mænˈkaɪnd/',
        },
        {
          word: 'grew',
          meaning: '커졌다 (grow의 과거형)',
          pronunciation: '/ɡruː/',
        },
        {
          word: 'upon',
          meaning: '~위에',
          pronunciation: '/əˈpɒn/',
        },
      ],
    },
    {
      korean: '사람들은 친절하지 않았어요. 서로를 다치게 했고 하나님을 잊었어요.',
      reference: 'Genesis 6:5',
      english: 'People were cruel and violent, and they had forgotten the God who made them.',
      words: [
        {
          word: 'cruel',
          meaning: '잔인한',
          pronunciation: '/ˈkruːəl/',
        },
        {
          word: 'violent',
          meaning: '폭력적인',
          pronunciation: '/ˈvaɪələnt/',
        },
        {
          word: 'forgotten',
          meaning: '잊혀진 (forget의 과거분사)',
          pronunciation: '/fərˈɡɒtn/',
        },
      ],
    },
    {
      korean: '하나님은 세상이 그렇게 된 것을 보고 슬퍼하셨어요.',
      reference: 'Genesis 6:6',
      english: "It grieved God's heart to see what the world had become.",
      words: [
        {
          word: 'grieved',
          meaning: '슬프게 했다',
          pronunciation: '/ɡriːvd/',
        },
        {
          word: 'heart',
          meaning: '마음, 심장',
          pronunciation: '/hɑːrt/',
        },
      ],
    },
    {
      korean: '하지만 하나님과 함께 걸은 한 사람이 있었어요. 그의 이름은 노아였어요.',
      reference: 'Genesis 6:9',
      english: 'But there was one man, named Noah, who walked with God and found favor in his eyes.',
      words: [
        {
          word: 'favor',
          meaning: '호의, 은혜',
          pronunciation: '/ˈfeɪvər/',
        },
        {
          word: 'eyes',
          meaning: '눈 (복수)',
          pronunciation: '/aɪz/',
        },
      ],
    },
    {
      korean: '노아는 선한 사람이었어요. 다른 사람들과 달랐어요.',
      reference: 'Genesis 6:9',
      english: 'Noah was a righteous man, blameless among the people of his time.',
      words: [
        {
          word: 'righteous',
          meaning: '의로운',
          pronunciation: '/ˈraɪtʃəs/',
        },
        {
          word: 'blameless',
          meaning: '흠 없는',
          pronunciation: '/ˈbleɪmləs/',
        },
        {
          word: 'among',
          meaning: '~사이에서',
          pronunciation: '/əˈmʌŋ/',
        },
      ],
    },
    {
      korean: '노아에게는 세 아들이 있었어요 — 셈, 함, 그리고 야벳.',
      reference: 'Genesis 6:10',
      english: 'Noah had three sons: Shem, Ham, and Japheth.',
      words: [
        {
          word: 'three',
          meaning: '셋',
          pronunciation: '/θriː/',
        },
        {
          word: 'sons',
          meaning: '아들들',
          pronunciation: '/sʌnz/',
        },
      ],
    },
    {
      korean: '하나님이 노아에게 말씀하셨어요. "내가 땅 위에 큰 홍수를 보낼 것이다."',
      reference: 'Genesis 6:13, 17',
      english: 'God said to Noah, "I am going to bring a great flood upon the earth."',
      words: [
        {
          word: 'bring',
          meaning: '가져오다, 보내다',
          pronunciation: '/brɪŋ/',
        },
        {
          word: 'flood',
          meaning: '홍수',
          pronunciation: '/flʌd/',
        },
        {
          word: 'upon',
          meaning: '~위에',
          pronunciation: '/əˈpɒn/',
        },
      ],
    },
    {
      korean: '"튼튼한 나무로 큰 배 — 방주 — 를 만들어라."',
      reference: 'Genesis 6:14',
      english: '"Make yourself an ark of cypress wood, sealed inside and out."',
      words: [
        {
          word: 'ark',
          meaning: '방주',
          pronunciation: '/ɑːrk/',
        },
        {
          word: 'cypress',
          meaning: '잣나무 (편백 종류)',
          pronunciation: '/ˈsaɪprəs/',
        },
        {
          word: 'sealed',
          meaning: '봉인된, 막은',
          pronunciation: '/siːld/',
        },
      ],
    },
    {
      korean: '"길고 높게 만들고, 안에는 방을 두고 위에는 지붕을 덮어라."',
      reference: 'Genesis 6:14–16',
      english: '"Make it long and tall, with rooms inside and a roof above."',
      words: [
        {
          word: 'rooms',
          meaning: '방들',
          pronunciation: '/ruːmz/',
        },
        {
          word: 'roof',
          meaning: '지붕',
          pronunciation: '/ruːf/',
        },
        {
          word: 'above',
          meaning: '위에',
          pronunciation: '/əˈbʌv/',
        },
      ],
    },
    {
      korean: '"너와 네 가족이 들어가고, 모든 동물을 한 쌍씩 데리고 들어가라."',
      reference: 'Genesis 6:18–19',
      english: '"You and your wife, your sons and their wives will go in, with two of every kind of animal."',
      words: [
        {
          word: 'wife',
          meaning: '아내',
          pronunciation: '/waɪf/',
        },
        {
          word: 'wives',
          meaning: '아내들',
          pronunciation: '/waɪvz/',
        },
        {
          word: 'kind',
          meaning: '종류',
          pronunciation: '/kaɪnd/',
        },
      ],
    },
    {
      korean: '그래서 노아와 아들들은 일을 시작했어요. 오랜 시간 동안 일했어요.',
      reference: 'Genesis 6:22',
      english: 'So Noah and his sons began to build. The work took many years.',
      words: [
        {
          word: 'began',
          meaning: '시작했다 (begin의 과거형)',
          pronunciation: '/bɪˈɡæn/',
        },
        {
          word: 'took',
          meaning: '걸렸다 (take의 과거형)',
          pronunciation: '/tʊk/',
        },
      ],
    },
    {
      korean: '노아는 하나님이 말씀하신 모든 것을 그대로 행했어요.',
      reference: 'Genesis 6:22',
      english: 'Noah did everything just as God had commanded him.',
      words: [
        {
          word: 'just as',
          meaning: '~한 그대로',
          pronunciation: '/dʒʌst æz/',
        },
        {
          word: 'commanded',
          meaning: '명하셨다 (command의 과거형)',
          pronunciation: '/kəˈmændɪd/',
        },
      ],
    },
  ],
  quiz: [
    {
      question: '노아는 어떤 사람이었나요?',
      options: [
        '하나님과 함께 걷는 선한 사람',
        '가장 키가 큰 군인',
        '돈이 가장 많은 상인',
        '왕의 아들',
      ],
      correctIndex: 0,
      explanation: 'Noah walked with God — 노아는 하나님과 함께 걸었어요. 다른 사람들과 다르게 산 한 사람이었어요.',
    },
    {
      question: '본문에서 "방주"를 의미하는 영어 단어는?',
      options: [
        'ark',
        'house',
        'tent',
        'room',
      ],
      correctIndex: 0,
      explanation: 'ark는 "방주" 또는 "큰 배". 노아가 짓도록 명령받은 거대한 배예요.',
    },
    {
      question: '하나님이 노아에게 무엇을 하라고 하셨나요?',
      options: [
        '큰 배를 짓고 가족과 동물을 데리고 들어가라',
        '모든 동물을 잡아 제사를 드려라',
        '높은 산으로 이사 가라',
        '세상 사람들과 함께 어울려 살아라',
      ],
      correctIndex: 0,
      explanation: '하나님은 노아에게 "큰 배(ark)를 만들고, 네 가족과 모든 동물을 한 쌍씩 데리고 들어가라"고 하셨어요.',
    },
  ],
}

export const noahLesson2: Lesson = {
  id: 'noah-2',
  storyId: 'noah',
  lessonNum: 2,
  title: 'The Great Flood',
  titleKr: '대홍수',
  description: '방주가 완성되고, 동물들이 들어와요. 비가 사십 일 동안 쏟아져요.',
  estimatedMinutes: 5,
  source: {
    label: 'Genesis 7, WEB — Public Domain',
    url: 'https://ebible.org/web/GEN07.htm',
  },
  sentences: [
    {
      korean: '여러 해가 지나, 방주가 완성되었어요.',
      reference: 'Genesis 6:22',
      english: 'Many years later, the ark was completed.',
      words: [
        {
          word: 'completed',
          meaning: '완성되었다',
          pronunciation: '/kəmˈpliːtɪd/',
        },
      ],
    },
    {
      korean: '하나님이 노아에게 말씀하셨어요. "너와 네 가족은 방주 안으로 들어가라."',
      reference: 'Genesis 7:1',
      english: 'God said to Noah, "Enter the ark, you and all your household."',
      words: [
        {
          word: 'enter',
          meaning: '들어가다',
          pronunciation: '/ˈɛntər/',
        },
        {
          word: 'household',
          meaning: '가족, 식구',
          pronunciation: '/ˈhaʊshoʊld/',
        },
      ],
    },
    {
      korean: '동물들이 둘씩 짝을 지어 방주로 왔어요.',
      reference: 'Genesis 7:8–9',
      english: 'The animals came to the ark in pairs, male and female.',
      words: [
        {
          word: 'pairs',
          meaning: '쌍',
          pronunciation: '/pɛərz/',
        },
        {
          word: 'male',
          meaning: '수컷, 남자',
          pronunciation: '/meɪl/',
        },
        {
          word: 'female',
          meaning: '암컷, 여자',
          pronunciation: '/ˈfiːmeɪl/',
        },
      ],
    },
    {
      korean: '큰 동물과 작은 동물, 새와 땅 위의 모든 생물들이.',
      reference: 'Genesis 7:14',
      english: 'Beasts of every kind, birds of every kind, and creatures that crawl on the ground.',
      words: [
        {
          word: 'beasts',
          meaning: '짐승들',
          pronunciation: '/biːsts/',
        },
        {
          word: 'kind',
          meaning: '종류',
          pronunciation: '/kaɪnd/',
        },
        {
          word: 'crawl',
          meaning: '기어다니다',
          pronunciation: '/krɔːl/',
        },
      ],
    },
    {
      korean: '노아와 아내, 세 아들과 그들의 아내들이 안으로 들어갔어요.',
      reference: 'Genesis 7:13',
      english: 'Noah and his wife, his three sons, and their wives entered the ark.',
      words: [
        {
          word: 'entered',
          meaning: '들어갔다',
          pronunciation: '/ˈɛntərd/',
        },
      ],
    },
    {
      korean: '그러고 나서 하나님이 방주의 문을 닫으셨어요.',
      reference: 'Genesis 7:16',
      english: 'Then the Lord closed the door behind them.',
      words: [
        {
          word: 'closed',
          meaning: '닫았다',
          pronunciation: '/kloʊzd/',
        },
        {
          word: 'behind',
          meaning: '뒤에',
          pronunciation: '/bɪˈhaɪnd/',
        },
      ],
    },
    {
      korean: '곧 비가 내리기 시작했어요.',
      reference: 'Genesis 7:10–11',
      english: 'Soon, the rain began to pour down from the sky.',
      words: [
        {
          word: 'pour',
          meaning: '쏟아지다',
          pronunciation: '/pɔːr/',
        },
        {
          word: 'sky',
          meaning: '하늘',
          pronunciation: '/skaɪ/',
        },
      ],
    },
    {
      korean: '사십 일 사십 밤 동안 비가 내렸어요.',
      reference: 'Genesis 7:12',
      english: 'The rain continued for forty days and forty nights without stopping.',
      words: [
        {
          word: 'continued',
          meaning: '계속되었다',
          pronunciation: '/kənˈtɪnjuːd/',
        },
        {
          word: 'without',
          meaning: '~없이',
          pronunciation: '/wɪˈðaʊt/',
        },
      ],
    },
    {
      korean: '물은 점점 더 높이 올라왔어요.',
      reference: 'Genesis 7:18',
      english: 'The waters increased and rose higher and higher upon the earth.',
      words: [
        {
          word: 'increased',
          meaning: '늘어났다',
          pronunciation: '/ɪnˈkriːst/',
        },
        {
          word: 'upon',
          meaning: '~위에',
          pronunciation: '/əˈpɒn/',
        },
      ],
    },
    {
      korean: '나무를 덮고, 언덕을 덮고, 마침내 높은 산까지 덮었어요.',
      reference: 'Genesis 7:19–20',
      english: 'It covered the trees, the hills, and even the highest mountains.',
      words: [
        {
          word: 'highest',
          meaning: '가장 높은',
          pronunciation: '/ˈhaɪəst/',
        },
        {
          word: 'even',
          meaning: '심지어',
          pronunciation: '/ˈiːvən/',
        },
      ],
    },
    {
      korean: '하지만 방주는 물 위에 안전하게 떠 있었어요.',
      reference: 'Genesis 7:17–18',
      english: 'But the ark was lifted up and floated safely above the waters.',
      words: [
        {
          word: 'lifted',
          meaning: '들렸다',
          pronunciation: '/ˈlɪftɪd/',
        },
        {
          word: 'above',
          meaning: '~위에',
          pronunciation: '/əˈbʌv/',
        },
      ],
    },
    {
      korean: '방주 안에서 노아와 가족, 그리고 모든 동물들은 안전했어요.',
      reference: 'Genesis 7:23',
      english: 'Inside the ark, Noah, his family, and every animal were kept safe.',
      words: [
        {
          word: 'kept',
          meaning: '지켜졌다',
          pronunciation: '/kɛpt/',
        },
      ],
    },
  ],
  quiz: [
    {
      question: '비가 며칠 동안 내렸나요?',
      options: [
        '40일',
        '7일',
        '100일',
        '1년',
      ],
      correctIndex: 0,
      explanation: 'forty days and forty nights — 사십 일 사십 밤. 성경에서 "사십"은 "긴 시간, 시험의 시간"을 의미하는 상징적인 숫자예요.',
    },
    {
      question: '본문에서 "떠 있다"를 의미하는 단어는?',
      options: [
        'float',
        'sink',
        'drop',
        'stop',
      ],
      correctIndex: 0,
      explanation: 'float은 "물 위에 떠 있다"는 뜻. 거꾸로 sink는 "가라앉다".',
    },
    {
      question: '방주의 문을 닫은 사람은?',
      options: [
        '하나님',
        '노아',
        '노아의 아들들',
        '동물들',
      ],
      correctIndex: 0,
      explanation: 'God shut the door — 하나님이 직접 문을 닫으셨어요. 안에 있는 사람과 동물들은 안전하게 보호받았어요.',
    },
  ],
}

export const noahLesson3: Lesson = {
  id: 'noah-3',
  storyId: 'noah',
  lessonNum: 3,
  title: 'The Rainbow Promise',
  titleKr: '무지개 약속',
  description: '비가 멈추고, 비둘기가 푸른 잎을 가져와요. 하나님은 무지개로 약속을 주세요.',
  estimatedMinutes: 5,
  source: {
    label: 'Genesis 8–9, WEB — Public Domain',
    url: 'https://ebible.org/web/GEN08.htm',
  },
  sentences: [
    {
      korean: '많은 날이 지난 뒤, 비가 멈추었어요.',
      reference: 'Genesis 8:2',
      english: 'After many days, the rain ceased to fall.',
      words: [
        {
          word: 'ceased',
          meaning: '그쳤다, 멈추었다',
          pronunciation: '/siːst/',
        },
      ],
    },
    {
      korean: '하나님이 바람을 보내셨고, 물이 줄어들기 시작했어요.',
      reference: 'Genesis 8:1',
      english: 'God sent a wind across the earth, and the waters began to recede.',
      words: [
        {
          word: 'across',
          meaning: '~을 가로질러',
          pronunciation: '/əˈkrɒs/',
        },
        {
          word: 'recede',
          meaning: '물러가다, 줄어들다',
          pronunciation: '/rɪˈsiːd/',
        },
      ],
    },
    {
      korean: '방주가 한 산 위에 멈춰 섰어요.',
      reference: 'Genesis 8:4',
      english: 'The ark came to rest on the mountains of Ararat.',
      words: [
        {
          word: 'Ararat',
          meaning: '아라랏 (산 이름)',
          pronunciation: '/ˈærəræt/',
        },
      ],
    },
    {
      korean: '노아는 방주의 창문을 열었어요.',
      reference: 'Genesis 8:6',
      english: 'Noah opened the window of the ark that he had made.',
      words: [
        {
          word: 'window',
          meaning: '창문',
          pronunciation: '/ˈwɪndoʊ/',
        },
      ],
    },
    {
      korean: '비둘기 한 마리를 내보냈어요. 물이 다 빠졌는지 보려고요.',
      reference: 'Genesis 8:8',
      english: 'He sent out a dove to see whether the waters had gone down.',
      words: [
        {
          word: 'whether',
          meaning: '~인지 아닌지',
          pronunciation: '/ˈwɛðər/',
        },
      ],
    },
    {
      korean: '비둘기가 돌아왔어요. 마른 땅은 아직 없었어요.',
      reference: 'Genesis 8:9',
      english: 'The dove returned because it found no place to rest.',
      words: [
        {
          word: 'returned',
          meaning: '돌아왔다',
          pronunciation: '/rɪˈtɜːrnd/',
        },
        {
          word: 'found',
          meaning: '찾았다',
          pronunciation: '/faʊnd/',
        },
      ],
    },
    {
      korean: '7일 후, 노아는 비둘기를 다시 내보냈어요.',
      reference: 'Genesis 8:10',
      english: 'Seven days later, Noah sent the dove out once more.',
      words: [
        {
          word: 'once more',
          meaning: '한 번 더',
          pronunciation: '/wʌns mɔːr/',
        },
      ],
    },
    {
      korean: '이번에는 비둘기가 푸른 잎사귀를 입에 물고 돌아왔어요.',
      reference: 'Genesis 8:11',
      english: 'This time, the dove returned with a fresh olive leaf in its beak.',
      words: [
        {
          word: 'fresh',
          meaning: '신선한',
          pronunciation: '/frɛʃ/',
        },
        {
          word: 'olive',
          meaning: '올리브 (감람)',
          pronunciation: '/ˈɒlɪv/',
        },
        {
          word: 'beak',
          meaning: '부리',
          pronunciation: '/biːk/',
        },
      ],
    },
    {
      korean: '하나님이 노아에게 말씀하셨어요. "방주에서 나오너라. 모든 동물도 함께 데리고."',
      reference: 'Genesis 8:15–17',
      english: 'God said to Noah, "Leave the ark, you and all who are with you."',
      words: [
        {
          word: 'leave',
          meaning: '떠나다',
          pronunciation: '/liːv/',
        },
      ],
    },
    {
      korean: '그러고 나서 하나님이 하늘에 아름다운 무지개를 두셨어요.',
      reference: 'Genesis 9:13',
      english: 'Then God set a rainbow in the clouds as a sign of his promise.',
      words: [
        {
          word: 'set',
          meaning: '두었다',
          pronunciation: '/sɛt/',
        },
        {
          word: 'clouds',
          meaning: '구름',
          pronunciation: '/klaʊdz/',
        },
        {
          word: 'sign',
          meaning: '표시, 표징',
          pronunciation: '/saɪn/',
        },
      ],
    },
    {
      korean: '"이것은 내 약속이다. 다시는 이런 큰 홍수를 보내지 않으리라."',
      reference: 'Genesis 9:11',
      english: '"This is my covenant: never again will a flood destroy all life on earth."',
      words: [
        {
          word: 'covenant',
          meaning: '언약',
          pronunciation: '/ˈkʌvənənt/',
        },
        {
          word: 'destroy',
          meaning: '파괴하다',
          pronunciation: '/dɪˈstrɔɪ/',
        },
      ],
    },
    {
      korean: '하늘에 무지개가 보일 때마다, 하나님의 약속을 기억해요.',
      reference: 'Genesis 9:14–15',
      english: 'Whenever the rainbow appears, it reminds us of the covenant between God and the earth.',
      words: [
        {
          word: 'appears',
          meaning: '나타난다',
          pronunciation: '/əˈpɪərz/',
        },
        {
          word: 'reminds',
          meaning: '상기시킨다',
          pronunciation: '/rɪˈmaɪndz/',
        },
      ],
    },
  ],
  quiz: [
    {
      question: '비둘기가 두 번째에 가지고 돌아온 것은?',
      options: [
        '푸른 잎사귀',
        '돌멩이',
        '물고기',
        '아무것도 없음',
      ],
      correctIndex: 0,
      explanation: 'a green olive leaf — 푸른 올리브 잎. 물이 빠지고 땅에 식물이 다시 자라기 시작했다는 신호였어요.',
    },
    {
      question: '본문에서 "약속"을 의미하는 단어는?',
      options: [
        'promise',
        'rainbow',
        'flood',
        'mountain',
      ],
      correctIndex: 0,
      explanation: 'promise — 약속. 보통(WEB)에서는 covenant(언약)이라는 더 깊은 단어를 써요.',
    },
    {
      question: '무지개는 무엇을 의미하나요?',
      options: [
        '하나님이 다시는 큰 홍수를 보내지 않겠다는 약속',
        '하늘이 아름답다는 표시',
        '비가 다시 올 거라는 경고',
        '동물에 대한 사랑',
      ],
      correctIndex: 0,
      explanation: '무지개는 하나님과 인간 사이의 첫 번째 언약(covenant)의 표시예요. "다시는 이런 일이 없을 것이다"라는 약속.',
    },
  ],
}

export const jonahLesson1: Lesson = {
  id: 'jonah-1',
  storyId: 'jonah',
  lessonNum: 1,
  title: 'Jonah Runs Away',
  titleKr: '요나, 도망치다',
  description: '하나님이 가라고 한 도시 대신 반대 방향으로 도망친 요나. 폭풍과 큰 물고기.',
  estimatedMinutes: 5,
  source: {
    label: 'Jonah 1, WEB — Public Domain',
    url: 'https://ebible.org/web/JON01.htm',
  },
  sentences: [
    {
      korean: '먼 옛날에, 요나라는 사람이 있었어요.',
      reference: 'Jonah 1:1',
      english: 'In ancient times, there lived a prophet named Jonah.',
      words: [
        {
          word: 'ancient',
          meaning: '고대의, 옛날의',
          pronunciation: '/ˈeɪnʃənt/',
        },
        {
          word: 'prophet',
          meaning: '선지자',
          pronunciation: '/ˈprɒfɪt/',
        },
      ],
    },
    {
      korean: '하나님이 요나에게 말씀하셨어요. "큰 도시 니느웨로 가라."',
      reference: 'Jonah 1:2',
      english: 'The Lord said to Jonah, "Arise, go to the great city of Nineveh."',
      words: [
        {
          word: 'Lord',
          meaning: '주, 여호와',
          pronunciation: '/lɔːrd/',
        },
        {
          word: 'arise',
          meaning: '일어나라',
          pronunciation: '/əˈraɪz/',
        },
      ],
    },
    {
      korean: '"그곳 사람들에게 나쁜 일을 그만두라고 전해라."',
      reference: 'Jonah 1:2',
      english: '"Cry out against it, for their wickedness has come up before me."',
      words: [
        {
          word: 'cry out',
          meaning: '외치다',
          pronunciation: '/kraɪ aʊt/',
        },
        {
          word: 'wickedness',
          meaning: '악함',
          pronunciation: '/ˈwɪkɪdnəs/',
        },
      ],
    },
    {
      korean: '하지만 요나는 가고 싶지 않았어요. 하나님으로부터 도망쳤어요.',
      reference: 'Jonah 1:3',
      english: 'But Jonah refused, and tried to flee from the presence of the Lord.',
      words: [
        {
          word: 'refused',
          meaning: '거절했다',
          pronunciation: '/rɪˈfjuːzd/',
        },
        {
          word: 'flee',
          meaning: '도망치다',
          pronunciation: '/fliː/',
        },
        {
          word: 'presence',
          meaning: '계심, 임재',
          pronunciation: '/ˈprɛzəns/',
        },
      ],
    },
    {
      korean: '바다로 가서 반대 방향으로 가는 배를 탔어요.',
      reference: 'Jonah 1:3',
      english: 'He went down to the harbor and boarded a ship sailing in the opposite direction.',
      words: [
        {
          word: 'harbor',
          meaning: '항구',
          pronunciation: '/ˈhɑːrbər/',
        },
        {
          word: 'boarded',
          meaning: '탔다',
          pronunciation: '/ˈbɔːrdɪd/',
        },
        {
          word: 'opposite',
          meaning: '반대의',
          pronunciation: '/ˈɒpəzɪt/',
        },
      ],
    },
    {
      korean: '요나가 잠자는 동안 큰 폭풍이 몰아쳤어요.',
      reference: 'Jonah 1:4–5',
      english: 'While Jonah slept below deck, a mighty storm arose on the sea.',
      words: [
        {
          word: 'below',
          meaning: '아래에',
          pronunciation: '/bɪˈloʊ/',
        },
        {
          word: 'deck',
          meaning: '갑판',
          pronunciation: '/dɛk/',
        },
        {
          word: 'mighty',
          meaning: '거대한, 강력한',
          pronunciation: '/ˈmaɪti/',
        },
        {
          word: 'arose',
          meaning: '일어났다',
          pronunciation: '/əˈroʊz/',
        },
      ],
    },
    {
      korean: '바람이 강했어요. 파도가 매우 높았어요.',
      reference: 'Jonah 1:4',
      english: 'The wind howled and the waves crashed against the ship.',
      words: [
        {
          word: 'howled',
          meaning: '울부짖었다',
          pronunciation: '/haʊld/',
        },
        {
          word: 'crashed',
          meaning: '부딪혔다',
          pronunciation: '/kræʃt/',
        },
      ],
    },
    {
      korean: '선원들은 두려웠어요. 배가 부서질 것 같았어요.',
      reference: 'Jonah 1:5',
      english: 'The sailors were terrified, thinking the ship would be torn apart.',
      words: [
        {
          word: 'terrified',
          meaning: '겁에 질린',
          pronunciation: '/ˈtɛrɪfaɪd/',
        },
        {
          word: 'torn',
          meaning: '찢어진',
          pronunciation: '/tɔːrn/',
        },
        {
          word: 'apart',
          meaning: '산산조각',
          pronunciation: '/əˈpɑːrt/',
        },
      ],
    },
    {
      korean: '그들은 요나를 깨워 물었어요. "당신이 무슨 짓을 한 건가요?"',
      reference: 'Jonah 1:6, 10',
      english: 'They awakened Jonah and demanded, "What have you done?"',
      words: [
        {
          word: 'awakened',
          meaning: '깨웠다',
          pronunciation: '/əˈweɪkənd/',
        },
        {
          word: 'demanded',
          meaning: '강하게 물었다',
          pronunciation: '/dɪˈmændɪd/',
        },
      ],
    },
    {
      korean: '요나가 말했어요. "내가 하나님으로부터 도망치고 있어요. 나를 바다에 던지세요."',
      reference: 'Jonah 1:12',
      english: 'Jonah said, "I am fleeing from the Lord. Throw me into the sea, and it will calm down."',
      words: [
        {
          word: 'fleeing',
          meaning: '도망치는 중',
          pronunciation: '/ˈfliːɪŋ/',
        },
        {
          word: 'calm',
          meaning: '잔잔해지다',
          pronunciation: '/kɑːm/',
        },
      ],
    },
    {
      korean: '그들이 요나를 바다에 던지자, 곧 폭풍이 멈추었어요.',
      reference: 'Jonah 1:15',
      english: 'They threw Jonah into the sea, and at once, the raging storm grew calm.',
      words: [
        {
          word: 'raging',
          meaning: '맹렬한',
          pronunciation: '/ˈreɪdʒɪŋ/',
        },
        {
          word: 'grew',
          meaning: '~해졌다',
          pronunciation: '/ɡruː/',
        },
      ],
    },
    {
      korean: '하지만 하나님이 큰 물고기를 보내 요나를 삼켜서 그를 안전히 지켜주셨어요.',
      reference: 'Jonah 1:17',
      english: 'But the Lord prepared a great fish to swallow Jonah and protect him.',
      words: [
        {
          word: 'prepared',
          meaning: '준비하셨다',
          pronunciation: '/prɪˈpɛərd/',
        },
        {
          word: 'protect',
          meaning: '보호하다',
          pronunciation: '/prəˈtɛkt/',
        },
      ],
    },
  ],
  quiz: [
    {
      question: '하나님이 요나에게 가라고 한 도시는?',
      options: [
        '니느웨',
        '예루살렘',
        '베들레헴',
        '가버나움',
      ],
      correctIndex: 0,
      explanation: 'Nineveh — 큰 도시 니느웨. 요나는 가기 싫어 반대 방향으로 도망쳤어요.',
    },
    {
      question: '폭풍을 멈추기 위해 선원들이 한 일은?',
      options: [
        '요나를 바다에 던졌다',
        '다른 배로 옮겨 탔다',
        '짐을 다 버렸다',
        '노래를 불렀다',
      ],
      correctIndex: 0,
      explanation: '요나가 직접 "나를 바다에 던지라"고 했어요. 선원들이 그 말대로 하자 폭풍이 멈췄어요.',
    },
    {
      question: '본문에서 "삼키다"를 의미하는 단어는?',
      options: [
        'swallow',
        'swim',
        'sleep',
        'stop',
      ],
      correctIndex: 0,
      explanation: 'swallow — 삼키다. 큰 물고기가 요나를 삼켜 그를 죽음에서 보호했어요.',
    },
  ],
}

export const jonahLesson2: Lesson = {
  id: 'jonah-2',
  storyId: 'jonah',
  lessonNum: 2,
  title: 'Inside the Big Fish',
  titleKr: '큰 물고기 안에서',
  description: '물고기 뱃속에서 기도하는 요나. 도시 전체가 변하는 놀라운 장면.',
  estimatedMinutes: 5,
  source: {
    label: 'Jonah 2–3, WEB — Public Domain',
    url: 'https://ebible.org/web/JON02.htm',
  },
  sentences: [
    {
      korean: '요나는 큰 물고기 뱃속에서 삼일 밤낮을 보냈어요.',
      reference: 'Jonah 1:17',
      english: 'Jonah remained in the belly of the great fish for three days and three nights.',
      words: [
        {
          word: 'remained',
          meaning: '머물렀다',
          pronunciation: '/rɪˈmeɪnd/',
        },
        {
          word: 'belly',
          meaning: '뱃속',
          pronunciation: '/ˈbɛli/',
        },
      ],
    },
    {
      korean: '물고기의 어두운 뱃속에서, 요나는 하나님께 기도했어요.',
      reference: 'Jonah 2:1',
      english: 'From inside the fish, Jonah cried out to the Lord his God.',
      words: [
        {
          word: 'cried out',
          meaning: '부르짖었다',
          pronunciation: '/kraɪd aʊt/',
        },
      ],
    },
    {
      korean: '"제가 어려울 때 당신을 불렀고, 당신은 제 소리를 들으셨어요."',
      reference: 'Jonah 2:2',
      english: '"In my distress I called to the Lord, and he answered me."',
      words: [
        {
          word: 'distress',
          meaning: '고통, 곤경',
          pronunciation: '/dɪˈstrɛs/',
        },
        {
          word: 'answered',
          meaning: '응답하셨다',
          pronunciation: '/ˈænsərd/',
        },
      ],
    },
    {
      korean: '"잘못했어요. 이제 당신 말씀대로 하겠어요."',
      reference: 'Jonah 2:9',
      english: '"I will keep my promise to you, O Lord."',
      words: [
        {
          word: 'keep',
          meaning: '지키다',
          pronunciation: '/kiːp/',
        },
        {
          word: 'promise',
          meaning: '약속',
          pronunciation: '/ˈprɒmɪs/',
        },
      ],
    },
    {
      korean: '그러자 하나님이 물고기에게 말씀하셨고, 물고기가 요나를 마른 땅에 토해냈어요.',
      reference: 'Jonah 2:10',
      english: 'Then the Lord commanded the fish, and it spit Jonah out onto the dry land.',
      words: [
        {
          word: 'commanded',
          meaning: '명령하셨다',
          pronunciation: '/kəˈmændɪd/',
        },
      ],
    },
    {
      korean: '하나님이 다시 요나에게 말씀하셨어요. "큰 도시 니느웨로 가라."',
      reference: 'Jonah 3:1–2',
      english: 'A second time, the Lord said to Jonah, "Arise, go to Nineveh, that great city."',
      words: [
        {
          word: 'second',
          meaning: '두 번째',
          pronunciation: '/ˈsɛkənd/',
        },
        {
          word: 'arise',
          meaning: '일어나라',
          pronunciation: '/əˈraɪz/',
        },
      ],
    },
    {
      korean: '이번에는 요나가 갔어요.',
      reference: 'Jonah 3:3',
      english: 'This time, Jonah obeyed and went to Nineveh.',
      words: [
        {
          word: 'obeyed',
          meaning: '순종했다',
          pronunciation: '/oʊˈbeɪd/',
        },
      ],
    },
    {
      korean: '그는 도시 안으로 들어가 외쳤어요. "사십 일 후에 이 도시는 멸망할 것이다!"',
      reference: 'Jonah 3:4',
      english: 'He proclaimed throughout the city, "In forty days, Nineveh will be overthrown!"',
      words: [
        {
          word: 'proclaimed',
          meaning: '선포했다',
          pronunciation: '/prəˈkleɪmd/',
        },
        {
          word: 'overthrown',
          meaning: '뒤집힐, 멸망할',
          pronunciation: '/ˌoʊvərˈθroʊn/',
        },
      ],
    },
    {
      korean: '니느웨 사람들은 요나의 말을 듣고 두려워했어요.',
      reference: 'Jonah 3:5',
      english: "The people of Nineveh believed Jonah's message and trembled.",
      words: [
        {
          word: 'believed',
          meaning: '믿었다',
          pronunciation: '/bɪˈliːvd/',
        },
        {
          word: 'message',
          meaning: '메시지',
          pronunciation: '/ˈmɛsɪdʒ/',
        },
        {
          word: 'trembled',
          meaning: '떨었다',
          pronunciation: '/ˈtrɛmbəld/',
        },
      ],
    },
    {
      korean: '심지어 왕도 자기 왕좌에서 내려왔어요.',
      reference: 'Jonah 3:6',
      english: 'Even the king rose from his throne and humbled himself.',
      words: [
        {
          word: 'rose',
          meaning: '일어섰다',
          pronunciation: '/roʊz/',
        },
        {
          word: 'humbled',
          meaning: '겸손하게 했다',
          pronunciation: '/ˈhʌmbəld/',
        },
      ],
    },
    {
      korean: '모두가 자신의 잘못을 하나님께 회개했어요.',
      reference: 'Jonah 3:7–8',
      english: 'Everyone repented and turned away from their evil ways.',
      words: [
        {
          word: 'repented',
          meaning: '회개했다',
          pronunciation: '/rɪˈpɛntɪd/',
        },
        {
          word: 'turned away',
          meaning: '돌이켰다',
          pronunciation: '/tɜːrnd əˈweɪ/',
        },
        {
          word: 'evil',
          meaning: '악한',
          pronunciation: '/ˈiːvəl/',
        },
      ],
    },
    {
      korean: '하나님은 그들이 변한 것을 보시고 도시를 멸망시키지 않으셨어요.',
      reference: 'Jonah 3:10',
      english: 'When God saw what they had done, he relented and spared the city.',
      words: [
        {
          word: 'relented',
          meaning: '뜻을 돌이키셨다',
          pronunciation: '/rɪˈlɛntɪd/',
        },
        {
          word: 'spared',
          meaning: '살려두셨다',
          pronunciation: '/spɛərd/',
        },
      ],
    },
  ],
  quiz: [
    {
      question: '요나는 물고기 뱃속에서 며칠 있었나요?',
      options: [
        '3일',
        '7일',
        '40일',
        '1일',
      ],
      correctIndex: 0,
      explanation: 'three days and three nights — 삼 일 밤낮. 요나는 물고기 뱃속에서 하나님께 기도했어요.',
    },
    {
      question: '요나가 니느웨에서 외친 메시지는?',
      options: [
        '"40일 후에 이 도시가 멸망할 것이다"',
        '"내가 너희를 사랑한다"',
        '"도망쳐라!"',
        '"왕은 누구인가?"',
      ],
      correctIndex: 0,
      explanation: '"In forty days, Nineveh will be destroyed!" — 사십 일이라는 시간을 줬어요. 회개할 기회를 주신 거예요.',
    },
    {
      question: '니느웨 사람들이 요나의 말을 듣고 한 일은?',
      options: [
        '자신들의 잘못을 회개했다',
        '요나를 쫓아냈다',
        '도시를 떠나 도망쳤다',
        '비웃었다',
      ],
      correctIndex: 0,
      explanation: '왕부터 평민까지 모두 자기 잘못을 돌이켰어요. 그래서 하나님은 도시를 멸망시키지 않으셨어요.',
    },
  ],
}

export const jonahLesson3: Lesson = {
  id: 'jonah-3',
  storyId: 'jonah',
  lessonNum: 3,
  title: "Jonah's Anger",
  titleKr: '요나의 분노',
  description: '하나님이 도시를 살려주신 것에 화가 난 요나. 박넝쿨 식물이 알려주는 메시지.',
  estimatedMinutes: 5,
  source: {
    label: 'Jonah 4, WEB — Public Domain',
    url: 'https://ebible.org/web/JON04.htm',
  },
  sentences: [
    {
      korean: '하지만 요나는 기뻐하지 않았어요. 그는 매우 화가 났어요.',
      reference: 'Jonah 4:1',
      english: 'But Jonah was deeply displeased and became furious.',
      words: [
        {
          word: 'displeased',
          meaning: '불쾌한, 못마땅한',
          pronunciation: '/dɪsˈpliːzd/',
        },
        {
          word: 'furious',
          meaning: '몹시 화난',
          pronunciation: '/ˈfjʊəriəs/',
        },
      ],
    },
    {
      korean: '요나가 하나님께 말했어요. "왜 이 사람들을 용서하셨나요?"',
      reference: 'Jonah 4:2',
      english: 'He prayed, "Lord, why did you show mercy to these people?"',
      words: [
        {
          word: 'mercy',
          meaning: '자비',
          pronunciation: '/ˈmɜːrsi/',
        },
      ],
    },
    {
      korean: '"이렇게 하실 줄 알았어요. 그래서 도망친 거예요."',
      reference: 'Jonah 4:2',
      english: '"I knew you were merciful, and that is why I tried to flee."',
      words: [
        {
          word: 'merciful',
          meaning: '자비로운',
          pronunciation: '/ˈmɜːrsɪfəl/',
        },
        {
          word: 'flee',
          meaning: '도망치다',
          pronunciation: '/fliː/',
        },
      ],
    },
    {
      korean: '요나는 도시를 나와 앉아 기다렸어요.',
      reference: 'Jonah 4:5',
      english: 'Jonah left the city, sat east of it, and waited to see what would happen.',
      words: [
        {
          word: 'east',
          meaning: '동쪽',
          pronunciation: '/iːst/',
        },
        {
          word: 'happen',
          meaning: '일어나다',
          pronunciation: '/ˈhæpən/',
        },
      ],
    },
    {
      korean: '햇볕이 뜨거웠고, 요나는 지쳤어요.',
      reference: 'Jonah 4:6, 8',
      english: 'The sun was burning, and Jonah grew weary.',
      words: [
        {
          word: 'burning',
          meaning: '타는 듯한',
          pronunciation: '/ˈbɜːrnɪŋ/',
        },
        {
          word: 'weary',
          meaning: '지친, 피곤한',
          pronunciation: '/ˈwɪəri/',
        },
      ],
    },
    {
      korean: '하나님이 요나 위로 잎이 무성한 식물을 자라게 해 그늘을 만들어주셨어요.',
      reference: 'Jonah 4:6',
      english: 'The Lord caused a leafy vine to grow over Jonah, providing shade above his head.',
      words: [
        {
          word: 'caused',
          meaning: '하게 하셨다',
          pronunciation: '/kɔːzd/',
        },
        {
          word: 'vine',
          meaning: '덩굴',
          pronunciation: '/vaɪn/',
        },
        {
          word: 'providing',
          meaning: '제공하는',
          pronunciation: '/prəˈvaɪdɪŋ/',
        },
      ],
    },
    {
      korean: '요나는 그 식물이 매우 기뻤어요.',
      reference: 'Jonah 4:6',
      english: 'Jonah was overjoyed by the cool shade of the vine.',
      words: [
        {
          word: 'overjoyed',
          meaning: '아주 기쁜',
          pronunciation: '/ˌoʊvərˈdʒɔɪd/',
        },
        {
          word: 'cool',
          meaning: '시원한',
          pronunciation: '/kuːl/',
        },
      ],
    },
    {
      korean: '하지만 다음 날 아침, 그 식물이 죽었어요.',
      reference: 'Jonah 4:7',
      english: 'But the next morning, a worm attacked the vine and it withered.',
      words: [
        {
          word: 'worm',
          meaning: '벌레',
          pronunciation: '/wɜːrm/',
        },
        {
          word: 'attacked',
          meaning: '공격했다',
          pronunciation: '/əˈtækt/',
        },
        {
          word: 'withered',
          meaning: '시들었다',
          pronunciation: '/ˈwɪðərd/',
        },
      ],
    },
    {
      korean: '뜨거운 햇볕과 바람에 요나는 지치고 힘들어졌어요.',
      reference: 'Jonah 4:8',
      english: 'A scorching east wind blew, and Jonah grew faint under the burning sun.',
      words: [
        {
          word: 'scorching',
          meaning: '타는 듯한',
          pronunciation: '/ˈskɔːrtʃɪŋ/',
        },
        {
          word: 'faint',
          meaning: '기절할 듯한',
          pronunciation: '/feɪnt/',
        },
      ],
    },
    {
      korean: '요나가 말했어요. "사느니 차라리 죽는 게 낫겠어요."',
      reference: 'Jonah 4:8',
      english: 'Jonah said, "It would be better for me to die than to keep living."',
      words: [
        {
          word: 'would',
          meaning: '~할 것이다 (가정)',
          pronunciation: '/wʊd/',
        },
        {
          word: 'living',
          meaning: '사는 것',
          pronunciation: '/ˈlɪvɪŋ/',
        },
      ],
    },
    {
      korean: '하나님이 말씀하셨어요. "너는 식물 하나로 슬퍼하는구나. 하루 만에 자라 하루 만에 죽은 식물 때문에."',
      reference: 'Jonah 4:10',
      english: 'God said, "You care about a vine that you did not plant or tend, that grew in a night and perished in a night."',
      words: [
        {
          word: 'care',
          meaning: '신경 쓰다',
          pronunciation: '/kɛər/',
        },
        {
          word: 'tend',
          meaning: '돌보다',
          pronunciation: '/tɛnd/',
        },
        {
          word: 'perished',
          meaning: '죽었다, 사라졌다',
          pronunciation: '/ˈpɛrɪʃt/',
        },
      ],
    },
    {
      korean: '"그럼 사람들이 가득한 이 큰 도시를 내가 슬퍼하는 것이 마땅하지 않겠느냐?"',
      reference: 'Jonah 4:11',
      english: '"Should I not have compassion on the great city of Nineveh, with so many people in it?"',
      words: [
        {
          word: 'compassion',
          meaning: '연민, 긍휼',
          pronunciation: '/kəmˈpæʃən/',
        },
        {
          word: 'so many',
          meaning: '아주 많은',
          pronunciation: '/soʊ ˈmɛni/',
        },
      ],
    },
  ],
  quiz: [
    {
      question: '요나는 왜 화가 났나요?',
      options: [
        '하나님이 니느웨 사람들을 용서하셨기 때문에',
        '물고기 뱃속이 더러웠기 때문에',
        '길을 잃었기 때문에',
        '친구가 없었기 때문에',
      ],
      correctIndex: 0,
      explanation: '요나는 처음부터 알고 있었어요 — 하나님이 자비로우신 분이라는 걸. 그래서 도망쳤던 거예요.',
    },
    {
      question: '하나님이 요나 위에 무엇을 자라게 하셨나요?',
      options: [
        '잎이 무성한 식물 (그늘을 위해)',
        '큰 나무',
        '텐트',
        '우산',
      ],
      correctIndex: 0,
      explanation: 'a leafy plant — 잎이 무성한 식물. 보통(WEB)에서는 vine(덩굴)이라고 표현해요.',
    },
    {
      question: '이 이야기의 마지막 메시지는?',
      options: [
        '하나님은 식물 하나가 아니라 도시 사람들을 더 사랑하신다',
        '도망치면 잡힌다',
        '큰 물고기는 무섭다',
        '햇볕은 위험하다',
      ],
      correctIndex: 0,
      explanation: '요나는 자기 그늘 식물이 죽어 슬퍼했어요. 하나님은 더 큰 슬픔, 즉 도시 안 수많은 사람들을 사랑하신다는 메시지를 남기며 책이 끝나요.',
    },
  ],
}

export const danielLesson1: Lesson = {
  id: 'daniel-1',
  storyId: 'daniel',
  lessonNum: 1,
  title: 'Daniel and the Trap',
  titleKr: '다니엘과 함정',
  description: '왕의 사랑을 받은 다니엘. 질투한 동료들이 만든 함정의 법.',
  estimatedMinutes: 5,
  source: {
    label: 'Daniel 6:1–10, WEB — Public Domain',
    url: 'https://ebible.org/web/DAN06.htm',
  },
  sentences: [
    {
      korean: '다니엘은 왕을 섬기는 선하고 지혜로운 사람이었어요.',
      reference: 'Daniel 6:3',
      english: 'Daniel was a man of excellent spirit who served the king with wisdom.',
      words: [
        {
          word: 'excellent',
          meaning: '뛰어난',
          pronunciation: '/ˈɛksələnt/',
        },
        {
          word: 'spirit',
          meaning: '영, 정신',
          pronunciation: '/ˈspɪrɪt/',
        },
        {
          word: 'wisdom',
          meaning: '지혜',
          pronunciation: '/ˈwɪzdəm/',
        },
      ],
    },
    {
      korean: '왕은 다니엘을 매우 좋아했어요.',
      reference: 'Daniel 6:3',
      english: 'The king favored Daniel above all the others.',
      words: [
        {
          word: 'favored',
          meaning: '편애했다',
          pronunciation: '/ˈfeɪvərd/',
        },
        {
          word: 'above',
          meaning: '~보다 위에',
          pronunciation: '/əˈbʌv/',
        },
      ],
    },
    {
      korean: '왕은 다니엘을 온 나라의 지도자로 세우려 했어요.',
      reference: 'Daniel 6:3',
      english: 'The king planned to set Daniel over the entire kingdom.',
      words: [
        {
          word: 'planned',
          meaning: '계획했다',
          pronunciation: '/plænd/',
        },
        {
          word: 'entire',
          meaning: '전체의',
          pronunciation: '/ɪnˈtaɪər/',
        },
      ],
    },
    {
      korean: '하지만 다른 관리들은 질투했어요.',
      reference: 'Daniel 6:4',
      english: 'But the other officials grew envious of Daniel.',
      words: [
        {
          word: 'envious',
          meaning: '시기하는',
          pronunciation: '/ˈɛnviəs/',
        },
      ],
    },
    {
      korean: '그들은 생각했어요. "어떻게 다니엘을 곤경에 빠뜨릴 수 있을까?"',
      reference: 'Daniel 6:4',
      english: 'They schemed, "How can we find a charge against Daniel?"',
      words: [
        {
          word: 'schemed',
          meaning: '음모를 꾸몄다',
          pronunciation: '/skiːmd/',
        },
        {
          word: 'charge',
          meaning: '죄목, 고발',
          pronunciation: '/tʃɑːrdʒ/',
        },
      ],
    },
    {
      korean: '그들은 다니엘이 매일 세 번 하나님께 기도하는 것을 알고 있었어요.',
      reference: 'Daniel 6:10',
      english: 'They knew that Daniel prayed three times a day, every day.',
      words: [
        {
          word: 'three times',
          meaning: '세 번',
          pronunciation: '/θriː taɪmz/',
        },
      ],
    },
    {
      korean: '그래서 그들은 계획을 세웠어요. 왕에게 갔어요.',
      reference: 'Daniel 6:6',
      english: 'So they devised a plan and approached the king.',
      words: [
        {
          word: 'devised',
          meaning: '고안했다',
          pronunciation: '/dɪˈvaɪzd/',
        },
        {
          word: 'approached',
          meaning: '다가갔다',
          pronunciation: '/əˈproʊtʃt/',
        },
      ],
    },
    {
      korean: '"위대한 왕이시여, 새 법을 만드십시오!" 그들이 말했어요.',
      reference: 'Daniel 6:7',
      english: '"O great king, issue a new decree!" they declared.',
      words: [
        {
          word: 'issue',
          meaning: '발표하다',
          pronunciation: '/ˈɪʃuː/',
        },
        {
          word: 'decree',
          meaning: '칙령',
          pronunciation: '/dɪˈkriː/',
        },
        {
          word: 'declared',
          meaning: '선언했다',
          pronunciation: '/dɪˈklɛərd/',
        },
      ],
    },
    {
      korean: '"30일 동안, 아무도 당신 외에는 누구에게도 기도해서는 안 됩니다."',
      reference: 'Daniel 6:7',
      english: '"For thirty days, no person shall offer prayer to any god or man except you."',
      words: [
        {
          word: 'shall',
          meaning: '~해야 한다',
          pronunciation: '/ʃæl/',
        },
        {
          word: 'offer',
          meaning: '드리다',
          pronunciation: '/ˈɒfər/',
        },
        {
          word: 'except',
          meaning: '~외에',
          pronunciation: '/ɪkˈsɛpt/',
        },
      ],
    },
    {
      korean: '"이 법을 어기는 자는 사자굴에 던져질 것입니다."',
      reference: 'Daniel 6:7',
      english: '"Whoever breaks this decree shall be cast into the den of lions."',
      words: [
        {
          word: 'whoever',
          meaning: '누구든지',
          pronunciation: '/huːˈɛvər/',
        },
        {
          word: 'cast',
          meaning: '던져지다',
          pronunciation: '/kæst/',
        },
      ],
    },
    {
      korean: '왕은 새 법에 서명했어요.',
      reference: 'Daniel 6:9',
      english: 'The king signed the decree, making it official.',
      words: [
        {
          word: 'official',
          meaning: '공식적인',
          pronunciation: '/əˈfɪʃəl/',
        },
      ],
    },
    {
      korean: '다니엘은 그 법에 대해 들었어요. 집에 가서 창문을 열고, 다른 날과 똑같이 하나님께 기도했어요.',
      reference: 'Daniel 6:10',
      english: 'When Daniel heard about the decree, he went home, opened his window toward Jerusalem, and prayed as he always did.',
      words: [
        {
          word: 'Jerusalem',
          meaning: '예루살렘',
          pronunciation: '/dʒəˈruːsələm/',
        },
        {
          word: 'always',
          meaning: '항상',
          pronunciation: '/ˈɔːlweɪz/',
        },
      ],
    },
  ],
  quiz: [
    {
      question: '왜 다른 관리들은 다니엘을 미워했나요?',
      options: [
        '왕이 다니엘을 좋아해 질투해서',
        '다니엘이 그들의 돈을 훔쳐서',
        '다니엘이 못된 행동을 해서',
        '다니엘이 외국인이라서',
      ],
      correctIndex: 0,
      explanation: '왕은 다니엘을 다른 관리보다 더 신뢰했어요. 그게 다른 관리들의 질투(jealousy)를 일으켰어요.',
    },
    {
      question: '관리들이 만든 새 법은 무엇이었나요?',
      options: [
        '30일 동안 왕 외에는 누구에게도 기도하면 안 된다',
        '한 달 동안 일을 해서는 안 된다',
        '사자를 키우면 안 된다',
        '외국 사람과 말하면 안 된다',
      ],
      correctIndex: 0,
      explanation: '다니엘이 매일 하나님께 기도한다는 것을 알고, 그걸 잡기 위해 만든 함정의 법이었어요.',
    },
    {
      question: '법이 만들어진 후 다니엘은 어떻게 했나요?',
      options: [
        '평소와 똑같이 창문을 열고 기도했다',
        '도망쳤다',
        '다른 신을 섬겼다',
        '왕에게 기도했다',
      ],
      correctIndex: 0,
      explanation: '다니엘은 숨어서 기도하지도, 멈추지도 않았어요. "every other day"처럼 — 평소 그대로.',
    },
  ],
}

export const danielLesson2: Lesson = {
  id: 'daniel-2',
  storyId: 'daniel',
  lessonNum: 2,
  title: "In the Lions' Den",
  titleKr: '사자굴 안에서',
  description: '함정에 걸린 다니엘. 사자굴에서 보낸 밤. 새벽에 일어난 놀라운 일.',
  estimatedMinutes: 5,
  source: {
    label: 'Daniel 6:11–23, WEB — Public Domain',
    url: 'https://ebible.org/web/DAN06.htm',
  },
  sentences: [
    {
      korean: '다른 관리들이 다니엘이 기도하는 것을 보았어요. 그들은 왕에게 달려갔어요.',
      reference: 'Daniel 6:11–12',
      english: 'The officials caught Daniel in prayer and rushed to inform the king.',
      words: [
        {
          word: 'caught',
          meaning: '잡았다 (catch의 과거형)',
          pronunciation: '/kɔːt/',
        },
        {
          word: 'rushed',
          meaning: '서둘러 갔다',
          pronunciation: '/rʌʃt/',
        },
        {
          word: 'inform',
          meaning: '알리다',
          pronunciation: '/ɪnˈfɔːrm/',
        },
      ],
    },
    {
      korean: '"다니엘이 여전히 자기 하나님께 하루 세 번 기도합니다!" 그들이 말했어요.',
      reference: 'Daniel 6:13',
      english: '"Daniel continues to pray to his God three times a day, ignoring your decree!" they reported.',
      words: [
        {
          word: 'continues',
          meaning: '계속한다',
          pronunciation: '/kənˈtɪnjuːz/',
        },
        {
          word: 'ignoring',
          meaning: '무시하면서',
          pronunciation: '/ɪɡˈnɔːrɪŋ/',
        },
      ],
    },
    {
      korean: '왕은 매우 슬퍼했어요. 다니엘을 좋아했거든요.',
      reference: 'Daniel 6:14',
      english: 'The king was deeply troubled, for he cared about Daniel.',
      words: [
        {
          word: 'deeply',
          meaning: '깊이',
          pronunciation: '/ˈdiːpli/',
        },
        {
          word: 'troubled',
          meaning: '괴로운',
          pronunciation: '/ˈtrʌbəld/',
        },
        {
          word: 'cared',
          meaning: '아꼈다',
          pronunciation: '/kɛərd/',
        },
      ],
    },
    {
      korean: '왕은 종일 다니엘을 구하려 했지만, 법은 바꿀 수 없었어요.',
      reference: 'Daniel 6:14',
      english: 'Until sunset, the king sought a way to rescue Daniel, but the decree could not be reversed.',
      words: [
        {
          word: 'sunset',
          meaning: '해질녘',
          pronunciation: '/ˈsʌnsɛt/',
        },
        {
          word: 'rescue',
          meaning: '구출하다',
          pronunciation: '/ˈrɛskjuː/',
        },
        {
          word: 'reversed',
          meaning: '뒤집다',
          pronunciation: '/rɪˈvɜːrst/',
        },
      ],
    },
    {
      korean: '결국 왕은 다니엘을 사자굴에 던지라고 명령했어요.',
      reference: 'Daniel 6:16',
      english: 'Finally, the king commanded that Daniel be cast into the den of lions.',
      words: [
        {
          word: 'finally',
          meaning: '마침내',
          pronunciation: '/ˈfaɪnəli/',
        },
        {
          word: 'commanded',
          meaning: '명령했다',
          pronunciation: '/kəˈmændɪd/',
        },
        {
          word: 'cast',
          meaning: '던지다',
          pronunciation: '/kæst/',
        },
      ],
    },
    {
      korean: '왕이 다니엘에게 말했어요. "네가 섬기는 하나님이 너를 구하시기를."',
      reference: 'Daniel 6:16',
      english: 'The king said to Daniel, "May your God, whom you serve continually, deliver you."',
      words: [
        {
          word: 'continually',
          meaning: '계속해서',
          pronunciation: '/kənˈtɪnjuəli/',
        },
        {
          word: 'deliver',
          meaning: '구원하다',
          pronunciation: '/dɪˈlɪvər/',
        },
      ],
    },
    {
      korean: '큰 돌을 굴 입구에 놓았어요.',
      reference: 'Daniel 6:17',
      english: 'A massive stone was rolled over the entrance of the den and sealed.',
      words: [
        {
          word: 'massive',
          meaning: '거대한',
          pronunciation: '/ˈmæsɪv/',
        },
        {
          word: 'rolled',
          meaning: '굴렸다',
          pronunciation: '/roʊld/',
        },
        {
          word: 'entrance',
          meaning: '입구',
          pronunciation: '/ˈɛntrəns/',
        },
        {
          word: 'sealed',
          meaning: '봉인됐다',
          pronunciation: '/siːld/',
        },
      ],
    },
    {
      korean: '그날 밤, 왕은 음식을 먹을 수도, 잠을 잘 수도 없었어요.',
      reference: 'Daniel 6:18',
      english: 'That night, the king refused all food and could not sleep.',
      words: [
        {
          word: 'refused',
          meaning: '거부했다',
          pronunciation: '/rɪˈfjuːzd/',
        },
      ],
    },
    {
      korean: '이른 아침, 왕이 사자굴로 달려갔어요.',
      reference: 'Daniel 6:19',
      english: 'At the break of dawn, the king hurried to the den.',
      words: [
        {
          word: 'dawn',
          meaning: '새벽',
          pronunciation: '/dɔːn/',
        },
        {
          word: 'hurried',
          meaning: '서둘렀다',
          pronunciation: '/ˈhʌrid/',
        },
      ],
    },
    {
      korean: '"다니엘아! 네 하나님이 너를 사자에게서 구하셨느냐?"',
      reference: 'Daniel 6:20',
      english: '"Daniel, servant of the living God, has your God been able to deliver you from the lions?"',
      words: [
        {
          word: 'servant',
          meaning: '종',
          pronunciation: '/ˈsɜːrvənt/',
        },
        {
          word: 'living',
          meaning: '살아 계신',
          pronunciation: '/ˈlɪvɪŋ/',
        },
      ],
    },
    {
      korean: '다니엘이 대답했어요. "제 하나님께서 천사를 보내 사자들의 입을 닫으셨어요. 저는 안전합니다."',
      reference: 'Daniel 6:21–22',
      english: 'Daniel replied, "My God sent his angel and shut the mouths of the lions. They have not harmed me."',
      words: [
        {
          word: 'replied',
          meaning: '대답했다',
          pronunciation: '/rɪˈplaɪd/',
        },
        {
          word: 'harmed',
          meaning: '해쳤다',
          pronunciation: '/hɑːrmd/',
        },
      ],
    },
    {
      korean: '왕은 기쁨으로 가득 찼어요. 모두에게 외쳤어요. "다니엘의 하나님은 위대하시다!"',
      reference: 'Daniel 6:23, 26',
      english: 'Overjoyed, the king proclaimed throughout his kingdom, "The God of Daniel is mighty and everlasting!"',
      words: [
        {
          word: 'overjoyed',
          meaning: '아주 기쁜',
          pronunciation: '/ˌoʊvərˈdʒɔɪd/',
        },
        {
          word: 'proclaimed',
          meaning: '선포했다',
          pronunciation: '/prəˈkleɪmd/',
        },
        {
          word: 'mighty',
          meaning: '강하신',
          pronunciation: '/ˈmaɪti/',
        },
        {
          word: 'everlasting',
          meaning: '영원한',
          pronunciation: '/ˌɛvərˈlæstɪŋ/',
        },
      ],
    },
  ],
  quiz: [
    {
      question: '왕이 다니엘을 사자굴에 던진 이유는?',
      options: [
        '법을 바꿀 수 없었기 때문에',
        '다니엘이 미워서',
        '사자를 좋아해서',
        '다른 관리에게 화나서',
      ],
      correctIndex: 0,
      explanation: '왕은 다니엘을 구하고 싶었지만, 자기가 서명한 법을 자기가 바꿀 수 없었어요. 그래서 매우 슬퍼했어요.',
    },
    {
      question: '사자굴에서 밤을 보낸 다니엘은 어땠나요?',
      options: [
        '천사가 사자의 입을 닫아 안전했다',
        '다쳤지만 살아남았다',
        '다른 굴로 도망쳤다',
        '사자들과 함께 잤다',
      ],
      correctIndex: 0,
      explanation: "My God sent his angel and shut the lions' mouths — 다니엘은 무사했어요. 사자가 다니엘을 해치지 않았어요.",
    },
    {
      question: '이 이야기의 메시지는?',
      options: [
        '두려움 속에서도 신실하게 사는 용기',
        '사자는 무서운 동물이다',
        '왕은 약하다',
        '함정은 항상 통한다',
      ],
      correctIndex: 0,
      explanation: '다윗처럼 다니엘도 작은 자였어요. 다윗은 능동적으로 싸웠고, 다니엘은 평소대로 살았어요. 두 가지 모습의 용기예요.',
    },
  ],
}

export const lessons: Record<string, Lesson> = {
  'creation-1': creationLesson1,
  'david-1': davidLesson1,
  'david-2': davidLesson2,
  'noah-1': noahLesson1,
  'noah-2': noahLesson2,
  'noah-3': noahLesson3,
  'jonah-1': jonahLesson1,
  'jonah-2': jonahLesson2,
  'jonah-3': jonahLesson3,
  'daniel-1': danielLesson1,
  'daniel-2': danielLesson2,
}

export function getLesson(storyId: string, lessonNum: string | number): Lesson | undefined {
  return lessons[`${storyId}-${lessonNum}`]
}

export function getStoryLessons(storyId: string): Lesson[] {
  return Object.values(lessons)
    .filter(l => l.storyId === storyId)
    .sort((a, b) => a.lessonNum - b.lessonNum)
}

export function getAllLessons(): Lesson[] {
  return Object.values(lessons).sort((a, b) => {
    const sa = stories.find(s => s.id === a.storyId)?.order ?? 99
    const sb = stories.find(s => s.id === b.storyId)?.order ?? 99
    if (sa !== sb) return sa - sb
    return a.lessonNum - b.lessonNum
  })
}

export function getStory(storyId: string): Story | undefined {
  return stories.find(s => s.id === storyId)
}
