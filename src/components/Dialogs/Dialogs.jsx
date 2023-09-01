import React from 'react';
import cl from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Navigate} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, minLengthCreator, required} from "../../utils/validators/validators";

const Dialogs = (props) => {
    if (!props.isAuth) {
        return <Navigate to={"/login"}/>
    }

    let dialogsElements = props.dialogsPage.dialogs.map(dialog =>
        <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar} key={dialog.id}/>);

    let messagesElements = props.dialogsPage.messages.map(message =>
        <Message text={message.message} id={message.id} key={message.id}/>);

    let addNewMessage = (values) => {
        props.addMessage(values.message);
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
                <ReduxFormForMessage onSubmit={addNewMessage} />
            </div>
        </div>
    );
};

const maxLength = maxLengthCreator(10);
const minLength = minLengthCreator(2);

const FormForMessage = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea}
                       placeholder="Продолжите общение.."
                       name={"message"}
                       validate={[required, maxLength, minLength]}
                />
            </div>
            <div>
                <button>Add message</button>
            </div>
        </form>
    )
}

const ReduxFormForMessage = reduxForm({form: "message"})(FormForMessage);

export default Dialogs;