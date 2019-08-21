import React from 'react';

import classes from './ScrollDownArrow.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ScrollDownArrow = props => {
    return (
        <FontAwesomeIcon icon={['fas', 'chevron-down']} className={[classes.arrow, classes[props.color]].join(' ')} />
    );
};

export default ScrollDownArrow