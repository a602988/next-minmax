import { NextRequest, NextResponse } from 'next/server';
import { getLocalData } from '@/utils/localDataFallback';

async function fetchFromExternalAPI(path: string) {
  // 實際的 API 調用邏輯
  throw new Error('API unavailable');
}

export async function GET(req: NextRequest) {
  const requestPath = req.nextUrl.searchParams.get('path');

  if (requestPath === null) {
    return NextResponse.json({ error: 'requestPath' }, { status: 400 });
  }

  try {
    const apiData = await fetchFromExternalAPI(requestPath);
    return NextResponse.json(apiData);
  } catch (apiError) {
    console.log('API call failed, falling back to local JSON');
    return getLocalData(requestPath, 'page');
  }
}