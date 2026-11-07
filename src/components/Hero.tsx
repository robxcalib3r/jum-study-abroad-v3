import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight, Stamp, FileText, MapPin, GraduationCap, Building2 } from 'lucide-react';
import { testimonialsData, Testimonial } from '../data/testimonials';

interface HeroProps {
  onOpenEvaluation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEvaluation }) => {
  const [selectedStudent, setSelectedStudent] = useState<Testimonial>(testimonialsData[0]);

  return (
    <section className="relative pt-10 pb-16 lg:pt-14 lg:pb-24 border-b border-[#E2E8F0] bg-dossier-grid overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Headline & Direct Activation */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Status Chip */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EAF7EE] border border-[#0D533233] text-[#083B23] text-xs font-mono font-medium mb-6 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#0D5332] opacity-75 animate-pulse"></span>
              European Public University Admissions • Autumn 2026 Intake Open
            </div>

            {/* Main Headline from Paper MCP */}
            <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-display font-semibold text-[#1E293B] tracking-[-1.2px] leading-[1.08] mb-6">
              Study abroad with Expert Advisory and verified European admissions.
            </h1>

            {/* Subcopy */}
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed mb-8 max-w-2xl font-sans">
              We guide Bangladeshi and indigenous Jumma students directly into accredited, tuition-free and low-tuition public universities across France, Germany, Hungary, and Poland. No inflated package fees, no deceptive job promises—only verifiable outcomes and thorough visa interview preparation.
            </p>

            {/* Primary Action Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={onOpenEvaluation}
                type="button"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-base font-semibold bg-[#1A56DB] text-white hover:bg-[#1344AF] transition-all shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1A56DB] active:scale-[0.98]"
              >
                Check Free University Eligibility
                <ArrowRight className="w-5 h-5 ml-2 shrink-0" />
              </button>
              
              <a
                href="#destinations"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-base font-medium border border-[#E2E8F0] bg-white text-[#1E293B] hover:bg-[#F5F0E6] transition-all focus-visible:ring-2 focus-visible:ring-[#1A56DB]"
              >
                Explore Public Universities
              </a>
            </div>

            {/* Operational Truth Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#E2E8F0]">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#0D5332] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-sm text-[#1E293B]">100% Direct Fees</span>
                  <span className="block text-xs text-[#475569]">You pay universities directly</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#0D5332] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-sm text-[#1E293B]">97% Visa Rate</span>
                  <span className="block text-xs text-[#475569]">1-on-1 embassy mock sessions</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#0D5332] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-sm text-[#1E293B]">CHT Peer Network</span>
                  <span className="block text-xs text-[#475569]">Active senior student guidance</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Success Stories Dossier Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-xl border border-[#CBD5E1] shadow-[0_1px_3px_rgba(15,23,42,0.08),0_8px_24px_-4px_rgba(15,23,42,0.06)] overflow-hidden">
              
              {/* Dossier Header Bar */}
              <div className="bg-[#F5F0E6] border-b border-[#E2E8F0] px-5 py-3.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#1A56DB]" />
                  <span className="font-mono text-xs font-semibold text-[#1E293B] uppercase tracking-[0.6px]">
                    Success Stories
                  </span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-xs text-[#0D5332] font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Enrolled &amp; Verified</span>
                </div>
              </div>

              {/* Student Selector Tabs */}
              <div className="grid grid-cols-3 bg-[#FBF9F5] border-b border-[#E2E8F0] text-center text-xs">
                {testimonialsData.slice(0, 3).map((student) => {
                  const isSelected = selectedStudent.id === student.id;
                  return (
                    <button
                      key={student.id}
                      onClick={() => setSelectedStudent(student)}
                      type="button"
                      className={`py-2.5 px-2 transition-colors border-r last:border-r-0 border-[#E2E8F0] ${
                        isSelected 
                          ? 'bg-white font-semibold text-[#1A56DB] shadow-sm border-b-[1.6px] border-b-[#1A56DB]' 
                          : 'text-[#475569] font-medium hover:text-[#1E293B] hover:bg-white/50'
                      }`}
                    >
                      <span className="block truncate">{student.name.split(' ')[0]}</span>
                      <span className="text-[10px] text-[#94A3B8] block">{student.country}</span>
                    </button>
                  );
                })}
              </div>

              {/* Dossier Content Sheet */}
              <div className="p-6 bg-white space-y-5">
                
                {/* Dossier Top Meta */}
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-xl font-display font-semibold text-[#1E293B]">
                      {selectedStudent.name}
                    </h2>
                    <p className="text-xs text-[#475569] flex items-center gap-1 mt-0.5 font-sans">
                      <MapPin className="w-3 h-3 text-[#94A3B8] shrink-0" />
                      {selectedStudent.homeRegion} • <span className="font-medium text-[#083B23]">{selectedStudent.community}</span>
                    </p>
                  </div>
                  
                  {/* Visual Seal Stamp */}
                  <div className="border border-[#0D53324D] rounded-sm px-2.5 py-1 text-center bg-[#EAF7EE66]">
                    <span className="font-mono text-[10px] block text-[#137343] font-bold uppercase tracking-[0.5px]">
                      Visa Issued
                    </span>
                    <span className="font-mono text-[10px] text-[#083B23] block">
                      {selectedStudent.visaApprovedDate}
                    </span>
                  </div>
                </div>

                {/* Direct Quote / Student Experience */}
                <div className="pl-3 border-l-[1.6px] border-l-[#1A56DB66] text-xs text-[#475569] italic leading-[162.5%] font-sans">
                  "{selectedStudent.quote}"
                </div>

                {/* Academic Placement Specs */}
                <div className="bg-[#F5F0E6] rounded-lg p-3.5 border border-[#E2E8F0] space-y-2 text-xs font-sans">
                  <div className="flex items-center justify-between">
                    <span className="text-[#475569] flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-[#1A56DB] shrink-0" /> Enrolled University
                    </span>
                    <span className="font-semibold text-[#1E293B] text-right">
                      {selectedStudent.university} ({selectedStudent.country})
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[#475569] flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-[#1A56DB] shrink-0" /> Degree Course
                    </span>
                    <span className="font-medium text-[#1E293B] text-right truncate max-w-[200px]">
                      {selectedStudent.degree}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-1 border-t border-[#E2E8F099]">
                    <span className="text-[#475569]">Tuition / Fellowship</span>
                    <span className="font-mono font-semibold text-[#137343] text-right">
                      {selectedStudent.scholarshipOrFee}
                    </span>
                  </div>
                </div>

                {/* Dossier Footer Data Stamp */}
                <div className="pt-3 border-t border-dashed border-[#E2E8F0] flex items-center justify-between font-mono text-[11px] text-[#94A3B8]">
                  <span>Dossier ID: {selectedStudent.dossierNumber}</span>
                  <span className="flex items-center gap-1 text-[#475569]">
                    <Stamp className="w-3.5 h-3.5 text-[#1A56DB] shrink-0" /> Certified Transcript
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
