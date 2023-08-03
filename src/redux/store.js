import angela from './../imassets/image/dialogsAvatar/angela.jpg'
import egor from './../imassets/image/dialogsAvatar/egor.jpg'
import nata from './../imassets/image/dialogsAvatar/nata.jpg'
import olga from './../imassets/image/dialogsAvatar/olga.jpg'
import roman from './../imassets/image/dialogsAvatar/roman.jpg'
import sidebarReducer from "./sidebarReducer";
import dialogsPageReducer from "./dialogsPageReducer";
import profilePageReducer from "./profilePageReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: "Hi, how are you?", countLike: 8},
                {id: 2, post: "It's first post!", countLike: 4},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Егор", avatar: egor},
                {id: 2, name: "Анжела", avatar: angela},
                {id: 3, name: "Роман", avatar: roman},
                {id: 4, name: "Ольга", avatar: olga},
                {id: 5, name: "Наталья", avatar: nata},
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "Yes"},
                {id: 4, message: "Yes"},
                {id: 5, message: "Find"},
            ],
            newMessage: ""
        },
        sidebar: {
            friendsBlock: [
                {id: 2, name: "Анжела", avatar: angela},
                {id: 3, name: "Роман", avatar: roman},
                {id: 4, name: "Ольга", avatar: olga},
            ]
        }
    },
    _callSubscriber(_state) {},

    getState() {
        return this._state;
    },
    subcribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) { // {type: "ADD_POST"}
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);
        this._state.profilePage = profilePageReducer(this._state.profilePage, action);

        this._callSubscriber(this._state);
    }
}

// store._state - нельзя использовать

// export default store;
window.store = store;





