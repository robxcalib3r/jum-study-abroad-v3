import React, { useState } from 'react';
import { ArrowRight, Calendar, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenEvaluation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEvaluation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Verified Alumni', href: '#alumni' },
    { label: 'Destinations', href: '#destinations' },
    { label: 'Why JSA', href: '#why-us' },
    { label: 'Eligibility Check', href: '#eligibility', isHighlight: true },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#FBF9F5]/95 border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Seal & Title */}
          <a href="#" className="flex items-center gap-3 rounded-md group">
            <div className="w-11 h-11 rounded-full bg-[#1A56DB] text-white flex items-center justify-center font-bold text-xs font-mono tracking-wider shadow-[0_2px_8px_rgba(13,83,50,0.15)] border-[1.6px] border-white shrink-0 group-hover:scale-105 transition-transform">
              JSA
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-semibold text-lg tracking-[-0.45px] text-[#1E293B]">
                Jum Study Abroad
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 font-sans font-medium text-sm text-[#475569]" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                className={
                  link.isHighlight
                    ? "text-[#1A56DB] font-semibold hover:text-[#1546B0] transition-colors"
                    : "hover:text-[#1E293B] transition-colors"
                }
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Group */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenEvaluation}
              type="button"
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-semibold bg-[#1A56DB] text-white hover:bg-[#1546B0] transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1A56DB] active:scale-[0.98] cursor-pointer"
            >
              <span>Check Free Eligibility</span>
              <ArrowRight className="w-4 h-4 ml-1.5 shrink-0" />
            </button>
            <a
              href="https://wa.me/880199999789?text=Hello%20Jum%20Study%20Abroad,%20I%20would%20like%20to%20book%20an%20advisory%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-3.5 py-2.5 rounded-lg text-sm font-medium border border-[#E2E8F0] bg-white text-[#1E293B] hover:bg-slate-50 transition-all cursor-pointer shadow-xs"
            >
              <Calendar className="w-4 h-4 mr-1.5 text-[#0D5332] shrink-0" />
              <span>Book Advisor</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-md text-[#475569] hover:text-[#1E293B] hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-[#1A56DB]"
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
        <div className="lg:hidden border-b border-[#E2E8F0] bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2.5 font-sans font-medium text-sm text-[#475569]">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-1.5 px-2 rounded-md hover:bg-slate-50 ${
                  link.isHighlight ? 'text-[#1A56DB] font-semibold' : 'hover:text-[#1E293B]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="pt-3 border-t border-[#E2E8F0] flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEvaluation();
              }}
              type="button"
              className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-semibold bg-[#1A56DB] text-white hover:bg-[#1546B0] transition-all"
            >
              Check Free Eligibility
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </button>
            <a
              href="https://wa.me/880199999789?text=Hello%20Jum%20Study%20Abroad,%20I%20would%20like%20to%20book%20an%20advisory%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-medium border border-[#E2E8F0] bg-white text-[#1E293B] hover:bg-slate-50 transition-all text-center"
            >
              <Calendar className="w-4 h-4 mr-1.5 text-[#0D5332]" />
              Book Advisor (WhatsApp)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
