import React from 'react';

const SideBar = (props) => {

    function getNames(sections) {
        return sections.map(sections => { //no hemos puesto parentesis porque solo es un parametro (sections) =>
                return (<li key={sections.id} className='collection-item'
                            onClick={(e) => onSectionSelected(sections.id, e)}>{sections.name}</li>)
            }
        );
    }

    function onSectionSelected(id, e) {
        e.preventDefault();
        console.log('This link was clicked with ' + id)
    }

    return (
        <div className="col s3">
            <ul className='collection'>
                {getNames(props.sections)}
            </ul>
        </div>
    )
};

export default SideBar;