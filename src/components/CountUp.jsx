import { useEffect, useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';

/**
 * Animates a number from 0 → end when it scrolls into view.
 * Handles suffixes like '+', 'k', '%'.
 *
 * value    — e.g. '150+', '10+', '200+'
 * duration — ms for the count animation (default 1400)
 */
export default function CountUp({ value = '0', duration = 1400 }) {
  const [ref, inView] = useInView(0.3);
  const [display, setDisplay] = useState('0');
  const frameRef = useRef(null);

  // Parse numeric + suffix
  const match = String(value).match(/^(\d+(?:\.\d+)?)(.*)$/);
  const end = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : '';

  useEffect(() => {
    if (!inView) return;

    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * end);
      setDisplay(current + suffix);
      if (progress < 1) frameRef.current = requestAnimationFrame(step);
    };

    frameRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameRef.current);
  }, [inView, end, suffix, duration]);

  return <span ref={ref}>{inView ? display : '0' + suffix}</span>;
}
