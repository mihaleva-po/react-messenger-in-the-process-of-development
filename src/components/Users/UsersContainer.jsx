import {connect} from "react-redux";
import {
    followThunk,
    getUsers,
    setCurrentPage,
    unfollowThunk,
    toggleIsFollowingInProgress
} from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
// import {withAuthNavigate} from "../../Hoc/withAuthNavigate";
import {compose} from "@reduxjs/toolkit";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsersSuperSelector
} from "../../redux/usersSelectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        const {pageSize, currentPage} = this.props;
        this.props.getUsers(pageSize, currentPage);
    }

    onChangePage = (page) => {
        this.props.getUsers(this.props.pageSize, page);
    }

    render() {
        return (<>
            {this.props.isFetching ? <Preloader/> : null}
            <Users onChangePage={this.onChangePage}
                   users={this.props.users}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   followingInProgress={this.props.followingInProgress}
                   followThunk={this.props.followThunk}
                   unfollowThunk={this.props.unfollowThunk}
            />
        </>)
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsersSuperSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    };
};

export default compose(
    connect(mapStateToProps, {
        getUsers, setCurrentPage,
        followThunk, unfollowThunk, toggleIsFollowingInProgress}),)(UsersContainer);