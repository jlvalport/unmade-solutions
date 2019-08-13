import React from 'react';

import classes from './LandingSection.module.scss';
import landingImgBg from '../../../assets/img/graphics/bg-round2.svg';
import landingImg from '../../../assets/img/graphics/dev.svg';

const LandingSection = () => {
    return (
        <section className={classes.landingSection}>
            <div className={classes.landingText}>
                <p>Creamos</p>
                <div className={classes.landTextSecondPart}>
                    <p>TU</p>
                    <p>presencia<br /> en <b>Internet</b></p>
                </div>
            </div>
            <div className={classes.devParent}>
                <img src={landingImgBg} alt='Developer background' className={classes.devBg} />
                <img src={landingImg} alt='Developer' className={classes.dev} />
            </div>
        </section>
    );
}

export default LandingSection