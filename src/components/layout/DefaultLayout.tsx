import React from "react";
import Header from "@/components/header";

interface DefaultLayoutProps {
  children: React.ReactNode;
  layoutData: any; // Type this according to your needs
}

function DefaultLayout({ children, layoutData }: DefaultLayoutProps): React.ReactElement {
  // 如果將來需要使用 layoutData，可以在這裡添加相關邏輯
  console.log('Layout data:', layoutData); // 暫時添加這行，以使用 layoutData

  return (
    <div className="default-layout">
      <Header />
      <main>{children}</main>
    </div>
  );
}

export default DefaultLayout;
