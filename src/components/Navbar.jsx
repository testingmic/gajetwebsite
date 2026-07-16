import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import EagleLogo from './EagleLogo';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services', matchPrefix: '/services' },
  { to: '/governance', label: 'Governance' },
  { to: '/csr', label: 'CSR' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-900 shadow-lg py-3' : 'bg-navy-900/95 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-32 h-10 shrink-0">
              <img
                src="/images/logo.jpeg"
                alt="Gajet Resources"
                className="absolute top-0 left-0 w-32 h-24 rounded-xl shadow-xl ring-2 ring-white/20 object-cover"
              />
            </div>
            <div>
              <p className="text-white font-display font-bold text-base leading-tight">
                GAJET RESOURCES
              </p>
              <p className="text-gold-400 text-xs font-medium tracking-widest uppercase">
                International Limited
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => {
              const isActive = link.matchPrefix
                ? location.pathname.startsWith(link.matchPrefix)
                : location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-gold-400 bg-white/10'
                      : 'text-white/80 hover:text-gold-400 hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Link to="/contact" className="btn-primary text-sm py-2 px-5">
              Get In Touch
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden text-white p-2 rounded-md hover:bg-white/10"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-navy-950 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map(link => {
              const isActive = link.matchPrefix
                ? location.pathname.startsWith(link.matchPrefix)
                : location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-gold-400 bg-white/10'
                      : 'text-white/80 hover:text-gold-400 hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="mt-3 btn-primary text-sm justify-center"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
