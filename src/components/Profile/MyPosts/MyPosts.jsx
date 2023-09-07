import cl from './MyPost.module.css';
import Post from './Post/Post';
import React from "react";
import {Field, reduxForm} from "redux-form";
import {
    maxLengthCreator,
    minLengthCreator,
    required
} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormsControls/FormsControls";

const MyPosts = React.memo((props) => {

    let postElement = props.profilePage.posts.map(p =>
        (<Post post={p.post} countLike={p.countLike} key={p.id}/>)
    );

    let addPost = (values) => {
        props.addPost(values.myPost);
    }
    return (
        <div className={cl.myPost}>
            <h3>My posts </h3>
            <MyPostForm onSubmit={addPost}/>
            <div className={cl.post}>
                {postElement}
            </div>
        </div>
    );

})

const maxLength15 = maxLengthCreator(100);
const minLength2 = minLengthCreator(1);

const FormMyPost = (props) => {
    return (<form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea} name={"myPost"}
                       placeholder="Поделитесь своими мыслями.."
                validate={[required, maxLength15, minLength2]}/>
            </div>
            <div>
                <button> Add post</button>
            </div>
        </form>
    )
}

const MyPostForm = reduxForm({form: "myPost"})(FormMyPost);

export default MyPosts;