import React from 'react';

import classes from './MarketingLandingSection.module.scss';
import ScrollDownArrow from '../../UI/ScrollDownArrow/ScrollDownArrow';

const MarketingLandingSection = () => {
    return (
        <section className={classes.section}>
            <div className={classes.landingTextBox}>
                <div className={classes.emTextBox}>
                    <p className={classes.inspiration}>La <b>inspiración</b></p>
                    <p className={classes.important}>es la parte <br /><b>más importante</b></p>
                </div>
                <p className={classes.of}>de</p>
                <p className={classes.your}><b>TU</b></p>
                <p className={classes.strategy}>estrategia digital</p>
            </div>
            <ScrollDownArrow color='blue' />
        </section>
    );
};

export default MarketingLandingSection