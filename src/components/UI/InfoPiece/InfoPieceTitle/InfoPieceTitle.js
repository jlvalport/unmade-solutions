import React from 'react';

import classes from './InfoPieceTitle.module.scss';

const InfoPieceTitle = props => {
    const component = {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3'
    }
    const SpecificComponent = props.tag ? component[props.tag] : 'h3';

    return (
        <div className={classes.titleBox}>
            <SpecificComponent className={classes.title}>{props.children}</SpecificComponent>
        </div>
    );
}

export default InfoPieceTitle