export function sortWordChars(word: string): string {
  if (!word) return;

  return [...word].sort().join('');
}
