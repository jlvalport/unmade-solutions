import React from 'react';

import classes from './Navbar.module.scss';
import MenuBtn from '../../hoc/MenuBtn/MenuBtn';

const Navbar = props => {
    return (
        <header>
            <p className={classes.logo}><b>Unmade</b><br />Solutions</p>
            <ul className={classes.navLinks}>
                <li>EN</li>
                <li><MenuBtn /></li>
            </ul>
        </header>
    );
}

export default Navbar