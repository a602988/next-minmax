import {ReactNode} from 'react';
import DefaultHeader from '@/components/header/DefaultHeader';
import styles from './DefaultLayout.module.css';


type Props = {
  children: ReactNode;
};

export default function DefaultLayout({
  children,
}: Props) {
  return (
    <div className={styles.defaultLayout}>
        <DefaultHeader />
        <p className="text-white">LayoutDefault</p>
        {children}
    </div>
  );
}
