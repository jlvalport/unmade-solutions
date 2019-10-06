import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
            <ul className={classes.navLinksDesktop}>
                <ul className={classes.navLinksDesktopInner}>
                    <li>7681 3313</li>
                    <li>hola@unmade.solutions</li>
                    <li><FontAwesomeIcon icon={['fab', 'facebook-f']} className={classes.socialIconsDesktop} /></li>
                    <li><FontAwesomeIcon icon={['fab', 'twitter']} className={classes.socialIconsDesktop} /></li>
                </ul>
                <ul className={classes.navLinksDesktopInner}>
                    <li><NavLink to='/acerca-de-nosotros'>Nosotros</NavLink></li>
                    <li><NavLink to='/servicio-de-desarrollo-web'>Desarrollo Web</NavLink></li>
                    <li><NavLink to='/servicio-de-marketing'>Marketing</NavLink></li>
                    <li><NavLink to='/contacto'>Contacto</NavLink></li>
                    <li><NavLink to='/'>EN</NavLink></li>
                </ul>
            </ul>
        </header>
    );
}

export default Navbar