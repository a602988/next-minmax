import React from 'react';
import Image from 'next/image';
import { ImageData } from '@/services/minmax/types/image';

interface MPictureProps {
  imageData: ImageData[];  // 改為接受 ImageData 數組
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

const deviceMediaQueries = {
  mobile: '(max-width: 575px)',
  pad: '(max-width: 991px)',
  desktop: '(min-width: 1920px)'
};

export const MPicture: React.FC<MPictureProps> = ({ imageData, alt, width, height, priority }) => {
  const defaultImage = imageData.find(img => img.device === 'all') || imageData[0];
  const deviceImages = imageData.filter(img => img.device !== 'all');

  return (
    <picture>
      {deviceImages.map((img, index) => (
        <source
          key={index}
          srcSet={img.url}
          media={deviceMediaQueries[img.device as keyof typeof deviceMediaQueries]}
        />
      ))}
      <Image
        src={defaultImage.url}
        alt={alt}
        width={width}
        height={height}
        style={{
          objectFit: 'contain',
          objectPosition: defaultImage.spot_x !== null && defaultImage.spot_y !== null
            ? `${defaultImage.spot_x}% ${defaultImage.spot_y}%`
            : 'center',
        }}
        priority={priority}
      />
    </picture>
  );
};
