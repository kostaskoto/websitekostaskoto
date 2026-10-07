'use client';
import React, { ReactNode } from 'react';
import '../photography.scss';

export default function ExistentialLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="portfolio-content">
      {children}
    </div>
  );
}
