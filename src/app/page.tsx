'use client';

import { useEffect } from 'react';
import { localePath } from '@/lib/routes';
import { useTranslation } from 'react-i18next';

export default function RootPage() {
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;

    useEffect(() => {
        window.location.replace(
            localePath(currentLocale)
        );
    }, []);

    return null;
}
