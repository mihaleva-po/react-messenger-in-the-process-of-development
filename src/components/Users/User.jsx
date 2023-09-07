import React from 'react';
import cl from "./User.module.css";
import personImg from "../../assets/image/Users/person.png";
import {NavLink} from "react-router-dom";

const User = ({user, followingInProgress, unfollowThunk, followThunk}) => {
    return (
        <div>
            <div className={cl.user}>
                <div className={cl.img_container}>
                    <NavLink to={"/profile/" + user.id}>
                        <img alt="" className={cl.img}
                             src={user.photos.small != null ? user.photos.small : personImg}/>
                    </NavLink>
                </div>
                <span className={cl.userDescription}>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                <div>
                    {user.followed ?
                        <button
                            disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {
                                unfollowThunk(user.id)
                            }
                            }>Unfollow</button> :
                        <button
                            disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {
                                followThunk(user.id)
                            }}>Follow</button>}
                </div>
            </div>
        </div>)
}

export default User;