import React from 'react';

import AboutUsLandingSection from './AboutUsLandingSection/AboutUsLandingSection';
import AboutUsInfoSection from './AboutUsInfoSection/AboutUsInfoSection';
import OurValuesSection from './OurValuesSection/OurValuesSection';
import NextPageSection from '../UI/NextPageSection/NextPageSection';

const AboutUsPage = () => {
    return (
        <main>
            <AboutUsLandingSection />
            <AboutUsInfoSection />
            <OurValuesSection />
            <NextPageSection bgColor='#fff' link='/contacto' >Contáctanos</NextPageSection>
        </main>
    );
};

export default AboutUsPage