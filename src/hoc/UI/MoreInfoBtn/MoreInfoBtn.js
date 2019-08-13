import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './MoreInfoBtn.module.scss';

const MoreInfoBtn = props => {
    return (
        <button className={classes.btn}>
            {props.children}
            <FontAwesomeIcon icon={['fas', 'plus']} className={classes.icon} />
        </button>
    );
}

export default MoreInfoBtn