# Next.js API 驅動型商務網站完整目錄規劃-「功能導向」或「領域驅動」的結構

本架構的核心是一個位於 app/[locale]/[[...slug]]/page.tsx 的 通用頁面渲染器 (Universal Page Renderer)。此元件作為唯一的內容入口點，它會：

從 URL 捕獲 locale (語系) 和 slug (路徑)。

呼叫一個抽象化的 API 客戶端 (lib/api.ts) 來獲取頁面數據，無論數據源是本地模擬 JSON 還是真實後端 API。

API 回應的數據將包含頁面元數據 (SEO)、版型配置 (layout) 以及一個由多個區塊 (blocks) 組成的陣列。

通用頁面渲染器會根據 layout 資訊選擇對應的版型組件，並動態地將 blocks 陣列映射到對應的前端組件庫，最終組合並渲染出完整的頁面。





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
│   ├── assets/                         # 靜態資源
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
│   ├── layout.tsx                      # 語言佈局
│   ├── page.tsx                        # 首頁
│   ├── loading.tsx                     # 載入頁面
│   ├── error.tsx                       # 錯誤頁面
│   ├── not-found.tsx                   # 404 頁面
│   ├── template.tsx                    # 🆕 模板組件
│   ├── default.tsx                     # 🆕 預設組件 (平行路由)
│   ├── @modal/                         # 🆕 平行路由 - Modal
│   │   ├── default.tsx
│   │   └── login/
│   │       └── page.tsx
│   ├── (dashboard)/                    # 🆕 路由群組
│   │   ├── dashboard/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   └── profile/
│   │   │       └── page.tsx
│   │   └── settings/
│   │       └── page.tsx
│   ├── products/
│   │   ├── page.tsx
│   │   ├── loading.tsx
│   │   ├── [id]/
│   │   │   ├── page.tsx
│   │   │   ├── loading.tsx
│   │   │   └── @reviews/               # 🆕 平行路由 - 評論
│   │   │       └── page.tsx
│   │   └── [[...filters]]/             # 🆕 可選動態路由
│   │       └── page.tsx
│   └── sitemap.xml/
│       └── route.ts
├── api/                                # 簡化的 API 路由
│   ├── auth/
│   │   └── [...nextauth]/
│   │       └── route.ts
│   ├── webhooks/                       # 第三方 Webhook
│   │   ├── stripe/
│   │   │   └── route.ts
│   │   └── cms/
│   │       └── route.ts
│   └── health/
│       └── route.ts
├── layout.tsx                          # 根佈局
├── globals.css                         # 全域樣式
├── favicon.ico                         # 網站圖示
├── icon.tsx                            # 動態圖示生成
├── apple-icon.tsx                      # Apple 圖示
├── opengraph-image.tsx                 # OG 圖片生成
├── twitter-image.tsx                   # Twitter 圖片
├── robots.txt                          # 靜態 robots.txt
└── manifest.ts                         # PWA manifest

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
├── [feature-name]/                     # 示意
│   ├── components/                         # 該功能專用組件
│   ├── hooks/                              # 該功能專用 hooks
│   ├── services/                           # 該功能的 API 服務
│   ├── store/                              # 該功能的狀態管理 (如果需要)
│   ├── utils/                              # 該功能專用工具函數
│   ├── actions.ts                          # Server Actions
│   ├── constants.ts                        # 該功能相關常數
│   ├── types.ts                            # 該功能相關類型
│   ├── index.ts                            # 統一匯出
│   ├── __tests__/                          # 該功能的單元測試
│   │   ├──components/
│   │   ├── hooks/
│   │   └──services/
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
│   ├── components/
│   ├── lib/
│   │   ├── metadata.ts                 # 基礎 metadata 工具
│   │   ├── opengraph.ts                # OG 圖片生成
│   │   └── structured-data.ts          # 結構化資料
└── types.ts

```

##  lib/ (核心工具庫)

存放與業務無關、高度可重用的底層工具函式。

```
src/lib/
├── cache/
│   ├── strategies.ts                   # 快取策略定義
│   ├── tags.ts                         # 快取標籤管理
│   └── revalidation.ts                 # 重新驗證邏輯
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
├── email/                              # 郵件服務
│   ├── templates/                      # 郵件模板
│   └── sender.ts                       # 郵件發送
├── storage/                            # 檔案儲存
│   ├── s3.ts                           # AWS S3
│   └── local.ts                        # 本地儲存
├── config/                             # 統一配置導出 v
│   ├── app.config.ts                   # 應用程式核心配置  v 
│   ├── locale.config.ts                # 語系統一配置v
│   ├── api.config.ts                   # API 相關配置v
│   └── cache.config.ts                 # 快取配置v
├── logger.ts                           # 日誌服務
└── config.ts                           # 全域配置
```

##  hooks/ (共享Hooks)

全域共享的 Hooks，與業務邏輯無關，可在整個專案中重複使用。

```
src/hooks/
├── index.ts                            # 統一匯出
├── ui/                                 # UI 相關 hooks
│   ├── useToggle.ts                    # 切換狀態
│   ├── useDisclosure.ts               # 開關狀態 (modal, drawer 等)
│   ├── useClickOutside.ts             # 點擊外部偵測
│   ├── useKeyPress.ts                 # 鍵盤事件
│   ├── useHover.ts                    # 滑鼠懸停
│   ├── useFocus.ts                    # 焦點管理
│   └── useMediaQuery.ts               # 媒體查詢
├── data/                               # 資料相關 hooks
│   ├── useLocalStorage.ts             # localStorage 操作
│   ├── useSessionStorage.ts           # sessionStorage 操作
│   ├── useFetch.ts                    # 通用 fetch hook
│   ├── useDebounce.ts                 # 防抖
│   ├── useThrottle.ts                 # 節流
│   └── usePagination.ts               # 分頁邏輯
├── navigation/                         # 導航相關 hooks
│   ├── useRouter.ts                   # 路由操作封裝
│   ├── useSearchParams.ts             # URL 參數管理
│   ├── usePathnameWithoutLocale.ts    # 去除語言的路徑
│   └── useActiveRoute.ts              # 當前路由判斷
├── performance/                        # 效能相關 hooks
│   ├── useIntersectionObserver.ts     # 交集觀察器
│   ├── useVirtualList.ts              # 虛擬列表
│   ├── useMemo.ts                     # 記憶化增強
│   └── useCallback.ts                 # 回調函數優化
├── form/                               # 表單相關 hooks
│   ├── useForm.ts                     # 表單狀態管理
│   ├── useValidation.ts               # 表單驗證
│   └── useFieldArray.ts               # 動態欄位陣列
├── animation/                          # 動畫相關 hooks
│   ├── useSpring.ts                   # 彈簧動畫
│   ├── useTransition.ts               # 過渡動畫
│   └── useGesture.ts                  # 手勢操作
└── utils/                              # 工具類 hooks
    ├── useTimeout.ts                  # 延時執行
    ├── useInterval.ts                 # 定時執行
    ├── usePrevious.ts                 # 前一個值
    ├── useUpdateEffect.ts             # 更新時執行
    ├── useMountedState.ts             # 組件掛載狀態
    └── useEventListener.ts            # 事件監聽器

```

##  Context/ (共享Context)

全域狀態管理 Context，與業務邏輯無關的共享狀態。

```
src/contexts/
├── index.ts                            # 統一匯出
├── ThemeContext.tsx                    # 主題狀態
├── UIContext.tsx                       # UI 狀態 (sidebar, modal 等)
├── NotificationContext.tsx             # 通知狀態
├── GlobalContext.tsx                   # 全域狀態整合
└── types.ts                            # Context 相關類型

```

##  providers/ (全域 Provider 集合)

```
src/providers/
├── index.tsx                           # 組合所有 Provider
├── ThemeProvider.tsx                   # 主題 Provider
├── I18nProvider.tsx                    # 國際化 Provider
├── AuthProvider.tsx                    # 認證 Provider (包裝 NextAuth)
├── QueryProvider.tsx                  # React Query Provider
└── ToastProvider.tsx                   # Toast 通知 Provider

```

##  constants/  (全域常數)

```
src/constants/
├── index.ts                            # 統一匯出
├── api.ts                              # API 相關常數
├── routes.ts                           # 路由常數
├── config.ts                           # 配置常數
├── messages.ts                         # 訊息常數
└── validation.ts                       # 驗證規則常數

```

##  i18n/ (國際化配置與核心邏輯)

```
src/i18n/
├── request.ts                          # next-intl 請求配置 (官方要求)
├── routing.ts                          # 路由配置 (官方要求)
├── navigation.ts                       # 導航配置 (官方要求)
├── config.ts                           # 基礎配置
└── locales.ts                          # 語言列表定義

```

##  types/ (全域共享的 TypeScript 類型定義)

```
src/types/
├── index.ts                            # 統一導出 API 服務 v
├── base.ts                             # 基礎 API 服務類 v
├── minmax.ts                           # 雲端連線 API v
├── api.ts                              # API 相關類型
├── language.ts                         # 語言相關 v
├── web-data.ts                         # 網站資訊
├── menu.ts                             # 選單相關
├── page.ts                             # 頁面相關
└── index.ts                            # 統一導出
├── auth.ts                             # 認證相關類型
├── common.ts                           # 通用類型
├── database.ts                         # 資料庫類型
└── env.ts                              # 環境變數類型

```

##  tests/ (高層級測試)

只保留需要跨越多個 features 的測試。

```
tests/
├── e2e/                                # 端到端測試
│   ├── auth.spec.ts
│   ├── purchase-flow.spec.ts
│   └── navigation.spec.ts
├── integration/                        # 整合測試
│   ├── cart-and-payment.test.ts
│   └── auth-and-profile.test.ts
├── fixtures/                           # 測試資料
│   ├── users.json
│   └── products.json
├── utils/                              # 測試工具
│   ├── setup.ts
│   └── helpers.ts
└── config/                             # 測試配置
    ├── jest.config.js
    └── playwright.config.ts
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

##  styles/ (全域樣式與主題配置)

```
src/styles/
├── globals.css                         # 全域樣式
├── components.css                      # 組件樣式
├── utilities.css                       # 工具類樣式
├── themes/                             # 主題配置
│   ├── light.css
│   ├── dark.css
│   └── variables.css                   # CSS 變數
└── fonts/                              # 字體配置
    └── index.ts

```

##  assets/ (靜態資源)

```
src/assets/
├── images/                             # 圖片資源
│   ├── icons/
│   ├── logos/
│   └── illustrations/
├── fonts/                              # 字體檔案
└── data/                               # 靜態資料檔案
    └── defaultLanguages.json

```

##  doc/ (專案文件)

只保留需要跨越多個 features 的測試。

```
docs/
├── api/
│   ├── README.md                    # API 總覽和索引
│   ├── internal/                    # 本公司內部API
│   │   ├── README.md
│   │   ├── authentication.md        # 認證相關說明
│   │   ├── endpoints/
│   │   └── examples/
│   ├── external/                    # 第三方API整合
│   │   ├── README.md               # 第三方API總覽
│   │   ├── google/                 # Google APIs
│   │   │   ├── maps.md
│   │   │   ├── auth.md
│   │   │   └── setup.md
│   │   ├── stripe/                 # Stripe 支付API
│   │   │   ├── payments.md
│   │   │   ├── webhooks.md
│   │   │   └── setup.md
│   │   ├── aws/                    # AWS 服務
│   │   │   ├── s3.md
│   │   │   ├── lambda.md
│   │   │   └── setup.md
│   │   └── social/                 # 社交媒體API
│   │       ├── facebook.md
│   │       ├── twitter.md
│   │       └── line.md
│   ├── shared/                     # 共用的API概念
│   │   ├── error-handling.md       # 通用錯誤處理
│   │   ├── rate-limiting.md        # 速率限制策略
│   │   ├── caching.md              # 快取策略
│   │   └── security.md             # 安全性最佳實踐
│   ├── spec/                       # 設計規格說明
│   │   └── web-entry-flow.md       # 網頁進入流程說明
│   └── integration/                # 整合指南
│       ├── setup-guide.md          # 環境設定
│       ├── testing.md              # API測試
│       └── deployment.md           # 部署注意事項
├── architecture/                       # 架構文件
│   ├──structure.md                     # 目錄
├── deployment/                         # 部署指南
│   ├──setup.md                         # 安裝說明
├── README.md                           # 架構說明
└── CHANGELOG.md                        # 版本說明
```

## 已建置文件

- docs
    - spec/
        - [web-entry-flow.md](./spec/web-entry-flow.md]) 網頁進入流程說明
    - api/
        - [README.md](./api/) API 總覽和索引
    - deployment/
        - [setup.md ](./deployment/setup.md) 安裝說明
    - [CHANGELOG.md](CHANGELOG.md) 版本說明
    - [README.md](README.md) 架構說明