import {ReactNode} from 'react';
import BlogLayout from '@/components/layout/BlogLayout';

type Props = {
  children: ReactNode;
};

export default async function blogLayout({
  children,
}: Props) {

  return (
    <BlogLayout>
      {children}
    </BlogLayout>
  );
}
