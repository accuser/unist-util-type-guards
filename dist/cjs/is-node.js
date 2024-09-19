"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ((node) => node !== null &&
    node !== undefined &&
    typeof node === 'object' &&
    'type' in node &&
    typeof node.type === 'string');
