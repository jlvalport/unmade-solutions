import React from 'react';

import LandingDevSection from './LandingDevSection/LandingDevSection';
import SectionTitle from '../UI/SectionTitle/SectionTitle';
import DevServiceDescription from './DevServiceDescription/DevServiceDescription';
import QuoteSection from '../UI/QuoteSection/QuoteSection';
import NextPageSection from '../UI/NextPageSection/NextPageSection';

const DevServicePage = () => {
    return (
        <main>
            <LandingDevSection />
            <SectionTitle>Desarrollo Web</SectionTitle>
            <DevServiceDescription />
            <QuoteSection fontSize='2.2' message='La calidad en un servicio o producto no es lo que pones en él. Es lo que el cliente obtiene de ello.' />
            <NextPageSection link='/servicio-de-marketing' >Marketing</NextPageSection>
        </main>
    );
};

export default DevServicePage