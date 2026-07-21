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

};
