import React from 'react';

import classes from './SectionTitle.module.scss';

const SectionTitle = props => {
    const component = {
        h1: 'h1',
        h2: 'h2'
    }

    const SpecificComponent = component[props.tag];

    return (

        <SpecificComponent className= {classes.title}> { props.children }</SpecificComponent>

    );
}

export default SectionTitle