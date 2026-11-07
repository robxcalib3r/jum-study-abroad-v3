import React from 'react';
import { comparisonData } from '../data/comparison';
import { AlertTriangle, CheckCircle2, ShieldAlert, Award } from 'lucide-react';

export const AntiscamComparison: React.FC = () => {
  return (
    <section id="guarantee" className="py-20 bg-[#FBF9F5] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-display font-semibold text-[#1E293B] tracking-[-0.75px] mb-4">
            The Zero-Scam Guarantee: how we eliminate predatory consultancy tricks.
          </h2>
          <p className="text-base text-[#475569] leading-[162.5%] font-sans">
            Many study-abroad agencies in Dhaka charge huge non-refundable deposits and push students into private diploma mills. Here is the strict difference between standard agency practice and Jum’s ethical registrar standard.
          </p>
        </div>

        {/* Comparison Ledger Container */}
        <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-[0_1px_2px_rgba(0,0,0,0.05)] overflow-hidden">
          
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 bg-[#F5F0E6] border-b border-[#E2E8F0]">
            <div className="p-4 md:col-span-3">
              <span className="font-mono text-xs font-semibold text-[#1E293B] uppercase tracking-[0.6px]">
                Process Aspect
              </span>
            </div>
            <div className="p-4 md:col-span-4 bg-[#FEF2F280] md:border-l border-[#E2E8F0] flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-[#DC2626] shrink-0" />
              <span className="font-mono text-xs font-semibold text-[#B91C1C] uppercase tracking-[0.6px]">
                Standard Commercial Agency Trap
              </span>
            </div>
            <div className="p-4 md:col-span-5 bg-[#EAF7EE66] md:border-l border-[#E2E8F0] flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#137343] shrink-0" />
              <span className="font-mono text-xs font-semibold text-[#083B23] uppercase tracking-[0.6px]">
                Jum Study Abroad
              </span>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-[#E2E8F0]">
            {comparisonData.map((row, index) => (
              <div 
                key={index} 
                className="grid grid-cols-1 md:grid-cols-12 text-sm hover:bg-[#FBF9F5]/60 transition-colors"
              >
                {/* Column 1: Process Aspect */}
                <div className="p-4 md:col-span-3 font-semibold text-[#1E293B] flex items-center bg-white font-sans text-sm">
                  {row.aspect}
                </div>

                {/* Column 2: Predatory Agency */}
                <div className="p-4 md:col-span-4 text-[#475569] bg-[#FEF2F233] md:border-l border-[#E2E8F0] flex items-start gap-2.5 font-sans">
                  <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm leading-relaxed">{row.predatoryAgencies}</span>
                </div>

                {/* Column 3: Jum Guarantee */}
                <div className="p-4 md:col-span-5 text-[#1E293B] bg-[#EAF7EE1A] md:border-l border-[#E2E8F0] flex items-start justify-between gap-3 font-sans">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0D5332] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm leading-relaxed font-medium">{row.jumGuarantee}</span>
                  </div>
                  <span className="shrink-0 px-2 py-0.5 rounded-sm text-[10px] font-mono font-medium bg-[#EAF7EE] text-[#137343] border border-[#0D533233] whitespace-nowrap">
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
