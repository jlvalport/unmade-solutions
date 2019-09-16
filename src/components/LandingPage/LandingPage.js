import React from 'react';

import LandingSection from './LandingSection/LandingSection';
import ServicesSection from './ServicesSection/ServicesSection';
import QuoteSection from '../UI/QuoteSection/QuoteSection';
import ContactSection from './ContactSection/ContactSection';
import NextPageSection from '../UI/NextPageSection/NextPageSection';

const LandingPage = () => {
    return (
        <React.Fragment>
            <LandingSection />
            <ServicesSection />
            <QuoteSection fontSize='3.6'>Hacemos <br /><b>Arte</b> <span>&amp;</span> <br /><b>Ciencia</b></QuoteSection>
            <ContactSection />
            <NextPageSection link='/servicio-de-desarrollo-web' >Desarrollo web</NextPageSection>
        </React.Fragment>
    );
}

export default LandingPage