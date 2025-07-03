'use client';

import './graphicDesign.scss';
import { useTranslation } from 'react-i18next';

export default function GraphicDesign() {
  const { t } = useTranslation('graphicDesign');

  return (
    <div className="graphic-design-page">
      <h3>{t('title')}</h3>
    </div>
  );
}
