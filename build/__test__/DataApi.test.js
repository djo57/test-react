"use strict";

var _DataApi = _interopRequireDefault(require("../DataApi"));

var _testData = require("../testData.json");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var api = new _DataApi["default"](_testData.data);
describe('DataApi', function () {
  it('exposes articles as an object', function () {
    var articles = api.getState().articles;
    var articleId = _testData.data.articles[0].id;
    var articleTitle = _testData.data.articles[0].title;
    expect(articles).toHaveProperty(articleId);
    expect(articles[articleId].title).toBe(articleTitle);
  });
  it('exposes authors as an object', function () {
    var authors = api.getState().authors;
    var authorId = _testData.data.authors[0].id;
    var authorfirstName = _testData.data.authors[0].firstName;
    expect(authors).toHaveProperty(authorId);
    expect(authors[authorId].firstName).toBe(authorfirstName);
  });
});