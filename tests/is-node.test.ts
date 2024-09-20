import { describe, expect, it } from 'vitest';
import { isNode } from '../dist';

describe('isNode', () => {
	it('returns `true` for a valid node', () => {
		const node = { type: 'leaf' };
		expect(isNode(node)).toBe(true);
	});

	for (const value of [null, undefined, true, false, 'leaf', 42, {}]) {
		it('returns `false` for a non-node value', () => {
			expect(isNode(value)).toBe(false);
		});
	}

	for (const type of [null, undefined, true, false, 42, {}]) {
		it('returns `false` for a node with an invalid type', () => {
			expect(isNode({ type })).toBe(false);
		});
	}
});
