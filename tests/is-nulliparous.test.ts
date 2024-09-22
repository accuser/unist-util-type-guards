import { isNulliparous } from '@accuser/unist-util-type-guards';
import { describe, expect, it } from 'vitest';

describe('isNulliparous', () => {
	it('returns `true` for a valid parent-like value with an empty `children` attribute', () => {
		expect(
			isNulliparous({
				type: 'tree',
				children: []
			})
		).toBe(true);
	});

	it('returns `false` for a valid parent-like value with a `children` attribute containing one element', () => {
		expect(
			isNulliparous({
				type: 'tree',
				children: [{ type: 'leaf', value: 'Leaf' }]
			})
		).toBe(false);
	});

	it('returns `false` for a valid parent-like value with a `children` attribute containing more than one element', () => {
		expect(
			isNulliparous({
				type: 'tree',
				children: [
					{ type: 'leaf', value: 'Leaf' },
					{ type: 'leaf', value: 'Leaf' }
				]
			})
		).toBe(false);
	});
});
