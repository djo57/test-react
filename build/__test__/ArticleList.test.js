"use strict";

var _react = _interopRequireDefault(require("react"));

var _ArticleList = _interopRequireDefault(require("../components/ArticleList"));

var _enzyme = require("enzyme");

var _enzymeAdapterReact = _interopRequireDefault(require("@wojtekmaj/enzyme-adapter-react-17"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//import renderer from 'react-test-renderer';
(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact["default"]()
});
describe('ArticleList', function () {
  var testProps = {
    articles: {
      a: {
        id: 'a',
        date: 'Mon Jul 11 2016 00:00:00 GMT+0000 (UTC)'
      },
      b: {
        id: 'b',
        date: 'Mon Jul 11 2016 00:00:00 GMT+0000 (UTC)'
      }
    }
  };
  it('renders correctly', function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_ArticleList["default"], testProps)); //expect(wrapper.find('div').children()).toBe(2);
    //console.log(wrapper.find(Article));
    //expect(wrapper.find(Article)).to.have.lengthOf(2);

    /*const element = renderer.create(
        <ArticleList
            articles={testProps.articles}
            store={testProps.store}
         />
    ).toJSON();*/
    //expect(wrapper.find('Article')).toBe(2);

    console.log(wrapper.debug({
      verbose: true
    }));
    expect(wrapper.find('ArticleContainer').length).toBe(2);
    expect(wrapper).toMatchSnapshot();
  });
});