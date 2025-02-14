/**
 * 動態頁面組件
 *
 * - 根據當前語言動態加載對應的頁面內容
 * - 使用動態導入（dynamic import）來加載頁面組件
 * - 處理頁面數據獲取和錯誤情況
 * - 支持國際化路由
 * - 使用 getPageData 函數能取頁面數據
 * - pageData.wrap 應該對應到 @/components/pageWrap 下的有效組件
 * - 使用 Suspense 和 dynamic 來優化頁面加載體驗
 */


import React, { Suspense } from 'react';
import { PageType } from "@/types/pageType";
import { getPageData } from "@/services/page";
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
// import { routing } from "@/i18n/routing";
import { notFound } from 'next/navigation';

interface PageProps {
    params: Promise<{ locale: string }>;
}

interface PageComponentProps {
    pageData: PageType;
}

const DynamicPage: NextPage<PageProps> = async () => {
    try {
        // const resolvedParams = await params;
        // 根據當前語言設置路徑
        // const path = resolvedParams.locale === routing.defaultLocale ? '/' : `/${resolvedParams.locale}`;

        // 獲取頁面數據
        const pageData = await getPageData();

        // console.log(pageData);
        // 如果沒有找到頁面數據，返回404
        if (!pageData) {
            notFound();
        }

        // 動態導入頁面組件
        const PageComponent = dynamic<PageComponentProps>(
            // 根據pageData.wrap動態導入對應的頁面組件
            () => import(`@/components/page/${pageData.wrap}/page`).then(mod => mod.default),
            {
                // 設置加載中的顯示內容
                loading: () => <p>Loading component...</p>,
            }
        );

        // 返回頁面組件，使用Suspense包裹以處理異步加載
        return (
            <Suspense fallback={<p>Loading page content...</p>}>
                <PageComponent pageData={pageData} />
            </Suspense>
        );
    } catch (error) {
        console.error('Error in DynamicPage:', error);
        notFound();
    }
};

export default DynamicPage;
