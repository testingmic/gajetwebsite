import { useInView } from '../hooks/useInView';

/**
 * Scroll-triggered animation wrapper.
 *
 * variant  — 'up' | 'up-sm' | 'left' | 'right' | 'scale' | 'scale-sm' | 'fade'
 * delay    — CSS delay string e.g. '150ms', '0.3s'
 * duration — override animation duration e.g. '0.8s'
 * className — extra classes on the wrapper div
 * threshold — IntersectionObserver threshold (0–1)
 * as        — element tag, default 'div'
 */
const variantMap = {
  up:       'animate-slide-up',
  'up-sm':  'animate-slide-up-sm',
  left:     'animate-slide-left',
  right:    'animate-slide-right',
  scale:    'animate-scale-in',
  'scale-sm': 'animate-scale-in-sm',
  fade:     'animate-fade-in',
};

export default function Animate({
  children,
  variant = 'up',
  delay = '0ms',
  duration,
  className = '',
  threshold = 0.12,
  as: Tag = 'div',
}) {
  const [ref, inView] = useInView(threshold);

  const animClass = variantMap[variant] ?? 'animate-slide-up';

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: inView ? undefined : 0,
        animationDelay: delay,
        animationDuration: duration,
        animationFillMode: 'both',
      }}
    >
      {/* Inner span carries the animation class once in view */}
      <div
        className={inView ? animClass : ''}
        style={{ animationDelay: delay, animationDuration: duration }}
      >
        {children}
      </div>
    </Tag>
  );
}
