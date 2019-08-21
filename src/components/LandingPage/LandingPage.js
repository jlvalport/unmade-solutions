import React from 'react';

import LandingSection from './LandingSection/LandingSection';
import ServicesSection from './ServicesSection/ServicesSection';
import QuoteSection from '../UI/QuoteSection/QuoteSection';
import ContactSection from './ContactSection/ContactSection';

const LandingPage = () => {
    return (
        <main>
            <LandingSection />
            <ServicesSection />
            <QuoteSection>Hacemos <br />Arte <span>&amp;</span> <br />Ciencia</QuoteSection>
            <ContactSection />
        </main>
    );
}

export default LandingPage