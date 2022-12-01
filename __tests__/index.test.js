import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import path from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filepath) => readFileSync(getFixturePath(filepath), 'utf-8').trim();

test.each([
  ['file1.json', 'file2.json', 'result/result_stylish.txt', 'stylish'],
  ['file1.yml', 'file2.yml', 'result/result_stylish.txt', 'stylish'],
  ['file1.json', 'file2.json', 'result/result_plain.txt', 'plain'],
  ['file1.yml', 'file2.yml', 'result/result_plain.txt', 'plain'],
  ['file1.json', 'file2.json', 'result/result_json.txt', 'json'],
  ['file1.yml', 'file2.yml', 'result/result_json.txt', 'json'],
])('genDiff-tests(%#)', (file1, file2, resultFileName, format = 'stylish') => {
  const result = genDiff(getFixturePath(file1), getFixturePath(file2), format);
  expect(result).toEqual(readFile(resultFileName));
});

test('Formater', () => {
  const expected = readFile('result/result_stylish.txt');
  const actual = genDiff(getFixturePath('file1.json'), getFixturePath('file2.yml'));
  expect(actual).toEqual(expected);
});
