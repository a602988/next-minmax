# 說明

## 目錄檔案結構說明

project-root/
├── src/                  # 源代碼主目錄
│   ├── app/              # App Router 路由和頁面
│   ├── components/       # 共用元件
│   │   ├── ui/           # 基礎 UI 元件（按鈕、輸入框、卡片等）
│   │   ├── layout/       # 布局相關元件（頁頭、頁尾、側邊欄等）：LanguageSwitcher、ThemeSwitcher、TopBar、Header．．
│   │   ├── forms/        # 表單相關元件
│   │   ├── common/       # 通用元件：通常是較小的、功能單一的組件，不屬於布局元件。例如：Toast、Image、BackToTop、ProgressBar、ScrollLock等
│   │   └── [feature]/    # 按功能分類的元件
│   ├── lib/              # 核心業務邏輯和外部系統整合（如數據庫），常見文件如 db.ts、auth.ts 等
│   ├── utils/            # 通用工具函數，格式化、驗證、計算等輔助函數，不包含業務邏輯的純函數
│   ├── hooks/            # 自定義 React Hooks，例如 useForm、useFetch、useLocalStorage 等
│   ├── types/            # TypeScript 類型定義，接口、類型別名、枚舉等，可按功能或模塊分類
│   ├── styles/           # 全局樣式
│   ├── contexts/         # React Context 相關文件，狀態管理相關代碼，例如 ThemeContext、AuthContext 等
│   ├── models/           # 複雜的 API 響應模型
│   ├── services/
│   │   ├── core/         # 通用邏輯，跨平台的底層工具
│   │   │   ├── httpClient.ts
│   │   │   └── ApiError.ts
│   │   ├── shared/       # 多個服務共享的邏輯
│   │   │   ├── interceptors/ # 通用攔截器
│   │   │   └── auth/     # 認證相關邏輯
│   │   ├── minmax/       # minmax 專屬服務
│   │   │   ├── api/      # API 相關邏輯
│   │   │   │   ├── client.ts
│   │   │   │   ├── endpoints.ts
│   │   │   │   └── buildUrl.ts
│   │   │   ├── hooks/    # 相關的自定義 hooks
│   │   │   │   └── useLanguageOptions.ts
│   │   │   └── types.ts  # minmax 專用類型定義
│   │   └── index.ts      # 導出所有服務
├── public/               # 靜態資源文件，圖片、字體、favicon 等，這些文件可以通過 URL 直接訪問
├── __tests__/         # 單元測試和集成測試
│   ├── components/
│   ├── hooks/
│   └── services/
├── docs/              # 項目文檔
│   ├── api/           # API 文檔
│   ├── architecture/  # 架構說明
│   └── guides/        # 開發指南
├── scripts/           # 開發和部署腳本
│   ├── build.js
│   └── deploy.js
├── assets/
│   ├── images/
│   ├── fonts/
│   └── icons/
├── next.config.mjs       # Next.js 配置文件
├── tailwind.config.ts    # Tailwind CSS 配置
├── postcss.config.mjs    # PostCSS 配置
├── tsconfig.json         # TypeScript 配置
└── package.json          # 項目依賴和腳本


# 目錄細節說明

## service



## lighthouse 跑分

初始 語系 dev 83 start 99


