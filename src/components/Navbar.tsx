import React, { useState } from 'react';
import { ShieldCheck, Calendar, Menu, X, ArrowRight, ExternalLink } from 'lucide-react';

interface NavbarProps {
  onOpenEvaluation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEvaluation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-registrar-ink-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Seal & Title */}
          <a href="#" className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-registrar-blue rounded-md">
            <div className="w-11 h-11 rounded-full bg-registrar-blue text-white flex items-center justify-center font-bold text-sm tracking-wider shadow-seal group-hover:bg-registrar-blue-dark transition-colors border-2 border-white">
              <span className="font-mono text-xs">JSA</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-lg tracking-tight text-registrar-ink flex items-center gap-1.5">
                Jum Study Abroad
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-registrar-green-light text-registrar-green-badge border border-registrar-green/20">
                  <ShieldCheck className="w-3 h-3 mr-0.5 inline" /> Verified
                </span>
              </span>
              <span className="text-xs text-registrar-ink-muted tracking-normal font-sans">
                Chittagong Hill Tracts & European Admissions Hub
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-registrar-ink-muted" aria-label="Main Navigation">
            <a 
              href="#destinations" 
              className="hover:text-registrar-blue transition-colors focus-visible:text-registrar-blue"
            >
              Destinations
            </a>
            <a 
              href="#guarantee" 
              className="hover:text-registrar-blue transition-colors focus-visible:text-registrar-blue"
            >
              Zero-Scam Guarantee
            </a>
            <a 
              href="#alumni" 
              className="hover:text-registrar-blue transition-colors focus-visible:text-registrar-blue"
            >
              Verified Alumni
            </a>
            <a 
              href="#evaluator" 
              className="hover:text-registrar-blue transition-colors focus-visible:text-registrar-blue text-registrar-blue font-semibold"
            >
              Eligibility Check
            </a>
            <a 
              href="#faq" 
              className="hover:text-registrar-blue transition-colors focus-visible:text-registrar-blue"
            >
              FAQ
            </a>
          </nav>

          {/* CTA Group */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenEvaluation}
              type="button"
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-semibold bg-registrar-blue text-white hover:bg-registrar-blue-dark transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-registrar-blue active:scale-[0.98]"
            >
              Check Free Eligibility
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </button>
            <a
              href="https://wa.me/880199999789?text=Hello%20Jum%20Study%20Abroad,%20I%20would%20like%20to%20book%20a%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-3.5 py-2.5 rounded-lg text-sm font-medium border border-registrar-ink-border bg-white text-registrar-ink hover:bg-registrar-cream-paper hover:border-registrar-ink-borderDossier transition-all"
            >
              <Calendar className="w-4 h-4 mr-1.5 text-registrar-green" />
              Book Advisor
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-md text-registrar-ink-muted hover:text-registrar-ink hover:bg-registrar-cream-paper focus-visible:ring-2 focus-visible:ring-registrar-blue"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-registrar-ink-border bg-white px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-3 text-base font-medium text-registrar-ink">
            <a 
              href="#destinations" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-registrar-cream"
            >
              Destinations & Tuition
            </a>
            <a 
              href="#guarantee" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-registrar-cream"
            >
              Zero-Scam Guarantee
            </a>
            <a 
              href="#alumni" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-registrar-cream"
            >
              Verified Alumni Case Studies
            </a>
            <a 
              href="#evaluator" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md bg-registrar-blue-subtle text-registrar-blue font-semibold"
            >
              Free Profile Evaluation
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-registrar-cream"
            >
              Frequently Asked Questions
            </a>
          </div>
          <div className="pt-3 border-t border-registrar-ink-border flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEvaluation();
              }}
              type="button"
              className="w-full flex items-center justify-center px-4 py-3 rounded-lg text-sm font-semibold bg-registrar-blue text-white hover:bg-registrar-blue-dark"
            >
              Check Free Eligibility
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </button>
            <a
              href="https://wa.me/880199999789"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center px-4 py-3 rounded-lg text-sm font-medium border border-registrar-ink-border text-registrar-ink bg-registrar-cream"
            >
              Direct WhatsApp (+880 199999789)
              <ExternalLink className="w-4 h-4 ml-1.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
