'use client';

import Poster from '@/components/poster/poster';
import { useTranslation } from 'react-i18next';

export default function Photography() {
  const { t } = useTranslation('photography');

  const posters = [
    {
      key: 'existential',
      imageUrl: '/photography/existential/existential.jpg',
      dsColor: 'rgba(137, 36, 25, 1)',
      link: 'photography/existential',
    },
    {
      key: 'notGoodEnough',
      imageUrl: '/photography/notGoodEnough/notGoodEnough.jpg',
      dsColor: 'rgba(240, 89, 37, 1)',
      link: 'photography/notGoodEnough',
    },
  ];

  return (
    <div className="portfolio-page">
      <h3>{t('title')}</h3>
      <h4>{t('exhibitions')}</h4>
      <div className='horizontal-section'>
        {posters.map(({ key, imageUrl, dsColor, link }) => (
          <Poster
            key={key}
            title={t(`${key}.title`)}
            description={t(`${key}.description`)}
            imageUrl={imageUrl}
            dsColor={dsColor}
            link={link}
          />
        ))}
      </div>
    </div>
  );
}
