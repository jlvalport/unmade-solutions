import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Navbar.module.scss';
import MenuBtn from '../UI/MenuBtn/MenuBtn';

const Navbar = props => {
    return (
        <header className={classes.header}>
            <Link to='/' className={classes.logo} >
                <p><b>Unmade</b><br />Solutions</p>
            </Link>
            <ul className={classes.navLinks}>
                <li><p>EN</p></li>
                <li><MenuBtn menuClicked={props.menuClicked} isMenuShowing={props.isMenuShowing} /></li>
            </ul>
        </header>
    );
}

export default Navbar