import React from 'react';

import classes from './Navbar.module.scss';
import MenuBtn from '../UI/MenuBtn/MenuBtn';

const Navbar = props => {
    return (
        <header className={classes.header}>
            <p className={classes.logo}><b>Unmade</b><br />Solutions</p>
            <ul className={classes.navLinks}>
                <li><p>EN</p></li>
                <li><MenuBtn menuClicked={props.menuClicked} isMenuShowing={props.isMenuShowing} /></li>
            </ul>
        </header>
    );
}

export default Navbar