'use client';

import Image from 'next/image';
import { assetPath } from "@/lib/site";
import { useTranslation } from 'react-i18next';

export default function ieee() {
    const { t } = useTranslation('graphicDesign');

    const drawings = [
        {
            key: '/graphicDesign/ieee/ieee.png'
        },
        {
            key: '/graphicDesign/ieee/ieeeHoodie.png'
        }
    ];

    return (
        <div className='portfolio-pages-wrapper'>
            <div className='portfolio-pages-head'>
                <h1>{t('ieee.title')}</h1>
                <Image
                    src={assetPath('/graphicDesign/ieee/ieeeHead.jpg')}
                    alt="Photo holding IEEE letters"
                    width={1200}
                    height={800}
                    className='image'
                    style={{ filter: 'drop-shadow(0 0 150px #0072DC)' }}
                />
                <div className='portfolio-pages-head-subtitle'>
                    <p>{t('ieee.subtitle-2')}</p>
                </div>
            </div>
            <div className='graphic-poster-wide-content'>
                <h4 className='graphic-poster-title'>{t('ieee.drawing-title')}</h4>
                <div
                    className='graphic-drawings'
                >
                    {drawings.map(({ key }) => (
                        <Image
                            key={key}
                            src={assetPath(key)}
                            alt="IEEE SB UPatras Designs"
                            width={400}
                            height={600}
                            className='graphic-drawing-image-v'
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
