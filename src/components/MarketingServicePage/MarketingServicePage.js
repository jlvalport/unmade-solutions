import React from 'react';

import classes from './MarketingServicePage.module.scss';
import MarketingLandingSection from './MarketingLandingSection/MarketingLandingSection';
import SectionTitle from '../UI/SectionTitle/SectionTitle';
import MarketingServiceDescription from './MarketingServiceDescription/MarketingServiceDescription';
import MarketingServicesSection from './MarketingServicesSection/MarketingServicesSection';
import NextPageSection from '../UI/NextPageSection/NextPageSection';

const MarketingServicePage = () => {
    return (
        <main>
            <MarketingLandingSection />
            <SectionTitle>Marketing Digital</SectionTitle>
            <p className={classes.serviceIntro}>La mayoría de los aspectos de tu negocio dependen de la comercialización exitosa. El paraguas global de marketing cubre publicidad, relaciones públicas, promociones y ventas. El marketing es un proceso mediante el cual un producto o servicio se introduce y promueve a clientes potenciales. Sin marketing, su empresa puede ofrecer los mejores productos o servicios en su industria, pero ninguno de sus clientes potenciales lo sabría. Sin marketing, las ventas pueden caer y las empresas deben cerrar.</p>
            <MarketingServiceDescription />
            <MarketingServicesSection />
            <NextPageSection>Acerca de <br />nosotros</NextPageSection>
        </main>
    );
};

export default MarketingServicePage