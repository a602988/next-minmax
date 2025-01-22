import React from 'react';
import { PageType } from "@/types/pageType";
import DefaultLayout from '@/components/layout/DefaultLayout';

const HomePage = ({ pageData }: { pageData: PageType }) => {
    return (
        <DefaultLayout>
            <div className="HomePage">
                <h1>{pageData.meta_title}</h1>
                <p>{pageData.meta_description}</p>
            </div>
        </DefaultLayout>
    );
};

export default HomePage;
