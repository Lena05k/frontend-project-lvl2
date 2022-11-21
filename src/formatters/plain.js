import _ from 'lodash';

const getFormattedValue = (value) => {
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  if (_.isObject(value)) {
    return '[complex value]';
  }
  return value;
};

const stylish = (tree) => {
  const iter = (node, path) => {
    const lines = node
      .map((diff) => {
        const keyPath = (path === '' ? `${diff.key}` : `${path}.${diff.key}`);

        switch (diff.type) {
          case 'nested':
            return iter(diff.children, keyPath);
          case 'added':
            return `Property '${keyPath}' was added with value: ${getFormattedValue(diff.value2)}`;
          case 'deleted':
            return `Property '${keyPath}' was removed`;
          case 'changed':
            return `Property '${keyPath}' was updated. From ${getFormattedValue(diff.value1)} to ${getFormattedValue(diff.value2)}`;
          case 'unchanged':
            return null;
          default:
            throw new Error(`Unknown type of diff: ${diff.type}`);
        }
      });
    return [...lines].filter(Boolean).join('\n');
  };
  return iter(tree, '');
};

export default stylish;
