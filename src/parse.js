import yaml from 'js-yaml';

const parseFile = (data, format) => {
    let parse;
    if (format === '.json') {
       parse = JSON.parse;
    } else if (format === '.yml' || format === '.yaml') {
        parse = yaml.load;
    } else {
        throw new Error(`The file extension "${format}" is not supported.`)
    }
    return parse(data);
}

export default parseFile;
