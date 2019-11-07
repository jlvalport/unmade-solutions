import React from 'react';
import PropTypes from 'prop-types';

import classes from './MasonryLayout.module.scss';

const MasonryLayout = props => {
    const columnWrapper = {},
        result = [],
        win = window,
        doc = document,
        docElem = doc.documentElement,
        body = doc.getElementsByTagName('body')[0],
        pageWidth = win.innerWidth || docElem.clientWidth || body.clientWidth,
        numOfColumns = pageWidth > 800 ? 2 : props.columns;

    // create columns
    for (let i = 0; i < numOfColumns; i++) {
        columnWrapper[`column${i}`] = [];
    }

    for (let i = 0; i < props.children.length; i++) {
        const columnIndex = i % numOfColumns;
        columnWrapper[`column${columnIndex}`].push(
            <div style={{ marginBottom: `${props.gap}px` }} key={i} >
                {props.children[i]}
            </div>
        );
    }

    for (let i = 0; i < numOfColumns; i++) {
        result.push(
            <div
                style={{
                    marginLeft: `${i > 0 ? props.gap : 0}px`,
                    flex: 1,
                }}
                key={i}
            >
                {columnWrapper[`column${i}`]}
            </div>
        );
    }
    return (
        <div style={{ display: 'flex' }}>
            {result}
        </div>
    );
}

MasonryLayout.propTypes = {
    columns: PropTypes.number.isRequired,
    gap: PropTypes.number.isRequired,
    children: PropTypes.arrayOf(PropTypes.element)
};

MasonryLayout.defaultProps = {
    columns: 1,
    gap: 20
};

export default MasonryLayout