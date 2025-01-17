import React from "react";
import Head from "next/head";

interface DynamicLayoutProps {
  layout: {
    type: string;
    seo: {
      title: string;
      description: string;
    };
    // 其他布局相關的屬性
  };
  children: React.ReactNode;
}

const DynamicLayout: React.FC<DynamicLayoutProps> = ({ layout, children }) => {
  return (
    <>
      <Head>
        <title>{layout.seo.title}</title>
        <meta name="description" content={layout.seo.description} />
        {/* 添加其他必要的SEO元標籤 */}
      </Head>
      <header>{/* 根據布局數據渲染頁頭 */}</header>
      <main>{children}</main>
      <footer>{/* 根據布局數據渲染頁腳 */}</footer>
    </>
  );
};

export default DynamicLayout;
