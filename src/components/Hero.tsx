import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight, Stamp, FileText, MapPin, GraduationCap, Building2 } from 'lucide-react';
import { testimonialsData, Testimonial } from '../data/testimonials';

interface HeroProps {
  onOpenEvaluation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEvaluation }) => {
  const [selectedStudent, setSelectedStudent] = useState<Testimonial>(testimonialsData[0]);

  return (
    <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-registrar-ink-border bg-dossier-grid overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Thesis & Direct Activation */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Status Chip (not an eyebrow label, but a functional admissions badge) */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-registrar-green-light border border-registrar-green/20 text-registrar-green-dark text-xs font-mono font-medium mb-6 w-fit">
              <span className="w-2 h-2 rounded-full bg-registrar-green animate-pulse"></span>
              European Public University Admissions • Autumn 2026 Intake Open
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-registrar-ink tracking-tight leading-[1.15] mb-6">
              Study abroad with zero predatory agency fees and verified European admissions.
            </h1>

            {/* Subcopy */}
            <p className="text-base sm:text-lg text-registrar-ink-muted leading-relaxed mb-8 max-w-2xl font-sans">
              We guide Bangladeshi and indigenous Jumma students directly into accredited, tuition-free and low-tuition public universities across France, Germany, Hungary, and Poland. No inflated package fees, no deceptive job promises—only verifiable outcomes and thorough visa interview preparation.
            </p>

            {/* Primary Action Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={onOpenEvaluation}
                type="button"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-base font-semibold bg-registrar-blue text-white hover:bg-registrar-blue-dark transition-all shadow-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-registrar-blue active:scale-[0.98]"
              >
                Check Free University Eligibility
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              
              <a
                href="#destinations"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-base font-medium border border-registrar-ink-border bg-white text-registrar-ink hover:bg-registrar-cream-paper transition-all focus-visible:ring-2 focus-visible:ring-registrar-blue"
              >
                Explore Public Universities
              </a>
            </div>

            {/* Operational Truth Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-registrar-ink-border">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-registrar-green shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-sm text-registrar-ink">100% Direct Fees</span>
                  <span className="block text-xs text-registrar-ink-muted">You pay universities directly</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-registrar-green shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-sm text-registrar-ink">97% Visa Rate</span>
                  <span className="block text-xs text-registrar-ink-muted">1-on-1 embassy mock sessions</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-registrar-green shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-sm text-registrar-ink">CHT Peer Network</span>
                  <span className="block text-xs text-registrar-ink-muted">Active senior student guidance</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Matriculation Dossier Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-xl border border-registrar-ink-borderDossier shadow-dossier overflow-hidden">
              
              {/* Dossier Header Bar */}
              <div className="bg-registrar-cream-paper border-b border-registrar-ink-border px-5 py-3.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-registrar-blue" />
                  <span className="font-mono text-xs font-semibold text-registrar-ink uppercase tracking-wider">
                    Registrar Case Dossier
                  </span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-xs text-registrar-green font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Enrolled & Verified</span>
                </div>
              </div>

              {/* Student Dossier Selector Tabs */}
              <div className="grid grid-cols-3 bg-registrar-cream border-b border-registrar-ink-border text-center text-xs font-medium">
                {testimonialsData.slice(0, 3).map((student) => {
                  const isSelected = selectedStudent.id === student.id;
                  return (
                    <button
                      key={student.id}
                      onClick={() => setSelectedStudent(student)}
                      type="button"
                      className={`py-2.5 px-2 transition-colors border-r last:border-r-0 border-registrar-ink-border ${
                        isSelected 
                          ? 'bg-white font-semibold text-registrar-blue shadow-sm border-b-2 border-b-registrar-blue' 
                          : 'text-registrar-ink-muted hover:text-registrar-ink hover:bg-white/50'
                      }`}
                    >
                      <span className="block truncate">{student.name.split(' ')[0]}</span>
                      <span className="text-[10px] text-registrar-ink-faint block">{student.country}</span>
                    </button>
                  );
                })}
              </div>

              {/* Dossier Content Sheet */}
              <div className="p-6 space-y-5 bg-white relative">
                
                {/* Dossier Top Meta */}
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-xl font-display font-semibold text-registrar-ink">
                      {selectedStudent.name}
                    </h2>
                    <p className="text-xs text-registrar-ink-muted flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-registrar-ink-faint" />
                      {selectedStudent.homeRegion} • <span className="font-medium text-registrar-green-dark">{selectedStudent.community}</span>
                    </p>
                  </div>
                  
                  {/* Visual Seal Stamp */}
                  <div className="border border-registrar-green/30 rounded px-2.5 py-1 text-center bg-registrar-green-light/40">
                    <span className="font-mono text-[10px] block text-registrar-green-badge font-bold uppercase tracking-wider">
                      Visa Issued
                    </span>
                    <span className="font-mono text-[10px] text-registrar-green-dark block">
                      {selectedStudent.visaApprovedDate}
                    </span>
                  </div>
                </div>

                {/* Academic Placement Specs */}
                <div className="bg-registrar-cream-paper rounded-lg p-3.5 border border-registrar-ink-border space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-registrar-ink-muted flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-registrar-blue" /> Enrolled University
                    </span>
                    <span className="font-semibold text-registrar-ink text-right">
                      {selectedStudent.university} ({selectedStudent.country})
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-registrar-ink-muted flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-registrar-blue" /> Degree Course
                    </span>
                    <span className="font-medium text-registrar-ink text-right truncate max-w-[200px]">
                      {selectedStudent.degree}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-1 border-t border-registrar-ink-border/60">
                    <span className="text-registrar-ink-muted">Tuition / Fellowship</span>
                    <span className="font-mono font-semibold text-registrar-green-badge text-right">
                      {selectedStudent.scholarshipOrFee}
                    </span>
                  </div>
                </div>

                {/* Direct Quote / Student Truth */}
                <div className="relative pl-3 border-l-2 border-registrar-blue/40 text-xs text-registrar-ink-muted italic leading-relaxed">
                  "{selectedStudent.quote}"
                </div>

                {/* Dossier Footer Data Stamp */}
                <div className="pt-3 border-t border-dashed border-registrar-ink-border flex items-center justify-between font-mono text-[11px] text-registrar-ink-faint">
                  <span>Dossier ID: {selectedStudent.dossierNumber}</span>
                  <span className="flex items-center gap-1 text-registrar-ink-muted">
                    <Stamp className="w-3.5 h-3.5 text-registrar-blue" /> Certified Transcript
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
