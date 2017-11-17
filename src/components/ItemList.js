import React, { Component } from 'react';
import Pagination from './Pagination';

const ITEMS_PER_PAGE = 2;

class ItemList extends Component {
    constructor(props) {
        super(props);
        this.numPages = Math.ceil(props.items.length / ITEMS_PER_PAGE);
        this.state = {
            items: this.getVisibleItems(props.items, 0),
            currentPage: 0
        };
        this.onPageSelected = this.onPageSelected.bind(this);
    }

    getVisibleItems(items, currentPage) {
        return items.filter((item, index) => {
            return Math.floor(index / ITEMS_PER_PAGE) === currentPage;
        });
    }

    getItemsSection(items) {
        return items.map(item => {
            return (
                <div key={item.id} className="col s12 l6 _item">
                    <div className="card">
                        <div className="card-image">
                            <img alt={item.title} src={item.url} />
                            <span className="card-title">{item.title}</span>
                        </div>
                        <div className="card-content">
                            <p>{item.description}</p>
                        </div>
                    </div>
                </div>
            );
        });
    }

    componentWillReceiveProps(nextProps) {
        this.numPages = Math.ceil(nextProps.items.length / ITEMS_PER_PAGE);
        this.setState({
            items: this.getVisibleItems(nextProps.items, 0),
            currentPage: 0
        });
    }

    onPageSelected(page) {
        if (page >= 0 && page < this.numPages) {
            this.setState({
                items: this.getVisibleItems(this.props.items, page),
                currentPage: page
            });
        }
    }


    render() {
        return (
            <div className="row">
                {this.props.children}
                <div className="row">
                    {this.getItemsSection(this.state.items)}
                </div>
                <Pagination numPages={this.numPages} currentPage={this.state.currentPage} onPageSelected={this.onPageSelected} />
            </div>
        );
    }
}

export { ITEMS_PER_PAGE };

export default ItemList;
