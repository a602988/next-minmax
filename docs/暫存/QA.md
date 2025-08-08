# 為什麼env.mjs 需要區分 server、client、runtimeEnv 

1. **server (伺服器端變數的 Schema 定義)**

   這個區塊用於定義只能在伺服器端使用的環境變數。這是最重要的安全機制。
   安全性考量：在 Next.js 的伺服器端，你可以存取所有環境變數，包括敏感資訊，例如：
   資料庫連線字串 (DATABASE_URL)
   API 金鑰 (API_SECRET_KEY)
   第三方服務的密鑰 (STRIPE_SECRET_KEY)
   作用：將這些變數的 Zod Schema 放在 server 區塊，明確地告訴工具這些變數不應該被打包進客戶端（瀏覽器）的程式碼中。

3. **client (客戶端變數的 Schema 定義)**

   這個區塊用於定義會被暴露給客戶端的環境變數。
   Next.js 的規定：在 Next.js 中，任何需要在瀏覽器中使用的環境變數，其名稱必須以 NEXT_PUBLIC_ 開頭。
   作用：client 區塊專門用來定義這些公共變數的 Zod Schema，例如：
   公開的 API URL (NEXT_PUBLIC_API_BASE_URL)
   功能開關 (NEXT_PUBLIC_FEATURE_TOGGLE)
   安全性：即使變數以 NEXT_PUBLIC_ 開頭，這個區塊的存在也再次提醒開發者，這裡的變數是公開的，不應存放任何敏感資訊。

4. **runtimeEnv (運行時環境變數的映射與驗證)**

   這個區塊是實際的驗證發生處，它將原始的 process.env 變數與上面定義的 Schema 進行橋接。
   作用：
   映射：它告訴 @t3-oss/env-nextjs 套件，每個變數的實際值應該從 process.env 的哪個屬性中取得。
   驗證：它將 process.env 的原始值傳入 server 和 client 定義的 Zod Schema 進行驗證。
   錯誤處理：如果 runtimeEnv 映射的變數在 server 或 client 區塊中被定義為必填，但在 .env 檔案中卻缺少，@t3-oss/env-nextjs 會在應用程式啟動時就立即拋出錯誤，而不是等到運行時才報錯。這可以幫助你在開發初期就發現配置問題。
   簡化寫法：你所提到的精簡寫法 (...server, ...client) 是為了讓 runtimeEnv 的程式碼更乾淨，它仍然完成了將 process.env 值映射到 Schema 的工作。
   
總結

| 區塊 | 職責 | 關鍵點 |
|  ----  | ----  | ----  |
| server | 定義伺服器端專用的環境變數 Schema。 | 安全性：確保敏感資訊不會外洩。 |
| client | 定義客戶端專用的環境變數 Schema。 | 公開性：變數必須以 NEXT_PUBLIC_ 開頭。 |
| runtimeEnv | 將 process.env 的實際值映射並傳入 Schema 進行驗證。 | 健壯性：在應用程式啟動時就確保所有變數都存在且格式正確。 |
