import React, { useState, useEffect } from 'react';
import { Wrench, Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { APP_CONFIG } from '../../config/appConfig';

interface NavbarProps {
  onOpenDemo?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Features', href: '#features' },
    { label: 'Live Tracking', href: '#live-tracking' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Technology', href: '#technology' },
    { label: 'Roadmap', href: '#roadmap' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/30'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single element brand wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-slate-100 group transition-transform active:scale-95"
            aria-label="RoadSideFix Home"
          >
            <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:bg-blue-500 transition-colors">
              <Wrench className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              RoadSide<span className="text-blue-400">Fix</span>
            </span>
          </a>

          {/* Zone 2: Clean 4-6 text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-blue-400 transition-colors relative py-1 text-slate-300 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary action button & mobile trigger */}
          <div className="flex items-center gap-3">
            <a
              href="#interactive-demo"
              onClick={onOpenDemo}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold tracking-wide text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-all shadow-md shadow-blue-600/20 active:scale-95 whitespace-nowrap"
            >
              <span>Explore Platform</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 pb-6 px-4 bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-2xl shadow-2xl animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-medium text-slate-200 hover:text-blue-400 hover:bg-slate-800/60 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
                <a
                  href="#interactive-demo"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDemo?.();
                  }}
                  className="w-full text-center px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md transition-colors"
                >
                  Launch Live Simulator
                </a>
                {APP_CONFIG.githubUrl && (
                  <a
                    href={APP_CONFIG.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full text-center px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                  >
                    View Source on GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
