'use client';

import { BaseHeader, FullHeader } from './variants';



interface HeaderClientProps {
  variant?: 'base' | 'simple' | 'full';
  className?: string;
}

export default function HeaderClient({
   variant = 'base',
   className = 'header',

}: HeaderClientProps) {


  switch (variant) {
    case 'full':
      return <FullHeader className={className} />;
    default:
      return <BaseHeader className={className} />;
  }
}
