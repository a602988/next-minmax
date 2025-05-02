import React from 'react';
import { ImageData } from '@/services/minmax/types/image';

interface MVideoProps {
  videoData: ImageData;
  width?: number;
  height?: number;
}

export const MVideo: React.FC<MVideoProps> = ({ videoData, width, height }) => {
  return (
    <video
      src={videoData.url}
      autoPlay
      loop
      muted
      playsInline
      width={width}
      height={height}
    />
  );
};
