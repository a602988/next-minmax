# 網頁進入流程

## 重點說明


### 設計理念
- **體驗優先：** 自動偵測國家與語言，減少使用者操作
- **彈性設定：** 可開關地理重導功能（enableGeoRedirect）
- **效能最佳化：** 利用 CDN 與 Cookie 快取，減少 API 請求
- **一次性處理：** 對於特定資訊在會話週期或指定時間窗內僅處理一次
- **優雅降級：** 功能異常時自動退回預設行為

### 技術架構
- **語系/站點分離：** 國家用子網域，語言獨立切換，支援多語系
- **偏好記憶：** 使用者切換語言後會記住，下次自動套用
- **框架整合：** 使用 next-intl，支援 SSR + 前端語系切換
- **分層快取策略：**
  - 應用配置層：功能開關、國家對應表等靜態配置（啟動時載入一次）
  - Session級快取：地理位置偵測結果（同一session內重複使用）
  - 24小時快取：語系清單資料（透過Cookie版本控制自動更新）
  - 30天快取：使用者語系偏好（長期記住使用者選擇）

### 決策流程
1. 國家站點重定向 → 優先根據偵測到的國家進行站點跳轉
2. 語系資料 API 定義 → 定義如何獲取語系資料的規格
3. Cookie 檢查與設定 → 實際執行語系資料的獲取和快取管理
4. next-intl 配置同步 → 使用已準備好的語系資料配置框架
5. 語系導引決策 → 基於完整的語系配置進行導引
6. 最終語系確定 → 確定最終要使用的語系
7. 內容 API 呼叫 → 獲取頁面內容
8. 前端 UI 建議 → 提供使用者介面建議



## 步驟說明

###  1. 國家站點判斷與重定向
* **目的：** 根據使用者的 IP 位址判斷其所在國家，並依據網站配置，決定是否將其自動重定向到對應的國家子網域（例如 tw.example.com），或僅將國家資訊提供給前端介面使用。
* 網址結構：採用子網域 (Subdomain) 結構來區分不同國家站點(非語系，一個國家站點會有多個語系)。
* **核心資訊來源：**
  * **使用者 IP 地址：** 國家代碼：優先透過 CDN 邊緣運算平台（如 Vercel, Cloudflare）在 HTTP 請求頭中提供的地理位置資訊（x-vercel-ip-country）獲取。若此標頭不存在，則啟用備用方案，透過伺服器端的 IP 地理定位服務（如 MaxMind GeoLite2）將 IP 轉換為國家代碼。
  * **預先配置的「國家-子網域映射表」：** 一份預先配置的靜態設定，定義國家代碼與子網域的對應關係。例如：{ "TW": "tw", "US": "us", "JP": "jp" }。
  * **功能啟用開關：**
    * enableGeoRedirect: (布林值) 是否啟用地理位置判斷功能。
    * forceRedirect: (布林值) 在 enableGeoRedirect 為 true 的前提下，是否強制將使用者重定向到對應的國家站點。
* **判斷與處理邏輯：**
  * 啟用判斷： 首先檢查 enableGeoRedirect(地理位置) 是否為 true。若為 false，則完全跳過此步驟的後續邏輯。
  * 獲取國家代碼：
    * 獲取使用者的國家代碼 DetectedCountry（例如 "TW"）。
    * **錯誤處理與降級策略：**
      * 若 CDN 地理資訊不可用，自動切換到備用 IP 地理定位服務
      * 若所有地理定位服務都失敗或超時（建議設定 3-5 秒超時），則 DetectedCountry 設為 null
      * 當 DetectedCountry 為 null 時，跳過地理重定向邏輯，但語系功能仍可正常運作
    * Session級快取：DetectedCountry 結果在同一個 session 內快取，避免重複執行地理定位API
    * 查詢映射表，找到 DetectedCountry 對應的目標子網域 TargetSubdomain（例如 "tw"）。
    * 從當前請求的網址中，解析出當前的子網域 CurrentSubdomain（例如 "us"）。
  * 重定向決策
    * 如果 forceRedirect(重定向) 為 true 且 CurrentSubdomain(當前的子網域) 與 TargetSubdomain(目標子網域) 不符，伺服器將執行 302 臨時重定向，將使用者導向到正確的子網域，並保持原有的路徑和查詢參數。例如，從 https://us.example.com/path 重定向到 https://tw.example.com/path。
    * 在其他所有情況下（forceRedirect(重定向) 為 false，或使用者已在正確的子網域），不執行任何重定向。DetectedCountry(國家代碼) 資訊將被傳遞到後續步驟使用。

### 2. 語系資料獲取 API
* **目的：** 此 API 的功能是提供網站所有可用的語系清單，以及一個基於使用者情境的推薦預設語系~~。它是一個能力提供者，在需要時被呼叫。
* **執行條件：** 僅在「多語系網站」模式下 (enableMultiLanguage 為 true) 才可能被呼叫。
* **版本比對機制：**
  * 在呼叫 API 前，先檢查本地 Cookie 中的語系資料版本號和 ETag
  * 使用 HTTP 條件請求標頭進行版本比對：
    * `If-None-Match: "[ETag值]"` - 基於 ETag 的快取驗證
    * `If-Modified-Since: "[最後修改時間]"` - 基於時間戳的快取驗證
  * API 會比對版本資訊，若內容未變更則回傳 `304 Not Modified`，避免重複傳輸
  * 若版本不同或本地無版本資訊，則回傳完整的語系資料並附帶新的 ETag

* API： /api/ssr/languages?project=minmax2025&language=[語系]
  * project: 專案代碼 (例如 "minmax2025")
  * language: 語系資料
* **API 超時與錯誤處理：**
  * 設定合理的 API 超時時間（建議 3-5 秒）
  * 超時或失敗時使用靜態語系配置作為後備方案
  * 記錄 API 失敗日誌，但不影響網站基本功能運作
* 回傳資料：
  * availableLanguages: 可用語系清單 (例如 [{code: "zh-TW", name: "繁體中文"}, ...])
  * defaultLanguage: API 推薦的預設語系
  * version: 語系列表的版本號，用於快取控制 
  * ETag: 用於 HTTP 快取驗證的標識符


### 3. Cookie 檢查與語系設定
* **目的：** 管理語系相關的 Cookie，並在必要時觸發 API 呼叫以獲取最新的語系資料，實現高效能快取。
* **執行條件：** 僅在「多語系網站」模式下 (enableMultiLanguage 為 true) 執行。
* **處理邏輯：**
  1. **讀取現有Cookie：**
    * 讀取 languageData Cookie (語系資料快取)
    * 讀取 userPreferredLanguage Cookie (使用者偏好語系)

  2. **語系資料快取檢查：**
    * 檢查 languageData Cookie 是否存在且未過期 (24小時)
    * 提取其中的 etag 和 lastModified 用於 HTTP 條件請求

  3. **API呼叫決策：**
    * 若 Cookie 不存在或已過期 → 執行完整的 API 請求
    * 若 Cookie 存在且未過期 → 使用 ETag 和 Last-Modified 進行條件請求
    * 處理 API 回應：
      * **304 Not Modified：** 更新 Cookie 過期時間，繼續使用現有資料
      * **200 OK：** 將新的語系資料、ETag 和 Last-Modified 寫入 Cookie

  4. **確保語系資料就緒：**
    * 確保後續步驟有可用的語系清單和預設語系資訊
  
### 4. next-intl 語系配置同步
* **目的：** 將從 API 獲取的語系清單同步到 next-intl 框架配置中，確保路由和國際化功能正常運作。
* **執行條件：** 僅在「多語系網站」模式下 (enableMultiLanguage 為 true) 執行。
* **處理邏輯：**
  * **中間件 (Middleware) 配置：**
    * 從 languageData Cookie 讀取可用語系清單
    * 動態更新 next-intl 的 locales 配置
    * 設定 defaultLocale 為 API 回傳的預設語系
    * 維持 `localePrefix: 'as-needed'` 設定（預設語系不顯示前綴）
  * **i18n 配置同步：**
    * 驗證當前請求的 locale 是否在可用語系清單中
    * 若語系不支援，觸發 404 錯誤
    * 載入對應語系的翻譯檔案
  * **錯誤處理：**
    * 若 Cookie 中無語系資料或解析失敗，使用靜態預設語系清單
    * 確保 next-intl 始終有有效的語系配置可用

### 5. 語系導引決策 (僅多語系網站)
* **目的：** 當使用者訪問無語系前綴的URL時，自動導引到適當的語系URL。
* **執行條件：**
  * enableMultiLanguage(多語系網站) 為 true
  * 當前URL路徑無匹配語系前綴 (例如訪問 http://xxx.com 而非 http://xxx.com/en)
* **導引邏輯：**
  1. 確定目標語系 (優先順序)：
    1. 使用者偏好語系 Cookie (userPreferredLanguage)
    2. 瀏覽器語言偏好 (Accept-Language header)
    3. 地理位置推薦語系 (基於步驟 1 的 DetectedCountry)
    4. cookie中的預設語系
    5. 若以上皆無，則使用一個全域的預設語系。
  2. 執行302重定向到帶語系前綴的URL
    * **如果目標語系是預設語系：** 由於 `localePrefix: 'as-needed'` 設定，預設語系不需要前綴，因此保持原 URL 不變 (例如：http://xxx.com)
    * **如果目標語系非預設語系：** 執行302重定向到帶語系前綴的URL (例如：http://xxx.com → http://xxx.com/en)


### 6. 最終語系確定與路徑處理
* **目的 ：** 確定當前頁面最終要渲染的語系 (FinalLanguage) 和要傳遞給內容 API 的乾淨路徑 (CleanURI)。
* **處理邏輯 ：**
  * **單語系網站**
    * FinalLanguage 直接使用靜態配置的唯一語系。
    * CleanURI 為原始請求路徑
  * **多語系網站**
    * 確定 FinalLanguage (優先順序如下)：
      1. 從 URL 路徑前綴解析出的語系 (例如 /zh-TW/... → zh-TW)。
      2. 若無語系前綴，則使用預設語系 (因為 `localePrefix: 'as-needed'` 設定，預設語系的 URL 不包含前綴)
    * 確定 CleanURI:
      * **有語系前綴的情況：** 移除語系前綴部分，得到乾淨路徑 (例如：/en/about → /about)
      * **無語系前綴的情況：** 保持原始路徑不變 (例如：/about → /about，此時使用預設語系)


### 7. 呼叫內容 API 與錯誤處理
* **目的 ：** 使用前序步驟準備好的參數，獲取頁面所需的主要內容。
* **處理邏輯 ：**
  1. 組裝 API 請求:
    * language = FinalLanguage (來自步驟 4)
    * uri = CleanURI (來自步驟 4)
  2. 呼叫內容 API: GET /api/ssr/page/detail?project=...&language=[語系]&uri=[路徑]
    * **API 超時設定：** 建議設定 5-10 秒超時時間
    * **重試機制：** 失敗時可進行 1-2 次重試，間隔 1 秒
  3. 回傳處理:
    * 若 API 成功回傳資料 → 進入渲染流程。
    * 若 API 回傳無資料或發生錯誤 → 伺服器應回傳 { notFound: true }，觸發前端框架顯示 404 頁面。
    * **錯誤日誌記錄：** 記錄 API 失敗的詳細資訊，包含請求參數、錯誤類型和響應時間

### 8. 前端 UI 建議與資訊傳遞
* **目的 ：** 在伺服器完成渲染後，前端介面根據後端傳遞的元數據，向使用者顯示友善的切換建議。
* **一次性處理策略：**
  * **應用配置層 (啟動時載入一次)：**
    - `geoRedirectEnabled/multiLanguageEnabled` - 功能開關狀態
    - `countryMapping` - 國家與子網域對應表
    - `defaultLanguage` - 預設語系配置
    - `apiTimeout` - API 超時設定
  * **Session級快取：**
    - `detectedCountry` - 偵測到的國家代碼，同一session內重複使用
  * **24小時快取：**
    - `availableLanguages` - 可用語系清單，從Cookie快取讀取
  * **動態更新的資訊：**
    - `finalLanguage` - 當使用者切換語系時更新
    - `userPreferredLanguage` Cookie - 當使用者主動切換語系時更新
* **next-intl 整合：**
  * **語系切換實作：** 使用 next-intl 的 `useRouter` 和 `usePathname` 進行語系切換
  * **翻譯內容載入：** 透過 `useTranslations` Hook 載入當前語系的翻譯內容
  * **語系清單顯示：** 從 languageData Cookie 讀取可用語系，動態生成語系選擇器
  * **URL 結構維護：** 確保語系切換時保持當前頁面路徑和查詢參數

* **後端需傳遞的元數據**
  伺服器在渲染頁面時，必須將以下資訊注入到前端 JavaScript 環境中：
  * detectedCountry: 偵測到的使用者國家代碼 (來自步驟 1)。
  * currentCountrySubdomain: 當前子網域 (來自步驟 1)。
  * finalLanguage: 當前頁面最終渲染的語系 (來自步驟 4)。
  * preferredLanguage: 使用者的偏好語系，主要來自 Accept-Language Header。
  * **availableLanguages: 可用語系清單 (來自步驟 2，供前端語系選擇器使用)**

* **前端顯示邏輯**
  * 國家切換建議:
    * 邏輯: 比較 detectedCountry(使用者國家代碼) 對應的子網域與 currentCountrySubdomain。如果不一致，則根據網站類型顯示相應提示：
      * **多站點架構**: 顯示「建議您前往 XX 站點」的提示
      * **單站點架構**: 顯示「偵測到您位於 XX 國家，是否要切換」
    * 用途範例:
      * 電商網站: 切換到對應國家的商品、價格、配送選項
  * 語系切換建議:
    * 條件: 多語系網站。
    * 邏輯:
      * 比較 finalLanguage(最終渲染的語系) 與 preferredLanguage(使用者的偏好語系)。如果不一致，且 preferredLanguage(使用者的偏好語系) 是網站支援的可用語系之一，則顯示「建議您切換到 XX 語系」的提示。
      * 當使用者主動切換語系時，前端需要：
        1. 設定 userPreferredLanguage Cookie(使用者偏好語系)
        2. 導引到新語系的對應頁面URL（如 /zh-tw/current-path）

* **前端效能最佳化：**
  ```typescript
  // 頁面級別的快取，避免重複處理
  const pageCache = {
    configFlags: null,       // 配置開關快取 (應用啟動時載入)
    geoInfo: null,           // 地理資訊快取 (Session級)
    languageData: null,      // 語系資料快取 (24小時級)
  };
  
  // 避免重複處理的檢查機制
  if (!pageCache.configFlags) {
    // 只在首次載入時獲取配置
    pageCache.configFlags = getAppConfig();
  }
  ```


## 情境說明
### 情境一：住在東京的 Kenji 第一次來訪

Kenji 是一位住在東京的上班族，他的電腦瀏覽器預設語言是日文。

1.  **輸入網址：** Kenji 在瀏覽器輸入 `http://xxx.com`。
2.  **地區偵測：** 系統立刻偵測到 Kenji 來自日本。由於我們設有專屬的日本子網站，系統便**直接將他轉向到 `http://jp.xxx.com`**，提供更符合日本市場的內容。
3.  **語言確認：** `jp.xxx.com` 網站的預設語言剛好也是日文，與 Kenji 的瀏覽器設定相符。
4.  **最終結果：** Kenji 無需任何操作，第一眼看到的就是完整的日文版網站。系統同時在他電腦中留下一個「偏好日文」的標記 (Cookie)。

---

### 情境二：在台灣工作的法國人 Amélie

Amélie 是一位在台灣工作的法國人，她的筆電瀏覽器一直都設定為法文。

1.  **輸入網址：** 她第一次聽說 `http://xxx.com` 並前往瀏覽。
2.  **地區偵測：** 系統偵測到她位於台灣，但我們沒有專門的台灣子網站，所以她仍然留在 `http://xxx.com`。
3.  **語言偵測：** 此時，系統檢查到她的瀏覽器語言是法文 (`fr`)。雖然網站的預設畫面是繁體中文，但系統發現我們有提供法文版。
4.  **最終結果：** 為了讓 Amélie 更方便，系統**自動將她導引至 `http://xxx.com/fr`**。她看到的直接就是親切的法文介面。系統也為她留下了「偏好法文」的標記。

---

### 情境三：Amélie 後來的改變與再次造訪

過了幾天，Amélie 為了練習中文，在網站上手動將語言從法文切換到了繁體中文 (`zh-tw`)。

1.  **手動切換：** 當她點擊切換語言後，網站立刻更新了她電腦中的標記，從「偏好法文」**改為「偏好繁體中文」**。
2.  **再次造訪：** 下週，Amélie 又想起了這個網站，再次在瀏覽器輸入 `http://xxx.com`。
3.  **讀取偏好：** 這次，系統會優先檢查她上次留下的標記，發現她偏好的是繁體中文。
4.  **最終結果：** 系統不再理會她瀏覽器的法文設定，而是**直接將她導向到 `http://xxx.com` 的繁體中文版**。因為，**您的手動選擇，永遠是第一順位**。

---


## 實作

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