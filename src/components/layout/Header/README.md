# Header Component

## 概述

Header 組件是一個靈活的頁面頭部組件，可以根據不同的需求和配置顯示不同的版型。它包括 SimpleHeader 和 FullHeader 兩種主要版型，並通過 HeaderFactory 來管理和渲染。

## 目錄結構

Header/
├── index.ts
├── Header.tsx
├── HeaderFactory.tsx
├── HeaderTypes.ts
├── README.md
└── variants/
    ├── SimpleHeader.tsx
    └── FullHeader.tsx

## 使用方法

要使用 Header 組件，你需要通過 HeaderFactory 來渲染它。HeaderFactory 接受一系列 props 來配置 Header 的顯示。

```
import { HeaderFactory } from '@/components/layout/Header';

function Layout() {
  return (
    <div>
      <HeaderFactory 
        type="full"
        showLogo={true}
        showLanguageSwitcher={true}
        showThemeSwitcher={true}
        customClass="my-custom-class"
      />
      {/* 其他布局內容 */}
    </div>
  );
}
```


# 可用的 Props

HeaderFactory 接受以下 props：

| Prop 名稱 | 類型 | 默認值 | 描述 |
|-----------|------|--------|------|
| type | 'simple' \| 'full' | 'simple' | 決定使用哪種 Header 版型 |
| showLogo | boolean | true | 是否顯示 Logo |
| showLanguageSwitcher | boolean | true | 是否顯示語言切換器 |
| showThemeSwitcher | boolean | true | 是否顯示主題切換器 |
| customClass | string | '' | 自定義 CSS 類名 |

# 版型說明

1. SimpleHeader:
包含 Logo 和主導航菜單
適合簡潔的頁面設計

2. FullHeader:
包含 Logo、主導航菜單、語言切換器和主題切換器
適合需要更多功能的複雜頁面設計


# 自定義和擴展

如果需要添加新的 Header 版型或修改現有版型，你可以：

1. 在 HeaderTypes.ts 中添加或修改相應的類型定義
2. 創建新的 Header 組件文件（例如 NewHeader.tsx）
3. 在 HeaderFactory.tsx 中添加新的 case 來處理新的版型
4. 在 index.ts 中導出新的 Header 組件

# 注意事項

確保所有需要的子組件（如 Logo、MainMenu 等）都已正確實現和導入
當添加新的功能或修改現有功能時，記得更新本 README 文件
對於更複雜的狀態管理需求，考慮使用 React Context 或其他狀態管理解決方案

