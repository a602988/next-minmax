'use client';

import { useEffect, useState } from 'react';

interface SVGEmbedderProps {
  alt?: string;
  className?: string;
  src: string;
}

function SVGEmbedder({ alt = '', className, src }: SVGEmbedderProps) {
  const [svgContent, setSvgContent] = useState<string>('');

  useEffect(() => {
    if (src.endsWith('.svg')) {
      fetch(src)
        .then((res) => {
          if (!res.ok) throw new Error(`Failed to fetch SVG: ${res.statusText}`);
          return res.text();
        })
        .then((svg) => setSvgContent(svg))
        .catch((err) => console.error(err));
    }
  }, [src]);

  return (
    <div
      aria-label={alt}
      className={className}
      dangerouslySetInnerHTML={{ __html: svgContent }}
      role="img"
    />
  );
}

export default SVGEmbedder;
