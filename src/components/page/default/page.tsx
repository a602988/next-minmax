import React from 'react';
import { PageType } from "@/types/pageType";

const DefaultPage = ({ pageData }: { pageData: PageType }) => {
    return (
        <div className="defaultPage">
            <h1>{pageData.meta_title}</h1>
            <p>{pageData.meta_description}</p>
        </div>
    );
};

export default DefaultPage;
