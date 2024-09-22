import { describe, expect, it } from 'vitest';
import { isNode } from '../dist';

describe('isNode', () => {
	it('returns `true` for a valid node-like value', () => {
		const node = { type: 'leaf' };
		expect(isNode(node)).toBe(true);
	});

	for (const value of [null, undefined, true, false, 'leaf', 42, [], {}]) {
		it('returns `false` for a non-node-like value', () => {
			expect(isNode(value)).toBe(false);
		});
	}
});
