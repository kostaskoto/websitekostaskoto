'use client';

import Image from 'next/image';
import { assetPath } from "@/lib/site";
import { useTranslation } from 'react-i18next';

export default function Np1Click() {
    const { t } = useTranslation('graphicDesign');

    return (
        <div className='portfolio-pages-wrapper'>
            <div className='portfolio-pages-head'>
                <h1>{t('n+1Click.title')}</h1>
                <Image
                    src={assetPath('/photography/notGoodEnough/photoHeadNGE.jpg')}
                    alt="Not Good Enough photograph: man laying down naked on the bed during winter"
                    width={1200}
                    height={800}
                    className='image'
                    style={{ filter: 'drop-shadow(0 0 150px rgba(6, 30, 50, 1))' }}
                />
                <div className='portfolio-pages-head-subtitle'>
                    <h5>{t('n+1Click.subtitle-1')}</h5>
                    <p>{t('n+1Click.subtitle-2')}</p>
                </div>
            </div>
            <div className='portfolio-pages-content'>
                <p className='portfolio-pages-highlight'>{t('n+1Click.highlight')}</p>
                <div className='portfolio-pages-horizontal-text-image'>
                    <div className='portfolio-pages-text'>
                        <h4>{t('n+1Click.title')}</h4>
                        <p>
                            {t('n+1Click.n+1Click-1')}
                        </p>
                    </div>
                    <div className='portfolio-pages-image-container'>
                        <Image
                            src={assetPath('/photography/notGoodEnough/notGoodEnough.jpg')}
                            alt="Not Good Enough Poster"
                            width={400}
                            height={600}
                            className='portfolio-pages-image'
                            style={{ filter: 'drop-shadow(0 0 150px rgba(86, 62, 34, 1))' }}
                        />
                    </div>
                </div>
            </div>
            <div className='portfolio-pages-single-photo'>
                <h4>{t('n+1Click.presentation')}</h4>
                <Image
                    src={assetPath('/photography/notGoodEnough/notGoodEnoughExhibition.jpg')}
                    alt="I Am Not Good Enough exhibition"
                    width={1200}
                    height={800}
                    className='image'
                    style={{ filter: 'drop-shadow(0 0 150px #714D2B)' }}
                />
            </div>
        </div>
    );
}
