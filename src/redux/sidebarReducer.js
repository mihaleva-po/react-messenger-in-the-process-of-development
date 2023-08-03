import angela from "../assets/image/dialogsAvatar/angela.jpg";
import roman from "../assets/image/dialogsAvatar/roman.jpg";
import olga from "../assets/image/dialogsAvatar/olga.jpg";

let initialState = {
    friendsBlock: [
        {id: 2, name: "Анжела", avatar: angela},
        {id: 3, name: "Роман", avatar: roman},
        {id: 4, name: "Ольга", avatar: olga},
    ]
};
const sidebarReducer = (state = initialState, action) => {
    return state;
};

export default sidebarReducer;