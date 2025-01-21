/**
 * @file revalidate/route.ts
 * @description API 路由用於手動觸發特定標記（tag）的快取重新驗證
 *
 * 使用方法：
 * 1. 設置環境變量：在 .env.local 文件中添加 REVALIDATE_SECRET=your_secret_key_here
 * 2. 調用 API：訪問 http://localhost:3000/api/revalidate?tag=<tag_name>&secret=<your_secret_key>
 *
 * 參數說明：
 * - tag: 要重新驗證的快取標記（例如：'languages', 'menus', 'layout'）
 * - secret: 用於驗證請求的密鑰，必須與環境變量 REVALIDATE_SECRET 匹配
 *
 * 安全性：
 * - 使用 secret 參數來防止未授權的重新驗證請求
 * - 確保在生產環境中使用強密鑰並保密
 *
 * 注意：
 * - 這個 API 不會立即清除快取，而是標記相關內容需要在下次請求時重新生成
 * - 適用於需要更新靜態生成（SSG）或增量靜態再生（ISR）內容的場景
 */


import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

export async function GET(request: NextRequest) {
    // 從 URL 查詢參數中獲取 tag 和 secret
    const tag = request.nextUrl.searchParams.get('tag');
    const secret = request.nextUrl.searchParams.get('secret');

    // 驗證密鑰以增加安全性
    // 比較提供的 secret 與環境變量中的 REVALIDATE_SECRET
    if (secret !== process.env.REVALIDATE_SECRET) {
        // 如果密鑰不匹配，返回 401 未授權錯誤
        return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
    }

    // 檢查是否提供了 tag 參數
    if (!tag) {
        // 如果沒有提供 tag，返回 400 錯誤請求
        return NextResponse.json({ message: 'Missing tag parameter' }, { status: 400 });
    }

    try {
        revalidateTag(tag);
        return NextResponse.json({ revalidated: true, tag, now: Date.now() });
    } catch (error) {
        console.error('Revalidation error:', error instanceof Error ? error.message : 'Unknown error');
        return NextResponse.json(
            {
                message: 'Error revalidating',
                error: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        );
    }
}
