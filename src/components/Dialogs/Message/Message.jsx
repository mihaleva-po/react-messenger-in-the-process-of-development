import cl from "./Message.module.css";
import React from "react";

const Message = (props) => {
    return (
        <div className={cl.message}>{props.text}</div>
    );
};

export default Message;