import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { routing } from '@/i18n/routing';

// 模擬外部 API 調用
async function fetchFromExternalAPI(path: string) {
  // 這裡應該是實際的 API 調用
  // 現在我們模擬一個失敗的 API 調用
  throw new Error('API unavailable');
}

// 讀取本地 JSON 文件的函數
async function readLocalJsonFile(requestPath: string): Promise<NextResponse> {
  let fileName;
  let locale = '';

// 分割路徑以檢查語系
  const pathParts = requestPath.split('/').filter(Boolean);

  // 檢查第一個部分是否為有效的語系
  if (pathParts.length > 0 && routing.locales.includes(pathParts[0] as any)) {
    locale = pathParts.shift() || '';
  }

  // 如果路徑為 '/' 或為空，使用 'index.json'
  if (requestPath === '/' || requestPath === '' || pathParts.length === 0) {
    fileName = 'index.json';
  } else {
    fileName = pathParts.join('-') + '.json';
  }

  // 如果有語系且不是預設語系，將其添加到文件名中
  if (locale && locale !== routing.defaultLocale) {
    fileName = fileName.replace('.json', `-${locale}.json`);
  }

  const filePath = path.join(process.cwd(), 'src', 'data', 'demo', 'page', fileName);

  console.log(`Attempting to read file: ${filePath}`);


  try {
    // 模擬一些處理時間
    await new Promise(resolve => setTimeout(resolve, 100));

    // 嘗試讀取對應的 JSON 文件
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const pageData = JSON.parse(fileContent);

    console.log(`Successfully read file: ${filePath}`);

    // 返回頁面數據
    return NextResponse.json(pageData);
  } catch (fileError) {
    console.error(`Error reading page json: ${filePath}`, fileError);

    // 如果找不到特定語系的文件，嘗試讀取默認語系的文件
    if (locale && locale !== routing.defaultLocale) {
      const defaultFileName = fileName.replace(`-${locale}.json`, '.json');
      const defaultFilePath = path.join(process.cwd(), 'src', 'data', 'demo', 'page', defaultFileName);
      
      console.log(`Attempting to read default file: ${defaultFilePath}`);

      try {
        const defaultFileContent = await fs.readFile(defaultFilePath, 'utf-8');
        const defaultPageData = JSON.parse(defaultFileContent);

        console.log(`Successfully read default file: ${defaultFilePath}`);

        return NextResponse.json(defaultPageData);
      } catch (defaultFileError) {
        console.error(`Error reading default page json: ${defaultFilePath}`, defaultFileError);
      }
    }

    return NextResponse.json({ error: 'Page not found', path: filePath }, { status: 404 });
  }
}


export async function GET(req: NextRequest) {
  const requestPath = req.nextUrl.searchParams.get('path');

  if (requestPath === null) {
    return NextResponse.json({ error: 'requestPath' }, { status: 400 });
  }

  try {
    // 首先嘗試從外部 API 獲取數據
    const apiData = await fetchFromExternalAPI(requestPath);
    return NextResponse.json(apiData);
  } catch (apiError) {
    console.log('API call failed, falling back to local JSON');

    // API 調用失敗，嘗試讀取本地 JSON 文件
    return readLocalJsonFile(requestPath);
  }
}