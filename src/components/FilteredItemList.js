import React, { Component, PureComponent } from 'react';
import ItemList from './ItemList';

class FilteredItemList extends PureComponent {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    debounce(callback) {
        global.clearTimeout(this.timeout);
        this.timeout = global.setTimeout(() => {
            callback.call();
        }, 300);
    }

    filterItems(filter) {
        const filteredItems = this.props.items.filter(item => {
            if (item.title.match(filter) || item.description.match(filter)) {
                return true;
            }
            return false;
        });
        this.setState({
            items: filteredItems
        });
    }

    handleChange(ev) {
        const filter = ev.target.value;
        this.setState({ filter });
        this.debounce(this.filterItems.bind(this, filter));
    }

    componentWillMount() {
        this.setState({
            filter: '',
            items: this.props.items
        });
        console.time('MOUNTING FILTERED LIST');
    }

    componentDidMount() {
        console.timeEnd('MOUNTING FILTERED LIST');
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.items && nextProps.items !== this.props.items) {
            this.setState({
                filter: '',
                items: nextProps.items
            });
        }
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     if (nextState.items !== this.state.items) {
    //         return true;
    //     }
    //
    //     if (nextState.filter !== this.state.filter) {
    //         return true;
    //     }
    //
    //     return false;
    // }

    componentWillUpdate() {
        console.time('UPDATING FILTERED LIST');
    }

    componentDidUpdate() {
        console.timeEnd('UPDATING FILTERED LIST');
    }

    render() {
        return (
            <ItemList items={this.state.items}>
                <div className="row">
                    <form className="col s12">
                        <div className="input-field">
                            <i className="material-icons prefix">search</i>
                            <input id="icon_prefix" type="text" className="validate _filter" value={this.state.filter} onChange={this.handleChange} />
                        </div>
                    </form>
                </div>
            </ItemList>
        );
    }
}

export default FilteredItemList;
