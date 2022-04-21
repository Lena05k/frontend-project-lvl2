import { readFileSync } from 'fs';
import { resolve, extname } from 'path';
import _ from 'lodash';
import parseFile from "./parse.js";

const genDiff = (filePath1, filePath2) => {
  const extName1 = extname(filePath1);
  const extName2 = extname(filePath2);
  const readFile = (filePath) => readFileSync(resolve(filePath), 'utf-8');
  const file1 = parseFile(readFile(filePath1), extName1);
  const file2 = parseFile(readFile(filePath2), extName2);

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

  return `{\n  ${getDistinction}\n}`;
};

export default genDiff;
