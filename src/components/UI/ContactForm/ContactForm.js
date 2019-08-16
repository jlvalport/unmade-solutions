import React from 'react';

import classes from './ContactForm.module.scss';
import Input from './Input/Input';

class ContactForm extends React.Component {
    state = {
        form: {
            name: {
                elementType: 'input',
                label: 'Mi nombre es',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Tu nombre'
                },
                value: '',
                validation: {
                    required: true,
                    touched: false,
                    valid: false,
                    minLength: 1
                }
            },
            email: {
                elementType: 'input',
                label: 'Contáctame a',
                elementConfig: {
                    type: 'email',
                    placeholder: 'tu@correo.com'
                },
                value: '',
                validation: {
                    required: true,
                    touched: false,
                    valid: false,
                    minLength: 1
                }
            },
            phone: {
                elementType: 'input',
                label: 'Mi número de teléfono es',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Tu número de teléfono'
                },
                value: '',
                validation: {
                    required: false,
                    touched: false,
                    valid: false
                }
            },
            company: {
                elementType: 'input',
                label: 'Trabajo en',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Tu compañia'
                },
                value: '',
                validation: {
                    required: false,
                    touched: false,
                    valid: false
                }
            },
            message: {
                elementType: 'textarea',
                label: 'Mensaje',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Empieza a escribir...'
                },
                value: '',
                validation: {
                    required: true,
                    touched: false,
                    valid: false,
                    minLength: 1
                }
            }
        }
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedForm = {
            ...this.state.form
        };
        const updatedFormElement = {
            ...updatedForm[inputIdentifier]
        };
        const updatedFormElementValidation = {
            ...updatedFormElement.validation
        }
        updatedFormElement.value = event.target.value;
        updatedFormElementValidation.valid = this.checkValidity(updatedFormElement.value, updatedFormElementValidation);
        updatedFormElementValidation.touched = true;
        updatedFormElement.validation = updatedFormElementValidation;
        updatedForm[inputIdentifier] = updatedFormElement;
        console.log(updatedFormElement);
        
        this.setState({form: updatedForm});
    }

    sendInfoHandler = event => {
        event.preventDefault();
    }

    checkValidity(value, rules) {
        let isValid = true;
        
        if (rules.required) {
            isValid = value.trim() !==  '' && isValid;
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        return isValid;
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.form) {
            formElementsArray.push({
                id: key,
                config: this.state.form[key]
            });
        }

        return (
            <form onSubmit={this.sendInfoHandler} className={classes.contactForm}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        label={formElement.config.label}
                        value={formElement.config.value}
                        invalid={!formElement.config.validation.isValid}
                        touched={formElement.config.validation.touched}
                        changed={event => this.inputChangedHandler(event, formElement.id)}
                    />
                ))}
                <button className={classes.sendBtn}>Enviar</button>
            </form>
        );
    }

}

export default ContactForm