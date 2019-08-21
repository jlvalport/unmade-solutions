import React from 'react';

import classes from './InfoPiece.module.scss';
import InfoPieceTitle from './InfoPieceTitle/InfoPieceTitle';

const InfoPiece = props => {
    return (
        <div className={classes.infoPieceBox}>
            <InfoPieceTitle tag={props.tag} >{props.title}</InfoPieceTitle>
            {props.children}
        </div>
    );
}

export default InfoPiece