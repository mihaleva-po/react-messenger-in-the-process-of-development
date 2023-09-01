import React from "react";
import cl from "./FormsControls.module.css";

const FormsControls = ({children}) => {
    debugger;
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