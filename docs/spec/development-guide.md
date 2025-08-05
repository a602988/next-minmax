# 開發指南

## 開發階段 API Mock 策略
* **目的：** 在專案開發初期，為了讓前端開發不受後端 API 進度影響，採用 Next.js API Routes 建立 Mock API，並透過環境變數控制是否使用 Mock 或正式 API。
* **執行條件：** 開發階段或測試環境。
* **設計原則：**
    * **環境變數控制：** 透過 `USE_MOCK_API` 環境變數切換 Mock 與正式 API
    * **API 抽象層：** 建立統一的 API 服務層，隱藏 Mock 與正式 API 的差異
    * **漸進式替換：** 隨著後端 API 就緒，逐步從 Mock 切換到正式呼叫
    * **開發體驗優化：** Mock API 可模擬延遲、錯誤等真實情境
* **實作架構：**
    * **Mock API 路由：** 使用 Next.js API Routes 在 `/api/ssr/` 路徑下建立 Mock 端點
    * **服務抽象層：** 建立 `languageService`、`contentService` 等服務類別，根據環境變數決定呼叫 Mock 或正式 API
    * **Mock 資料管理：** 將 Mock 資料集中管理，支援多專案、多語系的測試資料
    * **環境配置：** 開發環境預設使用 Mock，正式環境自動切換到後端 API
* **替換時程：**
    1. **前期開發：** 完全使用 Mock API，專注於前端邏輯與 UI 開發
    2. **中期整合：** 後端 API 就緒後，優先替換核心 API（如語系 API）
    3. **後期完善：** 逐步替換所有 API，保留 Mock 作為測試與開發輔助


## SEO 策略

### 國際化網站避免重複內容並正確標示語系版本。

hreflang 標籤：告訴搜尋引擎哪些頁面是同一個內容的不同語系版本，在每個頁面的 <head> 中設定 hreflang 標籤。

範例：

```html
<link rel="alternate" hreflang="en" href="https://example.com/en/about" />
<link rel="alternate" hreflang="zh" href="https://example.com/zh/about" />
<link rel="alternate" hreflang="x-default" href="https://example.com/en/about" />
```
