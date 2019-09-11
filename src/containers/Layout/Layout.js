import React from 'react';

import classes from './Layout.module.scss';
import Navbar from '../../components/Navbar/Navbar';
import MobilMenu from '../../components/MobilMenu/MobilMenu';
import Footer from '../../components/Footer/Footer';

class Layout extends React.Component {
    state = {
        isMenuShowing: false
    }

    showMenuHandler = () => {
        this.setState({
            ...this.state,
            isMenuShowing: !this.state.isMenuShowing
        })
        console.log('[showMenuHandler]');

    }

    render() {
        return (
            <React.Fragment>
                <Navbar
                    isMenuShowing={this.state.isMenuShowing}
                    menuClicked={this.showMenuHandler} />
                <MobilMenu
                    isMenuShowing={this.state.isMenuShowing}
                    menuClicked={this.showMenuHandler} />
                <main>{this.props.children}</main>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Layout