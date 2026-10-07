'use client';

import { useEffect } from 'react';
import { DEFAULT_LOCALE, localePath } from '@/lib/routes';

export default function RootPage() {

    useEffect(() => {
        window.location.replace(
            localePath(DEFAULT_LOCALE)
        );
    }, []);

    return null;
}
