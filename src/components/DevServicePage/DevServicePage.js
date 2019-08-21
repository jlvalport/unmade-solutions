import React from 'react';

import classes from './DevServicePage.module.scss';
import LandingDevSection from './LandingDevSection/LandingDevSection';
import DevServiceDescription from './DevServiceDescription/DevServiceDescription';
import QuoteSection from '../UI/QuoteSection/QuoteSection';

const DevServicePage = () => {
    return (
        <main>
            <LandingDevSection />
            <DevServiceDescription />
            <QuoteSection fontSize='2.2'>La calidad en un servicio o producto no es lo que pones en él. Es lo que el cliente obtiene de ello.</QuoteSection>
        </main>
    );
};

export default DevServicePage