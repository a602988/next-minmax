import Image from 'next/image';
import React from 'react';

interface UniversalImageProps {
  alt: string;
  className?: string;
  height?: number;
  priority?: boolean;
  src: string;
  width?: number;
}

export default function ImageWithSVG({
  alt,
  className,
  height,
  priority = false,
  src,
  width
}: UniversalImageProps) {
  if (src.toLowerCase().endsWith('.svg')) {
    // 如果是 SVG 文件，使用 SVGInline 組件
    return <SVGInline alt={alt} className={className} src={src} />;
  } else {
    // 對於其他類型的圖片，使用 Next.js 的 Image 組件
    return (
      <Image
        alt={alt}
        className={className}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        priority={priority}
        src={src}
        width={width}
      />
    );
  }
}

// SVGInline 組件保持不變
function SVGInline({ alt, className, src }: { src: string; alt: string; className?: string }) {
  const [svgContent, setSvgContent] = React.useState<string | null>(null);

  React.useEffect(() => {
    fetch(src)
      .then(response => response.text())
      .then(text => setSvgContent(text))
      .catch(error => console.error('Error fetching SVG:', error));
  }, [src]);

  if (!svgContent) return null;

  return (
    <div
      aria-label={alt}
      className={className}
      dangerouslySetInnerHTML={{ __html: svgContent }}
      role="img"
    />
  );
}
