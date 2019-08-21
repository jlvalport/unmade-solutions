import React from 'react';

import classes from './NextPageSection.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NextPageSection = props => {
    return (
        <section className={classes.section} style={{background: props.bgColor || '#E3E3E3'}}>
            <p>{props.children} <FontAwesomeIcon icon={['fas', 'chevron-right']} className={classes.icon} /></p>
        </section>
    );
};

export default NextPageSection