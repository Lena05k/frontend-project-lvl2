import { readFileSync } from 'fs';
import { resolve } from 'path';
import _ from 'lodash';

const genDiff = (filepath1, filepath2) => {
  const file1 = JSON.parse(readFileSync(resolve(filepath1), 'utf-8'));
  const file2 = JSON.parse(readFileSync(resolve(filepath2), 'utf-8'));

  const keys = Object.keys({ ...file1, ...file2 }).sort();

  const getDistinction = keys.map((key) => {
    if (!_.has(file2, key)) {
      return `- ${key}: ${file1[key]}`;
    }
    if (!_.has(file1, key)) {
      return `+ ${key}: ${file2[key]}`;
    }
    if (file1[key] === file2[key]) {
      return `  ${key}: ${file1[key]}`;
    }
    return `- ${key}: ${file1[key]}\n  + ${key}: ${file2[key]}`;
  }).join('\n  ');
  console.log(`{\n  ${getDistinction}\n}`);
};

export default genDiff;
