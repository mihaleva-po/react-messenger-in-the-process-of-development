import React from "react";
import cl from "./FormsControls.module.css";
import {Field} from "redux-form";


const FormsControls = ({children}) => {
    const hasError = children.props.touched && children.props.error;
    return (
        <div className={hasError ? cl.error : undefined}>
            <div>
                {children}
            </div>
            <div>
                {hasError ? <span> {children.props.error} </span> : undefined}
            </div>
        </div>
    )
}
export const TextArea = ({input, meta, ...props}) => {
    return <FormsControls>
        <textarea {...input} {...meta} {...props} className={cl.textarea}/>
    </FormsControls>
}

export const Input = ({input, meta, ...props}) => {
    return <FormsControls>
        <input {...input} {...meta} {...props} />
    </FormsControls>
}

export const createField = (placeholder, name, component, validate, props = {}, text="") => (
    <div className={cl.rememberMe}>
        <Field placeholder={placeholder} name={name} component={component} validate={validate}
            {...props}/> {text}
    </div>
)