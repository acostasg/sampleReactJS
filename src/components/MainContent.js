import React from 'react';

const MainContent = (props) => {
    return (
        <div className="col s9">
            <div className="row">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title _title">{props.title}</span>
                        <p className="_description">{props.description}</p>
                    </div>
                </div>
            </div>
            {props.children}
        </div>
    );
};

export default MainContent;
