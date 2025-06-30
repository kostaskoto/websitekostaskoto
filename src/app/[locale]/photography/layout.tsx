'use client';
import React, { ReactNode } from 'react';

export default function PhotographyLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="photography-layout">
      {children}
    </div>
  );
}
