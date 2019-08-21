import React from 'react';

import classes from './QuoteSection.module.scss';
import triangleVector from '../../../assets/img/graphics/triangle.svg'

const QuoteSection = props => {
    return (
        <section className={classes.outerBox}>
            <img src={triangleVector} alt='' className={classes.triangleVector} />
            <img src={triangleVector} alt='' className={classes.triangleVector} />
            <div className={classes.innerBox}>
                <p style={{fontSize: props.fontSize + 'rem'}}>{props.children}</p>
            </div>
        </section>
    );
}

export default QuoteSection