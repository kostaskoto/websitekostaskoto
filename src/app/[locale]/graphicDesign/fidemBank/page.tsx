'use client';

import Image from 'next/image';
import { assetPath } from "@/lib/site";
import { useTranslation } from 'react-i18next';
import './../graphicDesign.scss';

export default function fidemBank() {
    const { t } = useTranslation('graphicDesign');

    const posters1 = [
        {
            key: '/graphicDesign/fidemBank/fidemBankUI (2).png'
        },
        {
            key: '/graphicDesign/fidemBank/fidemBankUI (3).png'
        }
    ];

    const posters2 = [
        {
            key: '/graphicDesign/fidemBank/fidemBankUI (5).png'
        },
        {
            key: '/graphicDesign/fidemBank/fidemBankUI (4).png'
        }
    ];

    return (
        <div className='portfolio-pages-wrapper'>
            <div className='portfolio-pages-head'>
                <h1>{t('fidemBank.title')}</h1>
                <Image
                    src={assetPath('/graphicDesign/fidemBank/fidemBankUI (1).png')}
                    alt="fidemBank Brand"
                    width={1200}
                    height={800}
                    className='image'
                    style={{ filter: 'drop-shadow(0 0 150px #094183)' }}
                />
                <div className='portfolio-pages-head-subtitle'>
                    <h5>{t('fidemBank.subtitle-1')}</h5>
                    <p>{t('fidemBank.subtitle-2')}</p>
                </div>
            </div>
            <div className='graphic-poster-wide-content'>
                <h4 className='graphic-poster-title'>{t('fidemBank.drawing-title')}</h4>
                <div
                    className='graphic-drawings'
                >
                    {posters1.map(({ key }) => (
                        <Image
                            key={key}
                            src={assetPath(key)}
                            alt="fidemBank UI"
                            width={400}
                            height={600}
                            className='graphic-drawing-image'
                        />
                    ))}
                </div>
                <div
                    className='graphic-drawings'
                >
                    {posters2.map(({ key }) => (
                        <Image
                            key={key}
                            src={assetPath(key)}
                            alt="fidemBank UI"
                            width={400}
                            height={600}
                            className='graphic-drawing-image'
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
