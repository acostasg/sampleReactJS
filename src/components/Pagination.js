import React from 'react';

const Pagination = (props) => {

    function displayPagination(numPages, currentPage) {
        let pagination = [];
        if (numPages > 1) {
            pagination.push((<li key="prev" className={`_prev ${currentPage === 0 ? 'disabled' : 'waves-effect'}`} onClick={() => props.onPageSelected(currentPage - 1)}><a><i className="material-icons">chevron_left</i></a></li>));
        }

        for (let i = 0; i < numPages; i++) {
            pagination.push((<li key={i} className={`_page ${i === currentPage ? "active" : "waves-effect"}`} onClick={props.onPageSelected.bind(null, i)}><a>{i+1}</a></li>));
        }

        if (numPages > 1) {
            pagination.push((<li key="next" className={`_next ${currentPage === numPages - 1 ? 'disabled' : 'waves-effect'}`} onClick={() => props.onPageSelected(currentPage + 1)}><a><i className="material-icons">chevron_right</i></a></li>));
        }
        return pagination;
    }

    return (
        <div>
            <ul className="pagination">
                {displayPagination(props.numPages, props.currentPage)}
            </ul>
        </div>
    );
};

export default Pagination;
