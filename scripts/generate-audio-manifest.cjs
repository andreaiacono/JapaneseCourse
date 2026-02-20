#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const audioDir = path.join(__dirname, '..', 'static', 'audio');
const outputPath = path.join(__dirname, '..', 'src', 'lib', 'data', 'audio-manifest.json');

function katakanaToHiragana(text) {
  return text
    .split('')
    .map((c) => {
      const code = c.charCodeAt(0);
      return code >= 0x30a0 && code <= 0x30ff ? String.fromCharCode(code - 0x60) : c;
    })
    .join('');
}

function findWordAudioFile(allFiles, character, reading, kunYomi, onYomi) {
  const readingHiragana = katakanaToHiragana(reading);

  // Try exact match with kun yomi
  for (const yomi of kunYomi) {
    const yomiHiragana = katakanaToHiragana(yomi);
    if (readingHiragana === yomiHiragana || reading === yomi) {
      const target = `${character}_kun_${yomi}.mp3`;
      if (allFiles.includes(target)) return `kun_${yomi}`;
    }
  }

  // Try exact match with on yomi
  for (const yomi of onYomi) {
    const yomiHiragana = katakanaToHiragana(yomi);
    if (readingHiragana === yomiHiragana || reading === yomi) {
      const target = `${character}_on_${yomi}.mp3`;
      if (allFiles.includes(target)) return `on_${yomi}`;
    }
  }

  // Try substring matching for compound words
  let bestMatch = null;
  let bestMatchLen = 0;

  for (const yomi of kunYomi) {
    const yomiHiragana = katakanaToHiragana(yomi);
    if (readingHiragana.includes(yomiHiragana) && yomiHiragana.length > bestMatchLen) {
      const target = `${character}_kun_${yomi}.mp3`;
      if (allFiles.includes(target)) {
        bestMatch = `kun_${yomi}`;
        bestMatchLen = yomiHiragana.length;
      }
    }
  }

  for (const yomi of onYomi) {
    const yomiHiragana = katakanaToHiragana(yomi);
    if (readingHiragana.includes(yomiHiragana) && yomiHiragana.length > bestMatchLen) {
      const target = `${character}_on_${yomi}.mp3`;
      if (allFiles.includes(target)) {
        bestMatch = `on_${yomi}`;
        bestMatchLen = yomiHiragana.length;
      }
    }
  }

  return bestMatch;
}

const manifest = { hiragana: [], katakana: [], kanji_n5: [], kanji_n4: [] };

// Process kana directories
for (const kanaType of ['hiragana', 'katakana']) {
  const dir = path.join(audioDir, kanaType);
  if (!fs.existsSync(dir)) {
    console.warn(`Warning: ${dir} not found`);
    continue;
  }

  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mp3'))
    .sort();
  const charMap = {};

  for (const file of files) {
    const stem = file.replace('.mp3', '');
    const underscoreIdx = stem.indexOf('_');
    if (underscoreIdx === -1) continue;
    const character = stem.substring(0, underscoreIdx);
    const romaji = stem.substring(underscoreIdx + 1);

    if (!charMap[character]) {
      charMap[character] = { character, romaji, audioFiles: [] };
    }
    charMap[character].audioFiles.push(`audio/${kanaType}/${file}`);
  }

  manifest[kanaType] = Object.values(charMap);
}

// Process kanji directories
for (const [kanjiType, jlptLevel] of [
  ['kanji_n5', 'N5'],
  ['kanji_n4', 'N4']
]) {
  const dir = path.join(audioDir, kanjiType);
  if (!fs.existsSync(dir)) {
    console.warn(`Warning: ${dir} not found`);
    continue;
  }

  const jsonFile = path.join(
    dir,
    `${kanjiType.replace('kanji_', '')}_kanji_data.json`
  );
  let kanjiData = [];
  if (fs.existsSync(jsonFile)) {
    kanjiData = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));
  }

  // Build kanji data index
  const kanjiIndex = {};
  for (const entry of kanjiData) {
    kanjiIndex[entry.character] = entry;
  }

  const allFiles = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mp3'))
    .sort();
  const charMap = {};

  for (const file of allFiles) {
    const stem = file.replace('.mp3', '');
    const parts = stem.split('_');
    if (parts.length < 3) continue;

    const character = parts[0];
    const readingType = parts[1]; // 'kun' or 'on'
    const readingText = parts.slice(2).join('_');

    if (!charMap[character]) {
      const kanjiEntry = kanjiIndex[character];
      const meaning = kanjiEntry ? (kanjiEntry.meanings || [])[0] || '' : '';
      const kunYomi = kanjiEntry ? kanjiEntry.kun_yomi || [] : [];
      const onYomi = kanjiEntry ? kanjiEntry.on_yomi || [] : [];

      // Build words list from JSON data
      const words = [];
      if (kanjiEntry && kanjiEntry.words) {
        for (const wordEntry of kanjiEntry.words) {
          if (!wordEntry.word || !wordEntry.meaning) continue;

          const readingKey = findWordAudioFile(
            allFiles,
            character,
            wordEntry.reading,
            kunYomi,
            onYomi
          );
          const audioFile = readingKey
            ? `audio/${kanjiType}/${character}_${readingKey}.mp3`
            : null;

          words.push({
            word: wordEntry.word,
            reading: wordEntry.reading,
            meaning: wordEntry.meaning,
            kanji: character,
            audioFile,
            jlptLevel
          });
        }
      }

      charMap[character] = {
        character,
        meaning,
        jlptLevel,
        readings: [],
        words
      };
    }

    charMap[character].readings.push({
      text: readingText,
      readingType,
      audioFile: `audio/${kanjiType}/${file}`
    });
  }

  manifest[kanjiType] = Object.values(charMap);
}

// Ensure output directory exists
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(manifest, null, 2));

const totalWords =
  manifest.kanji_n5.reduce((s, k) => s + k.words.length, 0) +
  manifest.kanji_n4.reduce((s, k) => s + k.words.length, 0);

console.log('Generated audio-manifest.json:');
console.log(`  Hiragana:  ${manifest.hiragana.length} characters`);
console.log(`  Katakana:  ${manifest.katakana.length} characters`);
console.log(`  Kanji N5:  ${manifest.kanji_n5.length} characters`);
console.log(`  Kanji N4:  ${manifest.kanji_n4.length} characters`);
console.log(`  Total words: ${totalWords}`);
