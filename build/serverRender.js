"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _axios = _interopRequireDefault(require("axios"));

var _DataApi = _interopRequireDefault(require("DataApi"));

var _App = _interopRequireDefault(require("./components/App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var serverRender = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var rawData, store;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _axios["default"].get('http://localhost:4242/data');

          case 2:
            rawData = _context.sent;

            /*const api = new DataApi(rawData.data);
            const initialData = {
                articles: api.getArticles(),
                authors: api.getAuthors(),
            };*/
            store = new _DataApi["default"](rawData.data);
            return _context.abrupt("return", {
              initialMarkup: _server["default"].renderToString( /*#__PURE__*/_react["default"].createElement(_App["default"], {
                store: store
              })),
              initialData: rawData.data
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function serverRender() {
    return _ref.apply(this, arguments);
  };
}();

var _default = serverRender;
exports["default"] = _default;