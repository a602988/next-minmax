# Next.js API 驅動型商務網站完整目錄規劃

## 專案根目錄結構

```
my-business-website/
├── .env.local                          # 本地環境變數
├── .env.example                        # 環境變數範例
├── .env.development                    # 開發環境變數
├── .env.production                     # 生產環境變數
├── .gitignore                          # Git 忽略檔案
├── package.json                        # 專案依賴與腳本
├── next.config.ts                      # Next.js 配置 (TypeScript)
├── tsconfig.json                       # TypeScript 配置
├── tailwind.config.ts                  # Tailwind CSS 配置
├── postcss.config.mjs                  # PostCSS 配置
├── eslint.config.mjs                   # ESLint 配置
├── README.md                           # 專案說明文件
├── messages/                           # 國際化翻譯檔案
├── public/                             # 靜態資源
│   ├── images/                         # 圖片資源
│   │   ├── logos/                      # 標誌圖片
│   │   ├── banners/                    # 橫幅圖片
│   │   ├── products/                   # 產品圖片
│   │   ├── team/                       # 團隊照片
│   │   └── icons/                      # 圖示
│   ├── videos/                         # 影片資源
│   ├── documents/                      # 文件資源
│   └── fonts/                          # 字體檔案
├── src/                                # 原始碼主目錄
│   ├── app/                            # Next.js 14 App Router
│   │   ├── [locale]/                   # 國際化路由
│   │   │   └── [[...slug]]/            # 動態路由 (Catch-all Routes)
│   │   ├── preview/                    # 預覽環境
│   │   │   └── [[...slug]]/            # 預覽動態路由
│   │   └── api/                        # API 路由
│   │       ├── auth/                   # 認證相關 API
│   │       ├── content/                # 內容 API
│   │       ├── i18n/                   # 國際化 API
│   │       └── seo/                    # SEO 相關 API
│   ├── components/                     # UI 組件
│   │   ├── common/                     # 通用組件
│   │   ├── layout/                     # 佈局組件
│   │   ├── content/                    # 內容組件
│   │   ├── forms/                      # 表單組件
│   │   ├── ui/                         # 基礎 UI 組件
│   │   └── business/                   # 商務專用組件
│   ├── hooks/                          # 自定義 Hooks
│   ├── contexts/                       # React Context
│   ├── providers/                      # Provider 組件
│   ├── constants/                      # 常數定義
│   ├── i18n/                           # 國際化
│   ├── lib/                            # 核心功能庫
│   │   ├── api/                        # API 相關
│   │   ├── auth/                       # 認證系統
│   │   ├── content/                    # 內容管理
│   │   ├── seo/                        # SEO 優化
│   │   └── utils/                      # 工具函數
│   ├── types/                          # TypeScript 類型定義
│   ├── styles/                         # 樣式檔案
│   │   ├── themes/                     # 主題系統
│   │   └── vendor/                     # 第三方樣式覆寫
│   ├── services/                       # 業務邏輯服務
│   │   ├── core/                       # 核心服務
│   │   ├── fallback/                   # 備援服務
│   │   ├── shared/                     # 共享服務
│   │   │   └── auth/                   # 認證服務
│   │   └── business/                   # 商務邏輯服務
│   ├── data/                           # 數據配置
│   │   ├── json/                       # JSON 數據
│   │   ├── schemas/                    # 數據結構定義
│   │   └── fixtures/                   # 測試數據
│   └── mock-data/                      # 模擬數據
│       ├── content/                    # 內容模擬數據
│       ├── api/                        # API 模擬響應
│       │   ├── responses/              # API 響應數據
│       │   └── errors/                 # 錯誤響應
│       ├── auth/                       # 認證模擬數據
│       └── seo/                        # SEO 模擬數據
├── tests/                              # 測試目錄
│   ├── components/                     # 組件測試
│   ├── hooks/                          # Hook 測試
│   ├── lib/                            # 核心功能測試
│   ├── pages/                          # 頁面測試
│   ├── integration/                    # 整合測試
│   ├── e2e/                            # 端到端測試
│   ├── fixtures/                       # 測試數據
│   └── utils/                          # 測試工具
├── docs/                               # 開發文件
│   ├── development/                    # 開發指南
│   ├── architecture/                   # 架構文件
│   └── deployment/                     # 部署文件
└── scripts/                            # 建置腳本
    ├── build/                          # 建置腳本
    ├── deploy/                         # 部署腳本
    ├── data/                           # 數據處理腳本
    ├── i18n/                           # 國際化腳本
    └── utils/                          # 工具腳本
```

## 國際化翻譯檔案 (messages/)

```
messages/
├── en.json                             # 英文翻譯
├── zh.json                             # 中文翻譯
├── ja.json                             # 日文翻譯
└── config.json                         # 語系配置
```

## 核心原始碼目錄 (src/)

### 1. 應用程式主目錄 (app/)

```
src/app/
├── layout.tsx                          # 根佈局
├── loading.tsx                         # 載入頁面
├── error.tsx                           # 錯誤頁面
├── not-found.tsx                       # 404 頁面
├── page.tsx                            # 首頁
├── globals.css                         # 全域樣式
├── favicon.ico                         # 網站圖示
├── middleware.ts                       # Next.js 中介軟體
│
├── [locale]/                           # 國際化路由
│   ├── layout.tsx                      # 語系佈局
│   ├── page.tsx                        # 語系首頁
│   ├── loading.tsx                     # 語系載入頁面
│   ├── error.tsx                       # 語系錯誤頁面
│   └── [[...slug]]/                    # 動態路由 (Catch-all Routes)
│       ├── page.tsx                    # 通用頁面組件
│       ├── loading.tsx                 # 頁面載入中
│       └── error.tsx                   # 頁面錯誤處理
│
├── preview/                            # 預覽環境
│   ├── layout.tsx                      # 預覽佈局
│   ├── page.tsx                        # 預覽首頁
│   └── [[...slug]]/                    # 預覽動態路由
│       └── page.tsx                    # 預覽頁面
│
└── api/                                # API 路由
    ├── auth/                           # 認證相關 API
    │   └── route.ts                    # 統一認證端點
    ├── content/                        # 內容 API
    │   └── [...slug]/route.ts          # 動態內容端點
    ├── i18n/                           # 國際化 API
    │   └── route.ts                    # 語系與翻譯端點
    └── seo/                            # SEO 相關 API
        └── route.ts                    # SEO 數據端點
```

### 2. 組件目錄 (components/)

```
src/components/
├── common/                             # 通用組件
│   ├── Header/                         # 網站標頭
│   │   ├── Header.tsx
│   │   ├── Header.module.css
│   │   └── index.ts
│   ├── Footer/                         # 網站頁腳
│   │   ├── Footer.tsx
│   │   ├── Footer.module.css
│   │   └── index.ts
│   ├── Navigation/                     # 導覽組件
│   │   ├── Navigation.tsx
│   │   ├── NavigationItem.tsx
│   │   ├── MobileNavigation.tsx
│   │   └── index.ts
│   ├── Loading/                        # 載入組件
│   │   ├── Spinner.tsx
│   │   ├── PageLoader.tsx
│   │   └── index.ts
│   ├── Error/                          # 錯誤處理組件
│   │   ├── ErrorBoundary.tsx
│   │   ├── ErrorMessage.tsx
│   │   └── index.ts
│   └── SEO/                            # SEO 組件
│       ├── MetaTags.tsx
│       ├── StructuredData.tsx
│       └── index.ts
│
├── layout/                             # 佈局組件
│   ├── BaseLayout/                     # 基礎佈局
│   │   ├── BaseLayout.tsx
│   │   └── index.ts
│   ├── MainLayout/                     # 主要佈局
│   │   ├── MainLayout.tsx
│   │   └── index.ts
│   ├── BlogLayout/                     # 部落格佈局
│   │   ├── BlogLayout.tsx
│   │   └── index.ts
│   └── ProductLayout/                  # 產品頁佈局
│       ├── ProductLayout.tsx
│       └── index.ts
│
├── content/                            # 內容組件
│   ├── DynamicContent/                 # 動態內容渲染器
│   │   ├── DynamicContent.tsx
│   │   ├── ContentRenderer.tsx
│   │   └── index.ts
│   ├── RichText/                       # 富文本組件
│   │   ├── RichText.tsx
│   │   └── index.ts
│   ├── MediaGallery/                   # 媒體畫廊
│   │   ├── MediaGallery.tsx
│   │   ├── ImageGallery.tsx
│   │   └── index.ts
│   └── ContentBlocks/                  # 內容區塊
│       ├── HeroBanner.tsx
│       ├── TextBlock.tsx
│       ├── ImageBlock.tsx
│       ├── VideoBlock.tsx
│       └── index.ts
│
├── forms/                              # 表單組件
│   ├── ContactForm/                    # 聯絡表單
│   │   ├── ContactForm.tsx
│   │   └── index.ts
│   ├── NewsletterForm/                 # 電子報表單
│   │   ├── NewsletterForm.tsx
│   │   └── index.ts
│   └── SearchForm/                     # 搜尋表單
│       ├── SearchForm.tsx
│       └── index.ts
│
├── ui/                                 # 基礎 UI 組件
│   ├── Button/                         # 按鈕組件
│   │   ├── Button.tsx
│   │   ├── Button.module.css
│   │   └── index.ts
│   ├── Input/                          # 輸入框組件
│   │   ├── Input.tsx
│   │   ├── Input.module.css
│   │   └── index.ts
│   ├── Modal/                          # 對話框組件
│   │   ├── Modal.tsx
│   │   ├── Modal.module.css
│   │   └── index.ts
│   ├── Card/                           # 卡片組件
│   │   ├── Card.tsx
│   │   ├── Card.module.css
│   │   └── index.ts
│   └── Typography/                     # 文字組件
│       ├── Heading.tsx
│       ├── Paragraph.tsx
│       ├── Link.tsx
│       └── index.ts
│
└── business/                           # 商務專用組件
    ├── ProductCard/                    # 產品卡片
    │   ├── ProductCard.tsx
    │   └── index.ts
    ├── ServiceCard/                    # 服務卡片
    │   ├── ServiceCard.tsx
    │   └── index.ts
    ├── TestimonialCard/                # 見證卡片
    │   ├── TestimonialCard.tsx
    │   └── index.ts
    ├── TeamMember/                     # 團隊成員
    │   ├── TeamMember.tsx
    │   └── index.ts
    └── PricingCard/                    # 價格卡片
        ├── PricingCard.tsx
        └── index.ts
```

### 3. 核心功能模組

```
src/
├── hooks/                              # 自定義 Hooks
│   ├── useApi.ts                       # API Hook
│   ├── useContent.ts                   # 內容 Hook
│   ├── useAuth.ts                      # 認證 Hook
│   ├── useI18n.ts                      # i18n Hook
│   ├── usePreview.ts                   # 預覽 Hook
│   ├── useSEO.ts                       # SEO Hook
│   └── useLocalStorage.ts              # 本地儲存 Hook
│
├── contexts/                           # React Context
│   ├── GlobalContext.tsx               # 全域狀態
│   ├── ThemeContext.tsx                # 主題狀態
│   └── AuthContext.tsx                 # 認證狀態
│
├── providers/                          # Provider 組件
│   ├── IntlProvider.tsx                # 國際化提供者
│   ├── ThemeProvider.tsx               # 主題提供者
│   └── AuthProvider.tsx                # 認證提供者
│
├── constants/                          # 常數定義
│   ├── routes.ts                       # 路由常數
│   ├── config.ts                       # 應用配置
│   ├── api.ts                          # API 端點常數
│   ├── locales.ts                      # 語系常數
│   └── seo.ts                          # SEO 常數
│
├── i18n/                               # 國際化
│   ├── config.ts                       # i18n 配置
│   ├── request.tsx                     # 伺服器端 i18n
│   ├── routing.ts                      # 路由配置
│   ├── navigation.ts                   # 導航工具
│   └── types.ts                        # i18n 類型
│
├── lib/                                # 核心功能庫
│   ├── api/                            # API 相關
│   │   ├── client.ts                   # API 客戶端
│   │   ├── endpoints.ts                # API 端點配置
│   │   ├── types.ts                    # API 類型定義
│   │   ├── error-handler.ts            # 錯誤處理
│   │   └── mock-adapter.ts             # 模擬數據適配器
│   │
│   ├── auth/                           # 認證系統
│   │   ├── auth-config.ts              # 認證配置
│   │   ├── auth-provider.tsx           # 認證提供者
│   │   ├── auth-hooks.ts               # 認證 Hooks
│   │   ├── jwt-utils.ts                # JWT 工具
│   │   ├── oauth-handlers.ts           # OAuth 處理器
│   │   └── types.ts                    # 認證類型
│   │
│   ├── content/                        # 內容管理
│   │   ├── content-manager.ts          # 內容管理器
│   │   ├── layout-resolver.ts          # 佈局解析器
│   │   ├── content-parser.ts           # 內容解析器
│   │   ├── preview-handler.ts          # 預覽處理器
│   │   └── types.ts                    # 內容類型
│   │
│   ├── seo/                            # SEO 優化
│   │   ├── metadata-generator.ts       # 元數據生成器
│   │   ├── sitemap-generator.ts        # 網站地圖生成器
│   │   ├── structured-data.ts          # 結構化數據
│   │   ├── robots-generator.ts         # robots.txt 生成器
│   │   └── types.ts                    # SEO 類型
│   │
│   └── utils/                          # 工具函數
│       ├── format.ts                   # 格式化工具
│       ├── validation.ts               # 驗證工具
│       ├── date.ts                     # 日期工具
│       ├── string.ts                   # 字串工具
│       ├── url.ts                      # URL 工具
│       └── constants.ts                # 常數定義
│
├── types/                              # TypeScript 類型定義
│   ├── api.ts                          # API 相關類型
│   ├── content.ts                      # 內容相關類型
│   ├── auth.ts                         # 認證相關類型
│   ├── i18n.ts                         # 國際化相關類型
│   ├── layout.ts                       # 佈局相關類型
│   ├── seo.ts                          # SEO 相關類型
│   ├── common.ts                       # 通用類型
│   └── index.ts                        # 類型匯出
│
├── styles/                             # 樣式檔案
│   ├── globals.css                     # 全域樣式 (包含 Tailwind 指令)
│   ├── base.css                        # 基礎樣式重置
│   ├── utilities.css                   # 自定義工具類
│   ├── components.css                  # 組件層樣式
│   ├── layouts.css                     # 佈局專用樣式
│   ├── animations.css                  # 動畫與過渡效果
│   ├── themes/                         # 主題系統
│   │   ├── light.css                   # 亮色主題 (CSS 變數)
│   │   ├── dark.css                    # 暗色主題 (CSS 變數)
│   │   └── theme-variables.css         # 主題變數定義
│   ├── vendor/                         # 第三方樣式覆寫
│   │   ├── prism.css                   # 程式碼高亮
│   │   └── swiper.css                  # 輪播組件
│   └── print.css                       # 列印樣式
│
├── services/                           # 業務邏輯服務
│   ├── core/                           # 核心服務
│   │   ├── api-error-handler.ts        # API 錯誤處理
│   │   ├── cache-manager.ts            # 快取管理
│   │   ├── http-client.ts              # HTTP 客戶端
│   │   └── timeout-manager.ts          # 超時管理
│   │
│   ├── fallback/                       # 備援服務
│   │   ├── data-loader.ts              # 數據載入器
│   │   └── error-recovery.ts           # 錯誤恢復
│   │
│   ├── shared/                         # 共享服務
│   │   └── auth/                       # 認證服務
│   │       ├── auth-service.ts         # 認證服務
│   │       └── token-manager.ts        # 令牌管理
│   │
│   └── business/                       # 商務邏輯服務
│       ├── content-service.ts          # 內容服務
│       ├── user-service.ts             # 用戶服務
│       ├── product-service.ts          # 產品服務
│       └── analytics-service.ts        # 分析服務
│
├── data/                               # 數據配置
│   ├── json/                           # JSON 數據
│   │   ├── defaultLanguages.json       # 預設語系
│   │   ├── navigation.json             # 導航配置
│   │   └── siteConfig.json             # 網站配置
│   │
│   ├── schemas/                        # 數據結構定義
│   │   ├── content.schema.json         # 內容結構
│   │   ├── user.schema.json            # 用戶結構
│   │   └── product.schema.json         # 產品結構
│   │
│   └── fixtures/                       # 測試數據
│       ├── users.json                  # 測試用戶
│       ├── content.json                # 測試內容
│       └── products.json               # 測試產品
│
└── mock-data/                          # 模擬數據 (詳細結構見下節)
```

## 模擬數據目錄 (src/mock-data/)

```
src/mock-data/
├── content/                            # 內容模擬數據
│   ├── pages/                          # 頁面數據
│   │   ├── en/                         # 英文頁面
│   │   │   ├── home.json
│   │   │   ├── about.json
│   │   │   ├── services.json
│   │   │   ├── products.json
│   │   │   ├── blog.json
│   │   │   └── contact.json
│   │   ├── zh/                         # 中文頁面
│   │   │   ├── home.json
│   │   │   ├── about.json
│   │   │   ├── services.json
│   │   │   ├── products.json
│   │   │   ├── blog.json
│   │   │   └── contact.json
│   │   ├── ja/                         # 日文頁面
│   │   │   ├── home.json
│   │   │   ├── about.json
│   │   │   ├── services.json
│   │   │   ├── products.json
│   │   │   ├── blog.json
│   │   │   └── contact.json
│   │   └── shared/                     # 共享數據
│   │       ├── navigation.json
│   │       ├── footer.json
│   │       └── global-settings.json
│   │
│   ├── layouts/                        # 佈局配置
│   │   ├── main-layout.json
│   │   ├── blog-layout.json
│   │   ├── product-layout.json
│   │   └── landing-layout.json
│   │
│   ├── components/                     # 組件數據
│   │   ├── hero-banner.json
│   │   ├── feature-cards.json
│   │   ├── testimonials.json
│   │   ├── call-to-action.json
│   │   └── newsletter.json
│   │
│   └── business/                       # 商務數據
│       ├── products.json
│       ├── services.json
│       ├── team.json
│       ├── pricing.json
│       ├── case-studies.json
│       └── partners.json
│
├── api/                                # API 模擬響應
│   ├── responses/                      # API 響應數據
│   │   ├── content/
│   │   │   ├── pages.json
│   │   │   ├── components.json
│   │   │   └── layouts.json
│   │   ├── auth/
│   │   │   ├── login.json
│   │   │   ├── register.json
│   │   │   └── profile.json
│   │   └── business/
│   │       ├── products.json
│   │       ├── services.json
│   │       └── analytics.json
│   │
│   └── errors/                         # 錯誤響應
│       ├── 400.json
│       ├── 401.json
│       ├── 404.json
│       └── 500.json
│
├── auth/                               # 認證模擬數據
│   ├── users.json                      # 使用者數據
│   ├── tokens.json                     # 令牌數據
│   ├── permissions.json                # 權限數據
│   └── sessions.json                   # 會話數據
│
└── seo/                                # SEO 模擬數據
    ├── meta-tags.json                  # 元標籤
    ├── sitemap.json                    # 網站地圖
    ├── structured-data.json            # 結構化數據
    └── robots.json                     # robots.txt 配置
```

## 靜態資源目錄 (public/)

```
public/
├── images/                             # 圖片資源
│   ├── logos/                          # 標誌圖片
│   ├── banners/                        # 橫幅圖片
│   ├── products/                       # 產品圖片
│   ├── team/                           # 團隊照片
│   └── icons/                          # 圖示
├── videos/                             # 影片資源
├── documents/                          # 文件資源
├── fonts/                              # 字體檔案
├── favicon.ico                         # 網站圖示
├── robots.txt                          # 搜尋引擎檔案
└── sitemap.xml                         # 網站地圖
```

## 測試目錄 (tests/)

```
tests/
├── components/                         # 組件測試
│   ├── common/                         # 通用組件測試
│   │   ├── Header.test.tsx
│   │   ├── Footer.test.tsx
│   │   └── Navigation.test.tsx
│   ├── ui/                             # UI 組件測試
│   │   ├── Button.test.tsx
│   │   ├── Input.test.tsx
│   │   └── Modal.test.tsx
│   └── business/                       # 商務組件測試
│       ├── ProductCard.test.tsx
│       └── PricingCard.test.tsx
├── hooks/                              # Hook 測試
│   ├── useApi.test.ts
│   ├── useAuth.test.ts
│   └── useI18n.test.ts
├── lib/                                # 核心功能測試
│   ├── api/
│   │   ├── client.test.ts
│   │   └── error-handler.test.ts
│   ├── auth/
│   │   ├── auth-provider.test.tsx
│   │   └── jwt-utils.test.ts
│   └── utils/
│       ├── format.test.ts
│       └── validation.test.ts
├── pages/                              # 頁面測試
│   ├── home.test.tsx
│   ├── about.test.tsx
│   └── contact.test.tsx
├── integration/                        # 整合測試
│   ├── api-integration.test.ts
│   ├── auth-flow.test.ts
│   └── i18n-integration.test.ts
├── e2e/                                # 端到端測試
│   ├── user-journey.test.ts
│   ├── navigation.test.ts
│   └── forms.test.ts
├── fixtures/                           # 測試數據
│   ├── mock-content.json
│   ├── mock-users.json
│   └── mock-api-responses.json
└── utils/                              # 測試工具
    ├── test-utils.tsx
    ├── mock-providers.tsx
    └── setup.ts
```

## 開發文件目錄 (docs/)

```
docs/
├── README.md                           # 專案總覽
├── CONTRIBUTING.md                     # 貢獻指南
├── DEPLOYMENT.md                       # 部署指南
├── CHANGELOG.md                        # 更新日誌
├── development/                        # 開發指南
│   ├── setup.md                        # 環境設置
│   ├── coding-standards.md             # 編碼規範
│   ├── testing.md                      # 測試指南
│   └── debugging.md                    # 除錯指南
├── architecture/                       # 架構文件
│   ├── overview.md                     # 架構總覽
│   ├── data-flow.md                    # 數據流程
│   ├── routing.md                      # 路由設計
│   └── state-management.md             # 狀態管理
└── deployment/                         # 部署文件
    ├── environments.md                 # 環境配置
    ├── ci-cd.md                        # CI/CD 流程
    └── monitoring.md                   # 監控設置
```

## 建置腳本目錄 (scripts/)

```
scripts/
├── build/                              # 建置腳本
│   ├── build-production.sh             # 生產環境建置
│   ├── build-staging.sh                # 測試環境建置
│   └── build-development.sh            # 開發環境建置
├── deploy/                             # 部署腳本
│   ├── deploy-production.sh            # 生產環境部署
│   ├── deploy-staging.sh               # 測試環境部署
│   └── rollback.sh                     # 回滾腳本
├── data/                               # 數據處理腳本
│   ├── generate-mock-data.js           # 生成模擬數據
│   ├── migrate-content.js              # 內容遷移
│   └── validate-data.js                # 數據驗證
├── i18n/                               # 國際化腳本
│   ├── extract-messages.js             # 提取翻譯訊息
│   ├── sync-translations.js            # 同步翻譯
│   └── validate-translations.js        # 驗證翻譯
└── utils/                              # 工具腳本
    ├── clean-cache.sh                  # 清理快取
    ├── generate-sitemap.js             # 生成網站地圖
    └── optimize-images.js              # 圖片優化
```
