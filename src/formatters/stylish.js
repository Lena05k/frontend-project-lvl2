import _ from 'lodash';

const genIndent = (depth, str = ' ', spacesCount = 4) => str.repeat((depth * spacesCount) - 2);
const stringify = (node, depth = 1) => {
  if (!_.isObject(node)) {
    return node;
  }
  const lines = Object.entries(node).map(([key, value]) => `${genIndent(depth + 1)}  ${key}: ${stringify(value, depth + 1)}`);

  return `{\n${lines.join('\n')}\n  ${genIndent(depth)}}`;
};

const stylish = (data) => {
  const iter = (node, depth = 1) => {
    const lines = node.map((diff) => {
      switch (diff.type) {
        case 'nested':
          return `${genIndent(depth)}  ${diff.key}: {\n${iter(diff.children, depth + 1)}\n${genIndent(depth)}  }`;
        case 'added':
          return `${genIndent(depth)}+ ${diff.key}: ${stringify(diff.value2, depth)}`;
        case 'deleted':
          return `${genIndent(depth)}- ${diff.key}: ${stringify(diff.value1, depth)}`;
        case 'unchanged':
          return `${genIndent(depth)}  ${diff.key}: ${stringify(diff.value1, depth)}`;
        case 'changed':
          return `${genIndent(depth)}- ${diff.key}: ${stringify(diff.value1, depth)}\n${genIndent(depth)}+ ${diff.key}: ${stringify(diff.value2, depth)}`;
        default:
          throw new Error(`Unknown type of data: ${diff.type}`);
      }
    });
    return lines.join('\n');
  };
  return `{\n${iter(data)}\n}`;
};

export default stylish;
