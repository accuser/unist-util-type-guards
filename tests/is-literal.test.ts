import { isLiteral } from '@accuser/unist-util-type-guards';
import { describe, expect, it } from 'vitest';

describe('isLiteral', () => {
	it('returns `true` for a valid node', () => {
		const node = { type: 'leaf', value: 'value' };
		expect(isLiteral(node)).toBe(true);
	});

	for (const value of [null, undefined, true, false, 'leaf', 42, {}]) {
		it('returns `false` for a non-node value', () => {
			expect(isLiteral(value)).toBe(false);
		});
	}

	for (const value of [null, undefined, true, false, 42, {}]) {
		it('returns `false` for a node with an invalid value type', () => {
			expect(isLiteral({ type: 'leaf', value })).toBe(false);
		});
	}
});
