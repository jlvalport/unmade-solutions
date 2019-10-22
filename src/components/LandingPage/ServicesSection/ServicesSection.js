import React from 'react';

import classes from './ServicesSection.module.scss';
import SectionTitle from '../../UI/SectionTitle/SectionTitle';
import InfoPiece from '../../UI/InfoPiece/InfoPiece';
import MoreInfoBtn from '../../UI/MoreInfoBtn/MoreInfoBtn';

const ServicesSection = () => {
    return (
        <section className={classes.servicesSection}>
            <SectionTitle tag='h1'>Servicios</SectionTitle>
            <div className={classes.allInfoBox}>
                <InfoPiece tag='h2' title='Desarrollo de Páginas Web'>
                    <p>Tu sitio web es la primera impresión digital de tu empresa y hay que asegurarse que sea excelente. Debe reflejar todo lo que deseas que tus clientes potenciales conozcan y recuerden de tu negocio.</p>
                    <p>Nosotros desarrollamos tu página web con los más altos estándares mundiales, empleando las tecnologías que las empresas del Fortune 500 usan.</p>
                    <MoreInfoBtn link='/servicio-de-desarrollo-web' >Conoce más</MoreInfoBtn>
                </InfoPiece>
                <InfoPiece tag='h2' title='Marketing Digital'>
                    <p>Hacemos que las personas se interesen en el producto o servicio de tu empresa. Esto sucede a través de la investigación de mercado, el análisis y la comprensión de los intereses de tus clientes ideales. El marketing se relaciona a todos los aspectos de una empresa, incluidos el desarrollo de productos, los métodos de distribución, las ventas y la publicidad.</p>
                    <p>El marketing es realmente solo compartir tu pasión.</p>
                    <MoreInfoBtn link='/servicio-de-marketing' >Conoce más</MoreInfoBtn>
                </InfoPiece>
            </div>
        </section>
    );
}

export default ServicesSection