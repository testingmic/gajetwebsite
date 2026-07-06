import { Link } from 'react-router-dom';
import {
  ArrowRight, ShieldCheck, Leaf, Users, Scale,
  CheckCircle2, AlertTriangle, BookOpen, Recycle
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Animate from '../components/Animate';

const govPillars = [
  { icon: Scale, title: 'Clear Leadership Structures', desc: 'Defined accountability and decision-making frameworks at every level of the organisation.' },
  { icon: BookOpen, title: 'Ethical Business Conduct', desc: 'Full compliance with applicable laws, regulations, and international best practices.' },
  { icon: CheckCircle2, title: 'Transparent Decision-Making', desc: 'Open financial controls and clear reporting to all stakeholders.' },
  { icon: AlertTriangle, title: 'Risk Management', desc: 'Robust internal control systems for proactive risk identification and mitigation.' },
  { icon: Users, title: 'Stakeholder Respect', desc: 'Respect for shareholders, partners, employees, and host communities at all times.' },
  { icon: ShieldCheck, title: 'Integrity Culture', desc: 'A culture of responsibility and integrity embedded at all levels of the organisation.' },
];

const hsePrinciples = [
  'Zero tolerance for unsafe practices',
  'Compliance with national and international HSE standards',
  'Continuous HSE training and awareness programs',
  'Proactive risk identification and incident prevention',
  'Environmental protection and responsible resource use',
  'HSE planning integrated into every project',
];

const sustainabilityFocus = [
  { icon: Recycle, title: 'Responsible Resource Use', desc: 'Minimising waste and optimising natural resource consumption across all operations.' },
  { icon: Leaf, title: 'Environmental Protection', desc: 'Rehabilitation practices and environmental stewardship embedded in project planning.' },
  { icon: Users, title: 'Community Engagement', desc: 'Investing in local capacity development and inclusive community partnerships.' },
  { icon: Scale, title: 'Ethical Sourcing', desc: 'Transparent and responsible procurement and trading practices.' },
];

export default function Governance() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-navy-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full"
            style={{ backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(245,158,11,0.3) 40px, rgba(245,158,11,0.3) 41px)` }}
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
            <div className="h-px w-10 bg-gold-400 animate-draw-line" />
            <span className="text-gold-400 font-semibold text-sm tracking-widest uppercase">How We Operate</span>
            <div className="h-px w-10 bg-gold-400 animate-draw-line" />
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl text-white mb-5 animate-slide-up" style={{ animationDelay: '200ms' }}>
            Governance, HSE & Sustainability
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '350ms' }}>
            Sound governance, an uncompromising safety culture, and a long-term commitment to sustainability are the pillars of how we operate.
          </p>
        </div>
      </section>

      {/* Corporate Governance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <Animate variant="right">
              <span className="inline-block text-gold-500 font-semibold text-sm tracking-widest uppercase mb-3">Corporate Governance</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-navy-900 leading-tight mb-5">
                Governed by Integrity, Driven by Accountability
              </h2>
              <p className="text-gray-500 leading-relaxed mb-5">
                Gajet Resources International Limited is committed to the highest standards of corporate governance,
                recognising that strong governance is essential for long-term success and stakeholder confidence.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Our governance framework promotes a culture of responsibility and integrity at all levels of the
                organisation, ensuring that decisions align with our values and strategic objectives.
              </p>
            </Animate>
            <Animate variant="left" className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&auto=format&fit=crop&q=80" alt="Corporate governance" className="w-full h-full object-cover" loading="lazy" />
            </Animate>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {govPillars.map(({ icon: Icon, title, desc }, i) => (
              <Animate key={title} variant="up" delay={`${i * 80}ms`}
                className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover-lift group">
                <div className="w-11 h-11 rounded-xl bg-navy-100 flex items-center justify-center mb-4 group-hover:bg-navy-900 transition-colors duration-300">
                  <Icon size={20} className="text-navy-700 group-hover:text-gold-400 transition-colors duration-300" />
                </div>
                <h4 className="font-display font-bold text-navy-900 mb-2">{title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* HSE */}
      <section className="py-20 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full"
            style={{ backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(245,158,11,0.3) 40px, rgba(245,158,11,0.3) 41px)` }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                badge="Health, Safety & Environment"
                title="Safety is Non-Negotiable"
                subtitle="The health and safety of our employees, partners, and communities is a core priority at Gajet Resources."
                centered={false}
                light
              />
              <ul className="space-y-4">
                {hsePrinciples.map(principle => (
                  <li key={principle} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gold-500 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 size={14} className="text-navy-900" />
                    </div>
                    <span className="text-white/80 text-sm leading-relaxed">{principle}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-5 rounded-xl bg-white/5 border border-white/10">
                <p className="text-gold-400 font-display font-bold text-lg mb-1">Zero Tolerance Policy</p>
                <p className="text-white/60 text-sm leading-relaxed">
                  We integrate HSE planning into every project, ensuring safety and environmental stewardship
                  are never compromised. No project deadline justifies a safety shortcut.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=80"
                alt="Safety on site"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Sustainability"
            title="Building for Generations to Come"
            subtitle="Sustainability is central to our long-term strategy. We create lasting value by balancing economic growth with social responsibility and environmental stewardship."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {sustainabilityFocus.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center p-6 rounded-2xl bg-green-50 border border-green-100 card-hover">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-green-600" />
                </div>
                <h4 className="font-display font-bold text-navy-900 mb-2">{title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Sustainability statement */}
          <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full"
                style={{ backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(245,158,11,0.3) 40px, rgba(245,158,11,0.3) 41px)` }}
              />
            </div>
            <div className="relative max-w-3xl mx-auto">
              <Leaf size={40} className="text-green-400 mx-auto mb-5" />
              <h3 className="font-display font-bold text-2xl text-white mb-4">Our Sustainability Commitment</h3>
              <p className="text-white/70 text-lg leading-relaxed italic">
                &ldquo;By embedding sustainability into our operations, we ensure that our activities contribute
                positively to society while preserving value for future generations.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gold-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl text-navy-900 mb-4">
            Partner With a Responsible Enterprise
          </h2>
          <p className="text-navy-800 mb-8 text-lg">
            Governance, safety, and sustainability aren&apos;t just policies — they are how we do business every day.
          </p>
          <Link to="/contact" className="bg-navy-900 text-white hover:bg-navy-800 font-semibold px-8 py-3 rounded-md transition-colors duration-200 inline-flex items-center gap-2">
            Talk to Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
