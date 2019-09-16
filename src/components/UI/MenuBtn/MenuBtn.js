import React from 'react';

import classes from './MenuBtn.module.scss';

const MenuBtn = props => {
    let btnClasses = [classes['hamburger'], classes['hamburger--slider']]

    if (props.isMenuShowing) {
        btnClasses = btnClasses.concat(classes['is-active']);
    }

    return (
        <button
            className={btnClasses.join(' ')}
            type='button'
            onClick={props.menuClicked}
        >
            <span className={classes['hamburger-box']}>
                <span className={classes['hamburger-inner']}></span>
            </span>
        </button>
    );
}

export default MenuBtn