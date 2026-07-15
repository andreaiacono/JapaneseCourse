import type { Character } from '$lib/models/Character';

// Every kana in the app: the 46 basic gojuuon per script, plus dakuten (voiced)
// and youon (compound). This module is the source of truth for kana — the
// character/romaji pairs used to be parsed out of the audio filenames.
// Pronunciation is synthesized from the character itself (see ttsAudio).

export const HIRAGANA_BASIC: Character[] = [
  // A row
  { character: 'あ', characterType: 'hiragana', romaji: 'a', readings: [] },
  { character: 'い', characterType: 'hiragana', romaji: 'i', readings: [] },
  { character: 'う', characterType: 'hiragana', romaji: 'u', readings: [] },
  { character: 'え', characterType: 'hiragana', romaji: 'e', readings: [] },
  { character: 'お', characterType: 'hiragana', romaji: 'o', readings: [] },
  // K row
  { character: 'か', characterType: 'hiragana', romaji: 'ka', readings: [] },
  { character: 'き', characterType: 'hiragana', romaji: 'ki', readings: [] },
  { character: 'く', characterType: 'hiragana', romaji: 'ku', readings: [] },
  { character: 'け', characterType: 'hiragana', romaji: 'ke', readings: [] },
  { character: 'こ', characterType: 'hiragana', romaji: 'ko', readings: [] },
  // S row
  { character: 'さ', characterType: 'hiragana', romaji: 'sa', readings: [] },
  { character: 'し', characterType: 'hiragana', romaji: 'shi', readings: [] },
  { character: 'す', characterType: 'hiragana', romaji: 'su', readings: [] },
  { character: 'せ', characterType: 'hiragana', romaji: 'se', readings: [] },
  { character: 'そ', characterType: 'hiragana', romaji: 'so', readings: [] },
  // T row
  { character: 'た', characterType: 'hiragana', romaji: 'ta', readings: [] },
  { character: 'ち', characterType: 'hiragana', romaji: 'chi', readings: [] },
  { character: 'つ', characterType: 'hiragana', romaji: 'tsu', readings: [] },
  { character: 'て', characterType: 'hiragana', romaji: 'te', readings: [] },
  { character: 'と', characterType: 'hiragana', romaji: 'to', readings: [] },
  // N row
  { character: 'な', characterType: 'hiragana', romaji: 'na', readings: [] },
  { character: 'に', characterType: 'hiragana', romaji: 'ni', readings: [] },
  { character: 'ぬ', characterType: 'hiragana', romaji: 'nu', readings: [] },
  { character: 'ね', characterType: 'hiragana', romaji: 'ne', readings: [] },
  { character: 'の', characterType: 'hiragana', romaji: 'no', readings: [] },
  // H row
  { character: 'は', characterType: 'hiragana', romaji: 'ha', readings: [] },
  { character: 'ひ', characterType: 'hiragana', romaji: 'hi', readings: [] },
  { character: 'ふ', characterType: 'hiragana', romaji: 'fu', readings: [] },
  { character: 'へ', characterType: 'hiragana', romaji: 'he', readings: [] },
  { character: 'ほ', characterType: 'hiragana', romaji: 'ho', readings: [] },
  // M row
  { character: 'ま', characterType: 'hiragana', romaji: 'ma', readings: [] },
  { character: 'み', characterType: 'hiragana', romaji: 'mi', readings: [] },
  { character: 'む', characterType: 'hiragana', romaji: 'mu', readings: [] },
  { character: 'め', characterType: 'hiragana', romaji: 'me', readings: [] },
  { character: 'も', characterType: 'hiragana', romaji: 'mo', readings: [] },
  // Y row
  { character: 'や', characterType: 'hiragana', romaji: 'ya', readings: [] },
  { character: 'ゆ', characterType: 'hiragana', romaji: 'yu', readings: [] },
  { character: 'よ', characterType: 'hiragana', romaji: 'yo', readings: [] },
  // R row
  { character: 'ら', characterType: 'hiragana', romaji: 'ra', readings: [] },
  { character: 'り', characterType: 'hiragana', romaji: 'ri', readings: [] },
  { character: 'る', characterType: 'hiragana', romaji: 'ru', readings: [] },
  { character: 'れ', characterType: 'hiragana', romaji: 're', readings: [] },
  { character: 'ろ', characterType: 'hiragana', romaji: 'ro', readings: [] },
  // W row + N
  { character: 'わ', characterType: 'hiragana', romaji: 'wa', readings: [] },
  { character: 'を', characterType: 'hiragana', romaji: 'wo', readings: [] },
  { character: 'ん', characterType: 'hiragana', romaji: 'n', readings: [] },
];

export const KATAKANA_BASIC: Character[] = [
  // A row
  { character: 'ア', characterType: 'katakana', romaji: 'a', readings: [] },
  { character: 'イ', characterType: 'katakana', romaji: 'i', readings: [] },
  { character: 'ウ', characterType: 'katakana', romaji: 'u', readings: [] },
  { character: 'エ', characterType: 'katakana', romaji: 'e', readings: [] },
  { character: 'オ', characterType: 'katakana', romaji: 'o', readings: [] },
  // K row
  { character: 'カ', characterType: 'katakana', romaji: 'ka', readings: [] },
  { character: 'キ', characterType: 'katakana', romaji: 'ki', readings: [] },
  { character: 'ク', characterType: 'katakana', romaji: 'ku', readings: [] },
  { character: 'ケ', characterType: 'katakana', romaji: 'ke', readings: [] },
  { character: 'コ', characterType: 'katakana', romaji: 'ko', readings: [] },
  // S row
  { character: 'サ', characterType: 'katakana', romaji: 'sa', readings: [] },
  { character: 'シ', characterType: 'katakana', romaji: 'shi', readings: [] },
  { character: 'ス', characterType: 'katakana', romaji: 'su', readings: [] },
  { character: 'セ', characterType: 'katakana', romaji: 'se', readings: [] },
  { character: 'ソ', characterType: 'katakana', romaji: 'so', readings: [] },
  // T row
  { character: 'タ', characterType: 'katakana', romaji: 'ta', readings: [] },
  { character: 'チ', characterType: 'katakana', romaji: 'chi', readings: [] },
  { character: 'ツ', characterType: 'katakana', romaji: 'tsu', readings: [] },
  { character: 'テ', characterType: 'katakana', romaji: 'te', readings: [] },
  { character: 'ト', characterType: 'katakana', romaji: 'to', readings: [] },
  // N row
  { character: 'ナ', characterType: 'katakana', romaji: 'na', readings: [] },
  { character: 'ニ', characterType: 'katakana', romaji: 'ni', readings: [] },
  { character: 'ヌ', characterType: 'katakana', romaji: 'nu', readings: [] },
  { character: 'ネ', characterType: 'katakana', romaji: 'ne', readings: [] },
  { character: 'ノ', characterType: 'katakana', romaji: 'no', readings: [] },
  // H row
  { character: 'ハ', characterType: 'katakana', romaji: 'ha', readings: [] },
  { character: 'ヒ', characterType: 'katakana', romaji: 'hi', readings: [] },
  { character: 'フ', characterType: 'katakana', romaji: 'fu', readings: [] },
  { character: 'ヘ', characterType: 'katakana', romaji: 'he', readings: [] },
  { character: 'ホ', characterType: 'katakana', romaji: 'ho', readings: [] },
  // M row
  { character: 'マ', characterType: 'katakana', romaji: 'ma', readings: [] },
  { character: 'ミ', characterType: 'katakana', romaji: 'mi', readings: [] },
  { character: 'ム', characterType: 'katakana', romaji: 'mu', readings: [] },
  { character: 'メ', characterType: 'katakana', romaji: 'me', readings: [] },
  { character: 'モ', characterType: 'katakana', romaji: 'mo', readings: [] },
  // Y row
  { character: 'ヤ', characterType: 'katakana', romaji: 'ya', readings: [] },
  { character: 'ユ', characterType: 'katakana', romaji: 'yu', readings: [] },
  { character: 'ヨ', characterType: 'katakana', romaji: 'yo', readings: [] },
  // R row
  { character: 'ラ', characterType: 'katakana', romaji: 'ra', readings: [] },
  { character: 'リ', characterType: 'katakana', romaji: 'ri', readings: [] },
  { character: 'ル', characterType: 'katakana', romaji: 'ru', readings: [] },
  { character: 'レ', characterType: 'katakana', romaji: 're', readings: [] },
  { character: 'ロ', characterType: 'katakana', romaji: 'ro', readings: [] },
  // W row + N
  { character: 'ワ', characterType: 'katakana', romaji: 'wa', readings: [] },
  { character: 'ヲ', characterType: 'katakana', romaji: 'wo', readings: [] },
  { character: 'ン', characterType: 'katakana', romaji: 'n', readings: [] },
];


export const HIRAGANA_DAKUTEN: Character[] = [
  // G row (voiced K)
  { character: 'が', characterType: 'hiragana', romaji: 'ga', readings: [] },
  { character: 'ぎ', characterType: 'hiragana', romaji: 'gi', readings: [] },
  { character: 'ぐ', characterType: 'hiragana', romaji: 'gu', readings: [] },
  { character: 'げ', characterType: 'hiragana', romaji: 'ge', readings: [] },
  { character: 'ご', characterType: 'hiragana', romaji: 'go', readings: [] },
  // Z row (voiced S)
  { character: 'ざ', characterType: 'hiragana', romaji: 'za', readings: [] },
  { character: 'じ', characterType: 'hiragana', romaji: 'ji', readings: [] },
  { character: 'ず', characterType: 'hiragana', romaji: 'zu', readings: [] },
  { character: 'ぜ', characterType: 'hiragana', romaji: 'ze', readings: [] },
  { character: 'ぞ', characterType: 'hiragana', romaji: 'zo', readings: [] },
  // D row (voiced T)
  { character: 'だ', characterType: 'hiragana', romaji: 'da', readings: [] },
  { character: 'ぢ', characterType: 'hiragana', romaji: 'ji', readings: [] },
  { character: 'づ', characterType: 'hiragana', romaji: 'zu', readings: [] },
  { character: 'で', characterType: 'hiragana', romaji: 'de', readings: [] },
  { character: 'ど', characterType: 'hiragana', romaji: 'do', readings: [] },
  // B row (voiced H)
  { character: 'ば', characterType: 'hiragana', romaji: 'ba', readings: [] },
  { character: 'び', characterType: 'hiragana', romaji: 'bi', readings: [] },
  { character: 'ぶ', characterType: 'hiragana', romaji: 'bu', readings: [] },
  { character: 'べ', characterType: 'hiragana', romaji: 'be', readings: [] },
  { character: 'ぼ', characterType: 'hiragana', romaji: 'bo', readings: [] },
  // P row (semi-voiced H)
  { character: 'ぱ', characterType: 'hiragana', romaji: 'pa', readings: [] },
  { character: 'ぴ', characterType: 'hiragana', romaji: 'pi', readings: [] },
  { character: 'ぷ', characterType: 'hiragana', romaji: 'pu', readings: [] },
  { character: 'ぺ', characterType: 'hiragana', romaji: 'pe', readings: [] },
  { character: 'ぽ', characterType: 'hiragana', romaji: 'po', readings: [] },
];

export const HIRAGANA_YOUON: Character[] = [
  { character: 'きゃ', characterType: 'hiragana', romaji: 'kya', readings: [] },
  { character: 'きゅ', characterType: 'hiragana', romaji: 'kyu', readings: [] },
  { character: 'きょ', characterType: 'hiragana', romaji: 'kyo', readings: [] },
  { character: 'しゃ', characterType: 'hiragana', romaji: 'sha', readings: [] },
  { character: 'しゅ', characterType: 'hiragana', romaji: 'shu', readings: [] },
  { character: 'しょ', characterType: 'hiragana', romaji: 'sho', readings: [] },
  { character: 'ちゃ', characterType: 'hiragana', romaji: 'cha', readings: [] },
  { character: 'ちゅ', characterType: 'hiragana', romaji: 'chu', readings: [] },
  { character: 'ちょ', characterType: 'hiragana', romaji: 'cho', readings: [] },
  { character: 'にゃ', characterType: 'hiragana', romaji: 'nya', readings: [] },
  { character: 'にゅ', characterType: 'hiragana', romaji: 'nyu', readings: [] },
  { character: 'にょ', characterType: 'hiragana', romaji: 'nyo', readings: [] },
  { character: 'ひゃ', characterType: 'hiragana', romaji: 'hya', readings: [] },
  { character: 'ひゅ', characterType: 'hiragana', romaji: 'hyu', readings: [] },
  { character: 'ひょ', characterType: 'hiragana', romaji: 'hyo', readings: [] },
  { character: 'みゃ', characterType: 'hiragana', romaji: 'mya', readings: [] },
  { character: 'みゅ', characterType: 'hiragana', romaji: 'myu', readings: [] },
  { character: 'みょ', characterType: 'hiragana', romaji: 'myo', readings: [] },
  { character: 'りゃ', characterType: 'hiragana', romaji: 'rya', readings: [] },
  { character: 'りゅ', characterType: 'hiragana', romaji: 'ryu', readings: [] },
  { character: 'りょ', characterType: 'hiragana', romaji: 'ryo', readings: [] },
  { character: 'ぎゃ', characterType: 'hiragana', romaji: 'gya', readings: [] },
  { character: 'ぎゅ', characterType: 'hiragana', romaji: 'gyu', readings: [] },
  { character: 'ぎょ', characterType: 'hiragana', romaji: 'gyo', readings: [] },
  { character: 'じゃ', characterType: 'hiragana', romaji: 'ja', readings: [] },
  { character: 'じゅ', characterType: 'hiragana', romaji: 'ju', readings: [] },
  { character: 'じょ', characterType: 'hiragana', romaji: 'jo', readings: [] },
  { character: 'びゃ', characterType: 'hiragana', romaji: 'bya', readings: [] },
  { character: 'びゅ', characterType: 'hiragana', romaji: 'byu', readings: [] },
  { character: 'びょ', characterType: 'hiragana', romaji: 'byo', readings: [] },
  { character: 'ぴゃ', characterType: 'hiragana', romaji: 'pya', readings: [] },
  { character: 'ぴゅ', characterType: 'hiragana', romaji: 'pyu', readings: [] },
  { character: 'ぴょ', characterType: 'hiragana', romaji: 'pyo', readings: [] },
];

export const KATAKANA_DAKUTEN: Character[] = [
  // G row
  { character: 'ガ', characterType: 'katakana', romaji: 'ga', readings: [] },
  { character: 'ギ', characterType: 'katakana', romaji: 'gi', readings: [] },
  { character: 'グ', characterType: 'katakana', romaji: 'gu', readings: [] },
  { character: 'ゲ', characterType: 'katakana', romaji: 'ge', readings: [] },
  { character: 'ゴ', characterType: 'katakana', romaji: 'go', readings: [] },
  // Z row
  { character: 'ザ', characterType: 'katakana', romaji: 'za', readings: [] },
  { character: 'ジ', characterType: 'katakana', romaji: 'ji', readings: [] },
  { character: 'ズ', characterType: 'katakana', romaji: 'zu', readings: [] },
  { character: 'ゼ', characterType: 'katakana', romaji: 'ze', readings: [] },
  { character: 'ゾ', characterType: 'katakana', romaji: 'zo', readings: [] },
  // D row
  { character: 'ダ', characterType: 'katakana', romaji: 'da', readings: [] },
  { character: 'ヂ', characterType: 'katakana', romaji: 'ji', readings: [] },
  { character: 'ヅ', characterType: 'katakana', romaji: 'zu', readings: [] },
  { character: 'デ', characterType: 'katakana', romaji: 'de', readings: [] },
  { character: 'ド', characterType: 'katakana', romaji: 'do', readings: [] },
  // B row
  { character: 'バ', characterType: 'katakana', romaji: 'ba', readings: [] },
  { character: 'ビ', characterType: 'katakana', romaji: 'bi', readings: [] },
  { character: 'ブ', characterType: 'katakana', romaji: 'bu', readings: [] },
  { character: 'ベ', characterType: 'katakana', romaji: 'be', readings: [] },
  { character: 'ボ', characterType: 'katakana', romaji: 'bo', readings: [] },
  // P row
  { character: 'パ', characterType: 'katakana', romaji: 'pa', readings: [] },
  { character: 'ピ', characterType: 'katakana', romaji: 'pi', readings: [] },
  { character: 'プ', characterType: 'katakana', romaji: 'pu', readings: [] },
  { character: 'ペ', characterType: 'katakana', romaji: 'pe', readings: [] },
  { character: 'ポ', characterType: 'katakana', romaji: 'po', readings: [] },
];

export const KATAKANA_YOUON: Character[] = [
  { character: 'キャ', characterType: 'katakana', romaji: 'kya', readings: [] },
  { character: 'キュ', characterType: 'katakana', romaji: 'kyu', readings: [] },
  { character: 'キョ', characterType: 'katakana', romaji: 'kyo', readings: [] },
  { character: 'シャ', characterType: 'katakana', romaji: 'sha', readings: [] },
  { character: 'シュ', characterType: 'katakana', romaji: 'shu', readings: [] },
  { character: 'ショ', characterType: 'katakana', romaji: 'sho', readings: [] },
  { character: 'チャ', characterType: 'katakana', romaji: 'cha', readings: [] },
  { character: 'チュ', characterType: 'katakana', romaji: 'chu', readings: [] },
  { character: 'チョ', characterType: 'katakana', romaji: 'cho', readings: [] },
  { character: 'ニャ', characterType: 'katakana', romaji: 'nya', readings: [] },
  { character: 'ニュ', characterType: 'katakana', romaji: 'nyu', readings: [] },
  { character: 'ニョ', characterType: 'katakana', romaji: 'nyo', readings: [] },
  { character: 'ヒャ', characterType: 'katakana', romaji: 'hya', readings: [] },
  { character: 'ヒュ', characterType: 'katakana', romaji: 'hyu', readings: [] },
  { character: 'ヒョ', characterType: 'katakana', romaji: 'hyo', readings: [] },
  { character: 'ミャ', characterType: 'katakana', romaji: 'mya', readings: [] },
  { character: 'ミュ', characterType: 'katakana', romaji: 'myu', readings: [] },
  { character: 'ミョ', characterType: 'katakana', romaji: 'myo', readings: [] },
  { character: 'リャ', characterType: 'katakana', romaji: 'rya', readings: [] },
  { character: 'リュ', characterType: 'katakana', romaji: 'ryu', readings: [] },
  { character: 'リョ', characterType: 'katakana', romaji: 'ryo', readings: [] },
  { character: 'ギャ', characterType: 'katakana', romaji: 'gya', readings: [] },
  { character: 'ギュ', characterType: 'katakana', romaji: 'gyu', readings: [] },
  { character: 'ギョ', characterType: 'katakana', romaji: 'gyo', readings: [] },
  { character: 'ジャ', characterType: 'katakana', romaji: 'ja', readings: [] },
  { character: 'ジュ', characterType: 'katakana', romaji: 'ju', readings: [] },
  { character: 'ジョ', characterType: 'katakana', romaji: 'jo', readings: [] },
  { character: 'ビャ', characterType: 'katakana', romaji: 'bya', readings: [] },
  { character: 'ビュ', characterType: 'katakana', romaji: 'byu', readings: [] },
  { character: 'ビョ', characterType: 'katakana', romaji: 'byo', readings: [] },
  { character: 'ピャ', characterType: 'katakana', romaji: 'pya', readings: [] },
  { character: 'ピュ', characterType: 'katakana', romaji: 'pyu', readings: [] },
  { character: 'ピョ', characterType: 'katakana', romaji: 'pyo', readings: [] },
];
