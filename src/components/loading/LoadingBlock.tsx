import React from 'react';
import styles from './loadingBlock.module.css';

export default function LoadingBlock() {
    return (
        <div className={styles.loadingContainer}>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
        </div>
    );
};

