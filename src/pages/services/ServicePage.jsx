import { Link } from 'react-router-dom';
import {
  CheckCircle2, ArrowRight, ArrowLeft, Phone, Mail, MessageSquare,
  HardHat, Layers, MapPin, Globe,
} from 'lucide-react';
import Animate from '../../components/Animate';
import ImgSlot from '../../components/ImgSlot';
import SectionHeader from '../../components/SectionHeader';
import { SERVICES } from '../../assets/images';

const differentiators = [
  { icon: HardHat, title: 'Safety Standards',     desc: 'All operations meet national and international HSE standards.' },
  { icon: Layers,  title: 'Integrated Solutions',  desc: 'Cross-sector expertise enabling seamless project delivery.' },
  { icon: MapPin,  title: 'Local Knowledge',       desc: 'Deep understanding of local conditions and requirements.' },
  { icon: Globe,   title: 'Global Standards',      desc: 'World-class practices adapted for every environment.' },
];

export default function ServicePage({ service }) {
  const { icon: Icon, tag, title, tagline, description, highlights, mainImgKey, mainImgLabel, gallery, color, accent, border } = service;

  return (
    <main className="pt-20">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-navy-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: `repeating-linear-gradient(45deg,transparent,transparent 40px,rgba(245,158,11,0.3) 40px,rgba(245,158,11,0.3) 41px)` }}
        />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-white/50 hover:text-gold-400 text-sm font-medium mb-8 transition-colors duration-200"
          >
            <ArrowLeft size={14} />
            Back to Services
          </Link>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="h-px w-10 bg-gold-400 animate-draw-line" />
              <span className="text-gold-400 font-semibold text-sm tracking-widest uppercase">Our Services</span>
              <div className="h-px w-10 bg-gold-400 animate-draw-line" />
            </div>
            <h1 className="font-display font-black text-4xl sm:text-5xl text-white mb-4 animate-slide-up" style={{ animationDelay: '200ms' }}>
              {title}
            </h1>
            <p className="text-gold-400 font-semibold text-base animate-fade-in" style={{ animationDelay: '300ms' }}>
              {tagline}
            </p>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Content */}
            <Animate variant="right">
              <div className="flex items-center gap-3 mb-5">
                <span className="font-display font-black text-5xl text-gray-100">{tag}</span>
                <div className={`w-11 h-11 rounded-xl ${color} ${border} border flex items-center justify-center`}>
                  <Icon size={22} className={accent} />
                </div>
              </div>
              <h2 className="font-display font-bold text-3xl text-navy-900 mb-4 leading-tight">{title}</h2>
              <p className="text-gray-500 leading-relaxed mb-8 text-base">{description}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {highlights.map(h => (
                  <li key={h} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-primary">
                Enquire Now <ArrowRight size={18} />
              </Link>
            </Animate>

            {/* Main image */}
            <Animate variant="left" className="rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
              <ImgSlot
                src={SERVICES[mainImgKey]}
                alt={title}
                label={mainImgLabel}
                className="w-full h-full"
              />
            </Animate>
          </div>
        </div>
      </section>

      {/* ── GALLERY ──────────────────────────────────────────────── */}
      {gallery.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold tracking-widest uppercase text-gold-500 mb-6">Project Gallery</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {gallery.map((g, gi) => (
                <Animate key={g.key} variant="up" delay={`${gi * 100}ms`} className="group rounded-xl overflow-hidden relative">
                  <div className="aspect-[4/3]">
                    <ImgSlot
                      src={SERVICES[g.key]}
                      alt={g.caption}
                      label={g.label}
                      className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {SERVICES[g.key] && (
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-900/80 to-transparent px-4 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white text-xs font-medium">{g.caption}</p>
                    </div>
                  )}
                  {!SERVICES[g.key] && (
                    <p className="text-center text-gray-400 text-xs mt-2 pb-1">{g.caption}</p>
                  )}
                </Animate>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CONTACT CTA CARD ─────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Animate variant="up">
            <div className="bg-navy-900 rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden shadow-xl">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5"
                style={{ backgroundImage: `repeating-linear-gradient(-45deg,transparent,transparent 40px,rgba(245,158,11,0.4) 40px,rgba(245,158,11,0.4) 41px)` }}
              />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600" />

              <div className="relative">
                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-gold-500/20 flex items-center justify-center mx-auto mb-6">
                  <MessageSquare size={24} className="text-gold-400" />
                </div>

                <h3 className="font-display font-bold text-3xl text-white mb-3">
                  Ready to Get Started?
                </h3>
                <p className="text-white/60 text-base max-w-xl mx-auto mb-8 leading-relaxed">
                  Let&apos;s discuss your {title.toLowerCase()} needs. Our team is ready to provide tailored solutions that meet your specific requirements and timeline.
                </p>

                {/* Contact info row */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
                  <a href="tel:+233555782575" className="flex items-center gap-2 text-white/70 hover:text-gold-400 transition-colors text-sm">
                    <Phone size={15} className="text-gold-400" />
                    +233 (0) 555 782 575
                  </a>
                  <div className="hidden sm:block w-px h-4 bg-white/20" />
                  <a href="mailto:info@gajetresources.com" className="flex items-center gap-2 text-white/70 hover:text-gold-400 transition-colors text-sm">
                    <Mail size={15} className="text-gold-400" />
                    info@gajetresources.com
                  </a>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold px-8 py-3.5 rounded-lg transition-colors duration-200 text-sm"
                >
                  Contact Us Today <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </Animate>
        </div>
      </section>

      {/* ── DIFFERENTIATORS ──────────────────────────────────────── */}
      <section className="py-20 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: `repeating-linear-gradient(-45deg,transparent,transparent 40px,rgba(245,158,11,0.3) 40px,rgba(245,158,11,0.3) 41px)` }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Approach"
            title="What Sets Our Services Apart"
            subtitle="Every service we deliver is backed by deep expertise, strict quality controls, and an unwavering commitment to client success."
            light
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map(({ icon: DIcon, title: dtitle, desc }) => (
              <div key={dtitle} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors duration-200">
                <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center mx-auto mb-4">
                  <DIcon size={22} className="text-gold-400" />
                </div>
                <h4 className="font-display font-bold text-white text-base mb-2">{dtitle}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Explore other services */}
          <div className="mt-14 text-center">
            <p className="text-white/50 text-sm mb-3">Explore our other services</p>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-gold-400 text-white/70 hover:text-gold-400 px-6 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              <ArrowLeft size={14} />
              View All Services
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
