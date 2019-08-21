import React from 'react';

import classes from './LandingDevSection.module.scss';
import ScrollDownArrow from '../../UI/ScrollDownArrow/ScrollDownArrow';

const LandingDevSection = () => {
    return(
        <section className={classes.section}>
            <div className={classes.landingTextBox}>
                <p className={classes.landTextStart}>Nos enfocamos en que</p>
                <div className={classes.emTextBox}>
                    <p className={classes.landTextTu}><b>TÚ</b></p>
                    <p className={classes.landTextHagas}>hagas</p>
                    <p className={classes.landTextClientes}>clientes</p>
                </div>
                <p className={classes.landTextVentas}>no ventas</p>
            </div>
            <ScrollDownArrow color='blue' />
        </section>
    );
};

export default LandingDevSection