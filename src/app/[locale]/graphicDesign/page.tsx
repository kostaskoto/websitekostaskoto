'use client';

import Poster from '@/components/poster/poster';
import './graphicDesign.scss';
import { useTranslation } from 'react-i18next';

export default function GraphicDesign() {
  const { t } = useTranslation('graphicDesign');

  return (
    <div className="graphic-design-page">
      <h3>{t('title')}</h3>
      <h4>{t('brand-images')}</h4>
      <div className='horizontal-section'>
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
