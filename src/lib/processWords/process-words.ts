import { groupAnagrams, writeOutput } from '@latitude55/lib';

export function processWords(words: string[], callback?: () => void): void {
  const anagrams = groupAnagrams(words);

  writeOutput(anagrams);

  if (callback !== undefined) {
    callback();
  }
}
