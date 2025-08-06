import {ReactNode} from 'react';
import "./globals.css";


type Props = {
  children: ReactNode;
};

// 由於我們在根目錄有 `not-found.tsx` 頁面，因此需要一個 layout 檔案，
// 即使它只是將 children 傳遞下去。
export default function RootLayout({children}: Props) {
  return children;
}
