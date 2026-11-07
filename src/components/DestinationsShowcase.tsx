import React, { useState } from 'react';
import { destinationsData } from '../data/destinations';
import { Landmark, ArrowUpRight, Check, Clock, Euro, Wallet, FileCheck } from 'lucide-react';

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
    <section id="destinations" className="py-16 sm:py-20 bg-white border-b border-registrar-ink-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-registrar-ink tracking-tight mb-4">
              Curated European destinations with verified public tuition rates.
            </h2>
            <p className="text-base text-registrar-ink-muted leading-relaxed font-sans">
              Compare actual state university fee frameworks, mandatory blocked account requirements, and realistic monthly student living costs. No hidden agency inflation.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-registrar-cream-paper rounded-lg border border-registrar-ink-border">
            {(['All', 'Tuition-Free', 'Low-Tuition', 'Full Scholarship'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                type="button"
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  filter === tab 
                    ? 'bg-registrar-blue text-white shadow-xs font-semibold' 
                    : 'text-registrar-ink-muted hover:text-registrar-ink hover:bg-white/60'
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
              className="bg-registrar-cream rounded-xl border border-registrar-ink-border overflow-hidden hover:border-registrar-ink-borderDossier transition-all flex flex-col justify-between shadow-xs"
            >
              <div>
                {/* Destination Card Header */}
                <div className="p-5 border-b border-registrar-ink-border bg-white flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl" role="img" aria-label={dest.country}>{dest.flag}</span>
                    <div>
                      <h3 className="text-lg font-semibold text-registrar-ink flex items-center gap-1.5">
                        {dest.country}
                        <span className="font-mono text-xs text-registrar-ink-muted">({dest.countryCode})</span>
                      </h3>
                      <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-mono font-medium ${
                        dest.tuitionStatus === 'Tuition-Free'
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                          : dest.tuitionStatus === 'Full Scholarship'
                          ? 'bg-amber-100 text-amber-800 border border-amber-300'
                          : 'bg-blue-100 text-blue-800 border border-blue-300'
                      }`}>
                        {dest.tuitionStatus}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-mono font-semibold text-registrar-green-dark bg-registrar-green-light px-2 py-1 rounded border border-registrar-green/20">
                    {dest.visaSuccessRate} Visa Rate
                  </span>
                </div>

                {/* Core Facts Ledger (incorporating tabular monospace precision) */}
                <div className="p-5 space-y-4">
                  <p className="text-xs text-registrar-ink-muted font-sans line-clamp-2">
                    {dest.headline}
                  </p>

                  <div className="bg-white rounded-lg p-3 border border-registrar-ink-border space-y-2 text-xs font-mono">
                    <div className="flex items-center justify-between">
                      <span className="text-registrar-ink-muted flex items-center gap-1 font-sans">
                        <Euro className="w-3.5 h-3.5 text-registrar-blue" /> Average Tuition
                      </span>
                      <span className="font-semibold text-registrar-ink">{dest.averageTuition}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-registrar-ink-muted flex items-center gap-1 font-sans">
                        <Wallet className="w-3.5 h-3.5 text-registrar-ink-faint" /> Living Expenses
                      </span>
                      <span className="text-registrar-ink">{dest.livingCostMonthly}</span>
                    </div>

                    <div className="flex items-center justify-between pt-1 border-t border-registrar-ink-border/60">
                      <span className="text-registrar-ink-muted flex items-center gap-1 font-sans">
                        <FileCheck className="w-3.5 h-3.5 text-registrar-green" /> Financial Proof
                      </span>
                      <span className="text-registrar-ink font-medium truncate max-w-[170px] text-right">
                        {dest.blockedAccountReq}
                      </span>
                    </div>
                  </div>

                  {/* Top Public Universities List */}
                  <div>
                    <span className="text-xs font-semibold text-registrar-ink mb-1.5 flex items-center gap-1">
                      <Landmark className="w-3.5 h-3.5 text-registrar-blue" /> Target Public Universities
                    </span>
                    <ul className="text-xs text-registrar-ink-muted space-y-1">
                      {dest.topPublicUniversities.map((uni, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <Check className="w-3 h-3 text-registrar-green shrink-0" />
                          <span className="truncate">{uni}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* High Contrast Intake Deadline Flag (incorporating donation from teletext) */}
                  <div className="bg-registrar-cream-paper p-2.5 rounded border border-registrar-ink-border flex items-center gap-2 text-xs font-mono text-registrar-ink">
                    <Clock className="w-3.5 h-3.5 text-registrar-amber shrink-0" />
                    <span className="truncate">{dest.intakeDeadlines}</span>
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => onSelectCountryForEvaluation(dest.id)}
                  type="button"
                  className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-semibold bg-white border border-registrar-ink-border text-registrar-ink hover:bg-registrar-blue hover:text-white hover:border-registrar-blue transition-colors group"
                >
                  Evaluate Eligibility for {dest.country}
                  <ArrowUpRight className="w-3.5 h-3.5 text-registrar-ink-muted group-hover:text-white transition-colors" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
