/**
 * @file ImageWithSVG.tsx
 * @description 這個組件提供了一個通用的圖片渲染解決方案，能夠處理SVG React組件、SVG文件和其他圖片格式。
 * 它根據傳入的src類型自動選擇適當的渲染方式，支持Next.js的Image組件、普通img標籤和SVG組件。
 *
 * @features
 * - 支持SVG React組件的直接渲染
 * - 支持SVG文件使用img標籤渲染
 * - 支持其他圖片格式使用Next.js的Image組件渲染
 * - 提供統一的接口來處理不同類型的圖片資源
 *
 * @usage
 * import ImageWithSVG from './components/common/img/ImageWithSVG';
 *
 * // 使用示例
 * <ImageWithSVG
 *   src="/path/to/image.png"
 *   alt="Description"
 *   width={100}
 *   height={100}
 * />
 *
 * @note 確保在使用SVG React組件時，已正確配置您的構建工具以處理SVG導入。
 */

import Image from 'next/image';
import React from 'react';

// 定義通用圖片組件的屬性接口
interface UniversalImageProps {
  alt: string;                // 圖片的替代文字
  className?: string;         // 可選的 CSS 類名
  height: number;             // 圖片高度
  priority?: boolean;         // 是否優先加載（僅適用於 Next.js Image 組件）
  src: string | React.ComponentType<React.SVGProps<SVGSVGElement>>; // 圖片源（可以是字符串路徑或 SVG 組件）
  width: number;              // 圖片寬度
}

// 通用圖片組件，可處理 SVG、一般圖片和 Next.js Image
export default function ImageWithSVG({
  alt,
  className,
  height,
  priority = false,
  src,
  width
}: UniversalImageProps) {
  // 處理 SVG React 組件
  if (typeof src === 'function') {
    // 如果 src 是一個 React 組件（導入的 SVG），直接渲染它
    const SvgComponent = src;
    return (
      <SvgComponent
        aria-label={alt}
        className={className}
        height={height}
        role="img"
        width={width}
      />
    );
  }

  // 處理字符串類型的 src
  if (typeof src === 'string') {
    if (src.toLowerCase().endsWith('.svg')) {
      // 如果是 SVG 文件，使用 img 標籤
      return (
        <img
          alt={alt}
          className={className}
          height={height}
          src={src}
          width={width}
        />
      );
    } else {
      // 對於其他類型的圖片，使用 Next.js 的 Image 組件
      return (
        <Image
          alt={alt}
          className={className}
          height={height}
          loading="lazy"
          priority={priority}
          src={src}
          width={width}
        />
      );
    }
  }

  // 如果 src 既不是函數也不是字符串，返回 null
  return null;
}
