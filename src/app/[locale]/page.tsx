import React, { Suspense } from 'react';
import { PageType } from "@/types/pageType";
import { getPageData } from "@/services/page";
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
import getConfig from 'next/config';
import { removeLocaleFromPath, getFullPath } from '@/utils/pathUtils';


interface PageProps {
    params: Promise<{ locale: string }>;
}

interface PageComponentProps {
    pageData: PageType;
}

const DynamicPage: NextPage<PageProps> = async ({ params }) => {
    try {
        const resolvedParams = await params;
        // 構造完整路徑
        const fullPath = getFullPath(resolvedParams.locale);
        // 使用工具函數來處理路徑
        const path = removeLocaleFromPath(resolvedParams.locale, fullPath);

        //取 nextConfig 的 serverRuntimeConfig 對象
        const { serverRuntimeConfig} = getConfig();

        // console.log(path);

        // 獲取頁面數據
        const pageData = await getPageData(serverRuntimeConfig.projectName, resolvedParams.locale, path, '');

        // 如果沒有找到頁面數據，返回404
        if (!pageData) {
            notFound();
        }

        // 動態導入頁面組件
        const PageComponent = dynamic<PageComponentProps>(
            // 根據pageData.wrap動態導入對應的頁面組件
            () => import(`@/components/page/${pageData.wrap}/page`).then(mod => mod.default)
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
