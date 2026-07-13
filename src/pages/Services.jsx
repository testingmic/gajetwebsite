import { Link } from 'react-router-dom';
import {
  Building2, Pickaxe, Truck, BarChart3, ArrowRight,
  HardHat, Layers, MapPin, Globe,
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import ImgSlot from '../components/ImgSlot';
import Animate from '../components/Animate';
import { SERVICES } from '../assets/images';

const services = [
  {
    id: 'construction',
    href: '/services/construction',
    icon: Building2,
    tag: '01',
    title: 'Building & Roads Construction',
    tagline: 'From blueprint to completion — built to last.',
    description:
      'Residential and commercial buildings, road and civil infrastructure — delivered with modern engineering and strict quality control.',
    imgKey: 'construction',
    imgLabel: '/images/23.jpeg',
    color:  'bg-blue-50',
    accent: 'text-blue-600',
    border: 'border-blue-100',
  },
  {
    id: 'mining',
    href: '/services/mining',
    icon: Pickaxe,
    tag: '02',
    title: 'Mining Services',
    tagline: 'Responsible resource development — done right.',
    description:
      'Exploration support, mine development, extraction, and operational services guided by safety and environmental responsibility.',
    imgKey: 'mining',
    imgLabel: '/images/3.jpeg',
    color:  'bg-amber-50',
    accent: 'text-amber-600',
    border: 'border-amber-100',
  },
  {
    id: 'logistics',
    href: '/services/logistics',
    icon: Truck,
    tag: '03',
    title: 'Logistics Services',
    tagline: 'Connecting supply chains — reliably and efficiently.',
    description:
      'End-to-end logistics: transportation, haulage, storage, and supply chain coordination across sectors.',
    imgKey: 'logistics',
    imgLabel: '/images/5.jpeg',
    color:  'bg-green-50',
    accent: 'text-green-600',
    border: 'border-green-100',
  },
  {
    id: 'trading',
    href: '/services/trading',
    icon: BarChart3,
    tag: '04',
    title: 'Commodities Trading',
    tagline: 'Connecting producers to global markets.',
    description:
      'Transparent commodities trading powered by market intelligence and strong international partner relationships.',
    imgKey: 'trading',
    imgLabel: '/images/30.jpeg',
    color:  'bg-purple-50',
    accent: 'text-purple-600',
    border: 'border-purple-100',
  },
];

const differentiators = [
  { icon: HardHat, title: 'Safety Standards',    desc: 'All operations meet national and international HSE standards.' },
  { icon: Layers,  title: 'Integrated Solutions', desc: 'Cross-sector expertise enabling seamless project delivery.' },
  { icon: MapPin,  title: 'Local Knowledge',      desc: 'Deep understanding of local conditions and requirements.' },
  { icon: Globe,   title: 'Global Standards',     desc: 'World-class practices adapted for every environment.' },
];

export default function Services() {
  return (
    <main className="pt-20">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-navy-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: `repeating-linear-gradient(45deg,transparent,transparent 40px,rgba(245,158,11,0.3) 40px,rgba(245,158,11,0.3) 41px)` }}
        />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-10 bg-gold-400" />
            <span className="text-gold-400 font-semibold text-sm tracking-widest uppercase">What We Do</span>
            <div className="h-px w-10 bg-gold-400" />
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl text-white mb-5 animate-slide-up" style={{ animationDelay: '200ms' }}>
            Our Services
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '350ms' }}>
            Integrated solutions across four key economic sectors — delivered with excellence, safety, and integrity.
          </p>
        </div>
      </section>

      {/* ── SERVICE CARDS ────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <Animate key={service.id} variant="up" delay={`${(i % 2) * 100}ms`}>
                  <Link
                    to={service.href}
                    className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col"
                  >
                    {/* Image */}
                    <div className="aspect-[16/9] overflow-hidden">
                      <ImgSlot
                        src={SERVICES[service.imgKey]}
                        alt={service.title}
                        label={service.imgLabel}
                        className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-7 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="font-display font-black text-4xl text-gray-100">{service.tag}</span>
                        <div className={`w-10 h-10 rounded-xl ${service.color} ${service.border} border flex items-center justify-center`}>
                          <Icon size={18} className={service.accent} />
                        </div>
                      </div>
                      <span className="text-gold-500 font-semibold text-xs tracking-widest uppercase mb-2 block">
                        {service.tagline}
                      </span>
                      <h2 className="font-display font-bold text-xl text-navy-900 mb-3 leading-tight">
                        {service.title}
                      </h2>
                      <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                        {service.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-gold-600 font-semibold text-sm group-hover:gap-3 transition-all duration-200">
                        Learn More <ArrowRight size={16} />
                      </span>
                    </div>
                  </Link>
                </Animate>
              );
            })}
          </div>
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
            {differentiators.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors duration-200">
                <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-gold-400" />
                </div>
                <h4 className="font-display font-bold text-white text-base mb-2">{title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-16 bg-gold-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl text-navy-900 mb-4">
            Discuss Your Project With Us
          </h2>
          <p className="text-navy-800 mb-8 text-lg">
            Whether it&apos;s construction, mining, logistics, or trading — we have the expertise to deliver.
          </p>
          <Link to="/contact" className="bg-navy-900 text-white hover:bg-navy-800 font-semibold px-8 py-3 rounded-md transition-colors duration-200 inline-flex items-center gap-2">
            Contact Our Team <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </main>
  );
}
