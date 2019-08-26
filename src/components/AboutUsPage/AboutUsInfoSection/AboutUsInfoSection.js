import React from 'react';

import classes from './AboutUsInfoSection.module.scss';
import SectionTitle from '../../UI/SectionTitle/SectionTitle';
import sanSalvadorCityImg from '../../../assets/img/san-salvador-volcan.png'
import sanSalvadorCenterImg from '../../../assets/img/san-salvador-centro.jpg'
import ParagraphSeparator from '../../../hoc/ParagraphSeparator/ParagraphSeparator';

const AboutUsInfoSection = () => {
    return (
        <section className={classes.section}>
            <h2 className={classes.introText}>Somos una agencia web centrada en el ser humano.</h2>
            <ParagraphSeparator>
                <p>Trabajamos juntos para diseñar, crear y producir trabajo del que estamos orgullosos para las personas y organizaciones en las que creemos. Combinamos creatividad y tecnología para generar una motivación significativa y un compromiso profundo con la calidad de nuestro trabajo y la experiencia de nuestros clientes.</p>
            </ParagraphSeparator>
            <SectionTitle fontSize='2.4rem' color='orange'>Con sede en nuestro bello El Salvador</SectionTitle>
            <img src={sanSalvadorCityImg} className={classes.photo} alt='Ciudad de San Salvador y su volcán' />
            <img src={sanSalvadorCenterImg} className={classes.photo} alt='El centro de la ciudad de San Salvador' />
            <ParagraphSeparator>
                <p>Todo comenzó con nuestra pasión por la tecnología y el diseño de experiencias. El mundo está dependiendo cada día más al entorno digital y muchas empresas aún no han adaptado su forma de hacer negocios a nuestra época; nacimos en el 2019 con el propósito de transformar este panorama y traer nuevas formas de conectar las empresas e individuos con sus usuarios.</p>
            </ParagraphSeparator>
        </section>
    );
};

export default AboutUsInfoSection