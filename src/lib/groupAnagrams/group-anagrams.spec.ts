import { groupAnagrams } from './group-anagrams';

describe('groupAnagrams', () => {
  it('should sort words', () => {
    const words = ['fun', 'unf', 'hello', 'holle'];

    const result = groupAnagrams(words);

    expect(result).toEqual({ fnu: ['fun', 'unf'], ehllo: ['hello', 'holle'] });
  });
});
