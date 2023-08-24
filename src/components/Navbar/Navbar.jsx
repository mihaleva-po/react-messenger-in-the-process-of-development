import cl from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FriendsContainer from "./Friends/FriendsContainer";

const Navbar = () => {
    return (
        <div className={cl.nav}>
            <nav>
                <div className={cl.item}>
                    <NavLink to="/profile" className={({isActive}) => (isActive ? cl.active : '')}>
                        Profile
                    </NavLink>
                </div>
                <div className={cl.item}>
                    <NavLink to="/dialogs" className={({isActive}) => (isActive ? cl.active : '')}>
                        Messages
                    </NavLink>
                </div>
                <div className={cl.item}>
                    <NavLink to="/news" className={({isActive}) => (isActive ? cl.active : '')}>
                        News
                    </NavLink>
                </div>
                <div className={cl.item}>
                    <NavLink to="/music" className={({isActive}) => (isActive ? cl.active : '')}>
                        Music
                    </NavLink>
                </div>
                <div className={cl.item}>
                    <NavLink to="/setting" className={({isActive}) => (isActive ? cl.active : '')}>
                        Settings
                    </NavLink>
                </div>
                <div className={cl.item}>
                    <NavLink to="/users" className={({isActive}) => (isActive ? cl.active : '')}>
                        Users
                    </NavLink>
                </div>
            </nav>
            < FriendsContainer />
        </div>
    );
}


export default Navbar;