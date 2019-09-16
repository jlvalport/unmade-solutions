import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import classes from './MobilMenu.module.scss';
import MenuBtn from '../UI/MenuBtn/MenuBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MobilMenu = props => {
    return (
        <div className={
            props.isMenuShowing ?
                [classes.mobilMenu, classes['is-active']].join(' ') :
                classes.mobilMenu}
        >
            <div className={classes.buttonBox}>
                <MenuBtn
                    menuClicked={props.menuClicked}
                    isMenuShowing={props.isMenuShowing} />
            </div>
            <ul className={classes.linksBox}>
                <li className={classes.logo} >
                    <Link to='/' onClick={props.menuClicked}>
                        <b>Unmade</b><br />Solutions
                    </Link>
                </li>
                <li className={classes.link} >
                    <NavLink to='/servicio-de-desarrollo-web' onClick={props.menuClicked}>
                        Desarrollo Web
                    </NavLink>
                </li>
                <li className={classes.link} >
                    <NavLink to='/servicio-de-marketing' onClick={props.menuClicked}>
                        Marketing Digital
                    </NavLink>
                </li>
                <li className={classes.link} >
                    <NavLink to='/acerca-de-nosotros' onClick={props.menuClicked}>
                        Nosotros
                    </NavLink>
                </li>
                <li className={classes.link} >
                    <NavLink to='/contacto' onClick={props.menuClicked}>
                        Contacto
                    </NavLink>
                </li>
                <li className={classes.contactInfo}>
                    <p>C 7681-3313</p>
                    <p>hola@unmade.solutions</p>
                </li>
            </ul>
            <div className={classes.socialBox}>
                <FontAwesomeIcon icon={['fab', 'facebook-f']} className={classes.socialIcons} />
                <FontAwesomeIcon icon={['fab', 'twitter']} className={classes.socialIcons} />
            </div>
        </div>
    );
};

export default MobilMenu