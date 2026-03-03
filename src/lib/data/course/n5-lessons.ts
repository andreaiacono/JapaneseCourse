import type { Lesson } from '../../models/Course.js';

export const n5Lessons: Record<string, Lesson> = {

  // ═══════════════════════════════════════════
  // CHAPTER 1 — Writing Systems
  // ═══════════════════════════════════════════

  'lesson-hiragana-1': {
    id: 'lesson-hiragana-1', slug: 'hiragana-1',
    title: 'Hiragana: あ〜お Row', subtitle: 'The five vowels',
    jlptLevel: 'N5', estimatedMinutes: 10,
    introduces: ['kana-a','kana-i','kana-u','kana-e','kana-o'],
    prerequisites: [], tags: ['hiragana','writing','N5'],
    contentBlocks: [
      { type: 'text', markdown: 'Hiragana is the foundational writing system of Japanese. There are 46 basic characters. We start with the five vowels: **あ (a)、い (i)、う (u)、え (e)、お (o)**.' },
      { type: 'table', headers: ['Hiragana','Romaji','Hint'], rows: [['あ','a','open "a" as in father'],['い','i','long "ee" as in meet'],['う','u','short "oo" as in food'],['え','e','short "e" as in bed'],['お','o','short "o" as in go']] },
      { type: 'tip', markdown: 'Japanese vowels are pure and short. There is no diphthong — each is a single clean sound.' },
      { type: 'example', sentence: { ja: 'あおい', romaji: 'aoi', en: 'blue' } },
      { type: 'example', sentence: { ja: 'いえ', romaji: 'ie', en: 'house' } },
    ],
    practiceExercises: [
      { id: 'ex-h1-1', type: 'multiple-choice', prompt: 'Which hiragana is "u"?', question: 'Choose the correct character.', choices: [{id:'a',text:'あ'},{id:'b',text:'い'},{id:'c',text:'う'},{id:'d',text:'え'}], correctChoiceId: 'c', explanation: 'う = u', targets: [], difficulty: 1 },
      { id: 'ex-h1-2', type: 'fill-in-blank', prompt: 'What does いえ mean?', sentenceTemplate: 'いえ means {{blank}}.', acceptedAnswers: ['house'], wordBankOptions: ['house','blue','cat','school'], explanation: 'いえ = ie = house', targets: [], difficulty: 1 },
      { id: 'ex-h1-3', type: 'multiple-choice', prompt: 'Which hiragana is "e"?', question: 'Choose correctly.', choices: [{id:'a',text:'い'},{id:'b',text:'う'},{id:'c',text:'え'},{id:'d',text:'お'}], correctChoiceId: 'c', explanation: 'え = e', targets: [], difficulty: 1 },
    ],
    quiz: [
      { id: 'qz-h1-1', type: 'multiple-choice', prompt: 'Which character is "o"?', question: 'Choose.', choices: [{id:'a',text:'あ'},{id:'b',text:'う'},{id:'c',text:'え'},{id:'d',text:'お'}], correctChoiceId: 'd', explanation: 'お = o', targets: [], difficulty: 1 },
      { id: 'qz-h1-2', type: 'fill-in-blank', prompt: 'How do you write "aoi" (blue) in hiragana?', sentenceTemplate: 'Blue is {{blank}} in hiragana.', acceptedAnswers: ['あおい'], explanation: 'a=あ, o=お, i=い', targets: [], difficulty: 1 },
      { id: 'qz-h1-3', type: 'multiple-choice', prompt: 'How many vowels does Japanese have?', question: 'Choose.', choices: [{id:'a',text:'3'},{id:'b',text:'4'},{id:'c',text:'5'},{id:'d',text:'6'}], correctChoiceId: 'c', explanation: 'a, i, u, e, o', targets: [], difficulty: 1 },
    ],
  },

  'lesson-hiragana-2': {
    id: 'lesson-hiragana-2', slug: 'hiragana-2',
    title: 'Hiragana: か〜こ & さ〜そ Rows',
    jlptLevel: 'N5', estimatedMinutes: 12,
    introduces: [], prerequisites: [], tags: ['hiragana','N5'],
    contentBlocks: [
      { type: 'text', markdown: 'The **k-row** adds a "k" sound to each vowel: **か (ka)、き (ki)、く (ku)、け (ke)、こ (ko)**.\nThe **s-row** adds an "s" sound: **さ (sa)、し (shi)、す (su)、せ (se)、そ (so)**. Note that し is "shi", not "si".' },
      { type: 'table', headers: ['Char','Read','Char','Read'], rows: [['か','ka','さ','sa'],['き','ki','し','shi'],['く','ku','す','su'],['け','ke','せ','se'],['こ','ko','そ','so']] },
      { type: 'warning', markdown: 'し is romanized as **shi**, not "si". This is a common exception to remember.' },
      { type: 'example', sentence: { ja: 'きく', romaji: 'kiku', en: 'chrysanthemum / to listen' } },
      { type: 'example', sentence: { ja: 'すし', romaji: 'sushi', en: 'sushi' } },
    ],
    practiceExercises: [
      { id: 'ex-h2-1', type: 'multiple-choice', prompt: 'Which hiragana is "ki"?', question: 'Choose.', choices: [{id:'a',text:'か'},{id:'b',text:'き'},{id:'c',text:'く'},{id:'d',text:'け'}], correctChoiceId: 'b', explanation: 'き = ki', targets: [], difficulty: 1 },
      { id: 'ex-h2-2', type: 'fill-in-blank', prompt: 'How is し romanized?', sentenceTemplate: 'し is pronounced {{blank}}.', acceptedAnswers: ['shi'], wordBankOptions: ['si','shi','chi','ji'], explanation: 'し = shi (special exception)', targets: [], difficulty: 1 },
    ],
    quiz: [
      { id: 'qz-h2-1', type: 'multiple-choice', prompt: 'Which is "so"?', question: 'Choose.', choices: [{id:'a',text:'さ'},{id:'b',text:'す'},{id:'c',text:'せ'},{id:'d',text:'そ'}], correctChoiceId: 'd', targets: [], difficulty: 1 },
      { id: 'qz-h2-2', type: 'multiple-choice', prompt: 'What does すし (sushi) mean?', question: 'Choose.', choices: [{id:'a',text:'ramen'},{id:'b',text:'sushi'},{id:'c',text:'sake'},{id:'d',text:'rice'}], correctChoiceId: 'b', targets: [], difficulty: 1 },
      { id: 'qz-h2-3', type: 'fill-in-blank', prompt: 'Write "kiku" in hiragana.', sentenceTemplate: 'kiku = {{blank}}', acceptedAnswers: ['きく'], explanation: 'ki=き, ku=く', targets: [], difficulty: 1 },
    ],
  },

  'lesson-hiragana-3': {
    id: 'lesson-hiragana-3', slug: 'hiragana-3',
    title: 'Hiragana: た〜と & な〜の Rows',
    jlptLevel: 'N5', estimatedMinutes: 12,
    introduces: [], prerequisites: [], tags: ['hiragana','N5'],
    contentBlocks: [
      { type: 'text', markdown: 'The **t-row**: **た (ta)、ち (chi)、つ (tsu)、て (te)、と (to)**. Note ち = chi and つ = tsu.\nThe **n-row**: **な (na)、に (ni)、ぬ (nu)、ね (ne)、の (no)**.' },
      { type: 'table', headers: ['Char','Read','Char','Read'], rows: [['た','ta','な','na'],['ち','chi','に','ni'],['つ','tsu','ぬ','nu'],['て','te','ね','ne'],['と','to','の','no']] },
      { type: 'warning', markdown: 'ち = **chi** (not "ti") and つ = **tsu** (not "tu") — two more exceptions to memorize.' },
      { type: 'example', sentence: { ja: 'ねこ', romaji: 'neko', en: 'cat' } },
    ],
    practiceExercises: [
      { id: 'ex-h3-1', type: 'multiple-choice', prompt: 'How is ち romanized?', question: 'Choose.', choices: [{id:'a',text:'ti'},{id:'b',text:'chi'},{id:'c',text:'tchi'},{id:'d',text:'ci'}], correctChoiceId: 'b', explanation: 'ち = chi', targets: [], difficulty: 1 },
      { id: 'ex-h3-2', type: 'fill-in-blank', prompt: 'How do you write "neko" (cat) in hiragana?', sentenceTemplate: 'cat = {{blank}}', acceptedAnswers: ['ねこ'], explanation: 'ne=ね, ko=こ', targets: [], difficulty: 1 },
    ],
    quiz: [
      { id: 'qz-h3-1', type: 'multiple-choice', prompt: 'Which is "tsu"?', question: 'Choose.', choices: [{id:'a',text:'た'},{id:'b',text:'ち'},{id:'c',text:'つ'},{id:'d',text:'て'}], correctChoiceId: 'c', targets: [], difficulty: 1 },
      { id: 'qz-h3-2', type: 'multiple-choice', prompt: 'Which hiragana is "ni"?', question: 'Choose.', choices: [{id:'a',text:'な'},{id:'b',text:'に'},{id:'c',text:'ぬ'},{id:'d',text:'ね'}], correctChoiceId: 'b', targets: [], difficulty: 1 },
      { id: 'qz-h3-3', type: 'fill-in-blank', prompt: 'Write "to" in hiragana.', sentenceTemplate: 'to = {{blank}}', acceptedAnswers: ['と'], targets: [], difficulty: 1 },
    ],
  },

  'lesson-hiragana-4': {
    id: 'lesson-hiragana-4', slug: 'hiragana-4',
    title: 'Hiragana: は〜ほ through ら〜ろ Rows',
    jlptLevel: 'N5', estimatedMinutes: 12,
    introduces: [], prerequisites: [], tags: ['hiragana','N5'],
    contentBlocks: [
      { type: 'text', markdown: 'Learn three more rows:\n**h-row**: は (ha)、ひ (hi)、ふ (fu)、へ (he)、ほ (ho) — note ふ = fu.\n**m-row**: ま (ma)、み (mi)、む (mu)、め (me)、も (mo).\n**r-row**: ら (ra)、り (ri)、る (ru)、れ (re)、ろ (ro) — the Japanese "r" is between r, l, and d.' },
      { type: 'table', headers: ['Char','Read','Char','Read','Char','Read'], rows: [['は','ha','ま','ma','ら','ra'],['ひ','hi','み','mi','り','ri'],['ふ','fu','む','mu','る','ru'],['へ','he','め','me','れ','re'],['ほ','ho','も','mo','ろ','ro']] },
      { type: 'warning', markdown: 'ふ is romanized as **fu**, not "hu". The Japanese "r" sounds like a quick flap, not an English "r".' },
      { type: 'example', sentence: { ja: 'はな', romaji: 'hana', en: 'flower / nose' } },
    ],
    practiceExercises: [
      { id: 'ex-h4-1', type: 'multiple-choice', prompt: 'How is ふ romanized?', question: 'Choose.', choices: [{id:'a',text:'hu'},{id:'b',text:'fu'},{id:'c',text:'vu'},{id:'d',text:'bu'}], correctChoiceId: 'b', explanation: 'ふ = fu', targets: [], difficulty: 1 },
      { id: 'ex-h4-2', type: 'fill-in-blank', prompt: 'Write "hana" (flower) in hiragana.', sentenceTemplate: 'flower = {{blank}}', acceptedAnswers: ['はな'], targets: [], difficulty: 1 },
    ],
    quiz: [
      { id: 'qz-h4-1', type: 'multiple-choice', prompt: 'Which is "mo"?', question: 'Choose.', choices: [{id:'a',text:'ま'},{id:'b',text:'み'},{id:'c',text:'む'},{id:'d',text:'も'}], correctChoiceId: 'd', targets: [], difficulty: 1 },
      { id: 'qz-h4-2', type: 'multiple-choice', prompt: 'Which is "ri"?', question: 'Choose.', choices: [{id:'a',text:'ら'},{id:'b',text:'り'},{id:'c',text:'る'},{id:'d',text:'れ'}], correctChoiceId: 'b', targets: [], difficulty: 1 },
      { id: 'qz-h4-3', type: 'fill-in-blank', prompt: 'Write "mimi" (ear) in hiragana.', sentenceTemplate: 'ear = {{blank}}', acceptedAnswers: ['みみ'], explanation: 'mi=み, mi=み', targets: [], difficulty: 1 },
    ],
  },

  'lesson-hiragana-5': {
    id: 'lesson-hiragana-5', slug: 'hiragana-5',
    title: 'Hiragana: わ・を・ん & Review',
    jlptLevel: 'N5', estimatedMinutes: 10,
    introduces: [], prerequisites: [], tags: ['hiragana','N5'],
    contentBlocks: [
      { type: 'text', markdown: 'The final hiragana characters:\n**わ (wa)** — used as a pronoun and in words.\n**を (wo/o)** — used only as the direct object particle, pronounced "o".\n**ん (n)** — a nasal consonant, stands alone without a vowel.' },
      { type: 'table', headers: ['Char','Read','Usage'], rows: [['わ','wa','words and w-row'],['を','o/wo','object particle only'],['ん','n','nasal, word-final or before b/m/p']] },
      { type: 'tip', markdown: 'を is almost always written in the context of the object particle. You will rarely see it in other positions.' },
      { type: 'example', sentence: { ja: 'わたし', romaji: 'watashi', en: 'I / me' } },
    ],
    practiceExercises: [
      { id: 'ex-h5-1', type: 'multiple-choice', prompt: 'What is を primarily used for?', question: 'Choose.', choices: [{id:'a',text:'Topic particle'},{id:'b',text:'Object particle'},{id:'c',text:'Subject particle'},{id:'d',text:'Location particle'}], correctChoiceId: 'b', explanation: 'を marks the direct object.', targets: [], difficulty: 1 },
      { id: 'ex-h5-2', type: 'fill-in-blank', prompt: 'Write "pan" (bread) in hiragana.', sentenceTemplate: 'bread in hiragana = {{blank}}', acceptedAnswers: ['パン','ぱん'], wordBankOptions: ['パン','ぱん','はん','まん'], targets: [], difficulty: 2 },
    ],
    quiz: [
      { id: 'qz-h5-1', type: 'multiple-choice', prompt: 'Which character is the nasal "n"?', question: 'Choose.', choices: [{id:'a',text:'な'},{id:'b',text:'に'},{id:'c',text:'ん'},{id:'d',text:'の'}], correctChoiceId: 'c', targets: [], difficulty: 1 },
      { id: 'qz-h5-2', type: 'multiple-choice', prompt: 'How is を pronounced as a particle?', question: 'Choose.', choices: [{id:'a',text:'wo'},{id:'b',text:'o'},{id:'c',text:'wa'},{id:'d',text:'u'}], correctChoiceId: 'b', explanation: 'を is read "o" as a particle.', targets: [], difficulty: 1 },
      { id: 'qz-h5-3', type: 'fill-in-blank', prompt: 'Write "watashi" in hiragana.', sentenceTemplate: 'I / me = {{blank}}', acceptedAnswers: ['わたし'], targets: [], difficulty: 1 },
    ],
  },

  'lesson-katakana-1': {
    id: 'lesson-katakana-1', slug: 'katakana-1',
    title: 'Katakana: ア〜オ & カ〜コ Rows',
    jlptLevel: 'N5', estimatedMinutes: 12,
    introduces: [], prerequisites: [], tags: ['katakana','N5'],
    contentBlocks: [
      { type: 'text', markdown: 'Katakana is used for foreign loanwords, onomatopoeia, and emphasis. Each character represents the same sounds as hiragana but has a different, more angular shape.' },
      { type: 'table', headers: ['Katakana','Hiragana','Read'], rows: [['ア','あ','a'],['イ','い','i'],['ウ','う','u'],['エ','え','e'],['オ','お','o'],['カ','か','ka'],['キ','き','ki'],['ク','く','ku'],['ケ','け','ke'],['コ','こ','ko']] },
      { type: 'tip', markdown: 'Katakana characters are sharper and more angular than hiragana. Try to associate each with its hiragana counterpart.' },
      { type: 'example', sentence: { ja: 'コーヒー', romaji: 'koohii', en: 'coffee' } },
    ],
    practiceExercises: [
      { id: 'ex-k1-1', type: 'multiple-choice', prompt: 'Which katakana is "u"?', question: 'Choose.', choices: [{id:'a',text:'ア'},{id:'b',text:'イ'},{id:'c',text:'ウ'},{id:'d',text:'エ'}], correctChoiceId: 'c', targets: [], difficulty: 1 },
      { id: 'ex-k1-2', type: 'fill-in-blank', prompt: 'Write "ko" in katakana.', sentenceTemplate: 'ko in katakana = {{blank}}', acceptedAnswers: ['コ'], wordBankOptions: ['カ','キ','ク','ケ','コ'], targets: [], difficulty: 1 },
    ],
    quiz: [
      { id: 'qz-k1-1', type: 'multiple-choice', prompt: 'Which katakana is "ka"?', question: 'Choose.', choices: [{id:'a',text:'ア'},{id:'b',text:'カ'},{id:'c',text:'サ'},{id:'d',text:'タ'}], correctChoiceId: 'b', targets: [], difficulty: 1 },
      { id: 'qz-k1-2', type: 'multiple-choice', prompt: 'What does コーヒー mean?', question: 'Choose.', choices: [{id:'a',text:'tea'},{id:'b',text:'water'},{id:'c',text:'coffee'},{id:'d',text:'juice'}], correctChoiceId: 'c', targets: [], difficulty: 1 },
      { id: 'qz-k1-3', type: 'fill-in-blank', prompt: 'Write "a" in katakana.', sentenceTemplate: 'a = {{blank}}', acceptedAnswers: ['ア'], targets: [], difficulty: 1 },
    ],
  },

  'lesson-katakana-2': {
    id: 'lesson-katakana-2', slug: 'katakana-2',
    title: 'Katakana: サ〜ソ through ナ〜ノ Rows',
    jlptLevel: 'N5', estimatedMinutes: 12,
    introduces: [], prerequisites: [], tags: ['katakana','N5'],
    contentBlocks: [
      { type: 'text', markdown: 'More katakana rows:\n**s-row**: サ(sa)、シ(shi)、ス(su)、セ(se)、ソ(so)\n**t-row**: タ(ta)、チ(chi)、ツ(tsu)、テ(te)、ト(to)\n**n-row**: ナ(na)、ニ(ni)、ヌ(nu)、ネ(ne)、ノ(no)' },
      { type: 'table', headers: ['Katakana','Read','Katakana','Read','Katakana','Read'], rows: [['サ','sa','タ','ta','ナ','na'],['シ','shi','チ','chi','ニ','ni'],['ス','su','ツ','tsu','ヌ','nu'],['セ','se','テ','te','ネ','ne'],['ソ','so','ト','to','ノ','no']] },
      { type: 'example', sentence: { ja: 'テスト', romaji: 'tesuto', en: 'test / exam' } },
      { type: 'tip', markdown: 'ソ (so) and ン (n) look similar — watch for the stroke direction. ツ (tsu) and シ (shi) are also easy to confuse.' },
    ],
    practiceExercises: [
      { id: 'ex-k2-1', type: 'multiple-choice', prompt: 'What does テスト mean?', question: 'Choose.', choices: [{id:'a',text:'desk'},{id:'b',text:'test'},{id:'c',text:'text'},{id:'d',text:'taste'}], correctChoiceId: 'b', targets: [], difficulty: 1 },
      { id: 'ex-k2-2', type: 'fill-in-blank', prompt: 'Write "shi" in katakana.', sentenceTemplate: 'shi = {{blank}}', acceptedAnswers: ['シ'], wordBankOptions: ['サ','シ','ス','セ'], targets: [], difficulty: 1 },
    ],
    quiz: [
      { id: 'qz-k2-1', type: 'multiple-choice', prompt: 'Which katakana is "tsu"?', question: 'Choose.', choices: [{id:'a',text:'チ'},{id:'b',text:'ツ'},{id:'c',text:'テ'},{id:'d',text:'ト'}], correctChoiceId: 'b', targets: [], difficulty: 1 },
      { id: 'qz-k2-2', type: 'multiple-choice', prompt: 'Which is "no"?', question: 'Choose.', choices: [{id:'a',text:'ナ'},{id:'b',text:'ニ'},{id:'c',text:'ヌ'},{id:'d',text:'ノ'}], correctChoiceId: 'd', targets: [], difficulty: 1 },
      { id: 'qz-k2-3', type: 'fill-in-blank', prompt: 'Write "nani" (what) in katakana.', sentenceTemplate: 'nani = {{blank}}', acceptedAnswers: ['ナニ'], targets: [], difficulty: 2 },
    ],
  },

  'lesson-dakuten-youon': {
    id: 'lesson-dakuten-youon', slug: 'dakuten-youon',
    title: 'Dakuten & Yōon', subtitle: 'Voiced sounds & combinations',
    jlptLevel: 'N5', estimatedMinutes: 15,
    introduces: [], prerequisites: [], tags: ['hiragana','katakana','N5'],
    contentBlocks: [
      { type: 'text', markdown: '**Dakuten (゛)** adds two strokes to a character, voicing the consonant: か→が (ka→ga), さ→ざ (sa→za), た→だ (ta→da), は→ば (ha→ba). **Handakuten (゜)** turns h-row into p-row: は→ぱ (ha→pa).' },
      { type: 'table', headers: ['Base','Dakuten','Change'], rows: [['か (ka)','が (ga)','k→g'],['さ (sa)','ざ (za)','s→z'],['た (ta)','だ (da)','t→d'],['は (ha)','ば (ba)','h→b'],['は (ha)','ぱ (pa)','h→p (handakuten)']] },
      { type: 'text', markdown: '**Yōon (拗音)** are combination sounds: a small や、ゆ、よ is written after an i-row character to create a new sound. Examples: きゃ (kya)、しゅ (shu)、ちょ (cho)、にゅ (nyu).' },
      { type: 'tip', markdown: 'The small や、ゆ、よ are written at half-size and are combined with the preceding character — they form ONE sound, not two.' },
      { type: 'example', sentence: { ja: 'びょういん', romaji: 'byouin', en: 'hospital' } },
    ],
    practiceExercises: [
      { id: 'ex-dy-1', type: 'multiple-choice', prompt: 'What does dakuten do to か?', question: 'Choose.', choices: [{id:'a',text:'Makes it pa'},{id:'b',text:'Makes it ga'},{id:'c',text:'Makes it ba'},{id:'d',text:'Makes it da'}], correctChoiceId: 'b', explanation: 'か + ゛= が (ga)', targets: [], difficulty: 1 },
      { id: 'ex-dy-2', type: 'multiple-choice', prompt: 'What sound is きゃ?', question: 'Choose.', choices: [{id:'a',text:'ki-a'},{id:'b',text:'kya'},{id:'c',text:'kia'},{id:'d',text:'kiya'}], correctChoiceId: 'b', explanation: 'きゃ = kya (one sound)', targets: [], difficulty: 1 },
    ],
    quiz: [
      { id: 'qz-dy-1', type: 'multiple-choice', prompt: 'Which is the dakuten version of さ?', question: 'Choose.', choices: [{id:'a',text:'ざ'},{id:'b',text:'だ'},{id:'c',text:'ば'},{id:'d',text:'が'}], correctChoiceId: 'a', explanation: 'さ→ざ (sa→za)', targets: [], difficulty: 1 },
      { id: 'qz-dy-2', type: 'multiple-choice', prompt: 'Handakuten (゜) turns は into which sound?', question: 'Choose.', choices: [{id:'a',text:'ba'},{id:'b',text:'da'},{id:'c',text:'pa'},{id:'d',text:'ga'}], correctChoiceId: 'c', explanation: 'は + ゜= ぱ (pa)', targets: [], difficulty: 1 },
      { id: 'qz-dy-3', type: 'fill-in-blank', prompt: 'びょういん means what?', sentenceTemplate: 'びょういん = {{blank}}', acceptedAnswers: ['hospital'], wordBankOptions: ['hospital','school','library','station'], targets: [], difficulty: 1 },
    ],
  },

  // ═══════════════════════════════════════════
  // CHAPTER 2 — Basic Sentences
  // ═══════════════════════════════════════════

  'lesson-wa-desu': {
    id: 'lesson-wa-desu', slug: 'wa-desu',
    title: 'は〜です: Basic Identification',
    jlptLevel: 'N5', estimatedMinutes: 15,
    introduces: ['grammar-wa-desu'], prerequisites: [], tags: ['grammar','N5'],
    contentBlocks: [
      { type: 'text', markdown: 'The most basic Japanese sentence pattern is **X は Y です** (X is Y). The particle **は** (read "wa") marks the topic. **です** means "is/am/are" in polite speech.' },
      { type: 'example', sentence: { ja: '私は学生です。', furigana: 'わたしはがくせいです。', romaji: 'Watashi wa gakusei desu.', en: 'I am a student.' } },
      { type: 'tip', markdown: 'は is written with the hiragana for "ha" but pronounced **"wa"** when used as the topic particle.' },
      { type: 'table', headers: ['Pattern','Example','Meaning'], rows: [['〜は〜です','私は田中です。','I am Tanaka.'],['〜は〜じゃありません','これは本じゃありません。','This is not a book.'],['〜は〜でした','彼は先生でした。','He was a teacher.']] },
      { type: 'example', sentence: { ja: 'これは本じゃありません。', furigana: 'これはほんじゃありません。', romaji: 'Kore wa hon ja arimasen.', en: 'This is not a book.' } },
    ],
    practiceExercises: [
      { id: 'ex-wd-1', type: 'multiple-choice', prompt: 'How do you say "I am a teacher"?', question: 'Choose.', choices: [{id:'a',text:'私は先生です。'},{id:'b',text:'私が先生です。'},{id:'c',text:'先生は私です。'},{id:'d',text:'私を先生です。'}], correctChoiceId: 'a', explanation: 'X は Y です: 私は先生です。', targets: ['grammar-wa-desu'], difficulty: 1 },
      { id: 'ex-wd-2', type: 'fill-in-blank', prompt: 'Complete: "She is not a student."', sentenceTemplate: '彼女は学生{{blank}}。', acceptedAnswers: ['じゃありません','ではありません'], wordBankOptions: ['です','じゃありません','でした','ではない'], explanation: 'Polite negative: じゃありません', targets: ['grammar-wa-desu'], difficulty: 1 },
      { id: 'ex-wd-3', type: 'sentence-construction', prompt: 'Arrange to say "This is a book."', targetSentence: 'これは本です。', scrambledTokens: ['これは','本','です。'], explanation: 'これは + 本 + です。', targets: ['grammar-wa-desu'], difficulty: 1 },
    ],
    quiz: [
      { id: 'qz-wd-1', type: 'multiple-choice', prompt: 'What does は mark in X は Y です?', question: 'Choose.', choices: [{id:'a',text:'The subject'},{id:'b',text:'The topic'},{id:'c',text:'The object'},{id:'d',text:'The verb'}], correctChoiceId: 'b', explanation: 'は marks the topic.', targets: ['grammar-wa-desu'], difficulty: 1 },
      { id: 'qz-wd-2', type: 'multiple-choice', prompt: 'Which sentence means "He was a teacher"?', question: 'Choose.', choices: [{id:'a',text:'彼は先生です。'},{id:'b',text:'彼は先生でした。'},{id:'c',text:'彼は先生じゃありません。'},{id:'d',text:'彼が先生です。'}], correctChoiceId: 'b', targets: ['grammar-wa-desu'], difficulty: 1 },
      { id: 'qz-wd-3', type: 'fill-in-blank', prompt: 'Complete: これは＿＿ですか。(What is this?)', sentenceTemplate: 'これは{{blank}}ですか。', acceptedAnswers: ['何','なん','なに'], wordBankOptions: ['何','どこ','だれ','いつ'], targets: ['grammar-wa-desu'], difficulty: 1 },
    ],
  },

  'lesson-kore-sore-are': {
    id: 'lesson-kore-sore-are', slug: 'kore-sore-are',
    title: 'これ・それ・あれ: This and That',
    jlptLevel: 'N5', estimatedMinutes: 12,
    introduces: ['grammar-kore-sore-are'], prerequisites: [], tags: ['grammar','N5'],
    contentBlocks: [
      { type: 'text', markdown: 'Japanese has a three-way distance system for demonstratives:\n- **これ** — this (near speaker)\n- **それ** — that (near listener)\n- **あれ** — that over there (far from both)\n- **どれ** — which one? (question)' },
      { type: 'comparison', items: [{label:'これ (kore)', markdown:'Near the **speaker**\n「これは何ですか。」\n(What is this?)'},{label:'それ (sore)', markdown:'Near the **listener**\n「それはペンです。」\n(That is a pen.)'},{label:'あれ (are)', markdown:'Far from **both**\n「あれは山です。」\n(That is a mountain.)'},{label:'どれ (dore)', markdown:'**Question**\n「どれがあなたのですか。」\n(Which one is yours?)'} ] },
      { type: 'warning', markdown: 'これ/それ/あれ stand alone as pronouns. To modify a noun directly, use **この/その/あの + noun**: この本 (this book), その本 (that book).' },
      { type: 'example', sentence: { ja: 'あれは何ですか。', furigana: 'あれはなんですか。', romaji: 'Are wa nan desu ka.', en: 'What is that over there?' } },
    ],
    practiceExercises: [
      { id: 'ex-ksa-1', type: 'multiple-choice', prompt: 'Which word refers to something near the listener?', question: 'Choose.', choices: [{id:'a',text:'これ'},{id:'b',text:'それ'},{id:'c',text:'あれ'},{id:'d',text:'どれ'}], correctChoiceId: 'b', explanation: 'それ = near listener', targets: ['grammar-kore-sore-are'], difficulty: 1 },
      { id: 'ex-ksa-2', type: 'fill-in-blank', prompt: 'Use ___ to say "that book over there".', sentenceTemplate: '{{blank}}本は古いです。', acceptedAnswers: ['あの'], wordBankOptions: ['この','その','あの','どの'], targets: [], difficulty: 1 },
    ],
    quiz: [
      { id: 'qz-ksa-1', type: 'multiple-choice', prompt: 'Which is correct for "this is a pen"?', question: 'Choose.', choices: [{id:'a',text:'それはペンです。'},{id:'b',text:'あれはペンです。'},{id:'c',text:'これはペンです。'},{id:'d',text:'どれはペンです。'}], correctChoiceId: 'c', targets: [], difficulty: 1 },
      { id: 'qz-ksa-2', type: 'multiple-choice', prompt: 'How do you say "that book" (modifying a noun, near listener)?', question: 'Choose.', choices: [{id:'a',text:'この本'},{id:'b',text:'その本'},{id:'c',text:'あの本'},{id:'d',text:'どの本'}], correctChoiceId: 'b', targets: [], difficulty: 1 },
      { id: 'qz-ksa-3', type: 'fill-in-blank', prompt: 'Fill in: ___ wa nan desu ka (What is that over there?)', sentenceTemplate: '{{blank}}は何ですか。', acceptedAnswers: ['あれ'], wordBankOptions: ['これ','それ','あれ','どれ'], targets: [], difficulty: 1 },
    ],
  },

  'lesson-no-possessive': {
    id: 'lesson-no-possessive', slug: 'no-possessive',
    title: 'の: The Possessive Particle',
    jlptLevel: 'N5', estimatedMinutes: 12,
    introduces: ['grammar-no-possessive'], prerequisites: [], tags: ['grammar','N5'],
    contentBlocks: [
      { type: 'text', markdown: 'The particle **の** connects two nouns to show possession or a descriptive relationship: **Noun A の Noun B** = "B of A" or "A\'s B".' },
      { type: 'example', sentence: { ja: 'これは私の本です。', furigana: 'これはわたしのほんです。', romaji: 'Kore wa watashi no hon desu.', en: 'This is my book.' } },
      { type: 'table', headers: ['Japanese','Meaning'], rows: [['田中さんの車','Tanaka-san\'s car'],['日本語の先生','Japanese language teacher'],['東京の地図','map of Tokyo'],['あなたの名前','your name']] },
      { type: 'tip', markdown: 'の can replace a previously mentioned noun: 大きいのをください = "Please give me the big one."' },
    ],
    practiceExercises: [
      { id: 'ex-no-1', type: 'multiple-choice', prompt: 'How do you say "my name"?', question: 'Choose.', choices: [{id:'a',text:'名前私'},{id:'b',text:'私の名前'},{id:'c',text:'名前は私'},{id:'d',text:'私は名前'}], correctChoiceId: 'b', explanation: '私の名前 = my name', targets: ['grammar-no-possessive'], difficulty: 1 },
      { id: 'ex-no-2', type: 'sentence-construction', prompt: 'Say "This is Tanaka-san\'s umbrella."', targetSentence: 'これは田中さんの傘です。', scrambledTokens: ['これは','田中さんの','傘','です。'], targets: [], difficulty: 1 },
    ],
    quiz: [
      { id: 'qz-no-1', type: 'multiple-choice', prompt: 'What does 日本語の先生 mean?', question: 'Choose.', choices: [{id:'a',text:'I am a Japanese teacher'},{id:'b',text:'Japanese language teacher'},{id:'c',text:'Teacher of Japan'},{id:'d',text:'My Japanese teacher'}], correctChoiceId: 'b', targets: [], difficulty: 1 },
      { id: 'qz-no-2', type: 'fill-in-blank', prompt: 'Fill in: あなた___ 名前は何ですか。', sentenceTemplate: 'あなた{{blank}}名前は何ですか。', acceptedAnswers: ['の'], wordBankOptions: ['の','は','が','を'], targets: [], difficulty: 1 },
      { id: 'qz-no-3', type: 'multiple-choice', prompt: 'Which is "map of Tokyo"?', question: 'Choose.', choices: [{id:'a',text:'東京は地図'},{id:'b',text:'東京に地図'},{id:'c',text:'東京の地図'},{id:'d',text:'東京を地図'}], correctChoiceId: 'c', targets: [], difficulty: 1 },
    ],
  },

  'lesson-ka-question': {
    id: 'lesson-ka-question', slug: 'ka-question',
    title: 'か: Asking Questions',
    jlptLevel: 'N5', estimatedMinutes: 10,
    introduces: ['grammar-ka-question'], prerequisites: [], tags: ['grammar','N5'],
    contentBlocks: [
      { type: 'text', markdown: 'In Japanese, you make a question simply by adding **か** to the end of a sentence. No word order change is needed!' },
      { type: 'comparison', items: [{label:'Statement', markdown:'彼は先生です。\n(He is a teacher.)'},{label:'Question', markdown:'彼は先生ですか。\n(Is he a teacher?)'}] },
      { type: 'text', markdown: 'For **wh-questions**, use question words: **何 (nani/nan)** = what, **どこ** = where, **だれ** = who, **いつ** = when, **どう** = how.' },
      { type: 'example', sentence: { ja: 'お名前は何ですか。', furigana: 'おなまえはなんですか。', romaji: 'O-namae wa nan desu ka.', en: 'What is your name?' } },
    ],
    practiceExercises: [
      { id: 'ex-kq-1', type: 'multiple-choice', prompt: 'How do you turn a statement into a question?', question: 'Choose.', choices: [{id:'a',text:'Change the word order'},{id:'b',text:'Add か at the end'},{id:'c',text:'Add は at the start'},{id:'d',text:'Add です at the end'}], correctChoiceId: 'b', targets: ['grammar-ka-question'], difficulty: 1 },
      { id: 'ex-kq-2', type: 'fill-in-blank', prompt: 'Complete: "___ is this?" using か.', sentenceTemplate: 'これは何{{blank}}。', acceptedAnswers: ['ですか'], wordBankOptions: ['です','ですか','でした','じゃない'], targets: [], difficulty: 1 },
    ],
    quiz: [
      { id: 'qz-kq-1', type: 'multiple-choice', prompt: 'Which question word means "where"?', question: 'Choose.', choices: [{id:'a',text:'何'},{id:'b',text:'だれ'},{id:'c',text:'どこ'},{id:'d',text:'いつ'}], correctChoiceId: 'c', targets: [], difficulty: 1 },
      { id: 'qz-kq-2', type: 'multiple-choice', prompt: 'Which is "Who is she?"', question: 'Choose.', choices: [{id:'a',text:'彼女はどこですか。'},{id:'b',text:'彼女はだれですか。'},{id:'c',text:'彼女は何ですか。'},{id:'d',text:'彼女はいつですか。'}], correctChoiceId: 'b', targets: [], difficulty: 1 },
      { id: 'qz-kq-3', type: 'fill-in-blank', prompt: 'Complete: 明日___ 暇ですか。(Are you free tomorrow?)', sentenceTemplate: '明日{{blank}}暇ですか。', acceptedAnswers: ['は','、'], wordBankOptions: ['は','が','を','に'], targets: [], difficulty: 2 },
    ],
  },

  // ═══════════════════════════════════════════
  // CHAPTER 3 — Numbers & Time
  // ═══════════════════════════════════════════

  'lesson-numbers': {
    id: 'lesson-numbers', slug: 'numbers',
    title: 'Numbers 1–100',
    jlptLevel: 'N5', estimatedMinutes: 15,
    introduces: [], prerequisites: [], tags: ['numbers','N5'],
    contentBlocks: [
      { type: 'text', markdown: 'Japanese uses the same number system for 1–99. Learn the base numbers, then combine them: **十 (juu) = 10**, so 11 = 十一 (juuichi), 20 = 二十 (nijuu), 99 = 九十九 (kyuujuukyuu).' },
      { type: 'table', headers: ['Number','Kanji','Reading'], rows: [['1','一','ichi'],['2','二','ni'],['3','三','san'],['4','四','shi/yon'],['5','五','go'],['6','六','roku'],['7','七','shichi/nana'],['8','八','hachi'],['9','九','ku/kyuu'],['10','十','juu'],['100','百','hyaku']] },
      { type: 'tip', markdown: '4 has two readings: し and よん. In many contexts よん is preferred to avoid confusion with 死 (shi = death).' },
    ],
    practiceExercises: [
      { id: 'ex-num-1', type: 'multiple-choice', prompt: 'What is 七 in romaji?', question: 'Choose.', choices: [{id:'a',text:'roku'},{id:'b',text:'shichi or nana'},{id:'c',text:'hachi'},{id:'d',text:'ku'}], correctChoiceId: 'b', targets: [], difficulty: 1 },
      { id: 'ex-num-2', type: 'fill-in-blank', prompt: 'How do you say 25 in Japanese?', sentenceTemplate: '25 = 二十{{blank}}', acceptedAnswers: ['五','ご'], wordBankOptions: ['三','四','五','六'], targets: [], difficulty: 1 },
    ],
    quiz: [
      { id: 'qz-num-1', type: 'multiple-choice', prompt: 'How do you say 47 in Japanese?', question: 'Choose.', choices: [{id:'a',text:'四十七'},{id:'b',text:'七十四'},{id:'c',text:'四七'},{id:'d',text:'十四七'}], correctChoiceId: 'a', explanation: '四十七 = yonjuunana', targets: [], difficulty: 1 },
      { id: 'qz-num-2', type: 'multiple-choice', prompt: 'What is 三十 (sanjuu)?', question: 'Choose.', choices: [{id:'a',text:'13'},{id:'b',text:'30'},{id:'c',text:'3'},{id:'d',text:'33'}], correctChoiceId: 'b', targets: [], difficulty: 1 },
      { id: 'qz-num-3', type: 'fill-in-blank', prompt: 'Write 8 in kanji.', sentenceTemplate: '8 in kanji = {{blank}}', acceptedAnswers: ['八'], targets: [], difficulty: 1 },
    ],
  },

  'lesson-time': {
    id: 'lesson-time', slug: 'time',
    title: 'Telling the Time',
    jlptLevel: 'N5', estimatedMinutes: 12,
    introduces: [], prerequisites: [], tags: ['time','N5'],
    contentBlocks: [
      { type: 'text', markdown: 'To say the time: **Number + 時 (ji) = o\'clock**, **Number + 分 (fun/pun) = minutes**. Ask the time with **今何時ですか (Ima nanji desu ka)** = "What time is it now?"' },
      { type: 'table', headers: ['Time','Japanese','Reading'], rows: [['1:00','一時','ichiji'],['3:30','三時半','sanji han'],['7:15','七時十五分','shichiji juugofun'],['12:00','十二時','juuniji']] },
      { type: 'tip', markdown: '半 (han) means "half past". 三時半 = 3:30. Some minutes have irregular readings: 1分=いっぷん, 3分=さんぷん, 6分=ろっぷん.' },
    ],
    practiceExercises: [
      { id: 'ex-tm-1', type: 'multiple-choice', prompt: 'How do you say "3 o\'clock"?', question: 'Choose.', choices: [{id:'a',text:'三分'},{id:'b',text:'三時'},{id:'c',text:'三日'},{id:'d',text:'三半'}], correctChoiceId: 'b', explanation: '三時 = sanji = 3 o\'clock', targets: [], difficulty: 1 },
      { id: 'ex-tm-2', type: 'fill-in-blank', prompt: 'What does 半 mean in time?', sentenceTemplate: '半 means {{blank}} past.', acceptedAnswers: ['half','30 minutes'], wordBankOptions: ['half','quarter','full','double'], targets: [], difficulty: 1 },
    ],
    quiz: [
      { id: 'qz-tm-1', type: 'multiple-choice', prompt: 'How do you say "7:30"?', question: 'Choose.', choices: [{id:'a',text:'七時三十'},{id:'b',text:'七時半'},{id:'c',text:'七半時'},{id:'d',text:'半七時'}], correctChoiceId: 'b', targets: [], difficulty: 1 },
      { id: 'qz-tm-2', type: 'multiple-choice', prompt: 'What does 今何時ですか mean?', question: 'Choose.', choices: [{id:'a',text:'What day is it?'},{id:'b',text:'What time is it now?'},{id:'c',text:'How old are you?'},{id:'d',text:'When is it?'}], correctChoiceId: 'b', targets: [], difficulty: 1 },
      { id: 'qz-tm-3', type: 'fill-in-blank', prompt: 'How do you say "2 o\'clock" in Japanese?', sentenceTemplate: '2 o\'clock = {{blank}}時', acceptedAnswers: ['二','に'], targets: [], difficulty: 1 },
    ],
  },

  'lesson-dates': {
    id: 'lesson-dates', slug: 'dates',
    title: 'Days & Dates',
    jlptLevel: 'N5', estimatedMinutes: 12,
    introduces: [], prerequisites: [], tags: ['time','N5'],
    contentBlocks: [
      { type: 'text', markdown: 'Days of the week end in **曜日 (youbi)**. Months use **Number + 月 (gatsu)**. Dates use **Number + 日 (nichi/ka)** — many dates have irregular readings.' },
      { type: 'table', headers: ['Day','Reading'], rows: [['月曜日','getsuyoubi (Monday)'],['火曜日','kayoubi (Tuesday)'],['水曜日','suiyoubi (Wednesday)'],['木曜日','mokuyoubi (Thursday)'],['金曜日','kinyoubi (Friday)'],['土曜日','doyoubi (Saturday)'],['日曜日','nichiyoubi (Sunday)']] },
      { type: 'tip', markdown: 'The day names contain kanji for moon (月), fire (火), water (水), tree (木), gold (金), earth (土), and sun (日).' },
    ],
    practiceExercises: [
      { id: 'ex-dt-1', type: 'multiple-choice', prompt: 'What is 金曜日 (kinyoubi)?', question: 'Choose.', choices: [{id:'a',text:'Thursday'},{id:'b',text:'Friday'},{id:'c',text:'Saturday'},{id:'d',text:'Sunday'}], correctChoiceId: 'b', targets: [], difficulty: 1 },
      { id: 'ex-dt-2', type: 'fill-in-blank', prompt: 'How do you say "March" in Japanese?', sentenceTemplate: 'March = {{blank}}月', acceptedAnswers: ['三','さん'], wordBankOptions: ['一','二','三','四'], targets: [], difficulty: 1 },
    ],
    quiz: [
      { id: 'qz-dt-1', type: 'multiple-choice', prompt: 'Which day is 水曜日 (suiyoubi)?', question: 'Choose.', choices: [{id:'a',text:'Monday'},{id:'b',text:'Tuesday'},{id:'c',text:'Wednesday'},{id:'d',text:'Thursday'}], correctChoiceId: 'c', targets: [], difficulty: 1 },
      { id: 'qz-dt-2', type: 'multiple-choice', prompt: 'How do you ask "What day is today?"', question: 'Choose.', choices: [{id:'a',text:'今日は何時ですか。'},{id:'b',text:'今日は何曜日ですか。'},{id:'c',text:'今日は何月ですか。'},{id:'d',text:'今日は何日ですか。'}], correctChoiceId: 'b', targets: [], difficulty: 1 },
      { id: 'qz-dt-3', type: 'fill-in-blank', prompt: 'What kanji is in Sunday (日曜日)?', sentenceTemplate: 'Sunday contains the kanji for {{blank}}.', acceptedAnswers: ['sun','day','Sunday'], wordBankOptions: ['sun','moon','fire','water'], targets: [], difficulty: 1 },
    ],
  },

  // ═══════════════════════════════════════════
  // CHAPTER 4 — Existence & Location
  // ═══════════════════════════════════════════

  'lesson-arimasu-imasu': {
    id: 'lesson-arimasu-imasu', slug: 'arimasu-imasu',
    title: 'あります vs います', subtitle: 'Existence in Japanese',
    jlptLevel: 'N5', estimatedMinutes: 15,
    introduces: ['grammar-arimasu-imasu'], prerequisites: [], tags: ['grammar','N5'],
    contentBlocks: [
      { type: 'text', markdown: 'Japanese has two "existence" verbs:\n- **あります** — for inanimate things (objects, plants, abstract concepts)\n- **います** — for animate beings (people, animals)' },
      { type: 'comparison', items: [{label:'あります (inanimate)', markdown:'机の上に本**があります**。\n(There is a book on the desk.)'},{label:'います (animate)', markdown:'公園に犬**がいます**。\n(There is a dog in the park.)'}] },
      { type: 'example', sentence: { ja: '冷蔵庫の中にビールがあります。', romaji: 'Reizōko no naka ni bīru ga arimasu.', en: 'There is beer in the refrigerator.' } },
      { type: 'tip', markdown: 'For possession: お金がありますか = "Do you have money?". Use あります even for abstract things like time and plans.' },
    ],
    practiceExercises: [
      { id: 'ex-ai-1', type: 'multiple-choice', prompt: 'Which verb do you use for "there is a cat"?', question: 'Choose.', choices: [{id:'a',text:'あります'},{id:'b',text:'います'},{id:'c',text:'です'},{id:'d',text:'します'}], correctChoiceId: 'b', explanation: '猫は animate → います', targets: ['grammar-arimasu-imasu'], difficulty: 1 },
      { id: 'ex-ai-2', type: 'fill-in-blank', prompt: 'Complete: 机の上に本が___。', sentenceTemplate: '机の上に本が{{blank}}。', acceptedAnswers: ['あります'], wordBankOptions: ['あります','います','です','します'], targets: [], difficulty: 1 },
    ],
    quiz: [
      { id: 'qz-ai-1', type: 'multiple-choice', prompt: 'Which verb for "there are students in the classroom"?', question: 'Choose.', choices: [{id:'a',text:'あります'},{id:'b',text:'います'},{id:'c',text:'です'},{id:'d',text:'する'}], correctChoiceId: 'b', targets: [], difficulty: 1 },
      { id: 'qz-ai-2', type: 'multiple-choice', prompt: 'Which verb for "there is a plan"?', question: 'Choose.', choices: [{id:'a',text:'あります'},{id:'b',text:'います'},{id:'c',text:'です'},{id:'d',text:'なります'}], correctChoiceId: 'a', explanation: 'Plans are inanimate → あります', targets: [], difficulty: 2 },
      { id: 'qz-ai-3', type: 'fill-in-blank', prompt: 'Complete: 公園に子供が___。', sentenceTemplate: '公園に子供が{{blank}}。', acceptedAnswers: ['います'], wordBankOptions: ['あります','います','です','ます'], targets: [], difficulty: 1 },
    ],
  },

  'lesson-ni-de-location': {
    id: 'lesson-ni-de-location', slug: 'ni-de-location',
    title: 'に vs で: Location Particles',
    jlptLevel: 'N5', estimatedMinutes: 15,
    introduces: ['grammar-ni-location','grammar-de-location'], prerequisites: [], tags: ['grammar','N5'],
    contentBlocks: [
      { type: 'text', markdown: 'Two particles express location, but they work differently:\n- **に** — where something *exists* or the *destination* of movement\n- **で** — where an *action takes place*, or the *means* of doing something' },
      { type: 'comparison', items: [{label:'に (existence/destination)', markdown:'本は机の上**に**あります。\n(The book is on the desk.)\n\n学校**に**行きます。\n(I go to school.)'},{label:'で (action location/means)', markdown:'図書館**で**勉強します。\n(I study at the library.)\n\nバス**で**来ました。\n(I came by bus.)'}] },
      { type: 'tip', markdown: 'Easy test: if the verb is あります/います, use に. If you\'re doing an action, use で.' },
    ],
    practiceExercises: [
      { id: 'ex-nd-1', type: 'multiple-choice', prompt: 'I study at the library — which particle?', question: 'Choose: 図書館___勉強します。', choices: [{id:'a',text:'に'},{id:'b',text:'で'},{id:'c',text:'は'},{id:'d',text:'が'}], correctChoiceId: 'b', explanation: 'Action (勉強する) → で', targets: [], difficulty: 1 },
      { id: 'ex-nd-2', type: 'fill-in-blank', prompt: 'Complete: 鍵は机の上___あります。', sentenceTemplate: '鍵は机の上{{blank}}あります。', acceptedAnswers: ['に'], wordBankOptions: ['に','で','は','が'], targets: [], difficulty: 1 },
    ],
    quiz: [
      { id: 'qz-nd-1', type: 'multiple-choice', prompt: 'I go to school — correct particle?', question: 'Choose: 学校___行きます。', choices: [{id:'a',text:'で'},{id:'b',text:'を'},{id:'c',text:'に'},{id:'d',text:'は'}], correctChoiceId: 'c', explanation: 'Destination → に', targets: [], difficulty: 1 },
      { id: 'qz-nd-2', type: 'multiple-choice', prompt: 'She came by bicycle — correct particle?', question: 'Choose: 彼女は自転車___来ました。', choices: [{id:'a',text:'に'},{id:'b',text:'で'},{id:'c',text:'を'},{id:'d',text:'が'}], correctChoiceId: 'b', explanation: 'Means → で', targets: [], difficulty: 1 },
      { id: 'qz-nd-3', type: 'fill-in-blank', prompt: 'Complete: 公園___犬がいます。(There is a dog in the park.)', sentenceTemplate: '公園{{blank}}犬がいます。', acceptedAnswers: ['に'], wordBankOptions: ['に','で','は','を'], targets: [], difficulty: 1 },
    ],
  },

  'lesson-kosoado-place': {
    id: 'lesson-kosoado-place', slug: 'kosoado-place',
    title: 'こそあど Place Words',
    jlptLevel: 'N5', estimatedMinutes: 10,
    introduces: ['grammar-koso-ado'], prerequisites: [], tags: ['grammar','N5'],
    contentBlocks: [
      { type: 'text', markdown: 'Place demonstratives follow the same **ko-so-a-do** pattern:\n- **ここ** — here (near speaker)\n- **そこ** — there (near listener)\n- **あそこ** — over there (far from both)\n- **どこ** — where (question)' },
      { type: 'table', headers: ['Word','Meaning','Example'], rows: [['ここ','here','ここに座ってください。(Please sit here.)'],['そこ','there','そこは危ないです。(That place is dangerous.)'],['あそこ','over there','あそこに駅があります。(There is a station over there.)'],['どこ','where','トイレはどこですか。(Where is the restroom?)']] },
      { type: 'tip', markdown: 'こちら/そちら/あちら/どちら are the polite/formal equivalents, also used for directions and people.' },
    ],
    practiceExercises: [
      { id: 'ex-kap-1', type: 'multiple-choice', prompt: '"Where is the station?" — which word?', question: 'Choose.', choices: [{id:'a',text:'ここ'},{id:'b',text:'そこ'},{id:'c',text:'あそこ'},{id:'d',text:'どこ'}], correctChoiceId: 'd', targets: [], difficulty: 1 },
      { id: 'ex-kap-2', type: 'fill-in-blank', prompt: '"Please sit here" — use the correct word.', sentenceTemplate: '{{blank}}に座ってください。', acceptedAnswers: ['ここ'], wordBankOptions: ['ここ','そこ','あそこ','どこ'], targets: [], difficulty: 1 },
    ],
    quiz: [
      { id: 'qz-kap-1', type: 'multiple-choice', prompt: 'Which word means "there" (near the listener)?', question: 'Choose.', choices: [{id:'a',text:'ここ'},{id:'b',text:'そこ'},{id:'c',text:'あそこ'},{id:'d',text:'どこ'}], correctChoiceId: 'b', targets: [], difficulty: 1 },
      { id: 'qz-kap-2', type: 'multiple-choice', prompt: 'You see Mt. Fuji in the distance. Which do you use?', question: 'Choose.', choices: [{id:'a',text:'ここに'},{id:'b',text:'そこに'},{id:'c',text:'あそこに'},{id:'d',text:'どこに'}], correctChoiceId: 'c', targets: [], difficulty: 1 },
      { id: 'qz-kap-3', type: 'fill-in-blank', prompt: 'Complete: トイレは___ですか。', sentenceTemplate: 'トイレは{{blank}}ですか。', acceptedAnswers: ['どこ'], wordBankOptions: ['ここ','そこ','あそこ','どこ'], targets: [], difficulty: 1 },
    ],
  },

  // ═══════════════════════════════════════════
  // CHAPTER 5 — Verbs Present
  // ═══════════════════════════════════════════

  'lesson-verb-groups': {
    id: 'lesson-verb-groups', slug: 'verb-groups',
    title: 'Verb Groups: う・る・Irregular',
    jlptLevel: 'N5', estimatedMinutes: 15,
    introduces: ['grammar-verb-groups'], prerequisites: [], tags: ['grammar','N5'],
    contentBlocks: [
      { type: 'text', markdown: 'Japanese verbs fall into three groups that determine how they conjugate:\n- **Group 1 (う-verbs / godan)**: end in -u, -ku, -gu, -su, -tsu, -nu, -bu, -mu, or -ru (when vowel before -ru is NOT い/え)\n- **Group 2 (る-verbs / ichidan)**: end in -る with い or え sound before it\n- **Group 3 (irregular)**: only する (suru) and くる (kuru)' },
      { type: 'table', headers: ['Group','Example','Dictionary form ends in'], rows: [['Group 1','飲む、書く、話す、帰る','various u-sounds'],['Group 2','食べる、見る、起きる','-る (after い/え sound)'],['Group 3','する、くる','irregular']] },
      { type: 'warning', markdown: 'Some verbs end in -る but are Group 1: **帰る (kaeru)** = to return, **走る (hashiru)** = to run. When in doubt, look it up!' },
    ],
    practiceExercises: [
      { id: 'ex-vg-1', type: 'multiple-choice', prompt: '食べる belongs to which group?', question: 'Choose.', choices: [{id:'a',text:'Group 1 (u-verb)'},{id:'b',text:'Group 2 (ru-verb)'},{id:'c',text:'Group 3 (irregular)'},{id:'d',text:'None'}], correctChoiceId: 'b', explanation: '食べる: be-ru → い sound before る → Group 2', targets: [], difficulty: 1 },
      { id: 'ex-vg-2', type: 'multiple-choice', prompt: 'Which verb is irregular (Group 3)?', question: 'Choose.', choices: [{id:'a',text:'飲む'},{id:'b',text:'食べる'},{id:'c',text:'する'},{id:'d',text:'書く'}], correctChoiceId: 'c', targets: [], difficulty: 1 },
    ],
    quiz: [
      { id: 'qz-vg-1', type: 'multiple-choice', prompt: '書く belongs to which group?', question: 'Choose.', choices: [{id:'a',text:'Group 1'},{id:'b',text:'Group 2'},{id:'c',text:'Group 3'},{id:'d',text:'None'}], correctChoiceId: 'a', explanation: '書く ends in -ku (u-verb)', targets: [], difficulty: 1 },
      { id: 'qz-vg-2', type: 'multiple-choice', prompt: '見る belongs to which group?', question: 'Choose.', choices: [{id:'a',text:'Group 1'},{id:'b',text:'Group 2'},{id:'c',text:'Group 3'},{id:'d',text:'None'}], correctChoiceId: 'b', explanation: '見る: mi-ru → い sound before る → Group 2', targets: [], difficulty: 1 },
      { id: 'qz-vg-3', type: 'multiple-choice', prompt: 'くる (come) belongs to which group?', question: 'Choose.', choices: [{id:'a',text:'Group 1'},{id:'b',text:'Group 2'},{id:'c',text:'Group 3'},{id:'d',text:'None'}], correctChoiceId: 'c', targets: [], difficulty: 1 },
    ],
  },

  'lesson-masu-form': {
    id: 'lesson-masu-form', slug: 'masu-form',
    title: 'Polite Present: 〜ます',
    jlptLevel: 'N5', estimatedMinutes: 15,
    introduces: ['grammar-masu-form'], prerequisites: [], tags: ['grammar','N5'],
    contentBlocks: [
      { type: 'text', markdown: '〜ます is the polite non-past form. It expresses both **present habits** and **future intentions**.' },
      { type: 'table', headers: ['Group','Dictionary','ます form','Rule'], rows: [['G1','飲む','飲みます','change -u to -i, add ます'],['G1','書く','書きます','change -ku to -ki, add ます'],['G2','食べる','食べます','drop -る, add ます'],['G3','する','します','irregular'],['G3','くる','きます','irregular']] },
      { type: 'example', sentence: { ja: '私は毎朝コーヒーを飲みます。', romaji: 'Watashi wa maiasa koohii wo nomimasu.', en: 'I drink coffee every morning.' } },
      { type: 'tip', markdown: 'ます-form covers both "I drink" (habit) and "I will drink" (future). Use time words for clarity.' },
    ],
    practiceExercises: [
      { id: 'ex-mf-1', type: 'multiple-choice', prompt: 'What is the ます form of 食べる?', question: 'Choose.', choices: [{id:'a',text:'食べます'},{id:'b',text:'食べる'},{id:'c',text:'食べます'},{id:'d',text:'食べます'}], correctChoiceId: 'a', targets: [], difficulty: 1 },
      { id: 'ex-mf-2', type: 'fill-in-blank', prompt: 'Complete: 来週、京都に___。(I will go to Kyoto.)', sentenceTemplate: '来週、京都に{{blank}}。', acceptedAnswers: ['行きます'], wordBankOptions: ['行きます','行く','行った','行って'], targets: [], difficulty: 1 },
    ],
    quiz: [
      { id: 'qz-mf-1', type: 'multiple-choice', prompt: 'ます form of 飲む?', question: 'Choose.', choices: [{id:'a',text:'飲みます'},{id:'b',text:'飲ます'},{id:'c',text:'のみます'},{id:'d',text:'飲ります'}], correctChoiceId: 'a', targets: [], difficulty: 1 },
      { id: 'qz-mf-2', type: 'multiple-choice', prompt: 'ます form of する?', question: 'Choose.', choices: [{id:'a',text:'するます'},{id:'b',text:'します'},{id:'c',text:'せます'},{id:'d',text:'さます'}], correctChoiceId: 'b', targets: [], difficulty: 1 },
      { id: 'qz-mf-3', type: 'fill-in-blank', prompt: 'ます form of くる?', sentenceTemplate: 'くる → {{blank}}', acceptedAnswers: ['きます'], wordBankOptions: ['きます','くます','こます','かます'], targets: [], difficulty: 1 },
    ],
  },

  'lesson-masen-form': {
    id: 'lesson-masen-form', slug: 'masen-form',
    title: 'Polite Negative: 〜ません',
    jlptLevel: 'N5', estimatedMinutes: 12,
    introduces: ['grammar-masen-form'], prerequisites: [], tags: ['grammar','N5'],
    contentBlocks: [
      { type: 'text', markdown: 'To negate a polite verb, replace **ます → ません**. The stem stays the same.' },
      { type: 'table', headers: ['Positive','Negative','Meaning'], rows: [['飲みます','飲みません','drink / don\'t drink'],['食べます','食べません','eat / don\'t eat'],['します','しません','do / don\'t do'],['きます','きません','come / don\'t come']] },
      { type: 'example', sentence: { ja: '私はお酒を飲みません。', romaji: 'Watashi wa osake wo nomimasen.', en: "I don't drink alcohol." } },
      { type: 'tip', markdown: 'ませんか (with rising intonation) is an **invitation**: 一緒に食べませんか = "Shall we eat together?"' },
    ],
    practiceExercises: [
      { id: 'ex-mn-1', type: 'multiple-choice', prompt: 'Negate 食べます.', question: 'Choose.', choices: [{id:'a',text:'食べません'},{id:'b',text:'食べない'},{id:'c',text:'食べませんか'},{id:'d',text:'食べません'}], correctChoiceId: 'a', targets: [], difficulty: 1 },
      { id: 'ex-mn-2', type: 'fill-in-blank', prompt: 'Complete: 今日は学校に___。(I won\'t come to school today.)', sentenceTemplate: '今日は学校に{{blank}}。', acceptedAnswers: ['きません'], wordBankOptions: ['きます','きません','きた','くる'], targets: [], difficulty: 1 },
    ],
    quiz: [
      { id: 'qz-mn-1', type: 'multiple-choice', prompt: 'Negate します.', question: 'Choose.', choices: [{id:'a',text:'しません'},{id:'b',text:'するません'},{id:'c',text:'しない'},{id:'d',text:'しますか'}], correctChoiceId: 'a', targets: [], difficulty: 1 },
      { id: 'qz-mn-2', type: 'multiple-choice', prompt: 'What does 食べませんか mean as an invitation?', question: 'Choose.', choices: [{id:'a',text:'Do you eat?'},{id:'b',text:'I don\'t eat.'},{id:'c',text:'Shall we eat?'},{id:'d',text:'I ate.'}], correctChoiceId: 'c', targets: [], difficulty: 1 },
      { id: 'qz-mn-3', type: 'fill-in-blank', prompt: 'Negate 飲みます.', sentenceTemplate: '飲み{{blank}}', acceptedAnswers: ['ません'], wordBankOptions: ['ます','ません','した','ない'], targets: [], difficulty: 1 },
    ],
  },

  'lesson-wo-object': {
    id: 'lesson-wo-object', slug: 'wo-object',
    title: 'を: The Object Particle',
    jlptLevel: 'N5', estimatedMinutes: 10,
    introduces: ['grammar-wo-object'], prerequisites: [], tags: ['grammar','N5'],
    contentBlocks: [
      { type: 'text', markdown: '**を** (pronounced "o") marks the **direct object** of a transitive verb — the thing the action is performed on.' },
      { type: 'example', sentence: { ja: '毎朝、新聞を読みます。', romaji: 'Maiasa, shinbun wo yomimasu.', en: 'I read the newspaper every morning.' } },
      { type: 'table', headers: ['Object','Verb','Sentence'], rows: [['本を','読む','本を読みます (read a book)'],['コーヒーを','飲む','コーヒーを飲みます (drink coffee)'],['音楽を','聴く','音楽を聴きます (listen to music)']] },
      { type: 'warning', markdown: 'を is only used with **transitive verbs**. Never use を with あります/います.' },
    ],
    practiceExercises: [
      { id: 'ex-wo-1', type: 'fill-in-blank', prompt: 'Complete: 本___読みます。', sentenceTemplate: '本{{blank}}読みます。', acceptedAnswers: ['を'], wordBankOptions: ['を','は','が','に'], targets: [], difficulty: 1 },
      { id: 'ex-wo-2', type: 'multiple-choice', prompt: '"Drink water" — correct particle?', question: '水___飲みます。', choices: [{id:'a',text:'は'},{id:'b',text:'を'},{id:'c',text:'が'},{id:'d',text:'に'}], correctChoiceId: 'b', targets: [], difficulty: 1 },
    ],
    quiz: [
      { id: 'qz-wo-1', type: 'multiple-choice', prompt: 'Which particle marks the direct object?', question: 'Choose.', choices: [{id:'a',text:'は'},{id:'b',text:'が'},{id:'c',text:'を'},{id:'d',text:'に'}], correctChoiceId: 'c', targets: [], difficulty: 1 },
      { id: 'qz-wo-2', type: 'multiple-choice', prompt: '"Listen to music" — correct particle?', question: '音楽___聴きます。', choices: [{id:'a',text:'に'},{id:'b',text:'で'},{id:'c',text:'を'},{id:'d',text:'が'}], correctChoiceId: 'c', targets: [], difficulty: 1 },
      { id: 'qz-wo-3', type: 'fill-in-blank', prompt: 'Complete: テレビ___見ます。', sentenceTemplate: 'テレビ{{blank}}見ます。', acceptedAnswers: ['を'], wordBankOptions: ['を','は','に','で'], targets: [], difficulty: 1 },
    ],
  },

  // ═══════════════════════════════════════════
  // CHAPTER 6 — Adjectives
  // ═══════════════════════════════════════════

  'lesson-i-adjectives': {
    id: 'lesson-i-adjectives', slug: 'i-adjectives',
    title: 'い-Adjectives',
    jlptLevel: 'N5', estimatedMinutes: 15,
    introduces: ['grammar-i-adjective'], prerequisites: [], tags: ['grammar','N5'],
    contentBlocks: [
      { type: 'text', markdown: 'い-adjectives end in **-い** and conjugate on their own. In the negative, drop -い and add **-くない**.' },
      { type: 'table', headers: ['Form','Rule','Example'], rows: [['Present positive','Adj-い + です','大きいです (is big)'],['Present negative','root + くない + です','大きくないです (is not big)'],['Pre-noun','Adj-い + Noun','大きい犬 (big dog)']] },
      { type: 'example', sentence: { ja: 'この映画は面白いです。', romaji: 'Kono eiga wa omoshiroi desu.', en: 'This movie is interesting.' } },
      { type: 'warning', markdown: 'The adjective **いい** (good) is irregular: its conjugated base is **よ-**: よくない (not good), よかった (was good).' },
    ],
    practiceExercises: [
      { id: 'ex-ia-1', type: 'multiple-choice', prompt: 'Negate 大きいです.', question: 'Choose.', choices: [{id:'a',text:'大きいないです'},{id:'b',text:'大きくないです'},{id:'c',text:'大きじゃないです'},{id:'d',text:'大きではないです'}], correctChoiceId: 'b', targets: [], difficulty: 1 },
      { id: 'ex-ia-2', type: 'fill-in-blank', prompt: 'Negate いいです (good).', sentenceTemplate: 'いい → {{blank}}です', acceptedAnswers: ['よくない'], wordBankOptions: ['いくない','よくない','いじゃない','よじゃない'], targets: [], difficulty: 2 },
    ],
    quiz: [
      { id: 'qz-ia-1', type: 'multiple-choice', prompt: 'Negate 面白いです.', question: 'Choose.', choices: [{id:'a',text:'面白くないです'},{id:'b',text:'面白いじゃないです'},{id:'c',text:'面白いないです'},{id:'d',text:'面白ではない'}], correctChoiceId: 'a', targets: [], difficulty: 1 },
      { id: 'qz-ia-2', type: 'multiple-choice', prompt: 'Which form modifies a noun?', question: '大きい___犬 or 大きい + の + 犬?', choices: [{id:'a',text:'大きい犬 (adj directly)'},{id:'b',text:'大きいな犬'},{id:'c',text:'大きの犬'},{id:'d',text:'大きく犬'}], correctChoiceId: 'a', targets: [], difficulty: 1 },
      { id: 'qz-ia-3', type: 'fill-in-blank', prompt: 'Negate 寒いです (cold).', sentenceTemplate: '寒い → {{blank}}です', acceptedAnswers: ['寒くない'], wordBankOptions: ['寒くない','寒いくない','寒じゃない','さむくない'], targets: [], difficulty: 1 },
    ],
  },

  'lesson-na-adjectives': {
    id: 'lesson-na-adjectives', slug: 'na-adjectives',
    title: 'な-Adjectives',
    jlptLevel: 'N5', estimatedMinutes: 12,
    introduces: ['grammar-na-adjective'], prerequisites: [], tags: ['grammar','N5'],
    contentBlocks: [
      { type: 'text', markdown: 'な-adjectives behave like nouns. In predicate position, use **です** directly. When modifying a noun, add **な** between the adjective and noun.' },
      { type: 'comparison', items: [{label:'Predicate (no な)', markdown:'ここは静かです。\n(This place is quiet.)'},{label:'Pre-noun (add な)', markdown:'静かな部屋\n(a quiet room)'}] },
      { type: 'table', headers: ['Adjective','Meaning','Example'], rows: [['好き','like','音楽が好きです。'],['嫌い','dislike','虫が嫌いです。'],['上手','skilled at','料理が上手です。'],['きれい','pretty/clean','きれいな花。'],['静か','quiet','静かな公園。']] },
      { type: 'warning', markdown: 'きれい and 嫌い end in -い but are **な-adjectives**, not い-adjectives. They use な before nouns and don\'t drop -い in negation.' },
    ],
    practiceExercises: [
      { id: 'ex-na-1', type: 'multiple-choice', prompt: '"A quiet room" — which is correct?', question: 'Choose.', choices: [{id:'a',text:'静かい部屋'},{id:'b',text:'静かな部屋'},{id:'c',text:'静か部屋'},{id:'d',text:'静くな部屋'}], correctChoiceId: 'b', targets: [], difficulty: 1 },
      { id: 'ex-na-2', type: 'fill-in-blank', prompt: 'Negate 好きです.', sentenceTemplate: '好き{{blank}}です', acceptedAnswers: ['じゃありません','ではありません'], wordBankOptions: ['くないです','じゃありません','じゃないです','ません'], targets: [], difficulty: 1 },
    ],
    quiz: [
      { id: 'qz-na-1', type: 'multiple-choice', prompt: 'きれい is which type of adjective?', question: 'Choose.', choices: [{id:'a',text:'い-adjective'},{id:'b',text:'な-adjective'},{id:'c',text:'adverb'},{id:'d',text:'noun'}], correctChoiceId: 'b', targets: [], difficulty: 1 },
      { id: 'qz-na-2', type: 'multiple-choice', prompt: 'How do you say "a famous person"?', question: 'Choose.', choices: [{id:'a',text:'有名い人'},{id:'b',text:'有名の人'},{id:'c',text:'有名な人'},{id:'d',text:'有名く人'}], correctChoiceId: 'c', targets: [], difficulty: 1 },
      { id: 'qz-na-3', type: 'fill-in-blank', prompt: 'Complete: 彼女は料理が___です。(She is good at cooking.)', sentenceTemplate: '彼女は料理が{{blank}}です。', acceptedAnswers: ['上手'], wordBankOptions: ['上手','下手','好き','嫌い'], targets: [], difficulty: 1 },
    ],
  },

  'lesson-adj-past': {
    id: 'lesson-adj-past', slug: 'adj-past',
    title: 'Adjective Past Tense',
    jlptLevel: 'N5', estimatedMinutes: 12,
    introduces: ['grammar-adj-past'], prerequisites: [], tags: ['grammar','N5'],
    contentBlocks: [
      { type: 'text', markdown: 'い-adjectives: drop -い → add **-かった** (positive past) or **-くなかった** (negative past).\nな-adjectives: use **でした** (positive past) or **じゃありませんでした** (negative past).' },
      { type: 'table', headers: ['Type','Past +','Past −'], rows: [['い-adj (大きい)','大きかった','大きくなかった'],['い-adj (いい)','よかった','よくなかった'],['な-adj (好き)','好きでした','好きじゃありませんでした']] },
      { type: 'example', sentence: { ja: '昨日のパーティーは楽しかったです。', romaji: "Kinō no pātī wa tanoshikatta desu.", en: "Yesterday's party was fun." } },
    ],
    practiceExercises: [
      { id: 'ex-ap-1', type: 'multiple-choice', prompt: 'Past tense of 寒いです?', question: 'Choose.', choices: [{id:'a',text:'寒いでした'},{id:'b',text:'寒かったです'},{id:'c',text:'寒くでした'},{id:'d',text:'さむかったです'}], correctChoiceId: 'b', targets: [], difficulty: 1 },
      { id: 'ex-ap-2', type: 'fill-in-blank', prompt: 'Past negative of いい?', sentenceTemplate: 'いい → {{blank}}', acceptedAnswers: ['よくなかった','よくなかったです'], wordBankOptions: ['いくなかった','よくなかった','いじゃなかった','よかった'], targets: [], difficulty: 2 },
    ],
    quiz: [
      { id: 'qz-ap-1', type: 'multiple-choice', prompt: 'Past positive of 好きです?', question: 'Choose.', choices: [{id:'a',text:'好きかったです'},{id:'b',text:'好きでした'},{id:'c',text:'好かったです'},{id:'d',text:'好きいでした'}], correctChoiceId: 'b', targets: [], difficulty: 1 },
      { id: 'qz-ap-2', type: 'multiple-choice', prompt: 'Past of いい (good)?', question: 'Choose.', choices: [{id:'a',text:'いかった'},{id:'b',text:'よかった'},{id:'c',text:'よいかった'},{id:'d',text:'いいかった'}], correctChoiceId: 'b', explanation: 'いい is irregular: よかった', targets: [], difficulty: 1 },
      { id: 'qz-ap-3', type: 'fill-in-blank', prompt: 'Complete: 子供の頃、野菜が嫌い___。(I disliked vegetables as a child.)', sentenceTemplate: '子供の頃、野菜が嫌い{{blank}}。', acceptedAnswers: ['でした'], wordBankOptions: ['でした','かった','なかった','でしたか'], targets: [], difficulty: 1 },
    ],
  },

  // ═══════════════════════════════════════════
  // CHAPTER 7 — Verbs Past & Te-form
  // ═══════════════════════════════════════════

  'lesson-ta-form': {
    id: 'lesson-ta-form', slug: 'ta-form',
    title: 'Past Tense: 〜た/〜ました',
    jlptLevel: 'N5', estimatedMinutes: 15,
    introduces: ['grammar-ta-form'], prerequisites: [], tags: ['grammar','N5'],
    contentBlocks: [
      { type: 'text', markdown: 'The polite past is simple: **ます → ました**. The plain past (た-form) requires sound changes for Group 1 verbs.' },
      { type: 'table', headers: ['Verb','Group','ました','た-form'], rows: [['飲む','G1','飲みました','飲んだ'],['書く','G1','書きました','書いた'],['話す','G1','話しました','話した'],['食べる','G2','食べました','食べた'],['する','G3','しました','した'],['くる','G3','きました','きた'],['行く','G1','行きました','行った (exception)']] },
      { type: 'warning', markdown: '行く (iku) → 行った (itta), NOT 行いた. This is an exception to the normal Group 1 rule.' },
    ],
    practiceExercises: [
      { id: 'ex-tf-1', type: 'multiple-choice', prompt: 'Polite past of 食べる?', question: 'Choose.', choices: [{id:'a',text:'食べました'},{id:'b',text:'食べた'},{id:'c',text:'食べます'},{id:'d',text:'食べたです'}], correctChoiceId: 'a', targets: [], difficulty: 1 },
      { id: 'ex-tf-2', type: 'fill-in-blank', prompt: 'Plain past of 行く?', sentenceTemplate: '行く → {{blank}}', acceptedAnswers: ['行った'], wordBankOptions: ['行いた','行った','行きた','行くた'], targets: [], difficulty: 2 },
    ],
    quiz: [
      { id: 'qz-tf-1', type: 'multiple-choice', prompt: 'Polite past of する?', question: 'Choose.', choices: [{id:'a',text:'するました'},{id:'b',text:'しました'},{id:'c',text:'せました'},{id:'d',text:'さました'}], correctChoiceId: 'b', targets: [], difficulty: 1 },
      { id: 'qz-tf-2', type: 'multiple-choice', prompt: 'Plain past of 飲む?', question: 'Choose.', choices: [{id:'a',text:'飲んだ'},{id:'b',text:'飲いた'},{id:'c',text:'飲みた'},{id:'d',text:'飲うた'}], correctChoiceId: 'a', targets: [], difficulty: 1 },
      { id: 'qz-tf-3', type: 'fill-in-blank', prompt: 'Complete: 昨日、友達と映画を___。(I watched a movie with a friend.)', sentenceTemplate: '昨日、友達と映画を{{blank}}。', acceptedAnswers: ['見ました'], wordBankOptions: ['見ます','見ました','見た','見て'], targets: [], difficulty: 1 },
    ],
  },

  'lesson-te-form': {
    id: 'lesson-te-form', slug: 'te-form',
    title: 'て-Form Construction',
    jlptLevel: 'N5', estimatedMinutes: 18,
    introduces: ['grammar-te-form'], prerequisites: [], tags: ['grammar','N5'],
    contentBlocks: [
      { type: 'text', markdown: 'The て-form connects actions or builds compound grammar. Its construction mirrors the た-form: **-た → -て** and **-だ → -で**.' },
      { type: 'table', headers: ['Verb','た-form','て-form'], rows: [['飲む','飲んだ','飲んで'],['書く','書いた','書いて'],['話す','話した','話して'],['食べる','食べた','食べて'],['する','した','して'],['くる','きた','きて'],['行く','行った','行って']] },
      { type: 'text', markdown: 'Key uses of て-form:\n1. **Sequential actions**: 手を洗って、ご飯を食べます。(Wash hands, then eat.)\n2. **Requests**: 〜てください (please do)\n3. **Progressive**: 〜ている (is doing)' },
      { type: 'warning', markdown: '行く → **行って** (NOT 行いて). Same exception as with た-form.' },
    ],
    practiceExercises: [
      { id: 'ex-tef-1', type: 'multiple-choice', prompt: 'て-form of 食べる?', question: 'Choose.', choices: [{id:'a',text:'食べて'},{id:'b',text:'食べいて'},{id:'c',text:'食べた'},{id:'d',text:'食べって'}], correctChoiceId: 'a', targets: [], difficulty: 1 },
      { id: 'ex-tef-2', type: 'fill-in-blank', prompt: 'て-form of 飲む?', sentenceTemplate: '飲む → {{blank}}', acceptedAnswers: ['飲んで'], wordBankOptions: ['飲んで','飲いで','飲んだ','飲いた'], targets: [], difficulty: 1 },
    ],
    quiz: [
      { id: 'qz-tef-1', type: 'multiple-choice', prompt: 'て-form of 行く?', question: 'Choose.', choices: [{id:'a',text:'行いて'},{id:'b',text:'行いた'},{id:'c',text:'行って'},{id:'d',text:'行くて'}], correctChoiceId: 'c', targets: [], difficulty: 1 },
      { id: 'qz-tef-2', type: 'multiple-choice', prompt: 'て-form of する?', question: 'Choose.', choices: [{id:'a',text:'して'},{id:'b',text:'すて'},{id:'c',text:'せて'},{id:'d',text:'するて'}], correctChoiceId: 'a', targets: [], difficulty: 1 },
      { id: 'qz-tef-3', type: 'sentence-construction', prompt: 'Make a sequential sentence: "I wash my hands and then eat."', targetSentence: '手を洗って、ご飯を食べます。', scrambledTokens: ['手を','洗って、','ご飯を','食べます。'], targets: [], difficulty: 1 },
    ],
  },

  'lesson-te-iru': {
    id: 'lesson-te-iru', slug: 'te-iru',
    title: '〜ている: Actions in Progress',
    jlptLevel: 'N5', estimatedMinutes: 12,
    introduces: ['grammar-te-iru'], prerequisites: [], tags: ['grammar','N5'],
    contentBlocks: [
      { type: 'text', markdown: '**て-form + いる/います** has two meanings depending on the verb type:\n1. **Activity verbs** (食べる, 走る) → ongoing action: 食べています = "is eating"\n2. **Change-of-state verbs** (結婚する, 着る) → resultant state: 結婚しています = "is married"' },
      { type: 'example', sentence: { ja: '今、雨が降っています。', romaji: 'Ima, ame ga futte imasu.', en: 'It is raining now.' } },
      { type: 'example', sentence: { ja: '兄はもう結婚しています。', romaji: 'Ani wa mō kekkon shite imasu.', en: 'My brother is already married.' } },
      { type: 'tip', markdown: 'In casual speech, いる contracts to る: 食べてる, 見てる, 知ってる.' },
    ],
    practiceExercises: [
      { id: 'ex-tei-1', type: 'multiple-choice', prompt: '"She is studying" in Japanese?', question: 'Choose.', choices: [{id:'a',text:'彼女は勉強した。'},{id:'b',text:'彼女は勉強している。'},{id:'c',text:'彼女は勉強する。'},{id:'d',text:'彼女は勉強します。'}], correctChoiceId: 'b', targets: [], difficulty: 1 },
      { id: 'ex-tei-2', type: 'fill-in-blank', prompt: 'Complete: テレビを___います。(watching TV)', sentenceTemplate: 'テレビを{{blank}}います。', acceptedAnswers: ['見て'], wordBankOptions: ['見て','見た','見る','見い'], targets: [], difficulty: 1 },
    ],
    quiz: [
      { id: 'qz-tei-1', type: 'multiple-choice', prompt: '"He is married" — which is correct?', question: 'Choose.', choices: [{id:'a',text:'彼は結婚する。'},{id:'b',text:'彼は結婚した。'},{id:'c',text:'彼は結婚している。'},{id:'d',text:'彼は結婚します。'}], correctChoiceId: 'c', targets: [], difficulty: 1 },
      { id: 'qz-tei-2', type: 'multiple-choice', prompt: 'Casual form of 食べています?', question: 'Choose.', choices: [{id:'a',text:'食べてる'},{id:'b',text:'食べる'},{id:'c',text:'食べて'},{id:'d',text:'食べた'}], correctChoiceId: 'a', targets: [], difficulty: 1 },
      { id: 'qz-tei-3', type: 'fill-in-blank', prompt: 'Complete: 今、音楽を___います。', sentenceTemplate: '今、音楽を{{blank}}います。', acceptedAnswers: ['聴いて','きいて'], wordBankOptions: ['聴いて','聴いた','聴く','聴い'], targets: [], difficulty: 1 },
    ],
  },

  // ═══════════════════════════════════════════
  // CHAPTER 8 — Want & Ability
  // ═══════════════════════════════════════════

  'lesson-tai': {
    id: 'lesson-tai', slug: 'tai',
    title: '〜たい: Expressing Wants',
    jlptLevel: 'N5', estimatedMinutes: 12,
    introduces: ['grammar-tai'], prerequisites: [], tags: ['grammar','N5'],
    contentBlocks: [
      { type: 'text', markdown: 'Attach **〜たい** to the ます-stem to express your desire to do something. 〜たい conjugates like an い-adjective.' },
      { type: 'table', headers: ['Form','Example','Meaning'], rows: [['〜たいです','行きたいです','I want to go'],['〜たくないです','行きたくないです','I don\'t want to go'],['〜たかったです','行きたかったです','I wanted to go'],['〜たくなかったです','行きたくなかったです','I didn\'t want to go']] },
      { type: 'example', sentence: { ja: '夏休みに海へ行きたいです。', romaji: 'Natsuyasumi ni umi e ikitai desu.', en: 'I want to go to the sea during summer vacation.' } },
      { type: 'warning', markdown: '〜たい only expresses **your own** desire in declarative sentences. For a third person\'s desire, use 〜たがっている.' },
    ],
    practiceExercises: [
      { id: 'ex-tai-1', type: 'multiple-choice', prompt: '"I want to eat sushi" — choose correctly.', question: 'Choose.', choices: [{id:'a',text:'寿司を食べたい。'},{id:'b',text:'寿司を食べます。'},{id:'c',text:'寿司を食べました。'},{id:'d',text:'寿司を食べている。'}], correctChoiceId: 'a', targets: [], difficulty: 1 },
      { id: 'ex-tai-2', type: 'fill-in-blank', prompt: 'Complete: 今日は何も___。(I don\'t want to do anything.)', sentenceTemplate: '今日は何も{{blank}}。', acceptedAnswers: ['したくない','したくないです'], wordBankOptions: ['したくない','したい','したく','したです'], targets: [], difficulty: 1 },
    ],
    quiz: [
      { id: 'qz-tai-1', type: 'multiple-choice', prompt: 'ます-stem of 飲む + たい?', question: 'Choose.', choices: [{id:'a',text:'飲たい'},{id:'b',text:'飲みたい'},{id:'c',text:'飲うたい'},{id:'d',text:'飲んたい'}], correctChoiceId: 'b', targets: [], difficulty: 1 },
      { id: 'qz-tai-2', type: 'multiple-choice', prompt: 'Negative of 食べたいです?', question: 'Choose.', choices: [{id:'a',text:'食べたくないです'},{id:'b',text:'食べたません'},{id:'c',text:'食べたないです'},{id:'d',text:'食べたくいです'}], correctChoiceId: 'a', targets: [], difficulty: 1 },
      { id: 'qz-tai-3', type: 'fill-in-blank', prompt: 'Complete: 日本に___たいです。(I want to go to Japan.)', sentenceTemplate: '日本に{{blank}}たいです。', acceptedAnswers: ['行き'], wordBankOptions: ['行き','行く','行って','行い'], targets: [], difficulty: 1 },
    ],
  },

  'lesson-te-kudasai': {
    id: 'lesson-te-kudasai', slug: 'te-kudasai',
    title: '〜てください: Polite Requests',
    jlptLevel: 'N5', estimatedMinutes: 10,
    introduces: ['grammar-te-kudasai'], prerequisites: [], tags: ['grammar','N5'],
    contentBlocks: [
      { type: 'text', markdown: 'Attach **ください** to the て-form to make a polite request: "Please do ~".' },
      { type: 'example', sentence: { ja: 'ここに名前を書いてください。', romaji: 'Koko ni namae wo kaite kudasai.', en: 'Please write your name here.' } },
      { type: 'table', headers: ['Verb','て-form','Request'], rows: [['食べる','食べて','食べてください (Please eat)'],['座る','座って','座ってください (Please sit)'],['見る','見て','見てください (Please look)'],['聞く','聞いて','聞いてください (Please listen)']] },
      { type: 'tip', markdown: 'Negative request: **〜ないでください** = "Please don\'t ~": タバコを吸わないでください (Please don\'t smoke).' },
    ],
    practiceExercises: [
      { id: 'ex-tk-1', type: 'multiple-choice', prompt: '"Please sit down" in Japanese?', question: 'Choose.', choices: [{id:'a',text:'座ってください。'},{id:'b',text:'座りてください。'},{id:'c',text:'座るください。'},{id:'d',text:'座いてください。'}], correctChoiceId: 'a', targets: [], difficulty: 1 },
      { id: 'ex-tk-2', type: 'fill-in-blank', prompt: '"Please listen" — complete.', sentenceTemplate: '{{blank}}ください。', acceptedAnswers: ['聞いて'], wordBankOptions: ['聞いて','聞くて','聞いた','きいて'], targets: [], difficulty: 1 },
    ],
    quiz: [
      { id: 'qz-tk-1', type: 'multiple-choice', prompt: '"Please don\'t run" in Japanese?', question: 'Choose.', choices: [{id:'a',text:'走ってください。'},{id:'b',text:'走らないでください。'},{id:'c',text:'走らてください。'},{id:'d',text:'走りません。'}], correctChoiceId: 'b', targets: [], difficulty: 1 },
      { id: 'qz-tk-2', type: 'multiple-choice', prompt: '"Please speak in Japanese" — correct?', question: 'Choose.', choices: [{id:'a',text:'日本語で話してください。'},{id:'b',text:'日本語を話してください。'},{id:'c',text:'日本語に話してください。'},{id:'d',text:'日本語は話してください。'}], correctChoiceId: 'a', targets: [], difficulty: 1 },
      { id: 'qz-tk-3', type: 'fill-in-blank', prompt: 'Complete: 静かに___ください。(Please be quiet.)', sentenceTemplate: '静かに{{blank}}ください。', acceptedAnswers: ['して'], wordBankOptions: ['して','した','する','し'], targets: [], difficulty: 1 },
    ],
  },

  'lesson-koto-ga-dekiru': {
    id: 'lesson-koto-ga-dekiru', slug: 'koto-ga-dekiru',
    title: '〜ことができる: Ability',
    jlptLevel: 'N5', estimatedMinutes: 12,
    introduces: ['grammar-koto-ga-dekiru'], prerequisites: [], tags: ['grammar','N5'],
    contentBlocks: [
      { type: 'text', markdown: '**Verb (dictionary form) + ことができる/できます** = "can do ~", expressing ability or possibility.' },
      { type: 'example', sentence: { ja: '私は自転車に乗ることができます。', romaji: 'Watashi wa jitensha ni noru koto ga dekimasu.', en: 'I can ride a bicycle.' } },
      { type: 'comparison', items: [{label:'ことができる (formal)', markdown:'日本語を話すことができます。\n(I can speak Japanese.)'},{label:'Potential form (casual)', markdown:'日本語が話せます。\n(Same meaning, more natural)'}] },
      { type: 'tip', markdown: 'できる alone (without こと) expresses general ability: 料理ができる (can cook / is good at cooking).' },
    ],
    practiceExercises: [
      { id: 'ex-kd-1', type: 'multiple-choice', prompt: '"I can swim" using ことができる — choose.', question: 'Choose.', choices: [{id:'a',text:'泳ぐことができます。'},{id:'b',text:'泳ぎことができます。'},{id:'c',text:'泳ぐができます。'},{id:'d',text:'泳ぐことします。'}], correctChoiceId: 'a', targets: [], difficulty: 1 },
      { id: 'ex-kd-2', type: 'fill-in-blank', prompt: '"You cannot take photos here" — negate it.', sentenceTemplate: 'ここでは写真を撮ることが{{blank}}。', acceptedAnswers: ['できません'], wordBankOptions: ['できます','できません','できた','できて'], targets: [], difficulty: 1 },
    ],
    quiz: [
      { id: 'qz-kd-1', type: 'multiple-choice', prompt: 'What comes before ことができる?', question: 'Choose.', choices: [{id:'a',text:'ます-form'},{id:'b',text:'て-form'},{id:'c',text:'dictionary form'},{id:'d',text:'た-form'}], correctChoiceId: 'c', targets: [], difficulty: 1 },
      { id: 'qz-kd-2', type: 'multiple-choice', prompt: '"Can you speak English?" in Japanese?', question: 'Choose.', choices: [{id:'a',text:'英語を話しますか。'},{id:'b',text:'英語を話すことができますか。'},{id:'c',text:'英語ができますか。'},{id:'d',text:'Both b and c are natural'}], correctChoiceId: 'd', targets: [], difficulty: 2 },
      { id: 'qz-kd-3', type: 'fill-in-blank', prompt: '"I can read kanji" — complete.', sentenceTemplate: '漢字を読む{{blank}}できます。', acceptedAnswers: ['ことが'], wordBankOptions: ['ことが','ことを','こと','が'], targets: [], difficulty: 1 },
    ],
  },

  'lesson-ta-koto-ga-aru': {
    id: 'lesson-ta-koto-ga-aru', slug: 'ta-koto-ga-aru',
    title: '〜たことがある: Past Experience',
    jlptLevel: 'N5', estimatedMinutes: 12,
    introduces: ['grammar-ta-koto-ga-aru'], prerequisites: [], tags: ['grammar','N5'],
    contentBlocks: [
      { type: 'text', markdown: '**Verb (た-form) + ことがある/あります** = "have done ~ before". This expresses life experience — whether something has happened at least once.' },
      { type: 'comparison', items: [{label:'ことがある (experience)', markdown:'富士山に登ったことがあります。\n(I have climbed Mt. Fuji.)\n→ Describes having done it'},{label:'ました (specific past event)', markdown:'昨日富士山に登りました。\n(I climbed Mt. Fuji yesterday.)\n→ Specific occasion'}] },
      { type: 'example', sentence: { ja: 'まだ沖縄に行ったことがありません。', romaji: 'Mada Okinawa ni itta koto ga arimasen.', en: 'I have never been to Okinawa yet.' } },
      { type: 'tip', markdown: '一度も〜たことがない = "have never done even once". 何度も〜たことがある = "have done many times".' },
    ],
    practiceExercises: [
      { id: 'ex-tka-1', type: 'multiple-choice', prompt: '"I have eaten sushi before" — choose.', question: 'Choose.', choices: [{id:'a',text:'寿司を食べました。'},{id:'b',text:'寿司を食べたことがあります。'},{id:'c',text:'寿司を食べています。'},{id:'d',text:'寿司を食べたいです。'}], correctChoiceId: 'b', targets: [], difficulty: 1 },
      { id: 'ex-tka-2', type: 'fill-in-blank', prompt: '"I have never been to America."', sentenceTemplate: 'アメリカに行った{{blank}}ありません。', acceptedAnswers: ['ことが'], wordBankOptions: ['ことが','ことを','こと','が'], targets: [], difficulty: 1 },
    ],
    quiz: [
      { id: 'qz-tka-1', type: 'multiple-choice', prompt: 'What form of the verb goes before ことがある?', question: 'Choose.', choices: [{id:'a',text:'ます-form'},{id:'b',text:'て-form'},{id:'c',text:'た-form'},{id:'d',text:'dictionary form'}], correctChoiceId: 'c', targets: [], difficulty: 1 },
      { id: 'qz-tka-2', type: 'multiple-choice', prompt: '"Have you ever been to Japan?" — choose.', question: 'Choose.', choices: [{id:'a',text:'日本に行きますか。'},{id:'b',text:'日本に行ったことがありますか。'},{id:'c',text:'日本に行っていますか。'},{id:'d',text:'日本に行きましたか。'}], correctChoiceId: 'b', targets: [], difficulty: 1 },
      { id: 'qz-tka-3', type: 'fill-in-blank', prompt: 'Complete: 富士山に登った___あります。', sentenceTemplate: '富士山に登った{{blank}}あります。', acceptedAnswers: ['ことが'], wordBankOptions: ['ことが','ことを','こと','が'], targets: [], difficulty: 1 },
    ],
  },

};
