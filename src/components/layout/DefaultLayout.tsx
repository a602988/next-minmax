import React from "react";

interface DefaultLayoutProps {
  children: React.ReactNode;
  layoutData: any; // Type this according to your needs
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  children,
  layoutData,
}) => {
  return (
    <div className="default-layout">
      <main>{children}</main>
    </div>
  );
};

export default DefaultLayout;
