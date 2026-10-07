'use client';

import Image from 'next/image';
import { assetPath } from "@/lib/site";

export default function NotGoodEnough() {
    // const { t } = useTranslation('photography');

    return (
        <div className='portfolio-pages-wrapper'>
            <div className='portfolio-pages-head'>
                <h1>ΔΕΝ ΕΙΜΑΙ ΑΡΚΕΤΟΣ</h1>
                <Image
                    src={assetPath('/photography/notGoodEnough/photoHeadNGE.jpg')}
                    alt="Not Good Enough photograph: man laying down naked on the bed during winter"
                    width={1200}
                    height={800}
                    className='image'
                    style={{ filter: 'drop-shadow(0 0 150px rgba(6, 30, 50, 1))' }}
                />
                <div className='portfolio-pages-head-subtitle'>
                    <h5>ΠΑΤΡΑ 2023</h5>
                    <p>Παρουσιάστηκε στο Σκαγιοπούλειο Ίδρυμα
                        στα πλαίσια του φωτογραφικού φεστιβάλ Ν+1 κλικ
                        Πάτρα, Δεκέμβριος 2024</p>
                </div>
            </div>
        </div>
    );
}
