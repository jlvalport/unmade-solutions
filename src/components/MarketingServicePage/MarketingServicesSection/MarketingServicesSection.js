import React from 'react';

import SubSectionTitle from '../../UI/SubSectionTitle/SubSectionTitle';
import MarketingService from './MarketingService/MarketingService';
import socialMediaManagementIcon from '../../../assets/img/graphics/icons/team.svg'
import socialMediaMarketingIcon from '../../../assets/img/graphics/icons/social-media.svg'
import emailMarketingIcon from '../../../assets/img/graphics/icons/email.svg'
import classes from './MarketingServicesSection.module.scss';

const MarketingServicesSection = () => {
    return (
        <React.Fragment>
            <SubSectionTitle>Trabajamos estas áreas de tu empresa:</SubSectionTitle>
            <div className={classes.servicesInfoBox}>
                <MarketingService title='Marketing de redes sociales' icon={socialMediaManagementIcon} />
                <MarketingService title='Manejo de redes sociales' icon={socialMediaMarketingIcon} />
                <MarketingService title='Marketing de email' icon={emailMarketingIcon} />
            </div>
        </React.Fragment>
    );
};

export default MarketingServicesSection