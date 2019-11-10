import React from 'react';
import { withFormik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import classes from './ContactForm.module.scss';

const CForm = props => {
    const {
        errors,
        touched,
        isSubmitting,
        bgColor
    } = props;

    return (
        <Form className={classes.contactForm}>
            <div className={classes.inputBox}>
                <label className={touched.name && errors.name ? [classes.label, classes.labelError].join(' ') : classes.label} >Mi nombre es
                <ErrorMessage name='name' component='p' className={classes.error} />
                    <Field type='text' name='name' placeholder='Tu nombre' autoComplete='name' className={bgColor ? [classes.inputElement, classes[bgColor]].join(' ') : classes.inputElement} />
                </label>
            </div>
            <div className={classes.inputBox}>
                <label className={touched.email && errors.email ? [classes.label, classes.labelError].join(' ') : classes.label} >Contáctame a
                <ErrorMessage name='email' component='p' className={classes.error} />
                    <Field type='email' name='email' placeholder='tu@correo.com' autoComplete='email' className={bgColor ? [classes.inputElement, classes[bgColor]].join(' ') : classes.inputElement} />
                </label>
            </div>
            <div className={classes.inputBox}>
                <label className={touched.phone && errors.phone ? [classes.label, classes.labelError].join(' ') : classes.label} >Mi número de teléfono es
                <ErrorMessage name='phone' component='p' className={classes.error} />
                    <Field type='phone' name='phone' placeholder='Tu número de teléfono' autoComplete='tel' className={bgColor ? [classes.inputElement, classes[bgColor]].join(' ') : classes.inputElement} />
                </label>
            </div>
            <div className={classes.inputBox}>
                <label className={touched.company && errors.company ? [classes.label, classes.labelError].join(' ') : classes.label} >Trabajo en
                <ErrorMessage name='company' component='p' className={classes.error} />
                    <Field type='text' name='company' placeholder='Tu compañía' autoComplete='organization' className={bgColor ? [classes.inputElement, classes[bgColor]].join(' ') : classes.inputElement} />
                </label>
            </div>
            <div className={classes.inputBox}>
                <label className={touched.message && errors.message ? [classes.label, classes.labelError].join(' ') : classes.label} >Mensaje
                <ErrorMessage name='message' component='p' className={classes.error} />
                    <Field component='textarea' name='message' placeholder='Empieza a escribir...' autoComplete='off' className={bgColor ? [classes.textAreaElement, classes[bgColor]].join(' ') : classes.textAreaElement} />
                </label>
            </div>
            <button type='submit' className={classes.sendBtn} disabled={isSubmitting}>Enviar</button>
        </Form>
    );
};

const ContactForm = withFormik({
    mapPropsToValues({ name, email, phone, company, message }) {
        return {
            name: name || '',
            email: email || '',
            phone: phone || '',
            company: company || '',
            message: message || ''
        }
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required('El nombre es requerido'),
        email: Yup.string().email('Email invalido').required('Email requerido'),
        phone: Yup.number().typeError('Debe ser un número telefónico'),
        company: Yup.string(),
        message: Yup.string().required('Mensaje requerido')
    }),
    handleSubmit(values) {
        // This is the endpoint we created in our API Gateway. This is where we make our POST request, which calls our Lambda function.
        const endpoint = 'https://9njydz2hi0.execute-api.us-west-1.amazonaws.com/stageOne/submit';
        
        // Here, we instantiate our Request. This is a special object used by the Fetch API so it knows where to send data, what data to send, and how to send it.
        var lambdaRequest = new Request(endpoint, {
            method: 'POST',
            // Quick note: 'no-cors' mode is for development on localhost only!
            mode: 'no-cors',
            body: JSON.stringify(values)
        });

        // Call the Fetch API to make our request
        fetch(lambdaRequest)
            // This is where you can handle errors. This is just an example, so we won't cover that.
            .then(response => console.log(response))
            .catch(err => console.log(err));

    }
})(CForm)

export default ContactForm