import {connect} from "react-redux";
import {
    followThunk,
    getUsers, setCurrentPage,
    unfollowThunk
} from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage);
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

const dataOfState = (state) => {
    return {
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching,
        followingInProgress: state.UsersPage.followingInProgress
    };
};

export default connect(dataOfState, {
   getUsers, setCurrentPage,
    followThunk, unfollowThunk
})
(UsersContainer);