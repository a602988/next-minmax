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

