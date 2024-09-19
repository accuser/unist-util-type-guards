import { describe, expect, test } from 'vitest';
import isLiteral from './is-literal.js';

describe('isLiteral', () => {
	test('should return `false` for `null`', () => {
		expect(isLiteral(null)).toBe(false);
	});

	test('should return `false` for `undefined`', () => {
		expect(isLiteral(undefined)).toBe(false);
	});

	test('should return `false` for a non-literal node', () => {
		expect(isLiteral({ type: 'node' })).toBe(false);
	});

	test('should return `true` for a valid literal node', () => {
		expect(isLiteral({ type: 'node', value: 'Hello, World!' })).toBe(true);
	});
});
