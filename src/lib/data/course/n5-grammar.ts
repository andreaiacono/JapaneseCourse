import type { GrammarPoint } from '../../models/Course.js';

export const n5Grammar: Record<string, GrammarPoint> = {
  'grammar-wa-desu': {
    id: 'grammar-wa-desu',
    title: 'は〜です / じゃありません',
    jlptLevel: 'N5',
    summary: 'The basic copula pattern for stating what something is or is not.',
    formation: 'Noun + は + Noun + です\nNoun + は + Noun + じゃありません',
    explanation:
      'は marks the topic of the sentence. です means "is/am/are" in the polite present tense. じゃありません (or ではありません) is its negative form. This pattern is used to state identity, occupation, nationality, and similar noun-predicate facts.',
    usageNotes: [
      'は is read as "wa" when used as a particle, not "ha".',
      'じゃありません is the contracted, conversational negative. ではありません is more formal.',
      'Past tense uses でした (positive) and じゃありませんでした (negative).',
    ],
    examples: [
      {
        ja: '私は学生です。',
        furigana: 'わたしはがくせいです。',
        romaji: 'Watashi wa gakusei desu.',
        en: 'I am a student.',
      },
      {
        ja: 'これは本じゃありません。',
        furigana: 'これはほんじゃありません。',
        romaji: 'Kore wa hon ja arimasen.',
        en: 'This is not a book.',
      },
    ],
    relatedPatterns: ['grammar-ka-question', 'grammar-na-adjective', 'grammar-kore-sore-are'],
    contrastedWith: [
      {
        patternId: 'grammar-arimasu-imasu',
        note: 'です states what something IS; あります/います states where something EXISTS.',
      },
    ],
    tags: ['copula', 'noun-predicate', 'negative', 'polite', 'beginner'],
  },

  'grammar-kore-sore-are': {
    id: 'grammar-kore-sore-are',
    title: 'これ / それ / あれ',
    jlptLevel: 'N5',
    summary: 'Demonstrative pronouns referring to things near the speaker (これ), near the listener (それ), or away from both (あれ).',
    formation: 'これ / それ / あれ + は + Noun + です',
    explanation:
      'Japanese demonstratives follow a three-way ko-so-a-do system based on physical or psychological distance. これ (this) refers to something near the speaker; それ (that) refers to something near the listener or just mentioned; あれ (that over there) refers to something distant from both. どれ is the interrogative form (which one?). These pronouns stand alone; when modifying a noun directly, use この/その/あの instead.',
    usageNotes: [
      'これ/それ/あれ are standalone pronouns and cannot directly precede a noun. Use この/その/あの + noun for attributive use.',
      'それ can also refer back to something mentioned in the previous sentence.',
      'あれ implies the referent is visible but far from both speakers.',
    ],
    examples: [
      {
        ja: 'これは何ですか。',
        furigana: 'これはなんですか。',
        romaji: 'Kore wa nan desu ka.',
        en: 'What is this?',
      },
      {
        ja: 'あれは富士山です。',
        furigana: 'あれはふじさんです。',
        romaji: 'Are wa Fujisan desu.',
        en: 'That (over there) is Mt. Fuji.',
      },
    ],
    relatedPatterns: ['grammar-koso-ado', 'grammar-wa-desu', 'grammar-ka-question'],
    tags: ['demonstrative', 'pronoun', 'ko-so-a-do', 'beginner'],
  },

  'grammar-no-possessive': {
    id: 'grammar-no-possessive',
    title: 'の (possessive / linking particle)',
    jlptLevel: 'N5',
    summary: 'の connects two nouns to express possession, affiliation, or a descriptive relationship, similar to "of" or "\'s" in English.',
    formation: 'Noun A + の + Noun B',
    explanation:
      "の is one of the most versatile particles in Japanese. In its core use it links two nouns so that Noun A modifies Noun B: 私の本 (my book), 日本語の先生 (Japanese language teacher), 東京の地図 (map of Tokyo). The relationship can be possessive, material, purpose, origin, or simple description.",
    usageNotes: [
      'の can replace a previously mentioned noun at the end of a phrase: 赤いのをください (Please give me the red one).',
      'Noun + の + Noun does not require a verb; it is itself a noun phrase.',
      'の can be stacked but long chains are avoided in natural speech.',
    ],
    examples: [
      {
        ja: 'これは田中さんの傘です。',
        furigana: 'これはたなかさんのかさです。',
        romaji: 'Kore wa Tanaka-san no kasa desu.',
        en: "This is Tanaka-san's umbrella.",
      },
      {
        ja: '日本語の授業は楽しいです。',
        furigana: 'にほんごのじゅぎょうはたのしいです。',
        romaji: 'Nihongo no jugyō wa tanoshii desu.',
        en: 'Japanese class is fun.',
      },
    ],
    relatedPatterns: ['grammar-wa-desu', 'grammar-to-particle'],
    tags: ['particle', 'possessive', 'noun-modification', 'beginner'],
  },

  'grammar-ka-question': {
    id: 'grammar-ka-question',
    title: 'か (question particle)',
    jlptLevel: 'N5',
    summary: 'Adding か to the end of a statement turns it into a yes/no question without changing word order.',
    formation: 'Statement + か',
    explanation:
      'In polite speech, か is appended to the end of a sentence to form a question. No inversion of subject and verb is needed. When combined with question words like 何、どこ、誰、いつ、どう, the sentence is a wh-question rather than yes/no.',
    usageNotes: [
      'In polite style, always end questions with ですか or ますか.',
      'In casual speech, か alone can sound blunt. A rising intonation is softer.',
      'か following a plain-form verb with の (〜んですか) adds a nuance of seeking confirmation.',
    ],
    examples: [
      {
        ja: 'お名前は何ですか。',
        furigana: 'おなまえはなんですか。',
        romaji: 'O-namae wa nan desu ka.',
        en: 'What is your name?',
      },
      {
        ja: '明日、暇ですか。',
        furigana: 'あした、ひまですか。',
        romaji: 'Ashita, hima desu ka.',
        en: 'Are you free tomorrow?',
      },
    ],
    relatedPatterns: ['grammar-wa-desu', 'grammar-masu-form'],
    tags: ['particle', 'question', 'polite', 'beginner'],
  },

  'grammar-arimasu-imasu': {
    id: 'grammar-arimasu-imasu',
    title: 'あります vs います (existence verbs)',
    jlptLevel: 'N5',
    summary: 'あります expresses the existence of inanimate objects; います expresses the existence of animate beings (people, animals).',
    formation: 'Inanimate Noun + が + あります\nAnimate Noun + が + います',
    explanation:
      'Both verbs mean "there is / there are / to exist / to have", but the choice depends on animacy. あります is used for things, plants, and abstract concepts. います is used for people and animals. When the location is specified, に precedes the verb: 机の上に本があります.',
    usageNotes: [
      'Plants use あります because they cannot move on their own.',
      'Robots and dolls typically use あります, but can use います if the speaker treats them as animate.',
      'For possession, が + あります/います: お金がありますか (Do you have money?).',
    ],
    examples: [
      {
        ja: '冷蔵庫の中にビールがあります。',
        furigana: 'れいぞうこのなかにビールがあります。',
        romaji: 'Reizōko no naka ni bīru ga arimasu.',
        en: 'There is beer in the refrigerator.',
      },
      {
        ja: '公園に子供たちがいます。',
        furigana: 'こうえんにこどもたちがいます。',
        romaji: 'Kōen ni kodomotachi ga imasu.',
        en: 'There are children in the park.',
      },
    ],
    relatedPatterns: ['grammar-ni-location', 'grammar-wa-desu'],
    contrastedWith: [
      {
        patternId: 'grammar-wa-desu',
        note: 'です identifies what something IS; あります/います states that something EXISTS somewhere.',
      },
    ],
    tags: ['existence', 'verb', 'animate', 'inanimate', 'beginner'],
  },

  'grammar-ni-location': {
    id: 'grammar-ni-location',
    title: 'に (location — existence / time / destination)',
    jlptLevel: 'N5',
    summary: 'に marks the location where something exists, a specific point in time, or the destination of movement.',
    formation: 'Place + に + あります / います\nTime + に + Verb\nDestination + に + 行く / 来る / 帰る',
    explanation:
      'に has multiple uses at N5. As a location particle for existence it answers "where is X?" As a time particle it marks a specific point: 月曜日に, 三時に. As a direction particle it marks the destination: 学校に行く. The key contrast with で: に marks a static location or directional endpoint, while で marks the location of an action.',
    usageNotes: [
      'に is not used with general time expressions like 今日、明日、毎日 — those need no particle.',
      'に with movement verbs marks the destination.',
      'に with あります/います marks where something passively exists.',
    ],
    examples: [
      {
        ja: '鍵はテーブルの上にあります。',
        furigana: 'かぎはテーブルのうえにあります。',
        romaji: 'Kagi wa tēburu no ue ni arimasu.',
        en: 'The key is on the table.',
      },
      {
        ja: '私は毎朝七時に起きます。',
        furigana: 'わたしはまいあさしちじにおきます。',
        romaji: 'Watashi wa maiasa shichi-ji ni okimasu.',
        en: 'I wake up at seven every morning.',
      },
    ],
    relatedPatterns: ['grammar-arimasu-imasu', 'grammar-de-location', 'grammar-koso-ado'],
    contrastedWith: [
      {
        patternId: 'grammar-de-location',
        note: 'に marks where something exists or a movement goal; で marks where an action takes place.',
      },
    ],
    tags: ['particle', 'location', 'time', 'direction', 'beginner'],
  },

  'grammar-de-location': {
    id: 'grammar-de-location',
    title: 'で (location — action / means)',
    jlptLevel: 'N5',
    summary: 'で marks the location where an action takes place, or the means/instrument used.',
    formation: 'Place + で + Action Verb\nInstrument/Means + で + Verb',
    explanation:
      'で has two main uses at N5. As a location particle it marks where an action happens: 図書館で勉強する (study at the library). As a means/instrument particle: バスで来る (come by bus), 日本語で話す (speak in Japanese). The key contrast with に is that で is dynamic (action location), while に is static (existence location or destination).',
    usageNotes: [
      'Use で, not に, when the verb describes an activity (勉強する、食べる、遊ぶ).',
      'Transportation and language use で: 電車で行く, 英語で書く.',
      'Material/cause also uses で: 木で作る, 病気で休む.',
    ],
    examples: [
      {
        ja: '私たちは学校でサッカーをします。',
        furigana: 'わたしたちはがっこうでサッカーをします。',
        romaji: 'Watashitachi wa gakkō de sakkā o shimasu.',
        en: 'We play soccer at school.',
      },
      {
        ja: '彼女は自転車で来ました。',
        furigana: 'かのじょはじてんしゃできました。',
        romaji: 'Kanojo wa jitensha de kimashita.',
        en: 'She came by bicycle.',
      },
    ],
    relatedPatterns: ['grammar-ni-location', 'grammar-wo-object'],
    contrastedWith: [
      {
        patternId: 'grammar-ni-location',
        note: 'で marks where an action occurs; に marks where something exists or the goal of movement.',
      },
    ],
    tags: ['particle', 'location', 'means', 'instrument', 'beginner'],
  },

  'grammar-wo-object': {
    id: 'grammar-wo-object',
    title: 'を (direct object particle)',
    jlptLevel: 'N5',
    summary: 'を marks the direct object of a transitive verb — the thing that the action is performed on.',
    formation: 'Noun + を + Transitive Verb',
    explanation:
      'を (pronounced "o") follows the noun directly acted upon by the verb. It is only used with transitive verbs: 本を読む, コーヒーを飲む. を also marks the space traversed by motion verbs: 公園を歩く (walk through the park).',
    usageNotes: [
      'を is only used with transitive verbs. Never use を with intransitive verbs like あります/います.',
      'を with movement verbs marks the path or space traversed, not a destination.',
      'In casual speech を is often dropped: コーヒー飲む?',
    ],
    examples: [
      {
        ja: '毎朝、新聞を読みます。',
        furigana: 'まいあさ、しんぶんをよみます。',
        romaji: 'Maiasa, shinbun o yomimasu.',
        en: 'I read the newspaper every morning.',
      },
      {
        ja: '子供たちは公園を走っています。',
        furigana: 'こどもたちはこうえんをはしっています。',
        romaji: 'Kodomotachi wa kōen o hashitte imasu.',
        en: 'The children are running through the park.',
      },
    ],
    relatedPatterns: ['grammar-masu-form', 'grammar-ga-suki', 'grammar-te-iru'],
    tags: ['particle', 'direct-object', 'transitive', 'beginner'],
  },

  'grammar-koso-ado': {
    id: 'grammar-koso-ado',
    title: 'こそあど place words (ここ / そこ / あそこ / どこ)',
    jlptLevel: 'N5',
    summary: 'Place demonstratives indicating locations near the speaker (ここ), near the listener (そこ), away from both (あそこ), or unknown (どこ).',
    formation: 'ここ / そこ / あそこ / どこ + に/で/から/まで + Verb',
    explanation:
      'These place words are part of the ko-so-a-do system. ここ means "here"; そこ means "there"; あそこ means "over there"; どこ means "where". They function as noun phrases and take location particles just like ordinary place nouns.',
    usageNotes: [
      'そこ can refer to a place just mentioned in conversation even if not physically present.',
      'どこ requires か to form どこか (somewhere) or でも for どこでも (everywhere/anywhere).',
      'Polite variants こちら/そちら/あちら/どちら are used for direction or referring to people formally.',
    ],
    examples: [
      {
        ja: 'すみません、トイレはどこですか。',
        furigana: 'すみません、トイレはどこですか。',
        romaji: 'Sumimasen, toire wa doko desu ka.',
        en: 'Excuse me, where is the restroom?',
      },
      {
        ja: 'あそこに富士山が見えます。',
        furigana: 'あそこにふじさんがみえます。',
        romaji: 'Asoko ni Fujisan ga miemasu.',
        en: 'You can see Mt. Fuji over there.',
      },
    ],
    relatedPatterns: ['grammar-kore-sore-are', 'grammar-ni-location', 'grammar-de-location'],
    tags: ['demonstrative', 'ko-so-a-do', 'place', 'location', 'beginner'],
  },

  'grammar-verb-groups': {
    id: 'grammar-verb-groups',
    title: 'Verb groups: う-verbs / る-verbs / irregular',
    jlptLevel: 'N5',
    summary: 'Japanese verbs fall into three conjugation groups: Group 1 (う-verbs), Group 2 (る-verbs), and Group 3 (irregular: する and くる).',
    formation: 'Group 1: dictionary form ends in any う-row sound\nGroup 2: ends in -る with い-row or え-row vowel before る\nGroup 3: する, くる',
    explanation:
      'Knowing the group of a verb is essential because each group follows different conjugation patterns. Group 1 (godan) includes verbs ending in -く, -ぐ, -す, -つ, -ぬ, -ぶ, -む, -う, and -る where the mora before -る is NOT an い or え sound. Group 2 (ichidan) ends in -る with an い-row or え-row vowel: 食べる, 見る, 起きる. Group 3 has only する and くる.',
    usageNotes: [
      'When in doubt whether a verb ending in -る is Group 1 or 2, look it up.',
      'する can attach to nouns to form compound verbs: 勉強する、電話する.',
      'くる conjugates: くる → きます → きた → きて.',
    ],
    examples: [
      {
        ja: '彼は毎日日本語を勉強します。',
        furigana: 'かれはまいにちにほんごをべんきょうします。',
        romaji: 'Kare wa mainichi Nihongo o benkyō shimasu.',
        en: 'He studies Japanese every day.',
        note: 'する → します (Group 3 irregular)',
      },
      {
        ja: '友達が日本から来ます。',
        furigana: 'ともだちがにほんからきます。',
        romaji: 'Tomodachi ga Nihon kara kimasu.',
        en: 'My friend is coming from Japan.',
        note: 'くる → きます (Group 3 irregular)',
      },
    ],
    relatedPatterns: ['grammar-masu-form', 'grammar-masen-form', 'grammar-ta-form', 'grammar-te-form'],
    tags: ['verb', 'conjugation', 'godan', 'ichidan', 'irregular', 'beginner'],
  },

  'grammar-masu-form': {
    id: 'grammar-masu-form',
    title: '〜ます (polite present / future)',
    jlptLevel: 'N5',
    summary: 'The ます-form is the polite non-past form of a verb, used in formal and polite conversation.',
    formation: 'Group 1: replace -u ending with -i + ます\nGroup 2: replace -る with ます\nGroup 3: する → します; くる → きます',
    explanation:
      'The ます-form is the standard polite form. It covers both present habitual actions and future intentions. The ます-form itself does not distinguish present from future; context or time words make the meaning clear.',
    usageNotes: [
      'ます-form is non-past, covering both habitual present and future meanings.',
      'Do not use ます-form in subordinate clauses; use the plain form there.',
      'ます-stem combines with: ませんか (invitation), ましょう (let\'s), たい (want to).',
    ],
    examples: [
      {
        ja: '私は毎朝コーヒーを飲みます。',
        furigana: 'わたしはまいあさコーヒーをのみます。',
        romaji: 'Watashi wa maiasa kōhī o nomimasu.',
        en: 'I drink coffee every morning.',
      },
      {
        ja: '来週、京都に行きます。',
        furigana: 'らいしゅう、きょうとにいきます。',
        romaji: 'Raishū, Kyōto ni ikimasu.',
        en: 'I will go to Kyoto next week.',
      },
    ],
    relatedPatterns: ['grammar-masen-form', 'grammar-ta-form', 'grammar-verb-groups', 'grammar-tai'],
    tags: ['verb', 'polite', 'non-past', 'masu-form', 'beginner'],
  },

  'grammar-masen-form': {
    id: 'grammar-masen-form',
    title: '〜ません (polite negative)',
    jlptLevel: 'N5',
    summary: 'ません is the polite negative non-past form of verbs.',
    formation: 'ます-stem + ません',
    explanation:
      "To negate a polite verb, replace ます with ません: 飲みます → 飲みません, 食べます → 食べません. ません covers both present and future negation. The past negative is ませんでした.",
    usageNotes: [
      'ませんでした is the polite past negative.',
      'ませんか (with rising intonation) is an invitation: 一緒に食べませんか.',
      'In very casual speech the plain negative (〜ない form) is used instead.',
    ],
    examples: [
      {
        ja: '私はお酒を飲みません。',
        furigana: 'わたしはおさけをのみません。',
        romaji: 'Watashi wa o-sake o nomimasen.',
        en: 'I do not drink alcohol.',
      },
      {
        ja: '今日は学校に来ません。',
        furigana: 'きょうはがっこうにきません。',
        romaji: 'Kyō wa gakkō ni kimasen.',
        en: 'I will not come to school today.',
      },
    ],
    relatedPatterns: ['grammar-masu-form', 'grammar-ta-form', 'grammar-verb-groups'],
    tags: ['verb', 'polite', 'negative', 'masu-form', 'beginner'],
  },

  'grammar-i-adjective': {
    id: 'grammar-i-adjective',
    title: 'い-adjective conjugation',
    jlptLevel: 'N5',
    summary: 'い-adjectives end in -い and conjugate directly; they have their own polite, negative, and past forms.',
    formation: 'Present: Adj-い + です\nNegative: Adj root + くない + です\nPast: Adj root + かった + です\nPast negative: Adj root + くなかった + です',
    explanation:
      'い-adjectives inflect on their own. In the negative, drop -い and add -くない. For past tense, drop -い and add -かった. The irregular い-adjective いい (good) becomes よ- in all conjugated forms: よかった、よくない.',
    usageNotes: [
      'いい is irregular: よかった (was good), よくない (not good) — NOT いかった.',
      'い-adjectives directly precede nouns without any particle: 大きい犬.',
      'Do not confuse い-adjectives with な-adjectives ending in い (like きれい): these take な before nouns.',
    ],
    examples: [
      {
        ja: 'この映画は面白くないです。',
        furigana: 'このえいがはおもしろくないです。',
        romaji: 'Kono eiga wa omoshirokunai desu.',
        en: 'This movie is not interesting.',
      },
      {
        ja: '昨日は寒かったです。',
        furigana: 'きのうはさむかったです。',
        romaji: 'Kinō wa samukatta desu.',
        en: 'It was cold yesterday.',
      },
    ],
    relatedPatterns: ['grammar-na-adjective', 'grammar-adj-past', 'grammar-wa-desu'],
    tags: ['adjective', 'i-adjective', 'conjugation', 'beginner'],
  },

  'grammar-na-adjective': {
    id: 'grammar-na-adjective',
    title: 'な-adjective usage',
    jlptLevel: 'N5',
    summary: 'な-adjectives require な when directly modifying a noun and behave like nouns with the copula です as predicate.',
    formation: 'Predicate: Adj + です\nPre-noun: Adj + な + Noun\nPast: Adj + でした',
    explanation:
      'な-adjectives function like nouns grammatically. In predicate position they use です: きれいです, 静かじゃありません. When they modify a noun they insert な: きれいな花, 静かな部屋. Common N5 な-adjectives include 好き、嫌い、上手、下手、有名、便利、きれい、静か、元気、親切.',
    usageNotes: [
      'な before a noun is unique to な-adjectives: 静かな部屋 vs 大きい部屋 (い-adj).',
      'Some words ending in い are な-adjectives, not い-adjectives: きれい、嫌い.',
      'な-adjectives can be modified by adverbs: とても静か、あまり好きじゃない.',
    ],
    examples: [
      {
        ja: 'あの人はとても親切です。',
        furigana: 'あのひとはとてもしんせつです。',
        romaji: 'Ano hito wa totemo shinsetsu desu.',
        en: 'That person is very kind.',
      },
      {
        ja: 'ここは静かな公園です。',
        furigana: 'ここはしずかなこうえんです。',
        romaji: 'Koko wa shizuka na kōen desu.',
        en: 'This is a quiet park.',
      },
    ],
    relatedPatterns: ['grammar-i-adjective', 'grammar-adj-past', 'grammar-wa-desu', 'grammar-ga-suki'],
    tags: ['adjective', 'na-adjective', 'noun-modification', 'beginner'],
  },

  'grammar-adj-past': {
    id: 'grammar-adj-past',
    title: 'Adjective past tense',
    jlptLevel: 'N5',
    summary: 'Both い-adjectives and な-adjectives have distinct past tense forms expressing that something "was" a certain way.',
    formation: 'い-adj past: root + かった + です\nい-adj past neg: root + くなかった + です\nな-adj past: Adj + でした\nな-adj past neg: Adj + じゃありませんでした',
    explanation:
      'い-adjectives inflect their own ending: 高い → 高かった, 高くない → 高くなかった. な-adjectives use the copula past: 便利でした, 便利じゃありませんでした. The irregular いい has past form よかった.',
    usageNotes: [
      'いい → よかった (not いかった — that form is incorrect).',
      'な-adjective past negative: じゃありませんでした or ではありませんでした (more formal).',
      'Past adjectives are very common in storytelling and narrating past experiences.',
    ],
    examples: [
      {
        ja: '子供の頃、野菜が嫌いでした。',
        furigana: 'こどものころ、やさいがきらいでした。',
        romaji: 'Kodomo no koro, yasai ga kirai deshita.',
        en: 'When I was a child, I disliked vegetables.',
      },
      {
        ja: '昨日のパーティーは楽しかったです。',
        furigana: 'きのうのパーティーはたのしかったです。',
        romaji: "Kinō no pātī wa tanoshikatta desu.",
        en: "Yesterday's party was fun.",
      },
    ],
    relatedPatterns: ['grammar-i-adjective', 'grammar-na-adjective', 'grammar-ta-form'],
    tags: ['adjective', 'past-tense', 'i-adjective', 'na-adjective', 'beginner'],
  },

  'grammar-ta-form': {
    id: 'grammar-ta-form',
    title: '〜た / 〜ました (past tense)',
    jlptLevel: 'N5',
    summary: 'The た-form expresses completed actions in the past. The polite equivalent is 〜ました.',
    formation: 'Polite past: ます-stem + ました\nGroup 2 plain: drop -る + た\nGroup 1: sound changes (く→いた, す→した, つ/る/う→った, ぬ/ぶ/む→んだ)\nGroup 3: する→した; くる→きた',
    explanation:
      "The polite past is formed by replacing ます with ました. Group 2 simply drops -る and adds -た. Group 1 undergoes euphonic changes. Exception: 行く → 行った (not 行いた). The た-form is also the base for 〜たことがある、〜たら.",
    usageNotes: [
      'ました is used in polite speech; た is used in casual contexts.',
      'Group 1 exception: 行く → 行った.',
      'た-form is also used for giving instructions in certain formal contexts.',
    ],
    examples: [
      {
        ja: '昨日、友達と映画を見ました。',
        furigana: 'きのう、ともだちとえいがをみました。',
        romaji: 'Kinō, tomodachi to eiga o mimashita.',
        en: 'Yesterday I watched a movie with a friend.',
      },
      {
        ja: '朝ごはんを食べた。',
        furigana: 'あさごはんをたべた。',
        romaji: 'Asagohan o tabeta.',
        en: 'I ate breakfast.',
        note: 'Plain (casual) past form',
      },
    ],
    relatedPatterns: ['grammar-masu-form', 'grammar-te-form', 'grammar-ta-koto-ga-aru'],
    tags: ['verb', 'past-tense', 'ta-form', 'polite', 'beginner'],
  },

  'grammar-te-form': {
    id: 'grammar-te-form',
    title: 'て-form construction rules',
    jlptLevel: 'N5',
    summary: 'The て-form is a connector form used to link sequential actions, make requests, form progressive aspect, and build many grammatical patterns.',
    formation: 'Group 2: drop -る + て\nGroup 1: sound changes mirror た-form but use て/で\nGroup 3: する→して; くる→きて\nException: 行く→行って',
    explanation:
      'The て-form construction mirrors the plain past: wherever you use -た use -て, and -だ becomes -で. Uses include: sequential actions, requests (〜てください), progressive (〜ている), and many compound patterns.',
    usageNotes: [
      'Group 1 て-form: same sound changes as た-form but replace -た with -て and -だ with -で.',
      'Exception: 行く (iku) → 行って (itte), not 行いて.',
      'て-form by itself can indicate reason/cause in casual speech.',
    ],
    examples: [
      {
        ja: '手を洗って、ご飯を食べます。',
        furigana: 'てをあらって、ごはんをたべます。',
        romaji: 'Te o aratte, gohan o tabemasu.',
        en: 'I wash my hands and then eat.',
      },
      {
        ja: '公園を走って、疲れました。',
        furigana: 'こうえんをはしって、つかれました。',
        romaji: 'Kōen o hashitte, tsukaremashita.',
        en: 'I ran in the park and got tired.',
      },
    ],
    relatedPatterns: ['grammar-ta-form', 'grammar-te-iru', 'grammar-te-kudasai'],
    tags: ['verb', 'te-form', 'connector', 'beginner'],
  },

  'grammar-te-iru': {
    id: 'grammar-te-iru',
    title: '〜ている (progressive / resultant state)',
    jlptLevel: 'N5',
    summary: '〜ている attaches to the て-form and expresses either an ongoing action or a state resulting from a completed action.',
    formation: 'Verb て-form + いる (plain) / います (polite)',
    explanation:
      '〜ている has two major readings. With activity verbs (食べる、走る), it expresses an action in progress: 食べています (is eating). With change-of-state verbs (結婚する、着る), it expresses the resultant state: 結婚しています (is married), 着ています (is wearing).',
    usageNotes: [
      'With 行く/来る, ている expresses resultant state: 日本に来ています (I am in Japan — having come).',
      'In casual speech, いる contracts to る: 食べてる, 見てる.',
      'Habitual actions also use ている: 毎日運動しています.',
    ],
    examples: [
      {
        ja: '今、雨が降っています。',
        furigana: 'いま、あめがふっています。',
        romaji: 'Ima, ame ga futte imasu.',
        en: 'It is raining now.',
      },
      {
        ja: '兄はもう結婚しています。',
        furigana: 'あにはもうけっこんしています。',
        romaji: 'Ani wa mō kekkon shite imasu.',
        en: 'My older brother is already married.',
        note: 'Resultant state: the state of having gotten married',
      },
    ],
    relatedPatterns: ['grammar-te-form', 'grammar-ta-form', 'grammar-masu-form'],
    tags: ['verb', 'te-form', 'progressive', 'resultant-state', 'aspect', 'beginner'],
  },

  'grammar-tai': {
    id: 'grammar-tai',
    title: '〜たい (want to do)',
    jlptLevel: 'N5',
    summary: "〜たい attaches to the ます-stem to express the speaker's desire to perform that action.",
    formation: 'ます-stem + たい (plain)\nます-stem + たいです (polite)\nます-stem + たくない (negative)',
    explanation:
      "〜たい is an い-adjective-like ending. It conjugates like an い-adjective: たいです (want), たくない (don't want), たかった (wanted). The object can take either を or が — が emphasizes desire. Important: 〜たい describes only the speaker's own desire.",
    usageNotes: [
      'たい only expresses the speaker\'s desire. For third-person desire use 〜たがっている.',
      'Object particle を can change to が to emphasize the desired thing.',
      'Past たかった: 子供の頃、パイロットになりたかった.',
    ],
    examples: [
      {
        ja: '夏休みに海へ行きたいです。',
        furigana: 'なつやすみにうみへいきたいです。',
        romaji: 'Natsuyasumi ni umi e ikitai desu.',
        en: 'I want to go to the beach during summer vacation.',
      },
      {
        ja: '今日は何もしたくない。',
        furigana: 'きょうはなにもしたくない。',
        romaji: 'Kyō wa nani mo shitakunai.',
        en: "I don't want to do anything today.",
      },
    ],
    relatedPatterns: ['grammar-masu-form', 'grammar-koto-ga-dekiru', 'grammar-ga-suki'],
    tags: ['verb', 'desire', 'want', 'i-adjective-like', 'beginner'],
  },

  'grammar-te-kudasai': {
    id: 'grammar-te-kudasai',
    title: '〜てください (please do)',
    jlptLevel: 'N5',
    summary: '〜てください is a polite request form meaning "please do ~".',
    formation: 'Verb て-form + ください',
    explanation:
      "〜てください is the standard polite way to make a request: 座ってください (Please sit down). While polite, it can sound like a command; a softer alternative is 〜ていただけませんか. The negative counterpart is 〜ないでください (please don't).",
    usageNotes: [
      'In formal written instructions, てください is standard.',
      'To soften: 〜てもらえますか or 〜ていただけますか.',
      'Negative request: ない-form + でください.',
    ],
    examples: [
      {
        ja: 'ここに名前を書いてください。',
        furigana: 'ここになまえをかいてください。',
        romaji: 'Koko ni namae o kaite kudasai.',
        en: 'Please write your name here.',
      },
      {
        ja: '静かにしてください。',
        furigana: 'しずかにしてください。',
        romaji: 'Shizuka ni shite kudasai.',
        en: 'Please be quiet.',
      },
    ],
    relatedPatterns: ['grammar-te-form', 'grammar-masu-form'],
    tags: ['verb', 'request', 'te-form', 'polite', 'beginner'],
  },

  'grammar-koto-ga-dekiru': {
    id: 'grammar-koto-ga-dekiru',
    title: '〜ことができる (can / able to)',
    jlptLevel: 'N5',
    summary: '〜ことができる expresses ability or possibility.',
    formation: 'Verb (dictionary form) + ことができる / ことができます',
    explanation:
      'This pattern uses the nominalizer こと to turn a verb phrase into a noun, then が with できる. It is equivalent to the potential form of the verb but is more explicit. 日本語を話すことができます = 日本語が話せます.',
    usageNotes: [
      'ことができる is interchangeable with the potential form in most situations.',
      'The subject of ability uses は or が; the object of the potential verb takes が instead of を.',
      'できる alone: 料理ができる (can cook / is good at cooking).',
    ],
    examples: [
      {
        ja: '私は自転車に乗ることができます。',
        furigana: 'わたしはじてんしゃにのることができます。',
        romaji: 'Watashi wa jitensha ni noru koto ga dekimasu.',
        en: 'I can ride a bicycle.',
      },
      {
        ja: 'ここでは写真を撮ることができません。',
        furigana: 'ここではしゃしんをとることができません。',
        romaji: 'Koko dewa shashin o toru koto ga dekimasen.',
        en: 'You cannot take photos here.',
      },
    ],
    relatedPatterns: ['grammar-tai', 'grammar-masu-form', 'grammar-ta-koto-ga-aru'],
    tags: ['verb', 'ability', 'potential', 'nominalizer', 'beginner'],
  },

  'grammar-ta-koto-ga-aru': {
    id: 'grammar-ta-koto-ga-aru',
    title: '〜たことがある (have done before)',
    jlptLevel: 'N5',
    summary: '〜たことがある expresses that the speaker has had the experience of doing something.',
    formation: 'Verb た-form + ことがある / ことがあります',
    explanation:
      "This pattern describes life experiences — things you have or haven't done at least once. Contrast: 昨日寿司を食べました (specific past) vs 寿司を食べたことがあります (experience). Frequency adverbs like 一度、何度も often accompany this pattern.",
    usageNotes: [
      'This pattern describes experience (ever/never), not a specific past event.',
      '一度も〜たことがない (have never done even once).',
      '何度も〜たことがある (have done many times).',
    ],
    examples: [
      {
        ja: '富士山に登ったことがあります。',
        furigana: 'ふじさんにのぼったことがあります。',
        romaji: 'Fujisan ni nobotta koto ga arimasu.',
        en: 'I have climbed Mt. Fuji before.',
      },
      {
        ja: '私はまだ沖縄に行ったことがありません。',
        furigana: 'わたしはまだおきなわにいったことがありません。',
        romaji: 'Watashi wa mada Okinawa ni itta koto ga arimasen.',
        en: 'I have never been to Okinawa yet.',
      },
    ],
    relatedPatterns: ['grammar-ta-form', 'grammar-koto-ga-dekiru', 'grammar-te-iru'],
    tags: ['verb', 'experience', 'past', 'nominalizer', 'beginner'],
  },

  'grammar-ga-suki': {
    id: 'grammar-ga-suki',
    title: '〜が好き (to like)',
    jlptLevel: 'N5',
    summary: '好き is a な-adjective meaning "liked". The thing that is liked is marked with が.',
    formation: 'Noun + が + 好きです\nVerb dictionary form + のが + 好きです',
    explanation:
      "好き is adjectival, and the thing liked takes が: 音楽が好きです. The opposite is 嫌い (dislike). 大好き means 'love / really like'. Verb phrases as the liked item use のが: 歌うのが好きです.",
    usageNotes: [
      'The liked thing takes が, not を: 音楽が好き (correct), 音楽を好き (wrong).',
      '大好き intensifies to "love" or "really like".',
      '好き can modify a noun directly: 好きな食べ物 (favorite food).',
    ],
    examples: [
      {
        ja: '私はチョコレートが大好きです。',
        furigana: 'わたしはチョコレートがだいすきです。',
        romaji: 'Watashi wa chokoreeto ga daisuki desu.',
        en: 'I love chocolate.',
      },
      {
        ja: '音楽を聴くのが好きです。',
        furigana: 'おんがくをきくのがすきです。',
        romaji: 'Ongaku o kiku no ga suki desu.',
        en: 'I like listening to music.',
      },
    ],
    relatedPatterns: ['grammar-na-adjective', 'grammar-tai', 'grammar-mo-particle'],
    contrastedWith: [
      {
        patternId: 'grammar-wo-object',
        note: '好き takes が for the liked thing, not を.',
      },
    ],
    tags: ['adjective', 'na-adjective', 'like', 'preference', 'beginner'],
  },

  'grammar-mo-particle': {
    id: 'grammar-mo-particle',
    title: 'も (also / too particle)',
    jlptLevel: 'N5',
    summary: 'も replaces は、が、or を to add the meaning "also" or "too".',
    formation: 'Noun + も + Predicate\n(replaces は, が, or を — stacks with other particles: にも、でも)',
    explanation:
      "も means 'also / too / even'. In affirmative sentences: 私も行きます (I will go too). In negative: 私も行きません (I won't go either). With question words plus negative: 何も食べませんでした (didn't eat anything).",
    usageNotes: [
      'も replaces は、が、を. It does NOT replace に、で、から — it follows them: にも、でも.',
      'Negative + も + question word: 誰も来なかった (Nobody came).',
      'も on a quantity expresses surprise: 三時間も待った (waited a whole three hours!).',
    ],
    examples: [
      {
        ja: '田中さんも日本語を勉強しています。',
        furigana: 'たなかさんもにほんごをべんきょうしています。',
        romaji: 'Tanaka-san mo Nihongo o benkyō shite imasu.',
        en: 'Tanaka-san is also studying Japanese.',
      },
      {
        ja: '私は何も食べたくないです。',
        furigana: 'わたしはなにもたべたくないです。',
        romaji: 'Watashi wa nani mo tabetakunai desu.',
        en: "I don't want to eat anything.",
      },
    ],
    relatedPatterns: ['grammar-wa-desu', 'grammar-to-particle', 'grammar-ka-question'],
    tags: ['particle', 'also', 'inclusive', 'negative', 'beginner'],
  },

  'grammar-to-particle': {
    id: 'grammar-to-particle',
    title: 'と (and / with particle)',
    jlptLevel: 'N5',
    summary: 'と connects two or more nouns meaning "and" (exhaustive), or marks a companion meaning "with".',
    formation: 'Noun A + と + Noun B (exhaustive: A and B)\nNoun + と + Verb of mutual action (with)',
    explanation:
      'と has two primary uses at N5. As a connective it links nouns exhaustively: パンとバターを買いました (I bought bread and butter — those two things). As a comitative it marks the person with whom an action is done: 友達と映画を見た.',
    usageNotes: [
      'と for listing is exhaustive. Use や for non-exhaustive lists (bread, butter, and other things).',
      'と for accompaniment: 一緒に is often added for clarity.',
      'Do not confuse comitative と (with a person) with に (direction).',
    ],
    examples: [
      {
        ja: '机の上に本とペンがあります。',
        furigana: 'つくえのうえにほんとペンがあります。',
        romaji: 'Tsukue no ue ni hon to pen ga arimasu.',
        en: 'There is a book and a pen on the desk.',
      },
      {
        ja: '昨日、家族と夕食を食べました。',
        furigana: 'きのう、かぞくとゆうしょくをたべました。',
        romaji: 'Kinō, kazoku to yūshoku o tabemashita.',
        en: 'Yesterday I had dinner with my family.',
      },
    ],
    relatedPatterns: ['grammar-mo-particle', 'grammar-no-possessive', 'grammar-arimasu-imasu'],
    tags: ['particle', 'and', 'with', 'listing', 'comitative', 'beginner'],
  },
};
