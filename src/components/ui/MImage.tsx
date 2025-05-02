import React from 'react';
import Image from 'next/image';
import { ImageData } from '@/services/minmax/types/image';

interface MImageProps {
  imageData: ImageData;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
}

export const MImage: React.FC<MImageProps> = ({ imageData, alt, width, height, priority, className }) => {
  const imageStyle: React.CSSProperties = {
    objectFit: 'contain',
    objectPosition: imageData.spot_x !== null && imageData.spot_y !== null
      ? `${imageData.spot_x}% ${imageData.spot_y}%`
      : 'center',
  };

  return (
    <div className={className}>
      <Image
        src={imageData.url}
        alt={alt}
        width={width}
        height={height}
        style={imageStyle}
        priority={priority}
      />
    </div>
  );
};
