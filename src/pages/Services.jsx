import { Link } from 'react-router-dom';
import {
  Building2, Pickaxe, Truck, BarChart3, ArrowRight,
  CheckCircle2, HardHat, Layers, MapPin, Globe,
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import ImgSlot from '../components/ImgSlot';
import { SERVICES } from '../assets/images';

const services = [
  {
    id: 'construction',
    icon: Building2,
    tag: '01',
    title: 'Building & Roads Construction',
    tagline: 'From blueprint to completion — built to last.',
    description:
      'We undertake building and civil infrastructure projects, including residential, commercial, and road construction. Our construction services are delivered using modern engineering practices, skilled manpower, and strict quality control to ensure durability, safety, and timely delivery.',
    highlights: [
      'Residential and commercial building projects',
      'Road and civil infrastructure construction',
      'Modern engineering practices and equipment',
      'Strict quality control and safety standards',
      'Skilled manpower and project management',
      'Timely delivery and cost efficiency',
    ],
    mainImgKey:    'construction',
    mainImgLabel:  'svc-construction.jpg',
    gallery: [
      { key: 'conGallery1', label: 'svc-con-gallery-1.jpg', caption: 'Site preparation & foundations' },
      { key: 'conGallery2', label: 'svc-con-gallery-2.jpg', caption: 'Structural works in progress' },
      { key: 'conGallery3', label: 'svc-con-gallery-3.jpg', caption: 'Completed residential project' },
    ],
    color:  'bg-blue-50',
    accent: 'text-blue-600',
    border: 'border-blue-100',
  },
  {
    id: 'mining',
    icon: Pickaxe,
    tag: '02',
    title: 'Mining Services',
    tagline: 'Responsible resource development — done right.',
    description:
      'Our mining services cover exploration support, mine development, extraction, and operational support services. We emphasize operational efficiency, safety, and environmental responsibility across all mining operations while supporting sustainable resource development.',
    highlights: [
      'Geological exploration and support',
      'Mine development and infrastructure',
      'Extraction and operational services',
      'Environmental responsibility and compliance',
      'Safety-first operational culture',
      'Sustainable resource development',
    ],
    mainImgKey:    'mining',
    mainImgLabel:  'svc-mining.jpg',
    gallery: [
      { key: 'minGallery1', label: 'svc-min-gallery-1.jpg', caption: 'Exploration and survey work' },
      { key: 'minGallery2', label: 'svc-min-gallery-2.jpg', caption: 'Mine development operations' },
      { key: 'minGallery3', label: 'svc-min-gallery-3.jpg', caption: 'Extraction and processing' },
    ],
    color:  'bg-amber-50',
    accent: 'text-amber-600',
    border: 'border-amber-100',
  },
  {
    id: 'logistics',
    icon: Truck,
    tag: '03',
    title: 'Logistics Services',
    tagline: 'Connecting supply chains — reliably and efficiently.',
    description:
      'We provide end-to-end logistics solutions covering transportation, haulage, storage, and supply chain coordination. Our logistics capability supports construction, mining, and trading operations with efficiency, reliability, and real-time responsiveness.',
    highlights: [
      'Transportation and haulage services',
      'Warehousing and storage solutions',
      'Supply chain coordination',
      'Real-time tracking and responsiveness',
      'Cross-sector logistics support',
      'Reliable last-mile delivery',
    ],
    mainImgKey:    'logistics',
    mainImgLabel:  'svc-logistics.jpg',
    gallery: [
      { key: 'logGallery1', label: 'svc-log-gallery-1.jpg', caption: 'Heavy haulage fleet' },
      { key: 'logGallery2', label: 'svc-log-gallery-2.jpg', caption: 'Warehouse and storage' },
      { key: 'logGallery3', label: 'svc-log-gallery-3.jpg', caption: 'Supply chain coordination' },
    ],
    color:  'bg-green-50',
    accent: 'text-green-600',
    border: 'border-green-100',
  },
  {
    id: 'trading',
    icon: BarChart3,
    tag: '04',
    title: 'Commodities Trading',
    tagline: 'Connecting producers to global markets.',
    description:
      'We are actively engaged in the trading of commodities, connecting producers to global markets. Our trading operations are guided by transparency, market intelligence, and strong partner relationships to create mutual value.',
    highlights: [
      'Commodities sourcing and procurement',
      'Global market connectivity',
      'Transparent trading practices',
      'Market intelligence and analysis',
      'Strong producer partnerships',
      'Reliable international supply chains',
    ],
    mainImgKey:    'trading',
    mainImgLabel:  'svc-trading.jpg',
    gallery: [
      { key: 'trdGallery1', label: 'svc-trd-gallery-1.jpg', caption: 'Commodities sourcing' },
      { key: 'trdGallery2', label: 'svc-trd-gallery-2.jpg', caption: 'Port and logistics hub' },
      { key: 'trdGallery3', label: 'svc-trd-gallery-3.jpg', caption: 'Global market operations' },
    ],
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
          <h1 className="font-display font-black text-4xl sm:text-5xl text-white mb-5">Our Services</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Integrated solutions across four key economic sectors — delivered with excellence, safety, and integrity.
          </p>
        </div>
      </section>

      {/* ── SERVICE SECTIONS ─────────────────────────────────────── */}
      {services.map((service, i) => {
        const Icon = service.icon;
        const isEven = i % 2 === 0;

        return (
          <section
            key={service.id}
            id={service.id}
            className={`py-20 ${isEven ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              {/* ── Detail row ── */}
              <div className={`grid lg:grid-cols-2 gap-12 items-center mb-12`}>

                {/* Content */}
                <div className={!isEven ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-display font-black text-5xl text-gray-100">{service.tag}</span>
                    <div className={`w-10 h-10 rounded-xl ${service.color} ${service.border} border flex items-center justify-center`}>
                      <Icon size={20} className={service.accent} />
                    </div>
                  </div>
                  <span className="inline-block text-gold-500 font-semibold text-sm tracking-widest uppercase mb-2">
                    {service.tagline}
                  </span>
                  <h2 className="font-display font-bold text-3xl text-navy-900 mb-5 leading-tight">{service.title}</h2>
                  <p className="text-gray-500 leading-relaxed mb-7">{service.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.highlights.map(h => (
                      <li key={h} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 size={16} className="text-gold-500 mt-0.5 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn-primary">
                    Enquire Now <ArrowRight size={18} />
                  </Link>
                </div>

                {/* Main service image */}
                <div className={`rounded-2xl overflow-hidden aspect-[4/3] ${!isEven ? 'lg:order-1' : ''}`}>
                  <ImgSlot
                    src={SERVICES[service.mainImgKey]}
                    alt={service.title}
                    label={service.mainImgLabel}
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* ── Project gallery strip ── */}
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-gold-500 mb-4">
                  Project Gallery
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {service.gallery.map(g => (
                    <div key={g.key} className="group rounded-xl overflow-hidden relative">
                      <div className="aspect-[4/3]">
                        <ImgSlot
                          src={SERVICES[g.key]}
                          alt={g.caption}
                          label={g.label}
                          className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      {/* Caption overlay — only shows when image is loaded */}
                      {SERVICES[g.key] && (
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-900/80 to-transparent px-4 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <p className="text-white text-xs font-medium">{g.caption}</p>
                        </div>
                      )}
                      {/* Static caption for placeholders */}
                      {!SERVICES[g.key] && (
                        <p className="text-center text-gray-400 text-xs mt-2 pb-1">{g.caption}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>
        );
      })}

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
