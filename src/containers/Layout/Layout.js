import React from 'react';

import classes from './Layout.module.scss';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

class Layout extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <main>{this.props.children}</main>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Layout