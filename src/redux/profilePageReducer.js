import {usersAPI} from "../api/api";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
    posts: [
        {id: 1, post: "Hi, how are you?", countLike: 8},
        {id: 2, post: "It's first post!", countLike: 4},
    ],
    currentTextPost: '',
    profile: null
};

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {

            let newPost = {
                id: state.posts.length + 1, // Генерируем уникальный id
                post: state.currentTextPost,
                countLike: 0,
            };

            const updatedPosts = [...state.posts, newPost]; // Создаем новый массив постов
            return {
                ...state,
                posts: updatedPosts,
                currentTextPost: "", // Сбрасываем currentTextPost
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                currentTextPost: action.newText,
            };
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

export const addPost = () => ({type: ADD_POST});
export const onPostChange = (post) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: post});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const getProfileUser = (userId) => {
    return (dispatch) => {
        if (!userId){
            userId=29356;
        }
        usersAPI.getProfileUser(userId).then(data => {
            dispatch(setUserProfile(data));
        });
    }
}

export default profilePageReducer;