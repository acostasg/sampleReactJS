import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import Header from './Header';
import Footer from './Footer';
import { ContentClassComponent } from './Content';

Enzyme.configure({ adapter: new Adapter() });

describe('App component tests', () => {
    it("Should render the app with the header, content and footer components", () => {

        const wrapper = shallow(<App/>);
        expect(wrapper.find(Header).length).toEqual(1);
        expect(wrapper.find(Footer).length).toEqual(1);
        expect(wrapper.find(ContentClassComponent).length).toEqual(1);

    });

    it("Should render the app and pass data to Content", () => {

        const wrapper = shallow(<App/>);
        const contentWrapper = wrapper.find(ContentClassComponent);
        expect(contentWrapper.props().sections).toBeDefined();

    });
});
