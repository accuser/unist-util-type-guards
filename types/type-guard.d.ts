type TypeGuard<T extends import('unist').Node = import('unist').Node> = (
	node: unknown
) => node is T;
