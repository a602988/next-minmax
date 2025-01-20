import React from 'react';
import { PageType } from '@/types/pageType';
import DefaultLayout from "@/components/layout/DefaultLayout";

function IndexPage({ pageData }: { pageData: PageType }): React.ReactElement {
    return (
        <DefaultLayout>
            <h1>{pageData.meta_title}</h1>
            <p>{pageData.meta_description}</p>
        </DefaultLayout>

    );
}

export default IndexPage;
