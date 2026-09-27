'use client';

// import { useTranslation } from 'react-i18next';
import './existential.scss';
import Image from 'next/image';

export default function Existential() {
    // const { t } = useTranslation('photography');

    return (
      <div className="portfolio-page">
        <div className='wrapper'>
          {/* <div className='gradient' /> */}
          <div className='content'>
            <div className='imageWrapper'>
              <div className='gradient' />
              <Image
                src="/photography/existential/existential.jpg"
                alt="Existential Poster"
                width={400}
                height={600}
                className='image'
              />
            </div>
            <div className='text'>
              <h2>ΠΛΗΡΟΦΟΡΙΕΣkfgjldkfj glkfjdglkdfgjlkgjfdlk</h2>
              <p>Athens - O.art.ath - June 2025</p>
              <p>Existential</p>
            </div>
          </div>
        </div>
        <div className='text'>
              <h2>ΠΛΗΡΟΦΟΡΙΕΣkfgjldkfj glkfjdglkdfgjlkgjfdlk</h2>
              <p>Athens - O.art.ath - June 2025</p>
              <p>Existential</p>
            </div>
      </div>
    );
}
