import { Parent } from 'unist';
import isParent from './is-parent.js';
import { TypeGuard } from './type-guard.js';

export default ((value) => isParent(value) && value.children.length > 1) as TypeGuard<Parent>;
