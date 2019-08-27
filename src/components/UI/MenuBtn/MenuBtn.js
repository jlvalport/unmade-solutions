import React from 'react';

import classes from './MenuBtn.module.scss';

const MenuBtn = () => {
    return (
        <div className={classes.box}>
            <div className={`${classes.btn} ${classes['not-active']}`}>
                <span className={classes.span}></span>
                <span className={classes.span}></span>
                <span className={classes.span}></span>
            </div>
        </div>
    );
}

export default MenuBtn