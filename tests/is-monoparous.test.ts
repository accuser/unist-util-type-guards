import { isMonoparous } from '@accuser/unist-util-type-guards';
import { describe, expect, it } from 'vitest';

describe('isMonoparous', () => {
	it('returns `false` for a valid parent-like value with an empty `children` attribute', () => {
		expect(
			isMonoparous({
				type: 'tree',
				children: []
			})
		).toBe(false);
	});

	it('returns `true` for a valid parent-like value with a `children` attribute containing one element', () => {
		expect(
			isMonoparous({
				type: 'tree',
				children: [{ type: 'leaf', value: 'Leaf' }]
			})
		).toBe(true);
	});

	it('returns `false` for a valid parent-like value with a `children` attribute containing more than one element', () => {
		expect(
			isMonoparous({
				type: 'tree',
				children: [
					{ type: 'leaf', value: 'Leaf' },
					{ type: 'leaf', value: 'Leaf' }
				]
			})
		).toBe(false);
	});
});
