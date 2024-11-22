import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface UniversalImageProps {
  alt: string;
  className?: string;
  height: number;
  priority?: boolean;
  src: string;
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
  const [svgContent, setSvgContent] = useState<React.ReactElement | null>(null);
  const isSvg = src.toLowerCase().endsWith('.svg');

  useEffect(() => {
    if (isSvg) {
      fetch(src)
        .then((res) => {
          if (!res.ok) throw new Error(`Failed to fetch SVG: ${res.statusText}`);
          return res.text();
        })
        .then((svg) => {
          // 解析 SVG 字符串為 DOM
          const parser = new DOMParser();
          const svgDoc = parser.parseFromString(svg, 'image/svg+xml');
          const svgElement = svgDoc.documentElement;

          // 只有當 className 有值時才添加 class 屬性
          if (className) {
            svgElement.setAttribute('class', className);
          }
          svgElement.setAttribute('role', 'img');
          svgElement.setAttribute('aria-label', alt);

          // 轉換為 React 元素
          setSvgContent(
            <svg
              {...Array.from(svgElement.attributes).reduce((acc, attr) => ({
                ...acc,
                [attr.name]: attr.value
              }), {})}
              dangerouslySetInnerHTML={{ __html: svgElement.innerHTML }}
            />
          );
        })
        .catch((err) => console.error(err));
    }
  }, [src, isSvg, className, alt]);

  if (isSvg) {
    return svgContent;
  }

  return (
    <Image
      alt={alt}
      {...(className ? { className } : {})}
      height={height}
      priority={priority}
      src={src}
      width={width}
    />
  );
}
