import cl from './Header.module.css';
import logo from "./../../assets/image/logo/mops.png";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={cl.header}>
            <div><img className={cl.img} alt="" src={logo}/></div>
            <div><h1 className={cl.h1}>ChatLive</h1></div>
            <div className={cl.loginBlock}>
                {(props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>)}
            </div>
        </header>);
}

export default Header;




