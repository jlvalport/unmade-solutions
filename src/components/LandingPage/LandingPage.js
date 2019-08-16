import React from 'react';

import LandingSection from './LandingSection/LandingSection';
import ServicesSection from './ServicesSection/ServicesSection';
import QuoteSection from '../UI/QuoteSection/QuoteSection';
import ContactSection from './ContactSection/ContactSection';

const LandingPage = () => {
    return (
        <React.Fragment>
            <LandingSection />
            <ServicesSection />
            <QuoteSection>Hacemos <br />Arte <span>&amp;</span> <br />Ciencia</QuoteSection>
            <ContactSection />
        </React.Fragment>
    );
}

export default LandingPage