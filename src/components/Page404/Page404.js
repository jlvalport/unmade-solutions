import React from 'react';

import classes from './Page404.module.scss';
import img404 from '../../assets/img/graphics/404.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Page404 = () => {
    return (
        <main className={classes.section}>
            <div className={classes.infoBox}>
                <p className={classes.four}>404</p>
                <p className={classes.notFound}>Página no encontrada</p>
                <img src={img404} alt='' className={classes.img} />
            </div>
            <button className={classes.btn}> 
                <FontAwesomeIcon icon={['fas', 'chevron-left']} className={classes.icon}/> Inicio
            </button>
        </main>
    );
};

export default Page404