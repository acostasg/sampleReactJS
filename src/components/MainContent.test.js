import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MainContent from './MainContent';
import { sections } from '../data';

Enzyme.configure({ adapter: new Adapter() });

describe('MainContent component tests', () => {
    let wrapper;

    it("Should render the MainContent with a title and description", () => {
        wrapper = shallow(<MainContent {...sections[0].content}/>);
        expect(wrapper.find('._title').length).toEqual(1);
        expect(wrapper.find('._title').text()).toEqual(sections[0].content.title);
        expect(wrapper.find('._description').length).toEqual(1);
        expect(wrapper.find('._description').text()).toEqual(sections[0].content.description);
    });

    it("Should render children components if passed to it", () => {
        const TestComponent = () => {
            return <div></div>;
        };
        wrapper = shallow(<MainContent {...sections[0].content}><TestComponent /></MainContent>);
        expect(wrapper.find(TestComponent).length).toEqual(1);

    });

});
