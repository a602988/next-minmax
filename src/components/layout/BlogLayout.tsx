import React from "react";

interface BlogLayoutProps {
  children: React.ReactNode;
  layoutData: any; // Type this according to your needs
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ children, layoutData }) => {
  return (
    <div className="blog-layout">
      <main>{children}</main>
    </div>
  );
};

export default BlogLayout;
