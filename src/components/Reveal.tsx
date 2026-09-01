import { type ReactNode, useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'blur' | 'rotate' | 'flip' | 'bounce';
}

export function Reveal({ children, className = '', delay = 0, direction = 'up' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (visible) return 'translate-y-0 translate-x-0 scale-100 opacity-100';
    switch (direction) {
      case 'down': return '-translate-y-8 scale-95 opacity-0';
      case 'left': return 'translate-x-8 scale-95 opacity-0';
      case 'right': return '-translate-x-8 scale-95 opacity-0';
      case 'scale': return 'translate-y-4 scale-90 opacity-0';
      case 'blur': return 'blur-sm opacity-0';
      case 'rotate': return 'rotate-[-10deg] scale-90 opacity-0';
      case 'flip': return 'scale-0 opacity-0';
      case 'bounce': return 'translate-y-16 opacity-0';
      default: return 'translate-y-8 scale-95 opacity-0';
    }
  };
  return (
    <div
      ref={ref}
      className={`transform transition-all duration-[800ms] cubic-bezier(.22,.8,.24,1) ${getTransform()} ${className}`}
      style={{ transitionDelay: `${delay * 80}ms` }}
    >
      {children}
    </div>
  );
}
