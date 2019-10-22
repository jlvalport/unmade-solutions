import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './LandingSection.module.scss';
import landingImgBgMobile from '../../../assets/img/graphics/bg-round-mobile.svg';
import landingImgBgDesktop from '../../../assets/img/graphics/bg-round-desktop.svg';
import landingImg from '../../../assets/img/graphics/dev.svg';
import ContactUsBtn from '../../UI/ContactUsBtn/ContactUsBtn';

const LandingSection = () => {
    return (
        <section className={classes.landingSection}>
            <div className={classes.devParent}>
                <picture>
                    <source media='(min-width: 700px)' srcSet={landingImgBgDesktop} />
                    <img  className={classes.devBg} src={landingImgBgMobile} alt='' />
                </picture> 
                <img src={landingImg} alt='Developer' className={classes.dev} />
            </div>
            <div className={classes.landingBox}>
                <div className={classes.landingText}>
                    <p>Creamos <span className={classes.desktopText}><b>TU</b> presencia en <b>Internet</b></span></p>
                    <div className={classes.landTextSecondPart}>
                        <p>TU</p>
                        <p>presencia<br /> en <b>Internet</b></p>
                    </div>
                </div>
                <ContactUsBtn />
                <div className={classes.socialIconsDesktopBox}>
                    <FontAwesomeIcon icon={['fab', 'facebook-f']} className={classes.socialIconsDesktop} />
                    <FontAwesomeIcon icon={['fab', 'twitter']} className={classes.socialIconsDesktop} />
                </div>
            </div>
        </section>
    );
}

export default LandingSection