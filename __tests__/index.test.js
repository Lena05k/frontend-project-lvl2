import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import path from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filepath) => readFileSync(getFixturePath(filepath), 'utf-8').trim();

const resultStylish = readFile('result/result_stylish.txt');
const resultPlain = readFile('result/result_plain.txt');
const resultJson = readFile('result/result_json.txt');

test.each(['json', 'yml'])('genDiff-tests(%#)', (format) => {
  const fileName1 = getFixturePath(`file1.${format}`);
  const fileName2 = getFixturePath(`file2.${format}`);
  expect(genDiff(fileName1, fileName2)).toEqual(resultStylish);
  expect(genDiff(fileName1, fileName2, 'stylish')).toEqual(resultStylish);
  expect(genDiff(fileName1, fileName2, 'plain')).toEqual(resultPlain);
  expect(genDiff(fileName1, fileName2, 'json')).toEqual(resultJson);
});
