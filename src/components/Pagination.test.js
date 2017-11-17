import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Pagination from './Pagination';

Enzyme.configure({ adapter: new Adapter() });

describe('Pagination component tests', () => {
    let wrapper;

    it("Should render the Pagination with NO pages and prev/next buttons if no pages are passed as props", () => {
        wrapper = shallow(<Pagination numPages={0}/>);
        expect(wrapper.find('._page').length).toEqual(0);
        expect(wrapper.find('._prev').length).toEqual(0);
        expect(wrapper.find('._next').length).toEqual(0);
    });

    it("Should render the Pagination with 1 pages but NO prev/next buttons if only one page is passed as props", () => {
        wrapper = shallow(<Pagination numPages={1} onPageSelected={()=>{}}/>);
        expect(wrapper.find('._page').length).toEqual(1);
        expect(wrapper.find('._prev').length).toEqual(0);
        expect(wrapper.find('._next').length).toEqual(0);
        expect(wrapper.find('._page').hasClass('active')).not.toEqual(true);
    });

    it("Should render the Pagination with 1 pages and be active is its the currentPage passed as props", () => {
        wrapper = shallow(<Pagination numPages={1} currentPage={0} onPageSelected={()=>{}}/>);
        expect(wrapper.find('._page').hasClass('active')).toEqual(true);
    });

    it("Should render the Pagination with more than one pages, be active the one that corresponds with the current page", () => {
        const numPages = 2;
        const currentPage = 1;
        wrapper = shallow(<Pagination numPages={numPages} currentPage={currentPage} onPageSelected={()=>{}}/>);
        expect(wrapper.find('._page').length).toEqual(2);
        expect(wrapper.find('._page').at(currentPage).hasClass('active')).toEqual(true);
    });

    it("Should render the prev/next buttons if more than one page is passed and prev button be disabled if the current page is the first one", () => {
        const numPages = 2;
        const currentPage = 0;
        wrapper = shallow(<Pagination numPages={numPages} currentPage={currentPage} onPageSelected={()=>{}}/>);
        expect(wrapper.find('._prev').length).toEqual(1);
        expect(wrapper.find('._next').length).toEqual(1);
        expect(wrapper.find('._prev').hasClass('disabled')).toEqual(true);
        expect(wrapper.find('._next').hasClass('disabled')).not.toEqual(true);
    });

    it("Should render the next pagination as disabled if the current page is the last one", () => {
        const numPages = 2;
        const currentPage = 1;
        wrapper = shallow(<Pagination numPages={numPages} currentPage={currentPage} onPageSelected={()=>{}}/>);
        expect(wrapper.find('._prev').hasClass('disabled')).not.toEqual(true);
        expect(wrapper.find('._next').hasClass('disabled')).toEqual(true);
    });

    it("Should handle click of the current pagination element", () => {
        const mockCallback = jest.fn();
        const numPages = 1;
        const currentPage = 0;
        wrapper = shallow(<Pagination numPages={numPages} currentPage={currentPage} onPageSelected={mockCallback}/>);
        wrapper.find('._page').at(currentPage).simulate('click');

        expect(mockCallback.mock.calls.length).toBe(1);
        expect(mockCallback).toBeCalledWith(currentPage);
    });

    it("Should handle click of another pagination element", () => {
        const mockCallback = jest.fn();
        const numPages = 2;
        const currentPage = 1;
        wrapper = shallow(<Pagination numPages={numPages} currentPage={currentPage} onPageSelected={mockCallback}/>);
        wrapper.find('._page').at(0).simulate('click');

        expect(mockCallback.mock.calls.length).toBe(1);
        expect(mockCallback).toBeCalledWith(0);
    });

    it("Should handle click of the prev pagination element", () => {
        const mockCallback = jest.fn();
        const numPages = 2;
        const currentPage = 1;
        wrapper = shallow(<Pagination numPages={numPages} currentPage={currentPage} onPageSelected={mockCallback}/>);
        wrapper.find('._prev').simulate('click');

        expect(mockCallback.mock.calls.length).toBe(1);
        expect(mockCallback).toBeCalledWith(currentPage-1);
    });

    it("Should handle click of the next pagination element", () => {
        const mockCallback = jest.fn();
        const numPages = 2;
        const currentPage = 1;
        wrapper = shallow(<Pagination numPages={numPages} currentPage={currentPage} onPageSelected={mockCallback}/>);
        wrapper.find('._next').simulate('click');

        expect(mockCallback.mock.calls.length).toBe(1);
        expect(mockCallback).toBeCalledWith(currentPage+1);
    });

});
