import React, { useState } from 'react';
import { ArrowRight, Clock, CheckCircle2, Users, FileText } from 'lucide-react';
import { heroDossiersData, HeroDossier } from '../data/testimonials';

interface HeroProps {
  onOpenEvaluation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEvaluation }) => {
  const [activeDossierId, setActiveDossierId] = useState<string>('priyo');

  const activeDossier: HeroDossier = 
    heroDossiersData.find((d) => d.id === activeDossierId) || heroDossiersData[2];

  return (
    <section 
      className="relative items-center flex flex-col w-full pt-10 pb-16 lg:pt-14 lg:pb-24 bg-cover bg-center border-b border-[#E2E8F0]"
      style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
    >
      {/* Background tint overlay for readability */}
      <div className="absolute inset-0 bg-[#FBF9F5]/85 backdrop-blur-[2px]"></div>

      <div className="relative grid grid-cols-1 lg:grid-cols-12 max-w-7xl w-full items-start px-4 sm:px-6 lg:px-8 gap-8 z-10">
        
        {/* Left Manifesto Banner */}
        <div className="lg:col-span-7 flex flex-col p-6 sm:p-8 rounded-2xl gap-5 backdrop-blur-md bg-white/85 border border-[#E2E8F0]/90 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.08)]">
          
          {/* Intake Open Status Chip */}
          <div className="items-center inline-flex w-fit py-1.5 px-3 rounded-full gap-2 bg-[#EAF7EE] border border-[#0D533233]">
            <span className="w-2 h-2 rounded-full bg-[#0D5332] animate-pulse" />
            <span className="tracking-[0.5px] uppercase font-mono font-semibold text-[#083B23] text-[11px] leading-tight">
              European Public Admissions • Autumn 2026 Intake Open
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-[32px] sm:text-[40px] lg:text-[44px] tracking-[-1px] leading-[1.12] font-display font-semibold text-[#0F172A]">
            Study abroad with Expert Advisory and verified European admissions.
          </h1>

          {/* Subtitle / Value Proposition */}
          <p className="font-sans text-[#334155] text-base sm:text-[17px] leading-relaxed">
            We guide Bangladeshi and indigenous Jumma students directly into accredited, tuition-free and low-tuition public universities across France, Germany, Hungary, and Finland. No inflated package fees, no deceptive job promises—only verifiable outcomes and thorough visa interview preparation.
          </p>

          {/* Action Buttons */}
          <div className="items-center flex flex-wrap w-full gap-3.5 pt-1">
            <button
              onClick={onOpenEvaluation}
              type="button"
              className="items-center inline-flex justify-center py-3.5 px-5.5 rounded-lg gap-2 bg-[#1A56DB] hover:bg-[#1546B0] text-white font-sans font-semibold text-[15px] shadow-[0_2px_4px_rgba(0,0,0,0.1)] transition-all cursor-pointer active:scale-[0.98]"
            >
              <span>Check Free University Eligibility</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>
            <a
              href="#destinations"
              className="items-center inline-flex justify-center py-3.5 px-5.5 rounded-lg bg-white hover:bg-slate-50 text-[#1E293B] font-sans font-medium text-[15px] border border-[#CBD5E1] shadow-xs transition-all cursor-pointer"
            >
              <span>Explore Public Universities</span>
            </a>
          </div>

          {/* Truth Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 w-full pt-4 gap-3.5 border-t border-[#E2E8F0]">
            <div className="items-start flex gap-2.5">
              <div className="items-center flex justify-center shrink-0 rounded-full bg-[#EAF7EE] w-7 h-7 text-[#0D5332]">
                <Clock className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-semibold text-[#0F172A] text-[13px]">
                  100% Direct Fees
                </span>
                <span className="font-sans text-[#1A56DB] text-[11px] font-medium">
                  Pay universities directly
                </span>
              </div>
            </div>

            <div className="items-start flex gap-2.5">
              <div className="items-center flex justify-center shrink-0 rounded-full bg-[#EAF7EE] w-7 h-7 text-[#0D5332]">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-semibold text-[#0F172A] text-[13px]">
                  100% Visa Record
                </span>
                <span className="font-sans text-[#1A56DB] text-[11px] font-medium">
                  Inaugural 100% / 97.2% cum.
                </span>
              </div>
            </div>

            <div className="items-start flex gap-2.5">
              <div className="items-center flex justify-center shrink-0 rounded-full bg-[#EAF7EE] w-7 h-7 text-[#0D5332]">
                <Users className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-semibold text-[#0F172A] text-[13px]">
                  CHT Peer Network
                </span>
                <span className="font-sans text-[#1A56DB] text-[11px] font-medium">
                  Senior alumni guidance
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Dossier Success Card */}
        <div className="lg:col-span-5 flex flex-col w-full">
          <div className="flex flex-col w-full rounded-xl overflow-hidden shadow-[0_4px_16px_-2px_rgba(15,23,42,0.08)] bg-white border border-[#CBD5E1]">
            
            {/* Dossier Header */}
            <div className="items-center flex justify-between py-3.5 px-5 bg-[#F5F0E6] border-b border-[#E2E8F0]">
              <div className="items-center flex gap-2">
                <FileText className="w-4 h-4 text-[#1A56DB] shrink-0" />
                <span className="tracking-[0.6px] uppercase font-mono font-semibold text-[#1E293B] text-[11px]">
                  Success Stories
                </span>
              </div>
              <div className="items-center flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#0D5332] animate-pulse" />
                <span className="tracking-[0.5px] uppercase font-mono font-semibold text-[#083B23] text-[11px]">
                  Enrolled &amp; Verified
                </span>
              </div>
            </div>

            {/* Dossier Tabs */}
            <div className="flex w-full bg-[#FBF9F5] border-b border-[#E2E8F0]">
              {heroDossiersData.map((dossier) => {
                const isActive = dossier.id === activeDossierId;
                return (
                  <button
                    key={dossier.id}
                    onClick={() => setActiveDossierId(dossier.id)}
                    type="button"
                    className={`items-center flex flex-col justify-center flex-1 py-2.5 px-2 border-r last:border-r-0 border-[#E2E8F0] transition-colors cursor-pointer ${
                      isActive 
                        ? 'bg-white border-b-2 border-b-[#1A56DB]' 
                        : 'hover:bg-slate-100/70'
                    }`}
                  >
                    <span className={`font-sans text-xs ${isActive ? 'font-semibold text-[#1A56DB]' : 'font-medium text-[#64748B]'}`}>
                      {dossier.tabLabel}
                    </span>
                    <span className={`font-sans text-[10px] ${isActive ? 'font-semibold text-[#1A56DB]' : 'text-[#94A3B8]'}`}>
                      {dossier.country}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Dossier Body */}
            <div className="flex flex-col p-5 sm:p-6 gap-4">
              
              <div className="items-start flex justify-between w-full gap-2">
                <div className="flex flex-col">
                  <span className="font-display font-semibold text-[#1E293B] text-xl">
                    {activeDossier.name}
                  </span>
                  <span className="font-sans text-[#64748B] text-xs">
                    {activeDossier.homeRegion} • {activeDossier.community}
                  </span>
                </div>
                
                <div className="items-center flex flex-col py-1 px-2.5 rounded-sm bg-[#EAF7EE] border border-[#0D533233] shrink-0 text-right">
                  <span className="tracking-[0.5px] uppercase font-mono font-bold text-[#083B23] text-[10px]">
                    Visa Issued
                  </span>
                  <span className="font-mono text-[#083B23] text-[10px]">
                    {activeDossier.visaIssuedDate}
                  </span>
                </div>
              </div>

              {/* Student Quote */}
              <div className="pl-3 border-l-2 border-[#1A56DB]">
                <p className="font-sans italic text-[#475569] text-[13px] leading-relaxed">
                  "{activeDossier.quote}"
                </p>
              </div>

              {/* Specs Box */}
              <div className="flex flex-col p-3.5 rounded-lg gap-2 bg-[#FBF9F5] border border-[#E2E8F0]">
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
              <div className="items-center flex justify-between pt-2.5 border-t border-dashed border-[#E2E8F0]">
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
