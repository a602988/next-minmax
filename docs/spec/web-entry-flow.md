# 網頁進入流程設計總覽

## 開發階段 API Mock 策略
* 目的： 在專案開發初期，為了讓前端開發不受後端 API 進度影響，採用 Next.js API Routes 建立 Mock API，並透過環境變數控制是否使用 Mock 或正式 API。
* 執行條件： 開發階段或測試環境。
* 設計原則：
    * 環境變數控制： 透過 `USE_MOCK_API` 環境變數切換 Mock 與正式 API
    * API 抽象層： 建立統一的 API 服務層，隱藏 Mock 與正式 API 的差異
    * 漸進式替換： 隨著後端 API 就緒，逐步從 Mock 切換到正式呼叫
    * 開發體驗優化： Mock API 可模擬延遲、錯誤等真實情境
* 實作架構：
    * Mock API 路由： 使用 Next.js API Routes 在 `/api/ssr/` 路徑下建立 Mock 端點
    * 服務抽象層： 建立 `languageService`、`contentService` 等服務類別，根據環境變數決定呼叫 Mock 或正式 API
    * Mock 資料管理： 將 Mock 資料集中管理，支援多專案、多語系的測試資料
    * 環境配置： 開發環境預設使用 Mock，正式環境自動切換到後端 API
* 替換時程：
    1. 前期開發： 完全使用 Mock API，專注於前端邏輯與 UI 開發
    2. 中期整合： 後端 API 就緒後，優先替換核心 API（如語系 API）
    3. 後期完善： 逐步替換所有 API，保留 Mock 作為測試與開發輔助
* 初期模擬資料：
  * 網站語系清單 languages
  * 國家語系對照表 locales
  * 頁面選單 system-menus
  * 網站資訊 web-data
  * 網頁資料-首頁 detail
  

## SEO 策略

### 國際化網站避免重複內容並正確標示語系版本。

hreflang 標籤：告訴搜尋引擎哪些頁面是同一個內容的不同語系版本，在每個頁面的 <head> 中設定 hreflang 標籤。

範例：

```html
<link rel="alternate" hreflang="en" href="https://example.com/en/about" />
<link rel="alternate" hreflang="zh" href="https://example.com/zh/about" />
<link rel="alternate" hreflang="x-default" href="https://example.com/en/about" />
```

## 相關機制說明

* 快取更新清除機制
    * 策略概述：主要採用事件驅動的自動失效機制，以實現內容更新的即時性。同時保留手動清除功能作為備援，以應對緊急或特殊情況。
    * 1. 事件驅動（event-driven）快取失效
        * 做法：當 CMS 後台內容被修改或發布時，觸發 Webhook 或訊息佇列（如 Redis Pub/Sub），通知前端伺服器精準清除相關快取（例如變動的頁面路徑或模組 ID）。
        * 優點：實現「即時快取失效」，無需等待快取生命週期結束，提供了更好的使用者體驗和更高的內容新鮮度。
    * 2. 手動清除快取（備援機制）
        * 目的：用於應對緊急更新需求，或在事件驅動機制失效時作為備援。
        * 清除路徑：`POST /api/admin/cache/clear`，需要後台管理員身份驗證。
        * 支援操作：可清除全部快取。
        * 安全考量：應具備 JWT 或 Session 驗證、操作日誌記錄和頻率限制等機制。
     
* CDN 快取協作邏輯：
  * 當 cache.cdn.enabled: true 時： 
    * 伺服器在回應時會根據內容屬性（靜態或動態）設置不同的 HTTP Cache-Control 標頭。 
    * 靜態內容：設定 Cache-Control: public, max-age=...，讓 CDN 和瀏覽器都能快取較長時間（例如 1-2 小時）。 
    * 動態內容：設定 Cache-Control: private, max-age=...，或 Cache-Control: s-maxage=...，告知 CDN 可以快取短時間，但瀏覽器不應快取。

  * CDN 快取失效： 
    * 在內容管理系統（CMS）更新時，除了清除內部快取外，也應觸發 CDN 的快取清除（Purge）機制，確保 CDN 上的內容能即時更新。這通常需要整合 CDN 供應商（如 Cloudflare, Akamai）提供的 API。
  * 有 CDN 且有會員： 
    * 對於會員專屬的個人化頁面，應使用 private 快取標頭，確保 CDN 不會快取，或快取時間極短，由伺服器負責個人化渲染。 
    * 這樣可以避免個人資料外洩的風險，並確保每位會員看到的內容都是專屬的。
    

## 開發說明


### 1. 國際化資料處理

* 全域設定參數
  * 國際化功能總開關：`internationalization.enabled: true | false (預設)`
      說明：整份國際化功能的最高權限開關。 
      * false (預設): 完全停用所有後續的國家站點判斷、語系偵測及快取等邏輯。 
      * true: 啟用整套國際化邏輯。
  
  * 快取策略： `i18n.cache.strategy`: `"memory" | "none"| "redis"`
      說明：當國際化功能啟用時，用以決定設定資料的獲取與快取方式。核心原則為「API 優先，檔案備援」。
      * `"memory"`(預設) 記憶體快取動態資料
        * 適用場景：適用於單一伺服器部署，或不希望引入 Redis 的情境。此策略將快取資料儲存在伺服器的記憶體中。
        * 運作方式：
            * 快取機制：伺服器在記憶體中快取設定資料，並設定一個生命週期 (TTL)，例如 10 分鐘。
            * 讀取邏輯：當需要設定時，若記憶體快取未過期，則直接使用。
            * 更新與降級：若記憶體快取過期，則執行以下操作：
              a. 嘗試呼叫外部 API 獲取最新設定。
              b. 若 API 成功：將新資料更新至記憶體快取，並建議同時覆寫本地的靜態備份檔案，以保持備份檔新鮮。
              c. 若 API 失敗：從本地的靜態備份檔案讀取資料來用，並在一段短時間後重試 API。
          * 優點：部署簡單，無 Redis 依賴，大部分請求效能高。
          * 缺點：當快取過期時，效能與穩定性會短暫依賴外部 API。
      * `"none"` 每次直接呼叫 API（開發用）
        * 適用場景：本地開發與除錯，強烈不建議用於任何生產環境。
        * 運作方式：
          * 在每一次需要設定時，都直接呼叫外部 API。
          * 若 API 呼叫失敗，則降級讀取本地的靜態備份檔案。
      * `"redis"`：適用於多台伺服器部署、高流量環境，或需要集中管理快取的情況。此策略將快取資料儲存於外部 Redis 服務。
    * 優點：修改 API 後端能立即看到效果，方便開發。
    * 缺點：效能極差，每個相關請求都會被外部網路呼叫阻塞。

  * 地理位置偵測策略：`geo.detection.strategy`: `"cdn-only" | "api-only" | "cdn-fallback"`
    說明：根據主機部署環境選擇最適合的地理位置偵測方式。
      * `"cdn-only"`: 僅使用 CDN 提供的地理標頭
          - 適用場景：Vercel、Netlify、Cloudflare Pages 等平台
          - 優點：零延遲、高可靠性
          - 缺點：僅限特定平台使用
      * `"api-only"`:(預設) 僅使用外部 API 服務
          - 適用場景：私人 VPS、Akamai Cloud Computing 等
          - 服務：geoPlugin API
          - 超時設定：500-800ms
      * `"cdn-fallback"`: CDN 標頭優先，API 備援
          - 適用場景：有 CDN 但不確定穩定性的環境
          - 邏輯：先檢查 CDN 標頭，失敗時呼叫 API

  * 國家偵測模式：`geoRedirectMode: "off" | "suggest" | "force"`
      * `"off"`: (預設)停用國家判斷與導引。(內容與資訊型網站、B2B (企業對企業) 網站)
      * `"suggest"`: 偵測後僅透過 HTTP 標頭傳遞建議，不自動跳轉(大型電商、跨國電商網站)。
      * `"force"`: 偵測後自動重導向至對應子站()。

### 2. SSR初始化與資料處理

執行條件：`internationalization:true`(國際化功能總開關:開)
* 數據資料
  * 靜態資料（無需快取）：
    * 快取資料：國家對應子站映射 (`/src/data/geo-sites-mapping.json`)
      * 執行條件：`geoRedirectMode: ""force"`
    * 說明：
        * 資料：國家對應子站映射 (/src/data/geo-sites-mapping.json)。 
        * 處理：這些資料在專案編譯時就已靜態載入，直接在記憶體中使用，無需快取。 
        * 更新：透過修改檔案、Git 提交與重新部署來更新。

  * 動態資料 (啟動時載入與快取)
    * 資料：
      * 網站語系清單 (Website Locales)：這是您網站支援的所有語系。
      * 國家語系對照表 (Country-Language Mapping)：此表定義了各國家的預設語系，例如 {'TW': 'zh-TW', 'US': 'en-US'}。
      * 頁面選單 (System-Menus)：全站通用的導航選單資料。
      * 網站資訊 (Web-Data)：網站標題、聯絡資訊等全域設定。
    * 處理流程： 
      * 伺服器啟動階段： **伺服器啟動階段**：當伺服器啟動時，應用程式會檢查快取，若快取中無這些公用資料，則透過外部 API 一次性取得所有
      * 快取更新與失效： 
        * 若需緊急更新資料，可透過手動清除快取路徑 (/api/admin/cache/clear) 來觸發重新載入。 
        * 當國際化配置在 CMS 後台被修改時，應觸發事件驅動的快取失效機制，精準清除這些動態資料的快取，確保所有伺服器實例都能立即載入最新資料。
    * next-intl 整合與 SSR 渲染流程
      * 語系決策：在每個 SSR 請求中，根據「國家站點與語系決策」流程，從已快取的「網站語系清單」與「國家語系對照表」中，結合使用者 Cookie 和地理位置偵測，決定出本次渲染的最終語系 (locale)。 
      * 翻譯檔案載入：根據決策出的最終語系，動態載入對應的翻譯檔案（例如 messages/zh-TW.json）。next-intl 會使用這個翻譯檔案來進行頁面渲染。 
      * 提供給 next-intl：將最終的語系和翻譯檔案傳遞給 next-intl，完成 SSR 渲染。


### 3. 國家站點與語系決策

初期做到範圍：僅啟用國家偵測（`geoRedirectMode: "suggest"`）與對應 國家語系對照表
* 目的：
  根據使用者 IP 判斷其國家位置，依據配置決定是否： 
  1. 將使用者自動導引至對應的國家子站（例如 tw.example.com）。 
  2. 僅提供建議站點資訊予前端，用於提示或介面呈現。
  3. 依據國家對應所適合語系
* 核心資訊：
  * Cookie 名稱：
    * `NEXT_LOCALE`：使用者偏好語系（next-intl 標準，180 天有效）
      - 內容：語系代碼，如 `"zh-TW"`, `"en-US"`, `"ja-JP"`
      - 來源：使用者主動切換語系時設定
      - 管理：由 next-intl 自動處理
    * `user_preferred_site`：使用者手動選擇的站點（180 天有效）
        - 內容：子站域名，如 `"tw"`, `"us"`, `"jp"`
        - 來源：使用者主動切換站點時設定
    * `detected_country`：系統自動偵測的國家（1 天有效）
      - 內容：國家代碼，如 `"TW"`, `"US"`, `"JP"`
      - 來源：IP 地理位置偵測結果
    * `suggested_site`：系統建議的站點（1 天有效）
      - 內容：建議的子站域名，如 `"tw"`, `"us"`, `"jp"`
      - 來源：根據偵測國家查詢「國家對應子站映射」得出
    * `suggested_language`：系統建議的語系（1 天有效）
        - 內容：建議的語系代碼，如 `"zh-TW"`, `"en-US"`, `"ja-JP"`
        - 來源：根據偵測國家查詢「國家語系對照表」得出
  * 決策優先級：
    1. 使用者選擇優先：
        - `user_preferred_site` 存在 → 使用該站點
        - `NEXT_LOCALE` 存在 → 使用該語系
    2. 系統建議次之：
        - 無使用者偏好時，使用 `suggested_site` 和 `suggested_language`
    3. 預設值兜底：
        - 所有偵測失敗時，使用系統預設站點和語系
  * Cookie 更新時機：
    - 使用者主動操作：立即更新 `user_preferred_*` 系列
    - 系統偵測完成：更新 `detected_country` 和 `suggested_*` 系列
    - 偵測失敗：僅更新 `detected_country` 為 null，保留其他建議值
* 導引邏輯流程：
  1. 機器人排除：
    * 依據 User-Agent 匹配已知的爬蟲列表，對於重要爬蟲（如 Googlebot）可輔以 rDNS (反向 DNS 查詢) 驗證其真實性。
    * 若為爬蟲，略過所有導引，保留 SEO 抓取完整性。
  2. cookie檢測：
     * 若 Cookie 存在 `user_preferred_site`，表示使用者已手動選擇站點，直接重定向至該子站，流程結束。
     * 若 Cookie 存在 `NEXT_LOCALE`，表示使用者已手動選擇語系，略過語系決策流程。
  3. 國家偵測： 
     * 根據 `geo.detection.strategy` 設定執行對應策略
     * 通用降級處理：
       - 當所有偵測方式失敗時，detected_country 設為 null
       - 進入降級模式，自動切換為 default site
       - 記偵測狀態：`x-geo-status: failed-timeout` 或 `x-geo-status: no-geo-data`
     
  4. 模式處理：
    * `force`強制導引: 根據偵測到的國家代碼查詢「國家對應子站映射」得出建議站點，執行 HTTP 307 臨時重定向。
    * `suggest`: 根據偵測到的國家代碼查詢「國家語系對照表」得出建議語系。
      * 無法取得國家對應語系時，將依據next-intl判斷適當語系

### 4. 頁面資料獲取與快取策略：

* 資料來源與參數傳遞 
  * 外部頁面內容 API。 
  * 傳遞參數：語系代碼、頁面路徑、使用者 Cookie 資訊（會員等級、登入狀態、會員群組等）。 
* 快取策略配置與分層架構 
  * 總體開關：`cache.enabled、cache.cdn.enabled、features.membership.enabled`。
* 分層架構： 
  * 第一層：頁面結構快取 
    * 定位：公共且共享的頁面骨架快取。 
    * 鍵值：`page-structure-${project}-${language}-${uri}`。 
    * 處理邏輯：當 `cache.enabled: true` 時啟用。快取 API 回傳的頁面結構（不含具體模組資料）。當後端 API 未提供明確快取標頭時，可使用自動偵測機制作為備援，並設定較長 TTL（1-2 小時）。 
  * 第二層：模組資料快取（權限過濾） 
    * 定位：根據會員群組動態快取模組資料。 
    * 鍵值：`module-data-${project}-${language}-${uri}-${module-api-url}-${groupHash}`。 
    * 處理邏輯：當 `features.membership.enabled: true` 時啟用。在伺服器端渲染時，遍歷頁面結構中的 modules，根據 groupHash 查詢或建立模組資料快取。快取時間設定為中期 TTL（5-30 分鐘）。 
  * 第三層：個人化渲染快取 
    * 定位：針對單一使用者注入個人化內容。 
    * 鍵值：`personal-${userId}-${language}-${uri}`。 
    * 處理邏輯：從第二層快取取得資料後，注入個人化內容，並生成最終頁面。設定短期快取（5-10 分鐘）。 
* 快取失效策略 
  * 自動失效：當 CMS 更新時，透過事件驅動機制精準清除相關快取。 
  * 手動失效：提供 `/api/admin/cache/clear` 供管理員手動清除快取。 
  * 分層失效：據變動類型（使用者群組、模組內容、頁面結構）清除對應層級的快取。 
* CDN 協作 
  * 當 `cache.cdn.enabled: true` 時，伺服器會設定 `Cache-Control` 標頭（public, private 等）與 CDN 協作。 
  * 會員專屬頁面應使用 private 標頭，確保個人資料不被 CDN 快取。 
  * CMS 更新時，應整合 CDN 的快取清除（Purge）API。


## 實作

「功能導向」或「領域驅動」的結構

### 應用的目錄結構

```
my-business-website/
├── messages/                            # 國際化翻譯檔案 (JSON等)
│   ├── zh-TW.json
│   ├── en.json
│   └── ...
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx                   # 網站版型配置，注入語系與國家資訊元數據
│   │   │   └── page.tsx                     # 網站頁面配置，注入語系與國家資訊元數據
│   │   ├── not-found.tsx                    # 自訂 404 頁面
│   │   ├── layout.tsx                       # 根網站版型配置
│   │   └── api/                             # 後端 API 路由
│   │      └── ssr/                           # Mock API（開發測試用）
│   │         ├── _data/                      # Mock API 的靜態資料
│   │         │   ├── languages.data.ts       # 語系列表的 Mock 資料
│   │         │   └── pages.data.ts           # 頁面內容的 Mock 資料
│   │         ├── languages/
│   │         │   └── route.ts                # 語系資料獲取的 Mock API
│   │         ├── locales/
│   │         │   └── route.ts                # 國家語系對照表  Mock API
│   │         └── page/
│   │             └── home/
│   │                 └── route.ts            # 內容 API 的 Mock 路由
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── LanguageSwitcher.tsx
│   │   ├── layout/
│   │   │   └── MainLayout.tsx
│   ├── lib/
│   │   ├── apiClient.ts                    # 全局 API 客戶端配置
│   │   ├── cookie.ts                       # 提供最基礎、最通用的 get, set, remove 函式，並在內部統一處理好安全設定。
│   │   └── utils.ts                        # 通用工具函數
│   ├── features/
│   │   ├── i18n/                           # 語系功能模組
│   │   │   ├── services/                   # 語系相關的服務
│   │   │   │   └── languageService.ts      # 語系服務，處理語系 API 請求
│   │   │   ├── utils.ts                    # 語系相關的工具函數（包含 createTranslator 和 cookieManager 的功能）
│   │   │   ├── cookies.ts                  # Cookie 管理
│   │   │   └── types.ts                    # 語系相關的類型定義
│   │   └── content/                        # 內容功能模組
│   │       ├── services/                   # 內容相關的服務
│   │       │   └── pageService.ts          # 頁面服務，處理頁面 API 請求
│   │       ├── utils.ts                    # 內容相關的工具函數
│   │       └── types.ts                    # 內容相關的類型定義
│   ├── i18n/
│   │   ├── nextIntlConfig.ts               # next-intl 多語系框架配置與同步
│   │   ├── routing.ts                      # 路由配置 (官方要求)
│   │   └── request.ts                      # next-intl 請求配置 (官方要求)
│   ├── types/                              # 全域類型定義
│   │   ├── api                             # API 基本通用
│   │   ├── api/                            # API 相關類型
│   │   │   ├── language.types.ts           # 語系 API 的類型定義
│   │   │   └── page.types.ts               # 頁面 API 的類型定義
│   ├── env.mjs                             # 環境變數類型定義（包含重導開關等）
│   └── middleware.ts                       # Next.js 中間件，負責地理重導與語系導引邏輯（包含 languageRedirect 的功能）
```
