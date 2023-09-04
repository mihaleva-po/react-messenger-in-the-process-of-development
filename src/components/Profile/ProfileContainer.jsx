import React from "react";
import Profile from "./Profile";
import {
    getProfileUser,
    getUserStatus,
    setUserProfile,
    updateStatus
} from "../../redux/profilePageReducer";
import {connect} from 'react-redux';
import {useParams} from "react-router-dom";
import {withAuthNavigate} from "../../Hoc/withAuthNavigate";
import {compose} from "@reduxjs/toolkit";

const withRouter = WrappedComponent => props => {
    const params = useParams();
    return (
        <WrappedComponent
            {...props}
            params={params}
        />
    );
};

class ProfileContainer extends React.Component {
    componentDidMount() {
        debugger
        let userId = this.props.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            // if (!userId) {
            //     <Navigate to={"/login"}/>
            // }
        }
        this.props.getProfileUser(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(connect(mapStateToProps,
        {setUserProfile, getProfileUser, getUserStatus, updateStatus}),
    withRouter,
    withAuthNavigate
)(ProfileContainer);