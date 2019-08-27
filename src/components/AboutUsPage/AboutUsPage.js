import React from 'react';

import classes from './AboutUsPage.module.scss';
import AboutUsLandingSection from './AboutUsLandingSection/AboutUsLandingSection';
import AboutUsInfoSection from './AboutUsInfoSection/AboutUsInfoSection';
import OurValuesSection from './OurValuesSection/OurValuesSection';

const AboutUsPage = () => {
    return (
        <main>
            <AboutUsLandingSection />
            <AboutUsInfoSection />
            <OurValuesSection />
        </main>
    );
};

export default AboutUsPage