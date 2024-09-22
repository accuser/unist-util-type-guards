import isParent from './is-parent.js';
export default ((value) => isParent(value) && value.children.length === 1);
