import { describe, expect, it } from 'vitest';
import { isParent } from '../dist';

describe('isParent', () => {
	it('returns `true` for a valid parent-like value', () => {
		const node = { type: 'tree', children: [] };
		expect(isParent(node)).toBe(true);
	});

	for (const value of [null, undefined, true, false, 'tree', 42, {}, { children: [] }]) {
		it('returns `false` for a non-parent-like value', () => {
			expect(isParent(value)).toBe(false);
		});
	}

	for (const children of [null, undefined, true, false, 42, {}]) {
		it('returns `false` for an invalid children value', () => {
			const node = { type: 'tree', children };
			expect(isParent(node)).toBe(false);
		});
	}
});
