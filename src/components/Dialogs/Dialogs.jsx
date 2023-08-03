import React from 'react';
import cl from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let newMessage = React.createRef();

    let dialogsElements = props.dialogsPage.dialogs.map(dialog =>
        <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar} key={dialog.id}/>);

    let messagesElements = props.dialogsPage.messages.map(message =>
        <Message text={message.message} id={message.id} key={message.id}/>);

    let addMessage = () => {
        props.addMessage();
    }

    let onChangeMessage = (e) => {
        props.onChangeMessage(e.target.value);
    }

    return (
        <div>
            <div className={cl.dialogs}>
                <div className={cl.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={cl.messages}>
                    {messagesElements}
                </div>
            </div>
            <div className={cl.textarea}>
                <textarea value={props.dialogsPage.newMessage}
                          onInput={onChangeMessage}
                          ref={newMessage}
                          placeholder="Продолжите общение.."
                />
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;