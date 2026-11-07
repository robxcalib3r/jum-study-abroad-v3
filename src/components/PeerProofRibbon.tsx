import React from 'react';
import { testimonialsData } from '../data/testimonials';
import { ShieldCheck, MapPin, Calendar } from 'lucide-react';

export const PeerProofRibbon: React.FC = () => {
  return (
    <section id="alumni" className="py-20 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-display font-semibold text-[#1E293B] tracking-[-0.75px] mb-4">
            Direct alumni proof from Bangladesh and the Chittagong Hill Tracts.
          </h2>
          <p className="text-base text-[#475569] leading-[162.5%] font-sans">
            Every case below represents an authentic student or parent who navigated admissions, blocked accounts, and embassy interviews with zero agency markups. Verified against actual university matriculation records.
          </p>
        </div>

        {/* Alumni Dossier Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonialsData.map((item) => (
            <article 
              key={item.id}
              className="bg-[#FBF9F5] rounded-xl p-6 border border-[#E2E8F0] flex flex-col justify-between shadow-[0_1px_2px_rgba(0,0,0,0.05)] hover:border-[#CBD5E1] transition-all"
            >
              <div>
                {/* Header row: Student identity & verified visa stamp */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-[#1E293B] font-display">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#475569] flex items-center gap-1.5 mt-0.5 font-sans">
                      <MapPin className="w-3.5 h-3.5 text-[#94A3B8] shrink-0" />
                      {item.homeRegion} • <span className="font-medium text-[#083B23]">{item.community}</span>
                    </p>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-sm bg-white border border-[#0D53324D] text-[11px] font-mono text-[#083B23] font-medium leading-[150%]">
                      <ShieldCheck className="w-3 h-3 text-[#0D5332]" />
                      Visa Approved
                    </span>
                    <span className="block text-[10px] font-mono text-[#94A3B8] mt-1 leading-[150%]">
                      {item.visaApprovedDate}
                    </span>
                  </div>
                </div>

                {/* Direct Experience Quote */}
                <p className="text-sm text-[#475569] leading-[162.5%] italic mb-4 font-sans">
                  "{item.quote}"
                </p>

                {/* University & Degree Specs */}
                <div className="bg-white rounded-lg p-3.5 border border-[#E2E8F0CC] space-y-1.5 text-xs font-sans">
                  <div className="flex items-center justify-between">
                    <span className="text-[#475569]">University</span>
                    <span className="font-semibold text-[#1E293B]">
                      {item.university} {item.countryFlag}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#475569]">Program</span>
                    <span className="font-medium text-[#1E293B]">{item.degree}</span>
                  </div>
                  <div className="flex items-center justify-between pt-1 border-t border-[#E2E8F080]">
                    <span className="text-[#475569]">Financial Structure</span>
                    <span className="font-mono text-[#137343] font-semibold">
                      {item.scholarshipOrFee}
                    </span>
                  </div>
                </div>
              </div>

              {/* Dossier Card Footer */}
              <div className="pt-4 mt-5 border-t border-[#E2E8F0B3] flex items-center justify-between text-xs font-mono text-[#94A3B8]">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  Intake: {item.intakeYear}
                </span>
                <span>Ref: {item.dossierNumber}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Proof metrics row */}
        <div className="mt-12 bg-[#F5F0E6] rounded-xl p-6 border border-[#E2E8F0] grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div>
            <span className="block font-mono text-3xl font-bold text-[#1A56DB] mb-1 tabular-nums">97.2%</span>
            <span className="text-xs text-[#1E293B] font-medium font-sans">Embassy Visa Approval Rate</span>
            <span className="block text-[11px] text-[#475569] leading-[150%] font-sans">Across 2023–2025 cohorts</span>
          </div>
          <div>
            <span className="block font-mono text-3xl font-bold text-[#0D5332] mb-1 tabular-nums">1,240+</span>
            <span className="text-xs text-[#1E293B] font-medium font-sans">Students Successfully Advised</span>
            <span className="block text-[11px] text-[#475569] leading-[150%] font-sans">Undergraduate &amp; Graduate</span>
          </div>
          <div>
            <span className="block font-mono text-3xl font-bold text-[#1A56DB] mb-1 tabular-nums">€0</span>
            <span className="text-xs text-[#1E293B] font-medium font-sans">Hidden Markups or Secret Cuts</span>
            <span className="block text-[11px] text-[#475569] leading-[150%] font-sans">Direct institutional billing</span>
          </div>
          <div>
            <span className="block font-mono text-3xl font-bold text-[#D97706] mb-1 tabular-nums">15+</span>
            <span className="text-xs text-[#1E293B] font-medium font-sans">European Countries Covered</span>
            <span className="block text-[11px] text-[#475569] leading-[150%] font-sans">Focus on public universities</span>
          </div>
        </div>

      </div>
    </section>
  );
};
