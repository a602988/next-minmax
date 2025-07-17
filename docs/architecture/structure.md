# Next.js API 驅動型商務網站完整目錄規劃-「功能導向」或「領域驅動」的結構

## 專案根目錄結構

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
│   ├── features/                       # (核心業務) 各項業務功能模組
│   ├── lib/                            # (核心工具庫) 全域共享、與業務無關的底層工具函式
│   ├── hooks/                          # (共享Hooks) 全域共享的 Hooks
│   ├── contexts/                       # (共享Context) 全域狀態管理 Context
│   ├── providers/                      # 全域 Provider 集合
│   ├── constants/                      # 全域常數
│   ├── i18n/                           # 國際化配置與核心邏輯
│   ├── styles/                         # 全域樣式與主題配置
│   ├── types/                          # 全域共享的 TypeScript 類型定義
│   ├── middleware.ts                   # Next.js 中間件 (認證、國際化等)
│   └── env.mjs                         # 環境變數驗證與類型定義 (使用 Zod)
└── tests/                              # (高層級測試) 端到端 (E2E) 與整合 (Integration) 測試
```


##  app/ (核心路由)

此目錄結構不變，但頁面組件的依賴會從各處匯入，改為主要從 features/ 和 components/ 匯入。api/ 目錄被簡化，許多後端邏輯轉移到 features 內的 Server Actions。

```
src/app/
├── [locale]/                           # 國際化路由
│   ├── layout.tsx                      # 根佈局 (會使用 providers)
│   ├── page.tsx                        # 首頁 (會組合多個 features 的組件)
│   ├── loading.tsx                     # 全域載入頁面
│   ├── error.tsx                       # 全域錯誤頁面
│   ├── not-found.tsx                   # 404 頁面
│   ├── about/                          # 關於我們頁面
│   │   └── page.tsx
│   ├── products/                       # 產品相關頁面
│   │   ├── page.tsx                    # 產品列表
│   │   ├── loading.tsx                 # 產品載入頁面
│   │   └── [id]/                       # 產品詳情
│   │       ├── page.tsx
│   │       └── loading.tsx
│   ├── dashboard/                      # 需要認證的頁面
│   │   ├── layout.tsx                  # 儀表板佈局
│   │   ├── page.tsx
│   │   └── profile/
│   │       └── page.tsx
│   ├── [[...slug]]/                    # 動態內容頁面 (CMS)
│   │   └── page.tsx
│   └── sitemap.xml/                    # 動態 Sitemap
│       └── route.ts
├── api/                                # (簡化) 僅保留必要的 API 路由
│   ├── auth/                           # NextAuth.js 路由
│   │   └── [...nextauth]/
│   │       └── route.ts
│   ├── webhook/                        # 第三方 Webhook
│   │   ├── stripe/
│   │   │   └── route.ts
│   │   └── cms/
│   │       └── route.ts
│   └── health/                         # 健康檢查
│       └── route.ts
├── layout.tsx                          # 根佈局
├── globals.css                         # 全域樣式
├── favicon.ico                         # 網站圖示
```

##  components/ (共享UI)
只存放純粹的、與業務邏輯無關、可在專案中任何地方重複使用的 UI 組件。

```
src/components/
├── ui/                                 # 基礎 UI 原子組件 (Atom)
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.stories.tsx          # 📚 Storybook 故事
│   │   └── Button.test.tsx
│   ├── Input/
│   │   ├── Input.tsx
│   │   ├── Input.stories.tsx
│   │   └── Input.test.tsx
│   ├── Card/
│   ├── Modal/
│   ├── Typography/
│   ├── Loading/                        # 載入指示器
│   ├── ErrorBoundary/                  # 錯誤邊界組件
│   └── index.ts                        # 統一匯出
├── layout/                             # 佈局相關組件
│   ├── Header/
│   │   ├── Header.tsx
│   │   └── Header.test.tsx
│   ├── Footer/
│   ├── Sidebar/
│   ├── PageWrapper/
│   └── Grid/
└── feedback/                           # 反饋組件
    ├── Toast/
    ├── Alert/
    └── Notification/

```


##  features/ (核心業務)
專案的核心！每個子目錄代表一個獨立的業務功能。


```
src/features/
├── products/                           # 產品功能
│   ├── components/
│   │   ├── ProductCard.tsx
│   │   ├── ProductList.tsx
│   │   ├── ProductDetails.tsx
│   │   ├── ProductFilters.tsx          # 產品篩選器
│   │   └── ProductCard.test.tsx
│   ├── hooks/
│   │   ├── useProducts.ts
│   │   ├── useProductFilters.ts
│   │   └── useProductSearch.ts
│   ├── services/
│   │   └── products.service.ts
│   ├── actions.ts                      # Server Actions
│   ├── constants.ts                    # 產品相關常數
│   ├── utils.ts                        # 產品相關工具函數
│   └── types.ts
│
├── cart/                               # 購物車功能
│   ├── components/
│   │   ├── AddToCartButton.tsx
│   │   ├── CartPanel.tsx
│   │   ├── CartItem.tsx
│   │   └── CartSummary.tsx
│   ├── hooks/
│   │   └── useCart.ts
│   ├── store/                          # 狀態管理
│   │   └── cartStore.ts                # Zustand store
│   ├── actions.ts                      # Server Actions
│   └── types.ts
│
├── auth/                               # 認證功能
│   ├── components/
│   │   ├── LoginForm.tsx
│   │   ├── RegisterForm.tsx
│   │   ├── UserAvatar.tsx
│   │   └── ProtectedRoute.tsx          # 路由保護組件
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   └── useSession.ts
│   ├── lib/
│   │   ├── auth.config.ts              # NextAuth 配置
│   │   └── permissions.ts              # 權限管理
│   ├── actions.ts                      # Server Actions
│   └── types.ts
│
├── payment/                            # 💳 支付功能
│   ├── components/
│   │   ├── PaymentForm.tsx
│   │   ├── PaymentMethods.tsx
│   │   └── PaymentStatus.tsx
│   ├── hooks/
│   │   └── usePayment.ts
│   ├── services/
│   │   └── stripe.service.ts
│   ├── actions.ts
│   └── types.ts
│
├── cms/                                # 📝 內容管理
│   ├── components/
│   │   ├── ContentRenderer.tsx
│   │   └── RichTextEditor.tsx
│   ├── services/
│   │   └── cms.service.ts
│   └── types.ts
│
├── analytics/                          # 📊 分析功能
│   ├── components/
│   │   └── AnalyticsProvider.tsx
│   ├── lib/
│   │   ├── gtag.ts                     # Google Analytics
│   │   └── tracking.ts
│   └── types.ts
│
└── seo/                                # 🔍 SEO 功能
    ├── components/
    │   ├── MetaTags.tsx
    │   ├── StructuredData.tsx
    │   └── OpenGraph.tsx
    ├── lib/
    │   └── metadata.ts
    └── types.ts

```


##  lib/ (核心工具庫)

存放與業務無關、高度可重用的底層工具函式。

```
src/lib/
├── api/                                # API 相關
│   ├── client.ts                       # API 客戶端 (fetch wrapper)
│   ├── types.ts                        # API 通用類型
│   └── errors.ts                       # API 錯誤處理
├── db/                                 # 資料庫
│   ├── connection.ts                   # 資料庫連接
│   ├── schema.ts                       # 資料庫 Schema (Prisma/Drizzle)
│   └── migrations/                     # 資料庫遷移
├── utils/                              # 通用工具
│   ├── format.ts                       # 格式化函數 (日期、貨幣等)
│   ├── validation.ts                   # 驗證函數 (Zod schemas)
│   ├── crypto.ts                       # 加密相關
│   └── string.ts                       # 字串處理
├── cache/                              # 快取
│   ├── redis.ts                        # Redis 配置
│   └── memory.ts                       # 記憶體快取
├── email/                              # 📧 郵件服務
│   ├── templates/                      # 郵件模板
│   └── sender.ts                       # 郵件發送
├── storage/                            # 📁 檔案儲存
│   ├── s3.ts                           # AWS S3
│   └── local.ts                        # 本地儲存
├── logger.ts                           # 日誌服務
└── config.ts                           # 全域配置
```


##  tests/ (高層級測試)

只保留需要跨越多個 features 的測試。

```
tests/
├── e2e/                                # 端到端測試 (使用 Playwright 或 Cypress)
│   ├── auth.spec.ts                    # 測試完整的登入註冊流程
│   └── purchase-flow.spec.ts           # 測試完整的購物流程
└── integration/                        # 整合測試
    └── cart-and-payment.test.ts        # 測試購物車與支付功能的整合
```

##  doc/ (專案文件)

只保留需要跨越多個 features 的測試。

```
docs/
├── architecture/                       # 架構文件
├── api/                               # API 文件
├── deployment/                        # 部署指南
└── contributing.md                    # 貢獻指南
```


##  scripts/ (自動化腳本)

只保留需要跨越多個 features 的測試。

```
scripts/
├── build.sh                          # 建置腳本
├── deploy.sh                         # 部署腳本
├── db-seed.ts                         # 資料庫種子資料
└── generate-types.ts                 # 類型生成腳本
```
