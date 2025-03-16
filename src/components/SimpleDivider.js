import React from 'react';
import styles from './SimpleDivider.module.css';

export default function SimpleDivider({withIcon = false}) {
  return (
    <div className={styles.dividerContainer}>
      <div className={styles.dividerLine}></div>
      {withIcon && (
        <div className={styles.dividerIcon}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0L15.708 8.59L24 9.018L17.22 15.09L19.416 24L12 19.09L4.584 24L6.78 15.09L0 9.018L8.292 8.59L12 0Z" 
                  fill="currentColor" />
          </svg>
        </div>
      )}
      <div className={styles.dividerLine}></div>
    </div>
  );
} 