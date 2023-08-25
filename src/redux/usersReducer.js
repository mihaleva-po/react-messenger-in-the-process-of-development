import {usersAPI} from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = "TOGGLE_IS_FOLLOWING_IN_PROGRESS";

let initialState = {
    users: [],
    pageSize: 7,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: [...state.users.map(user => (user.id === action.userId ? {
                    ...user,
                    followed: true
                } : user))]
            };
        }

        case UNFOLLOW: {
            return {
                ...state,
                users: [...state.users.map(user => (user.id === action.userId ? {
                    ...user,
                    followed: false
                } : user))]
            };
        }
        case (SET_USERS): {
            return {
                ...state,
                users: [//...state.users,
                    ...action.users]
            };
        }
        case (SET_CURRENT_PAGE): {
            return {
                ...state,
                currentPage: action.pageSelected
            };
        }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId] :
                    [state.followingInProgress.filter(id => id !== action.userId)]
            }
        default: {
            return state;
        }
    }
};

export const followAC = (id) => ({type: FOLLOW, userId: id});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (pageSelected) => ({type: SET_CURRENT_PAGE, pageSelected});
export const setTotalUsersCountAC = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount});
export const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleIsFollowingInProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_IN_PROGRESS,
    isFetching,
    userId
})
export const getUsers = (pageSize, currentPage) => {
    return (dispatch) => {
        dispatch(toggleIsFetchingAC(true));
        usersAPI.getUsers(pageSize, currentPage).then(data => {
            dispatch(toggleIsFetchingAC(false));
            dispatch(setUsersAC(data.items));
            dispatch(setTotalUsersCountAC(data.totalCount));
        });
    }
}

export const followThunk = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingInProgress(true, userId));
        usersAPI.postFollowing(userId).then(
            data => {
                if (data.resultCode === 0) {
                    dispatch(followAC(userId))
                }
                dispatch(toggleIsFollowingInProgress(false, userId));
            }
        );
    }
}

export const unfollowThunk = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingInProgress(true, userId));
        usersAPI.deleteFollowing(userId).then(
            data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowAC(userId))
                }
                dispatch(toggleIsFollowingInProgress(false, userId));
            }
        );
    }
}


export default usersReducer;