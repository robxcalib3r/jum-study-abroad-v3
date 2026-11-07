import React, { useState } from 'react';
import { destinationsData } from '../data/destinations';
import { ArrowUpRight, Check, Clock, Euro, Wallet, FileCheck } from 'lucide-react';

interface DestinationsShowcaseProps {
  onSelectCountryForEvaluation: (countryId: string) => void;
}

export const DestinationsShowcase: React.FC<DestinationsShowcaseProps> = ({ onSelectCountryForEvaluation }) => {
  const [filter, setFilter] = useState<'All' | 'Tuition-Free' | 'Low-Tuition' | 'Full Scholarship'>('All');

  const filteredDestinations = destinationsData.filter(d => {
    if (filter === 'All') return true;
    return d.tuitionStatus === filter;
  });

  return (
    <section id="destinations" className="py-20 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-[#1E293B] tracking-[-0.75px] mb-4">
              Curated European destinations with verified public tuition rates.
            </h2>
            <p className="text-base text-[#475569] leading-[162.5%] font-sans">
              Compare actual state university fee frameworks, mandatory blocked account requirements, and realistic monthly student living costs. No hidden agency inflation.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F5F0E6] rounded-lg border border-[#E2E8F0]">
            {(['All', 'Tuition-Free', 'Low-Tuition', 'Full Scholarship'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                type="button"
                className={`px-3 py-1.5 rounded-md text-xs transition-all ${
                  filter === tab 
                    ? 'bg-[#1A56DB] text-white shadow-xs font-semibold' 
                    : 'text-[#475569] font-medium hover:text-[#1E293B] hover:bg-white/60'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDestinations.map((dest) => (
            <div 
              key={dest.id}
              className="bg-[#FBF9F5] rounded-xl border border-[#E2E8F0] overflow-hidden hover:border-[#CBD5E1] transition-all flex flex-col justify-between shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
            >
              <div>
                {/* Destination Card Header */}
                <div className="p-5 border-b border-[#E2E8F0] bg-white flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl" role="img" aria-label={dest.country}>{dest.flag}</span>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-lg font-semibold text-[#1E293B] font-sans">
                          {dest.country}
                        </span>
                        <span className="font-mono text-xs font-semibold text-[#475569]">
                          ({dest.countryCode})
                        </span>
                      </div>
                      <span className={`inline-block px-2 py-0.5 rounded-sm text-[10px] font-mono font-medium ${
                        dest.tuitionStatus === 'Tuition-Free'
                          ? 'bg-[#D1FAE5] text-[#065F46] border border-[#6EE7B7]'
                          : dest.tuitionStatus === 'Full Scholarship'
                          ? 'bg-[#FEF3C7] text-[#92400E] border border-[#FCD34D]'
                          : 'bg-[#DBEAFE] text-[#1E40AF] border border-[#93C5FD]'
                      }`}>
                        {dest.tuitionStatus}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-mono font-semibold text-[#083B23] bg-[#EAF7EE] px-2 py-1 rounded-sm border border-[#0D533233]">
                    {dest.visaSuccessRate} Visa Rate
                  </span>
                </div>

                {/* Core Facts Ledger */}
                <div className="p-5 space-y-4">
                  <p className="text-xs text-[#475569] font-sans line-clamp-2">
                    {dest.headline}
                  </p>

                  <div className="bg-white rounded-lg p-3 border border-[#E2E8F0] space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[#475569] flex items-center gap-1 font-sans">
                        <Euro className="w-3.5 h-3.5 text-[#1A56DB] shrink-0" /> Average Tuition
                      </span>
                      <span className="font-mono font-semibold text-[#1E293B] text-right">{dest.averageTuition}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-[#475569] flex items-center gap-1 font-sans">
                        <Wallet className="w-3.5 h-3.5 text-[#94A3B8] shrink-0" /> Living Expenses
                      </span>
                      <span className="font-mono text-[#1E293B] text-right">{dest.livingCostMonthly}</span>
                    </div>

                    <div className="flex items-center justify-between pt-1 border-t border-[#E2E8F099]">
                      <span className="text-[#475569] flex items-center gap-1 font-sans">
                        <FileCheck className="w-3.5 h-3.5 text-[#0D5332] shrink-0" /> Financial Proof
                      </span>
                      <span className="font-mono text-[#1E293B] font-medium truncate max-w-[170px] text-right">
                        {dest.blockedAccountReq}
                      </span>
                    </div>
                  </div>

                  {/* Top Public Universities List */}
                  <div>
                    <div className="text-xs font-semibold text-[#1E293B] mb-1.5 flex items-center gap-1 font-sans">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1A56DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10 18v-7" />
                        <path d="M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z" />
                        <path d="M14 18v-7" />
                        <path d="M18 18v-7" />
                        <path d="M3 22h18" />
                        <path d="M6 18v-7" />
                      </svg>
                      Target Public Universities
                    </div>
                    <ul className="text-xs text-[#475569] space-y-1 font-sans">
                      {dest.topPublicUniversities.map((uni, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <Check className="w-3 h-3 text-[#0D5332] shrink-0" />
                          <span className="truncate">{uni}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* High Contrast Intake Deadline Flag */}
                  <div className="bg-[#F5F0E6] p-2.5 rounded-sm border border-[#E2E8F0] flex items-center gap-2 text-xs font-mono text-[#1E293B]">
                    <Clock className="w-3.5 h-3.5 text-[#D97706] shrink-0" />
                    <span className="truncate">{dest.intakeDeadlines}</span>
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => onSelectCountryForEvaluation(dest.id)}
                  type="button"
                  className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-semibold bg-white border border-[#E2E8F0] text-[#1E293B] hover:bg-[#1A56DB] hover:text-white hover:border-[#1A56DB] transition-colors group"
                >
                  Evaluate Eligibility for {dest.country}
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#475569] group-hover:text-white transition-colors shrink-0" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
