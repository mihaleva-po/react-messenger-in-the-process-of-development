import {authAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const POST_AUTH_LOGIN = "POST_AUTH_LOGIN";

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
                ...action.data,
                isAuth: true
                };
        }
        case POST_AUTH_LOGIN:
            return {
                ...state,
                ...action.userId
            }
        default: {
            return state;
        }
    }
};

export const setAuthUserData = (userId, login, email) => ({type: SET_USER_DATA, data: {userId, login, email}});

export const postAuthUser = (userId) => {
    return {
        type: POST_AUTH_LOGIN, userId
    }
};

export const getAuthMe = () => {
    return (dispatch) => {
        authAPI.getAuthMe().then(
            data =>
            {if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setAuthUserData(id, login, email));
            }}
        )
    }
}

export const postAuthLogin = (formData) => {
    return (dispatch) => {
        console.log("1");
        authAPI.postAuthLogin(formData).then(
            data =>
            {if (data.resultCode === 0) {
                let userId = data.data;
                dispatch(postAuthUser(userId));
            }}
        )
    }
}

export default authReducer;