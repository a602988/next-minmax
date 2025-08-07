import { NextRequest, NextResponse } from 'next/server';

/**
 * Mock API 總覽
 *
 * 提供所有可用的 Mock API 端點資訊
 */
export async function GET(request: NextRequest) {
    const baseUrl = new URL(request.url).origin;

    const apiEndpoints = {
        success: true,
        data: {
            endpoints: {
                languages: {
                    url: `${baseUrl}/api/ssr/languages`,
                    method: 'GET',
                    description: '語系清單',
                    params: ['project', 'language']
                },
                locales: {
                    url: `${baseUrl}/api/ssr/locales`,
                    method: 'GET',
                    description: '國家語系對照表',
                    params: ['project', 'language']
                },
                'system-menus': {
                    url: `${baseUrl}/api/ssr/system-menus`,
                    method: 'GET',
                    description: '系統選單',
                    params: ['project', 'language', 'type?']
                },
                'web-data': {
                    url: `${baseUrl}/api/ssr/web-data`,
                    method: 'GET',
                    description: '網站資訊',
                    params: ['project', 'language']
                },
                detail: {
                    url: `${baseUrl}/api/ssr/detail`,
                    method: 'GET',
                    description: '頁面詳細內容',
                    params: ['project', 'language', 'slug?']
                }
            },
            usage: {
                example: `${baseUrl}/api/ssr/languages?project=main&language=zh`,
                note: 'All APIs support CORS and return JSON format'
            }
        },
        meta: {
            version: '1.0.0',
            timestamp: new Date().toISOString(),
            environment: process.env.NODE_ENV
        }
    };

    return NextResponse.json(apiEndpoints, {
        headers: {
            'Cache-Control': 'public, max-age=3600',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        }
    });
}