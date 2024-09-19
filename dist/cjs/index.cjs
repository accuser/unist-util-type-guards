"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isParent = exports.isNode = exports.isLiteral = void 0;
var is_literal_js_1 = require("./is-literal.cjs");
Object.defineProperty(exports, "isLiteral", { enumerable: true, get: function () { return __importDefault(is_literal_js_1).default; } });
var is_node_js_1 = require("./is-node.cjs");
Object.defineProperty(exports, "isNode", { enumerable: true, get: function () { return __importDefault(is_node_js_1).default; } });
var is_parent_js_1 = require("./is-parent.cjs");
Object.defineProperty(exports, "isParent", { enumerable: true, get: function () { return __importDefault(is_parent_js_1).default; } });
