import type { Literal } from 'unist';
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
declare const _default: TypeGuard<Literal>;
export default _default;
