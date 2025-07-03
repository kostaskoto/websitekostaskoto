'use client';

import './photography.scss';
import { useTranslation } from 'react-i18next';

export default function Photography() {
  const { t } = useTranslation('photography');

  return (
    <div className="photography-page">
      <h3>{t('title')}</h3>
      <h4>{t('exhibitions')}</h4>
    </div>
  );
}
