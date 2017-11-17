import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SideBar from './SideBar';
import { sections } from '../data';

Enzyme.configure({ adapter: new Adapter() });

describe('SideBar component tests', () => {
    let wrapper;

    it("Should render the SideBar with a SideBar and a MainContent", () => {
        wrapper = shallow(<SideBar sections={sections}/>);
        expect(wrapper.find('._section').length).toEqual(sections.length);
    });

    it("Should handle click of the SideBar", () => {
        const mockCallback = jest.fn();
        wrapper = shallow(<SideBar sections={sections} onSectionSelected={mockCallback}/>);

        wrapper.find('._section').at(0).simulate('click');

        expect(mockCallback.mock.calls.length).toBe(1);
        expect(mockCallback).toBeCalledWith(sections[0].id, undefined);

    });

});
