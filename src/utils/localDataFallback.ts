import fs from 'fs/promises';
import path from 'path';
import { NextResponse } from 'next/server';
import { routing } from '@/i18n/routing';

export async function getLocalData(requestPath: string, dataType: string): Promise<NextResponse> {
  let fileName;
  let locale = '';

  const pathParts = requestPath.split('/').filter(Boolean);

  if (pathParts.length > 0 && routing.locales.includes(pathParts[0] as any)) {
    locale = pathParts.shift() || '';
  }

  if (requestPath === '/' || requestPath === '' || pathParts.length === 0) {
    fileName = 'index.json';
  } else {
    fileName = pathParts.join('-') + '.json';
  }

  if (locale && locale !== routing.defaultLocale) {
    fileName = fileName.replace('.json', `-${locale}.json`);
  }

  const filePath = path.join(process.cwd(), 'src', 'data', 'demo', dataType, fileName);

  console.log(`Attempting to read file: ${filePath}`);

  try {
    await new Promise(resolve => setTimeout(resolve, 100));
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(fileContent);
    console.log(`Successfully read file: ${filePath}`);
    return NextResponse.json(data);
  } catch (fileError) {
    console.error(`Error reading ${dataType} json: ${filePath}`, fileError);

    if (locale && locale !== routing.defaultLocale) {
      const defaultFileName = fileName.replace(`-${locale}.json`, '.json');
      const defaultFilePath = path.join(process.cwd(), 'src', 'data', 'demo', dataType, defaultFileName);
      
      console.log(`Attempting to read default file: ${defaultFilePath}`);

      try {
        const defaultFileContent = await fs.readFile(defaultFilePath, 'utf-8');
        const defaultData = JSON.parse(defaultFileContent);
        console.log(`Successfully read default file: ${defaultFilePath}`);
        return NextResponse.json(defaultData);
      } catch (defaultFileError) {
        console.error(`Error reading default ${dataType} json: ${defaultFilePath}`, defaultFileError);
      }
    }

    if (fileError instanceof Error) {
      if (fileError.message.includes('ENOENT')) {
        return NextResponse.json({ code: "2001", message: "權限不足" }, { status: 403 });
      } else if (fileError.message.includes('JSON')) {
        return NextResponse.json({ code: "3001", message: "伺服器內部錯誤" }, { status: 500 });
      }
    }

    return NextResponse.json({ code: "1001", message: "資料取得失敗，請稍後再試。" }, { status: 404 });
  }
}