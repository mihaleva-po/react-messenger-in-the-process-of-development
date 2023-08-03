import React from 'react';
import cl from "./Friend.module.css"

const Friend = (props) => {

    return (
        <div className={cl.friends}>
            <img className={cl.friendAva} alt="" src={props.avatar}/>
            <div>{props.name}</div>
        </div>
    );
};

export default Friend;