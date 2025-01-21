import React, { Suspense } from 'react';
import { PageType } from "@/types/pageType";
import { getPageData } from "@/services/pageService";
import { NextPage } from 'next';
import dynamic from 'next/dynamic';

interface PageProps {
    params: Promise<{ locale: string }>;
}

interface PageComponentProps {
    pageData: PageType;
}

const DynamicPage: NextPage<PageProps> = async ({ params }) => {
    // 等待 params 解析
    const resolvedParams = await params;

    // 使用 resolvedParams.locale 來構建路徑
    const path = `/${resolvedParams.locale}`;

    // 使用路徑獲取頁面數據
    const pageData = await getPageData(path);

    // 如果沒有找到頁面數據，返回錯誤信息
    if (!pageData) {
        return <div>Error: Page not found</div>;
    }

    // 根據 'wrap' 屬性動態導入組件
    const PageComponent = dynamic<PageComponentProps>(
        () => import(`@/app/[locale]/${pageData.wrap}/page`).then(mod => mod.default)
    );

    // 返回動態加載的組件，並使用 Suspense 進行加載狀態處理
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <PageComponent pageData={pageData} />
        </Suspense>
    );
};

export default DynamicPage;
