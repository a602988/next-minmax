'use client'

import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';

const MotionSvg = dynamic(() => import('framer-motion').then((mod) => mod.motion.svg), { ssr: false });
const MotionPath = dynamic(() => import('framer-motion').then((mod) => mod.motion.path), { ssr: false });

interface AnimatedLogoProps {
  className?: string;
}


function AnimatedLogo({ className = '' }: AnimatedLogoProps): JSX.Element {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    function checkNavOpen() {
      const isNavOpen = document.body.classList.contains('nav-open');
      setIsAnimating(isNavOpen);
    }

    // 初始檢查
    checkNavOpen();

    // 設置 MutationObserver 來監聽 body 類的變化
    const observer = new MutationObserver(checkNavOpen);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });

    // 清理函數
    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 0.02,
      transition: {
        delay: 0.5, // 整體動畫延遲 0.5 秒
        when: 'beforeChildren' // 確保父元素動畫在子元素之前完成
      }
    }
  };

  const pathVariants = {
    hidden1: {opacity: 0, y: -8},
    hidden2: {opacity: 0, x: -8},
    hidden3: {opacity: 0, x: 8},
    visible1: {
      opacity: 1,
      y: 0,
      transition: {duration: 1, ease: 'easeInOut'}
    },
    visible2: {
      opacity: 1,
      x: 0,
      transition: {duration: 1, ease: 'easeInOut', delay: 0.1}
    },
    visible3: {
      opacity: 1,
      x: 0,
      transition: {duration: 1, ease: 'easeInOut', delay: 0.05}
    }
  };

  return (
    <div className={className}>
      <MotionSvg
        animate={isAnimating ? 'visible' : 'hidden'}
        fill="none"
        viewBox="0 0 84 86"
        xmlns="http://www.w3.org/2000/svg"
        variants={containerVariants}
        initial="hidden"
      >
        <MotionPath
          animate={isAnimating ? 'visible1' : 'hidden1'}
          d="M47.7895 40.9022L16.7949 10.2256L78.784 10.2256L47.7895 40.9022Z"
          fill="#ffffff"
          variants={pathVariants}
          initial="hidden1"
        />
        <MotionPath
          animate={isAnimating ? 'visible2' : 'hidden2'}
          d="M40.9022 49.7894L10.2255 80.7839L10.2255 18.7949L40.9022 49.7894Z"
          fill="#FFFFFF"
          variants={pathVariants}
          initial="hidden2"
        />
        <MotionPath
          animate={isAnimating ? 'visible3' : 'hidden3'}
          d="M55.0001 51.8875L71.5001 35V68.775L55.0001 51.8875Z"
          fill="#FFFFFF"
          variants={pathVariants}
          initial="hidden3"
        />
      </MotionSvg>
    </div>
  );
}

export default AnimatedLogo;
