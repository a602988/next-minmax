# Next.js API 驅動型商務網站完整目錄規劃

## 專案根目錄結構

```
my-business-website/
├── .env.local                          # 環境變數配置
├── .env.example                        # 環境變數範例
├── .gitignore                          # Git 忽略檔案
├── package.json                        # 專案依賴與腳本
├── next.config.js                      # Next.js 配置
├── tsconfig.json                       # TypeScript 配置
├── README.md                           # 專案說明文件
├── middleware.ts                       # Next.js 中介軟體
├── public/                             # 靜態資源
├── src/                                # 原始碼主目錄
├── mock-data/                          # 模擬數據
├── docs/                               # 開發文件
└── scripts/                            # 建置腳本
```

## 核心原始碼目錄 (src/)

### 1. 應用程式主目錄
```
src/
├── app/                                # Next.js 13+ App Router
│   ├── layout.tsx                      # 根佈局
│   ├── loading.tsx                     # 載入頁面
│   ├── error.tsx                       # 錯誤頁面
│   ├── not-found.tsx                   # 404 頁面
│   ├── page.tsx                        # 首頁
│   ├── globals.css                     # 全域樣式
│   ├── favicon.ico                     # 網站圖示
│   │
│   ├── [locale]/                       # 國際化路由
│   │   ├── layout.tsx                  # 語系佈局
│   │   ├── page.tsx                    # 語系首頁
│   │   ├── loading.tsx                 # 語系載入頁面
│   │   ├── error.tsx                   # 語系錯誤頁面
│   │   └── [[...slug]]/                # 動態路由 (Catch-all Routes)
│   │       ├── page.tsx                # 通用頁面組件
│   │       ├── loading.tsx             # 頁面載入中
│   │       └── error.tsx               # 頁面錯誤處理
│   │
│   ├── preview/                        # 預覽環境
│   │   ├── layout.tsx                  # 預覽佈局
│   │   ├── page.tsx                    # 預覽首頁
│   │   └── [[...slug]]/                # 預覽動態路由
│   │       └── page.tsx                # 預覽頁面
│   │
│   └── api/                            # API 路由
│       ├── auth/                       # 認證相關 API
│       │   ├── login/route.ts          # 登入端點
│       │   ├── logout/route.ts         # 登出端點
│       │   └── verify/route.ts         # 驗證端點
│       ├── content/                    # 內容 API
│       │   ├── [locale]/               # 語系內容
│       │   │   └── [[...slug]]/route.ts # 動態內容端點
│       │   └── preview/                # 預覽內容
│       │       └── [[...slug]]/route.ts
│       ├── i18n/                       # 國際化 API
│       │   ├── locales/route.ts        # 語系列表
│       │   └── translations/route.ts   # 翻譯內容
│       └── seo/                        # SEO 相關 API
│           ├── sitemap/route.ts        # 網站地圖
│           └── robots/route.ts         # robots.txt
```

### 2. 組件目錄
```
├── components/                         # UI 組件
│   ├── common/                         # 通用組件
│   │   ├── Header/                     # 網站標頭
│   │   │   ├── Header.tsx
│   │   │   ├── Header.module.css
│   │   │   └── index.ts
│   │   ├── Footer/                     # 網站頁腳
│   │   │   ├── Footer.tsx
│   │   │   ├── Footer.module.css
│   │   │   └── index.ts
│   │   ├── Navigation/                 # 導覽組件
│   │   │   ├── Navigation.tsx
│   │   │   ├── NavigationItem.tsx
│   │   │   ├── MobileNavigation.tsx
│   │   │   └── index.ts
│   │   ├── Loading/                    # 載入組件
│   │   │   ├── Spinner.tsx
│   │   │   ├── PageLoader.tsx
│   │   │   └── index.ts
│   │   ├── Error/                      # 錯誤處理組件
│   │   │   ├── ErrorBoundary.tsx
│   │   │   ├── ErrorMessage.tsx
│   │   │   └── index.ts
│   │   └── SEO/                        # SEO 組件
│   │       ├── MetaTags.tsx
│   │       ├── StructuredData.tsx
│   │       └── index.ts
│   │
│   ├── layout/                         # 佈局組件
│   │   ├── BaseLayout/                 # 基礎佈局
│   │   │   ├── BaseLayout.tsx
│   │   │   └── index.ts
│   │   ├── MainLayout/                 # 主要佈局
│   │   │   ├── MainLayout.tsx
│   │   │   └── index.ts
│   │   ├── BlogLayout/                 # 部落格佈局
│   │   │   ├── BlogLayout.tsx
│   │   │   └── index.ts
│   │   └── ProductLayout/              # 產品頁佈局
│   │       ├── ProductLayout.tsx
│   │       └── index.ts
│   │
│   ├── content/                        # 內容組件
│   │   ├── DynamicContent/             # 動態內容渲染器
│   │   │   ├── DynamicContent.tsx
│   │   │   ├── ContentRenderer.tsx
│   │   │   └── index.ts
│   │   ├── RichText/                   # 富文本組件
│   │   │   ├── RichText.tsx
│   │   │   └── index.ts
│   │   ├── MediaGallery/               # 媒體畫廊
│   │   │   ├── MediaGallery.tsx
│   │   │   ├── ImageGallery.tsx
│   │   │   └── index.ts
│   │   └── ContentBlocks/              # 內容區塊
│   │       ├── HeroBanner.tsx
│   │       ├── TextBlock.tsx
│   │       ├── ImageBlock.tsx
│   │       ├── VideoBlock.tsx
│   │       └── index.ts
│   │
│   ├── forms/                          # 表單組件
│   │   ├── ContactForm/                # 聯絡表單
│   │   │   ├── ContactForm.tsx
│   │   │   └── index.ts
│   │   ├── NewsletterForm/             # 電子報表單
│   │   │   ├── NewsletterForm.tsx
│   │   │   └── index.ts
│   │   └── SearchForm/                 # 搜尋表單
│   │       ├── SearchForm.tsx
│   │       └── index.ts
│   │
│   ├── ui/                             # 基礎 UI 組件
│   │   ├── Button/                     # 按鈕組件
│   │   │   ├── Button.tsx
│   │   │   ├── Button.module.css
│   │   │   └── index.ts
│   │   ├── Input/                      # 輸入框組件
│   │   │   ├── Input.tsx
│   │   │   ├── Input.module.css
│   │   │   └── index.ts
│   │   ├── Modal/                      # 對話框組件
│   │   │   ├── Modal.tsx
│   │   │   ├── Modal.module.css
│   │   │   └── index.ts
│   │   ├── Card/                       # 卡片組件
│   │   │   ├── Card.tsx
│   │   │   ├── Card.module.css
│   │   │   └── index.ts
│   │   └── Typography/                 # 文字組件
│   │       ├── Heading.tsx
│   │       ├── Paragraph.tsx
│   │       ├── Link.tsx
│   │       └── index.ts
│   │
│   └── business/                       # 商務專用組件
│       ├── ProductCard/                # 產品卡片
│       │   ├── ProductCard.tsx
│       │   └── index.ts
│       ├── ServiceCard/                # 服務卡片
│       │   ├── ServiceCard.tsx
│       │   └── index.ts
│       ├── TestimonialCard/            # 見證卡片
│       │   ├── TestimonialCard.tsx
│       │   └── index.ts
│       ├── TeamMember/                 # 團隊成員
│       │   ├── TeamMember.tsx
│       │   └── index.ts
│       └── PricingCard/                # 價格卡片
│           ├── PricingCard.tsx
│           └── index.ts
```

### 3. 核心功能模組
```
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
│   ├── i18n/                           # 國際化
│   │   ├── config.ts                   # i18n 配置
│   │   ├── provider.tsx                # i18n 提供者
│   │   ├── hooks.ts                    # i18n Hooks
│   │   ├── utils.ts                    # i18n 工具函數
│   │   ├── locale-detector.ts          # 語系偵測
│   │   └── types.ts                    # i18n 類型
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
│   ├── utils/                          # 工具函數
│   │   ├── format.ts                   # 格式化工具
│   │   ├── validation.ts               # 驗證工具
│   │   ├── date.ts                     # 日期工具
│   │   ├── string.ts                   # 字串工具
│   │   ├── url.ts                      # URL 工具
│   │   └── constants.ts                # 常數定義
│   │
│   └── hooks/                          # 自定義 Hooks
│       ├── useApi.ts                   # API Hook
│       ├── useContent.ts               # 內容 Hook
│       ├── useAuth.ts                  # 認證 Hook
│       ├── useI18n.ts                  # i18n Hook
│       ├── usePreview.ts               # 預覽 Hook
│       ├── useSEO.ts                   # SEO Hook
│       └── useLocalStorage.ts          # 本地儲存 Hook
```

### 4. 類型定義與介面
```
├── types/                              # TypeScript 類型定義
│   ├── api.ts                          # API 相關類型
│   ├── content.ts                      # 內容相關類型
│   ├── auth.ts                         # 認證相關類型
│   ├── i18n.ts                         # 國際化相關類型
│   ├── layout.ts                       # 佈局相關類型
│   ├── seo.ts                          # SEO 相關類型
│   ├── common.ts                       # 通用類型
│   └── index.ts                        # 類型匯出
```

### 5. 樣式與主題
```
├── styles/                             # 樣式檔案
│   ├── globals.css                     # 全域樣式
│   ├── variables.css                   # CSS 變數
│   ├── components.css                  # 組件樣式
│   ├── layouts.css                     # 佈局樣式
│   ├── themes/                         # 主題系統
│   │   ├── default.css                 # 預設主題
│   │   ├── dark.css                    # 暗色主題
│   │   └── custom.css                  # 自定義主題
│   └── responsive.css                  # 響應式樣式
```

## 模擬數據目錄 (mock-data/)

```
mock-data/
├── content/                            # 內容模擬數據
│   ├── pages/                          # 頁面數據
│   │   ├── en/                         # 英文頁面
│   │   │   ├── home.json
│   │   │   ├── about.json
│   │   │   ├── services.json
│   │   │   └── contact.json
│   │   ├── zh/                         # 中文頁面
│   │   │   ├── home.json
│   │   │   ├── about.json
│   │   │   ├── services.json
│   │   │   └── contact.json
│   │   └── shared/                     # 共享數據
│   │       ├── navigation.json
│   │       └── footer.json
│   │
│   ├── layouts/                        # 佈局配置
│   │   ├── main-layout.json
│   │   ├── blog-layout.json
│   │   └── product-layout.json
│   │
│   ├── components/                     # 組件數據
│   │   ├── hero-banner.json
│   │   ├── feature-cards.json
│   │   └── testimonials.json
│   │
│   └── business/                       # 商務數據
│       ├── products.json
│       ├── services.json
│       ├── team.json
│       └── pricing.json
│
├── translations/                       # 翻譯檔案
│   ├── en/                             # 英文翻譯
│   │   ├── common.json
│   │   ├── navigation.json
│   │   ├── forms.json
│   │   └── errors.json
│   ├── zh/                             # 中文翻譯
│   │   ├── common.json
│   │   ├── navigation.json
│   │   ├── forms.json
│   │   └── errors.json
│   └── config.json                     # 語系配置
│
├── auth/                               # 認證模擬數據
│   ├── users.json                      # 使用者數據
│   ├── tokens.json                     # 令牌數據
│   └── permissions.json                # 權限數據
│
└── seo/                                # SEO 模擬數據
    ├── meta-tags.json                  # 元標籤
    ├── sitemap.json                    # 網站地圖
    └── structured-data.json            # 結構化數據
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

## 配置檔案

### 1. Next.js 配置 (next.config.js)
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // 國際化配置
  i18n: {
    locales: ['en', 'zh', 'ja'],
    defaultLocale: 'en',
    domains: [
      {
        domain: 'example.com',
        defaultLocale: 'en',
      },
      {
        domain: 'example.tw',
        defaultLocale: 'zh',
      },
    ],
  },
  
  // 圖片優化
  images: {
    domains: ['api.example.com'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // 環境變數
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    PREVIEW_SECRET: process.env.PREVIEW_SECRET,
  },
  
  // 重寫規則
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.API_BASE_URL}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
```

### 2. 環境變數配置 (.env.local)
```
# API 配置
API_BASE_URL=https://api.example.com
API_TIMEOUT=10000

# 認證配置
JWT_SECRET=your-jwt-secret
OAUTH_CLIENT_ID=your-oauth-client-id
OAUTH_CLIENT_SECRET=your-oauth-client-secret

# 預覽配置
PREVIEW_SECRET=your-preview-secret
PREVIEW_MODE=true

# 國際化配置
DEFAULT_LOCALE=en
SUPPORTED_LOCALES=en,zh,ja

# SEO 配置
SITE_URL=https://example.com
SITE_NAME=Your Business Website

# 開發模式
NODE_ENV=development
MOCK_API=true
```

### 3. TypeScript 配置 (tsconfig.json)
```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/lib/*": ["./src/lib/*"],
      "@/types/*": ["./src/types/*"],
      "@/mock-data/*": ["./mock-data/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### 4. Package.json 依賴配置
```json
{
  "name": "business-website",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit",
    "test": "jest",
    "test:watch": "jest --watch"
  },
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "axios": "^1.0.0",
    "swr": "^2.0.0",
    "next-auth": "^4.0.0",
    "next-i18next": "^13.0.0",
    "react-hook-form": "^7.0.0",
    "tailwindcss": "^3.0.0",
    "framer-motion": "^10.0.0"
  },
  "devDependencies": {
    "@types/node": "^18.0.0",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "typescript": "^5.0.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "^14.0.0",
    "jest": "^29.0.0",
    "@testing-library/react": "^13.0.0"
  }
}
```

## 開發文件目錄 (docs/)

```
docs/
├── README.md                           # 專案說明
├── API_INTEGRATION.md                  # API 整合指南
├── DEPLOYMENT.md                       # 部署指南
├── DEVELOPMENT.md                      # 開發指南
├── I18N_GUIDE.md                       # 國際化指南
├── COMPONENT_GUIDE.md                  # 組件使用指南
├── SEO_GUIDE.md                        # SEO 優化指南
├── PREVIEW_GUIDE.md                    # 預覽功能指南
└── TROUBLESHOOTING.md                  # 問題排除指南
```

## 建置腳本目錄 (scripts/)

```
scripts/
├── build.sh                           # 建置腳本
├── deploy.sh                          # 部署腳本
├── generate-types.js                  # 類型生成腳本
├── generate-sitemap.js                # 網站地圖生成腳本
├── mock-server.js                     # 模擬伺服器腳本
└── i18n-extract.js                    # 翻譯文本提取腳本
```

## 主要特色與功能

### 1. API 驅動架構
- 所有內容通過 API 動態載入
- 支援模擬數據開發模式
- 靈活的內容管理系統整合

### 2. 動態路由系統
- 使用 Catch-all Routes 處理任意深度 URL
- 支援多語系路由結構
- 自動 SEO 優化

### 3. 國際化支援
- 完整的多語系架構
- 自動語系偵測
- URL 參數化語系切換

### 4. 預覽功能
- 獨立的預覽環境
- 認證保護的預覽頁面
- 即時內容預覽

### 5. SEO 優化
- 伺服器端渲染 (SSR)
- 動態元標籤生成
- 結構化數據支援
- 自動網站地圖生成

### 6. 認證系統
- 多種認證方式支援
- JWT 和 OAuth 整合
- 安全的權限管理

### 7. 模組化設計
- 可重用的組件架構
- 清晰的關注點分離
- 易於維護和擴展

這個架構提供了一個完整、可擴展且易於維護的 Next.js 商務網站解決方案，完全符合您的 API 驅動需求。
