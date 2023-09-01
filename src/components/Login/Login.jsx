import React from 'react';
import {Field, reduxForm} from "redux-form";
import {postAuthLogin} from "../../redux/authReducer";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, minLengthCreator, required} from "../../utils/validators/validators";

const Login = () => {
    let onSubmit = (formData) => {
        console.log(formData);
        postAuthLogin(formData);
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <ReduxLoginForm onSubmit = {onSubmit}/>
        </div>
    );
};

const maxLength15 = maxLengthCreator(15);
const minLength5 = minLengthCreator(5);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={Input}
                validate={[required, maxLength15, minLength5, ]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input}
                       validate={[required, maxLength15, minLength5, ]}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const ReduxLoginForm = reduxForm({form: "login"})(LoginForm);

export default Login;