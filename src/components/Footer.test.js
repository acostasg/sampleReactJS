import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from './Footer';

Enzyme.configure({ adapter: new Adapter() });

describe('Footer component tests', () => {
    it("Should render the footer with the copyright", () => {
        const copyright = "© 2017 Copyright Text";
        const footer = shallow(<Footer copyright={copyright}/>);
        expect(footer.find('._copyright').length).toEqual(1);
        expect(footer.find('._copyright').text()).toEqual(copyright);
    });
});
