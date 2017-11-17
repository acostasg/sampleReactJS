import React from 'react';

const SideBar = (props) => {
    function getNumSections(sections) {
        return sections.map(section => {
            return (<li key={section.id} onClick={(e) => props.onSectionSelected(section.id, e)} className="collection-item _section">{section.name}</li>);
        });
    }

    return (
        <div className="col s3">
            <ul className="collection">
                {getNumSections(props.sections)}
            </ul>
        </div>
    );
};

export default SideBar;
