import React from 'react';

import classes from './ServicesSection.module.scss';
import SectionTitle from '../../../hoc/UI/SectionTitle/SectionTitle';

const ServicesSection = () => {
    return (
        <section className={classes.servicesSection}>
            <SectionTitle tag='h1'>Servicios</SectionTitle>
        </section>
    );
}

export default ServicesSection