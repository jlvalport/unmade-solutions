import React from 'react';
import { withFormik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Lottie from 'react-lottie';
import checkSuccessLottie from '../../../lotties/782-check-mark-success.json';
import submittingLottie from '../../../lotties/lf30_editor_n05w8G.json';

import classes from './ContactForm.module.scss';

class CForm extends React.Component {

    render() {
        const {
            errors,
            touched,
            isSubmitting,
            handleSubmit,
            isValid,
            bgColor
        } = this.props;

        const submittingLottieOptions = {
            loop: true,
            autoplay: true,
            animationData: submittingLottie,
            name: 'submittingFormLoading',
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        }

        const checkSuccessLottieOptions = {
            loop: false,
            autoplay: true,
            animationData: checkSuccessLottie,
            name: 'checkMarkSuccess',
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };

        return (
            <Form className={classes.contactForm} onSubmit={handleSubmit}>
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
                <button type='submit'
                    className={classes.sendBtn}
                    disabled={isSubmitting || !isValid}
                >
                    <span style={isSubmitting ? { display: 'none' } : this.props.status.submitSuccess || this.props.status.submitError ? { display: 'none' } : null}>Enviar</span>
                    {isSubmitting &&
                        <Lottie
                            options={submittingLottieOptions}
                            height={50}
                            width={50}
                        />}
                    {this.props.status.submitSuccess &&
                        <Lottie
                            options={checkSuccessLottieOptions}
                            height={50}
                            width={50}
                        />}
                    {this.props.status.submitError &&
                        <span className={classes.submitError}>Error</span>
                    }
                </button>
            </Form>
        );
    }
};

const ContactForm = withFormik({
    mapPropsToStatus() {
        return {
            submitSuccess: false,
            submitError: false
        }
    },
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
    handleSubmit(values, { resetForm, setSubmitting, setStatus }) {
        // This is the endpoint we created in our API Gateway. This is where we make our POST request, which calls our Lambda function.
        const endpoint = 'https://egofd1xgti.execute-api.us-west-2.amazonaws.com/StageOne/submit';

        // We replace line to keep format of text in message value
        const messageText = values.message;
        const formattedMessageText = messageText.replace(/\n/g, '<br />');
        let newValues = { ...values };
        newValues.message = formattedMessageText;

        // Here, we instantiate our Request. This is a special object used by the Fetch API so it knows where to send data, what data to send, and how to send it.
        var lambdaRequest = new Request(endpoint, {
            method: 'POST',
            // Quick note: 'no-cors' mode is for development on localhost only!
            mode: 'no-cors',
            body: JSON.stringify(newValues)
        });

        // Call the Fetch API to make our request
        fetch(lambdaRequest)
            .then(response => {
                console.log(response)
                resetForm();
                setSubmitting(false);
                setStatus({ submitSuccess: true });
                setTimeout(() => {
                    setStatus({ submitSuccess: false })
                }, 5000);
            })
            .catch(err => {
                console.log(err);
                resetForm();
                setSubmitting(false);
                setStatus({ submitError: true });
                setTimeout(() => {
                    setStatus({ submitError: false })
                }, 7000);
            });

    }
})(CForm)

export default ContactForm