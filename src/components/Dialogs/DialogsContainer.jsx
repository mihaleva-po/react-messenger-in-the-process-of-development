import {
    addMessage,
} from "../../redux/dialogsPageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthNavigate} from "../../Hoc/withAuthNavigate";
import {compose} from "@reduxjs/toolkit";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    };
}

export default compose(
    connect(mapStateToProps, {addMessage}),
    withAuthNavigate
)(Dialogs);