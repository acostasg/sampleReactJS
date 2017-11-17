import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header';

Enzyme.configure({ adapter: new Adapter() });

describe('Header component tests', () => {
    it("Should render the header with the page title", () => {
        const title = "My react app";
        const header = shallow(<Header title={title}/>);
        expect(header.find('.brand-logo').length).toEqual(1);
        expect(header.find('._title').length).toEqual(1);
        expect(header.find('._title').text()).toEqual(title);
    });
});
