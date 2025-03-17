# 說明

## 目錄檔案結構說明

project-root/
├── src/                  # 源代碼主目錄
│   ├── app/              # App Router 路由和頁面
│   ├── components/       # 共用元件
│   │   ├── ui/           # 基礎 UI 元件（按鈕、輸入框、卡片等）
│   │   ├── layout/       # 布局相關元件（頁頭、頁尾、側邊欄等）
│   │   ├── forms/        # 表單相關元件
│   │   ├── common/       # 通用元件
│   │   └── [feature]/    # 按功能分類的元件
│   ├── lib/              # 核心業務邏輯和外部系統整合（如數據庫），常見文件如 db.ts、auth.ts 等
│   ├── utils/            # 通用工具函數，格式化、驗證、計算等輔助函數，不包含業務邏輯的純函數
│   ├── hooks/            # 自定義 React Hooks，例如 useForm、useFetch、useLocalStorage 等
│   ├── types/            # TypeScript 類型定義，接口、類型別名、枚舉等，可按功能或模塊分類
│   ├── styles/           # 全局樣式
│   ├── contexts/         # React Context 相關文件，狀態管理相關代碼，例如 ThemeContext、AuthContext 等
│   └── services/         # API 服務和數據獲取，例如 userService.ts、productService.ts 等
├── public/               # 靜態資源文件，圖片、字體、favicon 等，這些文件可以通過 URL 直接訪問
├── next.config.mjs       # Next.js 配置文件
├── tailwind.config.ts    # Tailwind CSS 配置
├── postcss.config.mjs    # PostCSS 配置
├── tsconfig.json         # TypeScript 配置
└── package.json          # 項目依賴和腳本
