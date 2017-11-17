import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ItemList from './ItemList';
import FilteredItemList from './FilteredItemList';
import { sections } from '../data';

Enzyme.configure({ adapter: new Adapter() });

describe('FilteredItemList component tests', () => {
    const items = sections[0].content.items;
    let wrapper;

    beforeAll(() => {
        jest.useFakeTimers();
    });

    afterAll(() => {
        jest.clearAllTimers();
    });

    it("Should render initially the FilteredItemList without any filter", () => {
        wrapper = shallow(<FilteredItemList items={items}/>);
        expect(wrapper.state().filter).toEqual('');
        expect(wrapper.state().items).toEqual(items);
        expect(wrapper.find(ItemList).length).toEqual(1);
        expect(wrapper.find('._filter').text()).toEqual('');
    });

    it("Should change the component's state on filtering", () => {
        wrapper = mount(<FilteredItemList items={items}/>);
        expect(wrapper.state().filter).toEqual('');
        expect(wrapper.state().items).toEqual(items);

        wrapper.find('._filter').simulate('change', {target: {value: 'second'}});
        jest.runAllTimers();

        expect(wrapper.state().filter).toEqual('second');
        expect(wrapper.state().items).not.toEqual(items);
    });

    it("Should modify component's state if new props are received", () => {
        wrapper = shallow(<FilteredItemList items={items}/>);
        const instance = wrapper.instance();
        const newItems = sections[1].content.items;

        wrapper.find('._filter').simulate('change', {target: {value: 'second'}});
        jest.runAllTimers();

        const currentState = wrapper.state();
        instance.componentWillReceiveProps({items: newItems});

        expect(wrapper.state()).not.toEqual(currentState);
        expect(wrapper.state().filter).toEqual('');
        expect(wrapper.state().items[0]).toEqual(newItems[0]);
    });

    it("Should NOT modify component's state if the no item props are received", () => {
        wrapper = shallow(<FilteredItemList items={items}/>);
        const instance = wrapper.instance();

        wrapper.find('._filter').simulate('change', {target: {value: 'second'}});
        jest.runAllTimers();

        const currentState = wrapper.state();
        instance.componentWillReceiveProps({});

        expect(wrapper.state()).toEqual(currentState);
    });

    it("Should NOT modify component's state if the same props are received", () => {
        wrapper = shallow(<FilteredItemList items={items}/>);
        const instance = wrapper.instance();
        const newItems = sections[0].content.items;

        wrapper.find('._filter').simulate('change', {target: {value: 'second'}});
        jest.runAllTimers();

        const currentState = wrapper.state();
        instance.componentWillReceiveProps({items: newItems});

        expect(wrapper.state()).toEqual(currentState);
    });

});
