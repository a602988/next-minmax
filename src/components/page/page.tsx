import {PageType} from "@/types/pageType";

type HomePageProps = {
    pageData: PageType;
};

const DefaultPage = async ({ pageData }: HomePageProps) => {
    return (
        <div className="defaultPage">
            <h1>{pageData.meta_title}</h1>
            <p>{pageData.meta_description}</p>
        </div>
    );
};

export default DefaultPage;
