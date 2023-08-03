import {
    addMessage,
    onChangeMessage,
} from "../../redux/dialogsPageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    };
};

const DialogsContainer = connect(mapStateToProps, {
    addMessage, onChangeMessage
})(Dialogs);

export default DialogsContainer;