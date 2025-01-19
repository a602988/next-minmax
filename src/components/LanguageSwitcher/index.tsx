import LanguageLink from './LanguageLink';

interface Props {
    className?: string;
    currentLocale: string;
}

interface Language {
    id: string;
    title: string;
}

interface ApiResponse {
    data: Array<Language>;
    // 可以添加其他可能的字段，如 status, message 等
}

async function getLanguages(): Promise<Array<Language>> {
    const response = await fetch('http://localhost:3000/api/demo/languages', { cache: 'no-store' });
    if (!response.ok) {
        throw new Error('Failed to fetch languages');
    }
    const data: ApiResponse = await response.json();
    if (!Array.isArray(data.data)) {
        throw new Error('Invalid data format received from API');
    }
    return data.data;
}

export default async function LanguageSwitcher({ className = 'flex gap-1', currentLocale }: Props) {
    let languages: Array<Language> = [];
    try {
        languages = await getLanguages();
    } catch (error) {
        console.error('Error fetching languages:', error);
        // 可以在這裡添加錯誤處理邏輯，比如顯示錯誤消息
    }

    if (languages.length === 0) {
        return null;
    }

    return (
        <div className={className}>
            {languages.map((lang: Language) => (
                <LanguageLink
                    key={lang.id}
                    href="/"
                    locale={lang.id}
                    isCurrent={lang.id === currentLocale}
                    title={lang.title}
                />
            ))}
        </div>
    );
}
