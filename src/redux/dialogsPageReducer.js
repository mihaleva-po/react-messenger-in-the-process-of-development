import egor from "../assets/image/dialogsAvatar/egor.jpg";
import angela from "../assets/image/dialogsAvatar/angela.jpg";
import roman from "../assets/image/dialogsAvatar/roman.jpg";
import olga from "../assets/image/dialogsAvatar/olga.jpg";
import nata from "../assets/image/dialogsAvatar/nata.jpg";

const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_TEXT_MESSAGE = "UPDATE_TEXT_MESSAGE";

let initialState = {
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
};

const dialogsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_TEXT_MESSAGE: {
            return {
                ...state,
                newMessage: action.newMessage
            };
        }
        case ADD_MESSAGE: {
            let newMessage = {
                id: state.messages.length + 1,
                message: state.newMessage
            }
            debugger;
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessage: ""
            };
        }
        default: {
            return state;
        }
    }
}

export const addMessage = () => ({type: ADD_MESSAGE})
export const onChangeMessage = (message) => ({type: UPDATE_TEXT_MESSAGE, newMessage: message})

export default dialogsPageReducer;