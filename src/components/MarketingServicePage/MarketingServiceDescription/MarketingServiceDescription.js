import React from 'react';

import InfoPiece from '../../UI/InfoPiece/InfoPiece';
import SubSectionTitle from '../../UI/SubSectionTitle/SubSectionTitle';
import MasonryLayout from '../../UI/MasonryLayout/MasonryLayout';
import classes from './MarketingServiceDescription.module.scss';

const MarketingServiceDescription = () => {
    return (
        <React.Fragment>
            <SubSectionTitle>Algunos objetivos del marketing son:</SubSectionTitle>
            <MasonryLayout>
                <InfoPiece title='Educa al Cliente' masonryLayout={true} >
                    <p>El propósito principal del marketing es educar a tu cliente. Solo cuando los clientes conocen tus productos y servicios, pueden pensar en optar por ellos. Sin marketing, se vuelve difícil para ti ganar más tracción entre tus clientes. El uso del marketing para promocionar tu producto, servicio y compañía le brinda a tu negocio la posibilidad de ser descubierto.</p>
                </InfoPiece>
                <InfoPiece title='Mayores Ventas' masonryLayout={true} >
                    <p>Una vez que tu producto, servicio o compañía aparece en el radar de tus prospectos, aumenta tus posibilidades de que los consumidores realicen una compra. A medida que el conocimiento de tu empresa se convierte en una realidad, es también el punto en el que los nuevos clientes comienzan a correr la voz y les cuentan a sus amigos y familiares sobre este nuevo e increíble producto que descubrieron. Tus ventas aumentarán constantemente a medida que la palabra se extienda. Sin emplear estrategias de marketing, estas ventas pueden no haber ocurrido nunca; sin ventas, una empresa no puede tener éxito.</p>
                </InfoPiece>
                <InfoPiece title='Reputación de la Compañía' masonryLayout={true} >
                    <p>El éxito de una empresa a menudo se basa en una sólida reputación. El marketing construye el reconocimiento de marca o el hecho de recordar los productos de una empresa. Cuando una empresa alcanza las altas expectativas del público, su reputación se mantiene firme. A medida que su reputación crece, el negocio se expande y las ventas aumentan. La reputación de tu empresa se construye a través de la participación activa en programas comunitarios, comunicación efectiva –externa e interna– y productos o servicios de calidad, creados o respaldados por esfuerzos de marketing.</p>
                </InfoPiece>
            </MasonryLayout>
        </React.Fragment>
    );
};

export default MarketingServiceDescription