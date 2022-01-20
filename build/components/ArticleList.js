"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Article = _interopRequireDefault(require("./Article"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ArticleList = function ArticleList(props) {
  return /*#__PURE__*/_react["default"].createElement("div", null, Object.values(props.articles).map(function (article) {
    return /*#__PURE__*/_react["default"].createElement(_Article["default"], {
      key: article.id,
      article: article
    });
  }));
};

var _default = ArticleList;
exports["default"] = _default;