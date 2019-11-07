import React from 'react';
import PropTypes from 'prop-types';

import classes from './InfoPiece.module.scss';
import InfoPieceTitle from './InfoPieceTitle/InfoPieceTitle';

const InfoPiece = props => {
    return (
        <div className={
            props.masonryLayout
                ? [classes.infoPieceBox, classes.insideMasonryLayout].join(' ')
                : classes.infoPieceBox
        }>
            <InfoPieceTitle tag={props.tag} >{props.title}</InfoPieceTitle>
            {props.children}
        </div>
    );
}

InfoPiece.propTypes = {
    title: PropTypes.string.isRequired,
    tag: PropTypes.string,
    masonryLayout: PropTypes.bool
}

InfoPiece.defaultProps = {
    masonryLayout: false
}

export default InfoPiece