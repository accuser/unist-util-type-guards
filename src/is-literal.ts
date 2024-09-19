import type { Literal } from 'unist';
import isNode from './is-node.js';
import { TypeGuard } from './type-guard.js';

export default ((node) => isNode(node) && 'value' in node) as TypeGuard<Literal>;
