import cl from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const DialogItem = (props) => {
    return (
        <div className={cl.dialog + ' ' + cl.active}>
            <NavLink to={"/dialogs/" + props.id}>
                <img className={cl.avatarImg} alt="" src={props.avatar}/>
                <div className={cl.nameUser}>
                    {props.name}
                </div>

            </NavLink>
        </div>
    );
};

export default DialogItem;