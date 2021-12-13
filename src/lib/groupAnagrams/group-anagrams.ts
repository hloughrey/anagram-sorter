import { sortWordChars, GroupAnagramsResponse } from '@latitude55/lib';

export function groupAnagrams(words: string[]): GroupAnagramsResponse {
  const anagrams = {}; // {abc:[abc,cba], fnu:[fun, unf]}
  words.forEach(word => {
    const sortedWord = sortWordChars(word);
    if (anagrams[sortedWord]) {
      return anagrams[sortedWord].push(word);
    }
    anagrams[sortedWord] = [word];
  });
  return anagrams;
}
