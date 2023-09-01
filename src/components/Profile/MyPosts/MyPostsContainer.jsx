import {
    addPost,
} from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let dataOfState = (state) => {
    return {
        profilePage: state.profilePage
    };
};

const MyPostsContainer = connect(dataOfState, {
    addPost})(MyPosts);

export default MyPostsContainer;