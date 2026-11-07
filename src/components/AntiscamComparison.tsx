import React from 'react';
import { comparisonData } from '../data/comparison';
import { AlertTriangle, CheckCircle2, ShieldAlert, Award } from 'lucide-react';

export const AntiscamComparison: React.FC = () => {
  return (
    <section id="guarantee" className="py-16 sm:py-20 bg-registrar-cream border-b border-registrar-ink-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-display font-semibold text-registrar-ink tracking-tight mb-4">
            The Zero-Scam Guarantee: how we eliminate predatory consultancy tricks.
          </h2>
          <p className="text-base text-registrar-ink-muted leading-relaxed font-sans">
            Many study-abroad agencies in Dhaka charge huge non-refundable deposits and push students into private diploma mills. Here is the strict difference between standard agency practice and Jum’s ethical registrar standard.
          </p>
        </div>

        {/* Comparison Ledger */}
        <div className="bg-white rounded-xl border border-registrar-ink-border shadow-sm overflow-hidden">
          
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 bg-registrar-cream-paper border-b border-registrar-ink-border text-xs font-mono font-semibold uppercase tracking-wider text-registrar-ink">
            <div className="p-4 md:col-span-3">Process Aspect</div>
            <div className="p-4 md:col-span-4 text-red-700 bg-red-50/50 flex items-center gap-1.5 border-t md:border-t-0 md:border-l border-registrar-ink-border">
              <ShieldAlert className="w-4 h-4 text-red-600" />
              Standard Commercial Agency Trap
            </div>
            <div className="p-4 md:col-span-5 text-registrar-green-dark bg-registrar-green-light/40 flex items-center gap-1.5 border-t md:border-t-0 md:border-l border-registrar-ink-border">
              <Award className="w-4 h-4 text-registrar-green-badge" />
              Jum Study Abroad Registrar Standard
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-registrar-ink-border">
            {comparisonData.map((row, index) => (
              <div 
                key={index} 
                className="grid grid-cols-1 md:grid-cols-12 text-sm hover:bg-registrar-cream/40 transition-colors"
              >
                {/* Column 1: Process Aspect */}
                <div className="p-4 md:col-span-3 font-semibold text-registrar-ink flex items-center bg-white">
                  {row.aspect}
                </div>

                {/* Column 2: Predatory Agency */}
                <div className="p-4 md:col-span-4 text-registrar-ink-muted bg-red-50/20 md:border-l border-registrar-ink-border flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm leading-relaxed">{row.predatoryAgencies}</span>
                </div>

                {/* Column 3: Jum Guarantee */}
                <div className="p-4 md:col-span-5 text-registrar-ink bg-registrar-green-light/10 md:border-l border-registrar-ink-border flex items-start justify-between gap-3">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-registrar-green shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm leading-relaxed font-medium">{row.jumGuarantee}</span>
                  </div>
                  <span className="shrink-0 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-registrar-green-light text-registrar-green-badge border border-registrar-green/20">
                    {row.verificationBadge}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
