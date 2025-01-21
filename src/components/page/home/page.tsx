import React from 'react';
import { PageType } from "@/types/pageType";

// type HomePageProps = {
//     pageData: PageType;
// };

const HomePage: React.FC<{pageData: PageType}> = ({ pageData }: { pageData: PageType }) => {
    return (
        <div className="HomePage">
            <h1>{pageData.meta_title}</h1>
            <p>{pageData.meta_description}</p>
        </div>
    );
};

export default HomePage;
