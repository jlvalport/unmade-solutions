import React from 'react';

import LandingSection from './LandingSection/LandingSection';
import ServicesSection from './ServicesSection/ServicesSection';

const LandingPage = () => {
    return (
        <React.Fragment>
            <LandingSection />
            <ServicesSection />
        </React.Fragment>
    );
}

export default LandingPage