import React from 'react';

import classes from './Value.module.scss';

const Value = props => {
    return (
        <div className={classes.valueBox}>
            <h3 className={classes.title}>{props.title}</h3>
            <p>{props.infoText}</p>
            <img src={props.icon} alt='' className={classes.icon} />
        </div>
    );
};

export default Value