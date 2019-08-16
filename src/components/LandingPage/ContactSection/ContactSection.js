import React from 'react';

import classes from './ContactSection.module.scss';
import ContactForm from '../../UI/ContactForm/ContactForm';

const ContactSection = () => {
    return (
        <section className={classes.contactSection}>
            <h2>¿Quieres una cotización?</h2>
            <p>Platiquemos, mándanos un mensaje</p>
            <ContactForm />
        </section>
    );
}

export default ContactSection