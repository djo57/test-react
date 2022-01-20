import React from "react";
import ArticleList from "../components/ArticleList";

//import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

describe('ArticleList', () => {
    const testProps = {
        articles:{
            a: {id: 'a', date: 'Mon Jul 11 2016 00:00:00 GMT+0000 (UTC)'},
            b: {id: 'b', date: 'Mon Jul 11 2016 00:00:00 GMT+0000 (UTC)'}
        },
    }

    it('renders correctly', () => {
        const wrapper = shallow(
            <ArticleList
                {...testProps}
             />
        );

        //expect(wrapper.find('div').children()).toBe(2);
        //console.log(wrapper.find(Article));
        //expect(wrapper.find(Article)).to.have.lengthOf(2);
        /*const element = renderer.create(
            <ArticleList
                articles={testProps.articles}
                store={testProps.store}
             />
        ).toJSON();*/
        //expect(wrapper.find('Article')).toBe(2);
        console.log(wrapper.debug({verbose: true}));
        expect(wrapper.find('ArticleContainer').length).toBe(2);
        expect(wrapper).toMatchSnapshot();
    });
});