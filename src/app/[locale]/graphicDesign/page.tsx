'use client';

import Poster from '@/components/poster/poster';
import { useTranslation } from 'react-i18next';

export default function GraphicDesign() {
  const { t } = useTranslation('graphicDesign');

  const brandImagePosters = [
    {
      key: 'n+1Click',
      imageUrl: '/graphicDesign/n+1Click/n+1Click.png',
      link: 'graphicDesign/n+1Click',
    },
    {
      key: 'eskiBrandImage',
      imageUrl: '/graphicDesign/eskiBrandImage/eski.png',
      link: 'graphicDesign/eskiBrandImage',
    },
    {
      key: 'lifeChain',
      imageUrl: '/graphicDesign/lifeChain/lifeChain.png',
      link: 'graphicDesign/lifeChain',
    }
  ];

  const publicationsPosters = [
    {
      key: 'astoCalendar2026',
      imageUrl: '/graphicDesign/astoCalendar2026/astoCalendar2026.png',
      link: 'graphicDesign/astoCalendar2026',
    },
    {
      key: 'eestecYearBook',
      imageUrl: '/graphicDesign/eestecYearBook/eestecYearBook.png',
      link: 'graphicDesign/eestecYearBook',
    }
  ];

  return (
    <div className="portfolio-page">
      <h3>{t('title')}</h3>
      <h4>{t('brand-images')}</h4>
      <div className='horizontal-section'
        style={{ filter: `drop-shadow(0 0 150px #192E4F)` }}
      >
        {brandImagePosters.map(({ key, imageUrl, link }) => (
          <Poster
            key={key}
            title={t(`${key}.title`)}
            description={t(`${key}.description`)}
            imageUrl={imageUrl}
            link={link}
          />
        ))}
      </div>
      <h4>{t('ui-ux')}</h4>
      <div className='horizontal-section'>
        <Poster
          title={t('existential.title')}
          description={t('existential.description')}
          imageUrl="/photography/existential/existential.jpg"
          link="existential"
          square={true}
        />
      </div>
      <h4>{t('otherDesigns')}</h4>
      <div className='horizontal-section'
        style={{ filter: `drop-shadow(0 0 150px #C57F09)` }}
      >
        {publicationsPosters.map(({ key, imageUrl, link }) => (
          <Poster
            key={key}
            title={t(`${key}.title`)}
            description={t(`${key}.description`)}
            imageUrl={imageUrl}
            link={link}
          />
        ))}
      </div>
    </div>
  );
}
