import "./App.css";
import Navbar from './components/Navbar/Navbar';
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";
import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import React from "react";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
// import {compose} from "@reduxjs/toolkit";
// import withRouter from "./withRouter";

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
                                <Route path="/profile" element={<ProfileContainer/>}>
                                    <Route path=":userId" element={<ProfileContainer/>}/>
                                </Route>
                                < Route path='/dialogs' element={<DialogsContainer/>}/>
                                < Route path='/news' element={<News/>}/>
                                < Route path='/music' element={<Music/>}/>
                                < Route path='/setting' element={<Setting/>}/>
                                < Route path='/users' element={<UsersContainer/>}/>
                                < Route path='/login' element={<Login/>}/>
                            </Routes>
                        </div>
                    </div>
                </div>
            ))
    }
}

// export default compose(
//     withRouter,
//     connect(null, {setAuthUserData, getAuthMe})(App));

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default connect(mapStateToProps, {initializeApp})(App);
