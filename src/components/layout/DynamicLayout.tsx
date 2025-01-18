import React, { Suspense } from "react";
import DefaultLayout from "./DefaultLayout";
import BlogLayout from "./BlogLayout";
import ShopLayout from "./ShopLayout";

interface LayoutProps {
  layoutData: string;
  params: { locale: string };
  children: React.ReactNode;
}

const layoutMap: { [key: string]: React.ComponentType<any> } = {
  default: DefaultLayout,
  blog: BlogLayout,
  shop: ShopLayout,
};

function DynamicLayout({ children, layoutData, params }: LayoutProps){
  const { locale } = params;
  const Layout = layoutMap[layoutData] ?? DefaultLayout;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout locale={locale}>
        {children}
      </Layout>
    </Suspense>
  );
}

export default DynamicLayout;
