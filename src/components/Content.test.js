import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Content, { ContentClassComponent } from './Content';
import SideBar from './SideBar';
import MainContent from './MainContent';
import { sections } from '../data';

Enzyme.configure({ adapter: new Adapter() });

describe('Content component tests', () => {
    let wrapper;

    it("Should render the Content with a SideBar and a MainContent", () => {
        wrapper = shallow(<Content sections={sections}/>);
        expect(wrapper.find(SideBar).length).toEqual(1);
        expect(wrapper.find(MainContent).length).toEqual(1);
    });

    it("Should handle click of the SideBar", () => {
        const mockCallback = jest.fn();
        wrapper = mount(<Content sections={sections} callback={mockCallback}/>);

        const sidebarWrapper = wrapper.find(SideBar);
        sidebarWrapper.find('._section').at(0).simulate('click');

        expect(mockCallback.mock.calls.length).toBe(1);
        expect(mockCallback).toBeCalledWith(sections[0].id);

    });

});

describe('Content Class component tests', () => {
    let wrapper;

    it("Should render the Content with a SideBar and a MainContent", () => {
        wrapper = shallow(<ContentClassComponent sections={sections}/>);
        expect(wrapper.find(SideBar).length).toEqual(1);
        expect(wrapper.find(MainContent).length).toEqual(1);
    });

    it("Should have the first section at the state", () => {
        const mockCallback = jest.fn();
        wrapper = shallow(<ContentClassComponent sections={sections}/>);
        expect(wrapper.state()).toBeDefined();
        expect(wrapper.state("selectedSection")).toEqual(sections[0]);

    });

    it("Should change the selected section at the state if the section id is valid", () => {
        const mockCallback = jest.fn();
        wrapper = shallow(<ContentClassComponent sections={sections}/>);

        expect(wrapper.state("selectedSection")).toEqual(sections[0]);

        const instance = wrapper.instance();
        instance.onSectionSelected(2);

        expect(wrapper.state("selectedSection")).toEqual(sections[1]);
    });

    it("Should NOT change the selected section at the state if the section id is NOT valid", () => {
        const mockCallback = jest.fn();
        wrapper = shallow(<ContentClassComponent sections={sections}/>);

        expect(wrapper.state("selectedSection")).toEqual(sections[0]);

        const instance = wrapper.instance();
        instance.onSectionSelected(7);

        expect(wrapper.state("selectedSection")).toEqual(sections[0]);
    });

});
