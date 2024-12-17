import Image from 'next/image';
import React from 'react';

interface UniversalImageProps {
  alt: string;
  className?: string;
  height: number;
  priority?: boolean;
  src: string | React.ComponentType<React.SVGProps<SVGSVGElement>>;
  width: number;
}

export default function ImageWithSVG({
  alt,
  className,
  height,
  priority = false,
  src,
  width
}: UniversalImageProps) {
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

  return null;
}
