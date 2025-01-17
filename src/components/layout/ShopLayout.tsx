import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  layoutData: any; // Type this according to your needs
}

const ShopLayout: React.FC<LayoutProps> = ({ children, layoutData }) => {
  return (
    <div className="shop-layout">
      <main>{children}</main>
    </div>
  );
};

export default ShopLayout;
