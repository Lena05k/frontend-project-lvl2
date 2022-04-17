import genDiff from '../src/index.js';

const filepath1 = './__fixtures__/file1.json';
const filepath2 = './__fixtures__/file2.json';
const result = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

test('genDiff', () => {
  expect(genDiff(filepath1, filepath2)).toBe(result);
});
