import { Link } from 'react-router-dom';
import { ArrowRight, Eye, Target, Heart, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import EagleLogo from '../components/EagleLogo';
import Animate from '../components/Animate';

const values = [
  {
    icon: '💡',
    title: 'Innovation',
    desc: 'Continuously improving how we work and the solutions we deliver, embracing new technologies and methods to stay ahead.',
  },
  {
    icon: '🦅',
    title: 'Leadership',
    desc: 'Leading with clarity, accountability, and purpose — inspiring our teams and clients to achieve more together.',
  },
  {
    icon: '⭐',
    title: 'Quality',
    desc: 'Upholding the highest standards across all services and operations, never compromising on delivery excellence.',
  },
  {
    icon: '🤝',
    title: 'Integrity',
    desc: 'Conducting business ethically, transparently, and responsibly — guided by strong moral principles.',
  },
];

const timeline = [
  { year: 'Founded', title: 'Company Established', desc: 'Gajet Resources International Limited was founded with a vision to deliver world-class solutions.' },
  { year: 'Growth', title: 'Sector Expansion', desc: 'Expanded services across construction, mining, logistics, and commodities trading.' },
  { year: 'Today', title: 'Global Outlook', desc: 'Operating with a global perspective, delivering value to public and private sector clients.' },
  { year: 'Future', title: 'Inspiring the World', desc: 'On track to become one of the world\'s most successful diversified enterprises.' },
];

export default function About() {
  return (
    <main className="pt-20">
      {/* Page Hero */}
      <section className="bg-navy-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(245,158,11,0.3) 40px, rgba(245,158,11,0.3) 41px)`
            }}
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
            <div className="h-px w-10 bg-gold-400 animate-draw-line" />
            <span className="text-gold-400 font-semibold text-sm tracking-widest uppercase">About Us</span>
            <div className="h-px w-10 bg-gold-400 animate-draw-line" />
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl text-white mb-5 animate-slide-up" style={{ animationDelay: '200ms' }}>
            Our Story & Identity
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '350ms' }}>
            A company built on the foundations of excellence, integrity, and leadership — inspired by the eagle.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Animate variant="right">
              <span className="inline-block text-gold-500 font-semibold text-sm tracking-widest uppercase mb-3">Company Overview</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-navy-900 leading-tight mb-5">
                Gajet Resources International Limited
              </h2>
              <p className="text-gray-500 leading-relaxed mb-5">
                Gajet Resources International Limited is a diversified, multi-sector enterprise providing
                integrated solutions in building and roads construction, mining services, logistics, and
                commodities trading.
              </p>
              <p className="text-gray-500 leading-relaxed mb-5">
                We operate with a global outlook, delivering reliable, high-quality services to both
                public and private sector clients. We partner with clients across public and private
                sectors to deliver sustainable value, dependable execution, and world-class outcomes.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                We are driven by a commitment to excellence, innovation, and customer-focused service
                delivery. Guided by strong leadership, we combine technical capability, innovation, and
                ethical business practices to deliver sustainable value across all our operations.
              </p>
              <Link to="/services" className="btn-primary">
                Our Services <ArrowRight size={18} />
              </Link>
            </Animate>
            <Animate variant="left" className="rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80" alt="Corporate building" className="w-full h-full object-cover" loading="lazy" />
            </Animate>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Animate variant="up">
            <SectionHeader badge="Direction & Purpose" title="Our Vision & Mission" subtitle="Every decision, every project, every partnership — guided by a clear sense of purpose." />
          </Animate>
          <div className="grid md:grid-cols-2 gap-8">
            <Animate variant="left" className="bg-navy-900 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-gold-500/10 -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center mb-6">
                  <Eye size={24} className="text-gold-400" />
                </div>
                <h3 className="font-display font-bold text-2xl text-gold-400 mb-4">Our Vision</h3>
                <p className="text-white/80 text-lg leading-relaxed italic">
                  &ldquo;To inspire the world and become one of the world&apos;s most successful companies.&rdquo;
                </p>
              </div>
            </Animate>
            <Animate variant="right" className="bg-gold-500 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-navy-900/10 translate-y-1/2 -translate-x-1/2" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-navy-900/20 flex items-center justify-center mb-6">
                  <Target size={24} className="text-navy-900" />
                </div>
                <h3 className="font-display font-bold text-2xl text-navy-900 mb-4">Our Mission</h3>
                <p className="text-navy-800 text-lg leading-relaxed italic">
                  &ldquo;To deliver the best customer service experience by consistently living our values and exceeding customer expectations.&rdquo;
                </p>
              </div>
            </Animate>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Animate variant="up">
            <SectionHeader badge="What We Stand For" title="Our Core Values" subtitle="Our values and governance are guided by strong moral principles, humility, and a recognition that our work is sustained by the grace of God." />
          </Animate>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <Animate key={v.title} variant="up" delay={`${i * 100}ms`}
                className="text-center p-8 rounded-2xl bg-gray-50 hover-lift border border-gray-100 group">
                <div className="text-5xl mb-5">{v.icon}</div>
                <h3 className="font-display font-bold text-xl text-navy-900 mb-3 group-hover:text-gold-600 transition-colors">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* The Eagle – Our Identity */}
      <section className="py-20 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(245,158,11,0.3) 40px, rgba(245,158,11,0.3) 41px)`
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Eagle visual */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-full bg-white/5 border border-gold-400/30 flex items-center justify-center">
                  <div className="w-44 h-44 rounded-full bg-white/5 border border-gold-400/20 flex items-center justify-center">
                    <EagleLogo className="w-28 h-28" />
                  </div>
                </div>
                <svg className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite]" viewBox="0 0 256 256">
                  <defs>
                    <path id="eaglePath" d="M128,128 m-114,0 a114,114 0 1,1 228,0 a114,114 0 1,1 -228,0" />
                  </defs>
                  <text fontSize="10" fill="rgba(245,158,11,0.6)" letterSpacing="4" fontFamily="Montserrat, sans-serif" fontWeight="600">
                    <textPath href="#eaglePath">
                      STRENGTH • VISION • RESILIENCE • INTEGRITY • LEADERSHIP •&nbsp;
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="inline-block text-gold-400 font-semibold text-sm tracking-widest uppercase mb-3">Our Identity</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white leading-tight mb-5">
                The Eagle — Symbol of Our Spirit
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                The eagle represents our corporate identity: vision, strength, resilience, integrity, and leadership.
                Like the eagle, Gajet Resources International Limited operates with focus, courage, and
                the ability to rise above challenges to deliver excellence.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Vision', 'Strength', 'Resilience', 'Integrity', 'Leadership', 'Excellence'].map(trait => (
                  <div key={trait} className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-gold-400 shrink-0" />
                    <span className="text-white/70 text-sm">{trait}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Journey"
            title="From Vision to Reality"
            subtitle="A trajectory built on consistent delivery, expanding capability, and unwavering purpose."
          />
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gray-200 hidden md:block" />
            <div className="space-y-8 md:space-y-0">
              {timeline.map((item, i) => (
                <div key={item.year} className={`relative md:grid md:grid-cols-2 md:gap-8 md:mb-12 ${i % 2 === 0 ? '' : 'md:direction-rtl'}`}>
                  <div className={`${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:col-start-2 md:pl-12'}`}>
                    <div className={`bg-gray-50 rounded-2xl p-6 border border-gray-100 card-hover ${i % 2 !== 0 ? 'md:text-left' : ''}`}>
                      <span className="inline-block bg-gold-100 text-gold-700 font-bold text-sm px-3 py-1 rounded-full mb-3">
                        {item.year}
                      </span>
                      <h3 className="font-display font-bold text-lg text-navy-900 mb-2">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  {/* Center dot */}
                  <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-gold-500 border-4 border-white shadow" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gold-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl text-navy-900 mb-4">
            Ready to Experience the Gajet Difference?
          </h2>
          <p className="text-navy-800 mb-8 text-lg">
            Join the list of satisfied clients who trust us to deliver excellence.
          </p>
          <Link to="/contact" className="bg-navy-900 text-white hover:bg-navy-800 font-semibold px-8 py-3 rounded-md transition-colors duration-200 inline-flex items-center gap-2">
            Get In Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
