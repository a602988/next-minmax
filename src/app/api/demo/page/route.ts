/**
 * 頁面數據獲取 API 路由
 *
 * 重點說明：
 * 1. 此 API 路由用於獲取頁面數據，支持從外部 API 獲取或使用本地數據作為後備。
 * 2. 使用 URL 參數 'path' 來指定請求的頁面路徑。
 * 3. 環境變量 USE_LOCAL_DATA 控制是否在 API 調用失敗時使用本地數據。
 * 4. 使用 getLocalData 函數從本地文件系統獲取數據作為後備方案。
 * 5. 錯誤處理包括 API 調用失敗和缺少必要參數的情況。
 */

import { NextRequest, NextResponse } from 'next/server';
import { getLocalData } from '@/utils/localDataFallback';

// 模擬從外部 API 獲取數據的函數
async function fetchFromExternalAPI() {
  // 實際的 API 調用邏輯應該在這裡實現
  // 目前拋出錯誤以模擬 API 不可用的情況
  throw new Error('API unavailable');
}

export async function GET(req: NextRequest) {
  // 從 URL 參數中獲取請求的頁面路徑
  const requestPath = req.nextUrl.searchParams.get('path');

  // 如果未提供 path 參數，返回錯誤響應
  if (requestPath === null) {
    return NextResponse.json({ error: 'requestPath' }, { status: 400 });
  }

  // 檢查是否使用本地數據（由環境變量控制）
  const useLocalData = process.env.USE_LOCAL_DATA === 'true';

  try {
    // 嘗試從外部 API 獲取數據
    const apiData = await fetchFromExternalAPI();
    return NextResponse.json(apiData);
  } catch (apiError) {
    // 記錄 API 調用失敗的錯誤
    console.error('API call failed:', apiError instanceof Error ? apiError.message : 'Unknown error');
    console.log('Falling back to local JSON');

    // 如果配置為使用本地數據，則從本地獲取
    if(useLocalData){
      return getLocalData(requestPath, 'page','demo');
    }

    // 如果不使用本地數據，可以在這裡添加其他錯誤處理邏輯
    // 例如：返回一個通用的錯誤響應
    return NextResponse.json({ error: 'Unable to fetch data' }, { status: 500 });
  }
}
