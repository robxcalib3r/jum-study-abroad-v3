import React, { useState } from 'react';
import { destinationsData } from '../data/destinations';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

interface DestinationsShowcaseProps {
  onSelectCountryForEvaluation: (countryId: string) => void;
}

export const DestinationsShowcase: React.FC<DestinationsShowcaseProps> = ({ onSelectCountryForEvaluation }) => {
  const [filter, setFilter] = useState<'All' | 'Tuition-Free' | 'Low-Tuition' | 'Full Scholarship'>('All');
  const [startIndex, setStartIndex] = useState(0);

  const filtered = destinationsData.filter((d) => {
    if (filter === 'All') return true;
    return d.tuitionStatus === filter;
  });

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? filtered.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % filtered.length);
  };

  const displayedDestinations = [
    ...filtered.slice(startIndex),
    ...filtered.slice(0, startIndex)
  ];

  return (
    <section 
      id="destinations" 
      className="items-center flex flex-col w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#FBF9F5] border-y border-[#E2E8F0]"
    >
      <div className="flex flex-col max-w-7xl w-full gap-8">
        
        {/* Section Header & Navigation Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between w-full gap-6">
          <div className="flex flex-col max-w-2xl gap-2.5">
            <div className="items-center inline-flex w-fit py-1.25 px-3 rounded-full gap-2 bg-[#EAF7EE] border border-[#0D533233]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0D5332]" />
              <span className="tracking-[0.8px] uppercase font-mono font-semibold text-[#083B23] text-[11px]">
                Verified European Public University Admissions
              </span>
            </div>
            
            <h2 className="tracking-tight font-display font-semibold text-[#1E293B] text-2xl sm:text-4xl leading-tight">
              Direct Admissions into Top European Public Universities
            </h2>
            
            <p className="font-sans text-[#475569] text-base leading-relaxed">
              Direct matriculation and tuition-free scholarship pathways into accredited European state institutions across France, Germany, Hungary, and Finland.
            </p>
          </div>

          {/* Filter Pills & Controls */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F5F0E6] rounded-lg border border-[#E2E8F0]">
              {(['All', 'Tuition-Free', 'Low-Tuition', 'Full Scholarship'] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => {
                    setFilter(tab);
                    setStartIndex(0);
                  }}
                  className={`px-3 py-1.5 rounded-md text-xs font-sans transition-all duration-150 cursor-pointer active:scale-95 ${
                    filter === tab
                      ? 'bg-[#1A56DB] text-white font-semibold shadow-xs'
                      : 'text-[#475569] font-medium hover:text-[#1E293B] hover:bg-white/60'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Carousel Buttons */}
            <div className="items-center flex gap-2">
              <button 
                onClick={handlePrev}
                type="button"
                aria-label="Previous destination" 
                className="items-center flex justify-center rounded-lg bg-white border border-[#CBD5E1] w-[38px] h-[38px] hover:bg-slate-50 transition shadow-xs cursor-pointer text-[#475569] active:scale-90"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={handleNext}
                type="button"
                aria-label="Next destination" 
                className="items-center flex justify-center rounded-lg bg-[#1A56DB] border border-[#1A56DB] w-[38px] h-[38px] hover:bg-[#1546B0] transition shadow-xs cursor-pointer text-white active:scale-90"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 w-full gap-5">
          {displayedDestinations.map((dest) => (
            <div 
              key={dest.id}
              onClick={() => onSelectCountryForEvaluation(dest.country.toLowerCase())}
              className="flex flex-col justify-between p-5 rounded-xl gap-4 bg-white border border-[#E2E8F0] shadow-xs hover:shadow-dossier-hover hover:border-[#CBD5E1] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group h-full active:scale-[0.99]"
            >
              <div className="flex flex-col gap-3.5">
                
                {/* Header Tag Row */}
                <div className="items-center flex justify-between w-full">
                  <div className="items-center flex py-0.75 px-2 rounded-sm bg-[#EFF6FF] border border-[#DBEAFE]">
                    <span className="tracking-[0.5px] uppercase font-mono font-semibold text-[#1A56DB] text-[11px]">
                      {dest.country}
                    </span>
                  </div>
                  <span className="tracking-[0.5px] uppercase font-mono font-medium text-[#64748B] text-[10px]">
                    {dest.type}
                  </span>
                </div>

                {/* University Title & Location */}
                <div className="flex flex-col gap-1 min-h-[56px]">
                  <h3 className="tracking-tight font-display font-semibold text-[#1E293B] text-lg leading-snug group-hover:text-[#1A56DB] transition-colors">
                    {dest.name}
                  </h3>
                  <span className="font-sans text-[#64748B] text-sm">
                    {dest.city}
                  </span>
                </div>

                {/* Tuition & Accreditation Box */}
                <div className="flex flex-col py-2.5 px-3 rounded-lg gap-1.5 bg-[#FBF9F5] border border-[#E2E8F0]">
                  <div className="items-center flex justify-between">
                    <span className="font-sans text-[#64748B] text-[11px]">
                      Tuition Structure
                    </span>
                    <span className="font-sans font-semibold text-[#083B23] text-[11px]">
                      {dest.tuitionStructure}
                    </span>
                  </div>
                  <div className="items-center flex justify-between">
                    <span className="font-sans text-[#64748B] text-[11px]">
                      Accreditation
                    </span>
                    <span className="font-mono font-semibold text-[#1E293B] text-[10px]">
                      {dest.accreditation}
                    </span>
                  </div>
                </div>

              </div>

              {/* Card Footer: Intake & Direct Apply */}
              <div className="items-center flex justify-between pt-2.5 border-t border-[#E2E8F0]/70 mt-auto">
                <div className="items-center flex gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0D5332] shrink-0" />
                  <span className="tracking-[0.5px] uppercase font-mono font-semibold text-[#083B23] text-[10px]">
                    {dest.intakeBadge}
                  </span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-[#1A56DB] transition-colors" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
