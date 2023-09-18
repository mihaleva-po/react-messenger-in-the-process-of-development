
// import cl from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} isOwner={props.isOwner}
            updateStatus={props.updateStatus}  savePhoto={props. savePhoto}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;