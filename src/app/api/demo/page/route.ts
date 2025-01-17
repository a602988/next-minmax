import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET(req: NextRequest) {
  // 獲取查詢參數中的 path
  const requestPath = req.nextUrl.searchParams.get('path');

  if (!requestPath) {
    return NextResponse.json({ error: 'Path parameter is required' }, { status: 400 });
  }

  // 將路徑轉換為文件名
  const fileName = requestPath.replace(/\//g, '-').replace(/^-/, '') + '.json';
  const filePath = path.join(process.cwd(), 'src', 'data', 'demo','page', fileName);

  try {
    // 模擬一些處理時間
    await new Promise(resolve => setTimeout(resolve, 100));

    // 嘗試讀取對應的 JSON 文件
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const pageData = JSON.parse(fileContent);

    // 返回頁面數據
    return NextResponse.json(pageData);
  } catch (error) {
    console.error(`Error reading file: ${filePath}`, error);
    return NextResponse.json({ error: 'Page not found' }, { status: 404 });
  }
}