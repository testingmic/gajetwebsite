import { useEffect, useRef, useState } from 'react';

/**
 * Fires once when the element first enters the viewport.
 * @param {number} threshold  — 0–1, portion of element visible before triggering
 * @param {string} rootMargin — e.g. '0px 0px -80px 0px' to trigger earlier
 */
export function useInView(threshold = 0.15, rootMargin = '0px 0px -60px 0px') {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView];
}
