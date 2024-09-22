import { isMultiparous } from '@accuser/unist-util-type-guards';
import { describe, expect, it } from 'vitest';

describe('isMultiparous', () => {
	it('returns `false` for a valid parent-like value with an empty `children` attribute', () => {
		expect(
			isMultiparous({
				type: 'tree',
				children: []
			})
		).toBe(false);
	});

	it('returns `false` for a valid parent-like value with a `children` attribute containing one element', () => {
		expect(
			isMultiparous({
				type: 'tree',
				children: [{ type: 'leaf', value: 'Leaf' }]
			})
		).toBe(false);
	});

	it('returns `true` for a valid parent-like value with a `children` attribute containing more than one element', () => {
		expect(
			isMultiparous({
				type: 'tree',
				children: [
					{ type: 'leaf', value: 'Leaf' },
					{ type: 'leaf', value: 'Leaf' }
				]
			})
		).toBe(true);
	});
});
