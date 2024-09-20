import type { Literal } from 'unist';
import isNode from './is-node.js';
import { TypeGuard } from './type-guard.js';

/**
 * Type guard that checks if a value is a {@link Literal} node.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Literal} node.
 * @see {@link https://github.com/syntax-tree/unist#literal} for more information.
 *
 * @example
 * ```ts
 * const node = { type: 'leaf', value: 'value' };
 * isLiteral(node); //=> true, node is Literal
 * ```
 */
export default ((value) => isNode(value) && 'value' in value) as TypeGuard<Literal>;
