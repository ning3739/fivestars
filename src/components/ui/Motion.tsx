'use client';

import { motion, useInView } from 'motion/react';
import { ReactNode, useRef, useEffect, useState } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

// Hook to detect mobile
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return isMobile;
}

// 淡入上移动画
export function FadeIn({ children, delay = 0, duration = 0.5, className }: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 淡入缩放动画
export function FadeInScale({ children, delay = 0, duration = 0.5, className }: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 从左侧滑入 (移动端改为淡入上移)
export function SlideInLeft({ children, delay = 0, duration = 0.5, className }: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const isMobile = useIsMobile();
  
  const initial = isMobile ? { opacity: 0, y: 20 } : { opacity: 0, x: -30 };
  const animate = isMobile 
    ? (isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 })
    : (isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 });
  
  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 从右侧滑入 (移动端改为淡入上移)
export function SlideInRight({ children, delay = 0, duration = 0.5, className }: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const isMobile = useIsMobile();
  
  const initial = isMobile ? { opacity: 0, y: 20 } : { opacity: 0, x: 30 };
  const animate = isMobile 
    ? (isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 })
    : (isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 });
  
  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 交错动画容器
export function StaggerContainer({ children, className, staggerDelay = 0.1 }: StaggerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 交错动画子元素
export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
