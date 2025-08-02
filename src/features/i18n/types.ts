
import { ApiResponse } from '@/types/api';

// 語系資訊介面
export interface LanguageInfo {
    id: string;          // 語系代碼 (例如: "zh-TW", "en", "ja")
    title: string;       // 語系顯示名稱 (例如: "中文(繁體)", "English", "日文")
    native: string;      // 原生語言代碼 (例如: "TW", "CN", "EN", "JA")
    icon: string;        // 圖示 CSS 類別 (例如: "flag-icon-tw")
    default: boolean;    // 是否為預設語系
    current?: boolean;   // 是否為當前選中的語系 (前端使用)
}

// API 回傳的語系資料結構
export interface LanguageApiResponse extends ApiResponse<LanguageInfo[]> {
    data: LanguageInfo[]; // 可用語系清單
}

// Cookie 中儲存的語系資料結構
export interface LanguageData {
    availableLanguages: LanguageInfo[]; // 從 API 獲取的可用語系清單
    defaultLanguage: string;            // 系統預設語系代碼
    version: string;                    // 資料版本號，用於快取失效控制
    timestamp: number;                  // 資料儲存時間戳，用於判斷快取是否過期
}

// 使用者偏好語系的類型
export interface UserLanguagePreference {
    language: string;    // 使用者選擇的語系代碼
    timestamp: number;   // 偏好設定的時間戳，用於追蹤設定時間
}

// 語系決策結果介面
export interface LanguageDecision {
    finalLanguage: string;      // 最終確定要使用的語系代碼
    source: 'user-preference' | 'browser' | 'geo' | 'default' | 'url'; // 語系來源：使用者偏好/瀏覽器設定/地理位置/系統預設/URL路徑
    redirectNeeded: boolean;    // 是否需要進行頁面重定向
    targetUrl?: string;         // 重定向的目標 URL (當 redirectNeeded 為 true 時使用)
}

// 地理位置資訊介面
export interface GeoInfo {
    country?: string;           // 國家代碼
    detectedCountry?: string;   // 偵測到的國家代碼
    currentSubdomain?: string;  // 當前子網域
    targetSubdomain?: string;   // 目標子網域
}

// 頁面元數據介面 (傳遞給前端)
export interface PageMetadata {
    detectedCountry?: string;        // 偵測到的使用者國家代碼 (來自步驟1)
    currentCountrySubdomain?: string; // 當前子網域 (來自步驟1)
    finalLanguage: string;           // 當前頁面最終渲染的語系 (來自步驟6)
    preferredLanguage?: string;      // 使用者的偏好語系，主要來自 Accept-Language Header
    availableLanguages: LanguageInfo[]; // 可用語系清單 (來自步驟2，供前端語系選擇器使用)
    geoRedirectEnabled: boolean;     // 地理重定向功能是否啟用
    multiLanguageEnabled: boolean;   // 多語系功能是否啟用
}

