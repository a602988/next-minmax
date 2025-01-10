import React from 'react';
import DefaultLayout from '@/components/layout/DefaultLayout';
import BlogLayout from '@/components/layout/BlogLayout';

// 導入其他可能的布局組件

interface DynamicLayoutProps {
  layoutType: string;
  children: React.ReactNode;
}

const DynamicLayout: React.FC<DynamicLayoutProps> = ({ layoutType, children }) => {
  switch (layoutType) {
    case 'web-blog':
      return <BlogLayout>{children}</BlogLayout>;
    default:
      return <DefaultLayout>{children}</DefaultLayout>;
  }
};

export default DynamicLayout;