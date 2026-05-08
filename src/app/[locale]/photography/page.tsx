'use client';

import Poster from '@/components/poster/poster';
import './photography.scss';
import { useTranslation } from 'react-i18next';

export default function Photography() {
  const { t } = useTranslation('photography');

  return (
    <div className="photography-page">
      <h3>{t('title')}</h3>
      <h4>{t('exhibitions')}</h4>
      <div className='horizontal-section'>
        <Poster
            title={t('existential.title')}
            description={t('existential.description')}
            imageUrl="/photography/existential/existential.jpg"
            link="photography/existential"
        />
        <Poster
            title={t('notGoodEnough.title')}
            description={t('notGoodEnough.description')}
            imageUrl="/photography/notGoodEnough/notGoodEnough.jpg"
            link="photography/notGoodEnough"
        />
      </div>
    </div>
  );
}
