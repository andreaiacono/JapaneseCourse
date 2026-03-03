import type { Lesson } from '../../models/Course.js';

export const n5ReadingLessons: Record<string, Lesson> = {

  // ─── Tale 1: ポチのいちにち ────────────────────────────────────────────────

  'reading-pochi': {
    id: 'reading-pochi',
    slug: 'reading-pochi',
    title: 'ポチのいちにち',
    subtitle: "Pochi's Day",
    jlptLevel: 'N5',
    estimatedMinutes: 5,
    tags: ['reading'],
    prerequisites: [],
    introduces: [],
    contentBlocks: [
      {
        type: 'text',
        markdown:
          'Read the short tale below. Use **Show Furigana** to reveal the reading of any kanji, and **Show Translations** to see the English meaning of each sentence.'
      },
      {
        type: 'reading',
        title: 'ポチのいちにち',
        titleEn: "Pochi's Day",
        sentences: [
          {
            segments: ['ポチはかわいいいぬです。'],
            en: 'Pochi is a cute dog.'
          },
          {
            segments: ['まい', ['日', 'にち'], '、そとであそびます。'],
            en: 'Every day, he plays outside.'
          },
          {
            segments: ['おひるに、ごはんをたべます。'],
            en: 'At noon, he eats his meal.'
          },
          {
            segments: ['ごはんはだいすきです！'],
            en: 'He loves his meal!'
          },
          {
            segments: ['よるは、', ['家', 'いえ'], 'でねます。'],
            en: 'In the evening, he sleeps at home.'
          },
          {
            segments: ['ポチはまいにちしあわせです。'],
            en: 'Pochi is happy every day.'
          }
        ]
      }
    ],
    practiceExercises: [],
    quiz: [
      {
        id: 'reading-pochi-q1',
        type: 'multiple-choice',
        prompt: 'Comprehension check',
        question: 'What does Pochi love?',
        choices: [
          { id: 'a', text: 'sleeping' },
          { id: 'b', text: 'his meal' },
          { id: 'c', text: 'walking' },
          { id: 'd', text: 'water' }
        ],
        correctChoiceId: 'b',
        explanation: 'ごはんはだいすきです — "He loves his meal!"',
        targets: ['reading-pochi'],
        difficulty: 1
      },
      {
        id: 'reading-pochi-q2',
        type: 'multiple-choice',
        prompt: 'Comprehension check',
        question: 'Where does Pochi sleep in the evening?',
        choices: [
          { id: 'a', text: 'outside' },
          { id: 'b', text: 'at school' },
          { id: 'c', text: 'at home' },
          { id: 'd', text: 'at a store' }
        ],
        correctChoiceId: 'c',
        explanation: 'よるは、家でねます — "In the evening, he sleeps at home."',
        targets: ['reading-pochi'],
        difficulty: 1
      }
    ]
  },

  // ─── Tale 2: わたしのあさ ─────────────────────────────────────────────────

  'reading-morning': {
    id: 'reading-morning',
    slug: 'reading-morning',
    title: 'わたしのあさ',
    subtitle: 'My Morning',
    jlptLevel: 'N5',
    estimatedMinutes: 5,
    tags: ['reading'],
    prerequisites: [],
    introduces: [],
    contentBlocks: [
      {
        type: 'text',
        markdown:
          'Read about a student\'s morning routine. Use **Show Furigana** to see the readings of kanji you are still learning.'
      },
      {
        type: 'reading',
        title: 'わたしのあさ',
        titleEn: 'My Morning',
        sentences: [
          {
            segments: ['まい', ['日', 'にち'], '、', ['七', 'しち'], ['時', 'じ'], 'におきます。'],
            en: 'Every day, I wake up at 7 o\'clock.'
          },
          {
            segments: ['かおをあらって、はをみがきます。'],
            en: 'I wash my face and brush my teeth.'
          },
          {
            segments: ['おかあさんとあさごはんをたべます。'],
            en: 'I eat breakfast with my mom.'
          },
          {
            segments: ['それから、', ['学', 'がく'], ['校', 'こう'], 'へいきます。'],
            en: 'Then, I go to school.'
          },
          {
            segments: [['学', 'がく'], ['校', 'こう'], 'でともだちにあいます。'],
            en: 'I meet my friends at school.'
          },
          {
            segments: ['じゅぎょうはたのしいです。'],
            en: 'Classes are fun.'
          },
          {
            segments: [['家', 'いえ'], 'にかえって、', ['本', 'ほん'], 'をよみます。'],
            en: 'I go home and read a book.'
          }
        ]
      }
    ],
    practiceExercises: [],
    quiz: [
      {
        id: 'reading-morning-q1',
        type: 'multiple-choice',
        prompt: 'Comprehension check',
        question: 'What time does the narrator wake up?',
        choices: [
          { id: 'a', text: '6 o\'clock' },
          { id: 'b', text: '7 o\'clock' },
          { id: 'c', text: '8 o\'clock' },
          { id: 'd', text: '9 o\'clock' }
        ],
        correctChoiceId: 'b',
        explanation: '七時におきます — "I wake up at 7 o\'clock."',
        targets: ['reading-morning'],
        difficulty: 1
      },
      {
        id: 'reading-morning-q2',
        type: 'multiple-choice',
        prompt: 'Comprehension check',
        question: 'What does the narrator do after coming home?',
        choices: [
          { id: 'a', text: 'watches TV' },
          { id: 'b', text: 'eats dinner' },
          { id: 'c', text: 'reads a book' },
          { id: 'd', text: 'goes shopping' }
        ],
        correctChoiceId: 'c',
        explanation: '家にかえって、本をよみます — "I go home and read a book."',
        targets: ['reading-morning'],
        difficulty: 1
      }
    ]
  },

  // ─── Tale 3: はじめてのおかいもの ─────────────────────────────────────────

  'reading-shopping': {
    id: 'reading-shopping',
    slug: 'reading-shopping',
    title: 'はじめてのおかいもの',
    subtitle: 'My First Shopping Trip',
    jlptLevel: 'N5',
    estimatedMinutes: 5,
    tags: ['reading'],
    prerequisites: [],
    introduces: [],
    contentBlocks: [
      {
        type: 'text',
        markdown:
          'Read a short story about a first shopping trip. Notice how dialogue is written using 「　」quotation marks.'
      },
      {
        type: 'reading',
        title: 'はじめてのおかいもの',
        titleEn: 'My First Shopping Trip',
        sentences: [
          {
            segments: ['きょう、おかあさんとスーパーへいきました。'],
            en: 'Today, I went to the supermarket with my mom.'
          },
          {
            segments: ['やさいとくだものをみました。'],
            en: 'We looked at vegetables and fruits.'
          },
          {
            segments: ['「このりんごはいくらですか？」とわたしはきました。'],
            en: '"How much is this apple?" I asked.'
          },
          {
            segments: ['「', ['百', 'ひゃく'], ['円', 'えん'], 'です。」とてんいんさんがいいました。'],
            en: '"It\'s 100 yen," the store clerk said.'
          },
          {
            segments: ['おかあさんはりんごをかいました。'],
            en: 'My mom bought the apple.'
          },
          {
            segments: ['わたしはうれしかったです。'],
            en: 'I was happy.'
          },
          {
            segments: ['かいものはたのしかったです！'],
            en: 'Shopping was fun!'
          }
        ]
      }
    ],
    practiceExercises: [],
    quiz: [
      {
        id: 'reading-shopping-q1',
        type: 'multiple-choice',
        prompt: 'Comprehension check',
        question: 'How much is the apple?',
        choices: [
          { id: 'a', text: '10 yen' },
          { id: 'b', text: '1,000 yen' },
          { id: 'c', text: '100 yen' },
          { id: 'd', text: '500 yen' }
        ],
        correctChoiceId: 'c',
        explanation: '百円です — "It\'s 100 yen."',
        targets: ['reading-shopping'],
        difficulty: 1
      },
      {
        id: 'reading-shopping-q2',
        type: 'multiple-choice',
        prompt: 'Comprehension check',
        question: 'How did the narrator feel after shopping?',
        choices: [
          { id: 'a', text: 'tired' },
          { id: 'b', text: 'sad' },
          { id: 'c', text: 'hungry' },
          { id: 'd', text: 'happy' }
        ],
        correctChoiceId: 'd',
        explanation: 'わたしはうれしかったです — "I was happy."',
        targets: ['reading-shopping'],
        difficulty: 1
      }
    ]
  }
};
