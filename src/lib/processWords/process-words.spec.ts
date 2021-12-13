import { processWords } from './process-words';

describe('processWords', () => {
  const mockConsoleLog = jest.spyOn(global.console, 'log').mockImplementation();

  it('should sort words', () => {
    const words = ['fun', 'unf', 'hello', 'holle'];

    processWords(words);

    expect(mockConsoleLog).toHaveBeenCalledTimes(2);
    expect(mockConsoleLog).toHaveBeenCalledWith('fun,unf');
    expect(mockConsoleLog).toHaveBeenCalledWith('hello,holle');

    mockConsoleLog.mockRestore();
  });
});
