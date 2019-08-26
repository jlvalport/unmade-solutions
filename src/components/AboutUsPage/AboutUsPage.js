import React from 'react';

import classes from './AboutUsPage.module.scss';
import AboutUsLandingSection from './AboutUsLandingSection/AboutUsLandingSection';
import AboutUsInfoSection from './AboutUsInfoSection/AboutUsInfoSection';

const AboutUsPage = () => {
    return (
        <main>
            <AboutUsLandingSection />
            <AboutUsInfoSection />
        </main>
    );
};

export default AboutUsPage