


# 使用的套件

https://next-intl-docs.vercel.app/

# 流程圖

https://lucid.app/lucidchart/c180264e-1318-4ee5-80dc-4e0bfab293fc/edit?invitationId=inv_fa93943c-8d16-4fc6-a917-efa6dcf545ff&page=0_0

＃ai需求紀錄

在網站一進時，透過fetchLanguages撈取到作為i18n中export const routing 的locales與defaultLocale

# 待解決問題

透過Api 撈取語系資料

[{"path":"static/images/common/logo.svg", "width": 234, "height": 51}]




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
