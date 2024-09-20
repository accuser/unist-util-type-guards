import { TypeGuard } from './type-guard.js';

/**
 * Type guard that checks if a value is a {@link Node} node.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Node} node.
 * @see {@link https://github.com/syntax-tree/unist#node} for more information.
 *
 * @example
 * ```ts
 * const node = { type: 'leaf' };
 * isNode(node); //=> true, node is Node
 * ```
 */
export default ((value) =>
	value !== null &&
	value !== undefined &&
	typeof value === 'object' &&
	'type' in value &&
	typeof value.type === 'string') as TypeGuard;
