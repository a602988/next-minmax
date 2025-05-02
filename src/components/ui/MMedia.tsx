import React from 'react';
import { ImageData } from '@/services/minmax/types/image';
import { MImage } from './MImage';
import { MPicture } from './MPicture';
import { MVideo } from './MVideo';

interface MMediaProps {
  mediaData: ImageData | ImageData[];
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
}

export const MMedia: React.FC<MMediaProps> = ({ mediaData, alt, width, height, priority, className }) => {
  const mediaArray = Array.isArray(mediaData) ? mediaData : [mediaData];

  const shouldUsePicture = mediaArray.length > 1 || mediaArray.some(media => media.device !== 'all');

  if (shouldUsePicture) {
    return (
      <div className={className}>
        <MPicture
          imageData={mediaArray}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
        />
      </div>
    );
  }

  return (
    <div className={className}>
      {mediaArray.map((media, index) => {
        if (media.media === 'video') {
          return <MVideo key={index} videoData={media} width={width} height={height} />;
        } else {
          return (
            <MImage
              key={index}
              imageData={media}
              alt={alt}
              width={width}
              height={height}
              priority={priority}
            />
          );
        }
      })}
    </div>
  );
};
