import React, { useState } from 'react';
import { ArrowRight, Calendar, Menu, X, ExternalLink } from 'lucide-react';

interface NavbarProps {
  onOpenEvaluation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEvaluation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Seal & Title */}
          <a href="#" className="flex items-center gap-3 rounded-md focus-visible:ring-2 focus-visible:ring-[#1A56DB]">
            <div className="w-11 h-11 rounded-full bg-[#1A56DB] text-white flex items-center justify-center font-bold text-xs font-mono tracking-wider shadow-[0_2px_8px_rgba(13,83,50,0.15)] border-[1.6px] border-white shrink-0">
              JSA
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-semibold text-lg tracking-[-0.45px] text-[#1E293B]">
                Jum Study Abroad
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-sans font-medium text-sm text-[#475569]" aria-label="Main Navigation">
            <a 
              href="#destinations" 
              className="hover:text-[#1A56DB] transition-colors focus-visible:text-[#1A56DB]"
            >
              Destinations
            </a>
            <a 
              href="#guarantee" 
              className="hover:text-[#1A56DB] transition-colors focus-visible:text-[#1A56DB]"
            >
              Zero-Scam Guarantee
            </a>
            <a 
              href="#alumni" 
              className="hover:text-[#1A56DB] transition-colors focus-visible:text-[#1A56DB]"
            >
              Verified Alumni
            </a>
            <a 
              href="#evaluator" 
              className="hover:text-[#1A56DB] transition-colors focus-visible:text-[#1A56DB] text-[#1A56DB] font-semibold"
            >
              Eligibility Check
            </a>
            <a 
              href="#faq" 
              className="hover:text-[#1A56DB] transition-colors focus-visible:text-[#1A56DB]"
            >
              FAQ
            </a>
          </nav>

          {/* CTA Group */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenEvaluation}
              type="button"
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-semibold bg-[#1A56DB] text-white hover:bg-[#1344AF] transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1A56DB] active:scale-[0.98]"
            >
              Check Free Eligibility
              <ArrowRight className="w-4 h-4 ml-1.5 shrink-0" />
            </button>
            <a
              href="https://wa.me/880199999789?text=Hello%20Jum%20Study%20Abroad,%20I%20would%20like%20to%20book%20a%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-3.5 py-2.5 rounded-lg text-sm font-medium border border-[#E2E8F0] bg-white text-[#1E293B] hover:bg-[#F5F0E6] transition-all"
            >
              <Calendar className="w-4 h-4 mr-1.5 text-[#0D5332] shrink-0" />
              Book Advisor
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-md text-[#475569] hover:text-[#1E293B] hover:bg-[#F5F0E6] focus-visible:ring-2 focus-visible:ring-[#1A56DB]"
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
        <div className="md:hidden border-b border-[#E2E8F0] bg-white px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-3 text-base font-medium text-[#1E293B]">
            <a 
              href="#destinations" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[#FBF9F5]"
            >
              Destinations
            </a>
            <a 
              href="#guarantee" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[#FBF9F5]"
            >
              Zero-Scam Guarantee
            </a>
            <a 
              href="#alumni" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[#FBF9F5]"
            >
              Verified Alumni
            </a>
            <a 
              href="#evaluator" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md bg-[#F0F5FF] text-[#1A56DB] font-semibold"
            >
              Eligibility Check
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[#FBF9F5]"
            >
              FAQ
            </a>
          </div>
          <div className="pt-3 border-t border-[#E2E8F0] flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEvaluation();
              }}
              type="button"
              className="w-full flex items-center justify-center px-4 py-3 rounded-lg text-sm font-semibold bg-[#1A56DB] text-white hover:bg-[#1344AF]"
            >
              Check Free Eligibility
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </button>
            <a
              href="https://wa.me/880199999789"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center px-4 py-3 rounded-lg text-sm font-medium border border-[#E2E8F0] text-[#1E293B] bg-[#FBF9F5]"
            >
              Book Advisor via WhatsApp (+880 199999789)
              <ExternalLink className="w-4 h-4 ml-1.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
