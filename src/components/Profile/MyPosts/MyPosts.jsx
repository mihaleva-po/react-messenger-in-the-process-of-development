import cl from './MyPost.module.css';
import Post from './Post/Post';
import React from "react";

const MyPosts = (props) => {
    let postElement = props.profilePage.posts.map(p =>
        (<Post post={p.post} countLike={p.countLike} key={p.id}/>)
    );

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        props.onPostChange(newPostElement.current.value);
    }

    return (
        <div className={cl.myPost}>
            <h3>My posts </h3>
            <div>
                <div>
                    <textarea className={cl.textarea}
                              onChange={onPostChange}
                              ref={newPostElement}
                              value={props.profilePage.currentTextPost}
                              placeholder="Поделитесь своими мыслями.."
                    />
                </div>
                <button onClick={addPost}> Add post</button>
                <br/>
            </div>
            <div className={cl.post}>
                {postElement}
            </div>
        </div>
    );
}

export default MyPosts;