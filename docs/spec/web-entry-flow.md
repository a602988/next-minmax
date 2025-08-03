# 網頁進入流程

## 流程說明

1. 國家站點重定向決策 (伺服器 Middleware)
2. 語系確定 (伺服器 Middleware)
3. 語系與內容準備 (伺服器端渲染)
4. 前端 UI 呈現與建議 (客戶端)

## 步驟說明

### 1.國家站點重定向決策
初期範圍：僅啟用國家偵測（`geoRedirectMode: "suggest"`）
* **目的：**
  根據使用者 IP 判斷其國家位置，依據配置決定是否： 
  1. 將使用者自動導引至對應的國家子站（例如 tw.example.com）。 
  2. 僅提供建議站點資訊予前端，用於提示或介面呈現。
* **核心資訊：**
  * Cookie 名稱：
    * `user_preferred_site`：使用者明確選擇的國家子站（180 天有效）
    * `detected_country`：系統自動偵測的國家子站（短期，建議 1 天）
  * 導引控制參數：
    * `geoRedirectMode`: `"off"` | `"suggest"` | `"force"`
      * `"off"`：停用國家判斷與導引。
      * `"suggest"`（預設）：偵測後傳遞建議站點資訊，不自動跳轉。
      * `"force"`：偵測後自動重導至對應子站。
* **導引邏輯流程：**
  1. 機器人排除：
    * 根據 User-Agent 以及輔助欄位如 Accept-Language、IP 來源等判斷。 
    * 若為爬蟲，略過所有導引，保留 SEO 抓取完整性。
  2. 檢查使用者是否已手動選擇：
     * 若存在 user_preferred_site Cookie，表示使用者已有選擇，略過導引流程。
     * 建議在使用者主動切換站點時更新此 Cookie（效期建議 180 天）。
  3. 導引模式執行條件
     * geoRedirectMode === "off"：不執行導引。
     * geoRedirectMode === "suggest" | "force"：繼續進行國家偵測。
  4. 執行國家偵測： 
     * 優先讀取 CDN 標頭（如 x-vercel-ip-country）。 
     * 若無標頭，則使用備用服務（如 MaxMind），備援超時建議設為 500–800ms，避免主請求阻塞。
     * 當國家偵測失敗或逾時， DetectedCountry 設為 null，進入降級模式，自動切換為 default site 並標記偵測狀態。。
  5. 根據模式處理：
    * `force`: 強制導引
      1. 查詢對應子網域，執行 HTTP 307 臨時重定向。
      2. 設定短期 Cookie（如 detected_country，效期建議 1 天）避免重複偵測。
    * `suggest`: 僅提供建議 
      1. 透過 HTTP 標頭（如 x-suggested-site: tw）傳遞建議資訊。 
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
    - 每個子站應加註 `<link rel="canonical">` 指向主站或預設語系版本，避免重複內容影響排名。
    - 使用 `suggest` 模式不會影響 SEO，可保留原始 URL，有利於部署國際化 SEO 策略。
