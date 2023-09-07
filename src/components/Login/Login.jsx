import React from 'react';
import {reduxForm} from "redux-form";
import {login} from "../../redux/authReducer";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, minLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import cl from "./Login.module.css";

const Login = ({login, isAuth}) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe);
    }

    if (isAuth) {
        return <Navigate to={"/profile"}/>
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    );
};

const maxLength35 = maxLengthCreator(35);
const minLength5 = minLengthCreator(5);

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>

            {createField("Login", "email", Input, [required, maxLength35, minLength5,])}

            {createField("Password", "password", Input, [required, maxLength35, minLength5,],
                {type: "password"})}

            {createField(null, "rememberMe", Input, [],
                {type: "checkbox"}, "remember me")}


            {error ? <div className={cl.summaryError}>
                {error}
            </div> : undefined}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const ReduxLoginForm = reduxForm({form: "email"})(LoginForm);

const mapStateToProps = (state) => ({isAuth: state.auth.isAuth});

export default connect(mapStateToProps, {login})(Login);