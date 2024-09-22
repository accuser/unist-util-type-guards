import { isLiteral } from '@accuser/unist-util-type-guards';
import { describe, expect, it } from 'vitest';

describe('isLiteral', () => {
	it('returns `true` for a valid literal-like value', () => {
		expect(isLiteral({ type: 'leaf', value: 'Leaf' })).toBe(true);
	});

	for (const value of [
		null,
		undefined,
		true,
		false,
		'leaf',
		42,
		[],
		{},
		{ type: 'leaf' },
		{ value: 'Leaf' }
	]) {
		it('returns `false` for a non-literal-like value', () => {
			expect(isLiteral(value)).toBe(false);
		});
	}
});
