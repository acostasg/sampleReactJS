import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ItemList, { ITEMS_PER_PAGE } from './ItemList';
import Pagination from './Pagination';
import { sections } from '../data';

Enzyme.configure({ adapter: new Adapter() });

describe('ItemList component tests', () => {
    const items = sections[0].content.items;
    let wrapper;

    it("Should render the ItemList with the number of items passed as props", () => {
        wrapper = shallow(<ItemList items={items}/>);
        const instance = wrapper.instance();
        expect(instance.numPages).toEqual(Math.ceil(items.length/ITEMS_PER_PAGE));
        expect(wrapper.state().currentPage).toEqual(0);
        expect(wrapper.state().items.length).toBeLessThanOrEqual(ITEMS_PER_PAGE);
        expect(wrapper.find('._item').length).toEqual(wrapper.state().items.length);
        expect(wrapper.find(Pagination).length).toEqual(1);
    });

    it("Should modify component's state if a valid page is received", () => {
        wrapper = shallow(<ItemList items={items}/>);
        const instance = wrapper.instance();
        const currentPage = wrapper.state().currentPage;
        const visibleItems = wrapper.state().items;

        expect(currentPage).toEqual(0);
        instance.onPageSelected(1);
        expect(wrapper.state().currentPage).not.toEqual(currentPage);
        expect(wrapper.state().items[0]).not.toEqual(visibleItems[0]);
    });

    it("Should not modify component's state if a negative number page is received", () => {
        wrapper = shallow(<ItemList items={items}/>);
        const instance = wrapper.instance();
        const currentPage = wrapper.state().currentPage;
        const visibleItems = wrapper.state().items;

        expect(currentPage).toEqual(0);
        instance.onPageSelected(-1);
        expect(wrapper.state().currentPage).toEqual(currentPage);
        expect(wrapper.state().items[0]).toEqual(visibleItems[0]);
    });

    it("Should not modify component's state if a number page larger the max number pages is received", () => {
        wrapper = shallow(<ItemList items={items}/>);
        const instance = wrapper.instance();
        const currentPage = wrapper.state().currentPage;
        const visibleItems = wrapper.state().items;

        expect(currentPage).toEqual(0);
        instance.onPageSelected(instance.numPages);
        expect(wrapper.state().currentPage).toEqual(currentPage);
        expect(wrapper.state().items[0]).toEqual(visibleItems[0]);
    });

    it("Should modify component's state if new props are received", () => {
        wrapper = shallow(<ItemList items={items}/>);
        const instance = wrapper.instance();

        expect(wrapper.state().items[0]).toEqual(items[0]);
        expect(wrapper.state().currentPage).toEqual(0);

        const newItems = sections[1].content.items;
        instance.componentWillReceiveProps({items: newItems});

        expect(instance.numPages).toEqual(Math.ceil(newItems.length/ITEMS_PER_PAGE));
        expect(wrapper.state().currentPage).toEqual(0);
        expect(wrapper.state().items[0]).toEqual(newItems[0]);
    });


});
