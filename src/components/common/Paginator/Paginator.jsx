import React, {useState} from 'react';
import cl from "./Paginator.module.css";

const Paginator = (props) => {
    let countPages = Math.ceil(props.totalItemsCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= countPages; i++) {
        pages.push(i);
    }

    let countItemPages = props.countItemPages; // 5
    let halfListPages = Math.floor(countItemPages / 2);

    const [meanItemsPage, setMeanItemsPage] = useState(halfListPages+1);

    const returnStartPage = () => {
        setMeanItemsPage(halfListPages+1);
    }

    const showFollowingPages = () => {
        setMeanItemsPage(meanItemsPage+countItemPages);
    }

    return (
        <div className={cl.buttonNavigation}>
            <div>
                {
                    <button className={meanItemsPage - halfListPages > 1 ? cl.button : cl.disable}
                        onClick={() => returnStartPage()}>Back beginning</button>}
            </div>
            <div>
                {pages.filter(el => (el < (meanItemsPage + halfListPages+1)) &&
                    (el > (meanItemsPage - halfListPages-1))).map(p =>
                    <span key={p.id} className={p === props.currentPage ? cl.selected : cl.numberPage}
                          onClick={() => props.onChangePage(p)}>
                             {p}
                        </span>)}
            </div>
            <div>
                <button onClick={() => showFollowingPages()}>Next</button>
            </div>
        </div>
    );
};

export default Paginator;