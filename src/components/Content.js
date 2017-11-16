import React from 'react';
import SideBar from './SideBar';
import MainContent from './MainContent';

const Content = (props) => {

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
        <div className='container'>
            <div className='row'>
                <SideBar getNames={getNames(props.sections)}/>
                <MainContent section={props.sections[0].content}/>
            </div>
        </div>);
};

export default Content;