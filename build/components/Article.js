"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _storeProvider = _interopRequireDefault(require("./storeProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var styles = {
  article: {
    paddingBottom: 10,
    borderBottomStyle: 'solid',
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
    marginBottom: 10
  },
  title: {
    fontWeight: 'bold'
  },
  date: {
    fontSize: '0.85em',
    color: '#888'
  },
  author: {
    paddingBottom: 10,
    paddingTop: 10
  },
  body: {
    paddingLeft: 20
  }
};

var dateToStr = function dateToStr(dt) {
  return new Date(dt).toDateString();
};

var Article = function Article(props) {
  var article = props.article,
      author = props.author; //const author = store.lookupAuthor(article.authorId);

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: styles.article
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    style: styles.title
  }, article.title), /*#__PURE__*/_react["default"].createElement("div", {
    style: styles.body
  }, article.body), /*#__PURE__*/_react["default"].createElement("div", {
    style: styles.date
  }, dateToStr(article.date)), /*#__PURE__*/_react["default"].createElement("div", {
    style: styles.author
  }, "Author: ", /*#__PURE__*/_react["default"].createElement("a", {
    href: author.website
  }, author.firstName, " ", author.lastName)));
};

Article.propTypes = {
  article: _propTypes["default"].shape({
    date: _propTypes["default"].string.isRequired
  })
};

function extraProps(store, originalProps) {
  return {
    author: store.lookupAuthor(originalProps.article.authorId)
  };
}

var _default = (0, _storeProvider["default"])(extraProps)(Article);

exports["default"] = _default;