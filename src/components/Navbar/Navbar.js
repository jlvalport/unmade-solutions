import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router-dom';

import classes from './Navbar.module.scss';
import MenuBtn from '../UI/MenuBtn/MenuBtn';

class Navbar extends React.Component {

    state = {
        prevScrollpos: window.pageYOffset,
        visible: false,
        navbarAppearanceClass: undefined,
        showSocialIconsDesktop: false
    }

    // Adds an event listener when the component is mount.
    componentDidMount() {
        window.addEventListener("scroll", this.onScrollHandler);
        this.onChangeOfPageHandler();
        this.showSocialIconsDesktopHandler();
    }

    // Remove the event listener when the component is unmount.
    componentWillUnmount() {
        window.removeEventListener("scroll", this.onScrollHandler);
    }

    componentDidUpdate(prevProps, prevState) {
        this.onChangeOfPageHandler();
        this.showSocialIconsDesktopHandler();
    }

    onChangeOfPageHandler = () => {
        switch (this.props.location.pathname) {
            case '/servicio-de-desarrollo-web':
            case '/servicio-de-marketing':
                if (this.state.navbarAppearanceClass !== classes.strongColorBged) {
                    this.setState({
                        navbarAppearanceClass: classes.strongColorBged
                    });
                }
                break;
            default:
                if (this.state.navbarAppearanceClass !== undefined) {
                    this.setState({
                        navbarAppearanceClass: undefined
                    });
                }
        }
    }

    showSocialIconsDesktopHandler = () => {
        switch (this.props.location.pathname) {
            case '/':
                if (this.state.showSocialIconsDesktop !== false) {
                    this.setState({
                        showSocialIconsDesktop: false
                    });
                }
                break;
            default:
                if (this.state.showSocialIconsDesktop !== true) {
                    this.setState({
                        showSocialIconsDesktop: true
                    });
                }
        }
    }

    onScrollHandler = () => {
        const { prevScrollpos } = this.state;
        const currentScrollPos = window.pageYOffset;
        const visible = currentScrollPos < 110
            ? false
            : !(prevScrollpos < currentScrollPos);

        this.setState({
            prevScrollpos: currentScrollPos,
            visible
        });
    }

    render() {

        return (
            <React.Fragment>
                <header className={[classes.header, classes.staticHeader, this.state.navbarAppearanceClass].join(' ')} >
                    <Link to='/' className={classes.logo} >
                        <p><b>Unmade</b><br />Solutions</p>
                    </Link>
                    <ul className={classes.navLinks}>
                        <li><p>EN</p></li>
                        <li><MenuBtn menuClicked={this.props.menuClicked} isMenuShowing={this.props.isMenuShowing} /></li>
                    </ul>
                    <ul className={classes.navLinksDesktop}>
                        <ul className={classes.navLinksDesktopInner}>
                            <li>C (+503) 7681-3313</li>
                            <li>hola@unmade.solutions</li>
                            <li className={
                                this.state.showSocialIconsDesktop
                                    ? classes.socialIconsDesktopBox
                                    : [classes.socialIconsDesktopBox, classes.hidden].join(' ')}
                            >
                                <FontAwesomeIcon
                                    icon={['fab', 'facebook-f']}
                                    className={classes.socialIconsDesktop}
                                />
                            </li>
                            <li className={
                                this.state.showSocialIconsDesktop
                                    ? classes.socialIconsDesktopBox
                                    : [classes.socialIconsDesktopBox, classes.hidden].join(' ')}
                            >
                                <FontAwesomeIcon
                                    icon={['fab', 'twitter']}
                                    className={classes.socialIconsDesktop}
                                />
                            </li>
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
                <header className={this.state.visible
                    ? [classes.header, classes.dynamicHeader, classes.navbarVisible].join(' ')
                    : [classes.header, classes.dynamicHeader].join(' ')}
                >
                    <Link to='/' className={classes.logo} >
                        <p><b>Unmade</b><br />Solutions</p>
                    </Link>
                    <ul className={classes.navLinks}>
                        <li><p>EN</p></li>
                        <li><MenuBtn menuClicked={this.props.menuClicked} isMenuShowing={this.props.isMenuShowing} /></li>
                    </ul>
                    <ul className={classes.navLinksDesktop}>
                        <ul className={classes.navLinksDesktopInner}>
                            <li>C (+503) 7681-3313</li>
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
            </React.Fragment>
        );
    }
}

export default withRouter(Navbar)