import genDiff from '../src/index.js';

const result = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

test('genDiff JSON', () => {
  const filepath1 = './__fixtures__/file1.json';
  const filepath2 = './__fixtures__/file2.json';
  expect(genDiff(filepath1, filepath2)).toEqual(result);
});

test('genDiff YAML', () => {
  const fileYaml1 = './__fixtures__/file1.yml';
  const fileYaml2 = './__fixtures__/file2.yml';
  expect(genDiff(fileYaml1, fileYaml2)).toBe(result);
});
