export default function SectionHeader({ badge, title, subtitle, centered = true, light = false }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {badge && (
        <span className="inline-block text-gold-500 font-semibold text-sm tracking-widest uppercase mb-3">
          {badge}
        </span>
      )}
      <h2
        className={`font-display font-bold text-3xl md:text-4xl leading-tight mb-4 ${
          light ? 'text-white' : 'text-navy-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base md:text-lg max-w-2xl leading-relaxed ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-white/70' : 'text-gray-500'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
