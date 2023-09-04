import sidebarReducer from "./sidebarReducer";
import dialogsPageReducer from "./dialogsPageReducer";
import profilePageReducer from "./profilePageReducer";
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
// import thunkMiddleWare from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import appReducer from "./appReducer";

let reducers = combineReducers({
    sidebar: sidebarReducer,
    dialogsPage: dialogsPageReducer,
    profilePage: profilePageReducer,
    UsersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

let store =
    configureStore({
        reducer: reducers,
        // applyMiddleware: thunkMiddleWare
    })

window.store = store;
export default store;