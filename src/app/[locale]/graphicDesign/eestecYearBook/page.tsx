'use client';

import Image from 'next/image';
import { assetPath } from "@/lib/site";
import { useTranslation } from 'react-i18next';

export default function eestecYearBook() {
    const { t } = useTranslation('graphicDesign');

    const posters = [
        {
            key: '/graphicDesign/eestecYearBook/eestecYearBook (2).png'
        },
        {
            key: '/graphicDesign/eestecYearBook/eestecYearBook (3).png'
        },
        {
            key: '/graphicDesign/eestecYearBook/eestecYearBook (4).png'
        },
        {
            key: '/graphicDesign/eestecYearBook/eestecYearBook (5).png'
        },
        {
            key: '/graphicDesign/eestecYearBook/eestecYearBook (6).png'
        },
        {
            key: '/graphicDesign/eestecYearBook/eestecYearBook (7).png'
        },
        {
            key: '/graphicDesign/eestecYearBook/eestecYearBook (8).png'
        },
        {
            key: '/graphicDesign/eestecYearBook/eestecYearBook (9).png'
        },
        {
            key: '/graphicDesign/eestecYearBook/eestecYearBook (10).png'
        },
        {
            key: '/graphicDesign/eestecYearBook/eestecYearBook (11).png'
        },
        {
            key: '/graphicDesign/eestecYearBook/eestecYearBook (12).png'
        },
        {
            key: '/graphicDesign/eestecYearBook/eestecYearBook (13).png'
        },
        {
            key: '/graphicDesign/eestecYearBook/eestecYearBook (14).png'
        },
        {
            key: '/graphicDesign/eestecYearBook/eestecYearBook (15).png'
        },
        {
            key: '/graphicDesign/eestecYearBook/eestecYearBook (16).png'
        },
        {
            key: '/graphicDesign/eestecYearBook/eestecYearBook (17).png'
        },
        {
            key: '/graphicDesign/eestecYearBook/eestecYearBook (18).png'
        },
        {
            key: '/graphicDesign/eestecYearBook/eestecYearBook (19).png'
        },
        {
            key: '/graphicDesign/eestecYearBook/eestecYearBook (20).png'
        },
        {
            key: '/graphicDesign/eestecYearBook/eestecYearBook (21).png'
        },
        {
            key: '/graphicDesign/eestecYearBook/eestecYearBook (22).png'
        },
        {
            key: '/graphicDesign/eestecYearBook/eestecYearBook (23).png'
        },
        {
            key: '/graphicDesign/eestecYearBook/eestecYearBook (24).png'
        }
    ];

    return (
        <div className='portfolio-pages-wrapper'>
            <div className='portfolio-pages-head'>
                <h1>{t('eestecYearBook.title')}</h1>
            </div>
            <div className='portfolio-pages-content'
                style={{ filter: 'drop-shadow(0 0 150px #405056)' }}
            >
                <Image
                    src={assetPath('/graphicDesign/eestecYearBook/eestecYearBook (1).png')}
                    alt="Photo holding IEEE letters"
                    width={1200}
                    height={800}
                    className='image-v'
                />
                {posters.map(({ key }) => (
                    <Image
                        key={key}
                        src={assetPath(key)}
                        alt="eestecYearBook"
                        width={400}
                        height={600}
                        className='image'
                    />
                ))}
                <Image
                    src={assetPath('/graphicDesign/eestecYearBook/eestecYearBook (25).png')}
                    alt="Photo holding IEEE letters"
                    width={1200}
                    height={800}
                    className='image-v'
                />
            </div>
        </div>
    );
}
