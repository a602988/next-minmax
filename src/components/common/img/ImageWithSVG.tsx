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
  className = '',
  height,
  priority = false,
  src,
  width
}: UniversalImageProps) {
  const [svgContent, setSvgContent] = useState<string>('');
  const isSvg = src.toLowerCase().endsWith('.svg');

  useEffect(() => {
    if (isSvg) {
      fetch(src)
        .then((res) => {
          if (!res.ok) throw new Error(`Failed to fetch SVG: ${res.statusText}`);
          return res.text();
        })
        .then((svg) => setSvgContent(svg))
        .catch((err) => console.error(err));
    }
  }, [src, isSvg]);

  if (isSvg) {
    return (
      <div
        aria-label={alt}
        className={className}
        dangerouslySetInnerHTML={{ __html: svgContent }}
        role="img"
      />
    );
  }

  return (
    <Image
      alt={alt}
      className={className}
      height={height}
      priority={priority}
      src={src}
      width={width}
    />
  );
}
