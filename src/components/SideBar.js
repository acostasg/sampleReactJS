import React from 'react';

const SideBar = (props) => {

    return (
        <div className="col s3">
            <ul className='collection'>
                {props.getNames}
            </ul>
        </div>
    )
};

export default SideBar;