import React from 'react';

import classes from './ParagraphSeparator.module.scss';

const ParagraphSeparator = props => {
    return (
        <div className={classes.separator}>
            {props.children}
        </div>
    );
};

export default ParagraphSeparator