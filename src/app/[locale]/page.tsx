import DynamicLayout from "@/components/layout/DynamicLayout";
import type { Metadata } from "next";
import { PageType } from "@/types/pageType";
import { notFound } from "next/navigation";
import { getPageData } from "@/services/pageService";

async function getPageDataOrNotFound(path: string): Promise<PageType> {
    const pageData = await getPageData(path);
    if (!pageData) {
        notFound();
    }
    return pageData;
}
export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const path = `/${locale}`;
    const pageData = await getPageDataOrNotFound(path);

    return {
        title: pageData.meta_title || "Default Page Title",
        description: pageData.meta_description || "Default page description",
    };
}
export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const path = `/${locale}`;
    const pageData = await getPageDataOrNotFound(path);

    const layoutType = pageData.wrap || 'default'; // Provide a default value

    return (
        <DynamicLayout layoutData={layoutType} params={{ locale }}>
            <h1>{pageData.meta_title || "Home"}</h1>
        </DynamicLayout>
    );
}
