import React from 'react';
import Image from 'next/image';
import { ImageData } from '@/services/minmax/types/image';

interface MinmaxImageProps {
  imageData: ImageData[];
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export const MImage: React.FC<MinmaxImageProps> = ({
  imageData,
  alt,
  width,
  height,
  className,
  priority = false
}): React.ReactElement | null => {
  if (!imageData || imageData.length === 0) {
    return null;
  }

  const image = imageData[0]; // 使用陣列中的第一張圖片

  return (
    <Image
      src={image.url}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  );
};
