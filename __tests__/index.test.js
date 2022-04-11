import genDiff from '../src/index.js';
import {getFixturePath} from "../src/test-file-path.js";

const filepath1 = getFixturePath('file1.json');
const filepath2 = getFixturePath('file2.json');
const expected =
    `{
      - follow: false
        host: hexlet.io
      - proxy: 123.234.53.22
      - timeout: 50
      + timeout: 20
      + verbose: true
    }`;

test('genDiff', () => {
    expect(genDiff( filepath1, filepath2 )).toEqual(expected);
});
