# 首頁 語系切換

請依據這份文件，配合規劃好的structure.md這個結構，幫我一步一步開始
首先先從最基本的首頁開始，首頁僅需要一個組件，為語系切換。
請先幫我建置以下的文件

## 網站運作

1. 進入網站
2. 傳遞完整網址給api包含網址的語系，例如http://test/en 如果沒有語系api會取得後端系統預設語系
3. 取得api回傳的網頁資料

## 資料來源

### api

資料來源api為公司內部系統的測試網址，趨時為改為正式上線後的網址。
除了網址前面不同，後面路徑都為相同。
測試網址：
https://v5.jeffy.test/files/database/manager.php?project=minmax2025

### json 模擬

待由於很多api還待開發，有些組建會先採用json的方式模擬api，
所以資料撈取時，需可判斷當沒有提供api網址時，若json模擬資料有啟用
才採取對應的json，對應的json資料需完整的目錄
若為文章，則可能依據目錄下的編號對應為該網址的id

## 組件：語系切換

此組件需可選用為下拉或者清單模式，
網站預設語系則為"default": true的
api結構：
```
{
"code": "0000",
"message": "Success.",
"data": [
{
"id": "zh-TW",
"title": "繁體中文",
"native": "CHT",
"default": true,
"current": true
},
{
"id": "zh-CN",
"title": "简体中文",
"native": "CHS",
"default": false,
"current": false
},
{
"id": "en",
"title": "English",
"native": "EN",
"default": false,
"current": false
},
{
"id": "ja",
"title": "日本語",
"native": "JP",
"default": false,
"current": false
}
]
}
```

##

依據國家判斷網站進入的語系，這是否有相關第三方的套件或者api?
網站有哪些語系可對應是從api回傳，包含預設的語系
但流程應該是怎麼做好

首次訪問：
1. 用戶訪問: https://yoursite.com/about
2. Middleware 檢查: 沒有 preferred-locale cookie
3. 自動檢測語系: zh-TW
4. 重定向: https://yoursite.com/zh-TW/about
5. 設定 cookie: preferred-locale=zh-TW

用戶切換語系：
1. 用戶點擊語系切換器選擇 "English"
2. 更新 cookie: preferred-locale=en
3. 導航到: https://yoursite.com/en/about
4. Middleware 更新 cookie 記錄

後續訪問：
1. 用戶訪問: https://yoursite.com/contact
2. Middleware 檢查: preferred-locale=en (從 cookie)
3. 重定向: https://yoursite.com/en/contact
4. 不再進行自動檢測，使用用戶偏好


5. 優勢說明
   使用 API 預設語系的優勢：
   ✅ 動態配置，可隨時調整
   ✅ 與後端系統保持一致
   ✅ 支援多專案不同預設語系
   ✅ 可根據業務需求調整
   保留靜態配置的優勢：
   ✅ API 故障時的可靠後備
   ✅ 開發環境的穩定性
   ✅ 減少首次載入時間
   ✅ 離線開發支援



依據這個架構，如何實作進入網站所使用的語系與導引
檢測順序：
1.用戶已選擇的語系 (Cookie)
2.瀏覽器語言偏好 (Accept-Language)
3.地理位置推測

以上檢測後都需要匹配api回傳的網站語系
若都無法匹配
則採用 API 回傳的預設語系
若無法取得api回傳的預設語系
則使用 靜態配置的後備預設語系



網頁流程
1. 語系資料獲取 API
   api(https://v5.jeffy.test/api/ssr/languages?project=minmax2025&language=zh-TW) 取得語系資料，裡面包含語系清單與預設語系。
2. 獲取用戶地理位置
3. 執行條件式語系引導邏輯:獲取用戶 IP 和其對應國家代碼後，如果用戶 IP 匹配到強制導引國家，應該立即執行重定向，而無需考慮 Cookie 偏好或頁面路徑語系。只有在沒有強制導引的情況下，才考慮 Cookie 偏好和建議導引。
3. 將使用語系資料採用伺服器端渲染 (SSR) / Server Components + Cookie 管理
   1. 伺服器端檢查 Cookie： 在 SSR 的 getServerSideProps 或 Server Components 中，伺服器可以檢查請求頭中的 Cookie。 
   2. 若無 Cookie 或版本過舊： 如果沒有語系 Cookie，或伺服器判斷 Cookie 中的語系版本過舊（例如，伺服器端維護一個當前最新語系版本號），則直接從 API 獲取最新的語系資料。 
   3. 設置新的 Cookie： 將新的語系資料（可能包含新的版本號）設置到響應的 Set-Cookie 頭中，這樣客戶端就會接收到最新的 Cookie。
3. 比對網頁語系路徑 /en/about 或者/about ，當第一個/後面的字串，比對到api的語系資料，則放到api路徑 https://v5.jeffy.test/api/ssr/page/detail?project=minmax2025&language=zh-TW&uri=/news/demo-cate&params= 的languageh 的參數中，若無比對到，則採預設語系，並將網址第一個/後面的全部放入uri中
4. api回傳的資料若有該頁面則顯示頁面內容，若無頁面資料，api會回傳無資料則顯示404


情境說明：

使用者第一次來到網站http://xxx.com，若網站有依據國家位置有不同的子網域網站，且有設定轉向，則直接轉向。
取得語系資料匹配，除入cookie
若有多語系，網址可能是沒有帶到語系的結構， 則推薦使用者語系(匹配語系資料成功)，
例如http://xxx.com(預設為zh-tw)，但使用者為en，那麼則直接導引到http://xxx.com/en
但若使用者切換語系，那麼則以每次切換的語系，為偏好語系，在後續進入無帶入網址的語系時，都直接導引到該語系



## api待補上

- 版本
- 國家對應語系


請幫我開始依據README.md的架構與web-entry-flow.md網頁進入流程說明文件中的 實作/目錄結構，好像不符殼README.md的規劃結構，請幫我依據 網頁進入流程說明文件 會用到的檔案搭配規劃結構重新調整 實作/目錄結構。

準備開始製作的第一步
請依據上述文做，規劃目前會用到的目錄跟檔案與中文說明

這個說明文件，是搭配next-intl
那麼取回來的語系清單
要回傳到i18n嗎
要寫在哪裡



前期用 Next.js API Routes mock，配合環境變數切換。
隨著後端 API 就緒，逐步替換成正式呼叫。
請幫我補上mock需要的檔案在 目錄結構 中