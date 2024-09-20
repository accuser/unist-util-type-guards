import { describe, expect, it } from 'vitest';
import { isParent } from '../dist';

describe('isNode', () => {
	it('returns `true` for a valid paretn node', () => {
		const node = { type: 'tree', children: [] };
		expect(isParent(node)).toBe(true);
	});

	for (const value of [null, undefined, true, false, 'tree', 42, {}, { children: [] }]) {
		it('returns `false` for a non-node value', () => {
			expect(isParent(value)).toBe(false);
		});
	}

	for (const children of [null, undefined, true, false, 42]) {
		it('returns `false` for a node with an invalid children value', () => {
			const node = { type: 'tree', children };
			expect(isParent(node)).toBe(false);
		});
	}
});
