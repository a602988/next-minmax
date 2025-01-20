import React, { Suspense } from 'react';
import { PageType } from "@/types/pageType";
import { getPageData } from "@/services/pageService";
import { NextPage } from 'next';
import dynamic from 'next/dynamic';

interface PageProps {
  searchParams: Promise<{ [key: string]: string | Array<string> | undefined }>;
}

interface PageComponentProps {
  pageData: PageType;
}

async function DynamicPage({ searchParams }: PageProps): Promise<React.ReactElement> {
    const resolvedSearchParams = await searchParams;
    const path = (resolvedSearchParams.path as string) || '/';
    const pageData = await getPageData(path);

    if (!pageData) {
        return <div>Error: Page not found</div>;
    }

    // Dynamically import the component based on the 'wrap' property
    const PageComponent = dynamic<PageComponentProps>(
        () => import(`@/app/[locale]/${pageData.wrap}/page`).then(mod => mod.default)
    );

    return (
        <Suspense fallback={<p>Loading...</p>}>
            <PageComponent pageData={pageData} />
        </Suspense>
    );
}

export default DynamicPage as NextPage<PageProps>;
