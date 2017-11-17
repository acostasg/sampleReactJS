import React, { Component, PureComponent } from 'react';
import SideBar from './SideBar';
import MainContent from './MainContent';
// import ItemList from './ItemList';
import FilteredItemList from './FilteredItemList';

const Content = (props) => {
    function onSectionSelected(sectionId, e) {
        e.preventDefault();
        props.callback(sectionId);
    }

    return (
        <div className="container">
            <div className="row">
                <SideBar sections={props.sections} onSectionSelected={onSectionSelected}/>
                <MainContent content={props.sections[0].content}/>
            </div>
        </div>
    );
};

class ContentClassComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            selectedSection: props.sections[0]
        };
        this.onSectionSelected = this.onSectionSelected.bind(this);
    }

    onSectionSelected(sectionId) {
        let selectedSection;
        this.props.sections.forEach(section => {
            if (section.id === sectionId) {
                selectedSection = section;
            }
        });
        if (selectedSection) {
            this.setState({
                selectedSection: selectedSection
            });
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <SideBar sections={this.props.sections} onSectionSelected={this.onSectionSelected}/>
                    <MainContent {...this.state.selectedSection.content}>
                        <FilteredItemList items={this.state.selectedSection.content.items} />
                    </MainContent>
                </div>
            </div>
        );
    }
}

export { ContentClassComponent };

export default Content;
