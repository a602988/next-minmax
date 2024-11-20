import {ReactNode} from 'react';
import HeaderBlog from '@/components/header/BlogHeader';

type Props = {
  children: ReactNode;
};

export default  function BlogLayout({
   children,
 }: Props) {

  return (
    <div className="blog-layout">
      <HeaderBlog />

      <p>LayoutDefault</p>
      {children}
    </div>
  );
}
