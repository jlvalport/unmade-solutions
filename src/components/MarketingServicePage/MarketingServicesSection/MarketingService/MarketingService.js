import React from 'react';

import classes from './MarketingService.module.scss';

const MarketingService = props => {
    return (
        <div className={classes.serviceBox}>
            <div className={classes.iconBox}>
                <img src={props.icon} alt='' />
            </div>
            <div className={classes.titleBox}>
                <p>{props.title}</p>
            </div>
        </div>
    );
};

export default MarketingService