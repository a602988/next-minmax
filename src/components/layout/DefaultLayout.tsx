import {ReactNode} from 'react';
import HeaderBlog from '@/components/layout/BlogHeader';

type Props = {
  children: ReactNode;
};

export default  function DefaultLayout({
   children,
 }: Props) {

  return (
    <>
      <HeaderBlog />
      <p>LayoutDefault</p>
      {children}
    </>
  );
}
