'use client';

import Poster from '@/components/poster/poster';
import { useTranslation } from 'react-i18next';

export default function Photography() {
  const { t } = useTranslation('photography');

  const posters = [
    {
      key: 'existential',
      imageUrl: '/photography/existential/existential.jpg',
      link: 'photography/existential',
    },
    {
      key: 'notGoodEnough',
      imageUrl: '/photography/notGoodEnough/notGoodEnough.jpg',
      link: 'photography/notGoodEnough',
    },
  ];

  return (
    <div className="portfolio-page">
      <h3>{t('title')}</h3>
      <h4>{t('exhibitions')}</h4>
      <div className='horizontal-section'>
        {posters.map(({ key, imageUrl, link }) => (
          <Poster
            key={key}
            title={t(`${key}.title`)}
            description={t(`${key}.description`)}
            imageUrl={imageUrl}
            link={link}
          />
        ))}
        {posters.map(({ key, imageUrl, link }) => (
          <Poster
            key={key}
            title={t(`${key}.title`)}
            description={t(`${key}.description`)}
            imageUrl={imageUrl}
            link={link}
          />
        ))}
        {posters.map(({ key, imageUrl, link }) => (
          <Poster
            key={key}
            title={t(`${key}.title`)}
            description={t(`${key}.description`)}
            imageUrl={imageUrl}
            link={link}
          />
        ))}
        {posters.map(({ key, imageUrl, link }) => (
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
