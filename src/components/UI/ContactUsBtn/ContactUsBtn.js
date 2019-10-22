import React from 'react';
import { Link } from 'react-router-dom';

import classes from './ContactUsBtn.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactUsBtn = props => {
    return (
        <Link to='/contacto' className={classes.btn}>
            <button>
                Contáctanos
                <FontAwesomeIcon
                    icon={['fas', 'envelope-open']}
                    className={classes.icon}
                />
            </button>
        </Link>
    );
}

export default ContactUsBtn