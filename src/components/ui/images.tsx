import React from 'react';
import Image from 'next/image';
import { ImageData } from '@/services/minmax/types/image';

interface MinmaxImageProps {
  imageData: ImageData[];
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

const deviceMediaQueries = {
  mobile: '(max-width: 575px)',
  pad: '(max-width: 991px)',
  desktop: '(min-width: 1920px)'
};

const defaultWidths = {
  mobile: 576,
  pad: 992,
  desktop: 3840
};

export const MImage: React.FC<MinmaxImageProps> = ({
  imageData,
  alt = '',
  width,
  height,
  className,
  priority = false
}): React.ReactElement | null => {
  if (!imageData || imageData.length === 0) {
    return null;
  }

  // 找到封面圖片（如果有的話）
  const coverImage = imageData.find(img => img.cover);


  // 如果有封面圖片，使用它；否則使用第一張圖片
  const image = coverImage || imageData[0];

  // 使用 image 中的屬性
  const imageAlt = alt || image.title || '';
  const imageWidth = width;
  const imageHeight = height;



  // 根據 cover 和 spot_x, spot_y 屬性設置樣式
  const imageStyle: React.CSSProperties = {
    objectFit: image.cover ? 'cover' : 'contain',
  };

  if (image.spot_x !== null || image.spot_y !== null) {
    const x = image.spot_x !== null ? `${image.spot_x}%` : 'center';
    const y = image.spot_y !== null ? `${image.spot_y}%` : 'center';
    imageStyle.objectPosition = `${x} ${y}`;
  }

  // 根據 device 屬性和 cover 屬性添加額外的 class
  const deviceClass = image.device ? `device-${image.device}` : '';
  const coverClass = image.cover ? 'cover' : '';
  const finalClassName = `${className || ''} ${deviceClass} ${coverClass}`.trim();


  const shouldUsePicture = imageData.some(img => img.device !== 'all');

  const renderImage = (img: ImageData) => (
        <Image
            src={img.url}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            style={imageStyle}
            priority={priority}
        />
  );


  const renderPicture = () => {
    const defaultImage = imageData.find(img => img.device === 'all') || image;
    const deviceImages = imageData.filter(img => img.device !== 'all');

    return (
      <picture>
        {deviceImages.map((img, index) => (
          <source
            key={index}
            srcSet={img.url}
            media={deviceMediaQueries[img.device as keyof typeof deviceMediaQueries]}
            width={img.spot_x || defaultWidths[img.device as keyof typeof defaultWidths]}
            height={img.spot_y || imageHeight}
            data-device={img.device}
          />
        ))}
        {renderImage(defaultImage)}
      </picture>
    );
  };

  return (
    <div className={finalClassName}>
      {image.media === 'video' && image.autoplay ? (
        <video
          src={image.url}
          autoPlay
          loop
          muted
          playsInline
          width={imageWidth}
          height={imageHeight}
        />
      ) : shouldUsePicture ? (
        renderPicture()
      ) : (
        renderImage(image)
      )}
    </div>
  );
};
