'use client';
import React, { ReactNode } from 'react';

export default function GraphicDesignLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="graphic-design-layout">
      {children}
    </div>
  );
}
