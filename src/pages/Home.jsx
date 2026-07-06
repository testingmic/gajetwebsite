import { Link } from 'react-router-dom';
import {
  ArrowRight, Building2, Pickaxe, Truck, BarChart3,
  CheckCircle2, Award, Users, ShieldCheck, Globe,
  ChevronRight, MapPin, Quote,
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import EagleLogo from '../components/EagleLogo';
import ImgSlot from '../components/ImgSlot';
import Animate from '../components/Animate';
import CountUp from '../components/CountUp';
import { HOME } from '../assets/images';

const stats = [
  { value: '150+', label: 'Projects Completed' },
  { value: '10+',  label: 'Years of Experience' },
  { value: '200+', label: 'Team Members' },
  { value: '4',    label: 'Core Sectors' },
];

const services = [
  { icon: Building2,  title: 'Building & Roads Construction', desc: 'Residential, commercial, and civil infrastructure projects delivered with modern engineering and strict quality control.', href: '/services#construction' },
  { icon: Pickaxe,    title: 'Mining Services',               desc: 'Exploration support, mine development, extraction, and operational services with emphasis on safety and environmental responsibility.', href: '/services#mining' },
  { icon: Truck,      title: 'Logistics Services',            desc: 'End-to-end transportation, haulage, storage, and supply chain coordination with real-time responsiveness.', href: '/services#logistics' },
  { icon: BarChart3,  title: 'Commodities Trading',           desc: 'Connecting producers to global markets with transparency, market intelligence, and strong partner relationships.', href: '/services#trading' },
];

const coreValues = [
  { icon: '💡', label: 'Innovation' },
  { icon: '🦅', label: 'Leadership' },
  { icon: '⭐', label: 'Quality' },
  { icon: '🤝', label: 'Integrity' },
];

const whyUs = [
  'Diversified expertise across key economic sectors',
  'Strong governance and ethical leadership',
  'Uncompromising commitment to safety and quality',
  'Customer-focused service delivery',
  'Capacity to operate locally and internationally',
];

const featuredProjects = [
  { imgKey: 'project1', label: 'home-project-1.jpeg', title: 'Residential Estate Development',  category: 'Building & Construction', location: 'Ghana',      desc: 'A landmark residential development delivering modern housing with quality craftsmanship and on-time execution.' },
  { imgKey: 'project2', label: 'home-project-2.jpeg', title: 'Mine Site Operations Support',     category: 'Mining Services',         location: 'West Africa', desc: 'Full operational and logistical support for an active mining site, ensuring efficiency, safety, and environmental compliance.' },
  { imgKey: 'project3', label: 'home-project-3.jpeg', title: 'National Road Rehabilitation',     category: 'Roads Construction',      location: 'Ghana',      desc: 'Rehabilitation of a major arterial road network using modern civil engineering methods and durable materials.' },
];

const team = [
  { imgKey: 'teamMember1', label: 'team-member-1.jpeg', name: 'Chief Executive Officer',            role: 'Executive Leadership' },
  { imgKey: 'teamMember2', label: 'team-member-2.jpeg', name: 'Chief Operations Officer',           role: 'Operations & Delivery' },
  { imgKey: 'teamMember3', label: 'team-member-3.jpeg', name: 'Director of Projects',               role: 'Project Management' },
  { imgKey: 'teamMember4', label: 'team-member-4.jpeg', name: 'Director of Business Development',  role: 'Strategy & Growth' },
];

export default function Home() {
  return (
    <main>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center bg-navy-900 overflow-hidden">
        {HOME.heroBg ? (
          <ImgSlot src={HOME.heroBg} alt="Hero" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        ) : (
          <div className="absolute inset-0 opacity-5"
            style={{ backgroundImage: `repeating-linear-gradient(45deg,transparent,transparent 40px,rgba(245,158,11,0.3) 40px,rgba(245,158,11,0.3) 41px)` }}
          />
        )}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600" />
        {/* Soft radial glow */}
        <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold-500/5 blur-3xl pointer-events-none" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.02] border border-white/5 translate-x-1/3" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-white/[0.03] border border-white/5 translate-x-1/4" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Eyebrow — slides in from left */}
              <div className="animate-slide-right flex items-center gap-2 mb-6" style={{ animationDelay: '100ms' }}>
                <div className="h-px w-10 bg-gold-400 animate-draw-line" style={{ animationDelay: '300ms' }} />
                <span className="text-gold-400 font-semibold text-sm tracking-widest uppercase">
                  Gajet Resources International
                </span>
              </div>
              {/* H1 — 3 lines stagger in */}
              <h1 className="font-display font-black text-4xl sm:text-5xl xl:text-6xl text-white leading-[1.1] mb-6">
                <span className="block animate-slide-up" style={{ animationDelay: '200ms' }}>Inspiring the World</span>
                <span className="block shimmer-text animate-slide-up" style={{ animationDelay: '320ms' }}>Through Excellence</span>
                <span className="block animate-slide-up" style={{ animationDelay: '440ms' }}>and Leadership</span>
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg animate-fade-in" style={{ animationDelay: '560ms' }}>
                A diversified, multi-sector enterprise delivering integrated solutions in construction,
                mining, logistics, and commodities trading — locally and globally.
              </p>
              <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '640ms' }}>
                <Link to="/services" className="btn-primary animate-pulse-gold">
                  Explore Services <ArrowRight size={18} />
                </Link>
                <Link to="/about" className="btn-outline-white">
                  About Us <ChevronRight size={18} />
                </Link>
              </div>
            </div>

            {/* Eagle emblem — floats */}
            <div className="hidden lg:flex justify-center items-center animate-fade-in" style={{ animationDelay: '400ms' }}>
              <div className="relative animate-float">
                <div className="w-72 h-72 rounded-full bg-white/5 border border-gold-400/30 flex items-center justify-center">
                  <div className="w-52 h-52 rounded-full bg-white/5 border border-gold-400/20 flex items-center justify-center">
                    <EagleLogo className="w-36 h-36" />
                  </div>
                </div>
                <svg className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite]" viewBox="0 0 288 288">
                  <defs>
                    <path id="circlePath" d="M144,144 m-130,0 a130,130 0 1,1 260,0 a130,130 0 1,1 -260,0" />
                  </defs>
                  <text fontSize="11" fill="rgba(245,158,11,0.7)" letterSpacing="4" fontFamily="Montserrat,sans-serif" fontWeight="600">
                    <textPath href="#circlePath">EXCELLENCE • INTEGRITY • LEADERSHIP • VISION • STRENGTH •&nbsp;</textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>

          {/* Stats — stagger in */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 stagger">
            {stats.map((stat, i) => (
              <Animate key={stat.label} variant="up-sm" delay={`${i * 80}ms`}
                className="text-center py-5 px-4 rounded-xl bg-white/5 border border-white/10 hover:border-gold-400/40 transition-colors duration-300">
                <p className="font-display font-black text-3xl text-gold-400 mb-1">
                  <CountUp value={stat.value} />
                </p>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Animate variant="up">
            <SectionHeader badge="What We Do" title="Integrated Solutions Across Key Sectors" subtitle="We combine technical capability, innovation, and ethical business practices to deliver sustainable value across all our operations." />
          </Animate>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ icon: Icon, title, desc, href }, i) => (
              <Animate key={title} variant="up" delay={`${i * 100}ms`}
                className="bg-white rounded-2xl p-6 shadow-sm hover-lift border border-gray-100 group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-gold-100 flex items-center justify-center mb-5 group-hover:bg-gold-500 transition-colors duration-300">
                  <Icon size={22} className="text-gold-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-display font-bold text-navy-900 text-lg mb-3 leading-tight">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{desc}</p>
                <Link to={href} className="text-gold-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all duration-200">
                  Learn More <ArrowRight size={15} />
                </Link>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP ──────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Animate variant="right" className="relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <ImgSlot src={'/images/1.jpeg'} alt="About Gajet Resources" label="home-about.jpeg" className="w-full h-full" />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-gold-500 rounded-2xl px-6 py-5 shadow-xl hidden sm:block animate-scale-in" style={{ animationDelay: '400ms' }}>
                <p className="font-display font-black text-4xl text-navy-900">10+</p>
                <p className="text-navy-800 font-semibold text-sm">Years of Excellence</p>
              </div>
            </Animate>

            <Animate variant="left">
              <span className="inline-block text-gold-500 font-semibold text-sm tracking-widest uppercase mb-3">Who We Are</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-navy-900 leading-tight mb-5">
                A Global Enterprise Built on Trust & Excellence
              </h2>
              <p className="text-gray-500 leading-relaxed mb-5">
                Gajet Resources International Limited is a diversified, multi-sector enterprise providing integrated solutions in building and roads construction, mining services, logistics, and commodities trading.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                We operate with a global outlook, delivering reliable, high-quality services to both public and private sector clients, guided by strong leadership and a commitment to sustainable value creation.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {coreValues.map((v, i) => (
                  <div key={v.label} className="flex items-center gap-3 py-3 px-4 rounded-lg bg-gray-50 hover-lift" style={{ transitionDelay: `${i * 60}ms` }}>
                    <span className="text-xl">{v.icon}</span>
                    <span className="font-semibold text-navy-900 text-sm">{v.label}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn-primary">
                Discover Our Story <ArrowRight size={18} />
              </Link>
            </Animate>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Animate variant="up">
            <SectionHeader badge="Our Work" title="Featured Projects" subtitle="A selection of projects that demonstrate our capability, quality, and commitment to delivering exceptional outcomes." />
          </Animate>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((p, i) => (
              <Animate key={p.title} variant="up" delay={`${i * 120}ms`}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover-lift border border-gray-100 group">
                <div className="aspect-video overflow-hidden">
                  <ImgSlot src={HOME[p.imgKey]} alt={p.title} label={p.label} className="w-full h-full group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-gold-100 text-gold-700 text-xs font-semibold px-3 py-1 rounded-full">{p.category}</span>
                    <span className="flex items-center gap-1 text-gray-400 text-xs"><MapPin size={12} /> {p.location}</span>
                  </div>
                  <h3 className="font-display font-bold text-navy-900 text-lg mb-2 leading-snug">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </Animate>
            ))}
          </div>
          <Animate variant="up" delay="200ms" className="text-center mt-10">
            <Link to="/services" className="btn-primary">View All Services <ArrowRight size={18} /></Link>
          </Animate>
        </div>
      </section>

      {/* ── GALLERY MOSAIC ───────────────────────────────────────── */}
      <section className="py-20 bg-navy-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600" />
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: `repeating-linear-gradient(-45deg,transparent,transparent 40px,rgba(245,158,11,0.3) 40px,rgba(245,158,11,0.3) 41px)` }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Animate variant="up">
            <SectionHeader badge="Gallery" title="Our Work in Action" subtitle="Glimpses from across our construction sites, mining operations, and logistics network." light />
          </Animate>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 h-[480px] md:h-[520px]">
            <Animate variant="scale-sm" delay="0ms"   className="row-span-2 rounded-2xl overflow-hidden h-full"><ImgSlot src={HOME.gallery1} alt="Gallery 1" label="home-gallery-1.jpeg&#10;(tall left panel)" className="w-full h-full" /></Animate>
            <Animate variant="scale-sm" delay="100ms" className="rounded-2xl overflow-hidden"><ImgSlot src={HOME.gallery2} alt="Gallery 2" label="home-gallery-2.jpeg" className="w-full h-full" /></Animate>
            <Animate variant="scale-sm" delay="160ms" className="rounded-2xl overflow-hidden"><ImgSlot src={HOME.gallery3} alt="Gallery 3" label="home-gallery-3.jpeg" className="w-full h-full" /></Animate>
            <Animate variant="scale-sm" delay="220ms" className="rounded-2xl overflow-hidden"><ImgSlot src={HOME.gallery4} alt="Gallery 4" label="home-gallery-4.jpeg" className="w-full h-full" /></Animate>
            <Animate variant="scale-sm" delay="280ms" className="rounded-2xl overflow-hidden"><ImgSlot src={HOME.gallery5} alt="Gallery 5" label="home-gallery-5.jpeg" className="w-full h-full" /></Animate>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Animate variant="right">
              <SectionHeader badge="Why Choose Us" title="The Gajet Advantage" subtitle="We bring together multi-sector expertise, ethical leadership, and operational excellence to exceed client expectations." centered={false} />
              <ul className="space-y-4 mb-8">
                {whyUs.map((item, i) => (
                  <li key={item} className="flex items-start gap-3 animate-slide-right opacity-0"
                    style={{ animationDelay: `${i * 80 + 200}ms`, animationFillMode: 'both' }}>
                    <CheckCircle2 size={20} className="text-gold-500 mt-0.5 shrink-0" />
                    <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-primary">Partner With Us <ArrowRight size={18} /></Link>
            </Animate>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Award,       title: 'Award-Winning Quality', desc: 'Recognised for outstanding delivery across sectors' },
                { icon: ShieldCheck, title: 'Safety First',          desc: 'Zero tolerance for unsafe practices on all sites' },
                { icon: Globe,       title: 'Global Reach',          desc: 'Capacity to operate locally and internationally' },
                { icon: Users,       title: 'Expert Team',           desc: 'Skilled professionals committed to excellence' },
              ].map(({ icon: Icon, title, desc }, i) => (
                <Animate key={title} variant="scale-sm" delay={`${i * 80}ms`}
                  className="bg-gray-50 border border-gray-100 rounded-2xl p-5 hover-lift">
                  <div className="w-10 h-10 rounded-lg bg-gold-100 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-gold-600" />
                  </div>
                  <h4 className="font-display font-bold text-navy-900 text-sm mb-2">{title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </Animate>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MEET THE TEAM ────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Animate variant="up">
            <SectionHeader badge="Our People" title="Leadership Behind the Vision" subtitle="Experienced leaders who bring strategic clarity, operational depth, and an unwavering commitment to delivering results." />
          </Animate>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <Animate key={member.name} variant="up" delay={`${i * 100}ms`} className="text-center group">
                <div className="w-36 h-36 rounded-full overflow-hidden mx-auto mb-5 ring-4 ring-white shadow-lg group-hover:ring-gold-400 transition-all duration-300 animate-pulse-gold">
                  <ImgSlot src={HOME[member.imgKey]} alt={member.name} label={member.label} className="w-full h-full" />
                </div>
                <h4 className="font-display font-bold text-navy-900 text-base mb-1 leading-snug">{member.name}</h4>
                <p className="text-gold-500 text-sm font-medium">{member.role}</p>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ──────────────────────────────────────────── */}
      <section className="py-20 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: `repeating-linear-gradient(-45deg,transparent,transparent 40px,rgba(245,158,11,0.3) 40px,rgba(245,158,11,0.3) 41px)` }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Animate variant="scale">
            <Quote size={48} className="text-gold-400/40 mx-auto mb-6" />
            <blockquote className="font-display font-bold text-2xl md:text-3xl text-white leading-relaxed mb-8 italic">
              &ldquo;Gajet Resources delivered our project on time, within budget, and to a standard that exceeded every expectation. Their team&apos;s professionalism was second to none.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-gold-400 shrink-0 bg-navy-800 flex items-center justify-center text-gold-400 font-bold text-lg">GR</div>
              <div className="text-left">
                <p className="text-white font-semibold text-sm">Client, Public Sector</p>
                <p className="text-white/50 text-xs">Infrastructure Project, Ghana</p>
              </div>
            </div>
          </Animate>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-16 bg-gold-500">
        <Animate variant="up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-navy-900 mb-4">Ready to Start Your Next Project?</h2>
          <p className="text-navy-800 text-lg mb-8 max-w-2xl mx-auto">Partner with Gajet Resources International Limited for world-class solutions across construction, mining, logistics, and trading.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="bg-navy-900 text-white hover:bg-navy-800 font-semibold px-8 py-3 rounded-md transition-colors duration-200 inline-flex items-center gap-2">
              Contact Us Today <ArrowRight size={18} />
            </Link>
            <Link to="/services" className="btn-outline">View All Services</Link>
          </div>
        </Animate>
      </section>

    </main>
  );
}
