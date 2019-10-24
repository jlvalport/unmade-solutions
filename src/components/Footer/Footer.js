import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import classes from './Footer.module.scss';
import Newsletter from './Newsletter/Newsletter';

const Footer = () => {
    const date = new Date();
    const currentYear = date.getFullYear();

    return (
        <footer className={classes.footer}>
            <div className={classes.footerHead}>
                <Link to='/' className={classes.footerLogo} >
                    <p><b>Unmade</b> Solutions</p>
                </Link>
                <div className={classes.footerContactBox}>
                    <p className={classes.footerContact}><FontAwesomeIcon icon={['fas', 'mobile']} className={classes.contactInfoIcon} /> C 7681-3313</p>
                    <p className={classes.footerContact}><FontAwesomeIcon icon={['fas', 'envelope-open']} className={classes.contactInfoIcon} /> hola@unmade.solutions</p>
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
                        <Link to='/servicio-de-desarrollo-web' >
                            <p>Desarrollo de páginas web</p>
                        </Link>
                        <Link to='/servicio-de-marketing' >
                            <p>Marketing digital</p>
                        </Link>
                    </div>
                    <div className={classes.linksInnerBox}>
                        <p className={classes.titleSpace} ></p>
                        <Link to='/acerca-de-nosotros' >
                            <p>Acerca de nosotros</p>
                        </Link>
                        <Link to='/contacto' >
                            <p>Contáctanos</p>
                        </Link>
                    </div>
                </div>
                <div className={classes.linksOutterBox} style={{ margin: 0 }}>
                    <div className={[classes.linksInnerBox, classes.policyLinksMobile].join(' ')}>
                        <p>Política de privacidad</p>
                        <p>Términos de uso</p>
                    </div>
                    <div className={[classes.linksInnerBox, classes.flexEnd, classes.spaceAround].join(' ')}>
                        <FontAwesomeIcon icon={['fab', 'twitter']} className={classes.socialLinks} />
                        <FontAwesomeIcon icon={['fab', 'facebook-f']} className={classes.socialLinks} />
                    </div>
                </div>
                <div className={classes.copyrightBox}>
                    <hr className={classes.hr} />
                    <p className={classes.policyLinksDesktop} >Política de privacidad</p>
                    <p className={classes.policyLinksDesktop} >Términos de uso</p>
                    <p className={classes.copyrightInfo} >Unmade Solutions © {currentYear}</p>
                    <p className={classes.copyrightInfo} >Orgullosamente Salvadoreños</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer