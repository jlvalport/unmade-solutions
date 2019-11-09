import React from 'react';

import SectionTitle from '../../UI/SectionTitle/SectionTitle';
import Value from './Value/Value';
import leadershipIcon from '../../../assets/img/graphics/icons/leadership.svg';
import colaborationIcon from '../../../assets/img/graphics/icons/support.svg';
import integrityIcon from '../../../assets/img/graphics/icons/man-celebrating.svg';
import accountabilityIcon from '../../../assets/img/graphics/icons/tick.svg';
import passionIcon from '../../../assets/img/graphics/icons/heart-outline.svg';
import diversityIcon from '../../../assets/img/graphics/icons/group-of-men.svg';
import qualityIcon from '../../../assets/img/graphics/icons/quality.svg';

const OurValuesSection = () => {
    return (
        <React.Fragment>
            <SectionTitle tag='h2' bgColor='orange'>Nuestros Valores</SectionTitle>
            <Value title='Liderazgo' infoText='El coraje de moldear un futuro mejor.' icon={leadershipIcon} />
            <Value title='Colaboración' infoText='Aprovechar el genio colectivo.' icon={colaborationIcon} />
            <Value title='Integridad' infoText='Se real.' icon={integrityIcon} />
            <Value title='Responsabilidad' infoText='Si va a ser, depende de mí.' icon={accountabilityIcon} />
            <Value title='Pasión' infoText='Comprometidos en corazón y mente.' icon={passionIcon} />
            <Value title='Diversidad' infoText='Incluyendo siempre a todos.' icon={diversityIcon} />
            <Value title='Calidad' infoText='Lo que hacemos, lo hacemos bien.' icon={qualityIcon} />
        </React.Fragment>
    );
};

export default OurValuesSection