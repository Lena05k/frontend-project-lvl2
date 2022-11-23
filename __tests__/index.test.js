import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import path from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filepath) => readFileSync(getFixturePath(filepath), 'utf-8').trim();

test.each([
  ['file1.json', 'file2.json', 'stylish'],
  ['file1.yml', 'file2.yml'],
  ['file1.json', 'file2.json', 'plain'],
  ['file1.yml', 'file2.yml', 'plain'],
  ['file1.json', 'file2.json', 'json'],
  ['file1.yml', 'file2.yml', 'json'],
])('genDiff-tests(%#)', (file1, file2, format = 'stylish') => {
  const actual = genDiff(getFixturePath(file1), getFixturePath(file2), format);
  const expected = (formatter) => {
    switch (formatter) {
      case 'stylish':
        return readFile('result/result_stylish.txt');
      case 'plain':
        return readFile('result/result_plain.txt');
      case 'json':
        return readFile('result/result_json.txt');
      default:
        throw new Error(`Unknown type of format: ${formatter}`);
    }
  };
  expect(actual).toBe(expected(format));
});
