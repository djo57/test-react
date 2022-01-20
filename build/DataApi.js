"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DataApi = /*#__PURE__*/function () {
  function DataApi(rawData) {
    var _this = this;

    _classCallCheck(this, DataApi);

    _defineProperty(this, "lookupAuthor", function (authorId) {
      return _this.data.authors[authorId];
    });

    _defineProperty(this, "subscribe", function (cb) {
      _this.lastSubscriptionId++;
      _this.subscriptions[_this.lastSubscriptionId] = cb;
      return _this.lastSubscriptionId;
    });

    _defineProperty(this, "unsubscribe", function (subscriptionId) {
      delete _this.subscriptions[subscriptionId];
    });

    _defineProperty(this, "notifySubscribers", function () {
      Object.values(_this.subscriptions).forEach(function (cb) {
        return cb();
      });
    });

    _defineProperty(this, "mergeWithState", function (stateChange) {
      _this.data = _objectSpread(_objectSpread({}, _this.data), stateChange);

      _this.notifySubscribers();
    });

    _defineProperty(this, "setSearchTerm", function (searchTerm) {
      //this.setState({searchTerm});
      //this.data.searchTerm = searchTerm;
      //this.notifySubscribers();
      _this.mergeWithState({
        searchTerm: searchTerm
      });
    });

    _defineProperty(this, "startClock", function () {
      setInterval(function () {
        _this.mergeWithState({
          timestamp: new Date()
        });
      }, 1000);
    });

    this.data = {
      articles: this.mapIntoObject(rawData.articles),
      authors: this.mapIntoObject(rawData.authors),
      searchTerm: "",
      timestamp: new Date()
    };
    this.subscriptions = {};
    this.lastSubscriptionId = 0;
  }

  _createClass(DataApi, [{
    key: "mapIntoObject",
    value: function mapIntoObject(arr) {
      return arr.reduce(function (acc, curr) {
        acc[curr.id] = curr;
        return acc;
      }, {});
    }
  }, {
    key: "getState",
    value: function getState() {
      return this.data;
    }
  }]);

  return DataApi;
}();

var _default = DataApi;
exports["default"] = _default;