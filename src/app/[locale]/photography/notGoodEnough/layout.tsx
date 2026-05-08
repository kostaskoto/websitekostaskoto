'use client';
import React, { ReactNode } from 'react';
import '../photography.scss';

export default function NotGoodEnoughLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="photography-layout">
      {children}
    </div>
  );
}
