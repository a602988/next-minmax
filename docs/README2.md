
## DDD 分層後的目錄

```
├── .env.local
├── .env.example
├── .gitignore
├── package.json
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── eslint.config.mjs
├── README.md
├── messages/                                   # 🌍 國際化翻譯檔案
├── public/                                     # 靜態資源
├── docs/                                       # 專案文件
└── src/
    ├── app/                                    # 🌐 Interface 層 (Next.js App Router)
    │   ├── [locale]/
    │   │   ├── [[...slug]]/
    │   │   │   └── page.tsx                   # Universal Page Renderer
    │   │   ├── layout.tsx
    │   │   └── not-found.tsx
    │   └── api/                               # API Route Handlers (可能會呼叫 Application 層)
    │       └── ssr/
    │           ├── languages/
    │           │   └── route.ts
    │           ├── locales/
    │           │   └── route.ts
    │           └── route.ts
    │
    ├── core/                                   # 🧠 核心共用層
    │   ├── config/                             # 全域配置
    │   │   ├── app.config.ts
    │   │   ├── locale.config.ts
    │   │   ├── api.config.ts
    │   │   └── cache.config.ts
    │   ├── lib/                                # 共用工具
    │   │   ├── api.ts
    │   │   └── utils.ts
    │   ├── constants/                          # 全域常數
    │   ├── types/                              # 全域型別
    │   │   ├── api.ts
    │   │   ├── i18n.ts
    │   │   └── language.ts
    │   ├── hooks/                              # 全域 Hooks
    │   ├── contexts/                           # 全域 Context
    │   └── providers/                          # Context Providers
    │
    ├── domains/                                # 🏛 Domain 層 (核心商業規則)
    │   ├── language/
    │   │   ├── language.entity.ts              # 語言 Entity
    │   │   ├── language.value-object.ts        # 語言相關 Value Objects
    │   │   ├── language.repository.ts          # Repository Interface
    │   │   └── language.types.ts               # Type 定義
    │   ├── navigation/
    │   │   ├── navigation.entity.ts
    │   │   ├── navigation.value-object.ts
    │   │   ├── navigation.repository.ts
    │   │   └── navigation.types.ts
    │   └── ...
    │
    ├── application/                            # 📋 Application 層 (用例、服務)
    │   ├── language/
    │   │   ├── usecases/
    │   │   │   ├── get-languages.usecase.ts    # 語言列表用例
    │   │   │   └── set-language.usecase.ts     # 切換語言用例
    │   │   └── dtos/
    │   │       └── language.dto.ts
    │   ├── navigation/
    │   │   ├── usecases/
    │   │   │   └── get-system-menu.usecase.ts
    │   │   └── dtos/
    │   │       └── navigation.dto.ts
    │   └── ...
    │
    ├── infrastructure/                         # 🛠 Infrastructure 層 (外部資源存取)
    │   ├── cache/
    │   │   └── memory-cache.ts                 # 快取實作
    │   ├── api/
    │   │   ├── language.api.ts                 # 語言 API 實作 (呼叫後端/Mock)
    │   │   └── navigation.api.ts
    │   ├── repositories/
    │   │   ├── language.repository.impl.ts     # 語言 Repository 實作
    │   │   └── navigation.repository.impl.ts
    │   ├── mappers/
    │   │   ├── language.mapper.ts              # API <-> Domain Model 映射
    │   │   └── navigation.mapper.ts
    │   └── mock/                               # Mock 資料 (開發用)
    │       ├── languages.data.ts
    │       ├── locales.data.ts
    │       ├── system-menus.data.ts
    │       ├── web-data.data.ts
    │       └── page.data.ts
    │
    ├── ui/                                     # 🎨 UI (Interface 層的組件)
    │   ├── components/
    │   │   ├── blocks/
    │   │   ├── layout/
    │   │   └── ui/
    │   ├── features/                           # 功能模組的 UI
    │   │   ├── language/
    │   │   │   ├── components/
    │   │   │   │   └── LanguageSwitcher.tsx
    │   │   │   └── hooks/
    │   │   │       └── useLanguage.ts
    │   │   └── navigation/
    │   │       ├── components/
    │   │       │   ├── Header.tsx
    │   │       │   ├── Footer.tsx
    │   │       │   └── MenuDropdown.tsx
    │   │       └── hooks/
    │   │           └── useMenu.ts
    │   └── styles/
    │       ├── variables.css
    │       └── base.css
    │
    └── middleware.ts

```
