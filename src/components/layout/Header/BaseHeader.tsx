import React from 'react';
import Logo from '@/components/ui/Logo';

interface BaseHeaderProps {
  className?: string;
  children?: React.ReactNode;
}

export default function BaseHeader({ className = '', children }: BaseHeaderProps) {
  return (
    <header className={`flex items-center justify-between ${className}`}>
      <Logo siteName="Your Site Name" />
      {children}
    </header>
  );
}
