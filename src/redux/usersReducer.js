import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/helper/objectsHelper";

const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";
const SET_USERS = "users/SET_USERS";
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "users/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "users/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = "users/TOGGLE_IS_FOLLOWING_IN_PROGRESS";

let initialState = {
    users: [],
    pageSize: 7,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleIsFollowingInProgress(true, userId));
    let data = await apiMethod(userId);
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsFollowingInProgress(false, userId));
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
                // users: [...state.users.map(user => (user.id === action.userId ? {
                //     ...user,
                //     followed: true
                // } : user))]
            };
        }

        case UNFOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
                // users: [...state.users.map(user => (user.id === action.userId ? {
                //     ...user,
                //     followed: false
                // } : user))]
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
    return async (dispatch) => {
        dispatch(toggleIsFetchingAC(true));
        dispatch(setCurrentPage(currentPage));
        let data = await usersAPI.getUsers(pageSize, currentPage);
        dispatch(toggleIsFetchingAC(false));
        dispatch(setUsersAC(data.items));
        dispatch(setTotalUsersCountAC(data.totalCount));
    }
}

export const followThunk = (userId) => {
    return async (dispatch) => {
        await followUnfollowFlow(dispatch, userId, usersAPI.postFollowing.bind(usersAPI), followAC);
    }
}

export const unfollowThunk = (userId) => {
    return async (dispatch) => {
        await followUnfollowFlow(dispatch, userId, usersAPI.deleteFollowing.bind(usersAPI), unfollowAC);

    }
}


export default usersReducer;