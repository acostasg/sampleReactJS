import React from 'react';

const Header = (props) => {
    return (
        <nav>
            <div className="nav-wrapper light-blue lighten-2">
                <a className="brand-logo"><i className="material-icons">cloud</i><span className="_title">{props.title}</span></a>
            </div>
        </nav>
    );
};

export default Header;
