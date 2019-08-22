import React from 'react';

import SubSectionTitle from '../../UI/SubSectionTitle/SubSectionTitle';
import MarketingService from  './MarketingService/MarketingService';
import socialMediaManagementIcon from '../../../assets/img/graphics/icons/team.svg'
import socialMediaMarketingIcon from '../../../assets/img/graphics/icons/social-media.svg'
import emailMarketingIcon from '../../../assets/img/graphics/icons/email.svg'

const MarketingServicesSection = () => {
    return (
        <React.Fragment>
            <SubSectionTitle>Trabajamos estas áreas de tu empresa:</SubSectionTitle>
            <MarketingService title='Marketing de redes sociales' icon={socialMediaManagementIcon} />
            <MarketingService title='Manejo de redes sociales' icon={socialMediaMarketingIcon} />
            <MarketingService title='Marketing de email' icon={emailMarketingIcon} />
        </React.Fragment>
    );
};

export default MarketingServicesSection