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
    word: { ja: 'かばん', reading: 'かばん', romaji: 'kaban', en: 'bag / briefcase' },
    alternateWritings: ['鞄', 'カバン'],
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['object', 'N5'],
    exampleSentences: [
      { ja: 'かばんの中に本があります。', furigana: 'かばんのなかにほんがあります。', romaji: 'Kaban no naka ni hon ga arimasu.', en: 'There is a book inside the bag.' },
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
    word: { ja: 'いい', reading: 'いい', romaji: 'ii', en: 'good / fine / okay' },
    alternateWritings: ['良い', 'よい'],
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

  // ─── People & School (from lessons/readings) ──────────────────────────────

  'vocab-gakusei': {
    id: 'vocab-gakusei',
    word: { ja: '学生', reading: 'がくせい', romaji: 'gakusei', en: 'student' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['school', 'N5'],
    exampleSentences: [
      { ja: '私は学生です。', furigana: 'わたしはがくせいです。', romaji: 'Watashi wa gakusei desu.', en: 'I am a student.' },
    ],
  },

  'vocab-namae': {
    id: 'vocab-namae',
    word: { ja: '名前', reading: 'なまえ', romaji: 'namae', en: 'name' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['communication', 'N5'],
    exampleSentences: [
      { ja: 'お名前は何ですか。', furigana: 'おなまえはなんですか。', romaji: 'O-namae wa nan desu ka.', en: 'What is your name?' },
    ],
  },

  'vocab-tomodachi': {
    id: 'vocab-tomodachi',
    word: { ja: '友達', reading: 'ともだち', romaji: 'tomodachi', en: 'friend' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['social', 'N5'],
    exampleSentences: [
      { ja: '学校で友達に会います。', furigana: 'がっこうでともだちにあいます。', romaji: 'Gakkou de tomodachi ni aimasu.', en: 'I meet my friends at school.' },
    ],
  },

  'vocab-tenin': {
    id: 'vocab-tenin',
    word: { ja: '店員', reading: 'てんいん', romaji: 'tenin', en: 'shop clerk / store assistant' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['shopping', 'N5'],
    exampleSentences: [
      { ja: '店員さんに聞きます。', furigana: 'てんいんさんにききます。', romaji: 'Tenin-san ni kikimasu.', en: 'I will ask the shop clerk.' },
    ],
  },

  'vocab-ani': {
    id: 'vocab-ani',
    word: { ja: '兄', reading: 'あに', romaji: 'ani', en: 'older brother (my own)' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['family', 'N5'],
    exampleSentences: [
      { ja: '兄はもう結婚しています。', furigana: 'あにはもうけっこんしています。', romaji: 'Ani wa mou kekkon shite imasu.', en: 'My older brother is already married.' },
    ],
  },

  // ─── Animals & Nature ──────────────────────────────────────────────────────

  'vocab-neko': {
    id: 'vocab-neko',
    word: { ja: '猫', reading: 'ねこ', romaji: 'neko', en: 'cat' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['animal', 'N5'],
    exampleSentences: [
      { ja: '小さい猫がいます。', furigana: 'ちいさいねこがいます。', romaji: 'Chiisai neko ga imasu.', en: 'There is a small cat.' },
    ],
  },

  'vocab-inu': {
    id: 'vocab-inu',
    word: { ja: '犬', reading: 'いぬ', romaji: 'inu', en: 'dog' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['animal', 'N5'],
    exampleSentences: [
      { ja: 'かわいい犬ですね。', furigana: 'かわいいいぬですね。', romaji: 'Kawaii inu desu ne.', en: 'It is a cute dog, isn’t it?' },
    ],
  },

  'vocab-hana-flower': {
    id: 'vocab-hana-flower',
    word: { ja: '花', reading: 'はな', romaji: 'hana', en: 'flower' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['nature', 'N5'],
    exampleSentences: [
      { ja: 'きれいな花ですね。', furigana: 'きれいなはなですね。', romaji: 'Kirei na hana desu ne.', en: 'It is a pretty flower.' },
    ],
  },

  'vocab-umi': {
    id: 'vocab-umi',
    word: { ja: '海', reading: 'うみ', romaji: 'umi', en: 'sea / ocean' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['nature', 'N5'],
    exampleSentences: [
      { ja: '夏休みに海へ行きたいです。', furigana: 'なつやすみにうみへいきたいです。', romaji: 'Natsuyasumi ni umi e ikitai desu.', en: 'I want to go to the sea during summer vacation.' },
    ],
  },

  'vocab-ame': {
    id: 'vocab-ame',
    word: { ja: '雨', reading: 'あめ', romaji: 'ame', en: 'rain' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['weather', 'nature', 'N5'],
    exampleSentences: [
      { ja: '今、雨が降っています。', furigana: 'いま、あめがふっています。', romaji: 'Ima, ame ga futte imasu.', en: 'It is raining now.' },
    ],
  },

  // ─── Food & Drink (more) ───────────────────────────────────────────────────

  'vocab-koohii': {
    id: 'vocab-koohii',
    word: { ja: 'コーヒー', reading: 'コーヒー', romaji: 'koohii', en: 'coffee' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['drink', 'loanword', 'N5'],
    exampleSentences: [
      { ja: '毎朝コーヒーを飲みます。', furigana: 'まいあさコーヒーをのみます。', romaji: 'Maiasa koohii wo nomimasu.', en: 'I drink coffee every morning.' },
    ],
  },

  'vocab-osake': {
    id: 'vocab-osake',
    word: { ja: 'お酒', reading: 'おさけ', romaji: 'osake', en: 'alcohol / sake' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['drink', 'N5'],
    exampleSentences: [
      { ja: '私はお酒を飲みません。', furigana: 'わたしはおさけをのみません。', romaji: 'Watashi wa osake wo nomimasen.', en: 'I do not drink alcohol.' },
    ],
  },

  'vocab-biiru': {
    id: 'vocab-biiru',
    word: { ja: 'ビール', reading: 'ビール', romaji: 'biiru', en: 'beer' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['drink', 'loanword', 'N5'],
    exampleSentences: [
      { ja: '冷蔵庫にビールがあります。', furigana: 'れいぞうこにビールがあります。', romaji: 'Reizouko ni biiru ga arimasu.', en: 'There is beer in the refrigerator.' },
    ],
  },

  'vocab-sushi': {
    id: 'vocab-sushi',
    word: { ja: 'すし', reading: 'すし', romaji: 'sushi', en: 'sushi' },
    alternateWritings: ['寿司'],
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['food', 'N5'],
    exampleSentences: [
      { ja: 'すしを食べたいです。', furigana: 'すしをたべたいです。', romaji: 'Sushi wo tabetai desu.', en: 'I want to eat sushi.' },
    ],
  },

  'vocab-kudamono': {
    id: 'vocab-kudamono',
    word: { ja: '果物', reading: 'くだもの', romaji: 'kudamono', en: 'fruit' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['food', 'N5'],
    exampleSentences: [
      { ja: '野菜と果物を見ました。', furigana: 'やさいとくだものをみました。', romaji: 'Yasai to kudamono wo mimashita.', en: 'We looked at vegetables and fruit.' },
    ],
  },

  'vocab-ringo': {
    id: 'vocab-ringo',
    word: { ja: 'りんご', reading: 'りんご', romaji: 'ringo', en: 'apple' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['food', 'N5'],
    exampleSentences: [
      { ja: 'このりんごはいくらですか。', furigana: 'このりんごはいくらですか。', romaji: 'Kono ringo wa ikura desu ka.', en: 'How much is this apple?' },
    ],
  },

  'vocab-asagohan': {
    id: 'vocab-asagohan',
    word: { ja: '朝ご飯', reading: 'あさごはん', romaji: 'asagohan', en: 'breakfast' },
    alternateWritings: ['朝ごはん'],
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['food', 'daily-routine', 'N5'],
    exampleSentences: [
      { ja: 'お母さんと朝ご飯を食べます。', furigana: 'おかあさんとあさごはんをたべます。', romaji: 'Okaasan to asagohan wo tabemasu.', en: 'I eat breakfast with my mother.' },
    ],
  },

  // ─── Places & Objects (more) ───────────────────────────────────────────────

  'vocab-byouin': {
    id: 'vocab-byouin',
    word: { ja: '病院', reading: 'びょういん', romaji: 'byouin', en: 'hospital' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['place', 'building', 'N5'],
    exampleSentences: [
      { ja: '病院はどこですか。', furigana: 'びょういんはどこですか。', romaji: 'Byouin wa doko desu ka.', en: 'Where is the hospital?' },
    ],
  },

  'vocab-suupaa': {
    id: 'vocab-suupaa',
    word: { ja: 'スーパー', reading: 'スーパー', romaji: 'suupaa', en: 'supermarket' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['place', 'shopping', 'loanword', 'N5'],
    exampleSentences: [
      { ja: 'お母さんとスーパーへ行きました。', furigana: 'おかあさんとスーパーへいきました。', romaji: 'Okaasan to suupaa e ikimashita.', en: 'I went to the supermarket with my mother.' },
    ],
  },

  'vocab-reizouko': {
    id: 'vocab-reizouko',
    word: { ja: '冷蔵庫', reading: 'れいぞうこ', romaji: 'reizouko', en: 'refrigerator' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['object', 'furniture', 'N5'],
    exampleSentences: [
      { ja: '冷蔵庫の中にビールがあります。', furigana: 'れいぞうこのなかにビールがあります。', romaji: 'Reizouko no naka ni biiru ga arimasu.', en: 'There is beer in the refrigerator.' },
    ],
  },

  'vocab-naka': {
    id: 'vocab-naka',
    word: { ja: '中', reading: 'なか', romaji: 'naka', en: 'inside / middle' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['position', 'N5'],
    exampleSentences: [
      { ja: 'かばんの中に本があります。', furigana: 'かばんのなかにほんがあります。', romaji: 'Kaban no naka ni hon ga arimasu.', en: 'There is a book inside the bag.' },
    ],
  },

  'vocab-soto': {
    id: 'vocab-soto',
    word: { ja: '外', reading: 'そと', romaji: 'soto', en: 'outside' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['position', 'N5'],
    exampleSentences: [
      { ja: '毎日、外で遊びます。', furigana: 'まいにち、そとであそびます。', romaji: 'Mainichi, soto de asobimasu.', en: 'Every day, I play outside.' },
    ],
  },

  'vocab-shinbun': {
    id: 'vocab-shinbun',
    word: { ja: '新聞', reading: 'しんぶん', romaji: 'shinbun', en: 'newspaper' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['object', 'communication', 'N5'],
    exampleSentences: [
      { ja: '毎朝、新聞を読みます。', furigana: 'まいあさ、しんぶんをよみます。', romaji: 'Maiasa, shinbun wo yomimasu.', en: 'I read the newspaper every morning.' },
    ],
  },

  'vocab-eiga': {
    id: 'vocab-eiga',
    word: { ja: '映画', reading: 'えいが', romaji: 'eiga', en: 'movie / film' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['object', 'hobby', 'N5'],
    exampleSentences: [
      { ja: 'この映画は面白いです。', furigana: 'このえいがはおもしろいです。', romaji: 'Kono eiga wa omoshiroi desu.', en: 'This movie is interesting.' },
    ],
  },

  'vocab-tesuto': {
    id: 'vocab-tesuto',
    word: { ja: 'テスト', reading: 'テスト', romaji: 'tesuto', en: 'test / exam' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['school', 'loanword', 'N5'],
    exampleSentences: [
      { ja: '明日、テストがあります。', furigana: 'あした、テストがあります。', romaji: 'Ashita, tesuto ga arimasu.', en: 'There is a test tomorrow.' },
    ],
  },

  'vocab-paatii': {
    id: 'vocab-paatii',
    word: { ja: 'パーティー', reading: 'パーティー', romaji: 'paatii', en: 'party' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['social', 'loanword', 'N5'],
    exampleSentences: [
      { ja: 'パーティーは楽しかったです。', furigana: 'パーティーはたのしかったです。', romaji: 'Paatii wa tanoshikatta desu.', en: 'The party was fun.' },
    ],
  },

  'vocab-jitensha': {
    id: 'vocab-jitensha',
    word: { ja: '自転車', reading: 'じてんしゃ', romaji: 'jitensha', en: 'bicycle' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['transport', 'N5'],
    exampleSentences: [
      { ja: '自転車に乗ることができます。', furigana: 'じてんしゃにのることができます。', romaji: 'Jitensha ni noru koto ga dekimasu.', en: 'I can ride a bicycle.' },
    ],
  },

  'vocab-jugyou': {
    id: 'vocab-jugyou',
    word: { ja: '授業', reading: 'じゅぎょう', romaji: 'jugyou', en: 'class / lesson' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['school', 'N5'],
    exampleSentences: [
      { ja: '授業は楽しいです。', furigana: 'じゅぎょうはたのしいです。', romaji: 'Jugyou wa tanoshii desu.', en: 'The class is fun.' },
    ],
  },

  'vocab-kaimono': {
    id: 'vocab-kaimono',
    word: { ja: '買い物', reading: 'かいもの', romaji: 'kaimono', en: 'shopping' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['shopping', 'N5'],
    exampleSentences: [
      { ja: '買い物は楽しかったです。', furigana: 'かいものはたのしかったです。', romaji: 'Kaimono wa tanoshikatta desu.', en: 'Shopping was fun.' },
    ],
  },

  // ─── Body (more) ───────────────────────────────────────────────────────────

  'vocab-kao': {
    id: 'vocab-kao',
    word: { ja: '顔', reading: 'かお', romaji: 'kao', en: 'face' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['body', 'N5'],
    exampleSentences: [
      { ja: '朝、顔を洗います。', furigana: 'あさ、かおをあらいます。', romaji: 'Asa, kao wo araimasu.', en: 'I wash my face in the morning.' },
    ],
  },

  'vocab-ha-tooth': {
    id: 'vocab-ha-tooth',
    word: { ja: '歯', reading: 'は', romaji: 'ha', en: 'tooth / teeth' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['body', 'N5'],
    exampleSentences: [
      { ja: '歯を磨きます。', furigana: 'はをみがきます。', romaji: 'Ha wo migakimasu.', en: 'I brush my teeth.' },
    ],
  },

  // ─── Time words ────────────────────────────────────────────────────────────

  'vocab-ima': {
    id: 'vocab-ima',
    word: { ja: '今', reading: 'いま', romaji: 'ima', en: 'now' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['time', 'N5'],
    exampleSentences: [
      { ja: '今、雨が降っています。', furigana: 'いま、あめがふっています。', romaji: 'Ima, ame ga futte imasu.', en: 'It is raining now.' },
    ],
  },

  'vocab-kyou': {
    id: 'vocab-kyou',
    word: { ja: '今日', reading: 'きょう', romaji: 'kyou', en: 'today' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['time', 'N5'],
    exampleSentences: [
      { ja: '今日、スーパーへ行きました。', furigana: 'きょう、スーパーへいきました。', romaji: 'Kyou, suupaa e ikimashita.', en: 'Today I went to the supermarket.' },
    ],
  },

  'vocab-kinou': {
    id: 'vocab-kinou',
    word: { ja: '昨日', reading: 'きのう', romaji: 'kinou', en: 'yesterday' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['time', 'N5'],
    exampleSentences: [
      { ja: '昨日のパーティーは楽しかったです。', furigana: 'きのうのパーティーはたのしかったです。', romaji: 'Kinou no paatii wa tanoshikatta desu.', en: 'The party yesterday was fun.' },
    ],
  },

  'vocab-asa': {
    id: 'vocab-asa',
    word: { ja: '朝', reading: 'あさ', romaji: 'asa', en: 'morning' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['time', 'N5'],
    exampleSentences: [
      { ja: '朝、顔を洗います。', furigana: 'あさ、かおをあらいます。', romaji: 'Asa, kao wo araimasu.', en: 'In the morning I wash my face.' },
    ],
  },

  'vocab-yoru': {
    id: 'vocab-yoru',
    word: { ja: '夜', reading: 'よる', romaji: 'yoru', en: 'night / evening' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['time', 'N5'],
    exampleSentences: [
      { ja: '夜は家で寝ます。', furigana: 'よるはいえでねます。', romaji: 'Yoru wa ie de nemasu.', en: 'At night I sleep at home.' },
    ],
  },

  'vocab-ohiru': {
    id: 'vocab-ohiru',
    word: { ja: 'お昼', reading: 'おひる', romaji: 'ohiru', en: 'noon / lunch' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['time', 'food', 'N5'],
    exampleSentences: [
      { ja: 'お昼にご飯を食べます。', furigana: 'おひるにごはんをたべます。', romaji: 'Ohiru ni gohan wo tabemasu.', en: 'I eat a meal at noon.' },
    ],
  },

  'vocab-maiasa': {
    id: 'vocab-maiasa',
    word: { ja: '毎朝', reading: 'まいあさ', romaji: 'maiasa', en: 'every morning' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['time', 'N5'],
    exampleSentences: [
      { ja: '毎朝、新聞を読みます。', furigana: 'まいあさ、しんぶんをよみます。', romaji: 'Maiasa, shinbun wo yomimasu.', en: 'I read the newspaper every morning.' },
    ],
  },

  'vocab-natsuyasumi': {
    id: 'vocab-natsuyasumi',
    word: { ja: '夏休み', reading: 'なつやすみ', romaji: 'natsuyasumi', en: 'summer vacation' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['time', 'N5'],
    exampleSentences: [
      { ja: '夏休みに海へ行きます。', furigana: 'なつやすみにうみへいきます。', romaji: 'Natsuyasumi ni umi e ikimasu.', en: 'I go to the sea during summer vacation.' },
    ],
  },

  // ─── Question & quantity words ─────────────────────────────────────────────

  'vocab-nani': {
    id: 'vocab-nani',
    word: { ja: '何', reading: 'なに', romaji: 'nani', en: 'what' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['question', 'N5'],
    exampleSentences: [
      { ja: 'あれは何ですか。', furigana: 'あれはなんですか。', romaji: 'Are wa nan desu ka.', en: 'What is that?' },
    ],
  },

  'vocab-ikura': {
    id: 'vocab-ikura',
    word: { ja: 'いくら', reading: 'いくら', romaji: 'ikura', en: 'how much (price)' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['question', 'shopping', 'price', 'N5'],
    exampleSentences: [
      { ja: 'このりんごはいくらですか。', furigana: 'このりんごはいくらですか。', romaji: 'Kono ringo wa ikura desu ka.', en: 'How much is this apple?' },
    ],
  },

  // ─── Numbers & Money ───────────────────────────────────────────────────────

  'vocab-nana': {
    id: 'vocab-nana',
    word: { ja: '七', reading: 'なな', romaji: 'nana', en: 'seven' },
    alternateWritings: ['７'],
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['number', 'N5'],
    exampleSentences: [
      { ja: '毎日、七時に起きます。', furigana: 'まいにち、しちじにおきます。', romaji: 'Mainichi, shichi-ji ni okimasu.', en: 'Every day I wake up at seven o’clock.' },
    ],
  },

  'vocab-hyaku': {
    id: 'vocab-hyaku',
    word: { ja: '百', reading: 'ひゃく', romaji: 'hyaku', en: 'hundred' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['number', 'N5'],
    exampleSentences: [
      { ja: 'りんごは百円です。', furigana: 'りんごはひゃくえんです。', romaji: 'Ringo wa hyaku en desu.', en: 'The apple is one hundred yen.' },
    ],
  },

  'vocab-en': {
    id: 'vocab-en',
    word: { ja: '円', reading: 'えん', romaji: 'en', en: 'yen (currency)' },
    wordClass: 'counter',
    jlptLevel: 'N5',
    tags: ['money', 'price', 'counter', 'N5'],
    exampleSentences: [
      { ja: 'これは百円です。', furigana: 'これはひゃくえんです。', romaji: 'Kore wa hyaku en desu.', en: 'This is one hundred yen.' },
    ],
  },

  // ─── Verbs (more) ──────────────────────────────────────────────────────────

  'vocab-iu': {
    id: 'vocab-iu',
    word: { ja: '言う', reading: 'いう', romaji: 'iu', en: 'to say' },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb', 'communication', 'N5'],
    exampleSentences: [
      { ja: '店員さんが「百円です」と言いました。', furigana: 'てんいんさんが「ひゃくえんです」といいました。', romaji: 'Tenin-san ga "hyaku en desu" to iimashita.', en: 'The clerk said, "It is one hundred yen."' },
    ],
  },

  'vocab-asobu': {
    id: 'vocab-asobu',
    word: { ja: '遊ぶ', reading: 'あそぶ', romaji: 'asobu', en: 'to play' },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb', 'daily-routine', 'N5'],
    exampleSentences: [
      { ja: '外で遊びます。', furigana: 'そとであそびます。', romaji: 'Soto de asobimasu.', en: 'I play outside.' },
    ],
  },

  'vocab-arau': {
    id: 'vocab-arau',
    word: { ja: '洗う', reading: 'あらう', romaji: 'arau', en: 'to wash' },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb', 'daily-routine', 'N5'],
    exampleSentences: [
      { ja: '手を洗います。', furigana: 'てをあらいます。', romaji: 'Te wo araimasu.', en: 'I wash my hands.' },
    ],
  },

  'vocab-migaku': {
    id: 'vocab-migaku',
    word: { ja: '磨く', reading: 'みがく', romaji: 'migaku', en: 'to brush / to polish' },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb', 'daily-routine', 'N5'],
    exampleSentences: [
      { ja: '歯を磨きます。', furigana: 'はをみがきます。', romaji: 'Ha wo migakimasu.', en: 'I brush my teeth.' },
    ],
  },

  'vocab-kaeru-return': {
    id: 'vocab-kaeru-return',
    word: { ja: '帰る', reading: 'かえる', romaji: 'kaeru', en: 'to return / to go home' },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb', 'motion', 'N5'],
    exampleSentences: [
      { ja: '家に帰って、本を読みます。', furigana: 'いえにかえって、ほんをよみます。', romaji: 'Ie ni kaette, hon wo yomimasu.', en: 'I go home and read a book.' },
    ],
  },

  'vocab-noru': {
    id: 'vocab-noru',
    word: { ja: '乗る', reading: 'のる', romaji: 'noru', en: 'to ride / to get on' },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb', 'motion', 'transport', 'N5'],
    exampleSentences: [
      { ja: '自転車に乗ります。', furigana: 'じてんしゃにのります。', romaji: 'Jitensha ni norimasu.', en: 'I ride a bicycle.' },
    ],
  },

  'vocab-kekkon-suru': {
    id: 'vocab-kekkon-suru',
    word: { ja: '結婚する', reading: 'けっこんする', romaji: 'kekkon suru', en: 'to marry / to get married' },
    wordClass: 'verb-irregular',
    jlptLevel: 'N5',
    tags: ['verb', 'social', 'N5'],
    exampleSentences: [
      { ja: '兄は結婚しています。', furigana: 'あにはけっこんしています。', romaji: 'Ani wa kekkon shite imasu.', en: 'My older brother is married.' },
    ],
  },

  // ─── Adjectives (more) ─────────────────────────────────────────────────────

  'vocab-aoi': {
    id: 'vocab-aoi',
    word: { ja: '青い', reading: 'あおい', romaji: 'aoi', en: 'blue' },
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['adjective', 'color', 'N5'],
    exampleSentences: [
      { ja: '海は青いです。', furigana: 'うみはあおいです。', romaji: 'Umi wa aoi desu.', en: 'The sea is blue.' },
    ],
  },

  'vocab-omoshiroi': {
    id: 'vocab-omoshiroi',
    word: { ja: '面白い', reading: 'おもしろい', romaji: 'omoshiroi', en: 'interesting / funny' },
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['adjective', 'feeling', 'N5'],
    exampleSentences: [
      { ja: 'この映画は面白いです。', furigana: 'このえいがはおもしろいです。', romaji: 'Kono eiga wa omoshiroi desu.', en: 'This movie is interesting.' },
    ],
  },

  'vocab-tanoshii': {
    id: 'vocab-tanoshii',
    word: { ja: '楽しい', reading: 'たのしい', romaji: 'tanoshii', en: 'fun / enjoyable' },
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['adjective', 'feeling', 'N5'],
    exampleSentences: [
      { ja: '授業は楽しいです。', furigana: 'じゅぎょうはたのしいです。', romaji: 'Jugyou wa tanoshii desu.', en: 'The class is fun.' },
    ],
  },

  'vocab-kawaii': {
    id: 'vocab-kawaii',
    word: { ja: 'かわいい', reading: 'かわいい', romaji: 'kawaii', en: 'cute' },
    alternateWritings: ['可愛い'],
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['adjective', 'feeling', 'N5'],
    exampleSentences: [
      { ja: 'かわいい犬です。', furigana: 'かわいいいぬです。', romaji: 'Kawaii inu desu.', en: 'It is a cute dog.' },
    ],
  },

  'vocab-ureshii': {
    id: 'vocab-ureshii',
    word: { ja: '嬉しい', reading: 'うれしい', romaji: 'ureshii', en: 'happy / glad' },
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['adjective', 'feeling', 'N5'],
    exampleSentences: [
      { ja: '私は嬉しかったです。', furigana: 'わたしはうれしかったです。', romaji: 'Watashi wa ureshikatta desu.', en: 'I was happy.' },
    ],
  },

  'vocab-daisuki': {
    id: 'vocab-daisuki',
    word: { ja: '大好き', reading: 'だいすき', romaji: 'daisuki', en: 'to love / to like very much' },
    wordClass: 'na-adjective',
    jlptLevel: 'N5',
    tags: ['adjective', 'feeling', 'N5'],
    exampleSentences: [
      { ja: 'ご飯が大好きです。', furigana: 'ごはんがだいすきです。', romaji: 'Gohan ga daisuki desu.', en: 'I love food.' },
    ],
  },

  'vocab-shiawase': {
    id: 'vocab-shiawase',
    word: { ja: '幸せ', reading: 'しあわせ', romaji: 'shiawase', en: 'happy / happiness' },
    wordClass: 'na-adjective',
    jlptLevel: 'N5',
    tags: ['adjective', 'feeling', 'N5'],
    exampleSentences: [
      { ja: 'ポチは毎日幸せです。', furigana: 'ポチはまいにちしあわせです。', romaji: 'Pochi wa mainichi shiawase desu.', en: 'Pochi is happy every day.' },
    ],
  },

  // ─── Adverbs ───────────────────────────────────────────────────────────────

  'vocab-mou': {
    id: 'vocab-mou',
    word: { ja: 'もう', reading: 'もう', romaji: 'mou', en: 'already / soon' },
    wordClass: 'adverb',
    jlptLevel: 'N5',
    tags: ['adverb', 'time', 'N5'],
    exampleSentences: [
      { ja: '兄はもう結婚しています。', furigana: 'あにはもうけっこんしています。', romaji: 'Ani wa mou kekkon shite imasu.', en: 'My older brother is already married.' },
    ],
  },

  'vocab-mada': {
    id: 'vocab-mada',
    word: { ja: 'まだ', reading: 'まだ', romaji: 'mada', en: 'still / not yet' },
    wordClass: 'adverb',
    jlptLevel: 'N5',
    tags: ['adverb', 'time', 'N5'],
    exampleSentences: [
      { ja: 'まだ食べていません。', furigana: 'まだたべていません。', romaji: 'Mada tabete imasen.', en: 'I have not eaten yet.' },
    ],
  },

  'vocab-hitotsu': {
    id: 'vocab-hitotsu',
    word: { ja: '一つ', reading: 'ひとつ', romaji: 'hitotsu', en: 'one (thing)' },
    wordClass: 'counter',
    jlptLevel: 'N5',
    tags: ['counter', 'number', 'N5'],
    exampleSentences: [
      { ja: 'りんごを一つください。', furigana: 'りんごをひとつください。', romaji: 'Ringo o hitotsu kudasai.', en: 'One apple, please.' },
    ],
  },

  'vocab-futatsu': {
    id: 'vocab-futatsu',
    word: { ja: '二つ', reading: 'ふたつ', romaji: 'futatsu', en: 'two (things)' },
    wordClass: 'counter',
    jlptLevel: 'N5',
    tags: ['counter', 'number', 'N5'],
    exampleSentences: [
      { ja: 'パンを二つ買いました。', furigana: 'パンをふたつかいました。', romaji: 'Pan o futatsu kaimashita.', en: 'I bought two pieces of bread.' },
    ],
  },

  'vocab-ikutsu': {
    id: 'vocab-ikutsu',
    word: { ja: 'いくつ', reading: 'いくつ', romaji: 'ikutsu', en: 'how many; how old' },
    wordClass: 'expression',
    jlptLevel: 'N5',
    tags: ['counter', 'question', 'N5'],
    exampleSentences: [
      { ja: 'みかんはいくつありますか。', furigana: 'みかんはいくつありますか。', romaji: 'Mikan wa ikutsu arimasu ka.', en: 'How many mandarins are there?' },
    ],
  },

  'vocab-hitori': {
    id: 'vocab-hitori',
    word: { ja: '一人', reading: 'ひとり', romaji: 'hitori', en: 'one person; alone' },
    wordClass: 'counter',
    jlptLevel: 'N5',
    tags: ['counter', 'people', 'N5'],
    exampleSentences: [
      { ja: '一人で行きます。', furigana: 'ひとりでいきます。', romaji: 'Hitori de ikimasu.', en: 'I will go alone.' },
    ],
  },

  'vocab-futari': {
    id: 'vocab-futari',
    word: { ja: '二人', reading: 'ふたり', romaji: 'futari', en: 'two people' },
    wordClass: 'counter',
    jlptLevel: 'N5',
    tags: ['counter', 'people', 'N5'],
    exampleSentences: [
      { ja: '兄が二人います。', furigana: 'あにがふたりいます。', romaji: 'Ani ga futari imasu.', en: 'I have two older brothers.' },
    ],
  },

  'vocab-nannin': {
    id: 'vocab-nannin',
    word: { ja: '何人', reading: 'なんにん', romaji: 'nannin', en: 'how many people' },
    wordClass: 'expression',
    jlptLevel: 'N5',
    tags: ['counter', 'people', 'question', 'N5'],
    exampleSentences: [
      { ja: '家族は何人ですか。', furigana: 'かぞくはなんにんですか。', romaji: 'Kazoku wa nannin desu ka.', en: 'How many people are in your family?' },
    ],
  },

  'vocab-counter-mai': {
    id: 'vocab-counter-mai',
    word: { ja: '枚', reading: 'まい', romaji: 'mai', en: 'counter for flat objects' },
    wordClass: 'counter',
    jlptLevel: 'N5',
    tags: ['counter', 'objects', 'N5'],
    exampleSentences: [
      { ja: '紙を五枚ください。', furigana: 'かみをごまいください。', romaji: 'Kami o gomai kudasai.', en: 'Five sheets of paper, please.' },
    ],
  },

  'vocab-counter-hon': {
    id: 'vocab-counter-hon',
    word: { ja: '本', reading: 'ほん', romaji: 'hon', en: 'counter for long, thin objects' },
    wordClass: 'counter',
    jlptLevel: 'N5',
    tags: ['counter', 'objects', 'N5'],
    exampleSentences: [
      { ja: 'ビールを二本ください。', furigana: 'ビールをにほんください。', romaji: 'Bīru o nihon kudasai.', en: 'Two beers, please.' },
    ],
  },

  'vocab-counter-hiki': {
    id: 'vocab-counter-hiki',
    word: { ja: '匹', reading: 'ひき', romaji: 'hiki', en: 'counter for small animals' },
    wordClass: 'counter',
    jlptLevel: 'N5',
    tags: ['counter', 'animals', 'N5'],
    exampleSentences: [
      { ja: '猫が三匹います。', furigana: 'ねこがさんびきいます。', romaji: 'Neko ga sanbiki imasu.', en: 'There are three cats.' },
    ],
  },

  'vocab-counter-dai': {
    id: 'vocab-counter-dai',
    word: { ja: '台', reading: 'だい', romaji: 'dai', en: 'counter for machines and vehicles' },
    wordClass: 'counter',
    jlptLevel: 'N5',
    tags: ['counter', 'machines', 'N5'],
    exampleSentences: [
      { ja: '車が一台あります。', furigana: 'くるまがいちだいあります。', romaji: 'Kuruma ga ichidai arimasu.', en: 'There is one car.' },
    ],
  },

  'vocab-issho': {
    id: 'vocab-issho',
    word: { ja: '一緒に', reading: 'いっしょに', romaji: 'issho ni', en: 'together' },
    wordClass: 'adverb',
    jlptLevel: 'N5',
    tags: ['adverb', 'N5'],
    exampleSentences: [
      { ja: '一緒に行きましょう。', furigana: 'いっしょにいきましょう。', romaji: 'Issho ni ikimashō.', en: 'Let’s go together.' },
    ],
  },

  'vocab-shuumatsu': {
    id: 'vocab-shuumatsu',
    word: { ja: '週末', reading: 'しゅうまつ', romaji: 'shūmatsu', en: 'weekend' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'time', 'N5'],
    exampleSentences: [
      { ja: '週末は忙しいです。', furigana: 'しゅうまつはいそがしいです。', romaji: 'Shūmatsu wa isogashii desu.', en: 'I am busy on the weekend.' },
    ],
  },

  'vocab-ichiban': {
    id: 'vocab-ichiban',
    word: { ja: '一番', reading: 'いちばん', romaji: 'ichiban', en: 'most; best; number one' },
    wordClass: 'adverb',
    jlptLevel: 'N5',
    tags: ['adverb', 'comparison', 'N5'],
    exampleSentences: [
      { ja: '何が一番好きですか。', furigana: 'なにがいちばんすきですか。', romaji: 'Nani ga ichiban suki desu ka.', en: 'What do you like the most?' },
    ],
  },

  'vocab-dochira': {
    id: 'vocab-dochira',
    word: { ja: 'どちら', reading: 'どちら', romaji: 'dochira', en: 'which (of two); which way' },
    wordClass: 'expression',
    jlptLevel: 'N5',
    tags: ['question', 'comparison', 'N5'],
    exampleSentences: [
      { ja: '犬と猫とどちらが好きですか。', furigana: 'いぬとねことどちらがすきですか。', romaji: 'Inu to neko to dochira ga suki desu ka.', en: 'Which do you like, dogs or cats?' },
    ],
  },

  'vocab-muzukashii': {
    id: 'vocab-muzukashii',
    word: { ja: '難しい', reading: 'むずかしい', romaji: 'muzukashii', en: 'difficult' },
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['i-adjective', 'N5'],
    exampleSentences: [
      { ja: 'この漢字は難しいです。', furigana: 'このかんじはむずかしいです。', romaji: 'Kono kanji wa muzukashii desu.', en: 'This kanji is difficult.' },
    ],
  },

  'vocab-isogashii': {
    id: 'vocab-isogashii',
    word: { ja: '忙しい', reading: 'いそがしい', romaji: 'isogashii', en: 'busy' },
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['i-adjective', 'N5'],
    exampleSentences: [
      { ja: '今日はとても忙しいです。', furigana: 'きょうはとてもいそがしいです。', romaji: 'Kyō wa totemo isogashii desu.', en: 'I am very busy today.' },
    ],
  },

  'vocab-ongaku': {
    id: 'vocab-ongaku',
    word: { ja: '音楽', reading: 'おんがく', romaji: 'ongaku', en: 'music' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'N5'],
    exampleSentences: [
      { ja: '音楽を聞きながら勉強します。', furigana: 'おんがくをききながらべんきょうします。', romaji: 'Ongaku o kikinagara benkyō shimasu.', en: 'I study while listening to music.' },
    ],
  },

  'vocab-hima': {
    id: 'vocab-hima',
    word: { ja: '暇', reading: 'ひま', romaji: 'hima', en: 'free time; leisure' },
    wordClass: 'na-adjective',
    jlptLevel: 'N5',
    tags: ['na-adjective', 'N5'],
    exampleSentences: [
      { ja: '暇なとき、本を読みます。', furigana: 'ひまなとき、ほんをよみます。', romaji: 'Hima na toki, hon o yomimasu.', en: 'When I’m free, I read books.' },
    ],
  },

  'vocab-itsu': {
    id: 'vocab-itsu',
    word: { ja: 'いつ', reading: 'いつ', romaji: 'itsu', en: 'when' },
    wordClass: 'expression',
    jlptLevel: 'N5',
    tags: ['question', 'N5'],
    exampleSentences: [
      { ja: 'いつ日本へ行きますか。', furigana: 'いつにほんへいきますか。', romaji: 'Itsu Nihon e ikimasu ka.', en: 'When are you going to Japan?' },
    ],
  },

  'vocab-doko': {
    id: 'vocab-doko',
    word: { ja: 'どこ', reading: 'どこ', romaji: 'doko', en: 'where' },
    wordClass: 'expression',
    jlptLevel: 'N5',
    tags: ['question', 'N5'],
    exampleSentences: [
      { ja: 'トイレはどこですか。', furigana: 'トイレはどこですか。', romaji: 'Toire wa doko desu ka.', en: 'Where is the toilet?' },
    ],
  },

  'vocab-doushite': {
    id: 'vocab-doushite',
    word: { ja: 'どうして', reading: 'どうして', romaji: 'dōshite', en: 'why' },
    wordClass: 'expression',
    jlptLevel: 'N5',
    tags: ['question', 'N5'],
    exampleSentences: [
      { ja: 'どうして遅いですか。', furigana: 'どうしておそいですか。', romaji: 'Dōshite osoi desu ka.', en: 'Why are you late?' },
    ],
  },

  'vocab-dore': {
    id: 'vocab-dore',
    word: { ja: 'どれ', reading: 'どれ', romaji: 'dore', en: 'which one (of three or more)' },
    wordClass: 'expression',
    jlptLevel: 'N5',
    tags: ['question', 'N5'],
    exampleSentences: [
      { ja: 'あなたのかばんはどれですか。', furigana: 'あなたのかばんはどれですか。', romaji: 'Anata no kaban wa dore desu ka.', en: 'Which one is your bag?' },
    ],
  },

  'vocab-densha': {
    id: 'vocab-densha',
    word: { ja: '電車', reading: 'でんしゃ', romaji: 'densha', en: 'train' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'transport', 'N5'],
    exampleSentences: [
      { ja: '電車で学校へ行きます。', furigana: 'でんしゃでがっこうへいきます。', romaji: 'Densha de gakkō e ikimasu.', en: 'I go to school by train.' },
    ],
  },

  'vocab-hoshii': {
    id: 'vocab-hoshii',
    word: { ja: 'ほしい', reading: 'ほしい', romaji: 'hoshii', en: 'want (a thing); desired' },
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['i-adjective', 'desire', 'N5'],
    exampleSentences: [
      { ja: '新しいカメラがほしいです。', furigana: 'あたらしいカメラがほしいです。', romaji: 'Atarashii kamera ga hoshii desu.', en: 'I want a new camera.' },
    ],
  },

  'vocab-yoku': {
    id: 'vocab-yoku',
    word: { ja: 'よく', reading: 'よく', romaji: 'yoku', en: 'often; well' },
    wordClass: 'adverb',
    jlptLevel: 'N5',
    tags: ['adverb', 'frequency', 'N5'],
    exampleSentences: [
      { ja: 'よく映画を見ます。', furigana: 'よくえいがをみます。', romaji: 'Yoku eiga o mimasu.', en: 'I often watch movies.' },
    ],
  },

  'vocab-tokidoki': {
    id: 'vocab-tokidoki',
    word: { ja: 'ときどき', reading: 'ときどき', romaji: 'tokidoki', en: 'sometimes' },
    wordClass: 'adverb',
    jlptLevel: 'N5',
    tags: ['adverb', 'frequency', 'N5'],
    exampleSentences: [
      { ja: 'ときどき音楽を聞きます。', furigana: 'ときどきおんがくをききます。', romaji: 'Tokidoki ongaku o kikimasu.', en: 'I sometimes listen to music.' },
    ],
  },

  'vocab-amari': {
    id: 'vocab-amari',
    word: { ja: 'あまり', reading: 'あまり', romaji: 'amari', en: '(not) much / (not) often — with a negative' },
    wordClass: 'adverb',
    jlptLevel: 'N5',
    tags: ['adverb', 'degree', 'N5'],
    exampleSentences: [
      { ja: 'あまりテレビを見ません。', furigana: 'あまりテレビをみません。', romaji: 'Amari terebi o mimasen.', en: 'I don’t watch TV much.' },
    ],
  },

  'vocab-zenzen': {
    id: 'vocab-zenzen',
    word: { ja: 'ぜんぜん', reading: 'ぜんぜん', romaji: 'zenzen', en: '(not) at all — with a negative' },
    wordClass: 'adverb',
    jlptLevel: 'N5',
    tags: ['adverb', 'degree', 'N5'],
    exampleSentences: [
      { ja: 'お酒はぜんぜん飲みません。', furigana: 'おさけはぜんぜんのみません。', romaji: 'Osake wa zenzen nomimasen.', en: 'I don’t drink alcohol at all.' },
    ],
  },

  'vocab-tabun': {
    id: 'vocab-tabun',
    word: { ja: 'たぶん', reading: 'たぶん', romaji: 'tabun', en: 'probably; maybe' },
    wordClass: 'adverb',
    jlptLevel: 'N5',
    tags: ['adverb', 'N5'],
    exampleSentences: [
      { ja: 'たぶん明日は雨でしょう。', furigana: 'たぶんあしたはあめでしょう。', romaji: 'Tabun ashita wa ame deshō.', en: 'It will probably rain tomorrow.' },
    ],
  },

  'vocab-okane': {
    id: 'vocab-okane',
    word: { ja: 'お金', reading: 'おかね', romaji: 'okane', en: 'money' },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'N5'],
    exampleSentences: [
      { ja: 'お金がほしいです。', furigana: 'おかねがほしいです。', romaji: 'Okane ga hoshii desu.', en: 'I want money.' },
    ],
  },


  'vocab-getsuyoubi': {
    id: 'vocab-getsuyoubi',
    word: { ja: '月曜日', reading: 'げつようび', romaji: 'getsuyoubi', en: "Monday" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'time', 'N5'],
    exampleSentences: [
      { ja: '月曜日に学校へ行きます。', furigana: 'げつようびにがっこうへいきます。', en: "I go to school on Monday." },
    ],
  },
  'vocab-kayoubi': {
    id: 'vocab-kayoubi',
    word: { ja: '火曜日', reading: 'かようび', romaji: 'kayoubi', en: "Tuesday" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'time', 'N5'],
    exampleSentences: [
      { ja: '火曜日はテストです。', furigana: 'かようびはテストです。', en: "Tuesday is the test." },
    ],
  },
  'vocab-suiyoubi': {
    id: 'vocab-suiyoubi',
    word: { ja: '水曜日', reading: 'すいようび', romaji: 'suiyoubi', en: "Wednesday" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'time', 'N5'],
    exampleSentences: [
      { ja: '水曜日に会います。', furigana: 'すいようびにあいます。', en: "Let's meet on Wednesday." },
    ],
  },
  'vocab-mokuyoubi': {
    id: 'vocab-mokuyoubi',
    word: { ja: '木曜日', reading: 'もくようび', romaji: 'mokuyoubi', en: "Thursday" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'time', 'N5'],
    exampleSentences: [
      { ja: '木曜日は忙しいです。', furigana: 'もくようびはいそがしいです。', en: "I'm busy on Thursday." },
    ],
  },
  'vocab-kinyoubi': {
    id: 'vocab-kinyoubi',
    word: { ja: '金曜日', reading: 'きんようび', romaji: 'kinyoubi', en: "Friday" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'time', 'N5'],
    exampleSentences: [
      { ja: '金曜日に映画を見ます。', furigana: 'きんようびにえいがをみます。', en: "I'll watch a movie on Friday." },
    ],
  },
  'vocab-doyoubi': {
    id: 'vocab-doyoubi',
    word: { ja: '土曜日', reading: 'どようび', romaji: 'doyoubi', en: "Saturday" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'time', 'N5'],
    exampleSentences: [
      { ja: '土曜日は休みです。', furigana: 'どようびはやすみです。', en: "Saturday is a day off." },
    ],
  },
  'vocab-nichiyoubi': {
    id: 'vocab-nichiyoubi',
    word: { ja: '日曜日', reading: 'にちようび', romaji: 'nichiyoubi', en: "Sunday" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'time', 'N5'],
    exampleSentences: [
      { ja: '日曜日に公園へ行きます。', furigana: 'にちようびにこうえんへいきます。', en: "I go to the park on Sunday." },
    ],
  },
  'vocab-konshuu': {
    id: 'vocab-konshuu',
    word: { ja: '今週', reading: 'こんしゅう', romaji: 'konshuu', en: "this week" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'time', 'N5'],
    exampleSentences: [
      { ja: '今週は忙しいです。', furigana: 'こんしゅうはいそがしいです。', en: "I'm busy this week." },
    ],
  },
  'vocab-rainen': {
    id: 'vocab-rainen',
    word: { ja: '来年', reading: 'らいねん', romaji: 'rainen', en: "next year" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'time', 'N5'],
    exampleSentences: [
      { ja: '来年、日本へ行きます。', furigana: 'らいねん、にほんへいきます。', en: "I'll go to Japan next year." },
    ],
  },
  'vocab-kyonen': {
    id: 'vocab-kyonen',
    word: { ja: '去年', reading: 'きょねん', romaji: 'kyonen', en: "last year" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'time', 'N5'],
    exampleSentences: [
      { ja: '去年、京都へ行きました。', furigana: 'きょねん、きょうとへいきました。', en: "I went to Kyoto last year." },
    ],
  },
  'vocab-kotoshi': {
    id: 'vocab-kotoshi',
    word: { ja: '今年', reading: 'ことし', romaji: 'kotoshi', en: "this year" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'time', 'N5'],
    exampleSentences: [
      { ja: '今年、日本語を勉強します。', furigana: 'ことし、にほんごをべんきょうします。', en: "I'll study Japanese this year." },
    ],
  },
  'vocab-ashita': {
    id: 'vocab-ashita',
    word: { ja: '明日', reading: 'あした', romaji: 'ashita', en: "tomorrow" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'time', 'N5'],
    exampleSentences: [
      { ja: '明日、また会いましょう。', furigana: 'あした、またあいましょう。', en: "Let's meet again tomorrow." },
    ],
  },
  'vocab-gozen': {
    id: 'vocab-gozen',
    word: { ja: '午前', reading: 'ごぜん', romaji: 'gozen', en: "a.m.; morning" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'time', 'N5'],
    exampleSentences: [
      { ja: '午前九時に始まります。', furigana: 'ごぜんくじにはじまります。', en: "It starts at 9 a.m." },
    ],
  },
  'vocab-gogo': {
    id: 'vocab-gogo',
    word: { ja: '午後', reading: 'ごご', romaji: 'gogo', en: "p.m.; afternoon" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'time', 'N5'],
    exampleSentences: [
      { ja: '午後、買い物をします。', furigana: 'ごご、かいものをします。', en: "I'll go shopping in the afternoon." },
    ],
  },
  'vocab-yuugata': {
    id: 'vocab-yuugata',
    word: { ja: '夕方', reading: 'ゆうがた', romaji: 'yuugata', en: "evening" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'time', 'N5'],
    exampleSentences: [
      { ja: '夕方、家へ帰ります。', furigana: 'ゆうがた、いえへかえります。', en: "I go home in the evening." },
    ],
  },
  'vocab-konban': {
    id: 'vocab-konban',
    word: { ja: '今晩', reading: 'こんばん', romaji: 'konban', en: "tonight" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'time', 'N5'],
    exampleSentences: [
      { ja: '今晩、うちにいます。', furigana: 'こんばん、うちにいます。', en: "I'll be home tonight." },
    ],
  },
  'vocab-ban': {
    id: 'vocab-ban',
    word: { ja: '晩', reading: 'ばん', romaji: 'ban', en: "evening; night" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'time', 'N5'],
    exampleSentences: [
      { ja: '晩ご飯を食べます。', furigana: 'ばんごはんをたべます。', en: "I eat dinner." },
    ],
  },
  'vocab-haru': {
    id: 'vocab-haru',
    word: { ja: '春', reading: 'はる', romaji: 'haru', en: "spring" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'nature', 'N5'],
    exampleSentences: [
      { ja: '春はあたたかいです。', furigana: 'はるはあたたかいです。', en: "Spring is warm." },
    ],
  },
  'vocab-natsu': {
    id: 'vocab-natsu',
    word: { ja: '夏', reading: 'なつ', romaji: 'natsu', en: "summer" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'nature', 'N5'],
    exampleSentences: [
      { ja: '夏は暑いです。', furigana: 'なつはあついです。', en: "Summer is hot." },
    ],
  },
  'vocab-aki': {
    id: 'vocab-aki',
    word: { ja: '秋', reading: 'あき', romaji: 'aki', en: "autumn" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'nature', 'N5'],
    exampleSentences: [
      { ja: '秋は好きです。', furigana: 'あきはすきです。', en: "I like autumn." },
    ],
  },
  'vocab-fuyu': {
    id: 'vocab-fuyu',
    word: { ja: '冬', reading: 'ふゆ', romaji: 'fuyu', en: "winter" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'nature', 'N5'],
    exampleSentences: [
      { ja: '冬はとても寒いです。', furigana: 'ふゆはとてもさむいです。', en: "Winter is very cold." },
    ],
  },
  'vocab-tenki': {
    id: 'vocab-tenki',
    word: { ja: '天気', reading: 'てんき', romaji: 'tenki', en: "weather" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'nature', 'N5'],
    exampleSentences: [
      { ja: '今日はいい天気です。', furigana: 'きょうはいいてんきです。', en: "The weather is nice today." },
    ],
  },
  'vocab-sora': {
    id: 'vocab-sora',
    word: { ja: '空', reading: 'そら', romaji: 'sora', en: "sky" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'nature', 'N5'],
    exampleSentences: [
      { ja: '空が青いです。', furigana: 'そらがあおいです。', en: "The sky is blue." },
    ],
  },
  'vocab-kaze': {
    id: 'vocab-kaze',
    word: { ja: '風', reading: 'かぜ', romaji: 'kaze', en: "wind" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'nature', 'N5'],
    exampleSentences: [
      { ja: '風が強いです。', furigana: 'かぜがつよいです。', en: "The wind is strong." },
    ],
  },
  'vocab-yama': {
    id: 'vocab-yama',
    word: { ja: '山', reading: 'やま', romaji: 'yama', en: "mountain" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'nature', 'N5'],
    exampleSentences: [
      { ja: '山が見えます。', furigana: 'やまがみえます。', en: "I can see a mountain." },
    ],
  },
  'vocab-kawa': {
    id: 'vocab-kawa',
    word: { ja: '川', reading: 'かわ', romaji: 'kawa', en: "river" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'nature', 'N5'],
    exampleSentences: [
      { ja: '川で泳ぎます。', furigana: 'かわでおよぎます。', en: "I swim in the river." },
    ],
  },
  'vocab-ki': {
    id: 'vocab-ki',
    word: { ja: '木', reading: 'き', romaji: 'ki', en: "tree" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'nature', 'N5'],
    exampleSentences: [
      { ja: '大きい木があります。', furigana: 'おおきいきがあります。', en: "There is a big tree." },
    ],
  },
  'vocab-hanabi': {
    id: 'vocab-hanabi',
    word: { ja: '花火', reading: 'はなび', romaji: 'hanabi', en: "fireworks" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'nature', 'N5'],
    exampleSentences: [
      { ja: '夏に花火を見ます。', furigana: 'なつにはなびをみます。', en: "I watch fireworks in summer." },
    ],
  },
  'vocab-ue': {
    id: 'vocab-ue',
    word: { ja: '上', reading: 'うえ', romaji: 'ue', en: "above" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'position', 'N5'],
    exampleSentences: [
      { ja: '机の上に本があります。', furigana: 'つくえのうえにほんがあります。', en: "There is a book on the desk." },
    ],
  },
  'vocab-shita': {
    id: 'vocab-shita',
    word: { ja: '下', reading: 'した', romaji: 'shita', en: "below" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'position', 'N5'],
    exampleSentences: [
      { ja: '椅子の下に猫がいます。', furigana: 'いすのしたにねこがいます。', en: "There is a cat under the chair." },
    ],
  },
  'vocab-mae': {
    id: 'vocab-mae',
    word: { ja: '前', reading: 'まえ', romaji: 'mae', en: "front" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'position', 'N5'],
    exampleSentences: [
      { ja: '駅の前で待ちます。', furigana: 'えきのまえでまちます。', en: "I'll wait in front of the station." },
    ],
  },
  'vocab-ushiro': {
    id: 'vocab-ushiro',
    word: { ja: '後ろ', reading: 'うしろ', romaji: 'ushiro', en: "behind" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'position', 'N5'],
    exampleSentences: [
      { ja: '後ろを見てください。', furigana: 'うしろをみてください。', en: "Please look behind you." },
    ],
  },
  'vocab-migi': {
    id: 'vocab-migi',
    word: { ja: '右', reading: 'みぎ', romaji: 'migi', en: "right" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'position', 'N5'],
    exampleSentences: [
      { ja: '右へ曲がります。', furigana: 'みぎへまがります。', en: "Turn right." },
    ],
  },
  'vocab-hidari': {
    id: 'vocab-hidari',
    word: { ja: '左', reading: 'ひだり', romaji: 'hidari', en: "left" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'position', 'N5'],
    exampleSentences: [
      { ja: '左に銀行があります。', furigana: 'ひだりにぎんこうがあります。', en: "There is a bank on the left." },
    ],
  },
  'vocab-aida': {
    id: 'vocab-aida',
    word: { ja: '間', reading: 'あいだ', romaji: 'aida', en: "interval; between" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'position', 'N5'],
    exampleSentences: [
      { ja: '二時から三時までの間です。', furigana: 'にじからさんじまでのまです。', en: "It's between two and three o'clock." },
    ],
  },
  'vocab-tokoro': {
    id: 'vocab-tokoro',
    word: { ja: '所', reading: 'ところ', romaji: 'tokoro', en: "place" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'position', 'N5'],
    exampleSentences: [
      { ja: '静かな所が好きです。', furigana: 'しずかなところがすきです。', en: "I like quiet places." },
    ],
  },
  'vocab-kuchi': {
    id: 'vocab-kuchi',
    word: { ja: '口', reading: 'くち', romaji: 'kuchi', en: "mouth" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'body', 'N5'],
    exampleSentences: [
      { ja: '口を大きく開けてください。', furigana: 'くちをおおきくあけてください。', en: "Please open your mouth wide." },
    ],
  },
  'vocab-mimi': {
    id: 'vocab-mimi',
    word: { ja: '耳', reading: 'みみ', romaji: 'mimi', en: "ear" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'body', 'N5'],
    exampleSentences: [
      { ja: '耳が痛いです。', furigana: 'みみがいたいです。', en: "My ears hurt." },
    ],
  },
  'vocab-yubi': {
    id: 'vocab-yubi',
    word: { ja: '指', reading: 'ゆび', romaji: 'yubi', en: "finger" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'body', 'N5'],
    exampleSentences: [
      { ja: '指が長いです。', furigana: 'ゆびがながいです。', en: "My fingers are long." },
    ],
  },
  'vocab-kubi': {
    id: 'vocab-kubi',
    word: { ja: '首', reading: 'くび', romaji: 'kubi', en: "neck" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'body', 'N5'],
    exampleSentences: [
      { ja: '首が痛いです。', furigana: 'くびがいたいです。', en: "My neck hurts." },
    ],
  },
  'vocab-karada': {
    id: 'vocab-karada',
    word: { ja: '体', reading: 'からだ', romaji: 'karada', en: "body" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'body', 'N5'],
    exampleSentences: [
      { ja: '体を大切にしてください。', furigana: 'からだをたいせつにしてください。', en: "Please take care of your body." },
    ],
  },
  'vocab-kokoro': {
    id: 'vocab-kokoro',
    word: { ja: '心', reading: 'こころ', romaji: 'kokoro', en: "heart" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'body', 'N5'],
    exampleSentences: [
      { ja: 'やさしい心を持っています。', furigana: 'やさしいこころをもっています。', en: "She has a kind heart." },
    ],
  },
  'vocab-chichi': {
    id: 'vocab-chichi',
    word: { ja: '父', reading: 'ちち', romaji: 'chichi', en: "father" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'family', 'N5'],
    exampleSentences: [
      { ja: '父は医者です。', furigana: 'ちちはいしゃです。', en: "My father is a doctor." },
    ],
  },
  'vocab-haha': {
    id: 'vocab-haha',
    word: { ja: '母', reading: 'はは', romaji: 'haha', en: "mother" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'family', 'N5'],
    exampleSentences: [
      { ja: '母は料理が上手です。', furigana: 'はははりょうりがじょうずです。', en: "My mother is good at cooking." },
    ],
  },
  'vocab-ane': {
    id: 'vocab-ane',
    word: { ja: '姉', reading: 'あね', romaji: 'ane', en: "older sister" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'family', 'N5'],
    exampleSentences: [
      { ja: '姉は大学生です。', furigana: 'あねはだいがくせいです。', en: "My older sister is a university student." },
    ],
  },
  'vocab-kyoudai': {
    id: 'vocab-kyoudai',
    word: { ja: '兄弟', reading: 'きょうだい', romaji: 'kyoudai', en: "siblings; brothers" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'family', 'N5'],
    exampleSentences: [
      { ja: '兄弟が三人います。', furigana: 'きょうだいがさんにんいます。', en: "I have three siblings." },
    ],
  },
  'vocab-kazoku': {
    id: 'vocab-kazoku',
    word: { ja: '家族', reading: 'かぞく', romaji: 'kazoku', en: "family" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'family', 'N5'],
    exampleSentences: [
      { ja: '家族は四人です。', furigana: 'かぞくはよにんです。', en: "There are four people in my family." },
    ],
  },
  'vocab-ryoushin': {
    id: 'vocab-ryoushin',
    word: { ja: '両親', reading: 'りょうしん', romaji: 'ryoushin', en: "parents" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'family', 'N5'],
    exampleSentences: [
      { ja: '両親は元気です。', furigana: 'りょうしんはげんきです。', en: "My parents are well." },
    ],
  },
  'vocab-kodomo': {
    id: 'vocab-kodomo',
    word: { ja: '子供', reading: 'こども', romaji: 'kodomo', en: "child" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'family', 'N5'],
    exampleSentences: [
      { ja: '子供が二人います。', furigana: 'こどもがふたりいます。', en: "I have two children." },
    ],
  },
  'vocab-oya': {
    id: 'vocab-oya',
    word: { ja: '親', reading: 'おや', romaji: 'oya', en: "parent" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'family', 'N5'],
    exampleSentences: [
      { ja: '親と一緒に住んでいます。', furigana: 'おやといっしょにすんでいます。', en: "I live with my parents." },
    ],
  },
  'vocab-otoko': {
    id: 'vocab-otoko',
    word: { ja: '男', reading: 'おとこ', romaji: 'otoko', en: "man" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'people', 'N5'],
    exampleSentences: [
      { ja: '男の人が来ました。', furigana: 'おとこのひとがきました。', en: "A man came." },
    ],
  },
  'vocab-onna': {
    id: 'vocab-onna',
    word: { ja: '女', reading: 'おんな', romaji: 'onna', en: "woman" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'people', 'N5'],
    exampleSentences: [
      { ja: '女の人が話しています。', furigana: 'おんなのひとがはなしています。', en: "A woman is talking." },
    ],
  },
  'vocab-sensei': {
    id: 'vocab-sensei',
    word: { ja: '先生', reading: 'せんせい', romaji: 'sensei', en: "teacher" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'people', 'N5'],
    exampleSentences: [
      { ja: '先生に質問します。', furigana: 'せんせいにしつもんします。', en: "I'll ask the teacher a question." },
    ],
  },
  'vocab-roujin': {
    id: 'vocab-roujin',
    word: { ja: '老人', reading: 'ろうじん', romaji: 'roujin', en: "elderly person" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'people', 'N5'],
    exampleSentences: [
      { ja: '老人にせきをゆずります。', furigana: 'ろうじんにせきをゆずります。', en: "I give up my seat to elderly people." },
    ],
  },
  'vocab-akachan': {
    id: 'vocab-akachan',
    word: { ja: '赤ちゃん', reading: 'あかちゃん', romaji: 'akachan', en: "baby" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'people', 'N5'],
    exampleSentences: [
      { ja: '赤ちゃんが寝ています。', furigana: 'あかちゃんがねています。', en: "The baby is sleeping." },
    ],
  },
  'vocab-kuruma': {
    id: 'vocab-kuruma',
    word: { ja: '車', reading: 'くるま', romaji: 'kuruma', en: "car" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'transport', 'N5'],
    exampleSentences: [
      { ja: '車で会社へ行きます。', furigana: 'くるまでかいしゃへいきます。', en: "I go to work by car." },
    ],
  },
  'vocab-jidousha': {
    id: 'vocab-jidousha',
    word: { ja: '自動車', reading: 'じどうしゃ', romaji: 'jidousha', en: "automobile; car" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'transport', 'N5'],
    exampleSentences: [
      { ja: '自動車を買いました。', furigana: 'じどうしゃをかいました。', en: "I bought a car." },
    ],
  },
  'vocab-hikouki': {
    id: 'vocab-hikouki',
    word: { ja: '飛行機', reading: 'ひこうき', romaji: 'hikouki', en: "airplane" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'transport', 'N5'],
    exampleSentences: [
      { ja: '飛行機で日本へ行きます。', furigana: 'ひこうきでにほんへいきます。', en: "I'll go to Japan by plane." },
    ],
  },
  'vocab-michi': {
    id: 'vocab-michi',
    word: { ja: '道', reading: 'みち', romaji: 'michi', en: "road" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'transport', 'N5'],
    exampleSentences: [
      { ja: 'この道をまっすぐ行ってください。', furigana: 'このみちをまっすぐいってください。', en: "Please go straight down this road." },
    ],
  },
  'vocab-kuukou': {
    id: 'vocab-kuukou',
    word: { ja: '空港', reading: 'くうこう', romaji: 'kuukou', en: "airport" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'transport', 'N5'],
    exampleSentences: [
      { ja: '空港で友達を待ちます。', furigana: 'くうこうでともだちをまちます。', en: "I'll wait for my friend at the airport." },
    ],
  },
  'vocab-kaisha': {
    id: 'vocab-kaisha',
    word: { ja: '会社', reading: 'かいしゃ', romaji: 'kaisha', en: "company" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'place', 'N5'],
    exampleSentences: [
      { ja: '会社は駅の近くです。', furigana: 'かいしゃはえきのちかくです。', en: "The company is near the station." },
    ],
  },
  'vocab-ginkou': {
    id: 'vocab-ginkou',
    word: { ja: '銀行', reading: 'ぎんこう', romaji: 'ginkou', en: "bank" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'place', 'N5'],
    exampleSentences: [
      { ja: '銀行でお金を借ります。', furigana: 'ぎんこうでおかねをかります。', en: "I borrow money at the bank." },
    ],
  },
  'vocab-daigaku': {
    id: 'vocab-daigaku',
    word: { ja: '大学', reading: 'だいがく', romaji: 'daigaku', en: "university" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'place', 'N5'],
    exampleSentences: [
      { ja: '大学で日本語を勉強します。', furigana: 'だいがくでにほんごをべんきょうします。', en: "I study Japanese at university." },
    ],
  },
  'vocab-koukou': {
    id: 'vocab-koukou',
    word: { ja: '高校', reading: 'こうこう', romaji: 'koukou', en: "high school" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'place', 'N5'],
    exampleSentences: [
      { ja: '高校の友達に会います。', furigana: 'こうこうのともだちにあいます。', en: "I'll meet a friend from high school." },
    ],
  },
  'vocab-heya': {
    id: 'vocab-heya',
    word: { ja: '部屋', reading: 'へや', romaji: 'heya', en: "room" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'place', 'N5'],
    exampleSentences: [
      { ja: '部屋がきれいです。', furigana: 'へやがきれいです。', en: "The room is clean." },
    ],
  },
  'vocab-shokudou': {
    id: 'vocab-shokudou',
    word: { ja: '食堂', reading: 'しょくどう', romaji: 'shokudou', en: "cafeteria; dining hall" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'place', 'N5'],
    exampleSentences: [
      { ja: '食堂でご飯を食べます。', furigana: 'しょくどうでごはんをたべます。', en: "I eat at the cafeteria." },
    ],
  },
  'vocab-honya': {
    id: 'vocab-honya',
    word: { ja: '本屋', reading: 'ほんや', romaji: 'honya', en: "bookstore" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'place', 'N5'],
    exampleSentences: [
      { ja: '本屋で本を買います。', furigana: 'ほんやでほんをかいます。', en: "I buy books at the bookstore." },
    ],
  },
  'vocab-machi': {
    id: 'vocab-machi',
    word: { ja: '町', reading: 'まち', romaji: 'machi', en: "town" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'place', 'N5'],
    exampleSentences: [
      { ja: 'この町は静かです。', furigana: 'このまちはしずかです。', en: "This town is quiet." },
    ],
  },
  'vocab-kuni': {
    id: 'vocab-kuni',
    word: { ja: '国', reading: 'くに', romaji: 'kuni', en: "country" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'place', 'N5'],
    exampleSentences: [
      { ja: 'どこの国から来ましたか。', furigana: 'どこのくにからきましたか。', en: "Which country are you from?" },
    ],
  },
  'vocab-basho': {
    id: 'vocab-basho',
    word: { ja: '場所', reading: 'ばしょ', romaji: 'basho', en: "place" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'place', 'N5'],
    exampleSentences: [
      { ja: 'いい場所を知っています。', furigana: 'いいばしょをしっています。', en: "I know a good place." },
    ],
  },
  'vocab-sekai': {
    id: 'vocab-sekai',
    word: { ja: '世界', reading: 'せかい', romaji: 'sekai', en: "world" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'place', 'N5'],
    exampleSentences: [
      { ja: '世界には多くの国があります。', furigana: 'せかいにはおおくのくにがあります。', en: "There are many countries in the world." },
    ],
  },
  'vocab-nihongo': {
    id: 'vocab-nihongo',
    word: { ja: '日本語', reading: 'にほんご', romaji: 'nihongo', en: "Japanese language" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'study', 'N5'],
    exampleSentences: [
      { ja: '日本語はおもしろいです。', furigana: 'にほんごはおもしろいです。', en: "Japanese is interesting." },
    ],
  },
  'vocab-eigo': {
    id: 'vocab-eigo',
    word: { ja: '英語', reading: 'えいご', romaji: 'eigo', en: "English" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'study', 'N5'],
    exampleSentences: [
      { ja: '英語を話します。', furigana: 'えいごをはなします。', en: "I speak English." },
    ],
  },
  'vocab-kanji': {
    id: 'vocab-kanji',
    word: { ja: '漢字', reading: 'かんじ', romaji: 'kanji', en: "kanji" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'study', 'N5'],
    exampleSentences: [
      { ja: '漢字は難しいです。', furigana: 'かんじはむずかしいです。', en: "Kanji are difficult." },
    ],
  },
  'vocab-kotoba': {
    id: 'vocab-kotoba',
    word: { ja: '言葉', reading: 'ことば', romaji: 'kotoba', en: "word; language" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'study', 'N5'],
    exampleSentences: [
      { ja: '新しい言葉を覚えます。', furigana: 'あたらしいことばをおぼえます。', en: "I memorize new words." },
    ],
  },
  'vocab-shitsumon': {
    id: 'vocab-shitsumon',
    word: { ja: '質問', reading: 'しつもん', romaji: 'shitsumon', en: "question" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'study', 'N5'],
    exampleSentences: [
      { ja: '質問がありますか。', furigana: 'しつもんがありますか。', en: "Do you have a question?" },
    ],
  },
  'vocab-mondai': {
    id: 'vocab-mondai',
    word: { ja: '問題', reading: 'もんだい', romaji: 'mondai', en: "problem" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'study', 'N5'],
    exampleSentences: [
      { ja: 'この問題は簡単です。', furigana: 'このもんだいはかんたんです。', en: "This problem is easy." },
    ],
  },
  'vocab-imi': {
    id: 'vocab-imi',
    word: { ja: '意味', reading: 'いみ', romaji: 'imi', en: "meaning" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'study', 'N5'],
    exampleSentences: [
      { ja: 'この言葉の意味は何ですか。', furigana: 'このことばのいみはなんですか。', en: "What does this word mean?" },
    ],
  },
  'vocab-jisho': {
    id: 'vocab-jisho',
    word: { ja: '辞書', reading: 'じしょ', romaji: 'jisho', en: "dictionary" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'study', 'N5'],
    exampleSentences: [
      { ja: '辞書で意味を調べます。', furigana: 'じしょでいみをしらべます。', en: "I look up meanings in a dictionary." },
    ],
  },
  'vocab-shukudai': {
    id: 'vocab-shukudai',
    word: { ja: '宿題', reading: 'しゅくだい', romaji: 'shukudai', en: "homework" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'study', 'N5'],
    exampleSentences: [
      { ja: '宿題をしています。', furigana: 'しゅくだいをしています。', en: "I'm doing my homework." },
    ],
  },
  'vocab-shiken': {
    id: 'vocab-shiken',
    word: { ja: '試験', reading: 'しけん', romaji: 'shiken', en: "exam" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'study', 'N5'],
    exampleSentences: [
      { ja: '明日、試験があります。', furigana: 'あした、しけんがあります。', en: "There's an exam tomorrow." },
    ],
  },
  'vocab-denwa': {
    id: 'vocab-denwa',
    word: { ja: '電話', reading: 'でんわ', romaji: 'denwa', en: "telephone; phone call" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'object', 'N5'],
    exampleSentences: [
      { ja: '電話をかけます。', furigana: 'でんわをかけます。', en: "I make a phone call." },
    ],
  },
  'vocab-shashin': {
    id: 'vocab-shashin',
    word: { ja: '写真', reading: 'しゃしん', romaji: 'shashin', en: "photograph" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'object', 'N5'],
    exampleSentences: [
      { ja: '写真を撮ります。', furigana: 'しゃしんをとります。', en: "I take a photo." },
    ],
  },
  'vocab-chizu': {
    id: 'vocab-chizu',
    word: { ja: '地図', reading: 'ちず', romaji: 'chizu', en: "map" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'object', 'N5'],
    exampleSentences: [
      { ja: '地図を見ます。', furigana: 'ちずをみます。', en: "I look at a map." },
    ],
  },
  'vocab-kami': {
    id: 'vocab-kami',
    word: { ja: '紙', reading: 'かみ', romaji: 'kami', en: "paper" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'object', 'N5'],
    exampleSentences: [
      { ja: '紙に名前を書きます。', furigana: 'かみになまえをかきます。', en: "I write my name on paper." },
    ],
  },
  'vocab-kusuri': {
    id: 'vocab-kusuri',
    word: { ja: '薬', reading: 'くすり', romaji: 'kusuri', en: "medicine" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'object', 'N5'],
    exampleSentences: [
      { ja: '薬を飲みます。', furigana: 'くすりをのみます。', en: "I take medicine." },
    ],
  },
  'vocab-fuku': {
    id: 'vocab-fuku',
    word: { ja: '服', reading: 'ふく', romaji: 'fuku', en: "clothes" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'object', 'N5'],
    exampleSentences: [
      { ja: '新しい服を買います。', furigana: 'あたらしいふくをかいます。', en: "I buy new clothes." },
    ],
  },
  'vocab-omiyage': {
    id: 'vocab-omiyage',
    word: { ja: 'お土産', reading: 'おみやげ', romaji: 'omiyage', en: "souvenir" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'object', 'N5'],
    exampleSentences: [
      { ja: 'お土産を買いました。', furigana: 'おみやげをかいました。', en: "I bought a souvenir." },
    ],
  },
  'vocab-shokuji': {
    id: 'vocab-shokuji',
    word: { ja: '食事', reading: 'しょくじ', romaji: 'shokuji', en: "meal" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'food', 'N5'],
    exampleSentences: [
      { ja: '食事の前に手を洗います。', furigana: 'しょくじのまえにてをあらいます。', en: "I wash my hands before meals." },
    ],
  },
  'vocab-nomimono': {
    id: 'vocab-nomimono',
    word: { ja: '飲み物', reading: 'のみもの', romaji: 'nomimono', en: "drink; beverage" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'food', 'N5'],
    exampleSentences: [
      { ja: '飲み物はいかがですか。', furigana: 'のみものはいかがですか。', en: "Would you like a drink?" },
    ],
  },
  'vocab-ryouri': {
    id: 'vocab-ryouri',
    word: { ja: '料理', reading: 'りょうり', romaji: 'ryouri', en: "cooking; dish" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'food', 'N5'],
    exampleSentences: [
      { ja: '母の料理はおいしいです。', furigana: 'ははのりょうりはおいしいです。', en: "My mother's cooking is delicious." },
    ],
  },
  'vocab-gyuuniku': {
    id: 'vocab-gyuuniku',
    word: { ja: '牛肉', reading: 'ぎゅうにく', romaji: 'gyuuniku', en: "beef" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'food', 'N5'],
    exampleSentences: [
      { ja: '牛肉を食べます。', furigana: 'ぎゅうにくをたべます。', en: "I eat beef." },
    ],
  },
  'vocab-tamago': {
    id: 'vocab-tamago',
    word: { ja: '卵', reading: 'たまご', romaji: 'tamago', en: "egg" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'food', 'N5'],
    exampleSentences: [
      { ja: '卵を二つ買います。', furigana: 'たまごをふたつかいます。', en: "I'll buy two eggs." },
    ],
  },
  'vocab-shiroi': {
    id: 'vocab-shiroi',
    word: { ja: '白い', reading: 'しろい', romaji: 'shiroi', en: "white" },
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['i-adjective', 'color', 'N5'],
    exampleSentences: [
      { ja: '白いシャツを着ます。', furigana: 'しろいシャツをきます。', en: "I wear a white shirt." },
    ],
  },
  'vocab-akai': {
    id: 'vocab-akai',
    word: { ja: '赤い', reading: 'あかい', romaji: 'akai', en: "red" },
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['i-adjective', 'color', 'N5'],
    exampleSentences: [
      { ja: '赤い花が好きです。', furigana: 'あかいはながすきです。', en: "I like red flowers." },
    ],
  },
  'vocab-kuroi': {
    id: 'vocab-kuroi',
    word: { ja: '黒い', reading: 'くろい', romaji: 'kuroi', en: "black" },
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['i-adjective', 'color', 'N5'],
    exampleSentences: [
      { ja: '黒いかばんを持っています。', furigana: 'くろいかばんをもっています。', en: "I have a black bag." },
    ],
  },
  'vocab-chairo': {
    id: 'vocab-chairo',
    word: { ja: '茶色', reading: 'ちゃいろ', romaji: 'chairo', en: "brown" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'color', 'N5'],
    exampleSentences: [
      { ja: '茶色のくつを買いました。', furigana: 'ちゃいろのくつをかいました。', en: "I bought brown shoes." },
    ],
  },
  'vocab-nagai': {
    id: 'vocab-nagai',
    word: { ja: '長い', reading: 'ながい', romaji: 'nagai', en: "long" },
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['i-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: '長い川ですね。', furigana: 'ながいかわですね。', en: "It's a long river, isn't it?" },
    ],
  },
  'vocab-mijikai': {
    id: 'vocab-mijikai',
    word: { ja: '短い', reading: 'みじかい', romaji: 'mijikai', en: "short" },
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['i-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: '短い話をします。', furigana: 'みじかいはなしをします。', en: "I'll tell a short story." },
    ],
  },
  'vocab-hiroi': {
    id: 'vocab-hiroi',
    word: { ja: '広い', reading: 'ひろい', romaji: 'hiroi', en: "wide" },
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['i-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: '広い部屋に住んでいます。', furigana: 'ひろいへやにすんでいます。', en: "I live in a spacious room." },
    ],
  },
  'vocab-omoi': {
    id: 'vocab-omoi',
    word: { ja: '重い', reading: 'おもい', romaji: 'omoi', en: "heavy" },
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['i-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: 'このかばんは重いです。', furigana: 'このかばんはおもいです。', en: "This bag is heavy." },
    ],
  },
  'vocab-karui': {
    id: 'vocab-karui',
    word: { ja: '軽い', reading: 'かるい', romaji: 'karui', en: "light (in weight)" },
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['i-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: 'この本は軽いです。', furigana: 'このほんはかるいです。', en: "This book is light." },
    ],
  },
  'vocab-hayai': {
    id: 'vocab-hayai',
    word: { ja: '早い', reading: 'はやい', romaji: 'hayai', en: "early; fast" },
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['i-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: '朝早く起きます。', furigana: 'あさはやくおきます。', en: "I get up early in the morning." },
    ],
  },
  'vocab-ooi': {
    id: 'vocab-ooi',
    word: { ja: '多い', reading: 'おおい', romaji: 'ooi', en: "many" },
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['i-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: '人が多いです。', furigana: 'ひとがおおいです。', en: "There are many people." },
    ],
  },
  'vocab-sukunai': {
    id: 'vocab-sukunai',
    word: { ja: '少ない', reading: 'すくない', romaji: 'sukunai', en: "few" },
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['i-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: 'お金が少ないです。', furigana: 'おかねがすくないです。', en: "I have little money." },
    ],
  },
  'vocab-akarui': {
    id: 'vocab-akarui',
    word: { ja: '明るい', reading: 'あかるい', romaji: 'akarui', en: "bright" },
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['i-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: 'この部屋は明るいです。', furigana: 'このへやはあかるいです。', en: "This room is bright." },
    ],
  },
  'vocab-kurai': {
    id: 'vocab-kurai',
    word: { ja: '暗い', reading: 'くらい', romaji: 'kurai', en: "dark" },
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['i-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: '外は暗いです。', furigana: 'そとはくらいです。', en: "It's dark outside." },
    ],
  },
  'vocab-tsuyoi': {
    id: 'vocab-tsuyoi',
    word: { ja: '強い', reading: 'つよい', romaji: 'tsuyoi', en: "strong" },
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['i-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: '風が強いです。', furigana: 'かぜがつよいです。', en: "The wind is strong." },
    ],
  },
  'vocab-yowai': {
    id: 'vocab-yowai',
    word: { ja: '弱い', reading: 'よわい', romaji: 'yowai', en: "weak" },
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['i-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: '体が弱いです。', furigana: 'からだがよわいです。', en: "I have a weak constitution." },
    ],
  },
  'vocab-chikai': {
    id: 'vocab-chikai',
    word: { ja: '近い', reading: 'ちかい', romaji: 'chikai', en: "near" },
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['i-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: '駅は近いです。', furigana: 'えきはちかいです。', en: "The station is close." },
    ],
  },
  'vocab-tooi': {
    id: 'vocab-tooi',
    word: { ja: '遠い', reading: 'とおい', romaji: 'tooi', en: "far" },
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['i-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: '学校は遠いです。', furigana: 'がっこうはとおいです。', en: "The school is far." },
    ],
  },
  'vocab-tadashii': {
    id: 'vocab-tadashii',
    word: { ja: '正しい', reading: 'ただしい', romaji: 'tadashii', en: "correct" },
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['i-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: '正しい答えを選びます。', furigana: 'ただしいこたえをえらびます。', en: "I choose the correct answer." },
    ],
  },
  'vocab-genki': {
    id: 'vocab-genki',
    word: { ja: '元気', reading: 'げんき', romaji: 'genki', en: "healthy" },
    wordClass: 'na-adjective',
    jlptLevel: 'N5',
    tags: ['na-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: '祖母は元気です。', furigana: 'そぼはげんきです。', en: "My grandmother is well." },
    ],
  },
  'vocab-benri': {
    id: 'vocab-benri',
    word: { ja: '便利', reading: 'べんり', romaji: 'benri', en: "convenient" },
    wordClass: 'na-adjective',
    jlptLevel: 'N5',
    tags: ['na-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: 'この店は便利です。', furigana: 'このみせはべんりです。', en: "This shop is convenient." },
    ],
  },
  'vocab-taisetsu': {
    id: 'vocab-taisetsu',
    word: { ja: '大切', reading: 'たいせつ', romaji: 'taisetsu', en: "important" },
    wordClass: 'na-adjective',
    jlptLevel: 'N5',
    tags: ['na-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: '家族は大切です。', furigana: 'かぞくはたいせつです。', en: "Family is important." },
    ],
  },
  'vocab-yuumei': {
    id: 'vocab-yuumei',
    word: { ja: '有名', reading: 'ゆうめい', romaji: 'yuumei', en: "famous" },
    wordClass: 'na-adjective',
    jlptLevel: 'N5',
    tags: ['na-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: 'この店は有名です。', furigana: 'このみせはゆうめいです。', en: "This shop is famous." },
    ],
  },
  'vocab-jouzu': {
    id: 'vocab-jouzu',
    word: { ja: '上手', reading: 'じょうず', romaji: 'jouzu', en: "skillful" },
    wordClass: 'na-adjective',
    jlptLevel: 'N5',
    tags: ['na-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: '歌が上手です。', furigana: 'うたがじょうずです。', en: "She is good at singing." },
    ],
  },
  'vocab-heta': {
    id: 'vocab-heta',
    word: { ja: '下手', reading: 'へた', romaji: 'heta', en: "unskillful" },
    wordClass: 'na-adjective',
    jlptLevel: 'N5',
    tags: ['na-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: '料理が下手です。', furigana: 'りょうりがへたです。', en: "I'm bad at cooking." },
    ],
  },
  'vocab-onaji': {
    id: 'vocab-onaji',
    word: { ja: '同じ', reading: 'おなじ', romaji: 'onaji', en: "same" },
    wordClass: 'na-adjective',
    jlptLevel: 'N5',
    tags: ['na-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: '同じかばんを持っています。', furigana: 'おなじかばんをもっています。', en: "I have the same bag." },
    ],
  },
  'vocab-tatsu': {
    id: 'vocab-tatsu',
    word: { ja: '立つ', reading: 'たつ', romaji: 'tatsu', en: "to stand" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: '駅の前に立っています。', furigana: 'えきのまえにたっています。', en: "I'm standing in front of the station." },
    ],
  },
  'vocab-aruku': {
    id: 'vocab-aruku',
    word: { ja: '歩く', reading: 'あるく', romaji: 'aruku', en: "to walk" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: '毎日歩きます。', furigana: 'まいにちあるきます。', en: "I walk every day." },
    ],
  },
  'vocab-hashiru': {
    id: 'vocab-hashiru',
    word: { ja: '走る', reading: 'はしる', romaji: 'hashiru', en: "to run" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: '公園を走ります。', furigana: 'こうえんをはしります。', en: "I run in the park." },
    ],
  },
  'vocab-tsukau': {
    id: 'vocab-tsukau',
    word: { ja: '使う', reading: 'つかう', romaji: 'tsukau', en: "to use" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: 'はしを使います。', furigana: 'はしをつかいます。', en: "I use chopsticks." },
    ],
  },
  'vocab-hataraku': {
    id: 'vocab-hataraku',
    word: { ja: '働く', reading: 'はたらく', romaji: 'hataraku', en: "to work" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: '会社で働いています。', furigana: 'かいしゃではたらいています。', en: "I work at a company." },
    ],
  },
  'vocab-yasumu': {
    id: 'vocab-yasumu',
    word: { ja: '休む', reading: 'やすむ', romaji: 'yasumu', en: "to rest" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: '今日は会社を休みます。', furigana: 'きょうはかいしゃをやすみます。', en: "I'll take the day off work today." },
    ],
  },
  'vocab-utau': {
    id: 'vocab-utau',
    word: { ja: '歌う', reading: 'うたう', romaji: 'utau', en: "to sing" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: '歌を歌います。', furigana: 'うたをうたいます。', en: "I sing a song." },
    ],
  },
  'vocab-omou': {
    id: 'vocab-omou',
    word: { ja: '思う', reading: 'おもう', romaji: 'omou', en: "to think" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: 'いいと思います。', furigana: 'いいとおもいます。', en: "I think it's good." },
    ],
  },
  'vocab-sumu': {
    id: 'vocab-sumu',
    word: { ja: '住む', reading: 'すむ', romaji: 'sumu', en: "to live" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: '東京に住んでいます。', furigana: 'とうきょうにすんでいます。', en: "I live in Tokyo." },
    ],
  },
  'vocab-okuru': {
    id: 'vocab-okuru',
    word: { ja: '送る', reading: 'おくる', romaji: 'okuru', en: "to send" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: '手紙を送ります。', furigana: 'てがみをおくります。', en: "I send a letter." },
    ],
  },
  'vocab-kasu': {
    id: 'vocab-kasu',
    word: { ja: '貸す', reading: 'かす', romaji: 'kasu', en: "to lend" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: '友達に本を貸します。', furigana: 'ともだちにほんをかします。', en: "I lend a book to my friend." },
    ],
  },
  'vocab-kariru': {
    id: 'vocab-kariru',
    word: { ja: '借りる', reading: 'かりる', romaji: 'kariru', en: "to borrow" },
    wordClass: 'verb-ru',
    jlptLevel: 'N5',
    tags: ['verb-ru', 'verb', 'N5'],
    exampleSentences: [
      { ja: '図書館で本を借ります。', furigana: 'としょかんでほんをかります。', en: "I borrow books at the library." },
    ],
  },
  'vocab-oshieru': {
    id: 'vocab-oshieru',
    word: { ja: '教える', reading: 'おしえる', romaji: 'oshieru', en: "to teach" },
    wordClass: 'verb-ru',
    jlptLevel: 'N5',
    tags: ['verb-ru', 'verb', 'N5'],
    exampleSentences: [
      { ja: '日本語を教えます。', furigana: 'にほんごをおしえます。', en: "I teach Japanese." },
    ],
  },
  'vocab-narau': {
    id: 'vocab-narau',
    word: { ja: '習う', reading: 'ならう', romaji: 'narau', en: "to learn" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: 'ピアノを習っています。', furigana: 'ピアノをならっています。', en: "I'm learning the piano." },
    ],
  },
  'vocab-kotaeru': {
    id: 'vocab-kotaeru',
    word: { ja: '答える', reading: 'こたえる', romaji: 'kotaeru', en: "to answer" },
    wordClass: 'verb-ru',
    jlptLevel: 'N5',
    tags: ['verb-ru', 'verb', 'N5'],
    exampleSentences: [
      { ja: '質問に答えます。', furigana: 'しつもんにこたえます。', en: "I answer the question." },
    ],
  },
  'vocab-kangaeru': {
    id: 'vocab-kangaeru',
    word: { ja: '考える', reading: 'かんがえる', romaji: 'kangaeru', en: "to think" },
    wordClass: 'verb-ru',
    jlptLevel: 'N5',
    tags: ['verb-ru', 'verb', 'N5'],
    exampleSentences: [
      { ja: 'よく考えます。', furigana: 'よくかんがえます。', en: "I think carefully." },
    ],
  },
  'vocab-akeru': {
    id: 'vocab-akeru',
    word: { ja: '開ける', reading: 'あける', romaji: 'akeru', en: "to open" },
    wordClass: 'verb-ru',
    jlptLevel: 'N5',
    tags: ['verb-ru', 'verb', 'N5'],
    exampleSentences: [
      { ja: '窓を開けます。', furigana: 'まどをあけます。', en: "I open the window." },
    ],
  },
  'vocab-shimeru': {
    id: 'vocab-shimeru',
    word: { ja: '閉める', reading: 'しめる', romaji: 'shimeru', en: "to close" },
    wordClass: 'verb-ru',
    jlptLevel: 'N5',
    tags: ['verb-ru', 'verb', 'N5'],
    exampleSentences: [
      { ja: 'ドアを閉めます。', furigana: 'ドアをしめます。', en: "I close the door." },
    ],
  },
  'vocab-hajimeru': {
    id: 'vocab-hajimeru',
    word: { ja: '始める', reading: 'はじめる', romaji: 'hajimeru', en: "to begin" },
    wordClass: 'verb-ru',
    jlptLevel: 'N5',
    tags: ['verb-ru', 'verb', 'N5'],
    exampleSentences: [
      { ja: '仕事を始めます。', furigana: 'しごとをはじめます。', en: "I start work." },
    ],
  },
  'vocab-owaru': {
    id: 'vocab-owaru',
    word: { ja: '終わる', reading: 'おわる', romaji: 'owaru', en: "to end" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: '授業が終わりました。', furigana: 'じゅぎょうがおわりました。', en: "The class has ended." },
    ],
  },
  'vocab-kiru': {
    id: 'vocab-kiru',
    word: { ja: '着る', reading: 'きる', romaji: 'kiru', en: "to wear" },
    wordClass: 'verb-ru',
    jlptLevel: 'N5',
    tags: ['verb-ru', 'verb', 'N5'],
    exampleSentences: [
      { ja: 'コートを着ます。', furigana: 'コートをきます。', en: "I put on a coat." },
    ],
  },

  'vocab-ichigatsu': {
    id: 'vocab-ichigatsu',
    word: { ja: '一月', reading: 'いちがつ', romaji: 'ichigatsu', en: "January" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'time', 'N5'],
    exampleSentences: [
      { ja: '一月は寒いです。', furigana: 'いちがつはさむいです。', en: "January is cold." },
    ],
  },
  'vocab-shigatsu': {
    id: 'vocab-shigatsu',
    word: { ja: '四月', reading: 'しがつ', romaji: 'shigatsu', en: "April" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'time', 'N5'],
    exampleSentences: [
      { ja: '四月に学校が始まります。', furigana: 'しがつにがっこうがはじまります。', en: "School starts in April." },
    ],
  },
  'vocab-gogatsu': {
    id: 'vocab-gogatsu',
    word: { ja: '五月', reading: 'ごがつ', romaji: 'gogatsu', en: "May" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'time', 'N5'],
    exampleSentences: [
      { ja: '五月に旅行します。', furigana: 'ごがつにりょこうします。', en: "I'll travel in May." },
    ],
  },
  'vocab-rokugatsu': {
    id: 'vocab-rokugatsu',
    word: { ja: '六月', reading: 'ろくがつ', romaji: 'rokugatsu', en: "June" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'time', 'N5'],
    exampleSentences: [
      { ja: '六月は雨が多いです。', furigana: 'ろくがつはあめがおおいです。', en: "There is a lot of rain in June." },
    ],
  },
  'vocab-shichigatsu': {
    id: 'vocab-shichigatsu',
    word: { ja: '七月', reading: 'しちがつ', romaji: 'shichigatsu', en: "July" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'time', 'N5'],
    exampleSentences: [
      { ja: '七月は暑いです。', furigana: 'しちがつはあついです。', en: "July is hot." },
    ],
  },
  'vocab-hachigatsu': {
    id: 'vocab-hachigatsu',
    word: { ja: '八月', reading: 'はちがつ', romaji: 'hachigatsu', en: "August" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'time', 'N5'],
    exampleSentences: [
      { ja: '八月に海へ行きます。', furigana: 'はちがつにうみへいきます。', en: "I go to the sea in August." },
    ],
  },
  'vocab-kugatsu': {
    id: 'vocab-kugatsu',
    word: { ja: '九月', reading: 'くがつ', romaji: 'kugatsu', en: "September" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'time', 'N5'],
    exampleSentences: [
      { ja: '九月に帰ります。', furigana: 'くがつにかえります。', en: "I'll return in September." },
    ],
  },
  'vocab-juugatsu': {
    id: 'vocab-juugatsu',
    word: { ja: '十月', reading: 'じゅうがつ', romaji: 'juugatsu', en: "October" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'time', 'N5'],
    exampleSentences: [
      { ja: '十月は涼しいです。', furigana: 'じゅうがつはすずしいです。', en: "October is cool." },
    ],
  },
  'vocab-konya': {
    id: 'vocab-konya',
    word: { ja: '今夜', reading: 'こんや', romaji: 'konya', en: "tonight" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'time', 'N5'],
    exampleSentences: [
      { ja: '今夜は家にいます。', furigana: 'こんやはいえにいます。', en: "I'll be at home tonight." },
    ],
  },
  'vocab-sakunen': {
    id: 'vocab-sakunen',
    word: { ja: '昨年', reading: 'さくねん', romaji: 'sakunen', en: "last year" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'time', 'N5'],
    exampleSentences: [
      { ja: '昨年、日本へ行きました。', furigana: 'さくねん、にほんへいきました。', en: "I went to Japan last year." },
    ],
  },
  'vocab-maitoshi': {
    id: 'vocab-maitoshi',
    word: { ja: '毎年', reading: 'まいとし', romaji: 'maitoshi', en: "every year" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'time', 'N5'],
    exampleSentences: [
      { ja: '毎年、山に登ります。', furigana: 'まいとし、やまにのぼります。', en: "I climb mountains every year." },
    ],
  },
  'vocab-maishuu': {
    id: 'vocab-maishuu',
    word: { ja: '毎週', reading: 'まいしゅう', romaji: 'maishuu', en: "every week" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'time', 'N5'],
    exampleSentences: [
      { ja: '毎週、映画を見ます。', furigana: 'まいしゅう、えいがをみます。', en: "I watch a movie every week." },
    ],
  },
  'vocab-kyuujitsu': {
    id: 'vocab-kyuujitsu',
    word: { ja: '休日', reading: 'きゅうじつ', romaji: 'kyuujitsu', en: "holiday" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'time', 'N5'],
    exampleSentences: [
      { ja: '休日はゆっくり休みます。', furigana: 'きゅうじつはゆっくりやすみます。', en: "I rest on holidays." },
    ],
  },
  'vocab-jidai': {
    id: 'vocab-jidai',
    word: { ja: '時代', reading: 'じだい', romaji: 'jidai', en: "era" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'time', 'N5'],
    exampleSentences: [
      { ja: '古い時代の話です。', furigana: 'ふるいじだいのはなしです。', en: "It's a story from an old era." },
    ],
  },
  'vocab-saikin': {
    id: 'vocab-saikin',
    word: { ja: '最近', reading: 'さいきん', romaji: 'saikin', en: "recently" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'time', 'N5'],
    exampleSentences: [
      { ja: '最近、忙しいです。', furigana: 'さいきん、いそがしいです。', en: "I've been busy recently." },
    ],
  },
  'vocab-ichido': {
    id: 'vocab-ichido',
    word: { ja: '一度', reading: 'いちど', romaji: 'ichido', en: "once" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'time', 'N5'],
    exampleSentences: [
      { ja: '一度、京都へ行きました。', furigana: 'いちど、きょうとへいきました。', en: "I went to Kyoto once." },
    ],
  },
  'vocab-hanbun': {
    id: 'vocab-hanbun',
    word: { ja: '半分', reading: 'はんぶん', romaji: 'hanbun', en: "half" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'time', 'N5'],
    exampleSentences: [
      { ja: 'ケーキを半分食べました。', furigana: 'ケーキをはんぶんたべました。', en: "I ate half the cake." },
    ],
  },
  'vocab-juu': {
    id: 'vocab-juu',
    word: { ja: '十', reading: 'じゅう', romaji: 'juu', en: "ten" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'number', 'N5'],
    exampleSentences: [
      { ja: '十まで数えます。', furigana: 'じゅうまでかぞえます。', en: "I count to ten." },
    ],
  },
  'vocab-sen': {
    id: 'vocab-sen',
    word: { ja: '千', reading: 'せん', romaji: 'sen', en: "thousand" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'number', 'N5'],
    exampleSentences: [
      { ja: '千円を払います。', furigana: 'せんえんをはらいます。', en: "I pay a thousand yen." },
    ],
  },
  'vocab-ichiman': {
    id: 'vocab-ichiman',
    word: { ja: '一万', reading: 'いちまん', romaji: 'ichiman', en: "ten thousand" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'number', 'N5'],
    exampleSentences: [
      { ja: '一万円あります。', furigana: 'いちまんえんあります。', en: "I have ten thousand yen." },
    ],
  },
  'vocab-mittsu': {
    id: 'vocab-mittsu',
    word: { ja: '三つ', reading: 'みっつ', romaji: 'mittsu', en: "three" },
    wordClass: 'counter',
    jlptLevel: 'N5',
    tags: ['counter', 'number', 'N5'],
    exampleSentences: [
      { ja: 'りんごを三つ買います。', furigana: 'りんごをみっつかいます。', en: "I'll buy three apples." },
    ],
  },
  'vocab-yottsu': {
    id: 'vocab-yottsu',
    word: { ja: '四つ', reading: 'よっつ', romaji: 'yottsu', en: "four" },
    wordClass: 'counter',
    jlptLevel: 'N5',
    tags: ['counter', 'number', 'N5'],
    exampleSentences: [
      { ja: 'みかんが四つあります。', furigana: 'みかんがよっつあります。', en: "There are four mandarins." },
    ],
  },
  'vocab-itsutsu': {
    id: 'vocab-itsutsu',
    word: { ja: '五つ', reading: 'いつつ', romaji: 'itsutsu', en: "five" },
    wordClass: 'counter',
    jlptLevel: 'N5',
    tags: ['counter', 'number', 'N5'],
    exampleSentences: [
      { ja: '五つください。', furigana: 'いつつください。', en: "Five, please." },
    ],
  },
  'vocab-higashi': {
    id: 'vocab-higashi',
    word: { ja: '東', reading: 'ひがし', romaji: 'higashi', en: "east" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'position', 'N5'],
    exampleSentences: [
      { ja: '東に山があります。', furigana: 'ひがしにやまがあります。', en: "There is a mountain to the east." },
    ],
  },
  'vocab-nishi': {
    id: 'vocab-nishi',
    word: { ja: '西', reading: 'にし', romaji: 'nishi', en: "west" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'position', 'N5'],
    exampleSentences: [
      { ja: '西へ歩きます。', furigana: 'にしへあるきます。', en: "I walk west." },
    ],
  },
  'vocab-minami': {
    id: 'vocab-minami',
    word: { ja: '南', reading: 'みなみ', romaji: 'minami', en: "south" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'position', 'N5'],
    exampleSentences: [
      { ja: '南は暖かいです。', furigana: 'みなみはあたたかいです。', en: "The south is warm." },
    ],
  },
  'vocab-kita': {
    id: 'vocab-kita',
    word: { ja: '北', reading: 'きた', romaji: 'kita', en: "north" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'position', 'N5'],
    exampleSentences: [
      { ja: '北は寒いです。', furigana: 'きたはさむいです。', en: "The north is cold." },
    ],
  },
  'vocab-iriguchi': {
    id: 'vocab-iriguchi',
    word: { ja: '入口', reading: 'いりぐち', romaji: 'iriguchi', en: "entrance" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'position', 'N5'],
    exampleSentences: [
      { ja: '入口はどこですか。', furigana: 'いりぐちはどこですか。', en: "Where is the entrance?" },
    ],
  },
  'vocab-deguchi': {
    id: 'vocab-deguchi',
    word: { ja: '出口', reading: 'でぐち', romaji: 'deguchi', en: "exit" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'position', 'N5'],
    exampleSentences: [
      { ja: '出口を探しています。', furigana: 'でぐちをさがしています。', en: "I'm looking for the exit." },
    ],
  },
  'vocab-saki': {
    id: 'vocab-saki',
    word: { ja: '先', reading: 'さき', romaji: 'saki', en: "ahead" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'position', 'N5'],
    exampleSentences: [
      { ja: '先に行ってください。', furigana: 'さきにいってください。', en: "Please go ahead." },
    ],
  },
  'vocab-ijou': {
    id: 'vocab-ijou',
    word: { ja: '以上', reading: 'いじょう', romaji: 'ijou', en: "more than" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'position', 'N5'],
    exampleSentences: [
      { ja: '三時間以上待ちました。', furigana: 'さんじかんいじょうまちました。', en: "I waited more than three hours." },
    ],
  },
  'vocab-nihon': {
    id: 'vocab-nihon',
    word: { ja: '日本', reading: 'にほん', romaji: 'nihon', en: "Japan" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'place', 'N5'],
    exampleSentences: [
      { ja: '日本に住んでいます。', furigana: 'にほんにすんでいます。', en: "I live in Japan." },
    ],
  },
  'vocab-toukyou': {
    id: 'vocab-toukyou',
    word: { ja: '東京', reading: 'とうきょう', romaji: 'toukyou', en: "Tokyo" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'place', 'N5'],
    exampleSentences: [
      { ja: '東京は人が多いです。', furigana: 'とうきょうはひとがおおいです。', en: "Tokyo has many people." },
    ],
  },
  'vocab-kyouto': {
    id: 'vocab-kyouto',
    word: { ja: '京都', reading: 'きょうと', romaji: 'kyouto', en: "Kyoto" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'place', 'N5'],
    exampleSentences: [
      { ja: '京都は古い町です。', furigana: 'きょうとはふるいまちです。', en: "Kyoto is an old city." },
    ],
  },
  'vocab-hokkaidou': {
    id: 'vocab-hokkaidou',
    word: { ja: '北海道', reading: 'ほっかいどう', romaji: 'hokkaidou', en: "Hokkaido" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'place', 'N5'],
    exampleSentences: [
      { ja: '北海道は冬が長いです。', furigana: 'ほっかいどうはふゆがながいです。', en: "Hokkaido has a long winter." },
    ],
  },
  'vocab-fujisan': {
    id: 'vocab-fujisan',
    word: { ja: '富士山', reading: 'ふじさん', romaji: 'fujisan', en: "Mt. Fuji" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'place', 'N5'],
    exampleSentences: [
      { ja: '富士山に登りたいです。', furigana: 'ふじさんにのぼりたいです。', en: "I want to climb Mt. Fuji." },
    ],
  },
  'vocab-chuugoku': {
    id: 'vocab-chuugoku',
    word: { ja: '中国', reading: 'ちゅうごく', romaji: 'chuugoku', en: "China" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'place', 'N5'],
    exampleSentences: [
      { ja: '中国語を習っています。', furigana: 'ちゅうごくごをならっています。', en: "I'm learning Chinese." },
    ],
  },
  'vocab-gaikoku': {
    id: 'vocab-gaikoku',
    word: { ja: '外国', reading: 'がいこく', romaji: 'gaikoku', en: "foreign country" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'place', 'N5'],
    exampleSentences: [
      { ja: '外国へ行きたいです。', furigana: 'がいこくへいきたいです。', en: "I want to go abroad." },
    ],
  },
  'vocab-kaigai': {
    id: 'vocab-kaigai',
    word: { ja: '海外', reading: 'かいがい', romaji: 'kaigai', en: "overseas" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'place', 'N5'],
    exampleSentences: [
      { ja: '海外で働きたいです。', furigana: 'かいがいではたらきたいです。', en: "I want to work overseas." },
    ],
  },
  'vocab-jinja': {
    id: 'vocab-jinja',
    word: { ja: '神社', reading: 'じんじゃ', romaji: 'jinja', en: "shrine" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'place', 'N5'],
    exampleSentences: [
      { ja: '神社でお参りします。', furigana: 'じんじゃでおまいりします。', en: "I pray at the shrine." },
    ],
  },
  'vocab-koujou': {
    id: 'vocab-koujou',
    word: { ja: '工場', reading: 'こうじょう', romaji: 'koujou', en: "factory" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'place', 'N5'],
    exampleSentences: [
      { ja: '父は工場で働いています。', furigana: 'ちちはこうじょうではたらいています。', en: "My father works at a factory." },
    ],
  },
  'vocab-kyoushitsu': {
    id: 'vocab-kyoushitsu',
    word: { ja: '教室', reading: 'きょうしつ', romaji: 'kyoushitsu', en: "classroom" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'place', 'N5'],
    exampleSentences: [
      { ja: '教室で勉強します。', furigana: 'きょうしつでべんきょうします。', en: "I study in the classroom." },
    ],
  },
  'vocab-shougakkou': {
    id: 'vocab-shougakkou',
    word: { ja: '小学校', reading: 'しょうがっこう', romaji: 'shougakkou', en: "elementary school" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'place', 'N5'],
    exampleSentences: [
      { ja: '小学校の先生です。', furigana: 'しょうがっこうのせんせいです。', en: "I'm an elementary school teacher." },
    ],
  },
  'vocab-daigakuin': {
    id: 'vocab-daigakuin',
    word: { ja: '大学院', reading: 'だいがくいん', romaji: 'daigakuin', en: "graduate school" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'place', 'N5'],
    exampleSentences: [
      { ja: '大学院で研究します。', furigana: 'だいがくいんでけんきゅうします。', en: "I do research at graduate school." },
    ],
  },
  'vocab-ichiba': {
    id: 'vocab-ichiba',
    word: { ja: '市場', reading: 'いちば', romaji: 'ichiba', en: "market" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'place', 'N5'],
    exampleSentences: [
      { ja: '市場で野菜を買います。', furigana: 'しじょうでやさいをかいます。', en: "I buy vegetables at the market." },
    ],
  },
  'vocab-tatemono': {
    id: 'vocab-tatemono',
    word: { ja: '建物', reading: 'たてもの', romaji: 'tatemono', en: "building" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'place', 'N5'],
    exampleSentences: [
      { ja: 'あの建物は新しいです。', furigana: 'あのたてものはあたらしいです。', en: "That building is new." },
    ],
  },
  'vocab-ken': {
    id: 'vocab-ken',
    word: { ja: '県', reading: 'けん', romaji: 'ken', en: "prefecture" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'place', 'N5'],
    exampleSentences: [
      { ja: 'となりの県に住んでいます。', furigana: 'となりのけんにすんでいます。', en: "I live in the next prefecture." },
    ],
  },
  'vocab-ku': {
    id: 'vocab-ku',
    word: { ja: '区', reading: 'く', romaji: 'ku', en: "ward" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'place', 'N5'],
    exampleSentences: [
      { ja: 'この区は静かです。', furigana: 'このくはしずかです。', en: "This ward is quiet." },
    ],
  },
  'vocab-mon': {
    id: 'vocab-mon',
    word: { ja: '門', reading: 'もん', romaji: 'mon', en: "gate" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'place', 'N5'],
    exampleSentences: [
      { ja: '門の前で待ちます。', furigana: 'もんのまえでまちます。', en: "I'll wait in front of the gate." },
    ],
  },
  'vocab-ike': {
    id: 'vocab-ike',
    word: { ja: '池', reading: 'いけ', romaji: 'ike', en: "pond" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'nature', 'N5'],
    exampleSentences: [
      { ja: '池に魚がいます。', furigana: 'いけにさかながいます。', en: "There are fish in the pond." },
    ],
  },
  'vocab-hayashi': {
    id: 'vocab-hayashi',
    word: { ja: '林', reading: 'はやし', romaji: 'hayashi', en: "woods" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'nature', 'N5'],
    exampleSentences: [
      { ja: '林を歩きます。', furigana: 'はやしをあるきます。', en: "I walk through the woods." },
    ],
  },
  'vocab-mori': {
    id: 'vocab-mori',
    word: { ja: '森', reading: 'もり', romaji: 'mori', en: "forest" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'nature', 'N5'],
    exampleSentences: [
      { ja: '森は静かです。', furigana: 'もりはしずかです。', en: "The forest is quiet." },
    ],
  },
  'vocab-mura': {
    id: 'vocab-mura',
    word: { ja: '村', reading: 'むら', romaji: 'mura', en: "village" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'nature', 'N5'],
    exampleSentences: [
      { ja: '小さい村に住んでいます。', furigana: 'ちいさいむらにすんでいます。', en: "I live in a small village." },
    ],
  },
  'vocab-taiyou': {
    id: 'vocab-taiyou',
    word: { ja: '太陽', reading: 'たいよう', romaji: 'taiyou', en: "sun" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'nature', 'N5'],
    exampleSentences: [
      { ja: '太陽が出ました。', furigana: 'たいようがでました。', en: "The sun came out." },
    ],
  },
  'vocab-hikari': {
    id: 'vocab-hikari',
    word: { ja: '光', reading: 'ひかり', romaji: 'hikari', en: "light" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'nature', 'N5'],
    exampleSentences: [
      { ja: '光が明るいです。', furigana: 'ひかりがあかるいです。', en: "The light is bright." },
    ],
  },
  'vocab-oto': {
    id: 'vocab-oto',
    word: { ja: '音', reading: 'おと', romaji: 'oto', en: "sound" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'nature', 'N5'],
    exampleSentences: [
      { ja: '大きい音がしました。', furigana: 'おおきいおとがしました。', en: "There was a loud sound." },
    ],
  },
  'vocab-taifuu': {
    id: 'vocab-taifuu',
    word: { ja: '台風', reading: 'たいふう', romaji: 'taifuu', en: "typhoon" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'nature', 'N5'],
    exampleSentences: [
      { ja: '台風が来ます。', furigana: 'たいふうがきます。', en: "A typhoon is coming." },
    ],
  },
  'vocab-denki': {
    id: 'vocab-denki',
    word: { ja: '電気', reading: 'でんき', romaji: 'denki', en: "electricity" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'object', 'N5'],
    exampleSentences: [
      { ja: '電気をつけてください。', furigana: 'でんきをつけてください。', en: "Please turn on the light." },
    ],
  },
  'vocab-ushi': {
    id: 'vocab-ushi',
    word: { ja: '牛', reading: 'うし', romaji: 'ushi', en: "cow" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'nature', 'N5'],
    exampleSentences: [
      { ja: '牛がいます。', furigana: 'うしがいます。', en: "There is a cow." },
    ],
  },
  'vocab-tori': {
    id: 'vocab-tori',
    word: { ja: '鳥', reading: 'とり', romaji: 'tori', en: "bird" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'nature', 'N5'],
    exampleSentences: [
      { ja: '鳥が鳴いています。', furigana: 'とりがないています。', en: "A bird is singing." },
    ],
  },
  'vocab-toriniku': {
    id: 'vocab-toriniku',
    word: { ja: '鳥肉', reading: 'とりにく', romaji: 'toriniku', en: "chicken meat" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'food', 'N5'],
    exampleSentences: [
      { ja: '鳥肉を食べます。', furigana: 'とりにくをたべます。', en: "I eat chicken." },
    ],
  },
  'vocab-furo': {
    id: 'vocab-furo',
    word: { ja: '風呂', reading: 'ふろ', romaji: 'furo', en: "bath" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'object', 'N5'],
    exampleSentences: [
      { ja: '毎晩、風呂に入ります。', furigana: 'まいばん、ふろにはいります。', en: "I take a bath every night." },
    ],
  },
  'vocab-kokuban': {
    id: 'vocab-kokuban',
    word: { ja: '黒板', reading: 'こくばん', romaji: 'kokuban', en: "blackboard" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'object', 'N5'],
    exampleSentences: [
      { ja: '黒板に字を書きます。', furigana: 'こくばんにじをかきます。', en: "I write on the blackboard." },
    ],
  },
  'vocab-ito': {
    id: 'vocab-ito',
    word: { ja: '糸', reading: 'いと', romaji: 'ito', en: "thread" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'object', 'N5'],
    exampleSentences: [
      { ja: '糸で服を作ります。', furigana: 'いとでふくをつくります。', en: "I make clothes with thread." },
    ],
  },
  'vocab-youfuku': {
    id: 'vocab-youfuku',
    word: { ja: '洋服', reading: 'ようふく', romaji: 'youfuku', en: "Western clothes" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'object', 'N5'],
    exampleSentences: [
      { ja: '洋服を買いました。', furigana: 'ようふくをかいました。', en: "I bought Western clothes." },
    ],
  },
  'vocab-shinamono': {
    id: 'vocab-shinamono',
    word: { ja: '品物', reading: 'しなもの', romaji: 'shinamono', en: "goods" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'object', 'N5'],
    exampleSentences: [
      { ja: 'この品物は高いです。', furigana: 'このしなものはたかいです。', en: "This item is expensive." },
    ],
  },
  'vocab-yuubin': {
    id: 'vocab-yuubin',
    word: { ja: '郵便', reading: 'ゆうびん', romaji: 'yuubin', en: "mail" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'object', 'N5'],
    exampleSentences: [
      { ja: '郵便が来ました。', furigana: 'ゆうびんがきました。', en: "The mail arrived." },
    ],
  },
  'vocab-ryoukin': {
    id: 'vocab-ryoukin',
    word: { ja: '料金', reading: 'りょうきん', romaji: 'ryoukin', en: "fee" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'object', 'N5'],
    exampleSentences: [
      { ja: '料金はいくらですか。', furigana: 'りょうきんはいくらですか。', en: "How much is the fee?" },
    ],
  },
  'vocab-moji': {
    id: 'vocab-moji',
    word: { ja: '文字', reading: 'もじ', romaji: 'moji', en: "letter" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'study', 'N5'],
    exampleSentences: [
      { ja: '小さい文字は読めません。', furigana: 'ちいさいもじはよめません。', en: "I can't read small letters." },
    ],
  },
  'vocab-kotae': {
    id: 'vocab-kotae',
    word: { ja: '答え', reading: 'こたえ', romaji: 'kotae', en: "answer" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'study', 'N5'],
    exampleSentences: [
      { ja: '答えを教えてください。', furigana: 'こたえをおしえてください。', en: "Please tell me the answer." },
    ],
  },
  'vocab-setsumei': {
    id: 'vocab-setsumei',
    word: { ja: '説明', reading: 'せつめい', romaji: 'setsumei', en: "explanation" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'study', 'N5'],
    exampleSentences: [
      { ja: '説明をお願いします。', furigana: 'せつめいをおねがいします。', en: "Please give me an explanation." },
    ],
  },
  'vocab-renshuu': {
    id: 'vocab-renshuu',
    word: { ja: '練習', reading: 'れんしゅう', romaji: 'renshuu', en: "practice" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'study', 'N5'],
    exampleSentences: [
      { ja: '毎日練習します。', furigana: 'まいにちれんしゅうします。', en: "I practice every day." },
    ],
  },
  'vocab-keisan': {
    id: 'vocab-keisan',
    word: { ja: '計算', reading: 'けいさん', romaji: 'keisan', en: "calculation" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'study', 'N5'],
    exampleSentences: [
      { ja: '計算が苦手です。', furigana: 'けいさんがにがてです。', en: "I'm bad at calculation." },
    ],
  },
  'vocab-kenkyuu': {
    id: 'vocab-kenkyuu',
    word: { ja: '研究', reading: 'けんきゅう', romaji: 'kenkyuu', en: "research" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'study', 'N5'],
    exampleSentences: [
      { ja: '大学で研究しています。', furigana: 'だいがくでけんきゅうしています。', en: "I do research at university." },
    ],
  },
  'vocab-chuui': {
    id: 'vocab-chuui',
    word: { ja: '注意', reading: 'ちゅうい', romaji: 'chuui', en: "attention" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'study', 'N5'],
    exampleSentences: [
      { ja: '注意してください。', furigana: 'ちゅういしてください。', en: "Please be careful." },
    ],
  },
  'vocab-keikaku': {
    id: 'vocab-keikaku',
    word: { ja: '計画', reading: 'けいかく', romaji: 'keikaku', en: "plan" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'study', 'N5'],
    exampleSentences: [
      { ja: '旅行の計画を立てます。', furigana: 'りょこうのけいかくをたてます。', en: "I make a travel plan." },
    ],
  },
  'vocab-riyuu': {
    id: 'vocab-riyuu',
    word: { ja: '理由', reading: 'りゆう', romaji: 'riyuu', en: "reason" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'study', 'N5'],
    exampleSentences: [
      { ja: '理由を教えてください。', furigana: 'りゆうをおしえてください。', en: "Please tell me the reason." },
    ],
  },
  'vocab-benkyou': {
    id: 'vocab-benkyou',
    word: { ja: '勉強', reading: 'べんきょう', romaji: 'benkyou', en: "study" },
    wordClass: 'verb-irregular',
    jlptLevel: 'N5',
    tags: ['verb-irregular', 'study', 'N5'],
    exampleSentences: [
      { ja: '毎日日本語を勉強します。', furigana: 'まいにちにほんごをべんきょうします。', en: "I study Japanese every day." },
    ],
  },
  'vocab-undou': {
    id: 'vocab-undou',
    word: { ja: '運動', reading: 'うんどう', romaji: 'undou', en: "exercise" },
    wordClass: 'verb-irregular',
    jlptLevel: 'N5',
    tags: ['verb-irregular', 'verb', 'N5'],
    exampleSentences: [
      { ja: '毎朝運動します。', furigana: 'まいあさうんどうします。', en: "I exercise every morning." },
    ],
  },
  'vocab-ryokou': {
    id: 'vocab-ryokou',
    word: { ja: '旅行', reading: 'りょこう', romaji: 'ryokou', en: "travel" },
    wordClass: 'verb-irregular',
    jlptLevel: 'N5',
    tags: ['verb-irregular', 'verb', 'N5'],
    exampleSentences: [
      { ja: '来月旅行します。', furigana: 'らいげつりょこうします。', en: "I'll travel next month." },
    ],
  },
  'vocab-sanpo': {
    id: 'vocab-sanpo',
    word: { ja: '散歩', reading: 'さんぽ', romaji: 'sanpo', en: "stroll" },
    wordClass: 'verb-irregular',
    jlptLevel: 'N5',
    tags: ['verb-irregular', 'verb', 'N5'],
    exampleSentences: [
      { ja: '公園を散歩します。', furigana: 'こうえんをさんぽします。', en: "I take a walk in the park." },
    ],
  },
  'vocab-shigoto': {
    id: 'vocab-shigoto',
    word: { ja: '仕事', reading: 'しごと', romaji: 'shigoto', en: "work" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'work', 'N5'],
    exampleSentences: [
      { ja: '仕事が忙しいです。', furigana: 'しごとがいそがしいです。', en: "Work is busy." },
    ],
  },
  'vocab-youji': {
    id: 'vocab-youji',
    word: { ja: '用事', reading: 'ようじ', romaji: 'youji', en: "errand" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'work', 'N5'],
    exampleSentences: [
      { ja: '用事があります。', furigana: 'ようじがあります。', en: "I have an errand." },
    ],
  },
  'vocab-shachou': {
    id: 'vocab-shachou',
    word: { ja: '社長', reading: 'しゃちょう', romaji: 'shachou', en: "company president" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'work', 'N5'],
    exampleSentences: [
      { ja: '社長に会いました。', furigana: 'しゃちょうにあいました。', en: "I met the company president." },
    ],
  },
  'vocab-isha': {
    id: 'vocab-isha',
    word: { ja: '医者', reading: 'いしゃ', romaji: 'isha', en: "doctor" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'work', 'N5'],
    exampleSentences: [
      { ja: '医者になりたいです。', furigana: 'いしゃになりたいです。', en: "I want to become a doctor." },
    ],
  },
  'vocab-shuppatsu': {
    id: 'vocab-shuppatsu',
    word: { ja: '出発', reading: 'しゅっぱつ', romaji: 'shuppatsu', en: "departure" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'travel', 'N5'],
    exampleSentences: [
      { ja: '出発は八時です。', furigana: 'しゅっぱつははちじです。', en: "Departure is at eight." },
    ],
  },
  'vocab-touchaku': {
    id: 'vocab-touchaku',
    word: { ja: '到着', reading: 'とうちゃく', romaji: 'touchaku', en: "arrival" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'travel', 'N5'],
    exampleSentences: [
      { ja: '到着が遅れました。', furigana: 'とうちゃくがおくれました。', en: "The arrival was delayed." },
    ],
  },
  'vocab-kyuukou': {
    id: 'vocab-kyuukou',
    word: { ja: '急行', reading: 'きゅうこう', romaji: 'kyuukou', en: "express train" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'travel', 'N5'],
    exampleSentences: [
      { ja: '急行に乗ります。', furigana: 'きゅうこうにのります。', en: "I take the express train." },
    ],
  },
  'vocab-byouki': {
    id: 'vocab-byouki',
    word: { ja: '病気', reading: 'びょうき', romaji: 'byouki', en: "illness" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'health', 'N5'],
    exampleSentences: [
      { ja: '病気になりました。', furigana: 'びょうきになりました。', en: "I got sick." },
    ],
  },
  'vocab-kimochi': {
    id: 'vocab-kimochi',
    word: { ja: '気持ち', reading: 'きもち', romaji: 'kimochi', en: "feeling" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'feeling', 'N5'],
    exampleSentences: [
      { ja: 'いい気持ちです。', furigana: 'いいきもちです。', en: "It feels good." },
    ],
  },
  'vocab-koe': {
    id: 'vocab-koe',
    word: { ja: '声', reading: 'こえ', romaji: 'koe', en: "voice" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'feeling', 'N5'],
    exampleSentences: [
      { ja: '声が大きいです。', furigana: 'こえがおおきいです。', en: "Your voice is loud." },
    ],
  },
  'vocab-uta': {
    id: 'vocab-uta',
    word: { ja: '歌', reading: 'うた', romaji: 'uta', en: "song" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'music', 'N5'],
    exampleSentences: [
      { ja: '歌が好きです。', furigana: 'うたがすきです。', en: "I like songs." },
    ],
  },
  'vocab-chikara': {
    id: 'vocab-chikara',
    word: { ja: '力', reading: 'ちから', romaji: 'chikara', en: "power" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'body', 'N5'],
    exampleSentences: [
      { ja: '力が強いです。', furigana: 'ちからがつよいです。', en: "He is strong." },
    ],
  },
  'vocab-nihonjin': {
    id: 'vocab-nihonjin',
    word: { ja: '日本人', reading: 'にほんじん', romaji: 'nihonjin', en: "Japanese person" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'people', 'N5'],
    exampleSentences: [
      { ja: '彼は日本人です。', furigana: 'かれはにほんじんです。', en: "He is Japanese." },
    ],
  },
  'vocab-josei': {
    id: 'vocab-josei',
    word: { ja: '女性', reading: 'じょせい', romaji: 'josei', en: "female" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'people', 'N5'],
    exampleSentences: [
      { ja: '女性の店員に聞きました。', furigana: 'じょせいのてんいんにききました。', en: "I asked a female shop assistant." },
    ],
  },
  'vocab-dansei': {
    id: 'vocab-dansei',
    word: { ja: '男性', reading: 'だんせい', romaji: 'dansei', en: "male" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'people', 'N5'],
    exampleSentences: [
      { ja: '男性が来ました。', furigana: 'だんせいがきました。', en: "A man came." },
    ],
  },
  'vocab-shujin': {
    id: 'vocab-shujin',
    word: { ja: '主人', reading: 'しゅじん', romaji: 'shujin', en: "husband/master" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'people', 'N5'],
    exampleSentences: [
      { ja: '主人は会社員です。', furigana: 'しゅじんはかいしゃいんです。', en: "My husband is an office worker." },
    ],
  },
  'vocab-shimai': {
    id: 'vocab-shimai',
    word: { ja: '姉妹', reading: 'しまい', romaji: 'shimai', en: "sisters" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'people', 'N5'],
    exampleSentences: [
      { ja: '姉妹が二人います。', furigana: 'しまいがふたりいます。', en: "I have two sisters." },
    ],
  },
  'vocab-myouji': {
    id: 'vocab-myouji',
    word: { ja: '名字', reading: 'みょうじ', romaji: 'myouji', en: "surname" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'people', 'N5'],
    exampleSentences: [
      { ja: '名字は田中です。', furigana: 'みょうじはたなかです。', en: "My surname is Tanaka." },
    ],
  },
  'vocab-sewa': {
    id: 'vocab-sewa',
    word: { ja: '世話', reading: 'せわ', romaji: 'sewa', en: "care" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'people', 'N5'],
    exampleSentences: [
      { ja: '犬の世話をします。', furigana: 'いぬのせわをします。', en: "I take care of the dog." },
    ],
  },
  'vocab-orei': {
    id: 'vocab-orei',
    word: { ja: 'お礼', reading: 'おれい', romaji: 'orei', en: "thanks" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'people', 'N5'],
    exampleSentences: [
      { ja: 'お礼を言います。', furigana: 'おれいをいいます。', en: "I say thank you." },
    ],
  },
  'vocab-zenbu': {
    id: 'vocab-zenbu',
    word: { ja: '全部', reading: 'ぜんぶ', romaji: 'zenbu', en: "all" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'quantity', 'N5'],
    exampleSentences: [
      { ja: '全部食べました。', furigana: 'ぜんぶたべました。', en: "I ate everything." },
    ],
  },
  'vocab-sukoshi': {
    id: 'vocab-sukoshi',
    word: { ja: '少し', reading: 'すこし', romaji: 'sukoshi', en: "a little" },
    wordClass: 'adverb',
    jlptLevel: 'N5',
    tags: ['adverb', 'quantity', 'N5'],
    exampleSentences: [
      { ja: '少し休みます。', furigana: 'すこしやすみます。', en: "I'll rest a little." },
    ],
  },
  'vocab-ondo': {
    id: 'vocab-ondo',
    word: { ja: '温度', reading: 'おんど', romaji: 'ondo', en: "temperature" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'quantity', 'N5'],
    exampleSentences: [
      { ja: '温度が高いです。', furigana: 'おんどがたかいです。', en: "The temperature is high." },
    ],
  },
  'vocab-futoi': {
    id: 'vocab-futoi',
    word: { ja: '太い', reading: 'ふとい', romaji: 'futoi', en: "thick" },
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['i-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: '太い木があります。', furigana: 'ふといきがあります。', en: "There is a thick tree." },
    ],
  },
  'vocab-hikui': {
    id: 'vocab-hikui',
    word: { ja: '低い', reading: 'ひくい', romaji: 'hikui', en: "low" },
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['i-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: '低い山に登ります。', furigana: 'ひくいやまにのぼります。', en: "I climb a low mountain." },
    ],
  },
  'vocab-tokubetsu': {
    id: 'vocab-tokubetsu',
    word: { ja: '特別', reading: 'とくべつ', romaji: 'tokubetsu', en: "special" },
    wordClass: 'na-adjective',
    jlptLevel: 'N5',
    tags: ['na-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: '今日は特別な日です。', furigana: 'きょうはとくべつなひです。', en: "Today is a special day." },
    ],
  },
  'vocab-juuyou': {
    id: 'vocab-juuyou',
    word: { ja: '重要', reading: 'じゅうよう', romaji: 'juuyou', en: "important" },
    wordClass: 'na-adjective',
    jlptLevel: 'N5',
    tags: ['na-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: '重要な話があります。', furigana: 'じゅうようなはなしがあります。', en: "I have something important to discuss." },
    ],
  },
  'vocab-fuben': {
    id: 'vocab-fuben',
    word: { ja: '不便', reading: 'ふべん', romaji: 'fuben', en: "inconvenient" },
    wordClass: 'na-adjective',
    jlptLevel: 'N5',
    tags: ['na-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: 'この町は不便です。', furigana: 'このまちはふべんです。', en: "This town is inconvenient." },
    ],
  },
  'vocab-miseru': {
    id: 'vocab-miseru',
    word: { ja: '見せる', reading: 'みせる', romaji: 'miseru', en: "to show" },
    wordClass: 'verb-ru',
    jlptLevel: 'N5',
    tags: ['verb-ru', 'verb', 'N5'],
    exampleSentences: [
      { ja: '写真を見せます。', furigana: 'しゃしんをみせます。', en: "I'll show you a photo." },
    ],
  },
  'vocab-uru': {
    id: 'vocab-uru',
    word: { ja: '売る', reading: 'うる', romaji: 'uru', en: "to sell" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: '店で野菜を売ります。', furigana: 'みせでやさいをうります。', en: "They sell vegetables at the shop." },
    ],
  },
  'vocab-kiru-2': {
    id: 'vocab-kiru-2',
    word: { ja: '切る', reading: 'きる', romaji: 'kiru', en: "to cut" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: '紙を切ります。', furigana: 'かみをきります。', en: "I cut the paper." },
    ],
  },
  'vocab-ugoku': {
    id: 'vocab-ugoku',
    word: { ja: '動く', reading: 'うごく', romaji: 'ugoku', en: "to move" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: '車が動きません。', furigana: 'くるまがうごきません。', en: "The car doesn't move." },
    ],
  },
  'vocab-isogu': {
    id: 'vocab-isogu',
    word: { ja: '急ぐ', reading: 'いそぐ', romaji: 'isogu', en: "to hurry" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: '急いでください。', furigana: 'いそいでください。', en: "Please hurry." },
    ],
  },
  'vocab-tomaru': {
    id: 'vocab-tomaru',
    word: { ja: '止まる', reading: 'とまる', romaji: 'tomaru', en: "to stop" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: '電車が止まりました。', furigana: 'でんしゃがとまりました。', en: "The train stopped." },
    ],
  },
  'vocab-hajimaru': {
    id: 'vocab-hajimaru',
    word: { ja: '始まる', reading: 'はじまる', romaji: 'hajimaru', en: "to start" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: '授業が始まります。', furigana: 'じゅぎょうがはじまります。', en: "The class is starting." },
    ],
  },
  'vocab-shinu': {
    id: 'vocab-shinu',
    word: { ja: '死ぬ', reading: 'しぬ', romaji: 'shinu', en: "to die" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: '花が死にました。', furigana: 'はながしにました。', en: "The flower died." },
    ],
  },
  'vocab-tooru': {
    id: 'vocab-tooru',
    word: { ja: '通る', reading: 'とおる', romaji: 'tooru', en: "to pass" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: 'この道を通ります。', furigana: 'このみちをとおります。', en: "I pass along this road." },
    ],
  },
  'vocab-kayou': {
    id: 'vocab-kayou',
    word: { ja: '通う', reading: 'かよう', romaji: 'kayou', en: "to commute" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: '大学に通っています。', furigana: 'だいがくにかよっています。', en: "I commute to university." },
    ],
  },
  'vocab-hakobu': {
    id: 'vocab-hakobu',
    word: { ja: '運ぶ', reading: 'はこぶ', romaji: 'hakobu', en: "to carry" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: '荷物を運びます。', furigana: 'にもつをはこびます。', en: "I carry the luggage." },
    ],
  },
  'vocab-hiraku': {
    id: 'vocab-hiraku',
    word: { ja: '開く', reading: 'ひらく', romaji: 'hiraku', en: "to open" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: '本を開きます。', furigana: 'ほんをひらきます。', en: "I open the book." },
    ],
  },
  'vocab-shimaru': {
    id: 'vocab-shimaru',
    word: { ja: '閉まる', reading: 'しまる', romaji: 'shimaru', en: "to be closed" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: '店が閉まりました。', furigana: 'みせがしまりました。', en: "The shop closed." },
    ],
  },
  'vocab-hiku': {
    id: 'vocab-hiku',
    word: { ja: '引く', reading: 'ひく', romaji: 'hiku', en: "to pull" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: 'ドアを引きます。', furigana: 'ドアをひきます。', en: "I pull the door." },
    ],
  },
  'vocab-mawaru': {
    id: 'vocab-mawaru',
    word: { ja: '回る', reading: 'まわる', romaji: 'mawaru', en: "to turn" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: '町を回ります。', furigana: 'まちをまわります。', en: "I go around the town." },
    ],
  },
  'vocab-susumu': {
    id: 'vocab-susumu',
    word: { ja: '進む', reading: 'すすむ', romaji: 'susumu', en: "to advance" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: '前に進みます。', furigana: 'まえにすすみます。', en: "I move forward." },
    ],
  },
  'vocab-au-2': {
    id: 'vocab-au-2',
    word: { ja: '合う', reading: 'あう', romaji: 'au', en: "to match" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: 'この服は合います。', furigana: 'このふくはあいます。', en: "These clothes fit." },
    ],
  },
  'vocab-tateru': {
    id: 'vocab-tateru',
    word: { ja: '建てる', reading: 'たてる', romaji: 'tateru', en: "to build" },
    wordClass: 'verb-ru',
    jlptLevel: 'N5',
    tags: ['verb-ru', 'verb', 'N5'],
    exampleSentences: [
      { ja: '家を建てます。', furigana: 'いえをたてます。', en: "I build a house." },
    ],
  },
  'vocab-atsumeru': {
    id: 'vocab-atsumeru',
    word: { ja: '集める', reading: 'あつめる', romaji: 'atsumeru', en: "to collect" },
    wordClass: 'verb-ru',
    jlptLevel: 'N5',
    tags: ['verb-ru', 'verb', 'N5'],
    exampleSentences: [
      { ja: '切手を集めています。', furigana: 'きってをあつめています。', en: "I collect stamps." },
    ],
  },

  'vocab-konnichiha': {
    id: 'vocab-konnichiha',
    word: { ja: 'こんにちは', reading: 'こんにちは', romaji: 'konnichiha', en: "hello; good afternoon" },
    wordClass: 'expression',
    jlptLevel: 'N5',
    tags: ['expression', 'greeting', 'N5'],
    exampleSentences: [
      { ja: 'こんにちは、田中さん。', furigana: 'こんにちは、たなかさん。', en: "Hello, Mr. Tanaka." },
    ],
  },
  'vocab-ohayougozaimasu': {
    id: 'vocab-ohayougozaimasu',
    word: { ja: 'おはようございます', reading: 'おはようございます', romaji: 'ohayougozaimasu', en: "good morning (polite)" },
    wordClass: 'expression',
    jlptLevel: 'N5',
    tags: ['expression', 'greeting', 'N5'],
    exampleSentences: [
      { ja: 'おはようございます、先生。', furigana: 'おはようございます、せんせい。', en: "Good morning, teacher." },
    ],
  },
  'vocab-konbanha': {
    id: 'vocab-konbanha',
    word: { ja: 'こんばんは', reading: 'こんばんは', romaji: 'konbanha', en: "good evening" },
    wordClass: 'expression',
    jlptLevel: 'N5',
    tags: ['expression', 'greeting', 'N5'],
    exampleSentences: [
      { ja: 'こんばんは、いい夜ですね。', furigana: 'こんばんは、いいよるですね。', en: "Good evening, it's a nice night." },
    ],
  },
  'vocab-sayounara': {
    id: 'vocab-sayounara',
    word: { ja: 'さようなら', reading: 'さようなら', romaji: 'sayounara', en: "goodbye" },
    wordClass: 'expression',
    jlptLevel: 'N5',
    tags: ['expression', 'greeting', 'N5'],
    exampleSentences: [
      { ja: 'さようなら、また明日。', furigana: 'さようなら、またあした。', en: "Goodbye, see you tomorrow." },
    ],
  },
  'vocab-oyasuminasai': {
    id: 'vocab-oyasuminasai',
    word: { ja: 'おやすみなさい', reading: 'おやすみなさい', romaji: 'oyasuminasai', en: "good night" },
    wordClass: 'expression',
    jlptLevel: 'N5',
    tags: ['expression', 'greeting', 'N5'],
    exampleSentences: [
      { ja: 'おやすみなさい、また明日。', furigana: 'おやすみなさい、またあした。', en: "Good night, see you tomorrow." },
    ],
  },
  'vocab-arigatou': {
    id: 'vocab-arigatou',
    word: { ja: 'ありがとう', reading: 'ありがとう', romaji: 'arigatou', en: "thank you" },
    wordClass: 'expression',
    jlptLevel: 'N5',
    tags: ['expression', 'greeting', 'N5'],
    exampleSentences: [
      { ja: 'ありがとう、うれしいです。', furigana: 'ありがとう、うれしいです。', en: "Thank you, I'm happy." },
    ],
  },
  'vocab-sumimasen': {
    id: 'vocab-sumimasen',
    word: { ja: 'すみません', reading: 'すみません', romaji: 'sumimasen', en: "excuse me; sorry" },
    wordClass: 'expression',
    jlptLevel: 'N5',
    tags: ['expression', 'greeting', 'N5'],
    exampleSentences: [
      { ja: 'すみません、駅はどこですか。', furigana: 'すみません、えきはどこですか。', en: "Excuse me, where is the station?" },
    ],
  },
  'vocab-hajimemashite': {
    id: 'vocab-hajimemashite',
    word: { ja: 'はじめまして', reading: 'はじめまして', romaji: 'hajimemashite', en: "nice to meet you" },
    wordClass: 'expression',
    jlptLevel: 'N5',
    tags: ['expression', 'greeting', 'N5'],
    exampleSentences: [
      { ja: 'はじめまして、山田です。', furigana: 'はじめまして、やまだです。', en: "Nice to meet you, I'm Yamada." },
    ],
  },
  'vocab-itadakimasu': {
    id: 'vocab-itadakimasu',
    word: { ja: 'いただきます', reading: 'いただきます', romaji: 'itadakimasu', en: "said before eating" },
    wordClass: 'expression',
    jlptLevel: 'N5',
    tags: ['expression', 'greeting', 'N5'],
    exampleSentences: [
      { ja: 'いただきます、おいしそうです。', furigana: 'いただきます、おいしそうです。', en: "Let's eat, it looks delicious." },
    ],
  },
  'vocab-gochisousama': {
    id: 'vocab-gochisousama',
    word: { ja: 'ごちそうさま', reading: 'ごちそうさま', romaji: 'gochisousama', en: "said after eating" },
    wordClass: 'expression',
    jlptLevel: 'N5',
    tags: ['expression', 'greeting', 'N5'],
    exampleSentences: [
      { ja: 'ごちそうさま、おいしかったです。', furigana: 'ごちそうさま、おいしかったです。', en: "Thank you for the meal, it was delicious." },
    ],
  },
  'vocab-hai': {
    id: 'vocab-hai',
    word: { ja: 'はい', reading: 'はい', romaji: 'hai', en: "yes" },
    wordClass: 'expression',
    jlptLevel: 'N5',
    tags: ['expression', 'basic', 'N5'],
    exampleSentences: [
      { ja: 'はい、そうです。', furigana: 'はい、そうです。', en: "Yes, that's right." },
    ],
  },
  'vocab-iie': {
    id: 'vocab-iie',
    word: { ja: 'いいえ', reading: 'いいえ', romaji: 'iie', en: "no" },
    wordClass: 'expression',
    jlptLevel: 'N5',
    tags: ['expression', 'basic', 'N5'],
    exampleSentences: [
      { ja: 'いいえ、違います。', furigana: 'いいえ、ちがいます。', en: "No, that's wrong." },
    ],
  },
  'vocab-koko': {
    id: 'vocab-koko',
    word: { ja: 'ここ', reading: 'ここ', romaji: 'koko', en: "here" },
    wordClass: 'expression',
    jlptLevel: 'N5',
    tags: ['expression', 'basic', 'N5'],
    exampleSentences: [
      { ja: 'ここは静かです。', furigana: 'ここはしずかです。', en: "It's quiet here." },
    ],
  },
  'vocab-soko': {
    id: 'vocab-soko',
    word: { ja: 'そこ', reading: 'そこ', romaji: 'soko', en: "there" },
    wordClass: 'expression',
    jlptLevel: 'N5',
    tags: ['expression', 'basic', 'N5'],
    exampleSentences: [
      { ja: 'そこに置いてください。', furigana: 'そこにおいてください。', en: "Please put it there." },
    ],
  },
  'vocab-asoko': {
    id: 'vocab-asoko',
    word: { ja: 'あそこ', reading: 'あそこ', romaji: 'asoko', en: "over there" },
    wordClass: 'expression',
    jlptLevel: 'N5',
    tags: ['expression', 'basic', 'N5'],
    exampleSentences: [
      { ja: 'あそこに駅があります。', furigana: 'あそこにえきがあります。', en: "There is a station over there." },
    ],
  },
  'vocab-kono': {
    id: 'vocab-kono',
    word: { ja: 'この', reading: 'この', romaji: 'kono', en: "this (+ noun)" },
    wordClass: 'expression',
    jlptLevel: 'N5',
    tags: ['expression', 'basic', 'N5'],
    exampleSentences: [
      { ja: 'この本は面白いです。', furigana: 'このほんはおもしろいです。', en: "This book is interesting." },
    ],
  },
  'vocab-sono': {
    id: 'vocab-sono',
    word: { ja: 'その', reading: 'その', romaji: 'sono', en: "that (+ noun)" },
    wordClass: 'expression',
    jlptLevel: 'N5',
    tags: ['expression', 'basic', 'N5'],
    exampleSentences: [
      { ja: 'その店は安いです。', furigana: 'そのみせはやすいです。', en: "That shop is cheap." },
    ],
  },
  'vocab-ano': {
    id: 'vocab-ano',
    word: { ja: 'あの', reading: 'あの', romaji: 'ano', en: "that over there (+ noun)" },
    wordClass: 'expression',
    jlptLevel: 'N5',
    tags: ['expression', 'basic', 'N5'],
    exampleSentences: [
      { ja: 'あの人は先生です。', furigana: 'あのひとはせんせいです。', en: "That person is a teacher." },
    ],
  },
  'vocab-dono': {
    id: 'vocab-dono',
    word: { ja: 'どの', reading: 'どの', romaji: 'dono', en: "which (+ noun)" },
    wordClass: 'expression',
    jlptLevel: 'N5',
    tags: ['expression', 'basic', 'N5'],
    exampleSentences: [
      { ja: 'どの電車に乗りますか。', furigana: 'どのでんしゃにのりますか。', en: "Which train do you take?" },
    ],
  },
  'vocab-minna': {
    id: 'vocab-minna',
    word: { ja: 'みんな', reading: 'みんな', romaji: 'minna', en: "everyone; all" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'basic', 'N5'],
    exampleSentences: [
      { ja: 'みんなで食べましょう。', furigana: 'みんなでたべましょう。', en: "Let's eat together." },
    ],
  },
  'vocab-takusan': {
    id: 'vocab-takusan',
    word: { ja: 'たくさん', reading: 'たくさん', romaji: 'takusan', en: "a lot; many" },
    wordClass: 'adverb',
    jlptLevel: 'N5',
    tags: ['adverb', 'quantity', 'N5'],
    exampleSentences: [
      { ja: '本がたくさんあります。', furigana: 'ほんがたくさんあります。', en: "There are many books." },
    ],
  },
  'vocab-chotto': {
    id: 'vocab-chotto',
    word: { ja: 'ちょっと', reading: 'ちょっと', romaji: 'chotto', en: "a little; a moment" },
    wordClass: 'adverb',
    jlptLevel: 'N5',
    tags: ['adverb', 'quantity', 'N5'],
    exampleSentences: [
      { ja: 'ちょっと待ってください。', furigana: 'ちょっとまってください。', en: "Please wait a moment." },
    ],
  },
  'vocab-totemo': {
    id: 'vocab-totemo',
    word: { ja: 'とても', reading: 'とても', romaji: 'totemo', en: "very" },
    wordClass: 'adverb',
    jlptLevel: 'N5',
    tags: ['adverb', 'quantity', 'N5'],
    exampleSentences: [
      { ja: 'とても面白いです。', furigana: 'とてもおもしろいです。', en: "It's very interesting." },
    ],
  },
  'vocab-mata': {
    id: 'vocab-mata',
    word: { ja: 'また', reading: 'また', romaji: 'mata', en: "again" },
    wordClass: 'adverb',
    jlptLevel: 'N5',
    tags: ['adverb', 'time', 'N5'],
    exampleSentences: [
      { ja: 'また会いましょう。', furigana: 'またあいましょう。', en: "Let's meet again." },
    ],
  },
  'vocab-sugu': {
    id: 'vocab-sugu',
    word: { ja: 'すぐ', reading: 'すぐ', romaji: 'sugu', en: "immediately" },
    wordClass: 'adverb',
    jlptLevel: 'N5',
    tags: ['adverb', 'time', 'N5'],
    exampleSentences: [
      { ja: 'すぐ行きます。', furigana: 'すぐいきます。', en: "I'll go right away." },
    ],
  },
  'vocab-yukkuri': {
    id: 'vocab-yukkuri',
    word: { ja: 'ゆっくり', reading: 'ゆっくり', romaji: 'yukkuri', en: "slowly" },
    wordClass: 'adverb',
    jlptLevel: 'N5',
    tags: ['adverb', 'time', 'N5'],
    exampleSentences: [
      { ja: 'ゆっくり歩きます。', furigana: 'ゆっくりあるきます。', en: "I walk slowly." },
    ],
  },
  'vocab-itsumo': {
    id: 'vocab-itsumo',
    word: { ja: 'いつも', reading: 'いつも', romaji: 'itsumo', en: "always" },
    wordClass: 'adverb',
    jlptLevel: 'N5',
    tags: ['adverb', 'time', 'N5'],
    exampleSentences: [
      { ja: 'いつも早く起きます。', furigana: 'いつもはやくおきます。', en: "I always get up early." },
    ],
  },
  'vocab-soshite': {
    id: 'vocab-soshite',
    word: { ja: 'そして', reading: 'そして', romaji: 'soshite', en: "and then" },
    wordClass: 'conjunction',
    jlptLevel: 'N5',
    tags: ['conjunction', 'basic', 'N5'],
    exampleSentences: [
      { ja: '朝ご飯を食べて、そして学校へ行きます。', furigana: 'あさごはんをたべて、そしてがっこうへいきます。', en: "I eat breakfast, and then go to school." },
    ],
  },
  'vocab-demo': {
    id: 'vocab-demo',
    word: { ja: 'でも', reading: 'でも', romaji: 'demo', en: "but" },
    wordClass: 'conjunction',
    jlptLevel: 'N5',
    tags: ['conjunction', 'basic', 'N5'],
    exampleSentences: [
      { ja: '高いです。でも、買います。', furigana: 'たかいです。でも、かいます。', en: "It's expensive. But I'll buy it." },
    ],
  },
  'vocab-dakara': {
    id: 'vocab-dakara',
    word: { ja: 'だから', reading: 'だから', romaji: 'dakara', en: "so; therefore" },
    wordClass: 'conjunction',
    jlptLevel: 'N5',
    tags: ['conjunction', 'basic', 'N5'],
    exampleSentences: [
      { ja: '雨です。だから、行きません。', furigana: 'あめです。だから、いきません。', en: "It's raining. So I won't go." },
    ],
  },
  'vocab-terebi': {
    id: 'vocab-terebi',
    word: { ja: 'テレビ', reading: 'テレビ', romaji: 'terebi', en: "television" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'object', 'N5'],
    exampleSentences: [
      { ja: 'テレビを見ます。', furigana: 'テレビをみます。', en: "I watch TV." },
    ],
  },
  'vocab-rajio': {
    id: 'vocab-rajio',
    word: { ja: 'ラジオ', reading: 'ラジオ', romaji: 'rajio', en: "radio" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'object', 'N5'],
    exampleSentences: [
      { ja: 'ラジオを聞きます。', furigana: 'ラジオをききます。', en: "I listen to the radio." },
    ],
  },
  'vocab-kamera': {
    id: 'vocab-kamera',
    word: { ja: 'カメラ', reading: 'カメラ', romaji: 'kamera', en: "camera" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'object', 'N5'],
    exampleSentences: [
      { ja: 'カメラで写真を撮ります。', furigana: 'カメラでしゃしんをとります。', en: "I take photos with a camera." },
    ],
  },
  'vocab-pasokon': {
    id: 'vocab-pasokon',
    word: { ja: 'パソコン', reading: 'パソコン', romaji: 'pasokon', en: "personal computer" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'object', 'N5'],
    exampleSentences: [
      { ja: 'パソコンで仕事をします。', furigana: 'パソコンでしごとをします。', en: "I work on a computer." },
    ],
  },
  'vocab-teeburu': {
    id: 'vocab-teeburu',
    word: { ja: 'テーブル', reading: 'テーブル', romaji: 'teeburu', en: "table" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'object', 'N5'],
    exampleSentences: [
      { ja: 'テーブルの上にあります。', furigana: 'テーブルのうえにあります。', en: "It's on the table." },
    ],
  },
  'vocab-beddo': {
    id: 'vocab-beddo',
    word: { ja: 'ベッド', reading: 'ベッド', romaji: 'beddo', en: "bed" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'object', 'N5'],
    exampleSentences: [
      { ja: 'ベッドで寝ます。', furigana: 'ベッドでねます。', en: "I sleep in a bed." },
    ],
  },
  'vocab-nooto': {
    id: 'vocab-nooto',
    word: { ja: 'ノート', reading: 'ノート', romaji: 'nooto', en: "notebook" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'object', 'N5'],
    exampleSentences: [
      { ja: 'ノートに書きます。', furigana: 'ノートにかきます。', en: "I write in a notebook." },
    ],
  },
  'vocab-boorupen': {
    id: 'vocab-boorupen',
    word: { ja: 'ボールペン', reading: 'ボールペン', romaji: 'boorupen', en: "ballpoint pen" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'object', 'N5'],
    exampleSentences: [
      { ja: 'ボールペンを貸してください。', furigana: 'ボールペンをかしてください。', en: "Please lend me a ballpoint pen." },
    ],
  },
  'vocab-pen': {
    id: 'vocab-pen',
    word: { ja: 'ペン', reading: 'ペン', romaji: 'pen', en: "pen" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'object', 'N5'],
    exampleSentences: [
      { ja: 'ペンで書きます。', furigana: 'ペンでかきます。', en: "I write with a pen." },
    ],
  },
  'vocab-karendaa': {
    id: 'vocab-karendaa',
    word: { ja: 'カレンダー', reading: 'カレンダー', romaji: 'karendaa', en: "calendar" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'object', 'N5'],
    exampleSentences: [
      { ja: 'カレンダーを見ます。', furigana: 'カレンダーをみます。', en: "I look at the calendar." },
    ],
  },
  'vocab-naifu': {
    id: 'vocab-naifu',
    word: { ja: 'ナイフ', reading: 'ナイフ', romaji: 'naifu', en: "knife" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'object', 'N5'],
    exampleSentences: [
      { ja: 'ナイフで切ります。', furigana: 'ナイフできります。', en: "I cut it with a knife." },
    ],
  },
  'vocab-fuku-2': {
    id: 'vocab-fuku-2',
    word: { ja: 'フォーク', reading: 'フォーク', romaji: 'fuぉぉku', en: "fork" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'object', 'N5'],
    exampleSentences: [
      { ja: 'フォークで食べます。', furigana: 'フォークでたべます。', en: "I eat with a fork." },
    ],
  },
  'vocab-supuun': {
    id: 'vocab-supuun',
    word: { ja: 'スプーン', reading: 'スプーン', romaji: 'supuun', en: "spoon" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'object', 'N5'],
    exampleSentences: [
      { ja: 'スプーンを使います。', furigana: 'スプーンをつかいます。', en: "I use a spoon." },
    ],
  },
  'vocab-koppu': {
    id: 'vocab-koppu',
    word: { ja: 'コップ', reading: 'コップ', romaji: 'koppu', en: "glass; cup" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'object', 'N5'],
    exampleSentences: [
      { ja: 'コップに水を入れます。', furigana: 'コップにみずをいれます。', en: "I pour water into the glass." },
    ],
  },
  'vocab-shatsu': {
    id: 'vocab-shatsu',
    word: { ja: 'シャツ', reading: 'シャツ', romaji: 'shatsu', en: "shirt" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'clothes', 'N5'],
    exampleSentences: [
      { ja: '白いシャツを着ます。', furigana: 'しろいシャツをきます。', en: "I wear a white shirt." },
    ],
  },
  'vocab-zubon': {
    id: 'vocab-zubon',
    word: { ja: 'ズボン', reading: 'ズボン', romaji: 'zubon', en: "trousers" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'clothes', 'N5'],
    exampleSentences: [
      { ja: '新しいズボンを買いました。', furigana: 'あたらしいズボンをかいました。', en: "I bought new trousers." },
    ],
  },
  'vocab-sukaato': {
    id: 'vocab-sukaato',
    word: { ja: 'スカート', reading: 'スカート', romaji: 'sukaato', en: "skirt" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'clothes', 'N5'],
    exampleSentences: [
      { ja: 'スカートが短いです。', furigana: 'スカートがみじかいです。', en: "The skirt is short." },
    ],
  },
  'vocab-nekutai': {
    id: 'vocab-nekutai',
    word: { ja: 'ネクタイ', reading: 'ネクタイ', romaji: 'nekutai', en: "necktie" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'clothes', 'N5'],
    exampleSentences: [
      { ja: 'ネクタイをします。', furigana: 'ネクタイをします。', en: "I wear a tie." },
    ],
  },
  'vocab-poketto': {
    id: 'vocab-poketto',
    word: { ja: 'ポケット', reading: 'ポケット', romaji: 'poketto', en: "pocket" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'clothes', 'N5'],
    exampleSentences: [
      { ja: 'ポケットに入れます。', furigana: 'ポケットにいれます。', en: "I put it in my pocket." },
    ],
  },
  'vocab-resutoran': {
    id: 'vocab-resutoran',
    word: { ja: 'レストラン', reading: 'レストラン', romaji: 'resutoran', en: "restaurant" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'place', 'N5'],
    exampleSentences: [
      { ja: 'レストランで食べます。', furigana: 'レストランでたべます。', en: "I eat at a restaurant." },
    ],
  },
  'vocab-depaato': {
    id: 'vocab-depaato',
    word: { ja: 'デパート', reading: 'デパート', romaji: 'depaato', en: "department store" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'place', 'N5'],
    exampleSentences: [
      { ja: 'デパートで買い物します。', furigana: 'デパートでかいものします。', en: "I shop at a department store." },
    ],
  },
  'vocab-hoteru': {
    id: 'vocab-hoteru',
    word: { ja: 'ホテル', reading: 'ホテル', romaji: 'hoteru', en: "hotel" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'place', 'N5'],
    exampleSentences: [
      { ja: 'ホテルに泊まります。', furigana: 'ホテルにとまります。', en: "I stay at a hotel." },
    ],
  },
  'vocab-apaato': {
    id: 'vocab-apaato',
    word: { ja: 'アパート', reading: 'アパート', romaji: 'apaato', en: "apartment" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'place', 'N5'],
    exampleSentences: [
      { ja: 'アパートに住んでいます。', furigana: 'アパートにすんでいます。', en: "I live in an apartment." },
    ],
  },
  'vocab-puuru': {
    id: 'vocab-puuru',
    word: { ja: 'プール', reading: 'プール', romaji: 'puuru', en: "swimming pool" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'place', 'N5'],
    exampleSentences: [
      { ja: 'プールで泳ぎます。', furigana: 'プールでおよぎます。', en: "I swim in the pool." },
    ],
  },
  'vocab-basu': {
    id: 'vocab-basu',
    word: { ja: 'バス', reading: 'バス', romaji: 'basu', en: "bus" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'transport', 'N5'],
    exampleSentences: [
      { ja: 'バスで行きます。', furigana: 'バスでいきます。', en: "I go by bus." },
    ],
  },
  'vocab-takushii': {
    id: 'vocab-takushii',
    word: { ja: 'タクシー', reading: 'タクシー', romaji: 'takushii', en: "taxi" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'transport', 'N5'],
    exampleSentences: [
      { ja: 'タクシーに乗ります。', furigana: 'タクシーにのります。', en: "I take a taxi." },
    ],
  },
  'vocab-miruku': {
    id: 'vocab-miruku',
    word: { ja: 'ミルク', reading: 'ミルク', romaji: 'miruku', en: "milk" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'food', 'N5'],
    exampleSentences: [
      { ja: 'ミルクを飲みます。', furigana: 'ミルクをのみます。', en: "I drink milk." },
    ],
  },
  'vocab-juusu': {
    id: 'vocab-juusu',
    word: { ja: 'ジュース', reading: 'ジュース', romaji: 'juusu', en: "juice" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'food', 'N5'],
    exampleSentences: [
      { ja: 'ジュースが好きです。', furigana: 'ジュースがすきです。', en: "I like juice." },
    ],
  },
  'vocab-keeki': {
    id: 'vocab-keeki',
    word: { ja: 'ケーキ', reading: 'ケーキ', romaji: 'keeki', en: "cake" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'food', 'N5'],
    exampleSentences: [
      { ja: 'ケーキを食べます。', furigana: 'ケーキをたべます。', en: "I eat cake." },
    ],
  },
  'vocab-sarada': {
    id: 'vocab-sarada',
    word: { ja: 'サラダ', reading: 'サラダ', romaji: 'sarada', en: "salad" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'food', 'N5'],
    exampleSentences: [
      { ja: 'サラダを作ります。', furigana: 'サラダをつくります。', en: "I make a salad." },
    ],
  },
  'vocab-bataa': {
    id: 'vocab-bataa',
    word: { ja: 'バター', reading: 'バター', romaji: 'bataa', en: "butter" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'food', 'N5'],
    exampleSentences: [
      { ja: 'パンにバターをつけます。', furigana: 'パンにバターをつけます。', en: "I put butter on bread." },
    ],
  },
  'vocab-supootsu': {
    id: 'vocab-supootsu',
    word: { ja: 'スポーツ', reading: 'スポーツ', romaji: 'supootsu', en: "sport" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'hobby', 'N5'],
    exampleSentences: [
      { ja: 'スポーツが好きです。', furigana: 'スポーツがすきです。', en: "I like sports." },
    ],
  },
  'vocab-sakkaa': {
    id: 'vocab-sakkaa',
    word: { ja: 'サッカー', reading: 'サッカー', romaji: 'sakkaa', en: "soccer" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'hobby', 'N5'],
    exampleSentences: [
      { ja: 'サッカーをします。', furigana: 'サッカーをします。', en: "I play soccer." },
    ],
  },
  'vocab-tenisu': {
    id: 'vocab-tenisu',
    word: { ja: 'テニス', reading: 'テニス', romaji: 'tenisu', en: "tennis" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'hobby', 'N5'],
    exampleSentences: [
      { ja: 'テニスを習っています。', furigana: 'テニスをならっています。', en: "I'm learning tennis." },
    ],
  },
  'vocab-gitaa': {
    id: 'vocab-gitaa',
    word: { ja: 'ギター', reading: 'ギター', romaji: 'gitaa', en: "guitar" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'hobby', 'N5'],
    exampleSentences: [
      { ja: 'ギターを弾きます。', furigana: 'ギターをはじきます。', en: "I play the guitar." },
    ],
  },
  'vocab-piano': {
    id: 'vocab-piano',
    word: { ja: 'ピアノ', reading: 'ピアノ', romaji: 'piano', en: "piano" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'hobby', 'N5'],
    exampleSentences: [
      { ja: 'ピアノが上手です。', furigana: 'ピアノがじょうずです。', en: "She is good at piano." },
    ],
  },
  'vocab-nyuusu': {
    id: 'vocab-nyuusu',
    word: { ja: 'ニュース', reading: 'ニュース', romaji: 'nyuusu', en: "news" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'study', 'N5'],
    exampleSentences: [
      { ja: 'ニュースを見ます。', furigana: 'ニュースをみます。', en: "I watch the news." },
    ],
  },
  'vocab-kurasu': {
    id: 'vocab-kurasu',
    word: { ja: 'クラス', reading: 'クラス', romaji: 'kurasu', en: "class" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'study', 'N5'],
    exampleSentences: [
      { ja: 'クラスに二十人います。', furigana: 'クラスににじゅうにんいます。', en: "There are twenty people in the class." },
    ],
  },
  'vocab-peeji': {
    id: 'vocab-peeji',
    word: { ja: 'ページ', reading: 'ページ', romaji: 'peeji', en: "page" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'study', 'N5'],
    exampleSentences: [
      { ja: 'ページを開いてください。', furigana: 'ページをひらいてください。', en: "Please open the page." },
    ],
  },

  'vocab-suwaru': {
    id: 'vocab-suwaru',
    word: { ja: '座る', reading: 'すわる', romaji: 'suwaru', en: "to sit" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: '椅子に座ります。', furigana: 'いすにすわります。', en: "I sit on the chair." },
    ],
  },
  'vocab-oyogu': {
    id: 'vocab-oyogu',
    word: { ja: '泳ぐ', reading: 'およぐ', romaji: 'oyogu', en: "to swim" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: '海で泳ぎます。', furigana: 'うみでおよぎます。', en: "I swim in the sea." },
    ],
  },
  'vocab-tsukuru': {
    id: 'vocab-tsukuru',
    word: { ja: '作る', reading: 'つくる', romaji: 'tsukuru', en: "to make" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: 'ケーキを作ります。', furigana: 'ケーキをつくります。', en: "I make a cake." },
    ],
  },
  'vocab-oboeru': {
    id: 'vocab-oboeru',
    word: { ja: '覚える', reading: 'おぼえる', romaji: 'oboeru', en: "to memorize; to learn" },
    wordClass: 'verb-ru',
    jlptLevel: 'N5',
    tags: ['verb-ru', 'verb', 'N5'],
    exampleSentences: [
      { ja: '新しい言葉を覚えます。', furigana: 'あたらしいことばをおぼえます。', en: "I memorize new words." },
    ],
  },
  'vocab-wasureru': {
    id: 'vocab-wasureru',
    word: { ja: '忘れる', reading: 'わすれる', romaji: 'wasureru', en: "to forget" },
    wordClass: 'verb-ru',
    jlptLevel: 'N5',
    tags: ['verb-ru', 'verb', 'N5'],
    exampleSentences: [
      { ja: '名前を忘れました。', furigana: 'なまえをわすれました。', en: "I forgot the name." },
    ],
  },
  'vocab-yobu': {
    id: 'vocab-yobu',
    word: { ja: '呼ぶ', reading: 'よぶ', romaji: 'yobu', en: "to call" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: '友達を呼びます。', furigana: 'ともだちをよびます。', en: "I call my friend." },
    ],
  },
  'vocab-osu': {
    id: 'vocab-osu',
    word: { ja: '押す', reading: 'おす', romaji: 'osu', en: "to push; to press" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: 'ボタンを押します。', furigana: 'ボタンをおします。', en: "I press the button." },
    ],
  },
  'vocab-kesu': {
    id: 'vocab-kesu',
    word: { ja: '消す', reading: 'けす', romaji: 'kesu', en: "to turn off; to erase" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: '電気を消します。', furigana: 'でんきをけします。', en: "I turn off the light." },
    ],
  },
  'vocab-magaru': {
    id: 'vocab-magaru',
    word: { ja: '曲がる', reading: 'まがる', romaji: 'magaru', en: "to turn" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: '次の角を曲がります。', furigana: 'つぎのかくをまがります。', en: "I turn at the next corner." },
    ],
  },
  'vocab-wataru': {
    id: 'vocab-wataru',
    word: { ja: '渡る', reading: 'わたる', romaji: 'wataru', en: "to cross" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: '道を渡ります。', furigana: 'みちをわたります。', en: "I cross the road." },
    ],
  },
  'vocab-oriru': {
    id: 'vocab-oriru',
    word: { ja: '降りる', reading: 'おりる', romaji: 'oriru', en: "to get off; to descend" },
    wordClass: 'verb-ru',
    jlptLevel: 'N5',
    tags: ['verb-ru', 'verb', 'N5'],
    exampleSentences: [
      { ja: '次の駅で降ります。', furigana: 'つぎのえきでおります。', en: "I get off at the next station." },
    ],
  },
  'vocab-dasu': {
    id: 'vocab-dasu',
    word: { ja: '出す', reading: 'だす', romaji: 'dasu', en: "to take out; to send" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: '手紙を出します。', furigana: 'てがみをだします。', en: "I send a letter." },
    ],
  },
  'vocab-ireru': {
    id: 'vocab-ireru',
    word: { ja: '入れる', reading: 'いれる', romaji: 'ireru', en: "to put in" },
    wordClass: 'verb-ru',
    jlptLevel: 'N5',
    tags: ['verb-ru', 'verb', 'N5'],
    exampleSentences: [
      { ja: 'かばんに入れます。', furigana: 'かばんにいれます。', en: "I put it in my bag." },
    ],
  },
  'vocab-oku': {
    id: 'vocab-oku',
    word: { ja: '置く', reading: 'おく', romaji: 'oku', en: "to put; to place" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: '机の上に置きます。', furigana: 'つくえのうえにおきます。', en: "I put it on the desk." },
    ],
  },
  'vocab-toru': {
    id: 'vocab-toru',
    word: { ja: '取る', reading: 'とる', romaji: 'toru', en: "to take" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: '塩を取ってください。', furigana: 'しおをとってください。', en: "Please pass the salt." },
    ],
  },
  'vocab-kaesu': {
    id: 'vocab-kaesu',
    word: { ja: '返す', reading: 'かえす', romaji: 'kaesu', en: "to return something" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: '本を返します。', furigana: 'ほんをかえします。', en: "I return the book." },
    ],
  },
  'vocab-harau': {
    id: 'vocab-harau',
    word: { ja: '払う', reading: 'はらう', romaji: 'harau', en: "to pay" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: 'お金を払います。', furigana: 'おかねをはらいます。', en: "I pay the money." },
    ],
  },
  'vocab-sagasu': {
    id: 'vocab-sagasu',
    word: { ja: '探す', reading: 'さがす', romaji: 'sagasu', en: "to look for" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: 'かぎを探しています。', furigana: 'かぎをさがしています。', en: "I'm looking for my key." },
    ],
  },
  'vocab-erabu': {
    id: 'vocab-erabu',
    word: { ja: '選ぶ', reading: 'えらぶ', romaji: 'erabu', en: "to choose" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: '好きな色を選びます。', furigana: 'すきないろをえらびます。', en: "I choose my favourite colour." },
    ],
  },
  'vocab-kimeru': {
    id: 'vocab-kimeru',
    word: { ja: '決める', reading: 'きめる', romaji: 'kimeru', en: "to decide" },
    wordClass: 'verb-ru',
    jlptLevel: 'N5',
    tags: ['verb-ru', 'verb', 'N5'],
    exampleSentences: [
      { ja: '日を決めましょう。', furigana: 'ひをきめましょう。', en: "Let's decide the day." },
    ],
  },
  'vocab-tetsudau': {
    id: 'vocab-tetsudau',
    word: { ja: '手伝う', reading: 'てつだう', romaji: 'tetsudau', en: "to help" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: '仕事を手伝います。', furigana: 'しごとをてつだいます。', en: "I help with the work." },
    ],
  },
  'vocab-komaru': {
    id: 'vocab-komaru',
    word: { ja: '困る', reading: 'こまる', romaji: 'komaru', en: "to be troubled" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: 'お金がなくて困ります。', furigana: 'おかねがなくてこまります。', en: "I'm troubled because I have no money." },
    ],
  },
  'vocab-tsukareru': {
    id: 'vocab-tsukareru',
    word: { ja: '疲れる', reading: 'つかれる', romaji: 'tsukareru', en: "to get tired" },
    wordClass: 'verb-ru',
    jlptLevel: 'N5',
    tags: ['verb-ru', 'verb', 'N5'],
    exampleSentences: [
      { ja: '今日はとても疲れました。', furigana: 'きょうはとてもつかれました。', en: "I got very tired." },
    ],
  },
  'vocab-naku': {
    id: 'vocab-naku',
    word: { ja: '泣く', reading: 'なく', romaji: 'naku', en: "to cry" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: '赤ちゃんが泣いています。', furigana: 'あかちゃんがないています。', en: "The baby is crying." },
    ],
  },
  'vocab-warau': {
    id: 'vocab-warau',
    word: { ja: '笑う', reading: 'わらう', romaji: 'warau', en: "to laugh" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: 'みんなで笑いました。', furigana: 'みんなでわらいました。', en: "We all laughed." },
    ],
  },
  'vocab-okoru': {
    id: 'vocab-okoru',
    word: { ja: '怒る', reading: 'おこる', romaji: 'okoru', en: "to get angry" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: '父が怒りました。', furigana: 'ちちがおこりました。', en: "My father got angry." },
    ],
  },
  'vocab-tsuzukeru': {
    id: 'vocab-tsuzukeru',
    word: { ja: '続ける', reading: 'つづける', romaji: 'tsuzukeru', en: "to continue" },
    wordClass: 'verb-ru',
    jlptLevel: 'N5',
    tags: ['verb-ru', 'verb', 'N5'],
    exampleSentences: [
      { ja: '勉強を続けます。', furigana: 'べんきょうをつづけます。', en: "I continue studying." },
    ],
  },
  'vocab-umareru': {
    id: 'vocab-umareru',
    word: { ja: '生まれる', reading: 'うまれる', romaji: 'umareru', en: "to be born" },
    wordClass: 'verb-ru',
    jlptLevel: 'N5',
    tags: ['verb-ru', 'verb', 'N5'],
    exampleSentences: [
      { ja: '日本で生まれました。', furigana: 'にほんでうまれました。', en: "I was born in Japan." },
    ],
  },
  'vocab-naru': {
    id: 'vocab-naru',
    word: { ja: 'なる', reading: 'なる', romaji: 'naru', en: "to become" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: '医者になりたいです。', furigana: 'いしゃになりたいです。', en: "I want to become a doctor." },
    ],
  },
  'vocab-noboru': {
    id: 'vocab-noboru',
    word: { ja: '登る', reading: 'のぼる', romaji: 'noboru', en: "to climb" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: '山に登ります。', furigana: 'やまにのぼります。', en: "I climb the mountain." },
    ],
  },
  'vocab-tsuku': {
    id: 'vocab-tsuku',
    word: { ja: '着く', reading: 'つく', romaji: 'tsuku', en: "to arrive" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: '駅に着きました。', furigana: 'えきにつきました。', en: "I arrived at the station." },
    ],
  },
  'vocab-atsui-2': {
    id: 'vocab-atsui-2',
    word: { ja: '熱い', reading: 'あつい', romaji: 'atsui', en: "hot (to touch)" },
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['i-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: 'このお茶は熱いです。', furigana: 'このおちゃはあついです。', en: "This tea is hot." },
    ],
  },
  'vocab-tsumetai': {
    id: 'vocab-tsumetai',
    word: { ja: '冷たい', reading: 'つめたい', romaji: 'tsumetai', en: "cold (to touch)" },
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['i-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: '冷たい水を飲みます。', furigana: 'つめたいみずをのみます。', en: "I drink cold water." },
    ],
  },
  'vocab-atatakai': {
    id: 'vocab-atatakai',
    word: { ja: '温かい', reading: 'あたたかい', romaji: 'atatakai', en: "warm" },
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['i-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: '温かいスープです。', furigana: 'あたたかいスープです。', en: "It's warm soup." },
    ],
  },
  'vocab-suzushii': {
    id: 'vocab-suzushii',
    word: { ja: '涼しい', reading: 'すずしい', romaji: 'suzushii', en: "cool" },
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['i-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: '秋は涼しいです。', furigana: 'あきはすずしいです。', en: "Autumn is cool." },
    ],
  },
  'vocab-amai': {
    id: 'vocab-amai',
    word: { ja: '甘い', reading: 'あまい', romaji: 'amai', en: "sweet" },
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['i-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: 'このケーキは甘いです。', furigana: 'このケーキはあまいです。', en: "This cake is sweet." },
    ],
  },
  'vocab-karai': {
    id: 'vocab-karai',
    word: { ja: '辛い', reading: 'からい', romaji: 'karai', en: "spicy; hot" },
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['i-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: 'この料理は辛いです。', furigana: 'このりょうりはつらいです。', en: "This dish is spicy." },
    ],
  },
  'vocab-oishii': {
    id: 'vocab-oishii',
    word: { ja: 'おいしい', reading: 'おいしい', romaji: 'oishii', en: "delicious" },
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['i-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: 'このパンはおいしいです。', furigana: 'このパンはおいしいです。', en: "This bread is delicious." },
    ],
  },
  'vocab-kitanai': {
    id: 'vocab-kitanai',
    word: { ja: '汚い', reading: 'きたない', romaji: 'kitanai', en: "dirty" },
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['i-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: '部屋が汚いです。', furigana: 'へやがきたないです。', en: "The room is dirty." },
    ],
  },
  'vocab-itai': {
    id: 'vocab-itai',
    word: { ja: '痛い', reading: 'いたい', romaji: 'itai', en: "painful" },
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['i-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: '頭が痛いです。', furigana: 'あたまがいたいです。', en: "My head hurts." },
    ],
  },
  'vocab-nemui': {
    id: 'vocab-nemui',
    word: { ja: '眠い', reading: 'ねむい', romaji: 'nemui', en: "sleepy" },
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['i-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: 'とても眠いです。', furigana: 'とてもねむいです。', en: "I'm very sleepy." },
    ],
  },
  'vocab-hosoi': {
    id: 'vocab-hosoi',
    word: { ja: '細い', reading: 'ほそい', romaji: 'hosoi', en: "thin; narrow" },
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['i-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: '細い道を歩きます。', furigana: 'ほそいみちをあるきます。', en: "I walk along a narrow road." },
    ],
  },
  'vocab-marui': {
    id: 'vocab-marui',
    word: { ja: '丸い', reading: 'まるい', romaji: 'marui', en: "round" },
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['i-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: '丸いテーブルです。', furigana: 'まるいテーブルです。', en: "It's a round table." },
    ],
  },
  'vocab-wakai': {
    id: 'vocab-wakai',
    word: { ja: '若い', reading: 'わかい', romaji: 'wakai', en: "young" },
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['i-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: '彼は若いです。', furigana: 'かれはわかいです。', en: "He is young." },
    ],
  },
  'vocab-osoi': {
    id: 'vocab-osoi',
    word: { ja: '遅い', reading: 'おそい', romaji: 'osoi', en: "slow; late" },
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['i-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: '電車が遅いです。', furigana: 'でんしゃがおそいです。', en: "The train is slow." },
    ],
  },
  'vocab-hayai-2': {
    id: 'vocab-hayai-2',
    word: { ja: '速い', reading: 'はやい', romaji: 'hayai', en: "fast" },
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['i-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: 'この車は速いです。', furigana: 'このくるまははやいです。', en: "This car is fast." },
    ],
  },
  'vocab-sabishii': {
    id: 'vocab-sabishii',
    word: { ja: '寂しい', reading: 'さびしい', romaji: 'sabishii', en: "lonely" },
    wordClass: 'i-adjective',
    jlptLevel: 'N5',
    tags: ['i-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: '一人で寂しいです。', furigana: 'いちにんでさびしいです。', en: "I'm lonely by myself." },
    ],
  },
  'vocab-kirei': {
    id: 'vocab-kirei',
    word: { ja: 'きれい', reading: 'きれい', romaji: 'kirei', en: "pretty; clean" },
    wordClass: 'na-adjective',
    jlptLevel: 'N5',
    tags: ['na-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: '部屋がきれいです。', furigana: 'へやがきれいです。', en: "The room is clean." },
    ],
  },
  'vocab-shizuka': {
    id: 'vocab-shizuka',
    word: { ja: '静か', reading: 'しずか', romaji: 'shizuka', en: "quiet" },
    wordClass: 'na-adjective',
    jlptLevel: 'N5',
    tags: ['na-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: '図書館は静かです。', furigana: 'としょかんはしずかです。', en: "The library is quiet." },
    ],
  },
  'vocab-taihen': {
    id: 'vocab-taihen',
    word: { ja: '大変', reading: 'たいへん', romaji: 'taihen', en: "tough; serious" },
    wordClass: 'na-adjective',
    jlptLevel: 'N5',
    tags: ['na-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: '仕事が大変です。', furigana: 'しごとがたいへんです。', en: "The work is tough." },
    ],
  },
  'vocab-kantan': {
    id: 'vocab-kantan',
    word: { ja: '簡単', reading: 'かんたん', romaji: 'kantan', en: "easy; simple" },
    wordClass: 'na-adjective',
    jlptLevel: 'N5',
    tags: ['na-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: 'この問題は簡単です。', furigana: 'このもんだいはかんたんです。', en: "This problem is easy." },
    ],
  },
  'vocab-shinsetsu': {
    id: 'vocab-shinsetsu',
    word: { ja: '親切', reading: 'しんせつ', romaji: 'shinsetsu', en: "kind" },
    wordClass: 'na-adjective',
    jlptLevel: 'N5',
    tags: ['na-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: '店員は親切です。', furigana: 'てんいんはしんせつです。', en: "The shop assistant is kind." },
    ],
  },
  'vocab-daijoubu': {
    id: 'vocab-daijoubu',
    word: { ja: '大丈夫', reading: 'だいじょうぶ', romaji: 'daijoubu', en: "all right; okay" },
    wordClass: 'na-adjective',
    jlptLevel: 'N5',
    tags: ['na-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: 'もう大丈夫です。', furigana: 'もうだいじょうぶです。', en: "It's all right now." },
    ],
  },
  'vocab-jiyuu': {
    id: 'vocab-jiyuu',
    word: { ja: '自由', reading: 'じゆう', romaji: 'jiyuu', en: "free; freedom" },
    wordClass: 'na-adjective',
    jlptLevel: 'N5',
    tags: ['na-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: '自由な時間がほしいです。', furigana: 'じゆうなじかんがほしいです。', en: "I want free time." },
    ],
  },
  'vocab-anzen': {
    id: 'vocab-anzen',
    word: { ja: '安全', reading: 'あんぜん', romaji: 'anzen', en: "safe" },
    wordClass: 'na-adjective',
    jlptLevel: 'N5',
    tags: ['na-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: 'ここは安全です。', furigana: 'ここはあんぜんです。', en: "It's safe here." },
    ],
  },
  'vocab-kiken': {
    id: 'vocab-kiken',
    word: { ja: '危険', reading: 'きけん', romaji: 'kiken', en: "dangerous" },
    wordClass: 'na-adjective',
    jlptLevel: 'N5',
    tags: ['na-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: 'その道は危険です。', furigana: 'そのみちはきけんです。', en: "That road is dangerous." },
    ],
  },
  'vocab-hitsuyou': {
    id: 'vocab-hitsuyou',
    word: { ja: '必要', reading: 'ひつよう', romaji: 'hitsuyou', en: "necessary" },
    wordClass: 'na-adjective',
    jlptLevel: 'N5',
    tags: ['na-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: 'お金が必要です。', furigana: 'おかねがひつようです。', en: "Money is necessary." },
    ],
  },
  'vocab-teinei': {
    id: 'vocab-teinei',
    word: { ja: '丁寧', reading: 'ていねい', romaji: 'teinei', en: "polite; careful" },
    wordClass: 'na-adjective',
    jlptLevel: 'N5',
    tags: ['na-adjective', 'adjective', 'N5'],
    exampleSentences: [
      { ja: '丁寧に書きます。', furigana: 'ていねいにかきます。', en: "I write carefully." },
    ],
  },
  'vocab-netsu': {
    id: 'vocab-netsu',
    word: { ja: '熱', reading: 'ねつ', romaji: 'netsu', en: "fever" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'health', 'N5'],
    exampleSentences: [
      { ja: '熱があります。', furigana: 'ねつがあります。', en: "I have a fever." },
    ],
  },
  'vocab-kaze-2': {
    id: 'vocab-kaze-2',
    word: { ja: '風邪', reading: 'かぜ', romaji: 'kaze', en: "a cold" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'health', 'N5'],
    exampleSentences: [
      { ja: '風邪をひきました。', furigana: 'かぜをひきました。', en: "I caught a cold." },
    ],
  },
  'vocab-kega': {
    id: 'vocab-kega',
    word: { ja: '怪我', reading: 'けが', romaji: 'kega', en: "injury" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'health', 'N5'],
    exampleSentences: [
      { ja: '足に怪我をしました。', furigana: 'あしにけがをしました。', en: "I injured my leg." },
    ],
  },
  'vocab-daidokoro': {
    id: 'vocab-daidokoro',
    word: { ja: '台所', reading: 'だいどころ', romaji: 'daidokoro', en: "kitchen" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'house', 'N5'],
    exampleSentences: [
      { ja: '台所で料理します。', furigana: 'だいどころでりょうりします。', en: "I cook in the kitchen." },
    ],
  },
  'vocab-toire': {
    id: 'vocab-toire',
    word: { ja: 'トイレ', reading: 'トイレ', romaji: 'toire', en: "toilet" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'house', 'N5'],
    exampleSentences: [
      { ja: 'トイレはあそこです。', furigana: 'トイレはあそこです。', en: "The toilet is over there." },
    ],
  },
  'vocab-genkan': {
    id: 'vocab-genkan',
    word: { ja: '玄関', reading: 'げんかん', romaji: 'genkan', en: "entrance hall" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'house', 'N5'],
    exampleSentences: [
      { ja: '玄関で靴を脱ぎます。', furigana: 'げんかんでくつをぬぎます。', en: "I take off my shoes at the entrance." },
    ],
  },
  'vocab-niwa': {
    id: 'vocab-niwa',
    word: { ja: '庭', reading: 'にわ', romaji: 'niwa', en: "garden" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'house', 'N5'],
    exampleSentences: [
      { ja: '庭に花があります。', furigana: 'にわにはながあります。', en: "There are flowers in the garden." },
    ],
  },
  'vocab-kaidan': {
    id: 'vocab-kaidan',
    word: { ja: '階段', reading: 'かいだん', romaji: 'kaidan', en: "stairs" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'house', 'N5'],
    exampleSentences: [
      { ja: '階段を上がります。', furigana: 'かいだんをあがります。', en: "I go up the stairs." },
    ],
  },
  'vocab-kutsu': {
    id: 'vocab-kutsu',
    word: { ja: '靴', reading: 'くつ', romaji: 'kutsu', en: "shoes" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'clothes', 'N5'],
    exampleSentences: [
      { ja: '新しい靴を買いました。', furigana: 'あたらしいくつをかいました。', en: "I bought new shoes." },
    ],
  },
  'vocab-boushi': {
    id: 'vocab-boushi',
    word: { ja: '帽子', reading: 'ぼうし', romaji: 'boushi', en: "hat" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'clothes', 'N5'],
    exampleSentences: [
      { ja: '帽子をかぶります。', furigana: 'ぼうしをかぶります。', en: "I put on a hat." },
    ],
  },
  'vocab-megane': {
    id: 'vocab-megane',
    word: { ja: '眼鏡', reading: 'めがね', romaji: 'megane', en: "glasses" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'clothes', 'N5'],
    exampleSentences: [
      { ja: '眼鏡をかけます。', furigana: 'めがねをかけます。', en: "I wear glasses." },
    ],
  },
  'vocab-kesa': {
    id: 'vocab-kesa',
    word: { ja: '今朝', reading: 'けさ', romaji: 'kesa', en: "this morning" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'time', 'N5'],
    exampleSentences: [
      { ja: '今朝、早く起きました。', furigana: 'けさ、はやくおきました。', en: "I got up early this morning." },
    ],
  },
  'vocab-maiban': {
    id: 'vocab-maiban',
    word: { ja: '毎晩', reading: 'まいばん', romaji: 'maiban', en: "every night" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'time', 'N5'],
    exampleSentences: [
      { ja: '毎晩、本を読みます。', furigana: 'まいばん、ほんをよみます。', en: "I read a book every night." },
    ],
  },
  'vocab-sakki': {
    id: 'vocab-sakki',
    word: { ja: 'さっき', reading: 'さっき', romaji: 'sakki', en: "a moment ago" },
    wordClass: 'adverb',
    jlptLevel: 'N5',
    tags: ['adverb', 'time', 'N5'],
    exampleSentences: [
      { ja: 'さっき着きました。', furigana: 'さっきつきました。', en: "I arrived a moment ago." },
    ],
  },
  'vocab-korekara': {
    id: 'vocab-korekara',
    word: { ja: 'これから', reading: 'これから', romaji: 'korekara', en: "from now on" },
    wordClass: 'adverb',
    jlptLevel: 'N5',
    tags: ['adverb', 'time', 'N5'],
    exampleSentences: [
      { ja: 'これから出かけます。', furigana: 'これからでかけます。', en: "I'm going out from now." },
    ],
  },
  'vocab-saisho': {
    id: 'vocab-saisho',
    word: { ja: '最初', reading: 'さいしょ', romaji: 'saisho', en: "first; beginning" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'time', 'N5'],
    exampleSentences: [
      { ja: '最初に名前を書きます。', furigana: 'さいしょになまえをかきます。', en: "First, write your name." },
    ],
  },
  'vocab-saigo': {
    id: 'vocab-saigo',
    word: { ja: '最後', reading: 'さいご', romaji: 'saigo', en: "last; end" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'time', 'N5'],
    exampleSentences: [
      { ja: '最後まで頑張ります。', furigana: 'さいごまでがんばります。', en: "I'll do my best to the end." },
    ],
  },
  'vocab-shourai': {
    id: 'vocab-shourai',
    word: { ja: '将来', reading: 'しょうらい', romaji: 'shourai', en: "the future" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'time', 'N5'],
    exampleSentences: [
      { ja: '将来、先生になりたいです。', furigana: 'しょうらい、せんせいになりたいです。', en: "I want to be a teacher in the future." },
    ],
  },
  'vocab-kippu': {
    id: 'vocab-kippu',
    word: { ja: '切符', reading: 'きっぷ', romaji: 'kippu', en: "ticket" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'travel', 'N5'],
    exampleSentences: [
      { ja: '切符を買います。', furigana: 'きっぷをかいます。', en: "I buy a ticket." },
    ],
  },
  'vocab-nimotsu': {
    id: 'vocab-nimotsu',
    word: { ja: '荷物', reading: 'にもつ', romaji: 'nimotsu', en: "luggage" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'travel', 'N5'],
    exampleSentences: [
      { ja: '荷物が重いです。', furigana: 'にもつがおもいです。', en: "The luggage is heavy." },
    ],
  },
  'vocab-yoyaku': {
    id: 'vocab-yoyaku',
    word: { ja: '予約', reading: 'よやく', romaji: 'yoyaku', en: "reservation" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'travel', 'N5'],
    exampleSentences: [
      { ja: 'ホテルを予約します。', furigana: 'ホテルをよやくします。', en: "I reserve a hotel." },
    ],
  },
  'vocab-chikatetsu': {
    id: 'vocab-chikatetsu',
    word: { ja: '地下鉄', reading: 'ちかてつ', romaji: 'chikatetsu', en: "subway" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'travel', 'N5'],
    exampleSentences: [
      { ja: '地下鉄で行きます。', furigana: 'ちかてつでいきます。', en: "I go by subway." },
    ],
  },
  'vocab-erebeetaa': {
    id: 'vocab-erebeetaa',
    word: { ja: 'エレベーター', reading: 'エレベーター', romaji: 'erebeetaa', en: "elevator" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'object', 'N5'],
    exampleSentences: [
      { ja: 'エレベーターに乗ります。', furigana: 'エレベーターにのります。', en: "I take the elevator." },
    ],
  },
  'vocab-shawaa': {
    id: 'vocab-shawaa',
    word: { ja: 'シャワー', reading: 'シャワー', romaji: 'shawaa', en: "shower" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'object', 'N5'],
    exampleSentences: [
      { ja: '毎朝シャワーを浴びます。', furigana: 'まいあさシャワーをあびます。', en: "I take a shower every morning." },
    ],
  },
  'vocab-kaaten': {
    id: 'vocab-kaaten',
    word: { ja: 'カーテン', reading: 'カーテン', romaji: 'kaaten', en: "curtain" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'object', 'N5'],
    exampleSentences: [
      { ja: 'カーテンを開けます。', furigana: 'カーテンをあけます。', en: "I open the curtains." },
    ],
  },
  'vocab-kooto': {
    id: 'vocab-kooto',
    word: { ja: 'コート', reading: 'コート', romaji: 'kooto', en: "coat" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'clothes', 'N5'],
    exampleSentences: [
      { ja: 'コートを着ます。', furigana: 'コートをきます。', en: "I wear a coat." },
    ],
  },
  'vocab-seetaa': {
    id: 'vocab-seetaa',
    word: { ja: 'セーター', reading: 'セーター', romaji: 'seetaa', en: "sweater" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'clothes', 'N5'],
    exampleSentences: [
      { ja: 'セーターが暖かいです。', furigana: 'セーターがあたたかいです。', en: "The sweater is warm." },
    ],
  },
  'vocab-botan': {
    id: 'vocab-botan',
    word: { ja: 'ボタン', reading: 'ボタン', romaji: 'botan', en: "button" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'object', 'N5'],
    exampleSentences: [
      { ja: 'ボタンを押してください。', furigana: 'ボタンをおしてください。', en: "Please press the button." },
    ],
  },
  'vocab-konbini': {
    id: 'vocab-konbini',
    word: { ja: 'コンビニ', reading: 'コンビニ', romaji: 'konbini', en: "convenience store" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'place', 'N5'],
    exampleSentences: [
      { ja: 'コンビニで買います。', furigana: 'コンビニでかいます。', en: "I buy it at the convenience store." },
    ],
  },
  'vocab-kaado': {
    id: 'vocab-kaado',
    word: { ja: 'カード', reading: 'カード', romaji: 'kaado', en: "card" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'object', 'N5'],
    exampleSentences: [
      { ja: 'カードで払います。', furigana: 'カードではらいます。', en: "I pay by card." },
    ],
  },
  'vocab-meeru': {
    id: 'vocab-meeru',
    word: { ja: 'メール', reading: 'メール', romaji: 'meeru', en: "email" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'object', 'N5'],
    exampleSentences: [
      { ja: 'メールを送ります。', furigana: 'メールをおくります。', en: "I send an email." },
    ],
  },
  'vocab-arubaito': {
    id: 'vocab-arubaito',
    word: { ja: 'アルバイト', reading: 'アルバイト', romaji: 'arubaito', en: "part-time job" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'work', 'N5'],
    exampleSentences: [
      { ja: 'アルバイトをしています。', furigana: 'アルバイトをしています。', en: "I work part-time." },
    ],
  },
  'vocab-purezento': {
    id: 'vocab-purezento',
    word: { ja: 'プレゼント', reading: 'プレゼント', romaji: 'purezento', en: "present; gift" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'object', 'N5'],
    exampleSentences: [
      { ja: 'プレゼントをもらいました。', furigana: 'プレゼントをもらいました。', en: "I received a present." },
    ],
  },
  'vocab-taoru': {
    id: 'vocab-taoru',
    word: { ja: 'タオル', reading: 'タオル', romaji: 'taoru', en: "towel" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'object', 'N5'],
    exampleSentences: [
      { ja: 'タオルを使います。', furigana: 'タオルをつかいます。', en: "I use a towel." },
    ],
  },
  'vocab-kopii': {
    id: 'vocab-kopii',
    word: { ja: 'コピー', reading: 'コピー', romaji: 'kopii', en: "copy" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'object', 'N5'],
    exampleSentences: [
      { ja: 'コピーを取ります。', furigana: 'コピーをとります。', en: "I make a copy." },
    ],
  },
  'vocab-douzo': {
    id: 'vocab-douzo',
    word: { ja: 'どうぞ', reading: 'どうぞ', romaji: 'douzo', en: "please; go ahead" },
    wordClass: 'expression',
    jlptLevel: 'N5',
    tags: ['expression', 'basic', 'N5'],
    exampleSentences: [
      { ja: 'どうぞ、座ってください。', furigana: 'どうぞ、すわってください。', en: "Please, have a seat." },
    ],
  },
  'vocab-doumo': {
    id: 'vocab-doumo',
    word: { ja: 'どうも', reading: 'どうも', romaji: 'doumo', en: "thanks; very" },
    wordClass: 'expression',
    jlptLevel: 'N5',
    tags: ['expression', 'basic', 'N5'],
    exampleSentences: [
      { ja: 'どうも、ありがとう。', furigana: 'どうも、ありがとう。', en: "Thanks a lot." },
    ],
  },
  'vocab-moshimoshi': {
    id: 'vocab-moshimoshi',
    word: { ja: 'もしもし', reading: 'もしもし', romaji: 'moshimoshi', en: "hello (on the phone)" },
    wordClass: 'expression',
    jlptLevel: 'N5',
    tags: ['expression', 'basic', 'N5'],
    exampleSentences: [
      { ja: 'もしもし、田中です。', furigana: 'もしもし、たなかです。', en: "Hello, this is Tanaka." },
    ],
  },
  'vocab-sou': {
    id: 'vocab-sou',
    word: { ja: 'そう', reading: 'そう', romaji: 'sou', en: "so; that way" },
    wordClass: 'expression',
    jlptLevel: 'N5',
    tags: ['expression', 'basic', 'N5'],
    exampleSentences: [
      { ja: 'そうですね。', furigana: 'そうですね。', en: "That's right." },
    ],
  },
  'vocab-motto': {
    id: 'vocab-motto',
    word: { ja: 'もっと', reading: 'もっと', romaji: 'motto', en: "more" },
    wordClass: 'adverb',
    jlptLevel: 'N5',
    tags: ['adverb', 'quantity', 'N5'],
    exampleSentences: [
      { ja: 'もっと勉強します。', furigana: 'もっとべんきょうします。', en: "I'll study more." },
    ],
  },
  'vocab-dandan': {
    id: 'vocab-dandan',
    word: { ja: 'だんだん', reading: 'だんだん', romaji: 'dandan', en: "gradually" },
    wordClass: 'adverb',
    jlptLevel: 'N5',
    tags: ['adverb', 'time', 'N5'],
    exampleSentences: [
      { ja: 'だんだん暖かくなります。', furigana: 'だんだんあたたかくなります。', en: "It's gradually getting warmer." },
    ],
  },
  'vocab-taitei': {
    id: 'vocab-taitei',
    word: { ja: 'たいてい', reading: 'たいてい', romaji: 'taitei', en: "usually" },
    wordClass: 'adverb',
    jlptLevel: 'N5',
    tags: ['adverb', 'time', 'N5'],
    exampleSentences: [
      { ja: 'たいてい七時に起きます。', furigana: 'たいていしちじにおきます。', en: "I usually get up at seven." },
    ],
  },
  'vocab-kai': {
    id: 'vocab-kai',
    word: { ja: '回', reading: 'かい', romaji: 'kai', en: "counter for times" },
    wordClass: 'counter',
    jlptLevel: 'N5',
    tags: ['counter', 'counter', 'N5'],
    exampleSentences: [
      { ja: '一回だけ行きました。', furigana: 'いっかいだけいきました。', en: "I went only once." },
    ],
  },
  'vocab-sai': {
    id: 'vocab-sai',
    word: { ja: '歳', reading: 'さい', romaji: 'sai', en: "counter for age" },
    wordClass: 'counter',
    jlptLevel: 'N5',
    tags: ['counter', 'counter', 'N5'],
    exampleSentences: [
      { ja: '弟は九歳です。', furigana: 'おとうとはきゅうさいです。', en: "My younger brother is nine years old." },
    ],
  },
  'vocab-satsu': {
    id: 'vocab-satsu',
    word: { ja: '冊', reading: 'さつ', romaji: 'satsu', en: "counter for books" },
    wordClass: 'counter',
    jlptLevel: 'N5',
    tags: ['counter', 'counter', 'N5'],
    exampleSentences: [
      { ja: '本を三冊買いました。', furigana: 'ほんをさんさつかいました。', en: "I bought three books." },
    ],
  },
  'vocab-ko': {
    id: 'vocab-ko',
    word: { ja: '個', reading: 'こ', romaji: 'ko', en: "counter for small objects" },
    wordClass: 'counter',
    jlptLevel: 'N5',
    tags: ['counter', 'counter', 'N5'],
    exampleSentences: [
      { ja: 'りんごを五個ください。', furigana: 'りんごをごこください。', en: "Five apples, please." },
    ],
  },
  'vocab-hai-2': {
    id: 'vocab-hai-2',
    word: { ja: '杯', reading: 'はい', romaji: 'hai', en: "counter for cupfuls" },
    wordClass: 'counter',
    jlptLevel: 'N5',
    tags: ['counter', 'counter', 'N5'],
    exampleSentences: [
      { ja: 'お茶を一杯ください。', furigana: 'おちゃをいっぱいください。', en: "One cup of tea, please." },
    ],
  },

  'vocab-furu': {
    id: 'vocab-furu',
    word: { ja: '降る', reading: 'ふる', romaji: 'furu', en: "to fall (rain/snow)" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'weather', 'N5'],
    exampleSentences: [
      { ja: '雨が降っています。', furigana: 'あめがふっています。', en: "It is raining." },
    ],
  },
  'vocab-hareru': {
    id: 'vocab-hareru',
    word: { ja: '晴れる', reading: 'はれる', romaji: 'hareru', en: "to clear up" },
    wordClass: 'verb-ru',
    jlptLevel: 'N5',
    tags: ['verb-ru', 'weather', 'N5'],
    exampleSentences: [
      { ja: '明日は晴れるでしょう。', furigana: 'あしたははれるでしょう。', en: "It will probably be sunny tomorrow." },
    ],
  },
  'vocab-kumoru': {
    id: 'vocab-kumoru',
    word: { ja: '曇る', reading: 'くもる', romaji: 'kumoru', en: "to become cloudy" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'weather', 'N5'],
    exampleSentences: [
      { ja: '空が曇りました。', furigana: 'そらがくもりました。', en: "The sky clouded over." },
    ],
  },
  'vocab-fuku-3': {
    id: 'vocab-fuku-3',
    word: { ja: '吹く', reading: 'ふく', romaji: 'fuku', en: "to blow" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'weather', 'N5'],
    exampleSentences: [
      { ja: '風が吹いています。', furigana: 'かぜがふいています。', en: "The wind is blowing." },
    ],
  },
  'vocab-saku': {
    id: 'vocab-saku',
    word: { ja: '咲く', reading: 'さく', romaji: 'saku', en: "to bloom" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'nature', 'N5'],
    exampleSentences: [
      { ja: '花が咲きました。', furigana: 'はながさきました。', en: "The flowers bloomed." },
    ],
  },
  'vocab-yuki': {
    id: 'vocab-yuki',
    word: { ja: '雪', reading: 'ゆき', romaji: 'yuki', en: "snow" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'weather', 'N5'],
    exampleSentences: [
      { ja: '雪が降っています。', furigana: 'ゆきがふっています。', en: "It is snowing." },
    ],
  },
  'vocab-kumo': {
    id: 'vocab-kumo',
    word: { ja: '雲', reading: 'くも', romaji: 'kumo', en: "cloud" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'weather', 'N5'],
    exampleSentences: [
      { ja: '雲が白いです。', furigana: 'くもがしろいです。', en: "The clouds are white." },
    ],
  },
  'vocab-hoshi': {
    id: 'vocab-hoshi',
    word: { ja: '星', reading: 'ほし', romaji: 'hoshi', en: "star" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'nature', 'N5'],
    exampleSentences: [
      { ja: '星がきれいです。', furigana: 'ほしがきれいです。', en: "The stars are beautiful." },
    ],
  },
  'vocab-kuuki': {
    id: 'vocab-kuuki',
    word: { ja: '空気', reading: 'くうき', romaji: 'kuuki', en: "air" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'nature', 'N5'],
    exampleSentences: [
      { ja: '空気がきれいです。', furigana: 'くうきがきれいです。', en: "The air is clean." },
    ],
  },
  'vocab-ishi': {
    id: 'vocab-ishi',
    word: { ja: '石', reading: 'いし', romaji: 'ishi', en: "stone" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'nature', 'N5'],
    exampleSentences: [
      { ja: '石を拾いました。', furigana: 'いしをひろいました。', en: "I picked up a stone." },
    ],
  },
  'vocab-shima': {
    id: 'vocab-shima',
    word: { ja: '島', reading: 'しま', romaji: 'shima', en: "island" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'nature', 'N5'],
    exampleSentences: [
      { ja: '小さい島に行きます。', furigana: 'ちいさいしまにいきます。', en: "I go to a small island." },
    ],
  },
  'vocab-mizuumi': {
    id: 'vocab-mizuumi',
    word: { ja: '湖', reading: 'みずうみ', romaji: 'mizuumi', en: "lake" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'nature', 'N5'],
    exampleSentences: [
      { ja: '湖で泳ぎます。', furigana: 'みずうみでおよぎます。', en: "I swim in the lake." },
    ],
  },
  'vocab-kusa': {
    id: 'vocab-kusa',
    word: { ja: '草', reading: 'くさ', romaji: 'kusa', en: "grass" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'nature', 'N5'],
    exampleSentences: [
      { ja: '庭の草を切ります。', furigana: 'にわのくさをきります。', en: "I cut the grass in the garden." },
    ],
  },
  'vocab-ha': {
    id: 'vocab-ha',
    word: { ja: '葉', reading: 'は', romaji: 'ha', en: "leaf" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'nature', 'N5'],
    exampleSentences: [
      { ja: '葉が赤くなりました。', furigana: 'はがあかくなりました。', en: "The leaves turned red." },
    ],
  },
  'vocab-iro': {
    id: 'vocab-iro',
    word: { ja: '色', reading: 'いろ', romaji: 'iro', en: "colour" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'color', 'N5'],
    exampleSentences: [
      { ja: '好きな色は青です。', furigana: 'すきないろはあおです。', en: "My favourite colour is blue." },
    ],
  },
  'vocab-ao': {
    id: 'vocab-ao',
    word: { ja: '青', reading: 'あお', romaji: 'ao', en: "blue" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'color', 'N5'],
    exampleSentences: [
      { ja: '青が好きです。', furigana: 'あおがすきです。', en: "I like blue." },
    ],
  },
  'vocab-aka': {
    id: 'vocab-aka',
    word: { ja: '赤', reading: 'あか', romaji: 'aka', en: "red" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'color', 'N5'],
    exampleSentences: [
      { ja: '赤のペンを使います。', furigana: 'あかのペンをつかいます。', en: "I use a red pen." },
    ],
  },
  'vocab-shiro': {
    id: 'vocab-shiro',
    word: { ja: '白', reading: 'しろ', romaji: 'shiro', en: "white" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'color', 'N5'],
    exampleSentences: [
      { ja: '白のシャツを買います。', furigana: 'しろのシャツをかいます。', en: "I buy a white shirt." },
    ],
  },
  'vocab-kuro': {
    id: 'vocab-kuro',
    word: { ja: '黒', reading: 'くろ', romaji: 'kuro', en: "black" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'color', 'N5'],
    exampleSentences: [
      { ja: '黒のかばんです。', furigana: 'くろのかばんです。', en: "It's a black bag." },
    ],
  },
  'vocab-kiiro': {
    id: 'vocab-kiiro',
    word: { ja: '黄色', reading: 'きいろ', romaji: 'kiiro', en: "yellow" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'color', 'N5'],
    exampleSentences: [
      { ja: '黄色の花です。', furigana: 'きいろのはなです。', en: "It's a yellow flower." },
    ],
  },
  'vocab-midori': {
    id: 'vocab-midori',
    word: { ja: '緑', reading: 'みどり', romaji: 'midori', en: "green" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'color', 'N5'],
    exampleSentences: [
      { ja: '緑が多い町です。', furigana: 'みどりがおおいまちです。', en: "It's a town with lots of greenery." },
    ],
  },
  'vocab-tsuma': {
    id: 'vocab-tsuma',
    word: { ja: '妻', reading: 'つま', romaji: 'tsuma', en: "wife" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'family', 'N5'],
    exampleSentences: [
      { ja: '妻と旅行します。', furigana: 'つまとりょこうします。', en: "I travel with my wife." },
    ],
  },
  'vocab-otto': {
    id: 'vocab-otto',
    word: { ja: '夫', reading: 'おっと', romaji: 'otto', en: "husband" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'family', 'N5'],
    exampleSentences: [
      { ja: '夫は医者です。', furigana: 'おっとはいしゃです。', en: "My husband is a doctor." },
    ],
  },
  'vocab-musuko': {
    id: 'vocab-musuko',
    word: { ja: '息子', reading: 'むすこ', romaji: 'musuko', en: "son" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'family', 'N5'],
    exampleSentences: [
      { ja: '息子は学生です。', furigana: 'むすこはがくせいです。', en: "My son is a student." },
    ],
  },
  'vocab-musume': {
    id: 'vocab-musume',
    word: { ja: '娘', reading: 'むすめ', romaji: 'musume', en: "daughter" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'family', 'N5'],
    exampleSentences: [
      { ja: '娘は五歳です。', furigana: 'むすめはごさいです。', en: "My daughter is five years old." },
    ],
  },
  'vocab-sofu': {
    id: 'vocab-sofu',
    word: { ja: '祖父', reading: 'そふ', romaji: 'sofu', en: "grandfather" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'family', 'N5'],
    exampleSentences: [
      { ja: '祖父は元気です。', furigana: 'そふはげんきです。', en: "My grandfather is well." },
    ],
  },
  'vocab-sobo': {
    id: 'vocab-sobo',
    word: { ja: '祖母', reading: 'そぼ', romaji: 'sobo', en: "grandmother" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'family', 'N5'],
    exampleSentences: [
      { ja: '祖母に会いました。', furigana: 'そぼにあいました。', en: "I met my grandmother." },
    ],
  },
  'vocab-okusan': {
    id: 'vocab-okusan',
    word: { ja: '奥さん', reading: 'おくさん', romaji: 'okusan', en: "(someone else's) wife" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'family', 'N5'],
    exampleSentences: [
      { ja: '奥さんは先生です。', furigana: 'おくさんはせんせいです。', en: "His wife is a teacher." },
    ],
  },
  'vocab-minasan': {
    id: 'vocab-minasan',
    word: { ja: '皆さん', reading: 'みなさん', romaji: 'minasan', en: "everyone (polite)" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'people', 'N5'],
    exampleSentences: [
      { ja: '皆さん、おはようございます。', furigana: 'みなさん、おはようございます。', en: "Good morning, everyone." },
    ],
  },
  'vocab-jibun': {
    id: 'vocab-jibun',
    word: { ja: '自分', reading: 'じぶん', romaji: 'jibun', en: "oneself" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'people', 'N5'],
    exampleSentences: [
      { ja: '自分で作りました。', furigana: 'じぶんでつくりました。', en: "I made it myself." },
    ],
  },
  'vocab-seito': {
    id: 'vocab-seito',
    word: { ja: '生徒', reading: 'せいと', romaji: 'seito', en: "pupil; student" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'people', 'N5'],
    exampleSentences: [
      { ja: '生徒が三十人います。', furigana: 'せいとがさんじゅうにんいます。', en: "There are thirty students." },
    ],
  },
  'vocab-shio': {
    id: 'vocab-shio',
    word: { ja: '塩', reading: 'しお', romaji: 'shio', en: "salt" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'food', 'N5'],
    exampleSentences: [
      { ja: '塩を入れます。', furigana: 'しおをいれます。', en: "I add salt." },
    ],
  },
  'vocab-satou': {
    id: 'vocab-satou',
    word: { ja: '砂糖', reading: 'さとう', romaji: 'satou', en: "sugar" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'food', 'N5'],
    exampleSentences: [
      { ja: '砂糖は甘いです。', furigana: 'さとうはあまいです。', en: "Sugar is sweet." },
    ],
  },
  'vocab-kome': {
    id: 'vocab-kome',
    word: { ja: '米', reading: 'こめ', romaji: 'kome', en: "rice (uncooked)" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'food', 'N5'],
    exampleSentences: [
      { ja: '米を買います。', furigana: 'こめをかいます。', en: "I buy rice." },
    ],
  },
  'vocab-bentou': {
    id: 'vocab-bentou',
    word: { ja: '弁当', reading: 'べんとう', romaji: 'bentou', en: "boxed lunch" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'food', 'N5'],
    exampleSentences: [
      { ja: '弁当を持って行きます。', furigana: 'べんとうをもっていきます。', en: "I take a lunchbox with me." },
    ],
  },
  'vocab-okashi': {
    id: 'vocab-okashi',
    word: { ja: 'お菓子', reading: 'おかし', romaji: 'okashi', en: "sweets; snacks" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'food', 'N5'],
    exampleSentences: [
      { ja: 'お菓子が好きです。', furigana: 'おかしがすきです。', en: "I like sweets." },
    ],
  },
  'vocab-tabemono': {
    id: 'vocab-tabemono',
    word: { ja: '食べ物', reading: 'たべもの', romaji: 'tabemono', en: "food" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'food', 'N5'],
    exampleSentences: [
      { ja: '好きな食べ物は何ですか。', furigana: 'すきなたべものはなんですか。', en: "What is your favourite food?" },
    ],
  },
  'vocab-hirugohan': {
    id: 'vocab-hirugohan',
    word: { ja: '昼ご飯', reading: 'ひるごはん', romaji: 'hirugohan', en: "lunch" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'food', 'N5'],
    exampleSentences: [
      { ja: '昼ご飯を食べました。', furigana: 'ひるごはんをたべました。', en: "I ate lunch." },
    ],
  },
  'vocab-bangohan': {
    id: 'vocab-bangohan',
    word: { ja: '晩ご飯', reading: 'ばんごはん', romaji: 'bangohan', en: "dinner" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'food', 'N5'],
    exampleSentences: [
      { ja: '晩ご飯を作ります。', furigana: 'ばんごはんをつくります。', en: "I make dinner." },
    ],
  },
  'vocab-onaka': {
    id: 'vocab-onaka',
    word: { ja: 'お腹', reading: 'おなか', romaji: 'onaka', en: "stomach; belly" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'body', 'N5'],
    exampleSentences: [
      { ja: 'お腹がすきました。', furigana: 'おなかがすきました。', en: "I'm hungry." },
    ],
  },
  'vocab-se': {
    id: 'vocab-se',
    word: { ja: '背', reading: 'せ', romaji: 'se', en: "height; back" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'body', 'N5'],
    exampleSentences: [
      { ja: '背が高いです。', furigana: 'せがたかいです。', en: "He is tall." },
    ],
  },
  'vocab-ude': {
    id: 'vocab-ude',
    word: { ja: '腕', reading: 'うで', romaji: 'ude', en: "arm" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'body', 'N5'],
    exampleSentences: [
      { ja: '腕が痛いです。', furigana: 'うでがいたいです。', en: "My arm hurts." },
    ],
  },
  'vocab-aji': {
    id: 'vocab-aji',
    word: { ja: '味', reading: 'あじ', romaji: 'aji', en: "taste" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'food', 'N5'],
    exampleSentences: [
      { ja: '味がいいです。', furigana: 'あじがいいです。', en: "The taste is good." },
    ],
  },
  'vocab-hanashi': {
    id: 'vocab-hanashi',
    word: { ja: '話', reading: 'はなし', romaji: 'hanashi', en: "story; talk" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'basic', 'N5'],
    exampleSentences: [
      { ja: '面白い話を聞きました。', furigana: 'おもしろいはなしをききました。', en: "I heard an interesting story." },
    ],
  },
  'vocab-mono': {
    id: 'vocab-mono',
    word: { ja: '物', reading: 'もの', romaji: 'mono', en: "thing (object)" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'basic', 'N5'],
    exampleSentences: [
      { ja: '大切な物です。', furigana: 'たいせつなものです。', en: "It's an important thing." },
    ],
  },
  'vocab-koto': {
    id: 'vocab-koto',
    word: { ja: '事', reading: 'こと', romaji: 'koto', en: "thing (matter)" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'basic', 'N5'],
    exampleSentences: [
      { ja: '大事な事を話します。', furigana: 'だいじなことをはなします。', en: "I'll talk about an important matter." },
    ],
  },
  'vocab-iken': {
    id: 'vocab-iken',
    word: { ja: '意見', reading: 'いけん', romaji: 'iken', en: "opinion" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'basic', 'N5'],
    exampleSentences: [
      { ja: '意見を言います。', furigana: 'いけんをいいます。', en: "I state my opinion." },
    ],
  },
  'vocab-yakusoku': {
    id: 'vocab-yakusoku',
    word: { ja: '約束', reading: 'やくそく', romaji: 'yakusoku', en: "promise" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'basic', 'N5'],
    exampleSentences: [
      { ja: '約束を守ります。', furigana: 'やくそくをまもります。', en: "I keep my promise." },
    ],
  },
  'vocab-keiken': {
    id: 'vocab-keiken',
    word: { ja: '経験', reading: 'けいけん', romaji: 'keiken', en: "experience" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'basic', 'N5'],
    exampleSentences: [
      { ja: 'いい経験でした。', furigana: 'いいけいけんでした。', en: "It was a good experience." },
    ],
  },
  'vocab-shumi': {
    id: 'vocab-shumi',
    word: { ja: '趣味', reading: 'しゅみ', romaji: 'shumi', en: "hobby" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'hobby', 'N5'],
    exampleSentences: [
      { ja: '趣味は音楽です。', furigana: 'しゅみはおんがくです。', en: "My hobby is music." },
    ],
  },
  'vocab-yume': {
    id: 'vocab-yume',
    word: { ja: '夢', reading: 'ゆめ', romaji: 'yume', en: "dream" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'basic', 'N5'],
    exampleSentences: [
      { ja: 'いい夢を見ました。', furigana: 'いいゆめをみました。', en: "I had a good dream." },
    ],
  },
  'vocab-kyoukasho': {
    id: 'vocab-kyoukasho',
    word: { ja: '教科書', reading: 'きょうかしょ', romaji: 'kyoukasho', en: "textbook" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'study', 'N5'],
    exampleSentences: [
      { ja: '教科書を開きます。', furigana: 'きょうかしょをひらきます。', en: "I open the textbook." },
    ],
  },
  'vocab-keshigomu': {
    id: 'vocab-keshigomu',
    word: { ja: '消しゴム', reading: 'けしゴム', romaji: 'keshigomu', en: "eraser" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'study', 'N5'],
    exampleSentences: [
      { ja: '消しゴムを貸してください。', furigana: 'けしごむをかしてください。', en: "Please lend me an eraser." },
    ],
  },
  'vocab-yasumi': {
    id: 'vocab-yasumi',
    word: { ja: '休み', reading: 'やすみ', romaji: 'yasumi', en: "holiday; rest" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'time', 'N5'],
    exampleSentences: [
      { ja: '明日は休みです。', furigana: 'あしたはやすみです。', en: "Tomorrow is a day off." },
    ],
  },
  'vocab-byou': {
    id: 'vocab-byou',
    word: { ja: '秒', reading: 'びょう', romaji: 'byou', en: "second (time)" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'time', 'N5'],
    exampleSentences: [
      { ja: '三十秒待ちます。', furigana: 'さんじゅうびょうまちます。', en: "I wait thirty seconds." },
    ],
  },
  'vocab-shuukan': {
    id: 'vocab-shuukan',
    word: { ja: '週間', reading: 'しゅうかん', romaji: 'shuukan', en: "week (counter)" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'time', 'N5'],
    exampleSentences: [
      { ja: '二週間かかります。', furigana: 'にしゅうかんかかります。', en: "It takes two weeks." },
    ],
  },
  'vocab-kondo': {
    id: 'vocab-kondo',
    word: { ja: '今度', reading: 'こんど', romaji: 'kondo', en: "next time" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'time', 'N5'],
    exampleSentences: [
      { ja: '今度、一緒に行きましょう。', furigana: 'こんど、いっしょにいきましょう。', en: "Let's go together next time." },
    ],
  },
  'vocab-hiru': {
    id: 'vocab-hiru',
    word: { ja: '昼', reading: 'ひる', romaji: 'hiru', en: "noon; daytime" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'time', 'N5'],
    exampleSentences: [
      { ja: '昼に食べます。', furigana: 'ひるにたべます。', en: "I eat at noon." },
    ],
  },
  'vocab-tokuni': {
    id: 'vocab-tokuni',
    word: { ja: '特に', reading: 'とくに', romaji: 'tokuni', en: "especially" },
    wordClass: 'adverb',
    jlptLevel: 'N5',
    tags: ['adverb', 'basic', 'N5'],
    exampleSentences: [
      { ja: '特に問題はありません。', furigana: 'とくにもんだいはありません。', en: "There is no particular problem." },
    ],
  },
  'vocab-hontouni': {
    id: 'vocab-hontouni',
    word: { ja: '本当に', reading: 'ほんとうに', romaji: 'hontouni', en: "really" },
    wordClass: 'adverb',
    jlptLevel: 'N5',
    tags: ['adverb', 'basic', 'N5'],
    exampleSentences: [
      { ja: '本当にありがとう。', furigana: 'ほんとうにありがとう。', en: "Thank you really." },
    ],
  },
  'vocab-hontou': {
    id: 'vocab-hontou',
    word: { ja: '本当', reading: 'ほんとう', romaji: 'hontou', en: "truth; real" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'basic', 'N5'],
    exampleSentences: [
      { ja: 'それは本当ですか。', furigana: 'それはほんとうですか。', en: "Is that true?" },
    ],
  },
  'vocab-tatoeba': {
    id: 'vocab-tatoeba',
    word: { ja: '例えば', reading: 'たとえば', romaji: 'tatoeba', en: "for example" },
    wordClass: 'adverb',
    jlptLevel: 'N5',
    tags: ['adverb', 'basic', 'N5'],
    exampleSentences: [
      { ja: '例えば、りんごです。', furigana: 'たとえば、りんごです。', en: "For example, an apple." },
    ],
  },
  'vocab-daitai': {
    id: 'vocab-daitai',
    word: { ja: '大体', reading: 'だいたい', romaji: 'daitai', en: "roughly; mostly" },
    wordClass: 'adverb',
    jlptLevel: 'N5',
    tags: ['adverb', 'quantity', 'N5'],
    exampleSentences: [
      { ja: '大体分かりました。', furigana: 'だいたいわかりました。', en: "I understood roughly." },
    ],
  },
  'vocab-hotondo': {
    id: 'vocab-hotondo',
    word: { ja: 'ほとんど', reading: 'ほとんど', romaji: 'hotondo', en: "almost; hardly" },
    wordClass: 'adverb',
    jlptLevel: 'N5',
    tags: ['adverb', 'quantity', 'N5'],
    exampleSentences: [
      { ja: 'ほとんど終わりました。', furigana: 'ほとんどおわりました。', en: "It's almost finished." },
    ],
  },
  'vocab-zutto': {
    id: 'vocab-zutto',
    word: { ja: 'ずっと', reading: 'ずっと', romaji: 'zutto', en: "the whole time; far more" },
    wordClass: 'adverb',
    jlptLevel: 'N5',
    tags: ['adverb', 'time', 'N5'],
    exampleSentences: [
      { ja: 'ずっと待っていました。', furigana: 'ずっとまっていました。', en: "I was waiting the whole time." },
    ],
  },
  'vocab-kitto': {
    id: 'vocab-kitto',
    word: { ja: 'きっと', reading: 'きっと', romaji: 'kitto', en: "surely" },
    wordClass: 'adverb',
    jlptLevel: 'N5',
    tags: ['adverb', 'basic', 'N5'],
    exampleSentences: [
      { ja: 'きっと来ます。', furigana: 'きっときます。', en: "He will surely come." },
    ],
  },
  'vocab-kanarazu': {
    id: 'vocab-kanarazu',
    word: { ja: '必ず', reading: 'かならず', romaji: 'kanarazu', en: "without fail" },
    wordClass: 'adverb',
    jlptLevel: 'N5',
    tags: ['adverb', 'basic', 'N5'],
    exampleSentences: [
      { ja: '必ず行きます。', furigana: 'かならずいきます。', en: "I will definitely go." },
    ],
  },
  'vocab-betsubetsu': {
    id: 'vocab-betsubetsu',
    word: { ja: '別々', reading: 'べつべつ', romaji: 'betsubetsu', en: "separate" },
    wordClass: 'na-adjective',
    jlptLevel: 'N5',
    tags: ['na-adjective', 'basic', 'N5'],
    exampleSentences: [
      { ja: '別々に払います。', furigana: 'べつべつにはらいます。', en: "We'll pay separately." },
    ],
  },
  'vocab-futsuu': {
    id: 'vocab-futsuu',
    word: { ja: '普通', reading: 'ふつう', romaji: 'futsuu', en: "ordinary; usual" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'basic', 'N5'],
    exampleSentences: [
      { ja: '普通の日です。', furigana: 'ふつうのひです。', en: "It's an ordinary day." },
    ],
  },
  'vocab-issho-2': {
    id: 'vocab-issho-2',
    word: { ja: '一緒', reading: 'いっしょ', romaji: 'issho', en: "together" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'basic', 'N5'],
    exampleSentences: [
      { ja: '一緒に帰りましょう。', furigana: 'いっしょにかえりましょう。', en: "Let's go home together." },
    ],
  },
  'vocab-souji': {
    id: 'vocab-souji',
    word: { ja: '掃除', reading: 'そうじ', romaji: 'souji', en: "cleaning" },
    wordClass: 'verb-irregular',
    jlptLevel: 'N5',
    tags: ['verb-irregular', 'house', 'N5'],
    exampleSentences: [
      { ja: '部屋を掃除します。', furigana: 'へやをそうじします。', en: "I clean the room." },
    ],
  },
  'vocab-sentaku': {
    id: 'vocab-sentaku',
    word: { ja: '洗濯', reading: 'せんたく', romaji: 'sentaku', en: "laundry" },
    wordClass: 'verb-irregular',
    jlptLevel: 'N5',
    tags: ['verb-irregular', 'house', 'N5'],
    exampleSentences: [
      { ja: '洗濯をしました。', furigana: 'せんたくをしました。', en: "I did the laundry." },
    ],
  },
  'vocab-junbi': {
    id: 'vocab-junbi',
    word: { ja: '準備', reading: 'じゅんび', romaji: 'junbi', en: "preparation" },
    wordClass: 'verb-irregular',
    jlptLevel: 'N5',
    tags: ['verb-irregular', 'basic', 'N5'],
    exampleSentences: [
      { ja: '旅行の準備をします。', furigana: 'りょこうのじゅんびをします。', en: "I prepare for the trip." },
    ],
  },
  'vocab-youi': {
    id: 'vocab-youi',
    word: { ja: '用意', reading: 'ようい', romaji: 'youi', en: "preparation" },
    wordClass: 'verb-irregular',
    jlptLevel: 'N5',
    tags: ['verb-irregular', 'basic', 'N5'],
    exampleSentences: [
      { ja: '朝ご飯を用意します。', furigana: 'あさごはんをよういします。', en: "I prepare breakfast." },
    ],
  },
  'vocab-shinpai': {
    id: 'vocab-shinpai',
    word: { ja: '心配', reading: 'しんぱい', romaji: 'shinpai', en: "worry" },
    wordClass: 'verb-irregular',
    jlptLevel: 'N5',
    tags: ['verb-irregular', 'feeling', 'N5'],
    exampleSentences: [
      { ja: '心配しないでください。', furigana: 'しんぱいしないでください。', en: "Please don't worry." },
    ],
  },
  'vocab-annai': {
    id: 'vocab-annai',
    word: { ja: '案内', reading: 'あんない', romaji: 'annai', en: "guidance" },
    wordClass: 'verb-irregular',
    jlptLevel: 'N5',
    tags: ['verb-irregular', 'travel', 'N5'],
    exampleSentences: [
      { ja: '町を案内します。', furigana: 'まちをあんないします。', en: "I'll show you around the town." },
    ],
  },
  'vocab-soudan': {
    id: 'vocab-soudan',
    word: { ja: '相談', reading: 'そうだん', romaji: 'soudan', en: "consultation" },
    wordClass: 'verb-irregular',
    jlptLevel: 'N5',
    tags: ['verb-irregular', 'basic', 'N5'],
    exampleSentences: [
      { ja: '先生に相談します。', furigana: 'せんせいにそうだんします。', en: "I consult the teacher." },
    ],
  },
  'vocab-shoutai': {
    id: 'vocab-shoutai',
    word: { ja: '招待', reading: 'しょうたい', romaji: 'shoutai', en: "invitation" },
    wordClass: 'verb-irregular',
    jlptLevel: 'N5',
    tags: ['verb-irregular', 'basic', 'N5'],
    exampleSentences: [
      { ja: '友達を招待します。', furigana: 'ともだちをしょうたいします。', en: "I invite my friend." },
    ],
  },
  'vocab-sotsugyou': {
    id: 'vocab-sotsugyou',
    word: { ja: '卒業', reading: 'そつぎょう', romaji: 'sotsugyou', en: "graduation" },
    wordClass: 'verb-irregular',
    jlptLevel: 'N5',
    tags: ['verb-irregular', 'study', 'N5'],
    exampleSentences: [
      { ja: '大学を卒業しました。', furigana: 'だいがくをそつぎょうしました。', en: "I graduated from university." },
    ],
  },
  'vocab-nyuugaku': {
    id: 'vocab-nyuugaku',
    word: { ja: '入学', reading: 'にゅうがく', romaji: 'nyuugaku', en: "school entrance" },
    wordClass: 'verb-irregular',
    jlptLevel: 'N5',
    tags: ['verb-irregular', 'study', 'N5'],
    exampleSentences: [
      { ja: '四月に入学します。', furigana: 'しがつににゅうがくします。', en: "I enter school in April." },
    ],
  },
  'vocab-kakaru': {
    id: 'vocab-kakaru',
    word: { ja: 'かかる', reading: 'かかる', romaji: 'kakaru', en: "to take (time/money)" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: '一時間かかります。', furigana: 'いちじかんかかります。', en: "It takes one hour." },
    ],
  },
  'vocab-kakeru': {
    id: 'vocab-kakeru',
    word: { ja: 'かける', reading: 'かける', romaji: 'kakeru', en: "to hang; to make (a call)" },
    wordClass: 'verb-ru',
    jlptLevel: 'N5',
    tags: ['verb-ru', 'verb', 'N5'],
    exampleSentences: [
      { ja: '電話をかけます。', furigana: 'でんわをかけます。', en: "I make a phone call." },
    ],
  },
  'vocab-tsukeru': {
    id: 'vocab-tsukeru',
    word: { ja: 'つける', reading: 'つける', romaji: 'tsukeru', en: "to turn on; to attach" },
    wordClass: 'verb-ru',
    jlptLevel: 'N5',
    tags: ['verb-ru', 'verb', 'N5'],
    exampleSentences: [
      { ja: '電気をつけます。', furigana: 'でんきをつけます。', en: "I turn on the light." },
    ],
  },
  'vocab-narabu': {
    id: 'vocab-narabu',
    word: { ja: '並ぶ', reading: 'ならぶ', romaji: 'narabu', en: "to line up" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: '店の前に並びます。', furigana: 'みせのまえにならびます。', en: "I line up in front of the shop." },
    ],
  },
  'vocab-ochiru': {
    id: 'vocab-ochiru',
    word: { ja: '落ちる', reading: 'おちる', romaji: 'ochiru', en: "to fall" },
    wordClass: 'verb-ru',
    jlptLevel: 'N5',
    tags: ['verb-ru', 'verb', 'N5'],
    exampleSentences: [
      { ja: '財布が落ちました。', furigana: 'さいふがおちました。', en: "My wallet fell." },
    ],
  },
  'vocab-hirou': {
    id: 'vocab-hirou',
    word: { ja: '拾う', reading: 'ひろう', romaji: 'hirou', en: "to pick up" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: 'ごみを拾います。', furigana: 'ごみをひろいます。', en: "I pick up rubbish." },
    ],
  },
  'vocab-sawaru': {
    id: 'vocab-sawaru',
    word: { ja: '触る', reading: 'さわる', romaji: 'sawaru', en: "to touch" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: '触らないでください。', furigana: 'さわらないでください。', en: "Please don't touch." },
    ],
  },
  'vocab-shiraberu': {
    id: 'vocab-shiraberu',
    word: { ja: '調べる', reading: 'しらべる', romaji: 'shiraberu', en: "to look up; to investigate" },
    wordClass: 'verb-ru',
    jlptLevel: 'N5',
    tags: ['verb-ru', 'verb', 'N5'],
    exampleSentences: [
      { ja: '意味を調べます。', furigana: 'いみをしらべます。', en: "I look up the meaning." },
    ],
  },
  'vocab-kuraberu': {
    id: 'vocab-kuraberu',
    word: { ja: '比べる', reading: 'くらべる', romaji: 'kuraberu', en: "to compare" },
    wordClass: 'verb-ru',
    jlptLevel: 'N5',
    tags: ['verb-ru', 'verb', 'N5'],
    exampleSentences: [
      { ja: '二つを比べます。', furigana: 'ふたつをくらべます。', en: "I compare the two." },
    ],
  },
  'vocab-kawaru': {
    id: 'vocab-kawaru',
    word: { ja: '変わる', reading: 'かわる', romaji: 'kawaru', en: "to change (intransitive)" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: '天気が変わりました。', furigana: 'てんきがかわりました。', en: "The weather changed." },
    ],
  },
  'vocab-kaeru': {
    id: 'vocab-kaeru',
    word: { ja: '変える', reading: 'かえる', romaji: 'kaeru', en: "to change (transitive)" },
    wordClass: 'verb-ru',
    jlptLevel: 'N5',
    tags: ['verb-ru', 'verb', 'N5'],
    exampleSentences: [
      { ja: '計画を変えます。', furigana: 'けいかくをかえます。', en: "I change the plan." },
    ],
  },
  'vocab-tsuzuku': {
    id: 'vocab-tsuzuku',
    word: { ja: '続く', reading: 'つづく', romaji: 'tsuzuku', en: "to continue (intransitive)" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: '雨が続きます。', furigana: 'あめがつづきます。', en: "The rain continues." },
    ],
  },
  'vocab-tomeru': {
    id: 'vocab-tomeru',
    word: { ja: '止める', reading: 'とめる', romaji: 'tomeru', en: "to stop (transitive)" },
    wordClass: 'verb-ru',
    jlptLevel: 'N5',
    tags: ['verb-ru', 'verb', 'N5'],
    exampleSentences: [
      { ja: '車を止めます。', furigana: 'くるまをとめます。', en: "I stop the car." },
    ],
  },
  'vocab-todoku': {
    id: 'vocab-todoku',
    word: { ja: '届く', reading: 'とどく', romaji: 'todoku', en: "to reach; to arrive" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: '手紙が届きました。', furigana: 'てがみがとどきました。', en: "The letter arrived." },
    ],
  },
  'vocab-atsumaru': {
    id: 'vocab-atsumaru',
    word: { ja: '集まる', reading: 'あつまる', romaji: 'atsumaru', en: "to gather (intransitive)" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: '駅に集まります。', furigana: 'えきにあつまります。', en: "We gather at the station." },
    ],
  },
  'vocab-fueru': {
    id: 'vocab-fueru',
    word: { ja: '増える', reading: 'ふえる', romaji: 'fueru', en: "to increase" },
    wordClass: 'verb-ru',
    jlptLevel: 'N5',
    tags: ['verb-ru', 'verb', 'N5'],
    exampleSentences: [
      { ja: '人が増えました。', furigana: 'ひとがふえました。', en: "The number of people increased." },
    ],
  },
  'vocab-naosu': {
    id: 'vocab-naosu',
    word: { ja: '直す', reading: 'なおす', romaji: 'naosu', en: "to fix; to correct" },
    wordClass: 'verb-u',
    jlptLevel: 'N5',
    tags: ['verb-u', 'verb', 'N5'],
    exampleSentences: [
      { ja: '時計を直します。', furigana: 'とけいをなおします。', en: "I fix the watch." },
    ],
  },
  'vocab-kowareru': {
    id: 'vocab-kowareru',
    word: { ja: '壊れる', reading: 'こわれる', romaji: 'kowareru', en: "to break (intransitive)" },
    wordClass: 'verb-ru',
    jlptLevel: 'N5',
    tags: ['verb-ru', 'verb', 'N5'],
    exampleSentences: [
      { ja: 'パソコンが壊れました。', furigana: 'パソコンがこわれました。', en: "The computer broke." },
    ],
  },
  'vocab-saifu': {
    id: 'vocab-saifu',
    word: { ja: '財布', reading: 'さいふ', romaji: 'saifu', en: "wallet" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'object', 'N5'],
    exampleSentences: [
      { ja: '財布をなくしました。', furigana: 'さいふをなくしました。', en: "I lost my wallet." },
    ],
  },
  'vocab-kagi': {
    id: 'vocab-kagi',
    word: { ja: '鍵', reading: 'かぎ', romaji: 'kagi', en: "key" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'object', 'N5'],
    exampleSentences: [
      { ja: '鍵を忘れました。', furigana: 'かぎをわすれました。', en: "I forgot the key." },
    ],
  },
  'vocab-kasa': {
    id: 'vocab-kasa',
    word: { ja: '傘', reading: 'かさ', romaji: 'kasa', en: "umbrella" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'object', 'N5'],
    exampleSentences: [
      { ja: '傘を持って行きます。', furigana: 'かさをもっていきます。', en: "I take an umbrella." },
    ],
  },
  'vocab-tokei': {
    id: 'vocab-tokei',
    word: { ja: '時計', reading: 'とけい', romaji: 'tokei', en: "clock; watch" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'object', 'N5'],
    exampleSentences: [
      { ja: '時計を見ます。', furigana: 'とけいをみます。', en: "I look at the clock." },
    ],
  },
  'vocab-denchi': {
    id: 'vocab-denchi',
    word: { ja: '電池', reading: 'でんち', romaji: 'denchi', en: "battery" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'object', 'N5'],
    exampleSentences: [
      { ja: '電池を買います。', furigana: 'でんちをかいます。', en: "I buy batteries." },
    ],
  },
  'vocab-tegami': {
    id: 'vocab-tegami',
    word: { ja: '手紙', reading: 'てがみ', romaji: 'tegami', en: "letter" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'object', 'N5'],
    exampleSentences: [
      { ja: '手紙を書きます。', furigana: 'てがみをかきます。', en: "I write a letter." },
    ],
  },
  'vocab-fuutou': {
    id: 'vocab-fuutou',
    word: { ja: '封筒', reading: 'ふうとう', romaji: 'fuutou', en: "envelope" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'object', 'N5'],
    exampleSentences: [
      { ja: '封筒に入れます。', furigana: 'ふうとうにいれます。', en: "I put it in an envelope." },
    ],
  },
  'vocab-kitte': {
    id: 'vocab-kitte',
    word: { ja: '切手', reading: 'きって', romaji: 'kitte', en: "postage stamp" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'object', 'N5'],
    exampleSentences: [
      { ja: '切手をはります。', furigana: 'きってをはります。', en: "I stick on a stamp." },
    ],
  },
  'vocab-zasshi': {
    id: 'vocab-zasshi',
    word: { ja: '雑誌', reading: 'ざっし', romaji: 'zasshi', en: "magazine" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'object', 'N5'],
    exampleSentences: [
      { ja: '雑誌を読みます。', furigana: 'ざっしをよみます。', en: "I read a magazine." },
    ],
  },
  'vocab-chawan': {
    id: 'vocab-chawan',
    word: { ja: '茶碗', reading: 'ちゃわん', romaji: 'chawan', en: "rice bowl" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'object', 'N5'],
    exampleSentences: [
      { ja: '茶碗でご飯を食べます。', furigana: 'ちゃわんでごはんをたべます。', en: "I eat rice from a bowl." },
    ],
  },
  'vocab-hashi': {
    id: 'vocab-hashi',
    word: { ja: '箸', reading: 'はし', romaji: 'hashi', en: "chopsticks" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'object', 'N5'],
    exampleSentences: [
      { ja: '箸で食べます。', furigana: 'はしでたべます。', en: "I eat with chopsticks." },
    ],
  },
  'vocab-sara': {
    id: 'vocab-sara',
    word: { ja: '皿', reading: 'さら', romaji: 'sara', en: "plate; dish" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'object', 'N5'],
    exampleSentences: [
      { ja: '皿を洗います。', furigana: 'さらをあらいます。', en: "I wash the dishes." },
    ],
  },
  'vocab-hashi-2': {
    id: 'vocab-hashi-2',
    word: { ja: '橋', reading: 'はし', romaji: 'hashi', en: "bridge" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'place', 'N5'],
    exampleSentences: [
      { ja: '橋を渡ります。', furigana: 'はしをわたります。', en: "I cross the bridge." },
    ],
  },
  'vocab-kado': {
    id: 'vocab-kado',
    word: { ja: '角', reading: 'かど', romaji: 'kado', en: "corner" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'place', 'N5'],
    exampleSentences: [
      { ja: '角を曲がってください。', furigana: 'かくをまがってください。', en: "Please turn at the corner." },
    ],
  },
  'vocab-tonari': {
    id: 'vocab-tonari',
    word: { ja: '隣', reading: 'となり', romaji: 'tonari', en: "next door; beside" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'position', 'N5'],
    exampleSentences: [
      { ja: '隣に座ります。', furigana: 'となりにすわります。', en: "I sit next to you." },
    ],
  },
  'vocab-chikaku': {
    id: 'vocab-chikaku',
    word: { ja: '近く', reading: 'ちかく', romaji: 'chikaku', en: "nearby" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'position', 'N5'],
    exampleSentences: [
      { ja: '駅の近くに住んでいます。', furigana: 'えきのちかくにすんでいます。', en: "I live near the station." },
    ],
  },
  'vocab-oku-2': {
    id: 'vocab-oku-2',
    word: { ja: '奥', reading: 'おく', romaji: 'oku', en: "inner part; back" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'position', 'N5'],
    exampleSentences: [
      { ja: '店の奥にあります。', furigana: 'みせのおくにあります。', en: "It's at the back of the shop." },
    ],
  },
  'vocab-mannaka': {
    id: 'vocab-mannaka',
    word: { ja: '真ん中', reading: 'まんなか', romaji: 'mannaka', en: "the middle" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'position', 'N5'],
    exampleSentences: [
      { ja: '部屋の真ん中に置きます。', furigana: 'へやのまんなかにおきます。', en: "I put it in the middle of the room." },
    ],
  },
  'vocab-yoko': {
    id: 'vocab-yoko',
    word: { ja: '横', reading: 'よこ', romaji: 'yoko', en: "side" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'position', 'N5'],
    exampleSentences: [
      { ja: '横に置いてください。', furigana: 'よこにおいてください。', en: "Please put it beside." },
    ],
  },
  'vocab-mukou': {
    id: 'vocab-mukou',
    word: { ja: '向こう', reading: 'むこう', romaji: 'mukou', en: "over there; beyond" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'position', 'N5'],
    exampleSentences: [
      { ja: '向こうに山が見えます。', furigana: 'むこうにやまがみえます。', en: "I can see a mountain over there." },
    ],
  },
  'vocab-okujou': {
    id: 'vocab-okujou',
    word: { ja: '屋上', reading: 'おくじょう', romaji: 'okujou', en: "rooftop" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'place', 'N5'],
    exampleSentences: [
      { ja: '屋上から町が見えます。', furigana: 'おくじょうからまちがみえます。', en: "You can see the town from the roof." },
    ],
  },
  'vocab-kouban': {
    id: 'vocab-kouban',
    word: { ja: '交番', reading: 'こうばん', romaji: 'kouban', en: "police box" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'place', 'N5'],
    exampleSentences: [
      { ja: '交番で道を聞きます。', furigana: 'こうばんでみちをききます。', en: "I ask for directions at the police box." },
    ],
  },
  'vocab-yuubinkyoku': {
    id: 'vocab-yuubinkyoku',
    word: { ja: '郵便局', reading: 'ゆうびんきょく', romaji: 'yuubinkyoku', en: "post office" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'place', 'N5'],
    exampleSentences: [
      { ja: '郵便局へ行きます。', furigana: 'ゆうびんきょくへいきます。', en: "I go to the post office." },
    ],
  },
  'vocab-eigakan': {
    id: 'vocab-eigakan',
    word: { ja: '映画館', reading: 'えいがかん', romaji: 'eigakan', en: "cinema" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'place', 'N5'],
    exampleSentences: [
      { ja: '映画館で映画を見ます。', furigana: 'えいがかんでえいがをみます。', en: "I watch a movie at the cinema." },
    ],
  },
  'vocab-kouen': {
    id: 'vocab-kouen',
    word: { ja: '公園', reading: 'こうえん', romaji: 'kouen', en: "park" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'place', 'N5'],
    exampleSentences: [
      { ja: '公園で遊びます。', furigana: 'こうえんであそびます。', en: "I play in the park." },
    ],
  },
  'vocab-kissaten': {
    id: 'vocab-kissaten',
    word: { ja: '喫茶店', reading: 'きっさてん', romaji: 'kissaten', en: "coffee shop" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'place', 'N5'],
    exampleSentences: [
      { ja: '喫茶店でコーヒーを飲みます。', furigana: 'きっさてんでコーヒーをのみます。', en: "I drink coffee at the coffee shop." },
    ],
  },
  'vocab-yaoya': {
    id: 'vocab-yaoya',
    word: { ja: '八百屋', reading: 'やおや', romaji: 'yaoya', en: "greengrocer" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'place', 'N5'],
    exampleSentences: [
      { ja: '八百屋で野菜を買います。', furigana: 'やおやでやさいをかいます。', en: "I buy vegetables at the greengrocer." },
    ],
  },
  'vocab-nanika': {
    id: 'vocab-nanika',
    word: { ja: '何か', reading: 'なにか', romaji: 'nanika', en: "something" },
    wordClass: 'expression',
    jlptLevel: 'N5',
    tags: ['expression', 'question', 'N5'],
    exampleSentences: [
      { ja: '何か食べますか。', furigana: 'なにかたべますか。', en: "Will you eat something?" },
    ],
  },
  'vocab-dareka': {
    id: 'vocab-dareka',
    word: { ja: '誰か', reading: 'だれか', romaji: 'dareka', en: "someone" },
    wordClass: 'expression',
    jlptLevel: 'N5',
    tags: ['expression', 'question', 'N5'],
    exampleSentences: [
      { ja: '誰かいますか。', furigana: 'だれかいますか。', en: "Is anyone there?" },
    ],
  },
  'vocab-dokoka': {
    id: 'vocab-dokoka',
    word: { ja: 'どこか', reading: 'どこか', romaji: 'dokoka', en: "somewhere" },
    wordClass: 'expression',
    jlptLevel: 'N5',
    tags: ['expression', 'question', 'N5'],
    exampleSentences: [
      { ja: 'どこかへ行きましょう。', furigana: 'どこかへいきましょう。', en: "Let's go somewhere." },
    ],
  },
  'vocab-nanimo': {
    id: 'vocab-nanimo',
    word: { ja: '何も', reading: 'なにも', romaji: 'nanimo', en: "nothing (with negative)" },
    wordClass: 'expression',
    jlptLevel: 'N5',
    tags: ['expression', 'question', 'N5'],
    exampleSentences: [
      { ja: '何もありません。', furigana: 'なにもありません。', en: "There is nothing." },
    ],
  },
  'vocab-daremo': {
    id: 'vocab-daremo',
    word: { ja: '誰も', reading: 'だれも', romaji: 'daremo', en: "nobody (with negative)" },
    wordClass: 'expression',
    jlptLevel: 'N5',
    tags: ['expression', 'question', 'N5'],
    exampleSentences: [
      { ja: '誰も来ませんでした。', furigana: 'だれもきませんでした。', en: "Nobody came." },
    ],
  },
  'vocab-ikutsuka': {
    id: 'vocab-ikutsuka',
    word: { ja: 'いくつか', reading: 'いくつか', romaji: 'ikutsuka', en: "several" },
    wordClass: 'expression',
    jlptLevel: 'N5',
    tags: ['expression', 'question', 'N5'],
    exampleSentences: [
      { ja: 'いくつか質問があります。', furigana: 'いくつかしつもんがあります。', en: "I have several questions." },
    ],
  },
  'vocab-kata': {
    id: 'vocab-kata',
    word: { ja: '方', reading: 'かた', romaji: 'kata', en: "person (polite)" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'people', 'N5'],
    exampleSentences: [
      { ja: 'あの方は先生です。', furigana: 'あのほうはせんせいです。', en: "That person is a teacher." },
    ],
  },
  'vocab-kimi': {
    id: 'vocab-kimi',
    word: { ja: '君', reading: 'きみ', romaji: 'kimi', en: "you (familiar)" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'people', 'N5'],
    exampleSentences: [
      { ja: '君はどう思いますか。', furigana: 'きみはどうおもいますか。', en: "What do you think?" },
    ],
  },
  'vocab-boku': {
    id: 'vocab-boku',
    word: { ja: '僕', reading: 'ぼく', romaji: 'boku', en: "I (male, casual)" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'people', 'N5'],
    exampleSentences: [
      { ja: '僕は学生です。', furigana: 'ぼくはがくせいです。', en: "I am a student." },
    ],
  },
  'vocab-shakai': {
    id: 'vocab-shakai',
    word: { ja: '社会', reading: 'しゃかい', romaji: 'shakai', en: "society" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'basic', 'N5'],
    exampleSentences: [
      { ja: '社会の勉強をします。', furigana: 'しゃかいのべんきょうをします。', en: "I study social studies." },
    ],
  },
  'vocab-bunka': {
    id: 'vocab-bunka',
    word: { ja: '文化', reading: 'ぶんか', romaji: 'bunka', en: "culture" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'basic', 'N5'],
    exampleSentences: [
      { ja: '日本の文化が好きです。', furigana: 'にほんのぶんかがすきです。', en: "I like Japanese culture." },
    ],
  },
  'vocab-rekishi': {
    id: 'vocab-rekishi',
    word: { ja: '歴史', reading: 'れきし', romaji: 'rekishi', en: "history" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'study', 'N5'],
    exampleSentences: [
      { ja: '歴史の本を読みます。', furigana: 'れきしのほんをよみます。', en: "I read a history book." },
    ],
  },
  'vocab-suugaku': {
    id: 'vocab-suugaku',
    word: { ja: '数学', reading: 'すうがく', romaji: 'suugaku', en: "mathematics" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'study', 'N5'],
    exampleSentences: [
      { ja: '数学が得意です。', furigana: 'すうがくがとくいです。', en: "I'm good at maths." },
    ],
  },
  'vocab-kagaku': {
    id: 'vocab-kagaku',
    word: { ja: '科学', reading: 'かがく', romaji: 'kagaku', en: "science" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'study', 'N5'],
    exampleSentences: [
      { ja: '科学に興味があります。', furigana: 'かがくにきょうみがあります。', en: "I'm interested in science." },
    ],
  },
  'vocab-ongakukai': {
    id: 'vocab-ongakukai',
    word: { ja: '音楽会', reading: 'おんがくかい', romaji: 'ongakukai', en: "concert" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'hobby', 'N5'],
    exampleSentences: [
      { ja: '音楽会に行きます。', furigana: 'おんがくかいにいきます。', en: "I go to a concert." },
    ],
  },
  'vocab-e': {
    id: 'vocab-e',
    word: { ja: '絵', reading: 'え', romaji: 'e', en: "picture; drawing" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'hobby', 'N5'],
    exampleSentences: [
      { ja: '絵をかきます。', furigana: 'えをかきます。', en: "I draw a picture." },
    ],
  },
  'vocab-ji': {
    id: 'vocab-ji',
    word: { ja: '字', reading: 'じ', romaji: 'ji', en: "character; handwriting" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'study', 'N5'],
    exampleSentences: [
      { ja: '字がきれいです。', furigana: 'じがきれいです。', en: "Your handwriting is neat." },
    ],
  },
  'vocab-koucha': {
    id: 'vocab-koucha',
    word: { ja: '紅茶', reading: 'こうちゃ', romaji: 'koucha', en: "black tea" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'food', 'N5'],
    exampleSentences: [
      { ja: '紅茶を飲みます。', furigana: 'こうちゃをのみます。', en: "I drink black tea." },
    ],
  },
  'vocab-gyuunyuu': {
    id: 'vocab-gyuunyuu',
    word: { ja: '牛乳', reading: 'ぎゅうにゅう', romaji: 'gyuunyuu', en: "milk" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'food', 'N5'],
    exampleSentences: [
      { ja: '牛乳を買います。', furigana: 'ぎゅうにゅうをかいます。', en: "I buy milk." },
    ],
  },
  'vocab-kudamonoya': {
    id: 'vocab-kudamonoya',
    word: { ja: '果物屋', reading: 'くだものや', romaji: 'kudamonoya', en: "fruit shop" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'place', 'N5'],
    exampleSentences: [
      { ja: '果物屋でりんごを買います。', furigana: 'くだものやでりんごをかいます。', en: "I buy apples at the fruit shop." },
    ],
  },
  'vocab-ryourinin': {
    id: 'vocab-ryourinin',
    word: { ja: '料理人', reading: 'りょうりにん', romaji: 'ryourinin', en: "cook" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'work', 'N5'],
    exampleSentences: [
      { ja: '料理人になりたいです。', furigana: 'りょうりじんになりたいです。', en: "I want to become a cook." },
    ],
  },
  'vocab-kaishain': {
    id: 'vocab-kaishain',
    word: { ja: '会社員', reading: 'かいしゃいん', romaji: 'kaishain', en: "office worker" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'work', 'N5'],
    exampleSentences: [
      { ja: '父は会社員です。', furigana: 'ちちはかいしゃいんです。', en: "My father is an office worker." },
    ],
  },
  'vocab-untenshu': {
    id: 'vocab-untenshu',
    word: { ja: '運転手', reading: 'うんてんしゅ', romaji: 'untenshu', en: "driver" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'work', 'N5'],
    exampleSentences: [
      { ja: 'バスの運転手です。', furigana: 'バスのうんてんしゅです。', en: "He is a bus driver." },
    ],
  },
  'vocab-keisatsu': {
    id: 'vocab-keisatsu',
    word: { ja: '警察', reading: 'けいさつ', romaji: 'keisatsu', en: "police" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'work', 'N5'],
    exampleSentences: [
      { ja: '警察に電話します。', furigana: 'けいさつにでんわします。', en: "I call the police." },
    ],
  },
  'vocab-haisha': {
    id: 'vocab-haisha',
    word: { ja: '歯医者', reading: 'はいしゃ', romaji: 'haisha', en: "dentist" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'work', 'N5'],
    exampleSentences: [
      { ja: '歯医者へ行きます。', furigana: 'はいしゃへいきます。', en: "I go to the dentist." },
    ],
  },
  'vocab-uketsuke': {
    id: 'vocab-uketsuke',
    word: { ja: '受付', reading: 'うけつけ', romaji: 'uketsuke', en: "reception" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'place', 'N5'],
    exampleSentences: [
      { ja: '受付で聞いてください。', furigana: 'うけつけできいてください。', en: "Please ask at the reception." },
    ],
  },
  'vocab-seki': {
    id: 'vocab-seki',
    word: { ja: '席', reading: 'せき', romaji: 'seki', en: "seat" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'place', 'N5'],
    exampleSentences: [
      { ja: '席に座ってください。', furigana: 'せきにすわってください。', en: "Please take a seat." },
    ],
  },
  'vocab-kaiwa': {
    id: 'vocab-kaiwa',
    word: { ja: '会話', reading: 'かいわ', romaji: 'kaiwa', en: "conversation" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'study', 'N5'],
    exampleSentences: [
      { ja: '会話の練習をします。', furigana: 'かいわのれんしゅうをします。', en: "I practise conversation." },
    ],
  },
  'vocab-hatsuon': {
    id: 'vocab-hatsuon',
    word: { ja: '発音', reading: 'はつおん', romaji: 'hatsuon', en: "pronunciation" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'study', 'N5'],
    exampleSentences: [
      { ja: '発音が難しいです。', furigana: 'はつおんがむずかしいです。', en: "The pronunciation is difficult." },
    ],
  },
  'vocab-honyaku': {
    id: 'vocab-honyaku',
    word: { ja: '翻訳', reading: 'ほんやく', romaji: 'honyaku', en: "translation" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'study', 'N5'],
    exampleSentences: [
      { ja: '翻訳をします。', furigana: 'ほんやくをします。', en: "I do translation." },
    ],
  },
  'vocab-igai': {
    id: 'vocab-igai',
    word: { ja: '以外', reading: 'いがい', romaji: 'igai', en: "except; other than" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'basic', 'N5'],
    exampleSentences: [
      { ja: '私以外はみんな来ました。', furigana: 'わたしいがいはみんなきました。', en: "Everyone except me came." },
    ],
  },
  'vocab-baai': {
    id: 'vocab-baai',
    word: { ja: '場合', reading: 'ばあい', romaji: 'baai', en: "case; situation" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'basic', 'N5'],
    exampleSentences: [
      { ja: 'その場合は電話してください。', furigana: 'そのばあいはでんわしてください。', en: "In that case, please call." },
    ],
  },
  'vocab-rikai': {
    id: 'vocab-rikai',
    word: { ja: '理解', reading: 'りかい', romaji: 'rikai', en: "understanding" },
    wordClass: 'noun',
    jlptLevel: 'N5',
    tags: ['noun', 'study', 'N5'],
    exampleSentences: [
      { ja: '理解しました。', furigana: 'りかいしました。', en: "I understood." },
    ],
  },
};
