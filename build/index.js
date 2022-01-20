"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _DataApi = _interopRequireDefault(require("DataApi"));

var _App = _interopRequireDefault(require("./components/App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _App["default"];
exports["default"] = _default;
var store = new _DataApi["default"](window.initialData);

_reactDom["default"].hydrate( /*#__PURE__*/_react["default"].createElement(_App["default"], {
  store: store
}), document.getElementById("root"));