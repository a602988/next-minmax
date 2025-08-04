# 網頁進入流程設計總覽

## 流程導覽

1. 全域設定參數 (Configuration)
2. 國際化快取與版本控制
3. 國家站點決策
4. 語系資料 API 版本比對 伺服器級快取 資料 → 版本比對更新或快取時間 24 小時，避免重複請求語系 API
5. next-intl 配置同步 → 使用已準備好的語系資料配置框架
6. Cookie 檢查 → userPreferredLanguage Cookie (使用者偏好語系)
7. 語系導引決策 → Cookie 檢查若無使用者偏好語系則導引邏輯決定
8. 最終語系確定與路徑 → 確定最終要使用的語系與路徑
9. Cookie 設定 → 紀錄userPreferredLanguage Cookie (使用者偏好語系)
10. 內容 API 呼叫 → 獲取頁面內容
11. 前端 UI 建議 → 提供使用者介面建議

## 開發說明


### 1. 國際化資料處理

* 全域設定參數
  * 國際化功能總開關：`internationalization.enabled: true | false `
      說明：整份國際化功能的最高權限開關。 
      * false (預設): 完全停用所有後續的國家站點判斷、語系偵測及快取等邏輯。 
      * true: 啟用整套國際化邏輯。
  
  * 快取策略： `i18n.cache.strategy`: `"memory" | "none"`
      說明：當國際化功能啟用時，用以決定設定資料的獲取與快取方式。核心原則為「API 優先，檔案備援」。
      * `"memory"`記憶體快取動態資料
        * 適用場景：中低流量的單一伺服器生產環境，或不希望引入 Redis 的情境。
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
    * 優點：修改 API 後端能立即看到效果，方便開發。
    * 缺點：效能極差，每個相關請求都會被外部網路呼叫阻塞。

  * 地理位置偵測策略：`geo.detection.strategy`: `"cdn-only" | "api-only" | "cdn-fallback"`
    說明：根據主機部署環境選擇最適合的地理位置偵測方式。
      * `"cdn-only"`: 僅使用 CDN 提供的地理標頭
          - 適用場景：Vercel、Netlify、Cloudflare Pages 等平台
          - 優點：零延遲、高可靠性
          - 缺點：僅限特定平台使用
      * `"api-only"`: 僅使用外部 API 服務
          - 適用場景：私人 VPS、Akamai Cloud Computing 等
          - 服務：geoPlugin API
          - 超時設定：500-800ms
      * `"cdn-fallback"`: CDN 標頭優先，API 備援
          - 適用場景：有 CDN 但不確定穩定性的環境
          - 邏輯：先檢查 CDN 標頭，失敗時呼叫 API

  * 國家偵測模式：`geoRedirectMode: "off" | "suggest" | "force"`
      * `"off"`: 停用國家判斷與導引。
      * `"suggest"`(預設): 偵測後僅透過 HTTP 標頭傳遞建議，不自動跳轉。
      * `"force"`: 偵測後自動重導向至對應子站。

### 2. SSR初始化與資料處理
執行條件：`internationalization:true`(國際化功能總開關:開)
* 數據資料
  * 靜態資料（無需快取）：
    * 快取資料
        * 國家對應子站映射 (`/src/data/geo-sites-mapping.json`)
    * 說明：
        * 處理方式：編譯時靜態載入，直接使用
        * 更新方式：修改檔案 + Git 提交 + 重新部署
        * 效能：零延遲（已在記憶體中）

  * 動態資料（需要快取）：
    * 快取資料
        * 國家語系對照表
        * 網站語系清單
    * 說明：
        * 資料來源：外部 API
        * 處理方式：伺服器啟動時載入至記憶體快取 + 定時更新
        * 更新方式：API 呼叫 + 背景定時更新
        * 異動頻率：低

* 快取清除機制
  由於動態資料異動頻率極低，提供手動清除快取功能以應對緊急更新需求。
  * 清除路徑：`/api/admin/cache/clear`
  * 權限控制：需要後台管理員登入驗證
  * 支援操作：
    * 清除全部快取：`POST /api/admin/cache/clear`
    * 清除指定快取：`POST /api/admin/cache/clear/[type]`
        * `country-language-mapping` - 國家語系對照表
        * `site-language-config` - 網站語系清單 
  * 安全考量：        
    * 使用 JWT 或 Session 驗證管理員身份
    * 記錄清除操作日誌（操作者、時間、類型）
    * 限制清除頻率（如 1 分鐘內最多 3 次）
    * 清除後自動重新載入快取資料

### 3. 國家站點與語系決策

* **目的：**
  根據使用者 IP 判斷其國家位置，依據配置決定是否： 
  1. 將使用者自動導引至對應的國家子站（例如 tw.example.com）。 
  2. 僅提供建議站點資訊予前端，用於提示或介面呈現。
  3. 依據國家對應所適合語系
* **核心資訊：**
  * Cookie 名稱：
    * `user_preferred_site`：使用者手動選擇的站點（180 天有效）
      - 內容：子站域名，如 `"tw"`, `"us"`, `"jp"`
      - 來源：使用者主動切換站點時設定
    * `user_preferred_language`：使用者偏好語系（180 天有效）
      - 內容：語系代碼，如 `"zh-TW"`, `"en-US"`, `"ja-JP"`
      - 來源：使用者主動切換語系時設定
    * `detected_country`：系統自動偵測的國家（1 天有效）
      - 內容：國家代碼，如 `"TW"`, `"US"`, `"JP"`
      - 來源：IP 地理位置偵測結果
    * `suggested_site`：系統建議的站點（1 天有效）
      - 內容：建議的子站域名，如 `"tw"`, `"us"`, `"jp"`
      - 來源：根據偵測國家查詢「國家對應子站映射」得出
    * `suggested_language`：系統建議的語系（1 天有效）
        - 內容：建議的語系代碼，如 `"zh-TW"`, `"en-US"`, `"ja-JP"`
        - 來源：根據偵測國家查詢「國家語系對照表」得出
  * **決策優先級**：
    1. **使用者選擇優先**：
        - `user_preferred_site` 存在 → 使用該站點
        - `user_preferred_language` 存在 → 使用該語系
    2. **系統建議次之**：
        - 無使用者偏好時，使用 `suggested_site` 和 `suggested_language`
    3. **預設值兜底**：
        - 所有偵測失敗時，使用系統預設站點和語系
  * **Cookie 更新時機**：
    - **使用者主動操作**：立即更新 `user_preferred_*` 系列
    - **系統偵測完成**：更新 `detected_country` 和 `suggested_*` 系列
    - **偵測失敗**：僅更新 `detected_country` 為 null，保留其他建議值
* **導引邏輯流程：**
  1. 機器人排除：
    * 依據 User-Agent 匹配已知的爬蟲列表，對於重要爬蟲（如 Googlebot）可輔以 rDNS (反向 DNS 查詢) 驗證其真實性。
    * 若為爬蟲，略過所有導引，保留 SEO 抓取完整性。
  2. 檢查使用者是否已手動選擇：
     * 若 Cookie 存在 `user_preferred_site`，表示使用者已有選擇，略過導引流程。
     * 若 Cookie 存在 `user_preferred_language` ，表示使用者已有選擇，略過導引流程。
     * 建議在使用者主動切換站點時更新此 Cookie（效期建議 180 天）。
  3. 導引模式執行條件
     * geoRedirectMode === `"off"`：不執行導引。
     * geoRedirectMode === `"suggest"` | `"force"`：繼續進行國家偵測。
  4. 執行國家偵測： 
     * 根據 `geo.detection.strategy` 設定執行對應策略
     * 通用降級處理：
       - 當所有偵測方式失敗時，DetectedCountry 設為 null
       - 進入降級模式，自動切換為 default site
       - 記偵測狀態：`x-geo-status: failed-timeout` 或 `x-geo-status: no-geo-data`
  5. 查詢對應站點與語系：
      * 根據偵測到的國家代碼查詢「國家對應子站映射」得出建議站點
      * 根據偵測到的國家代碼查詢「國家語系對照表」得出建議語系
      * 設定相關 Cookie：`detected_country`、`suggested_site`、`suggested_language`
  6. 根據模式處理：
    * `force`: 強制導引
      1. 查詢對應子網域，執行 HTTP 307 臨時重定向。
      2. 設定短期 Cookie（如 detected_country，效期建議 1 天）避免重複偵測。
    * `suggest`: 僅提供建議 
      1. 透過 HTTP 標頭（如 `geo-suggested-site: tw`,`geo-suggested-reason: ip_geo`）傳遞建議資訊。 
      2. 無實際跳轉，頁面照原網址呈現。
      3. 可輔以 Accept-Language 判斷語系偏好供前端提示。
* **延伸考量：**
  * 資料記錄與行為分析（建議實作以提升維運觀測性）
    為利於除錯與持續優化，可在後端記錄以下資訊，並整合至統計平台或 A/B 測試系統：
    - 使用者來源 IP 與 User-Agent
    - 國家偵測方式（如 CDN 標頭或 MaxMind）
    - 偵測結果與採用之導引模式（off/suggest/force）
    - 是否實際跳轉、使用者是否接受建議站點
    - 最終呈現語系與站點決策結果
  * SEO 考慮建議 
    - 強制導引（force）應謹慎使用，建議僅限於合規需求或特定業務場景。
    - 建議使用 `HTTP 307 Temporary Redirect`，以避免搜尋引擎將原始 URL 判定為永久移除。
    - 使用 `hreflang` 標籤：在每個頁面的 `<head>` 中，使用 `<link rel="alternate" hreflang="..." href="...">` 標籤來列出該頁面所有的國家/語言替代版本。
    - 使用「自我參照」的 Canonical 標籤 (Self-Referencing Canonical)
    - 使用 `suggest` 模式不會影響 SEO，可保留原始 URL，有利於部署國際化 SEO 策略。

初期做到範圍：僅啟用國家偵測（`geoRedirectMode: "suggest"`）與對應 國家語系對照表
