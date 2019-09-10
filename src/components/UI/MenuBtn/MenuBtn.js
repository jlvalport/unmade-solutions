import React from 'react';

import classes from './MenuBtn.module.scss';

const MenuBtn = () => {
    return (
        <button className={[classes['hamburger'], classes['hamburger--slider']].join(' ')} type='button'>
            <span className={classes['hamburger-box']}>
                <span className={classes['hamburger-inner']}></span>
            </span>
        </button>
    );
}

export default MenuBtn