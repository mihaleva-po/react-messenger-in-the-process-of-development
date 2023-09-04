import React from 'react';
import {Field, reduxForm} from "redux-form";
import {login} from "../../redux/authReducer";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, minLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import cl from "./Login.module.css";

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
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

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"email"} component={Input}
                       validate={[required, maxLength35, minLength5,]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input}
                       type={"password"}
                       validate={[required, maxLength35, minLength5,]}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input}/> remember me
            </div>
            {props.error ? <div className={cl.summaryError}>
                {props.error}
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