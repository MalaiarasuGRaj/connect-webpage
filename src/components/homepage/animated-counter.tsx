"use client";

import { useEffect, useState } from 'react';

type AnimatedCounterProps = {
  from?: number;
  to: number;
  duration?: number;
};

export function AnimatedCounter({ from = 0, to, duration = 1.5 }: AnimatedCounterProps) {
  const [count, setCount] = useState(from);
  const isDecimal = to % 1 !== 0;

  useEffect(() => {
    let startTimestamp: number;
    const step = (timestamp: number) => {
      if (!startTimestamp) {
        startTimestamp = timestamp;
      }
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      const currentCount = from + progress * (to - from);
      
      if (isDecimal) {
        setCount(parseFloat(currentCount.toFixed(1)));
      } else {
        setCount(Math.floor(currentCount));
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [to, from, duration, isDecimal]);

  const formatNumber = (num: number) => {
    if (isDecimal) {
      return num.toFixed(1);
    }
    return Math.round(num).toLocaleString();
  };

  return <span>{formatNumber(count)}</span>;
}