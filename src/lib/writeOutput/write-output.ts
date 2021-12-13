import { GroupAnagramsResponse } from '@latitude55/lib';

export function writeOutput(anagrams: GroupAnagramsResponse): void {
  Object.keys(anagrams).forEach(key =>
    console.log([...new Set(anagrams[key])].join(','))
  );
}
