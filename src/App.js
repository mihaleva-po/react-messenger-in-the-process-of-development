import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import store from "./redux/reduxStore";
import {lazy} from 'react';
import Preloader from "./components/common/Preloader/Preloader";
import Navbar from './components/Navbar/Navbar';
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";
import Music from "./components/Music/Music";
import HeaderContainer from "./components/Header/HeaderContainer";
import withSuspense from "./Hoc/withSuspense";


const DialogsContainer = lazy(() =>
    import('./components/Dialogs/DialogsContainer.jsx'));
const DialogsContainerWithSuspense = withSuspense(DialogsContainer);
const ProfileContainer = lazy(() =>
    import('./components/Profile/ProfileContainer'));
const ProfileContainerWithSuspense = withSuspense(ProfileContainer);
const UsersContainer = lazy(() =>
    import('./components/Users/UsersContainer'));
const UsersContainerWithSuspense = withSuspense(UsersContainer);
const Login = lazy(() =>
    import('./components/Login/Login'));
const LoginWithSuspense = withSuspense(Login);


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        return (!this.props.initialized
            ?
            <Preloader/>
            :
            (<div className="app-wrapper">
                    < HeaderContainer/>
                    <div className="app-wrapper-nav">
                        < Navbar/>
                        <div className="app-wrapper-content">
                            <Routes>
                                <Route path="/profile/:userId?" element={
                                    <ProfileContainerWithSuspense/>
                                }/>
                                <Route path="/dialogs/*" element={<DialogsContainerWithSuspense/>}/>
                                < Route path='news' element={<News/>}/>
                                < Route path='music' element={<Music/>}/>
                                < Route path='setting' element={<Setting/>}/>
                                <Route path="/users/*" element={<UsersContainerWithSuspense/>}/>
                                <Route path="/login/*" element={<LoginWithSuspense/>}/>
                            </Routes>
                        </div>
                    </div>
                </div>
            ))
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

let AppContainer = connect(mapStateToProps, {initializeApp})(App);

let MainApp = () => {
    return <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
}

export default MainApp;
