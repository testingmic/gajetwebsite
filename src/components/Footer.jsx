import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import EagleLogo from './EagleLogo';

const socialLinks = [];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <img src="/images/logo.jpeg" alt="Gajet Resources" className="w-12 h-12 rounded-lg" />
              <div>
                <p className="text-white font-display font-bold text-base leading-tight">
                  GAJET RESOURCES
                </p>
                <p className="text-gold-400 text-xs font-medium tracking-widest uppercase">
                  International Limited
                </p>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Inspiring the world through excellence, integrity, and leadership. A diversified multi-sector enterprise delivering world-class solutions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold-500 flex items-center justify-center transition-colors duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-base">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/services', label: 'Our Services' },
                { to: '/governance', label: 'Governance & HSE' },
                { to: '/csr', label: 'CSR' },
                { to: '/contact', label: 'Contact Us' },
              ].map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/60 hover:text-gold-400 text-sm flex items-center gap-2 transition-colors duration-200"
                  >
                    <ArrowRight size={14} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-base">Our Services</h4>
            <ul className="space-y-3">
              {[
                { to: '/services/construction', label: 'Building & Roads Construction' },
                { to: '/services/mining',        label: 'Mining Services' },
                { to: '/services/logistics',     label: 'Logistics Services' },
                { to: '/services/trading',       label: 'Commodities Trading' },
              ].map(({ to, label }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-white/60 hover:text-gold-400 text-sm flex items-center gap-2 transition-colors duration-200"
                  >
                    <ArrowRight size={14} />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-base">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-white/60">
                <MapPin size={16} className="text-gold-400 mt-0.5 shrink-0" />
                <span>Gajet Resources International Limited, P. O. BOX GP O20376, Accra, Ghana</span>
              </li>
              <li className="flex gap-3 text-sm text-white/60">
                <Phone size={16} className="text-gold-400 mt-0.5 shrink-0" />
                <span>+233 (0) 555 782 575</span>
              </li>
              <li className="flex gap-3 text-sm text-white/60">
                <Mail size={16} className="text-gold-400 mt-0.5 shrink-0" />
                <span>info@gajetresources.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} Gajet Resources International Limited. All rights reserved.
          </p>
          <p className="text-white/40 text-sm italic text-center">
            &quot;Inspiring the world through excellence, integrity, and leadership&quot;
          </p>
        </div>
      </div>
    </footer>
  );
}
