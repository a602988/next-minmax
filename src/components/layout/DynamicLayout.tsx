import React, { Suspense } from "react";
import DefaultLayout from "./DefaultLayout";
import BlogLayout from "./BlogLayout";
import ShopLayout from "./ShopLayout";
// Import other layouts as needed

interface LayoutProps {
  children: React.ReactNode;
  layoutData: {
    type: string;
  };
}

const layoutMap: { [key: string]: React.ComponentType<any> } = {
  default: DefaultLayout,
  blog: BlogLayout,
  shop: ShopLayout,
  // Add more layouts here
};

const DynamicLayout: React.FC<LayoutProps> = ({ children, layoutData }) => {
  const Layout = layoutMap[layoutData.type] || DefaultLayout;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout layoutData={layoutData}>{children}</Layout>
    </Suspense>
  );
};

export default DynamicLayout;
