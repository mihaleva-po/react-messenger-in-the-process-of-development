import React from 'react';
import cl from "./Paginator.module.css";

const Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className={cl.buttonNavigation}>
            {pages.map(p =>
                <span key={p.id} className={p === props.currentPage ? cl.selected : undefined}
                      onClick={() => props.onChangePage(p)}>
                             {p}
                        </span>)}
        </div>
    );
};

export default Paginator;