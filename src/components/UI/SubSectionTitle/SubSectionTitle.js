import React from 'react';

import classes from './SubSectionTitle.module.scss';

const SubSectionTitle = props => {
    const component = {
        h2: 'h2',
        h3: 'h3'
    }

    const SpecificComponent = props.tag ? component[props.tag] : 'h2'

    return (
        <SpecificComponent className={classes.subTitle} > {props.children} </SpecificComponent>
    );
};

export default SubSectionTitle