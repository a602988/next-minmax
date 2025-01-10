import {ReactNode} from 'react';
import DefaultLayout from '@/components/layout/DefaultLayout';

type Props = {
  children: ReactNode;
};

export default async function defaultLayout({
  children,
}: Props) {

  return (
    <DefaultLayout>
      {children}
    </DefaultLayout>
  );
}
