'use client';

import Image from 'next/image';
import { assetPath } from "@/lib/site";
import { useTranslation } from 'react-i18next';

export default function designSprint2021() {
    const { t } = useTranslation('graphicDesign');

    const posters = [
        {
            key: '/graphicDesign/designSprint2021/eestecBadgeHOBOM.jpg'
        },
        {
            key: '/graphicDesign/designSprint2021/eestecBadgePAX.jpg'
        },
        {
            key: '/graphicDesign/designSprint2021/eestecBadgeBoard.jpg'
        },
        {
            key: '/graphicDesign/designSprint2021/designSprint2021.jpg'
        },
        {
            key: '/graphicDesign/designSprint2021/eestecBadgeOC.jpg'
        }
    ];

    const drawings = [
        {
            key: '/graphicDesign/designSprint2021/tShirtHobom.png'
        },
        {
            key: '/graphicDesign/designSprint2021/tShirtWibom.png'
        }
    ];

    const certificates = [
        {
            key: '/graphicDesign/designSprint2021/subomCertificate.png'
        },
        {
            key: '/graphicDesign/designSprint2021/wibomCertificate.png'
        }
    ];

    const events = [
        {
            key: '/graphicDesign/designSprint2021/eventPlanning (1).png'
        },
        {
            key: '/graphicDesign/designSprint2021/eventPlanning (2).png'
        }
    ];

    return (
        <div className='portfolio-pages-wrapper'>
            <div className='portfolio-pages-head'>
                <h1>{t('designSprint2021.title')}</h1>
                <div className='portfolio-pages-content'>
                    <iframe
                        src={'https://drive.google.com/file/d/1t_AfLLm9_9fFCnQzFbqH00c8di33CX9f/preview?autoplay=1&mute=1&loop=1'}
                        title={'title'}
                        allow="autoplay; fullscreen"
                        allowFullScreen
                        className='video-v-short'
                        loading="lazy"
                        style={{ filter: 'drop-shadow(0 0 150px #D51890)' }}
                    />
                </div>
                <div className='portfolio-pages-head-subtitle'>
                    <p>{t('designSprint2021.description')}</p>
                </div>
            </div>
            <div className='graphic-poster-wide-content'>
                <div className='horizontal-section'>
                    <Image
                        src={'/graphicDesign/designSprint2021/designSprintIntro.png'}
                        alt="EESTEC Badges Design"
                        width={400}
                        height={600}
                        className='graphic-app-image'
                    />
                    <iframe
                        src={'https://drive.google.com/file/d/1I96cloVkQHw5q26cNRP7ltER6ajRk01Y/preview'}
                        title={'title'}
                        allow="autoplay; fullscreen"
                        allowFullScreen
                        className='video-sq'
                        loading="lazy"
                    />
                    <iframe
                        src={'https://drive.google.com/file/d/12Fq6xb6kO6yB-aww4UXmvMfttHInRoFL/preview'}
                        title={'title'}
                        allow="autoplay; fullscreen"
                        allowFullScreen
                        className='video-sq'
                        loading="lazy"
                    />
                    <iframe
                        src={'https://drive.google.com/file/d/1imKp-UMSBHySgx1L43pJ33ulS-KcVpV9/preview'}
                        title={'title'}
                        allow="autoplay; fullscreen"
                        allowFullScreen
                        className='video-sq'
                        loading="lazy"
                    />
                </div>
            </div>

        </div>
    );
}
