了解 `I18nIntegrationService` 中
規劃放置的目錄
最推薦放在：src/i18n

1. env.mjs - 環境變數定義層
   定義所有環境變數的 schema 和預設值
   負責驗證和類型轉換
   是環境變數的唯一來源
2. config 文件 - 應用配置層
   將相關的環境變數組織成邏輯群組
   添加業務邏輯和計算屬性
   提供類型安全的配置訪問‘

language.service.ts
