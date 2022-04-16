import React from 'react';
import s from './NavBar.module.css';
import {Link} from "react-router-dom";


const NavBar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <Link to="/profile" >Profile</Link>
        </div>
        <div className={s.item}>
            <Link to="/dialogs" >Messages</Link>
        </div>
       {/* <div className={s.item}>
            <Link to="/profile" >News</Link>
        </div>
        <div className={s.item}>
            <Link to="/profile" >Music</Link>
        </div>
        <div className={s.item}>
            <Link to="/profile" >Settings</Link>
        </div>*/}
    </nav>
}

export default NavBar;

