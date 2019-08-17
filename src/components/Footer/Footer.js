import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './Footer.module.scss';
import Newsletter from './Newsletter/Newsletter';

const Footer = () => {
    const date = new Date();
    const currentYear = date.getFullYear();

    return (
        <footer className={classes.footer}>
            <div className={classes.footerHead}>
                <p className={classes.footerLogo}><b>Unmade</b> Solutions</p>
                <div className={classes.footerContactBox}>
                    <p className={classes.footerContact}>C 7681-3313</p>
                    <p className={classes.footerContact}>hola@unmade.solutions</p>
                </div>
            </div>
            <div className={classes.footerBody}>
                <div className={classes.newsletterBox}>
                    <p>Suscríbete para obtener técnicas para mejorar procesos y también promociones</p>
                    <Newsletter />
                </div>
                <div className={classes.linksOutterBox}>
                    <div className={classes.linksInnerBox}>
                        <p className={classes.pageLinksTitle}>Servicios</p>
                        <p>Desarrollo de páginas web</p>
                        <p>Marketing digital</p>
                    </div>
                    <div className={[classes.linksInnerBox, classes.flexEnd].join(' ')}>
                        <p>Acerca de nosotros</p>
                        <p>Contáctanos</p>
                    </div>
                </div>
                <div className={classes.linksOutterBox} style={{margin: 0}}>
                    <div className={classes.linksInnerBox}>
                        <p>Política de privacidad</p>
                        <p>Términos de uso</p>
                    </div>
                    <div className={[classes.linksInnerBox, classes.flexEnd, classes.spaceAround].join(' ')}>
                        <FontAwesomeIcon icon={['fab', 'facebook-f']} className={classes.socialLinks}/>
                        <FontAwesomeIcon icon={['fab', 'twitter']} className={classes.socialLinks}/>
                    </div>
                </div>
                <div className={classes.copyrightBox}>
                    <hr className={classes.hr}/>
                    <p>Unmade Solutions © {currentYear}</p>
                    <p>Orgullosamente Salvadoreños</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer