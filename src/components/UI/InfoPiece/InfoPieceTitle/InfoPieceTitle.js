import React from 'react';

import classes from './InfoPieceTitle.module.scss';

const InfoPieceTitle = props => {
    return (
        <div className={classes.titleBox}>
            <h2 className={classes.title}>{props.children}</h2>
        </div>
    );
}

export default InfoPieceTitle