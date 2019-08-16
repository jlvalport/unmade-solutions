import React from 'react';

import classes from './Input.module.scss';

const Input = props => {
    let inputElement = null;
    const labelClasses = [classes.label];

    if (props.invalid && props.touched) {
        labelClasses.push(classes.invalid)
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className={classes.inputElement}
                {...props.elementConfig}
                value={props.value} 
                onChange={props.changed}
                />;
            break;
        case ('textarea'):
            inputElement = <textarea
                className={classes.textAreaElement}
                {...props.elementConfig}
                value={props.value} 
                onChange={props.changed}
                />;
            break;
        default:
            inputElement = <input
                className={classes.inputElement}
                {...props.elementConfig}
                value={props.value} 
                onChange={props.changed}
                />;
    }

    return (
        <div className={classes.input}>
            <label className={labelClasses.join(' ')}>{props.label}</label>
            {inputElement}
        </div>
    );
}

export default Input