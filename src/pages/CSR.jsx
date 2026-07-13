import { Link } from 'react-router-dom';
import {
  Users, Leaf, GraduationCap, HeartHandshake, ShieldCheck, Building2,
  ArrowRight, CheckCircle2,
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Animate from '../components/Animate';

const pillars = [
  {
    icon: Users,
    title: 'Community Development',
    color: 'bg-blue-50',
    accent: 'text-blue-600',
    border: 'border-blue-100',
    description:
      'We invest directly in the communities where we operate, supporting local infrastructure, creating employment opportunities, and partnering with community leaders to address grassroots needs.',
    points: [
      'Local workforce recruitment and training',
      'Community infrastructure support',
      'Partnerships with local leaders and councils',
      'Support for small and micro-enterprises',
    ],
  },
  {
    icon: Leaf,
    title: 'Environmental Stewardship',
    color: 'bg-green-50',
    accent: 'text-green-600',
    border: 'border-green-100',
    description:
      'Gajet Resources is committed to minimising our environmental footprint across all operations — from mining to logistics. We apply responsible practices that protect land, water, and biodiversity.',
    points: [
      'Environmental impact assessments for all projects',
      'Land reclamation after mining activities',
      'Waste reduction and responsible disposal',
      'Compliance with Ghana EPA standards',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Education & Skills',
    color: 'bg-amber-50',
    accent: 'text-amber-600',
    border: 'border-amber-100',
    description:
      'We believe education is the foundation of sustainable development. Gajet Resources supports academic scholarships, vocational training programmes, and skills development initiatives in our operating regions.',
    points: [
      'Scholarship programmes for brilliant students',
      'Vocational and technical training support',
      'Apprenticeship and internship opportunities',
      'STEM education partnerships',
    ],
  },
  {
    icon: HeartHandshake,
    title: 'Local Supplier Support',
    color: 'bg-purple-50',
    accent: 'text-purple-600',
    border: 'border-purple-100',
    description:
      'We intentionally source goods and services from local suppliers and contractors, building a robust local supply chain that strengthens Ghana\'s broader economy and keeps wealth circulating in communities.',
    points: [
      'Prioritising Ghanaian-owned businesses',
      'Vendor development and capacity building',
      'Fair payment terms for local suppliers',
      'Procurement transparency and fairness',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Health & Safety',
    color: 'bg-red-50',
    accent: 'text-red-600',
    border: 'border-red-100',
    description:
      'The health and safety of our employees, contractors, and the communities around us is non-negotiable. We maintain rigorous HSE standards across all our operations and share health resources with host communities.',
    points: [
      'Strict occupational health and safety standards',
      'Community health awareness campaigns',
      'First-aid and emergency response training',
      'Regular HSE audits and reporting',
    ],
  },
  {
    icon: Building2,
    title: 'Infrastructure & Public Goods',
    color: 'bg-teal-50',
    accent: 'text-teal-600',
    border: 'border-teal-100',
    description:
      'Beyond our commercial mandates, we contribute to public infrastructure — from roads and drainage to public facilities — that serve entire communities long after a project is complete.',
    points: [
      'Road and access infrastructure in rural areas',
      'Public facility upgrades and maintenance',
      'Water and sanitation support projects',
      'Long-term community legacy planning',
    ],
  },
];

const commitments = [
  'We operate with transparency and accountability in all our CSR activities.',
  'We engage communities before, during, and after every project.',
  'We measure and report our social and environmental impact regularly.',
  'We align our CSR initiatives with the UN Sustainable Development Goals.',
];

export default function CSR() {
  return (
    <main className="pt-20">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-navy-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: `repeating-linear-gradient(45deg,transparent,transparent 40px,rgba(245,158,11,0.3) 40px,rgba(245,158,11,0.3) 41px)` }}
        />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
            <div className="h-px w-10 bg-gold-400 animate-draw-line" />
            <span className="text-gold-400 font-semibold text-sm tracking-widest uppercase">Giving Back</span>
            <div className="h-px w-10 bg-gold-400 animate-draw-line" />
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl text-white mb-5 animate-slide-up" style={{ animationDelay: '200ms' }}>
            Corporate Social Responsibility
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '350ms' }}>
            At Gajet Resources, our success is measured not only by business performance, but by the positive
            and lasting impact we create for people, communities, and the environment.
          </p>
        </div>
      </section>

      {/* ── COMMITMENT STATEMENT ─────────────────────────────────── */}
      <section className="py-16 bg-gold-500">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="font-display font-bold text-2xl text-navy-900 mb-2">Our CSR Commitment</h2>
              <p className="text-navy-800 leading-relaxed">
                We believe that responsible business is the only sustainable business. Our CSR framework
                guides how we operate, invest in communities, and protect the environment across all our
                areas of operation in Ghana and beyond.
              </p>
            </div>
            <ul className="space-y-3">
              {commitments.map(c => (
                <li key={c} className="flex items-start gap-2.5 text-sm text-navy-800">
                  <CheckCircle2 size={16} className="text-navy-900 mt-0.5 shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── PILLARS ──────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="CSR Pillars"
            title="Our Areas of Focus"
            subtitle="Six interconnected pillars guide how we embed social responsibility into every aspect of our operations."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {pillars.map(({ icon: Icon, title, color, accent, border, description, points }, i) => (
              <Animate key={title} variant="up" delay={`${(i % 3) * 100}ms`}>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 h-full flex flex-col hover-lift">
                  <div className={`w-12 h-12 rounded-xl ${color} ${border} border flex items-center justify-center mb-5`}>
                    <Icon size={22} className={accent} />
                  </div>
                  <h3 className="font-display font-bold text-lg text-navy-900 mb-3">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{description}</p>
                  <ul className="space-y-2 mt-auto">
                    {points.map(p => (
                      <li key={p} className="flex items-start gap-2 text-xs text-gray-600">
                        <CheckCircle2 size={13} className="text-gold-500 mt-0.5 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>
      
      {/* ── CONTACT CTA ──────────────────────────────────────────── */}
      <section className="py-16 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: `repeating-linear-gradient(-45deg,transparent,transparent 40px,rgba(245,158,11,0.3) 40px,rgba(245,158,11,0.3) 41px)` }}
        />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl text-white mb-4">
            Partner With Us on CSR Initiatives
          </h2>
          <p className="text-white/60 mb-8 text-base max-w-xl mx-auto">
            Are you an NGO, community organisation, or government agency looking to partner on
            impactful social or environmental programmes? We&apos;d love to connect.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold px-8 py-3.5 rounded-lg transition-colors duration-200"
          >
            Get In Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </main>
  );
}
