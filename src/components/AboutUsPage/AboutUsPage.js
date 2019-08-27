import React from 'react';

import classes from './AboutUsPage.module.scss';
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
            <NextPageSection bgColor='#fff'>Contáctanos</NextPageSection>
        </main>
    );
};

export default AboutUsPage