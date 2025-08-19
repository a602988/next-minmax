# 理位置偵測策略

一、目標與範圍
- 目標
    - 基於使用者 IP 的國家/城市偵測，用於：
        - 國家站點建議/重導（suggest/force）
        - 初始語系建議（與 next-intl 串接）
        - 行銷與內容個性化的國別條件

- 本階段範圍
    - 實作第三方 API 模式（api-only）的 geoplugin.com 供應商
    - 建立統一的抽象層，後續能擴充 ipapi、ipinfo、ip-api 等
    - 允許各專案透過設定挑選供應商與策略（cdn-only, api-only, cdn-fallback）
    - 與 Cookie、SSR 初始化流程整合：只做 suggest（不自動跳轉）

二、配置與開關（建議）
- 伺服器端
    - GEO_DETECTION_ENABLED: true | false
    - GEO_API_PROVIDER: "geoplugin" | "ipapi" | "ipinfo" | "ip-api"（先預設 geoplugin）
    - GEO_API_TIMEOUT: 毫秒（建議 500-800ms）

- 客戶端（如需前端 fallback 或顯示提示）
    - NEXT_PUBLIC_GEO_DETECTION_STRATEGY: "cdn-only" | "api-only" | "cdn-fallback"（預設 api-only）
    - NEXT_PUBLIC_GEO_API_PROVIDER: 同上
    - NEXT_PUBLIC_GEO_API_TIMEOUT: 毫秒

三、架構設計
- 分層
    - Provider Adapter 層：針對不同第三方服務，實作擷取與轉換邏輯
    - 標準資料模型層：統一輸出資料結構，隱藏供應商差異
    - Orchestrator 層（Strategy）：依策略決策（cdn-only/api-only/cdn-fallback）+ 快取 + 逾時/降級
    - SSR 整合：於進入流程中（middleware/route handler/server component）呼叫，更新 Cookie（detected_country / suggested_*）

- 快取
    - 記憶體快取（TTL 建議 10~30 分鐘，可依 GEO_API_TIMEOUT 與流量調整）
    - Key：以來自 X-Forwarded-For / 真實客戶端 IP 的 /24 網段作為弱快取粒度，降低濫用與爆量
    - 可選：CDN 層快取（視供應商允許與隱私政策）

- 逾時與降級
    - 逾時：GEO_API_TIMEOUT（建議 500-800ms）
    - 降級：回傳 null 或僅 countryCode = DEFAULT，避免阻塞 SSR

- 隱私
    - 僅保留偵測結果（國碼與語系建議），不記錄完整 IP
    - Cookie 保存 1 天（detected_country/suggested_*），遵循隱私政策與同意機制

四、標準資料模型
- 統一輸出資料（GeoResult）
    - ip?: string
    - countryCode: string | null 例：TW/US/JP
    - countryName?: string | null
    - region?: string | null
    - city?: string | null
    - latitude?: number | null
    - longitude?: number | null
    - timeZone?: string | null
    - currency?: { code?: string | null, symbol?: string | null } | null
    - raw?: unknown（保留供應商原始回應做除錯）
    - provider: "geoplugin" | "ipapi" | "ipinfo" | "ip-api"
    - fromCache: boolean
    - elapsedMs: number

五、geoplugin.com 供應商說明（本階段主角）
- 端點
    - [https://www.geoplugin.net/json.gp?ip={ip}](https://www.geoplugin.net/json.gp?ip=%7Bip%7D)
    - 若不帶 ip 參數，會以呼叫端來源 IP 偵測

- 回應欄位（常用）
    - geoplugin_request: IP
    - geoplugin_countryCode: 國家代碼（如 "TW"）
    - geoplugin_countryName: 國家名稱
    - geoplugin_region / geoplugin_regionCode
    - geoplugin_city
    - geoplugin_latitude / geoplugin_longitude
    - geoplugin_timezone
    - geoplugin_currencyCode / geoplugin_currencySymbol

- 限制與風險（重要）
    - 免費、無金鑰；適合開發/驗證，不建議直接用於生產
    - 可靠性與速率限制不可控
    - 建議：生產時至少用 cdn-fallback，或改為有 SLA 的供應商

- 標準化轉換
    - countryCode = geoplugin_countryCode || null
    - timeZone = geoplugin_timezone || null
    - currency = { code: geoplugin_currencyCode, symbol: geoplugin_currencySymbol }


七、策略管線（api-only 先行）

- 流程
    1. 檢查 GEO_DETECTION_ENABLED(ip 地理偵測功能開關)：為 false 則直接返回 null
    2. 取得客戶端 IP（優先 X-Forwarded-For，否則 req.ip），若內網/保留位址可不傳給供應商
    3. 查快取：命中則返回（fromCache = true）
    4. 呼叫 geoplugin，逾時則降級為 null
    5. 寫入快取（合規資料，不存原始 IP）
    6. 產生建議：country → 建議語系、建議子站
    7. 設 Cookie：detected_country / suggested_language / suggested_site（有效 1 天）

- 逾時/錯誤
    - 逾時或錯誤時：返回 null，保留預設語系與站點，不阻塞渲染

八、與 Cookie/SSR 整合（建議）
- Cookie 名稱與行為
    - detected_country：1 天
    - suggested_language / suggested_site：1 天
    - user_preferred_site / NEXT_LOCALE：使用者操作時更新，優先級高於系統建議

- SSR 呼叫點
    - 中介層（middleware/route handler）或伺服器端頁面載入初期
    - 機器人排除：偵測爬蟲 UA 時跳過偵測，保留 SEO 抓取完整性

- 決策優先序
    1. 使用者偏好（cookies）
    2. 系統建議（偵測結果轉換）
    3. 預設語系/站點

九、測試與驗證
- 單元測試
    - geoplugin 轉換映射（countryCode/timeZone/currency）
    - 逾時與錯誤降級
    - 快取命中與粒度

- 端到端測試（本機/測試環境）
    - 模擬不同 IP（可 stub provider 回傳）
    - Cookie 寫入與後續頁面語系渲染是否一致

- 非功能性
    - 延遲統計（elapsedMs）
    - 錯誤率監控與告警（如 API 過載）

十、後續擴充計畫
- 新增供應商 adapter
    - ipapi.co、ip-api.com、ipinfo.io、freegeoip.app
    - 以相同介面 GeoProvider 實作，統一資料模型

- 新增策略 cdn-fallback
    - 流程：CDN Header（如 cf-ipcountry）→ 若無則走 provider → 預設

- 生產化建議
    - 切換到具 SLA 的供應商（含 API key、速率限制保護、重試與配額監控）
    - 加入 Redis 快取（多機共享）
    - 加入黑名單/速率限制，避免被濫用

十一、最小落地清單（可立即執行）
- 設計手冊落稿（本文件）
- 建立 GeoProvider 介面與 geoplugin adapter
- 建立 Orchestrator（api-only），含快取、逾時與 Cookie 寫入
- 在 SSR 入口整合（middleware/route handler/server component 擇一）
- 寫 3 個單元測試：成功、逾時、快取命中
- 文件：如何透過環境變數切換 provider 與策略

如果你要，我可以下一步直接補上：
- Orchestrator 服務與快取的 TypeScript 範例
- SSR 入口整合與 Cookie 寫入範例
- .env.sample 建議值與不同環境（開發/測試/生產）建議配置


# 運作目錄

```
src/
  features/
    geo/
      providers/                      # 第三方供應商介面層（Adapter）
        geoplugin.provider.ts         # geoplugin.com 介面實作（本階段主角）
        ipapi.provider.ts             # 預留：ipapi.co（stub/之後擴充）
        ipinfo.provider.ts            # 預留：ipinfo.io（stub/之後擴充）
        ipapi-com.provider.ts         # 預留：ip-api.com（stub/之後擴充）
        provider.types.ts             # Provider 介面、供應商回傳轉換型別

      strategy/                       # 偵測策略與協調層（Orchestrator）
        geo-strategy.ts               # cdn-only / api-only / cdn-fallback 的決策流程
        cdn-detector.ts               # 從 CDN Header 取國碼（如 cf-ipcountry）

      services/                       # 對外服務門面（Application Service）
        geo.service.ts                # 提供 detectCountry / detectGeo 的單一入口；包裝快取、逾時、降級

      utils/                          # 輔助工具
        ip.ts                         # 解析 X-Forwarded-For、判斷私有/保留位址
        cache.ts                      # 記憶體快取（TTL、/24 粒度）
        robots.ts                     # 爬蟲偵測 (User-Agent)
        timing.ts                     # 計時/耗時統計

      cookies/                        # Cookie 讀寫
        geo-cookies.ts                # detected_country / suggested_site / suggested_language 讀寫

      constants/
        geo.constants.ts              # Cookie 名稱、Header 名稱、預設 TTL 等常數

      types/
        geo.types.ts                  # GeoResult（你剛定義的型別）與共用型別

      __tests__/                      # 測試
        geoplugin.provider.test.ts    # geoplugin 轉換映射與錯誤/逾時測試
        geo-strategy.test.ts          # 策略：cdn-only / api-only / cdn-fallback 行為測試
        geo-cookies.test.ts           # Cookie 讀寫與優先序測試

  i18n/
    request.ts                        # SSR 語系決策（可在此透過 GeoService 讀 Cookie 或觸發偵測）
    routing.ts                        # 語系設定（supported、default）
    navigation.ts
    locale-cookie.ts

  middleware.ts                       # Next 中介層（建議：在 suggest/force 模式下先於此寫入建議 Cookie）

  lib/
    config/
      locale.config.ts                # 地理偵測策略、超時、供應商等設定的集中讀取
      cache.config.ts                 # 快取策略（可共用）
```


運作流程（高層次）
- middleware.ts（建議接點）
    - 檢查是否啟用國際化與地理偵測、判斷是否為爬蟲
    - 呼叫 features/geo/services/geo.service.ts 的 detectCountry/detectGeo
    - 依策略：cdn-only → 直接讀 Header；api-only → 透過 providers（預設 geoplugin）；cdn-fallback → 先 CDN 後 API
    - 寫入 Cookie：detected_country、suggested_site、suggested_language（1 天）
    - suggest 模式不跳轉；force 模式再依 COUNTRY_SUBDOMAIN_MAP 決策是否重導

- i18n/request.ts（SSR 語系決策）
    - 讀取 Cookie：優先使用 user_preferred 與 NEXT_LOCALE
    - 若無使用者偏好則採用前一步寫入的建議語系 suggested_language
    - 載入對應 messages，完成 SSR 渲染

- features/geo/services/geo.service.ts
    - 對外單一入口：整合策略（strategy/geo-strategy.ts）、快取（utils/cache.ts）、供應商（providers/*）
    - 逾時/降級：依設定（例如 800ms）失敗時回傳 null，不阻塞渲染
    - 產生建議語系/站點對應（可在此或 middleware 端依專案規則映射）

- providers（以 geoplugin.provider.ts 先完成）
    - 呼叫 [https://www.geoplugin.net/json.gp?ip={ip}](https://www.geoplugin.net/json.gp?ip=%7Bip%7D)
    - 將回傳標準化為 types/geo.types.ts 的 GeoResult 格式
    - 補上 elapsedMs、provider 標記、fromCache

你可以先建立上述目錄與空檔案，優先填入：
- types/geo.types.ts（GeoResult 型別）
- providers/geoplugin.provider.ts（實作）
- strategy/geo-strategy.ts（api-only 版）
- services/geo.service.ts（對外入口）
- cookies/geo-cookies.ts（Cookie 讀寫）
- middleware.ts（導入 GeoService、寫 Cookie，暫不跳轉）

需要我接著提供上述檔案的範本程式碼嗎？我可以直接給出可貼上的初版骨架。
