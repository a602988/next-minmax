# 首頁 語系切換

根據這份規劃的目錄結構，我要開始一步一步製作了
首先先從最基本的首頁開始，首頁僅需要一個組件，為語系切換。
請先幫我建置以下的文件


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
