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

- [`isLiteral`](#isliteralvalue-unknown-node-is-literal)
- [`isMonoparous`](#ismonoparousvalue-unknown-value-is-parent)
- [`isMultiparous`](#ismultiparousvalue-unknown-value-is-parent)
- [`isNode`](#isnodevalue-unknown-value-is-node)
- [`isNulliparous`](#isnulliparousvalue-unknown-value-is-parent)
- [`isParent`](#isparentvalue-unknown-value-is-parent)

There is no default export.

### `isLiteral(value: unknown): node is Literal`

Test is the given value is a valid [`Literal`](https://github.com/syntax-tree/unist#literal).

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid [`Literal`](https://github.com/syntax-tree/unist#literal).

### `isMonoparous(value: unknown): value is Parent`

Test is a given value is a valid [`Parent`](https://github.com/syntax-tree/unist#parent) with exactly one child.

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid [`Parent`](https://github.com/syntax-tree/unist#parent) with exactly one child.

### `isMultiparous(value: unknown): value is Parent`

Test is a given value is a valid [`Parent`](https://github.com/syntax-tree/unist#parent) with more than one child.

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid [`Parent`](https://github.com/syntax-tree/unist#parent) with more than one child.

### `isNode(value: unknown): value is Node`

Test is a given value is a valid [`Node`](https://github.com/syntax-tree/unist#node).

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid [`Node`](https://github.com/syntax-tree/unist#node).

### `isNulliparous(value: unknown): value is Parent`

Test is a given value is a valid [`Parent`](https://github.com/syntax-tree/unist#parent) with no children.

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid [`Parent`](https://github.com/syntax-tree/unist#parent) with no children.

### `isParent(value: unknown): value is Parent`

Test is a given value is a valid [`Parent`](https://github.com/syntax-tree/unist#parent).

###### Parameters

* `node` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid [`Parent`](https://github.com/syntax-tree/unist#parent).

## Tests

```sh
npm test
```

## License

[MIT](https://raw.githubusercontent.com/accuser/unist-util-type-guards/main/LICENSE)
