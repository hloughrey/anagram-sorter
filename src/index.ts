import readline from 'readline';
import path from 'path';
import fs from 'fs';

import { processWords } from '@latitude55/lib';

function readFileAsStream(fileName: string): void {
  const file = path.join(__dirname, 'data', fileName);
  const arrayOfWords: string[] = [];
  let letterLength: number;
  const readStream = fs.createReadStream(file, 'utf8');

  function processWordsCallback(line: string) {
    letterLength = line.length;
    arrayOfWords.length = 0;
    arrayOfWords.push(line);
    rl.resume();
  }

  const rl = readline.createInterface({
    input: readStream,
    crlfDelay: Number.POSITIVE_INFINITY,
  });

  rl.on('line', line => {
    if (letterLength === undefined) {
      letterLength = line.length;
    }

    if (line.length === letterLength) {
      arrayOfWords.push(line);
    }

    if (line.length > letterLength) {
      rl.pause();
      processWords(arrayOfWords, () => processWordsCallback(line));
    }
  });

  rl.on('close', () => processWords(arrayOfWords));
}

readFileAsStream('example1.txt');
