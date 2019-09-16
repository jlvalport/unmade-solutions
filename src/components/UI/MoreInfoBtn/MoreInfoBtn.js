import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './MoreInfoBtn.module.scss';

const MoreInfoBtn = props => {
    return (
        <Link to={props.link} className={classes.btn} >
            <button>
                {props.children}
                <FontAwesomeIcon icon={['fas', 'plus']} className={classes.icon} />
            </button>
        </Link>
    );
}

export default MoreInfoBtn