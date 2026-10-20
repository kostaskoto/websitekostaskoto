'use client';

import Image from 'next/image';
import { assetPath } from "@/lib/site";
import { useTranslation } from 'react-i18next';

export default function astoCalendar2026() {
    const { t } = useTranslation('graphicDesign');

    const posters = [
        {
            key: '/graphicDesign/astoCalendar2026/astoCalendar (2).png'
        },
        {
            key: '/graphicDesign/astoCalendar2026/astoCalendar (3).png'
        },
        {
            key: '/graphicDesign/astoCalendar2026/astoCalendar (4).png'
        },
        {
            key: '/graphicDesign/astoCalendar2026/astoCalendar (5).png'
        },
        {
            key: '/graphicDesign/astoCalendar2026/astoCalendar (6).png'
        },
        {
            key: '/graphicDesign/astoCalendar2026/astoCalendar (7).png'
        },
        {
            key: '/graphicDesign/astoCalendar2026/astoCalendar (8).png'
        },
        {
            key: '/graphicDesign/astoCalendar2026/astoCalendar (9).png'
        },
        {
            key: '/graphicDesign/astoCalendar2026/astoCalendar (10).png'
        },
        {
            key: '/graphicDesign/astoCalendar2026/astoCalendar (11).png'
        },
        {
            key: '/graphicDesign/astoCalendar2026/astoCalendar (12).png'
        },
        {
            key: '/graphicDesign/astoCalendar2026/astoCalendar (13).png'
        },
        {
            key: '/graphicDesign/astoCalendar2026/astoCalendar (14).png'
        }
    ];

    return (
        <div className='portfolio-pages-wrapper'>
            <div className='portfolio-pages-head'>
                <h1>{t('astoCalendar2026.title')}</h1>
                <Image
                    src={assetPath('/graphicDesign/astoCalendar2026/astoCalendar (1).png')}
                    alt="astoCalendar2026 Brand"
                    width={1200}
                    height={800}
                    className='image'
                    style={{ filter: 'drop-shadow(0 0 150px #CF972A)' }}
                />
            </div>
            <div className='graphic-poster-wide-content'>
                <div className='horizontal-section'>
                    {posters.map(({ key }) => (
                        <Image
                            key={key}
                            src={assetPath(key)}
                            alt="astoCalendar2026 UI"
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
