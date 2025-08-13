# 快取

## 目錄規劃

```
└── src/  
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
    ├── i18n/
    │   ├── routing.ts
    │   └── request.ts
    │
    ├── lib/
    │   ├── cache/
    │   │   ├── types.ts
    │   │   ├── memory-adapter.ts
    │   │   ├── factory.ts
    │   │   └── index.ts
    │   └── locale-utils.ts                     # 移除路徑中的語系前綴，取得基底路徑

    ├── features/
    │   ├── language/
    │   │   ├── components/
    │   │   │   └── LanguageSwitcher.tsx# 語系切換（以 props 接收 languages；使用 Link locale）
    │   │   ├── lib/
    │   │   │   ├── language.cache.ts   # 語系快取封裝（Key/TTL/Tags → adapter）
    │   │   │   └── getLanguagesForSSR.ts # SSR 用例（Server Components 預取）
    │   │   ├── services/
    │   │   │   ├── language.repository.ts # 快取→API→回填（依賴全域 languageService）
    │   │   │   └── index.ts               # 精準導出 repository（供外部可選引用）
    │   │   ├── __tests__/
    │   │   │   ├── language.cache.test.ts
    │   │   │   └── language.repository.test.ts
    │   │   └── index.ts                # 模組公共入口（組件/用例/服務/型別的對外 API）
    │   │
    │   └── locales/
    │       ├── lib/
    │       │   ├── locales.cache.ts
    │       │   └── resolveLocaleForSSR.ts
    │       └── services/
    │           └── locales.repository.ts
    │
    ├── services/
    │   ├── language.service.ts
    │   └── locales.service.ts
    │
    ├── app/
    │   └── [locale]/
    │       ├── layout.tsx
    │       └── page.tsx
    ├── types/                                  # (共享類型) 全域共享的 TypeScript 類型定義
    │   ├── api.ts                              # ├─ 📦 API 回應的類型定義 (PageData, Block, SEO 等)
    │   ├── i18n.ts                             # ├─ 國際化相關的類型
    │   ├── index.ts                            # ├─ 類型的統一導出點
    │   ├── locales.types.ts                    # ├─ 國家預設語系
    │   └── language.types.ts                   # └─ 語系資料與系統預設語系
    └── tests/
        ├── language.cache.test.ts
        └── locales.cache.test.ts
```

---

# 整體快取規劃與設計說明

本文件說明全站快取的整體規劃、責任邊界與運作流程。所有領域資料（Languages、Locales、Menus、Pages、Web-Data、Geo-Data、User-Data 等）皆可沿用本設計快速落地。

## 1. 目標與範疇
- **一致性**：統一 Key、TTL、Tags、錯誤處理與觀測指標。
- **可插拔**：支援 memory / redis / none 三種策略，領域層不依賴底層實作。
- **可擴充**：以 Repository 模式，快速替任何領域資料接上快取。
- **SSR 友善**：Server Components 中預取與用例注入，穩定首屏並避免重複請求。
- **協作**：內部快取與對外 HTTP/CDN Cache-Control 協同。

## 2. 架構分層與責任
- `lib/cache`（快取抽象層）
    - `types.ts`：定義 `CacheAdapter` 介面（get/set/del），支援 ttl/tags。
    - `memory-adapter.ts`：提供記憶體快取實作（基於 Map + TTL + Tag 索引 + 懶移除）。
    - `factory.ts`：作為工廠函式，依據環境變數策略（memory/redis/none）回傳對應的 adapter 實例。
    - `index.ts`：對外統一出口與提供快取鍵生成工具。
- `features/<domain>`（領域功能模組）
    - `lib/<domain>.cache.ts`：**快取封裝層**。定義該領域的 Key/TTL/Tags，並將通用 `adapter` 包裝成領域專用的快取方法。
    - `services/<domain>.repository.ts`：**資料倉儲層**。核心邏輯所在，負責串接「讀取快取 → 未命中則呼叫外部 Service → 寫回快取」的流程。
    - `lib/getXxxForSSR.ts`：**SSR 用例層**。提供 Server-only 的函式，用於在 Server Components (例如 `page.tsx` 或 `layout.tsx`) 中預取資料。
    - `components`：**表現層**。純 UI 與 Hooks，接收由 SSR 用例預取後透過 props 傳遞的資料，不直接承載 SSR 資料獲取決策。
- `services/<domain>.service.ts`（外部服務層）
    - 負責與最原始的資料來源（例如後端 API、資料庫）溝通。`Repository` 會依賴此層來獲取未命中快取的資料。在本專案中，它會呼叫 `app/api/ssr/...` 的 Mock API。

## 3. 策略與切換
- **設定來源**：由環境變數控制全域快取策略與開關。
    - `STRATEGY`: "memory" | "redis" | "none"
    - `CACHE_ENABLED`、`CACHE_DEFAULT_TTL`、`CACHE_CDN_ENABLED`
- **切換方式**：由 `lib/cache/factory.ts` 根據策略產生對應 Adapter，`features` 內的領域層無需任何改動即可切換底層實作。

## 4. Key / TTL / Tags 規範
- **Key 生成**：`generateKey(type, identifier, locale?)`
    - 不分語系：`generateKey('SYSTEM_MENUS', 'list')`
    - 分語系：`generateKey('PAGE_DATA', 'by-path', locale)`
    - 依 ID：`generateKey('USER_DATA', `by-id:${id}`)`
- **TTL**：依資料型別集中管理，必要時可在 `set` 時覆寫。
- **Tags**：用於批次清除與觀測（例如 `['locales','static-data']`、`['languages','static-data']`）。

## 5. Locales 快取型別（新增）
- **資料定義**
    - `CountryLocaleMapping`: `Record<string, string>`，key 為國家代碼（如 TW、US），value 為語系（如 zh-TW、en）。
- **Key/TTL/Tags**
    - **Key**：`generateKey('LOCALES', 'country-map')`
    - **TTL**：`CACHE_CONFIG.TTL.LOCALES`（建議 7200 秒）
    - **Tags**：`CACHE_CONFIG.TAGS.LOCALES`（例如 `['locales','static-data']`）
- **快取讀寫** (`features/locales/services/locales.repository.ts`)
    - `getLocales()`：快取命中即回；未命中 → `LocalesService.getLocales()` → `set(key, data, { ttl, tags })`。
    - `getLocaleByCountry(country)`：優先使用快取映射查詢；查無回 `null`，交由決策流程兜底。

## 6. SSR 語系決策流程（整合 Language + Locales）
- **輸入**
    - URL `requestLocale`（例如 `/en/...`）
    - Cookie `NEXT_LOCALE`
    - Geo（若有）：偵測出的國家代碼（例如 'TW'）
    - 快取資料：Languages（支援語系列表 + 動態預設）、Locales（國家→語系對照）
- **建議優先序**
    1) URL `requestLocale` 屬於支援語系 → 使用。
    2) Cookie `NEXT_LOCALE` 屬於支援語系 → 使用。
    3) Geo 對應 Locales 映射的語系屬於支援語系 → 使用。
    4) 動態預設語系（由 Languages 推導） → 使用。
    5) 靜態預設 `i18n/routing.ts` 的 `defaultLocale` → 兜底。
- **產物**
    - 最終 `locale`：供 `next-intl` 載入 `messages/{locale}.json`。
    - 可選：決策來源（url/cookie/geo/dynamicDefault/fallback）便於觀測。

## 7. 跨資料相依與一致性
- **支援語系來源**
    - 建議由 `features/language/services/language.repository.ts` 提供 `supportedLocales` 與 `dynamicDefaultLocale`。
- **一致性檢查**
    - 任何候選語系需包含於 `supportedLocales`；否則回退動態預設（再不行回靜態預設）。
- **監控與日誌**
    - 記錄 `locale` 決策來源分佈、快取命中率與降級次數。

## 8. 執行流程（Repository 標準流程）
1) 在 `Repository` 方法中，呼叫 `features/<domain>/lib/<domain>.cache.ts` 組裝 `key` 與 `tags`。
2) 呼叫 `cache.get(key)`。
3) **命中** → 回傳資料。
4) **未命中** → 呼叫 `services/<domain>.service.ts` 的方法請求原始資料。
5) **成功** → `cache.set(key, data, { ttl, tags })` → 回傳資料。
6) **失敗** → 回傳錯誤或執行「舊值優先」（stale-while-revalidate）策略。

## 9. SSR/CSR 與 UI
- **SSR**：在 `i18n/request.ts` 內，使用位於 `features/locales/lib/resolveLocaleForSSR.ts` 的「語系決策用例」取得最終 `locale`，並動態載入 messages。在 `app/[locale]/layout.tsx` 或 `page.tsx` 中，如需語系列表等 UI，應呼叫對應的 SSR 用例（如 `getLanguagesForSSR.ts`）預取資料，再以 props 形式提供給 Client Components。
- **CSR**：語系切換元件（`LanguageSwitcher.tsx`）僅處理 Cookie 寫入與 `Link` 路由跳轉，與伺服器端的決策流程解耦。

## 10. 清除與更新（Invalidation）
- **事件驅動**：CMS 內容更新時，可觸發 Webhook 呼叫特定 API 來清除相關 `TAGS`（例如 `TAGS.LANGUAGES` 或 `TAGS.LOCALES`）。
- **手動清除**：建立一個需權限保護的 API 端點（例如 `/api/admin/cache/clear`）來手動清除快取。
- **自動到期**：TTL 到期後自動失效，下次存取時觸發懶移除與資料更新。

## 11. HTTP/瀏覽器/CDN 協作
- **靜態/低變動資料**：設定 `Cache-Control: public, s-maxage=<ttl>, max-age=<ttl>`。
- **動態/個人化資料**：使用 `private` 或縮短 `s-maxage`；並搭配 `Vary: Accept-Language, Accept-Encoding`。
- **內外一致**：建議對齊內部快取的 `TTL` 與外部的 `s-maxage`，避免雙重過期時間不一致的問題。

## 12. 錯誤處理與降級策略
- **快取讀取錯誤**：記錄警告日誌，並降級為直接呼叫 API 重新獲取資料。
- **API 失敗**：
    - **保守策略**：回傳錯誤並詳細記錄。
    - **進階策略**：若快取中保留有舊值，可先回傳舊值並在背景非同步重試（SWR 模式）。
- **觀測**：監控 `hit/miss` 比率、資料來源（cache/api）、延遲、`set/evict` 次數。

## 13. 安全與最佳實務
- 共享快取（如 Redis）中不得包含用戶敏感資料。會員個人化頁面應使用 `private` 或極短 `s-maxage` 的快取策略。
- **環境隔離**：不同環境（dev/stage/prod）應使用不同的快取前綴 (prefix) 或獨立的快取實例。
- 快取清除端點需有嚴格的權限驗證、頻率限制與操作審計日誌。

## 14. 擴充模板（新增資料型別）
1) 在快取設定檔中新增新資料型別的 `TTL/Tags`。
2) 建立 `features/<domain>` 目錄，並視需求建立 `lib`、`services`、`components` 子目錄。
3) 在 `services` 中建立 `<domain>.service.ts` 與 `<domain>.repository.ts`。
4) 在 `lib` 中建立 `<domain>.cache.ts` 與 SSR 用的 `getXxxForSSR.ts`。
5) 若需在 SSR 預取，於 `layout.tsx` 或 `page.tsx` 中呼叫 SSR 用例。
6) 在 `features/<domain>/__tests__/` 中補上單元測試，驗證命中/未命中、TTL 與降級策略。

---

# 實務運用

## A. Language（網站支援語系）快取與使用
- **Key**：`generateKey('LANGUAGES','list')`
- **TTL**：`CACHE_CONFIG.TTL.LANGUAGES`（預設建議 7200 秒）
- **Tags**：`CACHE_CONFIG.TAGS.LANGUAGES`（如 `['languages','static-data']`）
- **Repository 流程** (`features/language/services/language.repository.ts`)：快取 → `LanguageService` API → 回填。
- **SSR 使用** (`features/language/lib/getLanguagesForSSR.ts`)：在 `layout/page` 中呼叫此函式來預取語系列表，供 `LanguageSwitcher` 等元件使用。

## B. Locales（國家→語系對照）快取與使用（新增）
- **型別**：`CountryLocaleMapping = Record<string, string>`
- **Key**：`generateKey('LOCALES','country-map')`
- **TTL/Tags**：使用 `CACHE_CONFIG.TTL.LOCALES / CACHE_CONFIG.TAGS.LOCALES`
- **Repository** (`features/locales/services/locales.repository.ts`)
    - `getLocales()`：快取優先 → `LocalesService` API → 回填。
    - `getLocaleByCountry(country)`：從快取的映射中查詢語系；查無回 `null`。

## C. SSR 語系決策用例（建議）
- **用例位置**：`features/locales/lib/resolveLocaleForSSR.ts`
- **輸入**：`requestLocale`（URL）、`Cookie`（NEXT_LOCALE）、`detectedCountry`（若有）
- **邏輯**：遵循優先序（URL → Cookie → Geo → 動態預設 → 靜態預設），並使用 `LanguageRepository.supportedLocales` 進行驗證。
- **產出**：`{ locale }`，供 `i18n/request.ts` 使用。

## D. 與 next-intl 對接 (`i18n/request.ts`)
- **於 SSR 階段**：
    1) 呼叫位於 `features/locales/lib/resolveLocaleForSSR.ts` 的語系決策用例取得最終 `locale`。
    2) 動態 `import(`../messages/${locale}.json`)`；若找不到則回退至預設 `locale` 的 messages。
    3) 回傳 `{ locale, messages }` 供 `next-intl` 設定 Provider 並完成渲染。

---

# 測試與驗收（Language + Locales）

## 單元測試 (`features/<domain>/__tests__/`)
- **LanguageRepository**：測試命中/未命中、TTL 到期後重取、API 失敗降級策略。
- **LocalesRepository**：測試命中/未命中、TTL 到期後重取、查無國家映射回 `null`。
- **語系決策用例**：測試 URL/COOKIE/GEO 分支與優先序；測試候選語系不在支援清單時，能正確回退至動態預設；測試 messages 檔案缺失時，能回退至預設 `locale` 的 messages，確保 SSR 不中斷。

## 觀測指標（建議）
- **語系決策來源分佈**：`url/cookie/geo/dynamicDefault/fallback`。
- **Language/Locales 快取命中率**（hit/miss）與 P95/P99 延遲。
- **降級次數**（API 失敗或 messages 回退）。

---

# FAQ
- **為什麼不只用 HTTP 快取？**
  > HTTP 快取（如 CDN）無法解決伺服器內部首次渲染（SSR）時的資料相依問題。例如，伺服器需要知道「所有支援的語系」才能正確解析路由或渲染語系切換器，這個過程發生在 HTTP 快取之前。內部快取正是為了解決這個問題，加速伺服器端自身的資料獲取。

- **何時該從 memory-adapter 改用 Redis？**
  > 當您的應用程式需要部署到多個伺服器實例（例如使用 Vercel、AWS EC2 Auto Scaling）時。`memory-adapter` 的快取存在於單一實例的記憶體中，無法在多個實例間共享。切換到 Redis 可以讓所有實例共享同一個快取，確保資料一致性。得益於工廠模式，您只需更改環境變數，無需修改任何一行領域程式碼。

- **Tags（標籤）到底有什麼用？**
  > Tags 提供了一種比 `Key` 更靈活的快取清除方式。例如，當您在 CMS 後台更新了所有「頁尾選單」相關的項目時，您不需要知道所有相關的 `Key`，只需執行一個 `clearByTag('menus')` 的操作，就能精準地讓所有相關快取失效，而不會影響到無關的快取（如 `pages` 或 `languages`），大大降低了全量清除快取所帶來的效能衝擊。