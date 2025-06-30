import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/providers/TranslationProvider';
import { ReactNode } from 'react';

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params: paramsPromise }: Readonly<LocaleLayoutProps>) {
  const param = await paramsPromise;
  const paramLocale = param.locale;

  const { resources } = await initTranslations(paramLocale);

  return (
    <TranslationsProvider locale={paramLocale} resources={resources}>
      <div className="layout">
          {children}
      </div>
    </TranslationsProvider>
  );
}
