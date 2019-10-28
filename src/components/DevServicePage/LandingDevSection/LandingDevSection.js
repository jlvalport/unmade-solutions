import React from 'react';

import classes from './LandingDevSection.module.scss';
import ScrollDownArrow from '../../UI/ScrollDownArrow/ScrollDownArrow';

const LandingDevSection = () => {
    return(
        <section className={classes.section}>
            <div className={classes.landingTextBoxMobile}>
                <p className={classes.landTextStart}>Nos enfocamos en que</p>
                <div className={classes.emTextBox}>
                    <p className={classes.landTextTu}><b>TÚ</b></p>
                    <p className={classes.landTextHagas}>hagas</p>
                    <p className={classes.landTextClientes}>clientes</p>
                </div>
                <p className={classes.landTextVentas}>no solo ventas</p>
            </div>
            <div className={classes.landingTextBoxDesktop}>
                <p><b>Nos enfocamos</b> en que <b>TÚ</b> hagas <b>clientes</b> no solo ventas</p>
            </div>
            <ScrollDownArrow color='blue' />
        </section>
    );
};

export default LandingDevSection