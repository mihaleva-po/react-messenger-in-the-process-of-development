import React from 'react';
import cl from "./Friends.module.css"
import Friend from "./Friend/Friend";

const Friends = (props) => {

    let element = props.friendsBlock.map(user =>
        <Friend name={user.name} avatar={user.avatar} key={user.id}/>)

    return (
        <div>
            <h2 className={cl.header}>Friends</h2>
            <div className={cl.circles}>
                {element}
            </div>
        </div>
    );
};

export default Friends;