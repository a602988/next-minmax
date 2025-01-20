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
    // 解析搜索參數
    const resolvedSearchParams = await searchParams;
    // 獲取路徑，如果未提供則默認為 '/'
    const path = (resolvedSearchParams.path as string) || '/';
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
}

export default DynamicPage as NextPage<PageProps>;
