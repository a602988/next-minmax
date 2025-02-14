


git remote add minmax https://git.24241872.work/jean/next-minmax.git

# 使用的套件

https://next-intl-docs.vercel.app/

# 流程圖

https://lucid.app/lucidchart/c180264e-1318-4ee5-80dc-4e0bfab293fc/edit?invitationId=inv_fa93943c-8d16-4fc6-a917-efa6dcf545ff&page=0_0

＃ai需求紀錄

在網站一進時，透過fetchLanguages撈取到作為i18n中export const routing 的locales與defaultLocale

# css 使用說明

公用+私用 ：:global(body:not(.nav-open)) .navToggle:hover


# 待解決問題

透過Api 撈取語系資料

[{"path":"static/images/common/logo.svg", "width": 234, "height": 51}]


# 檔案說明

- src
  - components
    - common
      - img
        - ImageWithSVG.tsx 當圖片需要判斷是否為svg時

# 檔案命名規則

1.
組件文件：
應該使用大寫字母開頭（PascalCase）
例如：BlogHeader.tsx, UserProfile.tsx
2.
頁面文件（在 pages 目錄或 app 目錄的路由文件夾中）：
應該使用小寫字母開頭（kebab-case 或 snake_case）
例如：index.tsx, about.tsx, blog-post.tsx
3.
工具函數、hooks 等非組件文件：
通常使用小寫字母開頭（camelCase）
例如：useAuth.ts, apiClient.ts
4.
常量或配置文件：
通常全大寫（SCREAMING_SNAKE_CASE）
例如：API_ENDPOINTS.ts, CONSTANTS.ts


## 動畫參考

選單
https://www.maman-corp.com/
https://www.utsubo.com/
https://www.thoughtlab.com/


## 跑分紀錄

移除layout 桌機：83 手機：78
移除layout.css 桌機：95 手機：78
移除header 桌機：94 手機：54
清空Layout.css 內容

## 減少javaScript執行時間 1 2 3

## 排除禁止轉譯的資源 1 2 3

## 網頁以靜止還原返照快取 1 2 3 

## 減少無用的javaScript  2 

## 最大的內容繪製至元素 2 

解決：增加padding

## 壓縮javascript 2 




## 將主要執行序工作降到最低 

### 跑分叩分紀錄

#### css

- min-h-screen : 有時會影響，要多跑幾次才會正常
- 

https://git.24241872.work/jean/next-minmax

# 待處理問題

- windows 的捲軸測試
- 


我的頁面是透過api回傳告知用什麼layout，如果沒有回傳就用預設的
那我該怎麼寫這樣的頁面





https://minmax-web3.jeffy.test/api/page/detail?uri=/news/detail/8870&language=zh-tw?q=柯文哲金流&filters=eyJyZ

/news/datiel/8870/?q=柯文哲金流&filters=eyJyZ


重新描述一次需求
首先 使用者輸入網址後 例如：/news/datiel/8870/?q=柯文哲金流&filters=eyJyZ
我們需要先將頁面資訊丟給api : /api/page/detail?uri=/news/detail/8870&language=zh-tw?q=柯文哲金流&filters=eyJyZa

api會還傳資料如範例src/data/page.json
在依據回傳的api 中的wrap值，
判斷使用的layoutType