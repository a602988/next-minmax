如果您想要加入客戶端快取，可以考慮：
1.
瀏覽器快取：利用 HTTP 快取標頭
2.
React Query/SWR：客戶端狀態管理和快取
3.
localStorage/sessionStorage：本地存儲快取
4.
Service Worker：離線快取策略


請依據 docs/README.md 設計文件，以`「功能導向」或「領域驅動」`的目錄結構
幫我製作可以給個api用的快取機制
初步先幫我完成`Language`與`Locales`這塊
`Language` 是負責取得網站有哪些語系以及預設的語系
`Locales` 是負責判斷使用者國家對應的語系，若無對應的國家或語系，則採預設語系
目前language、Locales api撈取已經完成 與快取的config也已初步設定好
並符合一下描述
* next-intl 整合與 SSR 渲染流程
* 語系決策：在每個 SSR 請求中，根據「國家站點與語系決策」流程，從已快取的「網站語系清單」與「國家語系對照表」中，結合使用者 Cookie 和地理位置偵測，決定出本次渲染的最終語系 (locale)。
* 翻譯檔案載入：根據決策出的最終語系，動態載入對應的翻譯檔案（例如 messages/zh-TW.json）。next-intl 會使用這個翻譯檔案來進行頁面渲染。
* 提供給 next-intl：將最終的語系和翻譯檔案傳遞給 next-intl，完成 SSR 渲染。
請先將這些需求 會用的的目錄與檔案
規劃出來

依據先前規劃的，是否符合以上描述


next.js 採用 「功能導向」或「領域驅動」`的目錄結構
src/features/Language or Locales or 任何其他/下完整的目錄運用可能有什麼目錄