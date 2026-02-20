export const VISUAL_SIMILARITY_GROUPS: string[][] = [
  // Body parts and people
  ['人', '入', '八'],
  ['大', '犬', '太'],
  ['木', '本', '休'],
  ['日', '目', '白', '自'],
  ['月', '円', '用'],
  ['口', '田', '四'],
  // Numbers and simple strokes
  ['一', '二', '三'],
  ['十', '千', '土'],
  ['百', '白'],
  ['万', '方'],
  // Direction/position
  ['上', '下', '止'],
  ['左', '右', '友'],
  ['北', '出'],
  // Time-related
  ['今', '分'],
  ['年', '午'],
  ['時', '持'],
  // Water/nature
  ['水', '氷'],
  ['山', '出'],
  ['川', '州'],
  ['雨', '電'],
  // Actions
  ['見', '貝'],
  ['聞', '間', '開', '閉'],
  ['読', '売', '買'],
  ['書', '言'],
  ['話', '語'],
  ['食', '飲'],
  ['行', '待'],
  ['来', '米'],
  ['立', '音'],
  ['走', '起'],
  // Body-related
  ['手', '毎'],
  ['足', '是'],
  ['耳', '取'],
  ['頭', '頁'],
  ['顔', '願'],
  // Family
  ['父', '文'],
  ['母', '毎'],
  ['兄', '見'],
  ['姉', '妹'],
  // Places
  ['店', '占'],
  ['家', '室'],
  ['校', '学'],
  ['国', '園'],
  ['町', '村'],
  ['市', '布'],
  ['道', '通', '遠'],
  // Nature
  ['花', '茶'],
  ['天', '夫'],
  ['気', '汽'],
  ['空', '窓'],
  ['海', '毎'],
  // Compounds/complex
  ['新', '親'],
  ['明', '朝', '暗'],
  ['春', '秋'],
  ['夏', '冬'],
  ['寒', '漢'],
  ['暑', '暖'],
  ['強', '勉'],
  ['動', '働'],
  // Time of day
  ['夕', '少'],
  ['晩', '映'],
  // Colors
  ['赤', '青'],
  ['黒', '里'],
  ['白', '百'],
  // Animals
  ['牛', '午'],
  ['犬', '大'],
  ['魚', '鳥'],
  // Misc similar shapes
  ['元', '先'],
  ['考', '老'],
  ['計', '言'],
  ['習', '羽'],
  ['部', '都'],
  ['院', '完']
];

export const ENGLISH_SPELLING_SIMILARITY: Record<string, string[]> = {
  one: ['won'],
  two: ['too', 'to'],
  three: ['tree', 'free'],
  four: ['for', 'fore'],
  eight: ['ate', 'late'],
  tree: ['three', 'free'],
  big: ['pig', 'bag', 'dig'],
  dog: ['fog', 'log'],
  man: ['men', 'map', 'can'],
  woman: ['women'],
  child: ['chill', 'mild'],
  see: ['sea', 'seen'],
  hear: ['here', 'near'],
  read: ['red', 'lead'],
  write: ['right', 'white'],
  speak: ['peak', 'week'],
  talk: ['walk', 'tall'],
  buy: ['by', 'bye'],
  sell: ['tell', 'bell'],
  eat: ['beat', 'seat'],
  drink: ['think'],
  go: ['no', 'so', 'do'],
  come: ['some', 'home'],
  walk: ['talk', 'work'],
  run: ['sun', 'fun', 'gun'],
  stand: ['hand', 'land', 'sand'],
  day: ['way', 'pay', 'say'],
  week: ['weak', 'peek'],
  month: ['mouth'],
  year: ['near', 'fear', 'hear'],
  north: ['forth'],
  south: ['mouth'],
  east: ['feast', 'least'],
  west: ['rest', 'best', 'test'],
  hot: ['hat', 'hit', 'lot'],
  cold: ['hold', 'gold', 'old'],
  new: ['knew', 'few'],
  old: ['cold', 'gold', 'hold'],
  high: ['sigh'],
  long: ['song', 'wrong'],
  short: ['sport', 'port'],
  small: ['smell', 'stall', 'tall'],
  white: ['write', 'right'],
  black: ['back', 'lack'],
  red: ['read', 'bed', 'fed'],
  blue: ['blew', 'clue'],
  fire: ['wire', 'tire'],
  water: ['waiter'],
  rain: ['train', 'brain', 'grain'],
  wind: ['find', 'kind', 'mind'],
  father: ['farther'],
  mother: ['other', 'brother'],
  friend: ['fiend'],
  school: ['cool', 'pool'],
  book: ['look', 'cook', 'took'],
  study: ['muddy']
};

export class KanjiSimilarityMap {
  private kanjiToGroup: Map<string, Set<string>> = new Map();

  constructor() {
    for (const group of VISUAL_SIMILARITY_GROUPS) {
      for (const kanji of group) {
        if (!this.kanjiToGroup.has(kanji)) {
          this.kanjiToGroup.set(kanji, new Set());
        }
        for (const other of group) {
          this.kanjiToGroup.get(kanji)!.add(other);
        }
      }
    }
  }

  getVisuallySimilarKanji(kanji: string): string[] {
    const group = this.kanjiToGroup.get(kanji);
    if (!group) return [];
    return [...group].filter((k) => k !== kanji);
  }

  getSimilarEnglishWords(meaning: string): string[] {
    const lower = meaning.toLowerCase().trim();
    if (lower in ENGLISH_SPELLING_SIMILARITY) {
      return ENGLISH_SPELLING_SIMILARITY[lower];
    }
    const similar: Set<string> = new Set();
    for (const [key, values] of Object.entries(ENGLISH_SPELLING_SIMILARITY)) {
      if (values.includes(lower)) {
        similar.add(key);
        for (const v of values) {
          if (v !== lower) similar.add(v);
        }
      }
    }
    return [...similar];
  }
}

export function levenshteinDistance(a: string, b: string): number {
  const matrix: number[][] = Array.from({ length: b.length + 1 }, (_, i) => [i]);
  matrix[0] = Array.from({ length: a.length + 1 }, (_, j) => j);

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b[i - 1] === a[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

export function findSimilarMeanings(
  target: string,
  candidates: string[],
  maxDistance = 3
): string[] {
  return candidates
    .filter((c) => c.toLowerCase() !== target.toLowerCase())
    .map((c) => ({ meaning: c, dist: levenshteinDistance(target.toLowerCase(), c.toLowerCase()) }))
    .filter(({ dist }) => dist <= maxDistance)
    .sort((a, b) => a.dist - b.dist)
    .map(({ meaning }) => meaning);
}
