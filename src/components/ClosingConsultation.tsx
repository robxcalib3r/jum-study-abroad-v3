import React from 'react';
import { ArrowRight, MessageSquare, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';

interface ClosingConsultationProps {
  onOpenEvaluation: () => void;
}

export const ClosingConsultation: React.FC<ClosingConsultationProps> = ({ onOpenEvaluation }) => {
  return (
    <section className="py-16 sm:py-20 bg-[#F5F0E6] border-y border-[#CBD5E1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Verification Chip */}
        <div className="items-center inline-flex w-fit py-1 px-3 rounded-full gap-2 bg-[#EAF7EE] border border-[#0D5332]/25 mb-4">
          <ShieldCheck className="w-4 h-4 text-[#0D5332]" />
          <span className="tracking-wider uppercase font-mono font-semibold text-[#083B23] text-xs">
            Free Admissions Evaluation • Autumn 2026 Intake
          </span>
        </div>

        {/* Closing Headline */}
        <h2 className="tracking-tight font-display font-semibold text-[#1E293B] text-2xl sm:text-4xl leading-tight mb-4 max-w-3xl mx-auto">
          Begin your European university admissions process with complete clarity.
        </h2>

        {/* Narrative */}
        <p className="font-sans text-[#475569] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
          No inflated package charges, no deceptive visa guarantees. Connect directly with our European alumni team in Dhaka to evaluate your academic profile, blocked accounts, and scholarship options.
        </p>

        {/* Action Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8">
          <a
            href="https://wa.me/880199999789?text=Hello%20Jum%20Study%20Abroad,%20I%20would%20like%20to%20schedule%20a%20free%20admissions%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center py-3.5 px-6 rounded-lg bg-[#1A56DB] hover:bg-[#1546B0] text-white font-sans font-semibold text-base shadow-sm transition-all cursor-pointer active:scale-[0.98]"
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            <span>Schedule Free Consultation (WhatsApp)</span>
          </a>

          <button
            type="button"
            onClick={onOpenEvaluation}
            className="w-full sm:w-auto inline-flex items-center justify-center py-3.5 px-6 rounded-lg bg-white hover:bg-slate-50 active:scale-[0.98] text-[#1E293B] font-sans font-medium text-base border border-[#CBD5E1] shadow-xs transition-all cursor-pointer"
          >
            <span>Complete Free Eligibility Check</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>

        {/* Institutional Trust Coordinates */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-[#CBD5E1]/70 text-xs font-mono text-[#64748B]">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#0D5332]" />
            <span>Zero Agency Markups</span>
          </div>
          <span className="hidden sm:inline text-[#CBD5E1]">•</span>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-[#1A56DB]" />
            <span>Banani Advisory Hub, Dhaka</span>
          </div>
          <span className="hidden sm:inline text-[#CBD5E1]">•</span>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#0D5332]" />
            <span>Written Ethical Contract</span>
          </div>
        </div>

      </div>
    </section>
  );
};
