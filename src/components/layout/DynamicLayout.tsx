import React, { Suspense } from "react";
import Layout from "./DefaultLayout";
import BlogLayout from "./BlogLayout";
import ShopLayout from "./ShopLayout";

interface LayoutProps {
  layoutData: string;
  params: { locale: string };
  children: React.ReactNode;
}

const layoutMap: { [key: string]: React.ComponentType<any> } = {
  default: Layout,
  blog: BlogLayout,
  shop: ShopLayout,
};

function DynamicLayout({ children, layoutData, params }: LayoutProps){
  const { locale } = params;
  const Layout = layoutMap[layoutData] ?? Layout;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout locale={locale}>
        {children}
      </Layout>
    </Suspense>
  );
}

export default DynamicLayout;
