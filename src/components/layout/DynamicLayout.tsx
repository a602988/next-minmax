import React, { Suspense } from "react";
import DefaultLayout from "./DefaultLayout";
import BlogLayout from "./BlogLayout";

interface LayoutProps {
  layoutData: string;
  params: { locale: string };
  children: React.ReactNode;
}

const layoutMap: { [key: string]: React.ComponentType<LayoutProps> } = {
  default: DefaultLayout,
  blog: BlogLayout,
};

function DynamicLayout({ children, layoutData, params }: LayoutProps) {
  const SelectedLayout = layoutMap[layoutData] || DefaultLayout;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SelectedLayout layoutData={layoutData} params={params}>
        {children}
      </SelectedLayout>
    </Suspense>
  );
}

export default DynamicLayout;
