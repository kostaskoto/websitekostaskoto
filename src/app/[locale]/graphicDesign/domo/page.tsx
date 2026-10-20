'use client';

import Image from 'next/image';
import { assetPath } from "@/lib/site";
import { useTranslation } from 'react-i18next';

export default function domo() {
    const { t } = useTranslation('graphicDesign');

    const posters = [
        {
            key: '/graphicDesign/domo/domoUI (1).png'
        },
        {
            key: '/graphicDesign/domo/domoUI (2).png'
        },
        {
            key: '/graphicDesign/domo/domoUI (3).png'
        },
        {
            key: '/graphicDesign/domo/domoUI (4).png'
        }
    ];

    const drawings = [
        {
            key: '/graphicDesign/domo/domoBrand (2).png'
        },
        {
            key: '/graphicDesign/domo/domoBrand (3).png'
        }
    ];

    return (
        <div className='portfolio-pages-wrapper'>
            <div className='portfolio-pages-head'>
                <h1>{t('domo.title')}</h1>
                <Image
                    src={assetPath('/graphicDesign/domo/domoBrand (1).png')}
                    alt="Domo Brand"
                    width={1200}
                    height={800}
                    className='image'
                    style={{ filter: 'drop-shadow(0 0 150px #9AA049)' }}
                />
                <div className='portfolio-pages-head-subtitle'>
                    <h5>{t('domo.subtitle-1')}</h5>
                    <p>{t('domo.subtitle-2')}</p>
                </div>
            </div>
            <div className='graphic-poster-wide-content'>
                <h4 className='graphic-poster-title'>{t('domo.drawing-title')}</h4>
                <div
                    className='graphic-drawings'
                >
                    {drawings.map(({ key }) => (
                        <Image
                            key={key}
                            src={assetPath(key)}
                            alt="Domo Brand"
                            width={400}
                            height={600}
                            className='graphic-drawing-image'
                        />
                    ))}
                </div>
            </div>
            <div className='graphic-poster-wide-content'>
                <h4 className='graphic-poster-title'>{t('domo.poster-title')}</h4>
                <div className='horizontal-section'>
                    {posters.map(({ key }) => (
                        <Image
                            key={key}
                            src={assetPath(key)}
                            alt="Domo UI"
                            width={400}
                            height={600}
                            className='graphic-app-image'
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
