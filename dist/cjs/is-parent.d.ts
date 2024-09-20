import type { Parent } from 'unist';
import { TypeGuard } from './type-guard.js';
/**
 * Type guard that checks if a value is a {@link Parent} node.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Parent} node.
 * @see {@link https://github.com/syntax-tree/unist#parent} for more information.
 *
 * @example
 * ```ts
 * const node = { type: 'tree', children: [] };
 * isParent(node); //=> true, node is Parent
 * ```
 */
declare const _default: TypeGuard<Parent>;
export default _default;
