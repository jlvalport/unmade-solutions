import React from 'react';
import { withFormik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import classes from './ContactForm.module.scss';

const CForm = ({
    values,
    errors,
    touched,
    isSubmitting
}) => (
        <Form className={classes.contactForm}>
            <div className={classes.input}>
                <label className={touched.name && errors.name ? [classes.label, classes.labelError].join(' ') : classes.label} >Mi nombre es
                <ErrorMessage name='name' component='p' className={classes.error}/>
                <Field type='text' name='name' placeholder='Tu nombre' autoComplete='name' className={classes.inputElement} />
                </label>
            </div>
            <div className={classes.input}>
                <label className={touched.email && errors.email ? [classes.label, classes.labelError].join(' ') : classes.label} >Contáctame a
                <ErrorMessage name='email' component='p' className={classes.error}/>
                <Field type='email' name='email' placeholder='tu@correo.com' autoComplete='email' className={classes.inputElement} />
                </label>
            </div>
            <div className={classes.input}>
                <label className={touched.phone && errors.phone ? [classes.label, classes.labelError].join(' ') : classes.label} >Mi número de teléfono es
                <ErrorMessage name='phone' component='p' className={classes.error}/>
                <Field type='phone' name='phone' placeholder='Tu número de teléfono' autoComplete='tel' className={classes.inputElement} />
                </label>
            </div>
            <div className={classes.input}>
                <label className={touched.company && errors.company ? [classes.label, classes.labelError].join(' ') : classes.label} >Trabajo en
                <ErrorMessage name='company' component='p' className={classes.error}/>
                <Field type='text' name='company' placeholder='Tu compañía' autoComplete='organization' className={classes.inputElement} />
                </label>
            </div>
            <div className={classes.input}>
                <label className={touched.message && errors.message ? [classes.label, classes.labelError].join(' ') : classes.label} >Mensaje
                <ErrorMessage name='message' component='p' className={classes.error}/>
                <Field component='textarea' name='message' placeholder='Empieza a escribir...' className={classes.textAreaElement} />
                </label>
            </div>
            <button type='submit' className={classes.sendBtn} disabled={isSubmitting}>Enviar</button>
        </Form>
    );

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
        console.log(values);
        
    }
})(CForm)

export default ContactForm