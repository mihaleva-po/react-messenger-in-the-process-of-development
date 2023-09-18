import {profileAPI} from "../api/api";

const ADD_POST = "profile/ADD_POST";
const SET_USER_PROFILE = "profile/SET_USER_PROFILE";
const SET_USERS_STATUS = "profile/SET_USERS_STATUS";
const DELETE_POST = "profile/DELETE_POST";
const SAVE_PHOTO = "profile/SAVE_PHOTO";

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
        case DELETE_POST:
            return {
                ...state,
                posts: [...state.posts.filter(post => post.id !== action.postId)]
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
        case SAVE_PHOTO:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
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

export const deletePost = (postId) => ({type: DELETE_POST, postId});

export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO, photos});

export const getProfileUser = (userId) => {
    return async (dispatch) => {
        let data = await profileAPI.getProfileUser(userId);
        dispatch(setUserProfile(data));
    }
}

export const getUserStatus = (userId) => {
    return async (dispatch) => {
        if (!userId) {
            userId = 29356;
        }
        let data = await profileAPI.getStatus(userId);
        dispatch(setUserStatus(data));
    }
}

export const updateStatus = (newStatus) => {
    return async (dispatch) => {
        let data = await profileAPI.updateStatus(newStatus);
        if (data.resultCode === 0) {
            dispatch(setUserStatus(newStatus));
        }
    }
}

export const savePhoto = (file) => async (dispatch) => {
    let data = await profileAPI.savePhoto(file);
    if (data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.photos));
    }
}


export default profilePageReducer;