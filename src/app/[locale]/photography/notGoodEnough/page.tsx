'use client';

import './notGoodEnough.scss';
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
                    <h5>Πάτρα, Δεκέμβριος 2024</h5>
                    <p>Παρουσιάστηκε στο Σκαγιοπούλειο Ίδρυμα Πατρών
                        στα πλαίσια του φωτογραφικού φεστιβάλ Ν+1 Κλικ του Α.Σ.Τ.Ο.-Επικοινωνούμε</p>
                </div>
            </div>
            <div className='portfolio-pages-content'>
                <div className='notGoodEnough-horizontal-text-image'>
                    <div className='notGoodEnough-text'>
                        <p>
                            Δεν είμαι αρκετός… Μια φράση που παίζει συνέχεια στο
                            κεφάλι μου.
                        </p>
                        <p>
                            Μεγάλωσα στη Καστοριά με μια οικογένεια που με πρόσεχε και
                            με αγαπούσε. Οι γονείς μου θέλανε να γίνω ο πρώτος, δεν
                            θέλανε να περάσω ό,τι είχαν περάσει αυτοί. Με βοήθησαν, με
                            προστάτευσαν. Με προστάτευσαν υπερβολικά πολύ…
                        </p>
                        <p>
                            Όταν έφυγα από το σπίτι μου, πήγα να σπουδάσω στη Πάτρα.
                            Η σχολή που ονειρεύομουν! Κάνω τη ζωή μου τώρα! Ή έτσι
                            νόμιζα… Κάθε βήμα που έκανα ήταν γεμάτο ανασφάλεια.
                            Έπρεπε να λάβω επιβεβαίωση από τους φίλους μου,
                            γνωστούς, τους γονείς μου. Δεν ήμουν αρκετός να πάρω μια
                            απόφαση, δεν ήμουν αρκετός να καθορίσω τη ζωή μου.
                        </p>
                        <p>
                            Έχασα τον έλεγχο σύντομα. Η λύση μου; Τελειομανία… μόνο και
                            μόνο για να γίνουν τα πράγματα χειρότερα. Μετά από κάθε
                            προσπάθεια, λύπη. Μετά από κάθε επιτυχία, θα μπορούσα να
                            είμαι καλύτερος. Θα μπορούσα να είμαι καλύτερος. Τίποτα δεν
                            ήταν αρκετά καλό… Δεν ήμουν αρκετά καλός… Ήμουν μοναχός
                            μου.
                        </p>
                        <p>
                            Έφτασα ένα σημείο όπου τίποτα πια δεν είχε νόημα. Ήμουν
                            απελπισμένος, ήμουν μόνος μου.
                        </p>
                    </div>
                    <Image
                        src={assetPath('/photography/notGoodEnough/notGoodEnough.jpg')}
                        alt="Existential Poster"
                        width={400}
                        height={600}
                        className='notGoodEnough-image'
                    // style={{ filter: 'drop-shadow(0 0 150px rgba(86, 62, 34, 1))' }}
                    />
                </div>
            </div>

        </div>
    );
}
