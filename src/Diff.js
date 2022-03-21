import { readFileSync } from 'fs';
import _ from 'lodash';
import path from 'path';

const operators = { minus: '-', plus: '+' };

const genDiff = (filepath1, filepath2) => {
    const absoluteFile = path.resolve(filepath1);
    console.log(readFileSync(absoluteFile, 'utf8'))
    console.log(readFileSync(filepath1, 'utf8'))
}

