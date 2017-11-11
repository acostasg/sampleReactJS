import React from 'react';
import SideBar from './SideBar';
import MainContent from './MainContent';

const Content = (props) => {
    return (
        <div className='container'>
            <div className='row'>
                <SideBar sections={props.sections}/>
                <MainContent section={props.sections[0].content}/>
            </div>
        </div>);
};

export default Content;