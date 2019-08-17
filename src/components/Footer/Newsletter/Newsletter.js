import React from 'react';
import { withFormik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import classes from './Newsletter.module.scss';

const NewsletterForm = ({
    errors,
    touched
}) => (
        <Form className={classes.newsletterForm}>
            <div className={classes.inputBox}>
                <Field
                    type='email'
                    name='email'
                    placeholder='tu@correo.com'
                    autoComplete='email'
                    className={ touched.email && errors.email ? [classes.inputElement, classes.inputError].join(' ') : classes.inputElement }
                />
                <ErrorMessage name='email' component='p' className={classes.error} />
            </div>
            <button type='submit' className={classes.sendBtn}>Enviar</button>
        </Form>
    );

const Newsletter = withFormik({
    mapPropsToValues({ email }) {
        return {
            email: email || ''
        }
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().email('Email invalido').required('Email requerido')
    }),
    handleSubmit(values) {
        console.log(values);

    }
})(NewsletterForm)

export default Newsletter