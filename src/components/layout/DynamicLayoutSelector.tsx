'use client';

import React, { ReactNode } from 'react';
import DefaultLayout from '@/components/layout/DefaultLayout';
import BlogLayout from '@/components/layout/BlogLayout';
import { useLayout } from './DynamicLayout';

export default function DynamicLayoutSelector({ children }: { children: ReactNode }) {
  const { layoutType } = useLayout();

  switch (layoutType) {
    case 'web-blog':
      return <BlogLayout>{children}</BlogLayout>;
    default:
      return <DefaultLayout>{children}</DefaultLayout>;
  }
}