import React from 'react';

import classes from './MenuBtn.module.scss';

const MenuBtn = () => {
    return (
        <div className={classes.box}>
            <div className={`${classes.btn} ${classes['not-active']}`}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}

export default MenuBtn