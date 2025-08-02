# 網頁進入流程說明

## 重點說明

### 核心設計理念

- 使用者體驗優先：自動偵測使用者的地理位置和語言，減少選擇操作。

- 彈性配置：可設定功能開關 (例如 enableGeoRedirect 是否啟用地理位置判斷) 來控制網站行為。

- 效能優化：使用 CDN 邊緣運算和 Cookie 快取，減少不必要的 API 呼叫。

### 架構特色

- 多站點 vs 多語系分離：國家站點和語系分開，靈活支援多語系。

- 優雅降級：若功能或資料不可用，退回預設行為。

- 使用者偏好記憶：記錄使用者選擇，並在後續訪問中自動應用。

### 決策優先順序

- 地理重定向：優先根據國家進行子網域重定向。

- 語系選擇：使用者偏好 > 瀏覽器語言 > 地理推薦 > 系統預設。

### Cookie 設定

- 過期時間： 語系資料快取 24 小時，使用者偏好語系 30 天。

- 版本控制： 語系資料包含版本號，若版本變動則清除快取並重新取得資料。

- 安全性設定： 支持 HTTPS，設定為 secure（使用 HTTPS 傳送）和 sameSite（防止跨站請求偽造（CSRF）攻擊）。

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
    * 查詢映射表，找到 DetectedCountry 對應的目標子網域 TargetSubdomain（例如 "tw"）。
    * 從當前請求的網址中，解析出當前的子網域 CurrentSubdomain（例如 "us"）。
  * 重定向決策
    * 如果 forceRedirect(重定向) 為 true 且 CurrentSubdomain(當前的子網域) 與 TargetSubdomain(目標子網域) 不符，伺服器將執行 302 臨時重定向，將使用者導向到正確的子網域，並保持原有的路徑和查詢參數。例如，從 https://us.example.com/path 重定向到 https://tw.example.com/path。
    * 在其他所有情況下（forceRedirect(重定向) 為 false，或使用者已在正確的子網域），不執行任何重定向。DetectedCountry(國家代碼) 資訊將被傳遞到後續步驟使用。

### 2. 語系資料獲取 API
* **目的：** 此 API 的功能是提供網站所有可用的語系清單，以及一個基於使用者情境的推薦預設語系~~。它是一個能力提供者，在需要時被呼叫。
* **執行條件：** 僅在「多語系網站」模式下 (enableMultiLanguage 為 true) 才可能被呼叫。
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


### 3. Cookie 檢查與語系設定
* **目的 ：** 管理語系相關的 Cookie，並在必要時觸發 API 呼叫以獲取最新的語系資料，實現高效能快取。
* **執行條件：** 僅在「多語系網站」模式下 (enableMultiLanguage 為 true) 執行。
* **Cookie 類型：**
  * 語系資料快取Cookie (languageData)：
    * 儲存API回傳的語系清單和版本號
    * 用於快取控制，避免重複API呼叫
    * 格式：`{availableLanguages: [...], defaultLanguage: "zh-TW", version: "1.0"}`
    * **過期時間：** 24 小時（配合 API 快取策略）
    * **安全性設定：**
      * httpOnly: false（前端需要讀取）
      * secure: true（HTTPS 環境）
  * **使用者偏好語系Cookie (userPreferredLanguage)：**
    * 僅在使用者「主動切換」語系時設定
    * 優先級高於API推薦語系
    * 用於無語系前綴URL的導引決策
    * **過期時間：** 30 天（長期記住使用者偏好）
    * **安全性設定：**
      * httpOnly: false（前端需要讀取）
      * secure: true（HTTPS 環境）
* 步驟：
  1. **讀取現有Cookie：**
     * 讀取 languageData Cookie(語系資料快取)
     * 讀取 userPreferredLanguage Cookie(使用者偏好語系)

  2. **語系資料快取檢查：**
     * 檢查 languageData Cookie(語系資料快取) 是否存在
     * 檢查其內部儲存的 version 是否與當前系統設定的語系版本相符

  3. **API呼叫決策：**
     * 如果 languageData Cookie(語系資料快取) 不存在或版本已過期，則執行步驟 2 中定義的「語系資料獲取 API」呼叫
     * 將從 API 獲取到的最新語系資料（包含新的版本號）寫入 languageData Cookie(語系資料快取)
     * **快取失效與清理策略：**
       * 當檢測到 API 版本號更新時，自動清理舊版本的 languageData Cookie
       * 若 Cookie 中的版本號格式不正確或無法解析，視為過期並重新獲取
       * 在系統升級或配置變更時，可透過更新版本號強制所有用戶重新獲取語系資料
  4. **偏好語系準備：**
  * userPreferredLanguage Cookie(使用者偏好語系) 將在後續步驟中用於語系導引決策
  * 此Cookie僅在前端使用者主動切換語系時才會被設定或更新

### 4. 語系導引決策 (僅多語系網站)
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


### 5. 最終語系確定與路徑處理
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


### 6. 呼叫內容 API 與錯誤處理
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

### 7. 前端 UI 建議與資訊傳遞
* **目的 ：** 在伺服器完成渲染後，前端介面根據後端傳遞的元數據，向使用者顯示友善的切換建議。
* **後端需傳遞的元數據**
  伺服器在渲染頁面時，必須將以下資訊注入到前端 JavaScript 環境中：
  * detectedCountry: 偵測到的使用者國家代碼 (來自步驟 1)。
  * currentCountrySubdomain: 當前子網域 (來自步驟 1)。
  * finalLanguage: 當前頁面最終渲染的語系 (來自步驟 4)。
  * preferredLanguage: 使用者的偏好語系，主要來自 Accept-Language Header。
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
