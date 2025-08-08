export interface LanguageInfo {
    id: string;
    title: string;
    native: string;
    icon: string;
    default: boolean;
    current?: boolean;
}

export interface LanguageDecision {
    finalLanguage: string;
    source: 'user-preference' | 'browser' | 'geo' | 'default' | 'url';
    redirectNeeded: boolean;
    targetUrl?: string;
}

export interface GeoInfo {
    country?: string;
    detectedCountry?: string;
    currentSubdomain?: string;
    targetSubdomain?: string;
}

export interface PageMetadata {
    detectedCountry?: string;
    currentCountrySubdomain?: string;
    finalLanguage: string;
    preferredLanguage?: string;
    availableLanguages: LanguageInfo[];
    geoRedirectEnabled: boolean;
    multiLanguageEnabled: boolean;
}