'use client';

import { useLayout } from '@/components/layout/DynamicLayout';
import { useEffect } from 'react';

export default function Page() {
  const { setLayoutType } = useLayout();

  useEffect(() => {
    // 直接設置 layout 類型為 'blog'
    // 你可以根據需要更改這個值來測試不同的 layout
    setLayoutType('web-blog');
  }, [setLayoutType]);

  return (
    <div>
      <h1>Test Page</h1>
      <p>This page is using a dynamically set layout.</p>
      <p>The layout should be set to 'blog'. Check if the BlogLayout is being used.</p>
    </div>
  );
}