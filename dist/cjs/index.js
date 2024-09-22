"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isParent = exports.isNulliparous = exports.isNode = exports.isMultiparous = exports.isMonoparous = exports.isLiteral = void 0;
var is_literal_js_1 = require("./is-literal.js");
Object.defineProperty(exports, "isLiteral", { enumerable: true, get: function () { return __importDefault(is_literal_js_1).default; } });
var is_monoparous_js_1 = require("./is-monoparous.js");
Object.defineProperty(exports, "isMonoparous", { enumerable: true, get: function () { return __importDefault(is_monoparous_js_1).default; } });
var is_multiparous_js_1 = require("./is-multiparous.js");
Object.defineProperty(exports, "isMultiparous", { enumerable: true, get: function () { return __importDefault(is_multiparous_js_1).default; } });
var is_node_js_1 = require("./is-node.js");
Object.defineProperty(exports, "isNode", { enumerable: true, get: function () { return __importDefault(is_node_js_1).default; } });
var is_nulliparous_js_1 = require("./is-nulliparous.js");
Object.defineProperty(exports, "isNulliparous", { enumerable: true, get: function () { return __importDefault(is_nulliparous_js_1).default; } });
var is_parent_js_1 = require("./is-parent.js");
Object.defineProperty(exports, "isParent", { enumerable: true, get: function () { return __importDefault(is_parent_js_1).default; } });
