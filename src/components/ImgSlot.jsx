import { ImageIcon } from 'lucide-react';

/**
 * Drop-in image slot. Shows your real image when `src` is provided,
 * or a labeled placeholder box when src is null/undefined.
 *
 * Props:
 *   src        — imported image (or null for placeholder)
 *   alt        — alt text
 *   label      — placeholder label shown inside the box (e.g. "home-hero-bg.jpg")
 *   className  — extra Tailwind classes (controls size/shape from parent)
 *   objectFit  — 'cover' | 'contain' | 'fill'  (default: 'cover')
 */
export default function ImgSlot({
  src,
  alt = '',
  label = 'Add image',
  className = '',
  objectFit = 'cover',
}) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`${className} object-${objectFit}`}
        loading="lazy"
      />
    );
  }

  return (
    <div
      className={`${className} bg-navy-100 border-2 border-dashed border-navy-300 flex flex-col items-center justify-center gap-2 select-none`}
    >
      <ImageIcon size={28} className="text-navy-400" />
      <span className="text-navy-500 text-xs font-mono text-center px-3 leading-relaxed">
        {label}
      </span>
    </div>
  );
}
