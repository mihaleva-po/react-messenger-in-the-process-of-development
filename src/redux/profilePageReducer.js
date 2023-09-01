import {profileAPI} from "../api/api";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USERS_STATUS = "SET_USERS_STATUS";

let initialState = {
    posts: [
        {id: 1, post: "Hi, how are you?", countLike: 8},
        {id: 2, post: "It's first post!", countLike: 4},
    ],
    profile: null,
    status: ""
};

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts.length + 1, // Генерируем уникальный id
                post: action.newPost,
                countLike: 0,
            };

            const updatedPosts = [...state.posts, newPost]; // Создаем новый массив постов
            return {
                ...state,
                posts: updatedPosts,
                currentTextPost: "", // Сбрасываем currentTextPost
            };
        }
        case SET_USERS_STATUS:
            return {
                ...state,
                status: action.newStatus
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default: {
            return state;
        }
    }
}

export const addPost = (newPost) => ({type: ADD_POST, newPost});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const setUserStatus = (newStatus) => {
    return {
        type: SET_USERS_STATUS, newStatus
    }
};

export const getProfileUser = (userId) => {
    return (dispatch) => {
        if (!userId){
            userId=29356;
        }
        profileAPI.getProfileUser(userId).then(data => {
            dispatch(setUserProfile(data));
        });
    }
}

export const getUserStatus = (userId) => {
    return (dispatch) => {
        if (!userId){
            userId=29356;
        }
        profileAPI.getStatus(userId).then(data => {
            dispatch(setUserStatus(data));
        });
    }
}

export const updateStatus = (newStatus) => {
    return (dispatch) => {
        profileAPI.updateStatus(newStatus).then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserStatus(newStatus));
            }
        });
    }
}

export default profilePageReducer;