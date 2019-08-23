import React from 'react';

import classes from './AboutUsLandingSection.module.scss';
import ScrollDownArrow from '../../UI/ScrollDownArrow/ScrollDownArrow';

const AboutUsLandingSection = () => {
    return (
        <section className={classes.section}>
            <div className={classes.landingTextBox}>
                <p className={classes.landTextStart}>Hacemos <br />lo <br />que <br />no <br />está <br />hecho</p>
            </div>
            <ScrollDownArrow color='orange' />
        </section>
    );
};

export default AboutUsLandingSection