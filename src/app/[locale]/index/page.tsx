import React from 'react';
import { PageType } from '@/types/pageType';
import DefaultLayout from "@/components/layout/DefaultLayout";

interface PageProps {
    pageData: PageType
}

async function IndexPage({ pageData }: PageProps): Promise<React.ReactElement> {
    if (!pageData) {
        return <DefaultLayout><div>Loading...</div></DefaultLayout>;
    }
    console.log('Page data:', pageData); // ���時添加這行，以使用 pageData

    return (
        <DefaultLayout>
            <h1>{pageData.meta_title}</h1>
            <p>{pageData.meta_description}</p>
            {/* Add more page content */}
        </DefaultLayout>
    );
}

export default IndexPage;
