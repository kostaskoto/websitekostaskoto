'use client';

import Image from 'next/image';
import { assetPath } from "@/lib/site";
import { useTranslation } from 'react-i18next';
import './../graphicDesign.scss';

export default function Np1Click() {
    const { t } = useTranslation('graphicDesign');

    const posters = [
        {
            key: '/graphicDesign/n+1Click/n+1Click.png'
        },
        {
            key: '/graphicDesign/n+1Click/poster (1).png'
        },
        {
            key: '/graphicDesign/n+1Click/poster (2).png'
        },
        {
            key: '/graphicDesign/n+1Click/poster (3).png'
        },
        {
            key: '/graphicDesign/n+1Click/poster (4).png'
        },
        {
            key: '/graphicDesign/n+1Click/poster (5).png'
        },
        {
            key: '/graphicDesign/n+1Click/poster (6).png'
        },
        {
            key: '/graphicDesign/n+1Click/poster (7).png'
        },
        {
            key: '/graphicDesign/n+1Click/poster (8).png'
        },
        {
            key: '/graphicDesign/n+1Click/poster (9).png'
        },
        {
            key: '/graphicDesign/n+1Click/poster (10).png'
        },
        {
            key: '/graphicDesign/n+1Click/poster (11).png'
        },
        {
            key: '/graphicDesign/n+1Click/poster (12).png'
        },
        {
            key: '/graphicDesign/n+1Click/poster (13).png'
        },
        {
            key: '/graphicDesign/n+1Click/poster (14).png'
        },
        {
            key: '/graphicDesign/n+1Click/poster (15).png'
        },
        {
            key: '/graphicDesign/n+1Click/poster (16).png'
        }
    ];

    const drawings = [
        {
            key: '/graphicDesign/n+1Click/drawing1.png'
        },
        {
            key: '/graphicDesign/n+1Click/drawing2.png'
        }
    ];

    const photos = [
        {
            key: '/graphicDesign/n+1Click/n+1Exhibition-1.jpg'
        },
        {
            key: '/graphicDesign/n+1Click/n+1Exhibition-2.jpg'
        },
        {
            key: '/graphicDesign/n+1Click/n+1Exhibition-3.jpg'
        },
        {
            key: '/graphicDesign/n+1Click/n+1Exhibition-4.jpg'
        },
        {
            key: '/graphicDesign/n+1Click/n+1Exhibition-5.jpg'
        },
        {
            key: '/graphicDesign/n+1Click/n+1Exhibition-6.jpg'
        },
        {
            key: '/graphicDesign/n+1Click/n+1Exhibition-7.jpg'
        },
        {
            key: '/graphicDesign/n+1Click/n+1Exhibition-8.jpg'
        },
        {
            key: '/graphicDesign/n+1Click/n+1Exhibition-9.jpg'
        },
        {
            key: '/graphicDesign/n+1Click/n+1Exhibition-10.jpg'
        },
        {
            key: '/graphicDesign/n+1Click/n+1Exhibition-11.jpg'
        },
        {
            key: '/graphicDesign/n+1Click/n+1Exhibition-12.jpg'
        }
    ];

    return (
        <div className='portfolio-pages-wrapper'>
            <div className='portfolio-pages-head'>
                <h1>{t('n+1Click.title')}</h1>
                <Image
                    src={assetPath('/graphicDesign/n+1Click/n+1ClickBanner.png')}
                    alt="Facebook Banner from the festival N+1 Click"
                    width={1200}
                    height={800}
                    className='image'
                    style={{ filter: 'drop-shadow(0 0 150px #F0EA18)' }}
                />
                <div className='portfolio-pages-head-subtitle'>
                    <h5>{t('n+1Click.subtitle-1')}</h5>
                    <p>{t('n+1Click.subtitle-2')}</p>
                </div>
            </div>
            <div className='graphic-poster-wide-content'>
                <h4 className='graphic-poster-title'>{t('n+1Click.poster-title')}</h4>
                <div className='horizontal-section'>
                    {posters.map(({ key }) => (
                        <Image
                            key={key}
                            src={assetPath(key)}
                            alt="N+1 Click Poster"
                            width={400}
                            height={600}
                            className='graphic-poster-image'
                        />
                    ))}
                </div>
            </div>
            <div className='portfolio-pages-content'>
                <p className='portfolio-pages-highlight'>{t('n+1Click.highlight')}</p>
            </div>
            <div className='graphic-poster-wide-content'>
                <h4 className='graphic-poster-title'>{t('n+1Click.drawing-title')}</h4>
                <div className='graphic-drawings'>
                    {drawings.map(({ key }) => (
                        <Image
                            key={key}
                            src={assetPath(key)}
                            alt="N+1 Click Drawing"
                            width={400}
                            height={600}
                            className='graphic-drawing-image'
                        />
                    ))}
                </div>
            </div>
            <div className='graphic-poster-wide-content'>
                <h4 className='graphic-poster-title'>{t('n+1Click.photo-title')}</h4>
                <div className='horizontal-section'>
                    {photos.map(({ key }) => (
                        <Image
                            key={key}
                            src={assetPath(key)}
                            alt="N+1 Click Photo"
                            width={400}
                            height={600}
                            className='graphic-photo-image'
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
