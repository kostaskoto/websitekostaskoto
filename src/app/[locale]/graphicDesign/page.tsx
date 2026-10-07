'use client';

import Poster from '@/components/poster/poster';
import { useTranslation } from 'react-i18next';

export default function GraphicDesign() {
  const { t } = useTranslation('graphicDesign');

  return (
    <div className="portfolio-page">
      <h3>{t('title')}</h3>
      <h4>{t('brand-images')}</h4>
      <div className='horizontal-section'
        style={{ filter: `drop-shadow(0 0 150px rgba(137, 36, 25, 1))` }}
      >
        <Poster
          title={t('existential.title')}
          description={t('existential.description')}
          imageUrl="/photography/existential/existential.jpg"
          link="existential"
          square={true}
        />
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
      <h4>{t('publications')}</h4>
      <div className='horizontal-section'>
        <Poster
          title={t('existential.title')}
          description={t('existential.description')}
          imageUrl="/photography/existential/existential.jpg"
          link="existential"
        />
      </div>
      <h4>{t('social-media')}</h4>
      <div className='horizontal-section'>
        <Poster
          title={t('existential.title')}
          description={t('existential.description')}
          imageUrl="/photography/existential/existential.jpg"
          link="existential"
          square={true}
        />
      </div>
    </div>
  );
}
