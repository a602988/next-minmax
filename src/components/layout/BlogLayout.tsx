import {ReactNode} from 'react';
import DefaultHeader from '@/app/(public)/[locale]/(layoutComponents)/(header)/Header';
import BlogNav from '@/app/(public)/[locale]/(layoutComponents)/(header)/BlogNav';

import styles from './DefaultLayout.module.css';

type Props = {
  children: ReactNode;
};

export default  function BlogLayout({
   children,
 }: Props) {

  return (
    <div className={styles.defaultLayout}>
      <DefaultHeader />
      <BlogNav />
      
      <p className="text-white">BlogLayout</p>
      {children}
    </div>
  );
}
