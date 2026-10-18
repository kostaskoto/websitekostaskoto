'use client';

import Image from 'next/image';
import { assetPath } from "@/lib/site";
import { useTranslation } from 'react-i18next';
import './../graphicDesign.scss';

export default function eestecOther() {
    const { t } = useTranslation('graphicDesign');

    const posters = [
        {
            key: '/graphicDesign/eestecOther/eestecBadgeHOBOM.jpg'
        },
        {
            key: '/graphicDesign/eestecOther/eestecBadgePAX.jpg'
        },
        {
            key: '/graphicDesign/eestecOther/eestecBadgeBoard.jpg'
        },
        {
            key: '/graphicDesign/eestecOther/eestecOther.jpg'
        },
        {
            key: '/graphicDesign/eestecOther/eestecBadgeOC.jpg'
        }
    ];

    const drawings = [
        {
            key: '/graphicDesign/eestecOther/tShirtHobom.png'
        },
        {
            key: '/graphicDesign/eestecOther/tShirtWibom.png'
        }
    ];

    const certificates = [
        {
            key: '/graphicDesign/eestecOther/subomCertificate.png'
        },
        {
            key: '/graphicDesign/eestecOther/wibomCertificate.png'
        }
    ];

    const events = [
        {
            key: '/graphicDesign/eestecOther/eventPlanning (1).png'
        },
        {
            key: '/graphicDesign/eestecOther/eventPlanning (2).png'
        }
    ];

    return (
        <div className='portfolio-pages-wrapper'>
            <div className='portfolio-pages-head'>
                <h1>{t('eestecOther.title')}</h1>
                <iframe
                    src={'https://drive.google.com/file/d/1kxDBzS3cHVBO_27Q2P3za3d-rz3F2whU/preview?autoplay=1&mute=1'}
                    title={'title'}
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    className='video'
                    loading="lazy"
                    style={{ filter: 'drop-shadow(0 0 150px #e52a40)' }}
                />
                <div className='portfolio-pages-head-subtitle'>
                    <p>{t('eestecOther.subtitle-2')}</p>
                </div>
            </div>
            <div className='graphic-poster-wide-content'>
                <h4 className='graphic-poster-title'>{t('eestecOther.badges')}</h4>
                <div className='horizontal-section'>
                    {posters.map(({ key }) => (
                        <Image
                            key={key}
                            src={assetPath(key)}
                            alt="EESTEC Badges Design"
                            width={400}
                            height={600}
                            className='graphic-app-image'
                        />
                    ))}
                </div>
            </div>
            <div className='graphic-poster-wide-content'>
                <h4 className='graphic-poster-title'>{t('eestecOther.tShirt')}</h4>
                <div
                    className='graphic-drawings'
                    style={{ filter: 'drop-shadow(0 0 150px #352B4D)' }}
                >
                    {drawings.map(({ key }) => (
                        <Image
                            key={key}
                            src={assetPath(key)}
                            alt="EESTEC T-Shirt Designs"
                            width={400}
                            height={600}
                            className='graphic-drawing-image'
                            style={{
                                background: 'white'
                            }}
                        />
                    ))}
                </div>
            </div>
            <div className='graphic-poster-wide-content z-4000'>
                <h4 className='graphic-poster-title'>{t('eestecOther.certificate')}</h4>
                <div
                    className='graphic-drawings'
                >
                    {certificates.map(({ key }) => (
                        <Image
                            key={key}
                            src={assetPath(key)}
                            alt="EESTEC Certificate Designs"
                            width={400}
                            height={600}
                            className='graphic-drawing-image'
                            style={{
                                background: 'white'
                            }}
                        />
                    ))}
                </div>
            </div>
            <div className='graphic-poster-wide-content'>
                <h4 className='graphic-poster-title'>{t('eestecOther.events')}</h4>
                <div
                    className='graphic-drawings'
                    style={{
                        filter: 'drop-shadow(0 0 150px #0E0436)'
                    }}
                >
                    {events.map(({ key }) => (
                        <Image
                            key={key}
                            src={assetPath(key)}
                            alt="EESTEC Event Planning Designs"
                            width={400}
                            height={600}
                            className='graphic-drawing-image'
                            style={{
                                background: 'white'
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
