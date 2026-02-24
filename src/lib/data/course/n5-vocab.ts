import type { VocabEntry } from '../../models/Course.js';

export const n5Vocab: Record<string, VocabEntry> = {

  // ─── Pronouns ─────────────────────────────────────────────────────────────

  'vocab-watashi': {
    id: 'vocab-watashi',
    word: { ja: '私', reading: 'わたし', romaji: 'watashi', en: 'I / me' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['pronoun', 'N5'],
    exampleSentences: [
      { ja: '私は学生です。', furigana: 'わたしはがくせいです。', romaji: 'Watashi wa gakusei desu.', en: 'I am a student.' },
      { ja: '私の名前は田中です。', furigana: 'わたしのなまえはたなかです。', romaji: 'Watashi no namae wa Tanaka desu.', en: 'My name is Tanaka.' },
    ],
  },

  'vocab-anata': {
    id: 'vocab-anata',
    word: { ja: 'あなた', reading: 'あなた', romaji: 'anata', en: 'you' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['pronoun', 'N5'],
    exampleSentences: [
      { ja: 'あなたはどこから来ましたか。', furigana: 'あなたはどこからきましたか。', romaji: 'Anata wa doko kara kimashita ka.', en: 'Where are you from?' },
    ],
  },

  'vocab-kare': {
    id: 'vocab-kare',
    word: { ja: '彼', reading: 'かれ', romaji: 'kare', en: 'he / him' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['pronoun', 'N5'],
    exampleSentences: [
      { ja: '彼は先生です。', furigana: 'かれはせんせいです。', romaji: 'Kare wa sensei desu.', en: 'He is a teacher.' },
    ],
  },

  'vocab-kanojo': {
    id: 'vocab-kanojo',
    word: { ja: '彼女', reading: 'かのじょ', romaji: 'kanojo', en: 'she / her' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['pronoun', 'N5'],
    exampleSentences: [
      { ja: '彼女は医者です。', furigana: 'かのじょはいしゃです。', romaji: 'Kanojo wa isha desu.', en: 'She is a doctor.' },
    ],
  },

  'vocab-watashitachi': {
    id: 'vocab-watashitachi',
    word: { ja: '私たち', reading: 'わたしたち', romaji: 'watashitachi', en: 'we / us' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['pronoun', 'N5'],
    exampleSentences: [
      { ja: '私たちは友達です。', furigana: 'わたしたちはともだちです。', romaji: 'Watashitachi wa tomodachi desu.', en: 'We are friends.' },
    ],
  },

  'vocab-kore': {
    id: 'vocab-kore',
    word: { ja: 'これ', reading: 'これ', romaji: 'kore', en: 'this (thing near speaker)' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['pronoun', 'demonstrative', 'N5'],
    exampleSentences: [
      { ja: 'これは何ですか。', furigana: 'これはなんですか。', romaji: 'Kore wa nan desu ka.', en: 'What is this?' },
    ],
  },

  'vocab-sore': {
    id: 'vocab-sore',
    word: { ja: 'それ', reading: 'それ', romaji: 'sore', en: 'that (near listener)' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['pronoun', 'demonstrative', 'N5'],
    exampleSentences: [
      { ja: 'それはペンです。', furigana: 'それはペンです。', romaji: 'Sore wa pen desu.', en: 'That is a pen.' },
    ],
  },

  'vocab-are': {
    id: 'vocab-are',
    word: { ja: 'あれ', reading: 'あれ', romaji: 'are', en: 'that (over there)' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['pronoun', 'demonstrative', 'N5'],
    exampleSentences: [
      { ja: 'あれは山です。', furigana: 'あれはやまです。', romaji: 'Are wa yama desu.', en: 'That over there is a mountain.' },
    ],
  },

  // ─── Family ───────────────────────────────────────────────────────────────

  'vocab-okaasan': {
    id: 'vocab-okaasan',
    word: { ja: 'お母さん', reading: 'おかあさん', romaji: 'okaasan', en: "mother (someone else's)" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['family', 'N5'],
    exampleSentences: [
      { ja: 'お母さんは料理が上手です。', furigana: 'おかあさんはりょうりがじょうずです。', romaji: 'Okaasan wa ryouri ga jouzu desu.', en: 'Your mother is good at cooking.' },
    ],
  },

  'vocab-otousan': {
    id: 'vocab-otousan',
    word: { ja: 'お父さん', reading: 'おとうさん', romaji: 'otousan', en: "father (someone else's)" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['family', 'N5'],
    exampleSentences: [
      { ja: 'お父さんは仕事に行きました。', furigana: 'おとうさんはしごとにいきました。', romaji: 'Otousan wa shigoto ni ikimashita.', en: 'Father went to work.' },
    ],
  },

  'vocab-oniisan': {
    id: 'vocab-oniisan',
    word: { ja: 'お兄さん', reading: 'おにいさん', romaji: 'oniisan', en: "older brother (someone else's)" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['family', 'N5'],
    exampleSentences: [
      { ja: 'お兄さんは大学生ですか。', furigana: 'おにいさんはだいがくせいですか。', romaji: 'Oniisan wa daigakusei desu ka.', en: 'Is your older brother a university student?' },
    ],
  },

  'vocab-oneesan': {
    id: 'vocab-oneesan',
    word: { ja: 'お姉さん', reading: 'おねえさん', romaji: 'oneesan', en: "older sister (someone else's)" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['family', 'N5'],
    exampleSentences: [
      { ja: 'お姉さんはどこにいますか。', furigana: 'おねえさんはどこにいますか。', romaji: 'Oneesan wa doko ni imasu ka.', en: 'Where is your older sister?' },
    ],
  },

  'vocab-imouto': {
    id: 'vocab-imouto',
    word: { ja: '妹', reading: 'いもうと', romaji: 'imouto', en: 'younger sister' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['family', 'N5'],
    antonyms: ['vocab-oneesan'],
    exampleSentences: [
      { ja: '妹は七歳です。', furigana: 'いもうとはななさいです。', romaji: 'Imouto wa nanasai desu.', en: 'My younger sister is seven years old.' },
    ],
  },

  'vocab-otouto': {
    id: 'vocab-otouto',
    word: { ja: '弟', reading: 'おとうと', romaji: 'otouto', en: 'younger brother' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['family', 'N5'],
    antonyms: ['vocab-oniisan'],
    exampleSentences: [
      { ja: '弟と一緒に公園へ行きました。', furigana: 'おとうとといっしょにこうえんへいきました。', romaji: 'Otouto to issho ni kouen e ikimashita.', en: 'I went to the park with my younger brother.' },
    ],
  },

  // ─── Classroom / Objects ──────────────────────────────────────────────────

  'vocab-hon': {
    id: 'vocab-hon',
    word: { ja: '本', reading: 'ほん', romaji: 'hon', en: 'book' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['object', 'classroom', 'N5'],
    exampleSentences: [
      { ja: 'この本はおもしろいです。', furigana: 'このほんはおもしろいです。', romaji: 'Kono hon wa omoshiroi desu.', en: 'This book is interesting.' },
    ],
  },

  'vocab-kaban': {
    id: 'vocab-kaban',
    word: { ja: '鞄', reading: 'かばん', romaji: 'kaban', en: 'bag / briefcase' },
    alternateWritings: ['カバン'],
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['object', 'N5'],
    exampleSentences: [
      { ja: '鞄の中に本があります。', furigana: 'かばんのなかにほんがあります。', romaji: 'Kaban no naka ni hon ga arimasu.', en: 'There is a book inside the bag.' },
    ],
  },

  'vocab-enpitsu': {
    id: 'vocab-enpitsu',
    word: { ja: '鉛筆', reading: 'えんぴつ', romaji: 'enpitsu', en: 'pencil' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['object', 'classroom', 'N5'],
    exampleSentences: [
      { ja: '鉛筆で名前を書きました。', furigana: 'えんぴつでなまえをかきました。', romaji: 'Enpitsu de namae wo kakimashita.', en: 'I wrote my name with a pencil.' },
    ],
  },

  'vocab-tsukue': {
    id: 'vocab-tsukue',
    word: { ja: '机', reading: 'つくえ', romaji: 'tsukue', en: 'desk' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['object', 'classroom', 'furniture', 'N5'],
    exampleSentences: [
      { ja: '机の上に鉛筆があります。', furigana: 'つくえのうえにえんぴつがあります。', romaji: 'Tsukue no ue ni enpitsu ga arimasu.', en: 'There is a pencil on top of the desk.' },
    ],
  },

  'vocab-isu': {
    id: 'vocab-isu',
    word: { ja: '椅子', reading: 'いす', romaji: 'isu', en: 'chair' },
    alternateWritings: ['イス'],
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['object', 'classroom', 'furniture', 'N5'],
    exampleSentences: [
      { ja: '椅子に座ってください。', furigana: 'いすにすわってください。', romaji: 'Isu ni suwatte kudasai.', en: 'Please sit on the chair.' },
    ],
  },

  'vocab-mado': {
    id: 'vocab-mado',
    word: { ja: '窓', reading: 'まど', romaji: 'mado', en: 'window' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['object', 'building', 'N5'],
    exampleSentences: [
      { ja: '窓を開けてもいいですか。', furigana: 'まどをあけてもいいですか。', romaji: 'Mado wo akete mo ii desu ka.', en: 'May I open the window?' },
    ],
  },

  'vocab-doa': {
    id: 'vocab-doa',
    word: { ja: 'ドア', reading: 'ドア', romaji: 'doa', en: 'door' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['object', 'building', 'loanword', 'N5'],
    exampleSentences: [
      { ja: 'ドアを閉めてください。', furigana: 'ドアをしめてください。', romaji: 'Doa wo shimete kudasai.', en: 'Please close the door.' },
    ],
  },

  // ─── Food ─────────────────────────────────────────────────────────────────

  'vocab-gohan': {
    id: 'vocab-gohan',
    word: { ja: 'ご飯', reading: 'ごはん', romaji: 'gohan', en: 'rice / meal' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['food', 'N5'],
    exampleSentences: [
      { ja: '朝ご飯を食べましたか。', furigana: 'あさごはんをたべましたか。', romaji: 'Asa gohan wo tabemashita ka.', en: 'Did you eat breakfast?' },
    ],
  },

  'vocab-mizu': {
    id: 'vocab-mizu',
    word: { ja: '水', reading: 'みず', romaji: 'mizu', en: 'water' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['food', 'drink', 'N5'],
    exampleSentences: [
      { ja: '水を一杯ください。', furigana: 'みずをいっぱいください。', romaji: 'Mizu wo ippai kudasai.', en: 'Please give me a glass of water.' },
    ],
  },

  'vocab-ocha': {
    id: 'vocab-ocha',
    word: { ja: 'お茶', reading: 'おちゃ', romaji: 'ocha', en: 'tea' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['food', 'drink', 'N5'],
    exampleSentences: [
      { ja: 'お茶を飲みませんか。', furigana: 'おちゃをのみませんか。', romaji: 'Ocha wo nomimasen ka.', en: 'Would you like to drink some tea?' },
    ],
  },

  'vocab-pan': {
    id: 'vocab-pan',
    word: { ja: 'パン', reading: 'パン', romaji: 'pan', en: 'bread' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['food', 'loanword', 'N5'],
    exampleSentences: [
      { ja: '毎朝パンを食べます。', furigana: 'まいあさパンをたべます。', romaji: 'Maiasa pan wo tabemasu.', en: 'I eat bread every morning.' },
    ],
  },

  'vocab-sakana': {
    id: 'vocab-sakana',
    word: { ja: '魚', reading: 'さかな', romaji: 'sakana', en: 'fish' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['food', 'N5'],
    exampleSentences: [
      { ja: '魚が好きです。', furigana: 'さかながすきです。', romaji: 'Sakana ga suki desu.', en: 'I like fish.' },
    ],
  },

  'vocab-niku': {
    id: 'vocab-niku',
    word: { ja: '肉', reading: 'にく', romaji: 'niku', en: 'meat' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['food', 'N5'],
    exampleSentences: [
      { ja: '肉と野菜を買いました。', furigana: 'にくとやさいをかいました。', romaji: 'Niku to yasai wo kaimashita.', en: 'I bought meat and vegetables.' },
    ],
  },

  'vocab-yasai': {
    id: 'vocab-yasai',
    word: { ja: '野菜', reading: 'やさい', romaji: 'yasai', en: 'vegetables' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['food', 'N5'],
    exampleSentences: [
      { ja: '野菜をたくさん食べてください。', furigana: 'やさいをたくさんたべてください。', romaji: 'Yasai wo takusan tabete kudasai.', en: 'Please eat lots of vegetables.' },
    ],
  },

  // ─── Numbers / Time ───────────────────────────────────────────────────────

  'vocab-ichi': {
    id: 'vocab-ichi',
    word: { ja: '一', reading: 'いち', romaji: 'ichi', en: 'one' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['number', 'N5'],
    exampleSentences: [
      { ja: 'りんごが一つあります。', furigana: 'りんごがひとつあります。', romaji: 'Ringo ga hitotsu arimasu.', en: 'There is one apple.' },
    ],
  },

  'vocab-ni-num': {
    id: 'vocab-ni-num',
    word: { ja: '二', reading: 'に', romaji: 'ni', en: 'two' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['number', 'N5'],
    exampleSentences: [
      { ja: '子供が二人います。', furigana: 'こどもがふたりいます。', romaji: 'Kodomo ga futari imasu.', en: 'There are two children.' },
    ],
  },

  'vocab-san-num': {
    id: 'vocab-san-num',
    word: { ja: '三', reading: 'さん', romaji: 'san', en: 'three' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['number', 'N5'],
    exampleSentences: [
      { ja: '三時に会いましょう。', furigana: 'さんじにあいましょう。', romaji: 'Sanji ni aimashou.', en: "Let's meet at three o'clock." },
    ],
  },

  'vocab-jikan': {
    id: 'vocab-jikan',
    word: { ja: '時間', reading: 'じかん', romaji: 'jikan', en: 'time / hour' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['time', 'N5'],
    exampleSentences: [
      { ja: '時間がありません。', furigana: 'じかんがありません。', romaji: 'Jikan ga arimasen.', en: 'I do not have time.' },
      { ja: '二時間勉強しました。', furigana: 'にじかんべんきょうしました。', romaji: 'Nijikan benkyou shimashita.', en: 'I studied for two hours.' },
    ],
  },

  'vocab-fun': {
    id: 'vocab-fun',
    word: { ja: '分', reading: 'ふん', romaji: 'fun', en: 'minute' },
    wordClass: 'counter',
    jlptLevel: 'N5',
    tags: ['time', 'counter', 'N5'],
    exampleSentences: [
      { ja: '十分待ってください。', furigana: 'じゅっぷんまってください。', romaji: 'Juppun matte kudasai.', en: 'Please wait ten minutes.' },
    ],
  },

  'vocab-mainichi': {
    id: 'vocab-mainichi',
    word: { ja: '毎日', reading: 'まいにち', romaji: 'mainichi', en: 'every day' },
    wordClass: 'adverb',
    jlptLevel: 'N5',
    tags: ['time', 'adverb', 'N5'],
    exampleSentences: [
      { ja: '毎日日本語を勉強しています。', furigana: 'まいにちにほんごをべんきょうしています。', romaji: 'Mainichi nihongo wo benkyou shite imasu.', en: 'I study Japanese every day.' },
    ],
  },

  // ─── Common Verbs ─────────────────────────────────────────────────────────

  'vocab-taberu': {
    id: 'vocab-taberu',
    word: { ja: '食べる', reading: 'たべる', romaji: 'taberu', en: 'to eat' },
    wordClass: 'verb-ru',
    jlptLevel: 'N5',
    tags: ['verb', 'N5'],
    exampleSentences: [
      { ja: '昼ご飯を食べましょう。', furigana: 'ひるごはんをたべましょう。', romaji: 'Hirugohan wo tabemashou.', en: "Let's eat lunch." },
      { ja: '何を食べたいですか。', furigana: 'なにをたべたいですか。', romaji: 'Nani wo tabetai desu ka.', en: 'What do you want to eat?' },
    ],
  },

  'vocab-nomu': {
    id: 'vocab-nomu',
    word: { ja: '飲む', reading: 'のむ', romaji: 'nomu', en: 'to drink' },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb', 'N5'],
    exampleSentences: [
      { ja: 'コーヒーを飲みます。', furigana: 'コーヒーをのみます。', romaji: 'Koohii wo nomimasu.', en: 'I drink coffee.' },
    ],
  },

  'vocab-iku': {
    id: 'vocab-iku',
    word: { ja: '行く', reading: 'いく', romaji: 'iku', en: 'to go' },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb', 'motion', 'N5'],
    antonyms: ['vocab-kuru'],
    exampleSentences: [
      { ja: '学校に行きます。', furigana: 'がっこうにいきます。', romaji: 'Gakkou ni ikimasu.', en: 'I go to school.' },
    ],
  },

  'vocab-kuru': {
    id: 'vocab-kuru',
    word: { ja: '来る', reading: 'くる', romaji: 'kuru', en: 'to come' },
    wordClass: 'verb-irregular',
    jlptLevel: 'N5',
    tags: ['verb', 'motion', 'irregular', 'N5'],
    antonyms: ['vocab-iku'],
    exampleSentences: [
      { ja: '友達が来ました。', furigana: 'ともだちがきました。', romaji: 'Tomodachi ga kimashita.', en: 'A friend came.' },
    ],
  },

  'vocab-miru': {
    id: 'vocab-miru',
    word: { ja: '見る', reading: 'みる', romaji: 'miru', en: 'to see / to watch' },
    wordClass: 'verb-ru',
    jlptLevel: 'N5',
    tags: ['verb', 'N5'],
    exampleSentences: [
      { ja: 'テレビを見ています。', furigana: 'テレビをみています。', romaji: 'Terebi wo mite imasu.', en: 'I am watching television.' },
    ],
  },

  'vocab-kaku': {
    id: 'vocab-kaku',
    word: { ja: '書く', reading: 'かく', romaji: 'kaku', en: 'to write' },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb', 'N5'],
    exampleSentences: [
      { ja: '手紙を書きました。', furigana: 'てがみをかきました。', romaji: 'Tegami wo kakimashita.', en: 'I wrote a letter.' },
    ],
  },

  'vocab-yomu': {
    id: 'vocab-yomu',
    word: { ja: '読む', reading: 'よむ', romaji: 'yomu', en: 'to read' },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb', 'N5'],
    exampleSentences: [
      { ja: '本を読むのが好きです。', furigana: 'ほんをよむのがすきです。', romaji: 'Hon wo yomu no ga suki desu.', en: 'I like reading books.' },
    ],
  },

  'vocab-kau': {
    id: 'vocab-kau',
    word: { ja: '買う', reading: 'かう', romaji: 'kau', en: 'to buy' },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb', 'shopping', 'N5'],
    exampleSentences: [
      { ja: 'スーパーで野菜を買いました。', furigana: 'スーパーでやさいをかいました。', romaji: 'Suupaa de yasai wo kaimashita.', en: 'I bought vegetables at the supermarket.' },
    ],
  },

  'vocab-hanasu': {
    id: 'vocab-hanasu',
    word: { ja: '話す', reading: 'はなす', romaji: 'hanasu', en: 'to speak / to talk' },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb', 'communication', 'N5'],
    exampleSentences: [
      { ja: '日本語で話してください。', furigana: 'にほんごではなしてください。', romaji: 'Nihongo de hanashite kudasai.', en: 'Please speak in Japanese.' },
    ],
  },

  'vocab-wakaru': {
    id: 'vocab-wakaru',
    word: { ja: '分かる', reading: 'わかる', romaji: 'wakaru', en: 'to understand' },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb', 'N5'],
    exampleSentences: [
      { ja: '日本語が分かりますか。', furigana: 'にほんごがわかりますか。', romaji: 'Nihongo ga wakarimasu ka.', en: 'Do you understand Japanese?' },
      { ja: 'すみません、分かりません。', furigana: 'すみません、わかりません。', romaji: 'Sumimasen, wakarimasen.', en: 'Excuse me, I do not understand.' },
    ],
  },

  'vocab-shiru': {
    id: 'vocab-shiru',
    word: { ja: '知る', reading: 'しる', romaji: 'shiru', en: 'to know' },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb', 'N5'],
    exampleSentences: [
      { ja: 'あの人を知っていますか。', furigana: 'あのひとをしっていますか。', romaji: 'Ano hito wo shitte imasu ka.', en: 'Do you know that person?' },
    ],
  },

  'vocab-kiku': {
    id: 'vocab-kiku',
    word: { ja: '聞く', reading: 'きく', romaji: 'kiku', en: 'to listen / to ask' },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb', 'communication', 'N5'],
    exampleSentences: [
      { ja: '音楽を聞いています。', furigana: 'おんがくをきいています。', romaji: 'Ongaku wo kiite imasu.', en: 'I am listening to music.' },
      { ja: '先生に聞いてください。', furigana: 'せんせいにきいてください。', romaji: 'Sensei ni kiite kudasai.', en: 'Please ask the teacher.' },
    ],
  },

  'vocab-okiru': {
    id: 'vocab-okiru',
    word: { ja: '起きる', reading: 'おきる', romaji: 'okiru', en: 'to wake up / to get up' },
    wordClass: 'verb-ru',
    jlptLevel: 'N5',
    tags: ['verb', 'daily-routine', 'N5'],
    antonyms: ['vocab-neru'],
    exampleSentences: [
      { ja: '毎朝七時に起きます。', furigana: 'まいあさしちじにおきます。', romaji: 'Maiasa shichiji ni okimasu.', en: 'I wake up at seven every morning.' },
    ],
  },

  'vocab-neru': {
    id: 'vocab-neru',
    word: { ja: '寝る', reading: 'ねる', romaji: 'neru', en: 'to sleep / to go to bed' },
    wordClass: 'verb-ru',
    jlptLevel: 'N5',
    tags: ['verb', 'daily-routine', 'N5'],
    antonyms: ['vocab-okiru'],
    exampleSentences: [
      { ja: '十一時に寝ます。', furigana: 'じゅういちじにねます。', romaji: 'Juuichiji ni nemasu.', en: 'I go to bed at eleven.' },
    ],
  },

  'vocab-suru': {
    id: 'vocab-suru',
    word: { ja: 'する', reading: 'する', romaji: 'suru', en: 'to do' },
    wordClass: 'verb-irregular',
    jlptLevel: 'N5',
    tags: ['verb', 'irregular', 'N5'],
    exampleSentences: [
      { ja: '宿題をします。', furigana: 'しゅくだいをします。', romaji: 'Shukudai wo shimasu.', en: 'I will do homework.' },
      { ja: '何をしていますか。', furigana: 'なにをしていますか。', romaji: 'Nani wo shite imasu ka.', en: 'What are you doing?' },
    ],
  },

  'vocab-au': {
    id: 'vocab-au',
    word: { ja: '会う', reading: 'あう', romaji: 'au', en: 'to meet' },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb', 'social', 'N5'],
    exampleSentences: [
      { ja: '友達に会いました。', furigana: 'ともだちにあいました。', romaji: 'Tomodachi ni aimashita.', en: 'I met my friend.' },
    ],
  },

  'vocab-hairu': {
    id: 'vocab-hairu',
    word: { ja: '入る', reading: 'はいる', romaji: 'hairu', en: 'to enter / to go in' },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb', 'motion', 'N5'],
    antonyms: ['vocab-deru'],
    exampleSentences: [
      { ja: '部屋に入ってください。', furigana: 'へやにはいってください。', romaji: 'Heya ni haitte kudasai.', en: 'Please come into the room.' },
    ],
  },

  'vocab-deru': {
    id: 'vocab-deru',
    word: { ja: '出る', reading: 'でる', romaji: 'deru', en: 'to exit / to leave' },
    wordClass: 'verb-ru',
    jlptLevel: 'N5',
    tags: ['verb', 'motion', 'N5'],
    antonyms: ['vocab-hairu'],
    exampleSentences: [
      { ja: '八時に家を出ます。', furigana: 'はちじにいえをでます。', romaji: 'Hachiji ni ie wo demasu.', en: 'I leave the house at eight.' },
    ],
  },

  'vocab-motsu': {
    id: 'vocab-motsu',
    word: { ja: '持つ', reading: 'もつ', romaji: 'motsu', en: 'to hold / to have / to carry' },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb', 'N5'],
    exampleSentences: [
      { ja: '荷物を持ちましょうか。', furigana: 'にもつをもちましょうか。', romaji: 'Nimotsu wo mochimashou ka.', en: 'Shall I carry your luggage?' },
    ],
  },

  'vocab-matsu': {
    id: 'vocab-matsu',
    word: { ja: '待つ', reading: 'まつ', romaji: 'matsu', en: 'to wait' },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb', 'N5'],
    exampleSentences: [
      { ja: 'ここで待ってください。', furigana: 'ここでまってください。', romaji: 'Koko de matte kudasai.', en: 'Please wait here.' },
    ],
  },

  // ─── Adjectives ───────────────────────────────────────────────────────────

  'vocab-ookii': {
    id: 'vocab-ookii',
    word: { ja: '大きい', reading: 'おおきい', romaji: 'ookii', en: 'big / large' },
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['adjective', 'size', 'N5'],
    antonyms: ['vocab-chiisai'],
    exampleSentences: [
      { ja: 'あの犬は大きいです。', furigana: 'あのいぬはおおきいです。', romaji: 'Ano inu wa ookii desu.', en: 'That dog is big.' },
    ],
  },

  'vocab-chiisai': {
    id: 'vocab-chiisai',
    word: { ja: '小さい', reading: 'ちいさい', romaji: 'chiisai', en: 'small / little' },
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['adjective', 'size', 'N5'],
    antonyms: ['vocab-ookii'],
    exampleSentences: [
      { ja: '小さい猫がいます。', furigana: 'ちいさいねこがいます。', romaji: 'Chiisai neko ga imasu.', en: 'There is a small cat.' },
    ],
  },

  'vocab-atsui': {
    id: 'vocab-atsui',
    word: { ja: '暑い', reading: 'あつい', romaji: 'atsui', en: 'hot (weather)' },
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['adjective', 'weather', 'N5'],
    antonyms: ['vocab-samui'],
    exampleSentences: [
      { ja: '今日は暑いですね。', furigana: 'きょうはあついですね。', romaji: 'Kyou wa atsui desu ne.', en: "It's hot today, isn't it?" },
    ],
  },

  'vocab-samui': {
    id: 'vocab-samui',
    word: { ja: '寒い', reading: 'さむい', romaji: 'samui', en: 'cold (weather)' },
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['adjective', 'weather', 'N5'],
    antonyms: ['vocab-atsui'],
    exampleSentences: [
      { ja: '冬は寒いです。', furigana: 'ふゆはさむいです。', romaji: 'Fuyu wa samui desu.', en: 'Winter is cold.' },
    ],
  },

  'vocab-atarashii': {
    id: 'vocab-atarashii',
    word: { ja: '新しい', reading: 'あたらしい', romaji: 'atarashii', en: 'new' },
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['adjective', 'N5'],
    antonyms: ['vocab-furui'],
    exampleSentences: [
      { ja: '新しいかばんを買いました。', furigana: 'あたらしいかばんをかいました。', romaji: 'Atarashii kaban wo kaimashita.', en: 'I bought a new bag.' },
    ],
  },

  'vocab-furui': {
    id: 'vocab-furui',
    word: { ja: '古い', reading: 'ふるい', romaji: 'furui', en: 'old (for things, not people)' },
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['adjective', 'N5'],
    antonyms: ['vocab-atarashii'],
    exampleSentences: [
      { ja: 'このビルは古いです。', furigana: 'このビルはふるいです。', romaji: 'Kono biru wa furui desu.', en: 'This building is old.' },
    ],
  },

  'vocab-ii': {
    id: 'vocab-ii',
    word: { ja: '良い', reading: 'いい', romaji: 'ii', en: 'good / fine / okay' },
    alternateWritings: ['いい', 'よい'],
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['adjective', 'N5'],
    antonyms: ['vocab-warui'],
    exampleSentences: [
      { ja: 'いい天気ですね。', furigana: 'いいてんきですね。', romaji: 'Ii tenki desu ne.', en: "The weather is nice, isn't it?" },
    ],
  },

  'vocab-warui': {
    id: 'vocab-warui',
    word: { ja: '悪い', reading: 'わるい', romaji: 'warui', en: 'bad / wrong' },
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['adjective', 'N5'],
    antonyms: ['vocab-ii'],
    exampleSentences: [
      { ja: '悪い天気ですね。', furigana: 'わるいてんきですね。', romaji: 'Warui tenki desu ne.', en: "The weather is bad, isn't it?" },
    ],
  },

  'vocab-takai': {
    id: 'vocab-takai',
    word: { ja: '高い', reading: 'たかい', romaji: 'takai', en: 'expensive / tall / high' },
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['adjective', 'price', 'N5'],
    antonyms: ['vocab-yasui'],
    exampleSentences: [
      { ja: 'このレストランは高いです。', furigana: 'このレストランはたかいです。', romaji: 'Kono resutoran wa takai desu.', en: 'This restaurant is expensive.' },
    ],
  },

  'vocab-yasui': {
    id: 'vocab-yasui',
    word: { ja: '安い', reading: 'やすい', romaji: 'yasui', en: 'cheap / inexpensive' },
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['adjective', 'price', 'N5'],
    antonyms: ['vocab-takai'],
    exampleSentences: [
      { ja: 'この店は安いです。', furigana: 'このみせはやすいです。', romaji: 'Kono mise wa yasui desu.', en: 'This shop is cheap.' },
    ],
  },

  'vocab-suki': {
    id: 'vocab-suki',
    word: { ja: '好き', reading: 'すき', romaji: 'suki', en: 'to like / fond of' },
    wordClass: 'na-adjective',
    jlptLevel: 'N5',
    tags: ['adjective', 'feeling', 'N5'],
    antonyms: ['vocab-kirai'],
    exampleSentences: [
      { ja: '音楽が好きです。', furigana: 'おんがくがすきです。', romaji: 'Ongaku ga suki desu.', en: 'I like music.' },
      { ja: '何の食べ物が好きですか。', furigana: 'なんのたべものがすきですか。', romaji: 'Nan no tabemono ga suki desu ka.', en: 'What food do you like?' },
    ],
  },

  'vocab-kirai': {
    id: 'vocab-kirai',
    word: { ja: '嫌い', reading: 'きらい', romaji: 'kirai', en: 'to dislike / disliked' },
    wordClass: 'na-adjective',
    jlptLevel: 'N5',
    tags: ['adjective', 'feeling', 'N5'],
    antonyms: ['vocab-suki'],
    exampleSentences: [
      { ja: '私は虫が嫌いです。', furigana: 'わたしはむしがきらいです。', romaji: 'Watashi wa mushi ga kirai desu.', en: 'I dislike insects.' },
    ],
  },

  // ─── Places ───────────────────────────────────────────────────────────────

  'vocab-gakkou': {
    id: 'vocab-gakkou',
    word: { ja: '学校', reading: 'がっこう', romaji: 'gakkou', en: 'school' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['place', 'N5'],
    exampleSentences: [
      { ja: '学校まで歩いて行きます。', furigana: 'がっこうまであるいていきます。', romaji: 'Gakkou made aruite ikimasu.', en: 'I walk to school.' },
    ],
  },

  'vocab-uchi': {
    id: 'vocab-uchi',
    word: { ja: '家', reading: 'うち', romaji: 'uchi', en: 'home / house' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['place', 'N5'],
    exampleSentences: [
      { ja: 'うちに帰りましょう。', furigana: 'うちにかえりましょう。', romaji: 'Uchi ni kaerimashou.', en: "Let's go home." },
    ],
  },

  'vocab-eki': {
    id: 'vocab-eki',
    word: { ja: '駅', reading: 'えき', romaji: 'eki', en: 'train station' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['place', 'transport', 'N5'],
    exampleSentences: [
      { ja: '駅はどこですか。', furigana: 'えきはどこですか。', romaji: 'Eki wa doko desu ka.', en: 'Where is the train station?' },
    ],
  },

  'vocab-mise': {
    id: 'vocab-mise',
    word: { ja: '店', reading: 'みせ', romaji: 'mise', en: 'shop / store' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['place', 'shopping', 'N5'],
    exampleSentences: [
      { ja: 'あの店でパンを買います。', furigana: 'あのみせでパンをかいます。', romaji: 'Ano mise de pan wo kaimasu.', en: 'I buy bread at that shop.' },
    ],
  },

  'vocab-toshokan': {
    id: 'vocab-toshokan',
    word: { ja: '図書館', reading: 'としょかん', romaji: 'toshokan', en: 'library' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['place', 'N5'],
    exampleSentences: [
      { ja: '図書館で勉強しました。', furigana: 'としょかんでべんきょうしました。', romaji: 'Toshokan de benkyou shimashita.', en: 'I studied at the library.' },
    ],
  },

  // ─── Body ─────────────────────────────────────────────────────────────────

  'vocab-atama': {
    id: 'vocab-atama',
    word: { ja: '頭', reading: 'あたま', romaji: 'atama', en: 'head' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['body', 'N5'],
    exampleSentences: [
      { ja: '頭が痛いです。', furigana: 'あたまがいたいです。', romaji: 'Atama ga itai desu.', en: 'I have a headache.' },
    ],
  },

  'vocab-me': {
    id: 'vocab-me',
    word: { ja: '目', reading: 'め', romaji: 'me', en: 'eye(s)' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['body', 'N5'],
    exampleSentences: [
      { ja: '目が大きいですね。', furigana: 'めがおおきいですね。', romaji: 'Me ga ookii desu ne.', en: 'Your eyes are big.' },
    ],
  },

  'vocab-te': {
    id: 'vocab-te',
    word: { ja: '手', reading: 'て', romaji: 'te', en: 'hand(s)' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['body', 'N5'],
    exampleSentences: [
      { ja: '手を洗ってください。', furigana: 'てをあらってください。', romaji: 'Te wo aratte kudasai.', en: 'Please wash your hands.' },
    ],
  },

  'vocab-ashi': {
    id: 'vocab-ashi',
    word: { ja: '足', reading: 'あし', romaji: 'ashi', en: 'foot / leg' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['body', 'N5'],
    exampleSentences: [
      { ja: '足が痛くて、歩けません。', furigana: 'あしがいたくて、あるけません。', romaji: 'Ashi ga itakute, arukemasen.', en: 'My leg hurts and I cannot walk.' },
    ],
  },

};
