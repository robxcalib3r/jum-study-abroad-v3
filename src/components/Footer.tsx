import React from 'react';
import { Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="pt-16 pb-12 bg-[#1E293B] border-t-4 border-t-[#1A56DB] text-white">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 pb-12 gap-10 border-b border-[#334155]/80">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="items-center flex gap-3">
              <div className="items-center flex justify-center rounded-full shrink-0 bg-[#1A56DB] border border-[#60A5FA] w-10 h-10">
                <span className="tracking-[0.7px] font-mono font-bold text-white text-sm">
                  JSA
                </span>
              </div>
              <span className="tracking-tight font-sans font-semibold text-white text-xl">
                Jum Study Abroad
              </span>
            </div>

            <p className="text-sm leading-relaxed max-w-sm font-sans text-[#CBD5E1]">
              Rooted in the Chittagong Hill Tracts, dedicated to transparency across Bangladesh. Guiding students into accredited, low-cost European public universities with verified admissions and zero predatory fees.
            </p>

            <div className="items-center inline-flex gap-2 py-1.5 px-3 rounded-md bg-[#1E293B] border border-[#334155]">
              <ShieldCheck className="w-4 h-4 text-[#34D399] shrink-0" />
              <span className="font-mono text-xs text-[#CBD5E1]">
                Certified Ethical Educational Advisory
              </span>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="tracking-[0.6px] uppercase font-mono font-semibold text-[#94A3B8] text-xs">
              Destinations &amp; Tracks
            </h4>
            <ul className="space-y-2 font-sans text-sm text-[#CBD5E1]">
              <li>
                <a href="#destinations" className="hover:text-white transition-colors">
                  France Public Universities (Campus France)
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-white transition-colors">
                  Germany State Universities (TU9 &amp; DAAD)
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-white transition-colors">
                  Hungary Stipendium Hungaricum
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-white transition-colors">
                  Poland Low-Cost English Tracks
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-white transition-colors">
                  Romania Medical &amp; Technical Degrees
                </a>
              </li>
            </ul>
          </div>

          {/* Coordinates Col */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="tracking-[0.6px] uppercase font-mono font-semibold text-[#94A3B8] text-xs">
              Dhaka Advisory Office &amp; Coordinates
            </h4>
            <div className="space-y-2.5 font-sans text-sm text-[#CBD5E1]">
              <div className="items-start flex gap-2.5">
                <MapPin className="w-4 h-4 text-[#34D399] shrink-0 mt-0.5" />
                <span>House 42, Road 11, Banani / Gulshan Hub, Dhaka-1213, Bangladesh</span>
              </div>
              <div className="items-center flex gap-2.5">
                <Mail className="w-4 h-4 text-[#34D399] shrink-0" />
                <a href="mailto:admissions@jumstudyabroad.com" className="hover:text-white transition-colors">
                  admissions@jumstudyabroad.com
                </a>
              </div>
              <div className="items-center flex gap-2.5">
                <Phone className="w-4 h-4 text-[#34D399] shrink-0" />
                <a href="tel:+880199999789" className="font-mono hover:text-white transition-colors">
                  +880 199999789 (Direct &amp; WhatsApp)
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Legal bottom strip */}
        <div className="items-center flex flex-col sm:flex-row justify-between pt-8 gap-4 font-sans text-xs text-[#94A3B8]">
          <span>
            © 2026 Jum Study Abroad. All rights reserved. Registered Educational Advisory in Bangladesh.
          </span>
          <div className="items-center flex flex-wrap gap-3">
            <a href="#guarantee" className="hover:text-white transition-colors">Radical Transparency Charter</a>
            <span className="text-[#475569]">•</span>
            <a href="#faq" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="text-[#475569]">•</span>
            <a href="#guarantee" className="hover:text-white transition-colors">Zero Embassy Bribery Compliance</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
