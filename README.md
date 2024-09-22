# TypeScript Type Guards for Unist Nodes

This package provides TypeScript type guards for [Unist](https://github.com/syntax-tree/unist) nodes.

## Installation

```sh
npm install @accuser/unist-util-type-guards
```

## Usage

```ts
import { isNode } from '@accuser/unist-util-type-guards';

const node = {
  type: 'leaf',
  value: 'Leaf'
};

isNode(node); // true, node is Node
isLiteral(node); // true, node is Literal
isParent(node); // false
```

## API

This package exports the following identifiers:

- [`isLiteral`](api-isliteral)
- [`isMonoparous`](api-ismonoparous)
- [`isMultiparous`](api-ismultiparous)
- [`isNode`](api-isnode)
- [`isNulliparous`](api-isnulliparous)
- [`isParent`](api-isparent)

This package exports the following types:

- [`TypeGuard`](api-typeguard)

There is no default export.

### `isLiteral(value: unknown): node is Literal`

Test is the given value is a valid [`Literal`](literal).

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid [`Literal`](literal).

### `isMonoparous(value: unknown): value is Parent`

Test is a given value is a valid [`Parent`](parent) with exactly one child.

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid [`Parent`](parent) with exactly one child.

### `isMultiparous(value: unknown): value is Parent`

Test is a given value is a valid [`Parent`](parent) with more than one child.

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid [`Parent`](parent) with more than one child.

### `isNode(value: unknown): value is Node`

Test is a given value is a valid [`Node`](node).

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid [`Node`](node).

### `isNulliparous(value: unknown): value is Parent`

Test is a given value is a valid [`Parent`](parent) with no children.

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid [`Parent`](parent) with no children.

### `isParent(value: unknown): value is Parent`

Test is a given value is a valid [`Parent`](parent).

###### Parameters

* `node` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid [`Parent`](parent).

## Tests

```sh
npm test
```

## License

[MIT](https://raw.githubusercontent.com/accuser/unist-util-type-guards/main/LICENSE)

[api-isliteral]: #isliteralvalue-unknown-value-is-literal
[api-ismonoparous]: #ismonoparousvalue-unknown-value-is-parent
[api-ismultiparous]: #ismultiparousvalue-unknown-value-is-parent
[api-isnode]: #isnodevalue-unknown-value-is-node
[api-isnulliparous]: #isnulliparousvalue-unknown-value-is-parent
[api-isparent]: #isparentvalue-value-unknown-value-is-parent
[literal]: https://github.com/syntax-tree/unist#literal
[parent]: https://github.com/syntax-tree/unist#parent
[node]: https://github.com/syntax-tree/unist#node