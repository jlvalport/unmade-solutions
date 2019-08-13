import React from 'react';

import LandingSection from './LandingSection/LandingSection';
import ServicesSection from './ServicesSection/ServicesSection';
import QuoteSection from '../../hoc/UI/QuoteSection/QuoteSection';

const LandingPage = () => {
    return (
        <React.Fragment>
            <LandingSection />
            <ServicesSection />
            <QuoteSection>Hacemos <br />Arte <span>&amp;</span> <br />Ciencia</QuoteSection>
        </React.Fragment>
    );
}

export default LandingPage