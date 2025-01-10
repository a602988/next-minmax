import { Suspense } from 'react';
import DynamicLayout from './DynamicLayout';



export default async function YourPage() {
  const layoutType = 'blog-layout';

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DynamicLayout layoutType={layoutType}>
        <p>DynamicLayout test</p>
      </DynamicLayout>
    </Suspense>
  );
}