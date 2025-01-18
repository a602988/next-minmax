

## 套件

### server-only

    `npm install server-only`

#### sqlite3


因為目前沒有api，所以會先製作很多的page.json來顯示資料
json命名會依據網址來載入可以嗎
例如/news/post/123
就會載入news-post-123.json
該怎麼寫


http://localhost:3000/api/demo/page?path=news/post/123



需要判斷語系，如果頁面網址有語系，那麼檔案結尾要加上該語系id，例如 /en/news/post/123
則檔案為news-post-123-en.json
若為/，或/news/post/123 這種預設語系的路徑
就不帶入後面檔案名稱，則為ews-post-123.json 或index.json

可以phpstorm關閉載入順序的警告嗎
