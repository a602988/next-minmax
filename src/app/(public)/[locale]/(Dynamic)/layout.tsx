import React from 'react';
import { DynamicLayout } from '@/components/layout/DynamicLayout';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <DynamicLayout>{children}</DynamicLayout>;
}