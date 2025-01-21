/**
 * localDataFallback.ts
 *
 * 重點說明：
 * 1. 此文件提供了一個獲取本地數據的函數 getLocalData。
 * 2. 函數支持多語言，可以根據請求路徑中的語言代碼加載相應的語言文件。
 * 3. 如果特定語言的文件不存在，會嘗試加載默認語言的文件。
 * 4. 文件讀取失敗時，會根據錯誤類型返回不同的錯誤響應。
 * 5. 主要用於在 API 請求失敗時提供本地數據作為後備方案。
 *
 * 使用場景：
 * - 當外部 API 不可用或網絡問題時，可以使用本地存儲的數據。
 * - 開發和測試階段，可以使用本地數據模擬 API 響應。
 *
 * 注意事項：
 * - 確保 src/data/demo 目錄下有相應的 JSON 文件。
 * - 文件名格式：[路徑]-[語言].json 或 [路徑].json。 example: products-list-en.json(url: /en/products/list)。
 * - 錯誤處理包括權限不足（403）、服務器錯誤（500）和資源不存在（404）。
 */


import fs from 'fs/promises';
import path from 'path';
import { NextResponse } from 'next/server';
import { routing } from '@/i18n/routing';

/**
 * 獲取本地數據的函數
 * @param requestPath 請求路徑
 * @param dataType 數據類型
 * @returns Promise<NextResponse> 包含數據或錯誤信息的 NextResponse
 */
export async function getLocalData(requestPath: string, dataType: string): Promise<NextResponse> {
  let fileName;
  let locale = '';

  // 將請求路徑分割成部分，並過濾掉空字符串
  const pathParts = requestPath.split('/').filter(Boolean);

  // 檢查路徑的第一部分是否為有效的語言代碼
  if (pathParts.length > 0 && routing.locales.includes(pathParts[0] as any)) {
    locale = pathParts.shift() || '';
  }

  // 根據請求路徑確定文件名
  if (requestPath === '/' || requestPath === '' || pathParts.length === 0) {
    fileName = 'index.json';
  } else {
    fileName = pathParts.join('-') + '.json';
  }

  // 如果存在非默認語言的區域設置，修改文件名
  if (locale && locale !== routing.defaultLocale) {
    fileName = fileName.replace('.json', `-${locale}.json`);
  }

  // 構建完整的文件路徑
  const filePath = path.join(process.cwd(), 'src', 'data', 'demo', dataType, fileName);

  console.log(`嘗試讀取文件: ${filePath}`);

  try {
    // 添加短暫延遲以模擬網絡請求
    await new Promise(resolve => setTimeout(resolve, 100));
    // 讀取並解析 JSON 文件
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(fileContent);
    console.log(`成功讀取文件: ${filePath}`);
    return NextResponse.json(data);
  } catch (fileError) {
    console.error(`讀取 ${dataType} json 時出錯: ${filePath}`, fileError);

    // 如果是非默認語言且讀取失敗，嘗試讀取默認語言的文件
    if (locale && locale !== routing.defaultLocale) {
      const defaultFileName = fileName.replace(`-${locale}.json`, '.json');
      const defaultFilePath = path.join(process.cwd(), 'src', 'data', 'demo', dataType, defaultFileName);

      console.log(`嘗試讀取默認文件: ${defaultFilePath}`);

      try {
        const defaultFileContent = await fs.readFile(defaultFilePath, 'utf-8');
        const defaultData = JSON.parse(defaultFileContent);
        console.log(`成功讀取默認文件: ${defaultFilePath}`);
        return NextResponse.json(defaultData);
      } catch (defaultFileError) {
        console.error(`讀取默認 ${dataType} json 時出錯: ${defaultFilePath}`, defaultFileError);
      }
    }

    // 根據錯誤類型返回不同的錯誤響應
    if (fileError instanceof Error) {
      if (fileError.message.includes('ENOENT')) {
        return NextResponse.json({ code: "2001", message: "權限不足" }, { status: 403 });
      } else if (fileError.message.includes('JSON')) {
        return NextResponse.json({ code: "3001", message: "伺服器內部錯誤" }, { status: 500 });
      }
    }

    // 默認錯誤響應
    return NextResponse.json({ code: "1001", message: "資料取得失敗，請稍後再試。" }, { status: 404 });
  }
}
