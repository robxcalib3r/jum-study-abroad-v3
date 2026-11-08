import React, { useState } from 'react';
import { ArrowRight, Clock, CheckCircle2, Users, FileText } from 'lucide-react';
import { heroDossiersData, HeroDossier } from '../data/testimonials';
import { getAssetUrl } from '../utils/assets';

interface HeroProps {
  onOpenEvaluation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEvaluation }) => {
  const [activeDossierId, setActiveDossierId] = useState<string>('priyo');

  const activeDossier: HeroDossier = 
    heroDossiersData.find((d) => d.id === activeDossierId) || heroDossiersData[2];

  return (
    <section 
      className="relative items-center flex flex-col w-full pt-24 pb-24 sm:pt-28 sm:pb-32 lg:pt-36 lg:pb-48 bg-cover bg-center border-b border-[#E2E8F0]"
      style={{ backgroundImage: `url(${getAssetUrl('/images/hero-bg.jpg')})` }}
    >
      {/* Background tint overlay - crisp, unblurred, keeping hero-bg visible */}
      <div className="absolute inset-0 pointer-events-none"></div>
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-950/20 to-transparent pointer-events-none"></div>

      <div className="relative grid grid-cols-1 lg:grid-cols-12 max-w-7xl w-full items-start px-4 sm:px-6 lg:px-8 gap-6 lg:gap-8 z-10">
        
        {/* Left Manifesto Banner */}
        <div className="lg:col-span-7 flex flex-col p-5 sm:p-6 lg:p-7 rounded-2xl gap-3.5 sm:gap-4 bg-white/40 backdrop-blur-sm border border-[#E2E8F0] shadow-lg">
          
          {/* Intake Open Status Chip */}
          <div className="items-center inline-flex w-fit py-0.5 sm:py-1 px-2.5 sm:px-3 rounded-full gap-2 bg-[#EAF7EE] border border-[#0D5332]/25">
            <span className="w-2 h-2 rounded-full bg-[#0D5332] animate-pulse" />
            <span className="tracking-wider uppercase font-mono font-semibold text-[#083B23] text-[11px] sm:text-xs">
              European Public Admissions • Autumn 2026 Intake Open
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-[1.18] font-display font-semibold text-[#0F172A]">
            Study abroad with verified European university admissions.
          </h1>

          {/* Subtitle / Value Proposition */}
          <p className="font-sans text-[#334155] text-sm sm:text-base leading-relaxed">
            We guide Bangladeshi and indigenous Jumma students directly into accredited, tuition-free and low-tuition public universities across France, Germany, Hungary, and Finland. Zero inflated package fees, zero deceptive job promises—only verifiable outcomes and thorough visa interview preparation.
          </p>

          {/* Action Buttons */}
          <div className="items-center flex flex-wrap w-full gap-3 pt-0.5">
            <button
              onClick={onOpenEvaluation}
              type="button"
              className="items-center inline-flex justify-center py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg gap-2 bg-[#1A56DB] hover:bg-[#1546B0] text-white font-sans font-semibold text-sm sm:text-base shadow-sm transition-all cursor-pointer active:scale-[0.98]"
            >
              <span>Check Free University Eligibility</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>
            <a
              href="#destinations"
              className="items-center inline-flex justify-center py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg bg-white hover:bg-slate-50 active:scale-[0.98] text-[#1E293B] font-sans font-medium text-sm sm:text-base border border-[#CBD5E1] shadow-xs transition-all cursor-pointer"
            >
              <span>Explore Public Universities</span>
            </a>
          </div>

          {/* Truth Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 w-full pt-3 gap-2.5 sm:gap-3 border-t border-[#E2E8F0]">
            <div className="items-start flex gap-2">
              <div className="items-center flex justify-center shrink-0 rounded-full bg-[#EAF7EE] w-6 h-6 text-[#0D5332] mt-0.5">
                <Clock className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-semibold text-[#0F172A] text-xs">
                  100% Direct Fees
                </span>
                <span className="font-sans text-[#1A56DB] text-[11px] font-medium leading-tight">
                  Pay universities directly
                </span>
              </div>
            </div>

            <div className="items-start flex gap-2">
              <div className="items-center flex justify-center shrink-0 rounded-full bg-[#EAF7EE] w-6 h-6 text-[#0D5332] mt-0.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-semibold text-[#0F172A] text-xs">
                  100% Visa Record
                </span>
                <span className="font-sans text-[#1A56DB] text-[11px] font-medium leading-tight">
                  Inaugural cohort 100%
                </span>
              </div>
            </div>

            <div className="items-start flex gap-2">
              <div className="items-center flex justify-center shrink-0 rounded-full bg-[#EAF7EE] w-6 h-6 text-[#0D5332] mt-0.5">
                <Users className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-semibold text-[#0F172A] text-xs">
                  CHT Peer Network
                </span>
                <span className="font-sans text-[#1A56DB] text-[11px] font-medium leading-tight">
                  Senior alumni guidance
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Dossier Success Card */}
        <div className="lg:col-span-5 flex flex-col w-full">
          <div className="flex flex-col w-full rounded-2xl overflow-hidden shadow-lg bg-white/35 backdrop-blur-sm border border-[#CBD5E1]">
            
            {/* Dossier Header */}
            <div className="items-center flex justify-between py-2.5 px-4 sm:px-5 bg-[#F5F0E6]/50 border-b border-[#E2E8F0]">
              <div className="items-center flex gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#1A56DB] shrink-0" />
                <span className="tracking-wider uppercase font-mono font-semibold text-[#1E293B] text-[11px]">
                  Success Stories
                </span>
              </div>
              <div className="items-center flex gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0D5332] animate-pulse" />
                <span className="tracking-wider uppercase font-mono font-semibold text-[#083B23] text-[11px]">
                  Enrolled &amp; Verified
                </span>
              </div>
            </div>

            {/* Dossier Tabs */}
            <div className="flex w-full bg-[#FBF9F5]/70 border-b border-[#E2E8F0]">
              {heroDossiersData.map((dossier) => {
                const isActive = dossier.id === activeDossierId;
                return (
                  <button
                    key={dossier.id}
                    onClick={() => setActiveDossierId(dossier.id)}
                    type="button"
                    className={`items-center flex flex-col justify-center flex-1 py-1.5 px-2 border-r last:border-r-0 border-[#E2E8F0] transition-all duration-150 cursor-pointer active:scale-[0.98] ${
                      isActive 
                        ? 'bg-white border-b-2 border-b-[#1A56DB] shadow-xs' 
                        : 'hover:bg-slate-100/70'
                    }`}
                  >
                    <span className={`font-sans text-[11px] sm:text-xs transition-colors ${isActive ? 'font-semibold text-[#1A56DB]' : 'font-medium text-[#64748B]'}`}>
                      {dossier.tabLabel}
                    </span>
                    <span className={`font-mono text-[10px] transition-colors ${isActive ? 'font-semibold text-[#1A56DB]' : 'text-[#94A3B8]'}`}>
                      {dossier.country}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Dossier Body with registrar paper transition */}
            <div key={activeDossier.id} className="flex flex-col p-4 sm:p-5 gap-3 animate-dossier-in">
              
              <div className="items-start flex justify-between w-full gap-2">
                <div className="flex flex-col">
                  <span className="font-display font-semibold text-[#1E293B] text-lg sm:text-xl">
                    {activeDossier.name}
                  </span>
                  <span className="font-sans text-[#64748B] text-xs">
                    {activeDossier.homeRegion} • {activeDossier.community}
                  </span>
                </div>
                
                <div className="items-center flex flex-col py-0.5 px-2 rounded bg-[#EAF7EE] border border-[#0D5332]/25 shrink-0 text-right">
                  <span className="tracking-wide uppercase font-mono font-bold text-[#083B23] text-[10px]">
                    Visa Issued
                  </span>
                  <span className="font-mono text-[#083B23] text-[10px]">
                    {activeDossier.visaIssuedDate}
                  </span>
                </div>
              </div>

              {/* Student Quote */}
              <div className="py-2.5 px-3 rounded-lg bg-[#EFF6FF]/70 border border-[#DBEAFE]">
                <p className="font-sans italic text-[#334155] text-xs leading-relaxed">
                  "{activeDossier.quote}"
                </p>
              </div>

              {/* Specs Box */}
              <div className="flex flex-col p-2.5 sm:p-3 rounded-lg gap-1.5 bg-[#FBF9F5]/70 border border-[#E2E8F0]">
                <div className="items-center flex justify-between text-xs">
                  <span className="font-sans text-[#64748B]">Enrolled University</span>
                  <span className="font-sans font-semibold text-[#1E293B]">{activeDossier.enrolledUniversity}</span>
                </div>
                <div className="items-center flex justify-between text-xs">
                  <span className="font-sans text-[#64748B]">Degree Course</span>
                  <span className="font-sans font-medium text-[#1E293B]">{activeDossier.degreeCourse}</span>
                </div>
                <div className="items-center flex justify-between text-xs pt-1.5 border-t border-[#E2E8F0]/80">
                  <span className="font-sans text-[#64748B]">Tuition Structure</span>
                  <span className="font-mono font-semibold text-[#083B23]">{activeDossier.tuitionStructure}</span>
                </div>
              </div>

              {/* Dossier Footer */}
              <div className="items-center flex justify-between pt-2 border-t border-dashed border-[#E2E8F0]">
                <span className="font-mono text-[#94A3B8] text-[11px]">
                  Dossier ID: {activeDossier.dossierId}
                </span>
                <span className="font-sans font-semibold text-[#1A56DB] text-[11px]">
                  {activeDossier.matriculationDate}
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
