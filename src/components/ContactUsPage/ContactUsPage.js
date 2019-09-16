import React from 'react';

import classes from './ContactUsPage.module.scss';
import ContactUsLanding from './ContactUsLanding/ContactUsLanding';
import ContactForm from '../UI/ContactForm/ContactForm';

const ContactUsPage = () => {
    return (
        <main>
            <ContactUsLanding />
            <p className={classes.p}>puedes usar este formulario:</p>
            <div className={classes.contactFormBox}>
                <ContactForm bgColor='white' />
            </div>
        </main>
    );
};

export default ContactUsPage