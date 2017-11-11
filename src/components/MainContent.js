import React from 'react';

const MainContent = (props) => {
    return (
        <div className="row">
            <div className="col s12 m6">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">{props.section.title}</span>
                        <p>{props.section.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MainContent;