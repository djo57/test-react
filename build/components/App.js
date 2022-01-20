"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = _interopRequireDefault(require("lodash.pickby"));

var _ArticleList = _interopRequireDefault(require("./ArticleList"));

var _SearchBar = _interopRequireDefault(require("./SearchBar"));

var _Timestamp = _interopRequireDefault(require("./Timestamp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var App = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(App, _React$PureComponent);

  var _super = _createSuper(App);

  function App() {
    var _this;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "appState", function () {
      var _this$props$store$get = _this.props.store.getState(),
          articles = _this$props$store$get.articles,
          searchTerm = _this$props$store$get.searchTerm;

      return {
        articles: articles,
        searchTerm: searchTerm
      };
    });

    _defineProperty(_assertThisInitialized(_this), "state", _this.appState());

    _defineProperty(_assertThisInitialized(_this), "onStoreChange", function () {
      //this.setState(this.props.store.getState());
      _this.setState(_this.appState());
    });

    _defineProperty(_assertThisInitialized(_this), "ins", function (search) {
      return new RegExp(search, "i");
    });

    return _this;
  }

  _createClass(App, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        store: this.props.store
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
      this.props.store.startClock();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.store.unsubscribe(this.subscriptionId);
    }
    /*shouldComponentUpdate(nextProps, nextState){
      return(
        nextState.articles !== this.state.articles || nextState.searchTerm !== this.state.searchTerm
      );
    }*/

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          articles = _this$state.articles,
          searchTerm = _this$state.searchTerm;

      if (searchTerm) {
        articles = (0, _lodash["default"])(articles, function (value) {
          return value.title.match(_this2.ins(searchTerm)) || value.body.match(_this2.ins(searchTerm));
        });
      }

      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Timestamp["default"], null), /*#__PURE__*/_react["default"].createElement(_SearchBar["default"], null), /*#__PURE__*/_react["default"].createElement(_ArticleList["default"], {
        articles: articles
      }));
    }
  }]);

  return App;
}(_react["default"].PureComponent);

_defineProperty(App, "childContextTypes", {
  store: _propTypes["default"].object
});

var _default = App;
exports["default"] = _default;