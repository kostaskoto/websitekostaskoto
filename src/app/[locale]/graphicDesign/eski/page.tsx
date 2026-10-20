'use client';

import Image from 'next/image';
import { assetPath } from "@/lib/site";
import { useTranslation } from 'react-i18next';

export default function eski() {
    const { t } = useTranslation('graphicDesign');

    const posters = [
        {
            key: '/graphicDesign/eski/eskiLanding.png'
        },
        {
            key: '/graphicDesign/eski/eskiLanding-1.png'
        },
        {
            key: '/graphicDesign/eski/eskiLanding-2.png'
        },
    ];

    const websitePosters = [
        {
            key: '/graphicDesign/eski/eskiWebsite (1).png'
        },
        {
            key: '/graphicDesign/eski/eskiWebsite (2).png'
        },
        {
            key: '/graphicDesign/eski/eskiWebsite (3).png'
        },
        {
            key: '/graphicDesign/eski/eskiWebsite (4).png'
        },
        {
            key: '/graphicDesign/eski/eskiWebsite (5).png'
        },
    ];

    const pmsPosters = [
        {
            key: '/graphicDesign/eski/eskiPMS (1).png'
        },
        {
            key: '/graphicDesign/eski/eskiPMS (2).png'
        },
        {
            key: '/graphicDesign/eski/eskiPMS (3).png'
        },
        {
            key: '/graphicDesign/eski/eskiPMS (4).png'
        },
        {
            key: '/graphicDesign/eski/eskiPMS (5).png'
        },
    ];

    return (
        <div className='portfolio-pages-wrapper'>
            <div className='portfolio-pages-head'>
                <h1>{t('eski.title')}</h1>
            </div>
            <div className='graphic-poster-wide-content'>
                <h4 className='graphic-poster-title'>{t('eski.landing')}</h4>
                <div className='horizontal-section'>
                    {posters.map(({ key }) => (
                        <Image
                            key={key}
                            src={assetPath(key)}
                            alt="ESKI Brand Image"
                            width={400}
                            height={600}
                            className='graphic-website-image'
                        />
                    ))}
                </div>
            </div>
            <div className='graphic-poster-wide-content'>
                <h4 className='graphic-poster-title'>{t('eski.website')}</h4>
                <div className='horizontal-section'>
                    {websitePosters.map(({ key }) => (
                        <Image
                            key={key}
                            src={assetPath(key)}
                            alt="ESKI Brand Image"
                            width={400}
                            height={600}
                            className='graphic-website-image'
                        />
                    ))}
                </div>
            </div>
            <div className='graphic-poster-wide-content'>
                <h4 className='graphic-poster-title'>{t('eski.pms')}</h4>
                <div className='horizontal-section'>
                    {pmsPosters.map(({ key }) => (
                        <Image
                            key={key}
                            src={assetPath(key)}
                            alt="ESKI Brand Image"
                            width={400}
                            height={600}
                            className='graphic-website-image'
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
