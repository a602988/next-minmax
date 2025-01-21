import { NextResponse } from 'next/server';
import languagesData from '@/data/demo/languages.json';
import { LanguagesType } from '@/types/languages';


interface dataResponse {
    code: string;
    message: string;
    data: LanguagesType[];
}

export async function GET() {

    if(!Array.isArray(languagesData.data) || languagesData.data.length === 0) {
        return NextResponse.json(
            {
                code: "5000",
                message: "error languages.json"
            },
            { status: 500 }
        );
    }

    // 使用引入的 JSON 數據
    const languageResponse: dataResponse = {
        code: "0000",
        message: "success。",
        data: languagesData.data as LanguagesType[]
    };

    return NextResponse.json(languageResponse);
}
