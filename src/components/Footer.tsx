import React from 'react';
import { Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-registrar-ink text-white pt-16 pb-12 border-t-4 border-registrar-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tier: Brand & Ethical Charter */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-700/80">
          
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-registrar-blue text-white flex items-center justify-center font-bold text-sm tracking-wider font-mono border border-blue-400">
                JSA
              </div>
              <span className="font-semibold text-xl tracking-tight text-white">
                Jum Study Abroad
              </span>
            </div>
            
            <p className="text-sm text-slate-300 leading-relaxed font-sans max-w-sm">
              Rooted in the Chittagong Hill Tracts, dedicated to transparency across Bangladesh. Guiding students into accredited, low-cost European public universities with verified admissions and zero predatory fees.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-800 border border-slate-700 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Certified Ethical Educational Advisory</span>
            </div>
          </div>

          {/* Quick Advisory Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="block font-mono text-xs uppercase tracking-wider text-slate-400 font-semibold">
              Destinations & Tracks
            </span>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#destinations" className="hover:text-white transition-colors">France Public Universities (Campus France)</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">Germany State Universities (TU9 & DAAD)</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">Hungary Stipendium Hungaricum</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">Poland Low-Cost English Tracks</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">Romania Medical & Technical Degrees</a></li>
            </ul>
          </div>

          {/* Contact Coordinates */}
          <div className="md:col-span-4 space-y-3">
            <span className="block font-mono text-xs uppercase tracking-wider text-slate-400 font-semibold">
              Dhaka Advisory Office & Coordinates
            </span>
            <div className="space-y-2.5 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>House 42, Road 11, Banani / Gulshan Hub, Dhaka-1213, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:admissions@jumstudyabroad.com" className="hover:text-white transition-colors">
                  admissions@jumstudyabroad.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+880199999789" className="hover:text-white transition-colors font-mono">
                  +880 199999789 (Direct & WhatsApp)
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Tier: Legal Disclaimers & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center md:text-left">
            © 2026 Jum Study Abroad. All rights reserved. Registered Educational Advisory in Bangladesh.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
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
