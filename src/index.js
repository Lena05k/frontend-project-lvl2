import { readFileSync } from 'fs';
import path from 'path';
import parse from './parsers.js';
import buildDiff from './buildDiff.js';
import format from './formatters/index.js';

const getData = (filePath) => readFileSync(path.resolve(process.cwd(), filePath));
const getFormat = (filePath) => path.extname(filePath).slice(1);

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const data1 = parse(getData(filepath1), getFormat(filepath1));
  const data2 = parse(getData(filepath2), getFormat(filepath2));
  return format(buildDiff(data1, data2), formatName);
};

export default genDiff;
