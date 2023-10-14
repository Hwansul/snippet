const str =
  'The quick brown fox jumps over the lazy dog. The jay, pig, fox, zebra and my wolves quack!';
const cutOff = 50;

const wordSegmenter = new Intl.Segmenter('en-US', { granularity: 'word' });
const sentenceSegmenter = new Intl.Segmenter('en-US', {
  granularity: 'sentence',
});

let lastWordBreak = -1;
for (let word of wordSegmenter.segment(str)) {
  if (word.isWordLike) continue;
  if (word.index >= cutOff) break;
  lastWordBreak = word.index;
}
str.slice(0, lastWordBreak) + '...';
// 'The quick brown fox jumps over the lazy dog. The...'

let lastSentenceBreak = -1;
for (let sentence of sentenceSegmenter.segment(str)) {
  if (
    lastSentenceBreak !== -1 &&
    sentence.index + sentence.segment.length >= cutOff
  )
    break;
  lastSentenceBreak = sentence.index + sentence.segment.length;
}
str.slice(0, lastSentenceBreak).trim().slice(0, -1) + '...';
// 'The quick brown fox jumps over the lazy dog...'
