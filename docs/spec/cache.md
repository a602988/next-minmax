# 快取

## 目錄規劃

```
docs/
└── i18n/
    ├── language/
    │   ├── README.md                 # Language 快取與整合說明（已完成）
    │   ├── ssr-integration.md        # SSR 時序、注入與使用（已完成）
    │   └── cache-flow.md             # Key/TTL/Tags 規範（已完成）
    └── locales/
        ├── README.md                 # Locales（國家→語系）快取與決策設計
        ├── ssr-integration.md        # 與 next-intl 的決策串接流程與時序
        └── cache-flow.md             # Key/TTL/Tags 規範與失效策略

src/
├── i18n/
│   ├── routing.ts                    # 靜態「超集合」語系/預設語系，作為保底
│   └── request.ts                    # SSR：動態決策最終 locale + 載入 messages（已調整方案）
│
├── lib/
│   └── cache/
│       ├── types.ts                  # CacheAdapter 介面（已完成）
│       ├── memory-adapter.ts         # 記憶體快取（已完成）
│       ├── factory.ts                # 策略切換（已完成）
│       └── index.ts                  # 封裝 export（已完成）
│
├── features/
│   ├── language/
│   │   ├── domain/
│   │   │   └── language.types.ts     # 語系型別與工具（若已有可沿用）
│   │   ├── infrastructure/
│   │   │   └── language.cache.ts     # Key/TTL/Tags + adapter 包裝（已完成）
│   │   ├── application/
│   │   │   ├── language.repository.ts       # 快取→API→回填（已完成）
│   │   │   └── use-cases/
│   │   │       └── getLanguagesForSSR.ts    # SSR 專用取數（已完成）
│   │   └── presentation/
│   │       ├── components/
│   │       │   ├── LanguageSwitcher.tsx             # 內含導頁的 Client 下拉（已提供）
│   │       │   └── LanguageSwitcherStandalone.tsx   # Server 傳 props 的 Client 下拉（已提供）
│   │       └── sections/
│   │           └── LanguagesSection.server.tsx      # SSR 取數→以 props 給下拉（已提供）
│   │
│   └── locales/
│       ├── domain/
│       │   └── locales.types.ts       # CountryLocaleMapping 等型別
│       ├── infrastructure/
│       │   └── locales.cache.ts       # Key：LOCALES:list 或 country-map；TTL/Tags：CACHE_CONFIG.TTL.LOCALES
│       ├── application/
│       │   ├── locales.repository.ts  # getLocales()（快取→API→回填）；getLocaleByCountry(country)
│       │   └── use-cases/
│       │       └── resolveLocaleForSSR.ts # SSR 語系決策用例（Cookie/URL/Geo → 最終 locale）
│       └── integration/
│           └── i18n-integration.service.ts  # 門面（可選）：對 request.ts 提供 getSupportedLocales/getDefaultLocale
│
├── services/
│   ├── language.service.ts            # 已有：語系 API 呼叫
│   └── locales.service.ts             # 已有：國家→語系對照，與 getLocaleByCountry
│
├── app/
│   └── [locale]/
│       ├── layout.tsx                 # SSR：next-intl +（可選）預取下拉語系並渲染 UI
│       └── page.tsx                   # 使用 LanguagesSection 或 LanguageSwitcher
│
└── tests/
    ├── language.cache.test.ts         # 命中/未命中、TTL、API 降級
    └── locales.cache.test.ts         
```

---

# 整體快取規劃與設計說明

本文件說明全站快取的整體規劃、責任邊界與運作流程。所有領域資料（Languages、Locales、Menus、Pages、Web-Data、Geo-Data、User-Data 等）皆可沿用本設計快速落地。

## 1. 目標與範疇
- 一致性：統一 Key、TTL、Tags、錯誤處理與觀測指標。
- 可插拔：支援 memory / redis / none 三種策略，領域層不依賴底層實作。
- 可擴充：以 Repository 模式，快速替任何領域資料接上快取。
- SSR 友善：Server 預取與用例注入，穩定首屏並避免重複請求。
- 協作：內部快取與對外 HTTP/CDN Cache-Control 協同。

## 2. 架構分層與責任
- lib/cache（快取抽象層）
    - types.ts：CacheAdapter 介面（get/set/del），支援 ttl/tags。
    - memory-adapter.ts：記憶體快取（Map + TTL + Tag 索引 + 懶移除）。
    - factory.ts：依策略（memory/redis/none）回傳 adapter。
    - index.ts：對外統一出口與快取鍵工具。
- features/<domain>（領域模組）
    - infrastructure/<domain>.cache.ts：Key/TTL/Tags 與 adapter 包裝。
    - application/<domain>.repository.ts：讀快取 → 未命中打 API → 寫回快取。
    - application/use-cases/getXxxForSSR.ts：SSR 專用取數（Server-only）或決策。
    - presentation（可選）：純 UI 與 Hook，不承載 SSR 決策。

## 3. 策略與切換
- 設定來源：環境變數控制策略與開關
    - STRATEGY: "memory" | "redis" | "none"
    - CACHE_ENABLED、CACHE_DEFAULT_TTL、CACHE_CDN_ENABLED
- 切換方式：由 lib/cache/factory.ts 依策略產生對應 Adapter，領域層無需改動。

## 4. Key / TTL / Tags 規範
- Key 生成：generateKey(type, identifier, locale?)
    - 不分語系：generateKey('MENUS', 'list')
    - 分語系：generateKey('PAGES', 'by-path', locale)
    - 依 ID：generateKey('USER_DATA', `by-id:${id}`)
- TTL：依資料型別集中管理，必要時可在 set 時覆寫。
- Tags：用於批次清除與觀測（例如 ['locales','static-data']、['languages','static-data']）。

## 5. Locales 快取型別（新增）
- 資料定義
    - CountryLocaleMapping：Record<string, string>，key 為國家代碼（如 TW、US），value 為語系（如 zh-TW、en）
- Key/TTL/Tags
    - Key：generateKey('LOCALES', 'country-map')
    - TTL：CACHE_CONFIG.TTL.LOCALES（建議 7200 秒）
    - Tags：CACHE_CONFIG.TAGS.LOCALES（例如 ['locales','static-data']）
- 快取讀寫
    - getLocales()：快取命中即回；未命中 → LocalesService.getLocales() → set(key, data, { ttl, tags })
    - getLocaleByCountry(country)：優先使用快取映射查詢；查無回 null，交決策流程兜底

## 6. SSR 語系決策流程（整合 Language + Locales）
- 輸入
    - URL requestLocale（/en/...）
    - Cookie NEXT_LOCALE
    - Geo（若有）：偵測出的國家代碼（例如 'TW'）
    - 快取資料：Languages（支援語系列表 + 動態預設）、Locales（國家→語系對照）
- 建議優先序
    1) URL requestLocale 屬於支援語系 → 使用
    2) Cookie NEXT_LOCALE 屬於支援語系 → 使用
    3) Geo 對應 Locales 映射的語系屬於支援語系 → 使用
    4) 動態預設語系（由 Languages 推導） → 使用
    5) 靜態預設 routing.defaultLocale → 兜底
- 產物
    - 最終 locale：供 next-intl 載入 messages/{locale}.json
    - 可選：決策來源（url/cookie/geo/dynamicDefault/fallback）便於觀測

## 7. 跨資料相依與一致性
- 支援語系來源
    - 建議由 LanguageRepository（或 I18nIntegration 門面）提供 supportedLocales 與 dynamicDefaultLocale
- 一致性檢查
    - 任何候選語系需包含於 supportedLocales；否則回退動態預設（再不行回靜態預設）
- 監控與日誌
    - 記錄 locale 決策來源分佈、快取命中率與降級次數

## 8. 執行流程（Repository 標準流程）
1) 組 key（與 tags）
2) cache.get(key)
3) 命中 → 回傳
4) 未命中 → service API
5) 成功 → cache.set(key, data, { ttl, tags }) → 回傳
6) 失敗 → 回傳錯誤或「舊值優先」（stale-while-revalidate）

## 9. SSR/CSR 與 UI
- SSR：在 request.ts 內使用「語系決策用例」取得最終 locale，動態載入 messages；在 layout/page 中如需語系列表 UI，再用 SSR 用例預取並以 props 提供給 Client 組件即可
- CSR：語系切換僅處理 Cookie 寫入與路由跳轉（與決策流程解耦）

## 10. 清除與更新（Invalidation）
- 事件驅動：CMS 更新 → 清除 TAGS.LANGUAGES 或 TAGS.LOCALES
- 手動清除：/api/admin/cache/clear（需權限）
- 自動到期：TTL 到期自動失效，存取時懶移除

## 11. HTTP/瀏覽器/CDN 協作
- 靜態/低變動：Cache-Control: public, s-maxage=<ttl>, max-age=<ttl>
- 動態/個人化：private 或縮短 s-maxage；搭配 Vary: Accept-Language, Accept-Encoding
- 內外一致：建議對齊內部 TTL 與 s-maxage，避免雙重過期不一致

## 12. 錯誤處理與降級策略
- 快取讀取錯誤：記錄警告，嘗試 API 補數據
- API 失敗：
    - 保守：回錯並記錄
    - 進階：若保留舊值，先回舊值並背景重試（SWR）
- 觀測：hit/miss、來源（cache/api）、延遲、set/evict 次數

## 13. 安全與最佳實務
- 共享快取不得含敏感資料；會員頁面用 private 或極短 s-maxage
- 環境隔離：不同環境（dev/stage/prod）使用不同前綴與實例
- 清除端點需權限驗證、頻率限制與審計日誌

## 14. 擴充模板（新增資料型別）
1) 在快取設定中新增 DataType TTL/Tags
2) 建立 features/<domain>/ 的 domain/infrastructure/application/use-cases/presentation（視需求）
3) SSR 用 layout/page 用例預取
4) 補 tests 驗證命中/未命中、TTL 與降級

---

# 實務運用

以下以 Language（網站支援語系列表、動態預設）與 Locales（國家→語系對照）為例。

## A. Language（網站支援語系）快取與使用
- Key：generateKey('LANGUAGES','list')
- TTL：CACHE_CONFIG.TTL.LANGUAGES（預設建議 7200 秒）
- Tags：CACHE_CONFIG.TAGS.LANGUAGES（如 ['languages','static-data']）
- Repository 流程：快取 → API → 回填
- SSR：getLanguagesForSSR() 在 layout/page 取語系列表（若要渲染下拉）

前端下拉（兩種）
- 內含導頁：features/language/presentation/components/LanguageSwitcher.tsx
- Server→Client（props）：LanguageSwitcherStandalone + LanguagesSection.server.tsx

## B. Locales（國家→語系對照）快取與使用（新增）
- 型別：CountryLocaleMapping = Record<string, string>
- Key：generateKey('LOCALES','country-map')
- TTL/Tags：使用 CACHE_CONFIG.TTL.LOCALES / CACHE_CONFIG.TAGS.LOCALES
- Repository
    - getLocales()：快取優先 → API → 回填
    - getLocaleByCountry(country)：從映射查語系；查無回 null

## C. SSR 語系決策用例（建議）
- 用例：features/locales/application/use-cases/resolveLocaleForSSR.ts
- 輸入：requestLocale（URL）、Cookie（NEXT_LOCALE）、detectedCountry（若有）
- 邏輯：優先序（URL → Cookie → Geo→ 動態預設 → 靜態預設），並以 Language.supportedLocales 驗證
- 產出：{ locale }，供 request.ts 載入 messages

## D. 與 next-intl 對接（request.ts）
- 於 SSR：
    1) 呼叫語系決策用例（或 Integration 門面）取得最終 locale
    2) 動態 import messages/{locale}.json；找不到則回退 default
    3) 回傳 { locale, messages } 供 next-intl 渲染

---

# 測試與驗收（Language + Locales）

## 單元測試
- Language
    - 命中/未命中、TTL 到期後重取、API 失敗降級策略
- Locales
    - 命中/未命中、TTL 到期後重取、查無國家映射回 null
- 語系決策
    - URL/COOKIE/GEO 分支與優先序
    - 候選語系不在支援清單 → 回退動態預設
    - messages 檔缺失 → 回退 default，不中斷 SSR

## 觀測指標（建議）
- 語系決策來源分佈：url/cookie/geo/dynamicDefault/fallback
- Language/Locales 命中率（hit/miss）、延遲
- 降級次數（API 失敗或 messages 回退）

---

# FAQ（擇要）
- 為什麼不只用 HTTP 快取？  
  SSR 內部仍需資料與決策，HTTP 快取不足以覆蓋伺服器端相依。
- 何時改用 Redis？  
  多機部署或高流量場景；切策略即可，領域層無需改動。
- Tags 有什麼用？  
  精準清除、觀測分群、降低全量清除風險。