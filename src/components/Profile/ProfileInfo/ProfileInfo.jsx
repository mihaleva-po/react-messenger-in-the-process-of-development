import React from 'react';
import cl from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import person from "../../../assets/image/Users/person.png";
import ProfileStatusWithHook from "./ProfileStatusWithHook";

const ProfileInfo = ({profile, savePhoto, ...props}) => {
    if (!profile) {
        return <Preloader/>;
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.file.length) {
            savePhoto(e.target.file[0]);
        }
    }

    return (
        <div className={cl.info}>
            <div className={cl.desc}>
                Name: {profile.fullName}
                <div>
                    <img className={cl.photoProfile} src={profile.photos.large || person} alt={""}/>

                    {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                </div>

                <ProfileStatusWithHook status={props.status}
                                       updateStatus={props.updateStatus}
                />

                <div>
                    {!profile.aboutMe ? null : <div>About me: {profile.aboutMe}</div>}
                    {!profile.lookingForAJob ? <div>Looking for a job: No</div> : <div>Looking for a job: Yes</div>}
                    {!profile.lookingForAJobDescription ? null :
                        <div>Looking for a job description: {profile.lookingForAJobDescription}</div>}
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;