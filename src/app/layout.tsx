import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globalStyle.scss';
import { ReactNode } from 'react';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin', 'greek']
});

export const metadata: Metadata = {
  title: 'eSki PMS',
  description: 'This is a property management system from eSki.'
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
    <body suppressHydrationWarning className={`${manrope.variable}`}>
          {children}
    </body>
    </html>
  );
}
