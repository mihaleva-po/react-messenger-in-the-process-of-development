import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            };
        }
        default: {
            return state;
        }
    }
};

export const setAuthUserData = (userId, login, email, isAuth) => {
    return ({type: SET_USER_DATA, payload: {userId, login, email, isAuth}})
};


export const getAuthMe = () => (dispatch) => {
    return authAPI.getAuthMe().then(
        data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setAuthUserData(id, login, email, true));
            }
        }
    )
}


export const login = (email, password, rememberMe = false) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then(
            data => {
                if (data.resultCode === 0) {
                    dispatch(getAuthMe());
                } else {
                    let message = data.messages.length > 0 ? data.messages : "Some error";
                    dispatch(stopSubmit("email", {_error: message}));
                }
            }
        )
    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(
            data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false));
                }
            }
        )
    }
}

export default authReducer;