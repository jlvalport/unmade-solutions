import React from 'react';

import classes from './ContactUsLanding.module.scss';

const ContactUsLanding = () => {
    return (
        <section className={classes.section}>
            <div className={classes.textBox}>
                <p className={classes.hello}>Hola</p>
                <p className={classes.helpYou}>¿Cómo te podemos ayudar?</p>
                <p className={classes.contact}>Puedes contactarnos a <span className={classes.orange}>hola@unmade.solutions</span> y también al teléfono <span className={classes.orange}>(+503) 7681-3313</span>...</p>
            </div>
            <span className={classes.o}>O</span>
        </section>
    );
};

export default ContactUsLanding