"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const is_node_js_1 = __importDefault(require("./is-node.cjs"));
exports.default = ((node) => (0, is_node_js_1.default)(node) && 'children' in node && Array.isArray(node.children));
