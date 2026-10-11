'use client';

import Image from 'next/image';
import { assetPath } from "@/lib/site";
import { useTranslation } from 'react-i18next';
import './../graphicDesign.scss';

export default function eskiBrandImage() {
    const { t } = useTranslation('graphicDesign');

    const posters = [
        {
            key: '/graphicDesign/eskiBrandImage/eskiBrandImage (1).png'
        },
        {
            key: '/graphicDesign/eskiBrandImage/eskiBrandImage (2).png'
        },
        {
            key: '/graphicDesign/eskiBrandImage/eskiBrandImage (3).png'
        },
        {
            key: '/graphicDesign/eskiBrandImage/eskiBrandImage (4).png'
        },
        {
            key: '/graphicDesign/eskiBrandImage/eskiBrandImage (5).png'
        },
        {
            key: '/graphicDesign/eskiBrandImage/eskiBrandImage (6).png'
        },
        {
            key: '/graphicDesign/eskiBrandImage/eskiBrandImage (7).png'
        }
    ];

    return (
        <div className='portfolio-pages-wrapper'>
            <div className='portfolio-pages-head'>
                <h1>{t('eskiBrandImage.title')}</h1>
                <Image
                    src={assetPath('/graphicDesign/eskiBrandImage/eski-head.png')}
                    alt="What is ESKI"
                    width={1200}
                    height={800}
                    className='image'
                    style={{ filter: 'drop-shadow(0 0 150px #6698CB)' }}
                />
                <div className='portfolio-pages-head-subtitle'>
                    <h5>{t('eskiBrandImage.subtitle-1')}</h5>
                    <p>{t('eskiBrandImage.subtitle-2')}</p>
                </div>
            </div>
            <div className='portfolio-pages-content'>
                <p className='portfolio-pages-highlight'>{t('eskiBrandImage.highlight')}</p>
            </div>
            <div className='graphic-poster-wide-content'>
                <h4 className='graphic-poster-title'>{t('eskiBrandImage.poster-title')}</h4>
                <div className='horizontal-section'>
                    {posters.map(({ key }) => (
                        <Image
                            key={key}
                            src={assetPath(key)}
                            alt="ESKI Brand Image"
                            width={400}
                            height={600}
                            className='graphic-poster-image'
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
