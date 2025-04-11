import React from 'react';
import styles from './ErrorState.module.css';

interface ErrorStateProps {
  className?: string;
  message?: string;
}

export default function ErrorState({
  className = '',
  message = '無法載'
}: ErrorStateProps) {
  return (
    <div className={`${styles.error} ${className}`} role="alert">
      {message}
    </div>
  );
}
