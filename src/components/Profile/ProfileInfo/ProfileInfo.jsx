import React from 'react';
// import panorama from "../../../assets/image/banner.jpg";
import cl from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import person from "../../../assets/image/Users/person.png";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>;
    }
    return (
        <div className={cl.info}>
            <div className={cl.desc}>
                Name: {props.profile.fullName}
                <div>
                    <img className={cl.photoProfile} src={props.profile.photos.large ? props.profile.photos.large : person} alt={""}/>
                </div>
                <div>
                    {!props.profile.aboutMe ? null : <div>About me: {props.profile.aboutMe}</div>}
                    {!props.profile.lookingForAJob ? <div>Looking for a job: No</div> : <div>Looking for a job: Yes</div>}
                    {!props.profile.lookingForAJobDescription ? null : <div>Looking for a job description: {props.profile.lookingForAJobDescription}</div>}
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;