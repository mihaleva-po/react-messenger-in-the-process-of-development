import Friends from "./Friends";
import {connect} from "react-redux";

let dataOfState = (state) => {
    return {
        friendsBlock: state.sidebar.friendsBlock
    };
}

const FriendsContainer = connect(dataOfState)(Friends);

export default FriendsContainer;