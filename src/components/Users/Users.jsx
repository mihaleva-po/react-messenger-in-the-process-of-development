import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = (props) => {
    return (
        <div>
            <div>
                {props.users.map(u => <User user={u} key={u.id}
                                            followingInProgress={props.followingInProgress}
                                            unfollowThunk={props.unfollowThunk} followThunk={props.followThunk}/>)}
            </div>

            <Paginator totalItemsCount={props.totalUsersCount}
                       pageSize={props.pageSize} {...props} countItemPages ={5}/>
        </div>
    );
};

export default Users;