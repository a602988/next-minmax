02/06 快取討論

取得資料的到期時間
帶入資料撈取中更新快取設定

後端執行前端一隻程式
執行後就更新伺服器快取

- - [ ] 目前apiService不支持跨請求的數據共享（每次調用都是獨立的）。


設置CSP標頭

## 套件

### server-only

    `npm install server-only`

#### sqlite3

## git指令

複寫分支




http://localhost:3000/api/demo/page?path=news/post/123




進入頁面前，會套過getPageData 傳入頁面網址給api
api會回傳下列很多資料，其中wrap代表實際要載入的頁面
情境可能會是/about 但載入的卻是wrap指定的頁面
那麼這樣的方式該怎麼做


"uri": "news/post/123",
"route": "news/post/{id}",
"meta_title": "Head Title - Site Name 123",
"meta_description": "Head Meta Description",
"meta_keywords": "Head Meta Keywords",
"meta_image": {
"path": "https://example.com/files/thumbnail/sample_1920xauto.webp"
},
"wrap": "blog",
"breadcrumbs": [
{
"title": "Home",
"url": "https://example.com"
},
{
"title": "News",
"url": "https://example.com/news"
}
],
"modules": [
{



帶入符合seo與無障礙的Metadata，預設的資料為getWebData取得的
但頁面中可以自行在帶入複寫掉或者在title後面加上頁面的資料

將目前的git分支，覆蓋掉version2-DynamicPage，指令該怎麼下

sqlite3 src/data/project-base-seeder.sqlite3



寫一隻基底api撈取程式
符合以下條件：
- api 前綴網址為 process.env.NEXT_SERVER_API_URL
- 同一個資料請求不會被重複發送
- 依據api屬性可選擇是否在伺服器端快取
- 讓撈取api的header若有header 加上 If-Modified-Since，則依據回傳的header會有Last-Modified時間戳，若符合則會回傳304，資料就取伺服器快取，若不符合則將資料快取在伺服器，並取伺服器的快取資料。如果沒有傳遞 If-Modified-Since，則直接取回api回傳的資料。
- 

讓我們一步一步重新來
先幫我寫一隻公用的api撈取
