import React from 'react';
import { Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1E293B] text-white pt-16 pb-12 border-t-4 border-[#1A56DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tier: Brand, Destinations & Coordinates */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#334155CC]">
          
          {/* Brand & Mission Statement */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1A56DB] text-white flex items-center justify-center font-bold text-sm tracking-wider font-mono border border-[#60A5FA] shrink-0">
                JSA
              </div>
              <span className="font-semibold text-xl tracking-tight text-white font-sans">
                Jum Study Abroad
              </span>
            </div>
            
            <p className="text-sm text-[#CBD5E1] leading-[162.5%] font-sans max-w-sm">
              Rooted in the Chittagong Hill Tracts, dedicated to transparency across Bangladesh. Guiding students into accredited, low-cost European public universities with verified admissions and zero predatory fees.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#1E293B] border border-[#334155] text-xs text-[#CBD5E1] font-sans">
              <ShieldCheck className="w-4 h-4 text-[#34D399] shrink-0" />
              <span>Certified Ethical Educational Advisory</span>
            </div>
          </div>

          {/* Quick Advisory Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="block font-mono text-xs uppercase tracking-[0.6px] text-[#94A3B8] font-semibold">
              Destinations &amp; Tracks
            </span>
            <ul className="space-y-2 text-sm text-[#CBD5E1] font-sans">
              <li><a href="#destinations" className="hover:text-white transition-colors">France Public Universities (Campus France)</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">Germany State Universities (TU9 &amp; DAAD)</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">Hungary Stipendium Hungaricum</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">Poland Low-Cost English Tracks</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">Romania Medical &amp; Technical Degrees</a></li>
            </ul>
          </div>

          {/* Contact Coordinates */}
          <div className="md:col-span-4 space-y-3">
            <span className="block font-mono text-xs uppercase tracking-[0.6px] text-[#94A3B8] font-semibold">
              Dhaka Advisory Office &amp; Coordinates
            </span>
            <div className="space-y-2.5 text-sm text-[#CBD5E1] font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#34D399] shrink-0 mt-0.5" />
                <span>House 42, Road 11, Banani / Gulshan Hub, Dhaka-1213, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#34D399] shrink-0" />
                <a href="mailto:admissions@jumstudyabroad.com" className="hover:text-white transition-colors">
                  admissions@jumstudyabroad.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#34D399] shrink-0" />
                <a href="tel:+880199999789" className="hover:text-white transition-colors font-mono">
                  +880 199999789 (Direct &amp; WhatsApp)
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Tier: Legal Disclaimers & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8] font-sans">
          <p className="text-center md:text-left">
            © 2026 Jum Study Abroad. All rights reserved. Registered Educational Advisory in Bangladesh.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-[#94A3B8]">
            <span>Radical Transparency Charter</span>
            <span>•</span>
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Zero Embassy Bribery Compliance</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
