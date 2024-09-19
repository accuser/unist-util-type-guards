import isNode from './is-node.js';
export default ((node) => isNode(node) && 'value' in node);
