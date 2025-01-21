
設置CSP標頭

## 套件

### server-only

    `npm install server-only`

#### sqlite3





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



在 middleware 中攔截所有請求，提前處理 URL 路徑或驗證，然後統一轉交到動態頁面進行渲染。 會不會更好?該怎麼改



