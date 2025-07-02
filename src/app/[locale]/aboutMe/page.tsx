'use client';

import Image from 'next/image';
import './aboutMe.scss';
import { useTranslation } from 'react-i18next';

export default function AboutMe() {
    const { t } = useTranslation('aboutMe');

    return (
        <div className="about-me-page">
            <div className='about-me-container'>
                <div>
                    <Image
                    className="about-me-image"
                    src="/aboutMe/aboutMe.jpg"
                    alt="About Me"
                    width={1080}
                    height={1620}
                    loading="lazy"
                    />
                </div>
                <div className="about-me-content">
                    <h3>{t('jobs-title')}</h3>
                    <div className="about-me-subcontent">
                        <h4>{t('mobiweb')}</h4>
                        <p>{t('mobiweb-description')}</p>
                    </div>
                    <div className="about-me-subcontent">
                        <h4>{t('eski')}</h4>
                        <p>{t('eski-frontend')}</p>
                        <ul>
                            <li>{t('eski-landing')}</li>
                            <li>{t('eski-customer')}</li>
                            <li>{t('eski-suplier')}</li>
                        </ul>
                        <p>{t('eski-ui')}</p>
                        <ul>
                            <li>{t('eski-design-landing')}</li>
                            <li>{t('eski-design-customer')}</li>
                            <li>{t('eski-design-suplier')}</li>
                            <li>{t('eski-research')}</li>
                        </ul>
                        <p>{t('eski-graphic')}</p>
                        <ul>
                            <li>{t('eski-brand')}</li>
                            <li>{t('eski-cards')}</li>
                        </ul>
                    </div>
                    <h3>{t('volunteering-title')}</h3>
                </div>
            </div>
        </div>
    );
}
