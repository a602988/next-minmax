import React from 'react';
import styles from './LoadingState.module.css';

interface LoadingStateProps {
  className?: string;
  message?: string;
}

export default function LoadingState({
  className = '',
  message = '載入中...'
}: LoadingStateProps) {
  return (
    <div className={`${styles.loading} ${className}`} role="status">
      <div className={styles.spinner} aria-hidden="true"></div>
      <span className={styles.loadingText}>{message}</span>
    </div>
  );
}
