import { isParent } from '@accuser/unist-util-type-guards';
import { describe, expect, test } from 'vitest';

describe('isLiteral', () => {
	test('should return `false` for `null`', () => {
		expect(isParent(null)).toBe(false);
	});

	test('should return `false` for `undefined`', () => {
		expect(isParent(undefined)).toBe(false);
	});

	test('should return `false` for a non-parent node', () => {
		expect(isParent({ type: 'node' })).toBe(false);
	});

	test('should return `true` for a valid parent node', () => {
		expect(isParent({ type: 'node', children: [] })).toBe(true);
	});
});
