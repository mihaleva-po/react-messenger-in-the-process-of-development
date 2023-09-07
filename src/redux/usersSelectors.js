
import {createSelector} from "reselect";

// Простой селектор
const getUsersSelector = (state) => {
    return state.UsersPage.users;
}

// Сложный селектор
export const getUsersSuperSelector = createSelector(
    getUsersSelector, (users) => {
    return users.filter(user => true);
});

export const getPageSize = (state) => {
    return state.UsersPage.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.UsersPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.UsersPage.currentPage;
}

export const getIsFetching = (state) => {
    return state.UsersPage.isFetching;
}

export const getFollowingInProgress = (state) => {
    return state.UsersPage.followingInProgress;
}

