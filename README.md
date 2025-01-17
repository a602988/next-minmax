

## 套件

### server-only

    `npm install server-only`

#### sqlite3


每個頁面，會透由api回傳的layout版型資料，來決定使用的layout，例如：defaultLayout or blogLayout等
針對這樣的需求，且能符合seo
該怎麼調整架構


網站運作，當使用者點擊選單連結，我們會先傳遞網址給api，api會再回傳page.json這樣的模擬內容。透過這隻會得到使用的樣板與該頁面的資資料。
如果網址是/news/post/123
這種動態layout與page，我需要設定/news的資料夾嗎
還是說有其他路由的方式
