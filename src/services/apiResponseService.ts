import { NextResponse } from 'next/server';
import zlib from 'zlib';
import { promisify } from 'util';

const gzip = promisify(zlib.gzip);

export async function createSuccessResponse(data: any, startTime: number) {
  const responseData = {
    code: "0000",
    message: "成功。",
    data: data
  };
  const compressedData = await gzip(JSON.stringify(responseData));
  const endTime = Date.now();
  return new NextResponse(compressedData, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Content-Encoding': 'gzip',
      'Cache-Control': 'public, max-age=300', // 5分鐘緩存
      'X-Response-Time': `${endTime - startTime}ms`
    }
  });
}

export function createErrorResponse(message: string, status: number, startTime: number, details?: string) {
  const endTime = Date.now();
  return NextResponse.json(
    {
      code: "5000",
      message: message,
      error: details
    },
    {
      status,
      headers: {
        'Cache-Control': 'no-store',
        'X-Response-Time': `${endTime - startTime}ms`
      }
    }
  );
}
