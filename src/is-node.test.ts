import { describe, expect, test } from 'vitest';
import isNode from './is-node.js';

describe('isNode', () => {
	test('should return `false` for `null`', () => {
		expect(isNode(null)).toBe(false);
	});

	test('should return `false` for `undefined`', () => {
		expect(isNode(undefined)).toBe(false);
	});

	test('should return `true` for a valid node', () => {
		expect(isNode({ type: 'node' })).toBe(true);
	});
});
