import LanguageLink from './LanguageLink';
import { getLanguagesData } from '@/services/languageService';
import { LanguagesType } from '@/types/languages';

interface Props {
    className?: string;
    currentLocale: string;
}

export default async function LanguageSwitcher({ className = 'flex gap-1', currentLocale }: Props) {
    const languages = await getLanguagesData();

    if (!languages || languages.length === 0) {
        return null; // 如果沒有語言數據，不渲染任何內容
    }

    return (
        <div className={className}>
            {languages.map((lang: LanguagesType) => (
                <LanguageLink
                    key={lang.id}
                    href="/"
                    locale={lang.id}
                    isCurrent={lang.id === currentLocale}
                    title={lang.title}
                    showIcon={!!lang.icon}
                    icon={lang.icon}
                />
            ))}
        </div>
    );
}
