import {NextRequest, NextResponse} from 'next/server';

interface Language {
    id: string;
    title: string;
    native: string;
    icon: string;
    default: boolean;
    current: boolean;
}

interface LanguageResponse {
    code: string;
    message: string;
    data: Language[];
}

export async function GET(req: NextRequest) {
    const language = req.nextUrl.searchParams.get('language');
    // 定義支持的語言列表
    const languageResponse: LanguageResponse = {
        code: "0000",
        message: "成功。",
        data: [
            {
                id: "zh-TW",
                title: "中文(繁體)",
                native: "TW",
                icon: "flag-icon-tw",
                default: true,
                current: language === 'zh-TW'
            },
            {
                id: "zh-CN",
                title: "中文（簡體）",
                native: "CN",
                icon: "flag-icon-cn",
                default: false,
                current: language === 'zh-CN'
            },
            {
                id: "en",
                title: "English",
                native: "EN",
                icon: "flag-icon-us",
                default: false,
                current: language === 'en'
            },
            {
                id: "ja",
                title: "日文",
                native: "JA",
                icon: "flag-icon-ja",
                default: false,
                current: language === 'ja'
            }
        ]
    };

    return NextResponse.json(languageResponse);
}
