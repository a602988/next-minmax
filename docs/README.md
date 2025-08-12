# Next.js API 驅動型商務網站完整目錄規劃-「功能導向」或「領域驅動」的結構

本架構的核心是一個位於 app/[locale]/[[...slug]]/page.tsx 的 通用頁面渲染器 (Universal Page Renderer)。此元件作為唯一的內容入口點，它會：

從 URL 捕獲 locale (語系) 和 slug (路徑)。

呼叫一個抽象化的 API 客戶端 (lib/api.ts) 來獲取頁面數據，無論數據源是本地模擬 JSON 還是真實後端 API。

API 回應的數據將包含頁面元數據 (SEO)、版型配置 (layout) 以及一個由多個區塊 (blocks) 組成的陣列。

通用頁面渲染器會根據 layout 資訊選擇對應的版型組件，並動態地將 blocks 陣列映射到對應的前端組件庫，最終組合並渲染出完整的頁面。


## 專案根目錄結構規劃

```
my-business-website/
├── .env.local                          # 本地環境變數
├── .env.example                        # 環境變數範例
├── .gitignore                          # Git 忽略檔案
├── package.json                        # 專案依賴與腳本
├── next.config.ts                      # Next.js 配置
├── tsconfig.json                       # TypeScript 配置
├── postcss.config.mjs                  # PostCSS 配置
├── eslint.config.mjs                   # ESLint 配置
├── README.md                           # 專案說明文件
├── messages/                           # 國際化 (i18n) 翻譯檔案
├── public/                             # 靜態資源 (圖片、字體等)
├── docs/                               # 專案文件 (架構、API 文件等)
├── scripts/                            # 建置與部署腳本
├── src/                                # 原始碼主目錄
│   ├── app/                            # (核心路由) Next.js 14 App Router
│   ├── components/                     # (共享UI) 全域共享、無業務邏輯的基礎 UI 組件
│   ├── features/                       # (核心業務) 各項業務功能模組、特定領域的服務
│   ├── lib/                            # (核心工具庫) 全域共享、與業務無關的底層工具函式、純工具函式，無狀態
│   ├── hooks/                          # (共享Hooks) 全域共享的 Hooks
│   ├── contexts/                       # (共享Context) 全域狀態管理 Context
│   ├── providers/                      # 全域 Provider 集合
│   ├── constants/                      # 全域常數
│   ├── i18n/                           # 國際化配置與核心邏輯
│   ├── styles/                         # 全域樣式與主題配置
│   ├── service/                        # 有狀態的服務層，處理外部 API 
│   ├── assets/                         # 靜態資源
│   ├── types/                          # 全域共享的 TypeScript 類型定義
│   ├── middleware.ts                   # Next.js 中間件 (認證、國際化等)
│   └── env.mjs                         # 環境變數驗證與類型定義 (使用 Zod)
└── tests/                              # (高層級測試) 端到端 (E2E) 與整合 (Integration) 測試
```

## 完整專案根目錄與檔案結構


```

├── .env.local                                  # 🔒 本地開發環境變數 (不提交至 Git)
├── .env.example                                # 📝 環境變數範例檔，作為新環境配置的模板
├── .gitignore                                  # 🚫 Git 版本控制的忽略清單
├── package.json                                # 📦 專案依賴 (dependencies) 與腳本 (scripts) 設定
├── next.config.ts                              # 🚀 Next.js 核心配置文件 (包含 next-intl 插件配置)
├── tsconfig.json                               # ⌨️ TypeScript 編譯器配置與路徑別名 (@/*)
├── postcss.config.mjs                          # 💅 PostCSS 配置文件 (通常與 Tailwind CSS 整合)
├── eslint.config.mjs                           # 🎨 ESLint 代碼風格與規則配置文件
├── README.md                                   # 📖 專案說明文件，介紹專案目標、架構與啟動方式
├── messages/                                   # 🌍 國際化 (i18n) 翻譯檔案目錄 (例如 en.json, zh-TW.json)
├── public/                                     # 📦 公開靜態資源目錄 (圖片、字體、robots.txt 等)
├── docs/                                       # 📄 專案詳細文件 (架構圖、API 文件、設計決策等)
└── src/                                        # 📁 應用程式原始碼主目錄
    ├── app/                                    # (核心路由) Next.js 14 App Router
    │   ├── [locale]/                           # ├─ 國際化動態路由，捕獲語系參數
    │   │   ├── [[...slug]]/                    # │  ├─ 通用頁面路由，捕獲所有頁面路徑
    │   │   │   └── page.tsx                    # │  │  └─ 🚀 **通用頁面渲染器 (Universal Page Renderer)**，專案唯一內容入口點
    │   │   ├── layout.tsx                      # │  └─ 語系根佈局，設定 <html> lang 屬性與全域 Provider
    │   │   └── not-found.tsx                   # │  └─ 404 頁面，處理未找到的頁面
    │   └── api/                                # ├─ 後端 API 路由
    │       └── ssr/                            #    └─ 模擬 API (Server-Side Rendering)，供開發階段使用
    │           ├── _data/                      #       ├─ 📝 Mock API 的靜態資料庫
    │           │   ├── languages.data.ts       #       │  ├─ 網站支援的語系列表資料
    │           │   ├── locales.data.ts         #       │  ├─ 國家與預設語系的對照表資料
    │           │   ├── system-menus.data.ts    #       │  ├─ 全站共用選單 (頁首、頁尾) 資料
    │           │   ├── web-data.data.ts        #       │  ├─ 網站全域基本資訊 (網站名稱、Logo等)
    │           │   └── page.data.ts            #       │  └─ 📦 **核心頁面資料**，包含不同 slug 的版型與區塊 (blocks) 內容
    │           ├── _utils/                     #       ├─ 🛠️ Mock API 內部使用的輔助工具
    │           │   ├── api-helpers.ts          #       │  └─ 輔助函式 (例如模擬延遲、錯誤回應)
    │           │   └── mock.config.ts          #       │  └─ Mock API 的配置文件 (例如延遲時間)
    │           ├── languages/                  #       ├─ 專門提供 `languages` 資料的 API 端點
    │           │   └── route.ts                #       │  └─ /api/ssr/languages 的路由處理器
    │           ├── locales/                    #       ├─ 專門提供 `locales` 資料的 API 端點
    │           │   └── route.ts                #       │  └─ /api/ssr/locales 的路由處理器
    │           └── route.ts                    #       └─ 處理頁面內容的通用 Mock API 端點 (例如 /api/ssr/pages/[slug])
    ├── components/                             # (共享UI) 全域共享、無業務邏輯的 UI 組件
    │   ├── blocks/                             # ├─ 🧩 **頁面區塊組件庫**，與後端 API 回應的 `blocks` 陣列對應
    │   ├── layout/                             # ├─ 🖼️ 版型組件 (頁首、頁尾、側邊欄、通用頁面容器)
    │   └── ui/                                 # └─ ⚙️ 基礎原子組件 (按鈕、輸入框、卡片、對話框等)
    ├── features/                               # 核心業務功能模組，每個子目錄代表一個獨立領域
    │   ├── demo/                               # 示例業務功能模塊（可根據實際業務命名）
    │   │   ├── actions/                          # 伺服器動作 (Server Actions)，包含需要處理的API請求或伺服器端邏輯
    │   │   ├── api/                              # 客戶端調用API的函數
    │   │   ├── components/                       # 存放UI元件，例如表單、按鈕等
    │   │   ├── constants/                        # 定義常量，例如API端點、狀態碼等
    │   │   ├── hooks/                            # 存放自定義的~~~~React hooks，例如使用者認證、語言切換等
    │   │   ├── lib/                              # 商業邏輯、純函式、輔助工具，處理一些非UI的邏輯
    │   │   ├── types/                            # TypeScript 類型定義，包含此功能模塊的所有類型和接口
    │   │   ├── __tests__/                        # 測試檔案，針對該業務模塊的單元測試
    │   │   ├── services/                         # 處理API請求、資料請求等
    │   │   └── actions/                          # 與伺服器動作相關的代碼，可能是與服務端交互的操作
    │   ├── navigation/                     # 導航相關的 UI 組件和邏輯
    │   │   ├── components/
    │   │   │   ├── Header.tsx
    │   │   │   ├── Footer.tsx
    │   │   │   ├── Sidebar.tsx
    │   │   │   ├── MenuDropdown.tsx
    │   │   │   └── MobileMenu.tsx
    │   │   ├── hooks/
    │   │   │   ├── useSystemMenu.ts        // 組合多個服務的邏輯
    │   │   │   ├── useMenuPermissions.ts   // 權限相關邏輯
    │   │   │   └── useMenuAnalytics.ts     // 點擊追蹤邏輯
    │   │   ├── utils/
    │   │   │   ├── menu-permissions.ts     // 權限過濾工具
    │   │   │   └── menu-analytics.ts       // 分析工具
    │   │   ├── types/
    │   │   │   └── navigation.types.ts     // UI 相關型別
    │   │   └── index.ts
    │   │
    │   ├── analytics/                      // 分析功能模組
    │   │   ├── hooks/
    │   │   │   └── useTrackEvent.ts
    │   │   └── index.ts
    │   │
    │   └── auth/                           // 權限功能模組
    │       ├── hooks/
    │       │   └── usePermissions.ts
    │       └── index.ts
    ├── lib/                                    # (核心工具庫) 全域共享、與業務無關的底層工具函式
    │   ├── api.ts                              # ├─ 📞 **抽象化 API 客戶端**，根據環境變數切換真實或 Mock API
    │   ├── config/                             # ├─ 🔧 全域配置文件目錄
    │   │   ├── index.ts                        # │  ├─ 統一導出所有配置，方便引用
    │   │   ├── app.config.ts                   # │  ├─ 應用程式核心功能開關配置
    │   │   ├── locale.config.ts                # │  ├─ 語系與地理位置偵測相關配置
    │   │   ├── api.config.ts                   # │  ├─ API 端點與相關配置
    │   │   └── cache.config.ts                 # │  └─ 快取策略相關配置
    │   └── utils.ts                            # └─ 通用工具函式 (日期格式化、字串處理等)
    ├── hooks/                                  # (共享Hooks) 全域共享的 React Hooks (例如 useMediaQuery, useDebounce)
    ├── contexts/                               # (共享Context) 全域狀態管理 Context (例如 AuthContext, ThemeContext)
    ├── providers/                              # (共享Provider) 集中管理所有 Context Provider 的組件
    ├── constants/                              # (共享常數) 全域使用的常數 (例如 Cookie 名稱、API 路徑、事件名稱)
    ├── i18n/                                   # (國際化配置) next-intl 的核心配置邏輯
    │   ├── routing.ts                          # 路由配置：定義支援的語系、預設語系和路徑前綴策略
    │   ├── locale-cookie.ts                    # Cookie 管理：處理使用者語系偏好的 Cookie 讀寫邏輯
    │   ├── navigation.ts                       # 導航組件：提供國際化的 Link、redirect、useRouter 等導航工具
    │   └── request.ts                          # 請求配置：next-intl 的 getRequestConfig，處理 SSR 語系決策和訊息載入
    ├── styles/                                 # (全域樣式) 全域 CSS 樣式、主題變數、字體定義
    │   ├── variables.css                       # │  ├─ CSS 變數定義 (顏色、字重、間距等)
    │   └── base.css                            # │  └─ 基礎元素樣式 (標題、段落、連結等預設樣式)
    ├── assets/                                 # (建置資源) 需要經由建置流程處理的靜態資源 (例如 Next/Image 使用的圖片)
    ├── types/                                  # (共享類型) 全域共享的 TypeScript 類型定義
    │   ├── api.ts                              # ├─ 📦 API 回應的類型定義 (PageData, Block, SEO 等)
    │   ├── i18n.ts                             # ├─ 國際化相關的類型
    │   ├── index.ts                            # ├─ 類型的統一導出點
    │   ├── locales.types.ts                    # ├─ 國家預設語系
    │   └── language.types.ts                   # └─ 語系資料與系統預設語系
    ├── middleware.ts                           # (請求中介層) Next.js 中間件，處理國際化路由、認證、地理位置重導向等
    └── env.mjs                                 # (環境變數) 🔒 使用 Zod 進行環境變數驗證，提供類型安全的 `env` 物件
```