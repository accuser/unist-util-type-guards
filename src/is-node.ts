import { TypeGuard } from './type-guard.js';

export default ((node) =>
	node !== null &&
	node !== undefined &&
	typeof node === 'object' &&
	'type' in node &&
	typeof node.type === 'string') as TypeGuard;
