import React from 'react';

import LandingSection from './LandingSection/LandingSection';
import ServicesSection from './ServicesSection/ServicesSection';
import QuoteSection from '../UI/QuoteSection/QuoteSection';
import ContactSection from './ContactSection/ContactSection';
import NextPageSection from '../UI/NextPageSection/NextPageSection';
import classes from './LandingPage.module.scss';

const LandingPage = () => {
    return (
        <React.Fragment>
            <LandingSection />
            <ServicesSection />
            <QuoteSection fontSize='3.6' message={
                <React.Fragment>
                    <span className={classes.desktopViewQuoteText} >Hacemos <b>Arte</b> &amp; <b>Ciencia</b></span>
                    <span className={classes.mobileViewQuoteText} >Hacemos<br /><b>Arte</b> <span className={classes.and}>&amp;</span> <br /><b>Ciencia</b></span>
                </React.Fragment>
            } />
            <ContactSection />
            <NextPageSection link='/servicio-de-desarrollo-web' >Desarrollo web</NextPageSection>
        </React.Fragment>
    );
}

export default LandingPage