import cl from './Post.module.css';
import avatar from './../../../../assets/image/ava.jpg';

const Post = (props) => {
    return (
        <div className={cl.item}>
            <img alt='' src={avatar}/>
            <div className={cl.post}>
                {props.post}
            </div>
            <div className={cl.like}>
                Like: &nbsp; {props.countLike}
            </div>
        </div>
    );
}

export default Post;



