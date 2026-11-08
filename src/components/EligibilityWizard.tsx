import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, RotateCcw, Building2, TrendingUp, GraduationCap, Award, CheckCircle2, MessageSquare } from 'lucide-react';

interface EligibilityWizardProps {
  initialCountry?: string;
}

export const EligibilityWizard: React.FC<EligibilityWizardProps> = ({ initialCountry }) => {
  const [step, setStep] = useState(1);
  const [degree, setDegree] = useState<'bachelors' | 'masters' | 'phd'>('masters');
  const [field, setField] = useState('Computer Science & Engineering');
  const [gpa, setGpa] = useState('3.2 – 3.6 / High Division');
  const [englishStatus, setEnglishStatus] = useState('IELTS 6.5+');
  const [targetCountry, setTargetCountry] = useState(initialCountry || 'Germany');

  // Recommendation engine based on inputs
  const getRecommendation = () => {
    if (degree === 'masters' && (englishStatus === 'IELTS 6.5+' || englishStatus === 'IELTS 6.0')) {
      return {
        trackTitle: 'Germany State & France Public University Track',
        feasibilityRate: '94% High Feasibility',
        institutions: [
          'TU Munich / RWTH Aachen (Germany — €0 tuition)',
          'University of Rennes (France — €243/yr)',
          'Université de Bourgogne (France — €170/yr)'
        ],
        tuitionSummary: '€0 to €243 per academic year (100% public state funded)',
        visaSummary: 'Sperrkonto or direct family sponsor affidavit. 1-on-1 embassy mock prep.'
      };
    } else if (degree === 'bachelors' || englishStatus.includes('MOI')) {
      return {
        trackTitle: 'Hungary Stipendium & Poland Low-Cost Track',
        feasibilityRate: '89% Strong Feasibility',
        institutions: [
          'Eötvös Loránd University - ELTE (Hungary — 100% Scholarship)',
          'University of Debrecen (Hungary)',
          'Wrocław University of Science & Technology (Poland)'
        ],
        tuitionSummary: 'Full government scholarship or low tuition (€1,800 – €2,500/yr)',
        visaSummary: 'Direct university admission confirmation + bank balance letter.'
      };
    } else {
      return {
        trackTitle: 'Finland Public & European Foundation Track',
        feasibilityRate: '86% Moderate Feasibility',
        institutions: [
          'University of Helsinki (Finland — Tuition waiver eligible)',
          'University of Strasbourg (France)',
          'University of Bucharest (Romania)'
        ],
        tuitionSummary: 'Subsidized European state rates or fee waiver options',
        visaSummary: 'Standard European student residence permit procedure.'
      };
    }
  };

  const rec = getRecommendation();

  const generateWhatsAppUrl = () => {
    const text = `Hello Jum Study Abroad! I completed the Free University Eligibility Evaluation on your website.%0A%0A*Student Profile:*%0A- Degree: ${degree.toUpperCase()}%0A- Field: ${field}%0A- GPA: ${gpa}%0A- English: ${englishStatus}%0A- Target Country: ${targetCountry}%0A%0A*Result:* ${rec.trackTitle} (${rec.feasibilityRate})%0A%0AI would like to schedule a free 1-on-1 advisor review.`;
    return `https://wa.me/880199999789?text=${text}`;
  };

  return (
    <section 
      id="eligibility" 
      className="py-20 bg-dossier-grid border-b border-[#E2E8F0]"
    >
      <div className="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto">
        
        {/* Section Header */}
        <div className="mb-10 max-w-2xl text-center mx-auto">
          <div className="items-center inline-flex w-fit py-1.25 px-3 rounded-full gap-2 bg-[#EFF6FF] border border-[#DBEAFE] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A56DB]" />
            <span className="tracking-[0.8px] uppercase font-mono font-semibold text-[#1A56DB] text-[11px]">
              Registrar Profile Evaluation
            </span>
          </div>
          
          <h2 className="tracking-[-0.75px] mb-3 text-center font-display font-semibold text-[#1E293B] text-2xl sm:text-3xl leading-snug">
            Free European University Eligibility Checker.
          </h2>
          <p className="text-center font-sans text-[#475569] text-base leading-relaxed">
            Find out which tuition-free and low-cost European public universities match your academic background, test scores, and budget in under 2 minutes. No credit card, no forced signup.
          </p>
        </div>

        {/* Wizard Main Card */}
        <div className="rounded-xl overflow-hidden shadow-[0_1px_3px_rgba(15,23,42,0.08),0_8px_24px_-4px_rgba(15,23,42,0.06)] bg-white border border-[#CBD5E1]">
          
          {/* Step Progress Top Bar */}
          <div className="items-center flex justify-between py-4 px-6 bg-[#F5F0E6] border-b border-[#E2E8F0]">
            <div className="items-center flex gap-3">
              <span className="tracking-[0.6px] uppercase font-mono font-semibold text-[#1A56DB] text-xs">
                Step {step} of 3
              </span>
              <span className="font-sans text-[#475569] text-xs">
                • {step === 1 ? 'Target Degree & Field' : step === 2 ? 'Academic & Language Profile' : 'Admission Feasibility & Recommendations'}
              </span>
            </div>
            
            {/* Step Indicators */}
            <div className="items-center flex gap-1.5">
              <div className={`h-1.5 w-6 rounded-full shrink-0 transition-colors ${step >= 1 ? 'bg-[#1A56DB]' : 'bg-[#E2E8F0]'}`} />
              <div className={`h-1.5 w-6 rounded-full shrink-0 transition-colors ${step >= 2 ? 'bg-[#1A56DB]' : 'bg-[#E2E8F0]'}`} />
              <div className={`h-1.5 w-6 rounded-full shrink-0 transition-colors ${step === 3 ? 'bg-[#1A56DB]' : 'bg-[#E2E8F0]'}`} />
            </div>
          </div>

          <div className="p-6 sm:p-8">
            {/* STEP 1 */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block mb-2 font-sans font-semibold text-[#1E293B] text-sm">
                    1. What level of degree are you applying for?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { id: 'bachelors', title: "Bachelor's Degree", sub: 'After HSC / A-Levels' },
                      { id: 'masters', title: "Master's Degree", sub: 'After Bachelor’s' },
                      { id: 'phd', title: 'PhD / Research', sub: 'After Master’s' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setDegree(opt.id as any)}
                        className={`text-left p-4 rounded-lg border transition-all cursor-pointer ${
                          degree === opt.id
                            ? 'bg-[#F0F5FF] border-[#1A56DB] shadow-[0_0_0_1px_#1A56DB]'
                            : 'bg-white border-[#E2E8F0] hover:border-slate-400'
                        }`}
                      >
                        <div className={`font-sans text-sm ${degree === opt.id ? 'font-semibold text-[#1A56DB]' : 'text-[#1E293B]'}`}>
                          {opt.title}
                        </div>
                        <div className="text-[11px] mt-0.5 leading-tight font-sans text-[#475569]">
                          {opt.sub}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block mb-2 font-sans font-semibold text-[#1E293B] text-sm">
                    2. Select your broad field of academic interest:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {[
                      { id: 'Computer Science & Engineering', icon: Building2 },
                      { id: 'Business & Management', icon: TrendingUp },
                      { id: 'Humanities & Social Sciences', icon: GraduationCap },
                      { id: 'Life Sciences & Public Health', icon: Award },
                    ].map((fld) => {
                      const Icon = fld.icon;
                      const isSelected = field === fld.id;
                      return (
                        <button
                          key={fld.id}
                          type="button"
                          onClick={() => setField(fld.id)}
                          className={`text-left p-3.5 rounded-lg border transition-all cursor-pointer flex flex-col justify-between h-24 ${
                            isSelected
                              ? 'bg-[#F0F5FF] border-[#1A56DB] shadow-[0_0_0_1px_#1A56DB]'
                              : 'bg-white border-[#E2E8F0] hover:border-slate-400'
                          }`}
                        >
                          <Icon className={`w-5 h-5 mb-2 ${isSelected ? 'text-[#1A56DB]' : 'text-[#64748B]'}`} />
                          <span className={`text-xs font-sans leading-tight ${isSelected ? 'font-semibold text-[#1A56DB]' : 'text-[#1E293B]'}`}>
                            {fld.id}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="flex justify-end pt-4 border-t border-[#E2E8F0]">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="items-center inline-flex justify-center py-2.5 px-5 rounded-lg bg-[#1A56DB] hover:bg-[#1546B0] text-white font-sans font-semibold text-sm cursor-pointer shadow-xs transition-all"
                  >
                    <span>Next: Academic &amp; Language Profile</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block mb-2 font-sans font-semibold text-[#1E293B] text-sm">
                    3. Your current or anticipated GPA / Academic standing:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      'CGPA 3.5 – 4.0 / First Class',
                      'CGPA 3.0 – 3.49 / High Second',
                      'CGPA 2.5 – 2.99 / Second Division'
                    ].map((score) => (
                      <button
                        key={score}
                        type="button"
                        onClick={() => setGpa(score)}
                        className={`text-left p-3.5 rounded-lg border transition-all cursor-pointer ${
                          gpa === score
                            ? 'bg-[#F0F5FF] border-[#1A56DB] shadow-[0_0_0_1px_#1A56DB]'
                            : 'bg-white border-[#E2E8F0] hover:border-slate-400'
                        }`}
                      >
                        <span className={`text-xs sm:text-sm font-sans ${gpa === score ? 'font-semibold text-[#1A56DB]' : 'text-[#1E293B]'}`}>
                          {score}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block mb-2 font-sans font-semibold text-[#1E293B] text-sm">
                    4. English Language Proficiency Status:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {[
                      'IELTS 6.5+',
                      'IELTS 6.0',
                      'English MOI (Certificate)',
                      'No test yet (Need advice)'
                    ].map((lang) => (
                      <button
                        key={lang}
                        type="button"
                        onClick={() => setEnglishStatus(lang)}
                        className={`text-left p-3 rounded-lg border transition-all cursor-pointer ${
                          englishStatus === lang
                            ? 'bg-[#F0F5FF] border-[#1A56DB] shadow-[0_0_0_1px_#1A56DB]'
                            : 'bg-white border-[#E2E8F0] hover:border-slate-400'
                        }`}
                      >
                        <span className={`text-xs font-sans ${englishStatus === lang ? 'font-semibold text-[#1A56DB]' : 'text-[#1E293B]'}`}>
                          {lang}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block mb-2 font-sans font-semibold text-[#1E293B] text-sm">
                    5. Preferred European Country:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                    {['Germany 🇩🇪', 'France 🇫🇷', 'Hungary 🇭🇺', 'Finland 🇫🇮', 'Open to Any 🇪🇺'].map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setTargetCountry(c)}
                        className={`text-center py-2.5 px-2 rounded-lg border text-xs font-sans transition-all cursor-pointer ${
                          targetCountry === c
                            ? 'bg-[#1A56DB] text-white border-[#1A56DB] font-semibold'
                            : 'bg-white text-[#1E293B] border-[#E2E8F0] hover:border-slate-400'
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between pt-4 border-t border-[#E2E8F0]">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="items-center inline-flex py-2.5 px-4 rounded-lg bg-white border border-[#CBD5E1] text-[#1E293B] font-sans font-medium text-sm hover:bg-slate-50 cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4 mr-1.5" />
                    <span>Back</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="items-center inline-flex justify-center py-2.5 px-5 rounded-lg bg-[#1A56DB] hover:bg-[#1546B0] text-white font-sans font-semibold text-sm cursor-pointer shadow-xs transition-all"
                  >
                    <span>Calculate Feasibility</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="p-5 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="tracking-[0.6px] uppercase font-mono font-bold text-[#166534] text-xs">
                      Eligible Pathway Result
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#DCFCE7] text-[#15803D] font-mono text-xs font-bold border border-[#86EFAC]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {rec.feasibilityRate}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-[#14532D] text-xl">
                    {rec.trackTitle}
                  </h3>
                </div>

                <div className="space-y-3 font-sans text-sm">
                  <div className="p-3.5 rounded-lg bg-[#FBF9F5] border border-[#E2E8F0]">
                    <span className="block font-semibold text-[#1E293B] mb-1.5 text-xs uppercase tracking-wider font-mono">
                      Recommended Universities &amp; Degrees
                    </span>
                    <ul className="space-y-1 text-[#334155] text-xs sm:text-sm list-disc pl-4">
                      {rec.institutions.map((inst, i) => (
                        <li key={i}>{inst}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-white border border-[#E2E8F0]">
                      <span className="block text-[#64748B] text-[11px] font-mono uppercase">Estimated Tuition</span>
                      <span className="block font-semibold text-[#083B23] text-xs mt-0.5">{rec.tuitionSummary}</span>
                    </div>
                    <div className="p-3 rounded-lg bg-white border border-[#E2E8F0]">
                      <span className="block text-[#64748B] text-[11px] font-mono uppercase">Visa &amp; Bank Proof</span>
                      <span className="block font-medium text-[#1E293B] text-xs mt-0.5">{rec.visaSummary}</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-[#EFF6FF] border border-[#DBEAFE] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <span className="font-sans font-semibold text-[#1E40AF] text-sm block">
                      Verify Your Profile with an Advisor
                    </span>
                    <span className="text-[#3B82F6] text-xs block">
                      Direct WhatsApp consultation with zero booking charges.
                    </span>
                  </div>
                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center py-2.5 px-4 rounded-lg bg-[#1A56DB] hover:bg-[#1546B0] text-white font-sans font-semibold text-xs shadow-xs transition-all shrink-0 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 mr-1.5" />
                    <span>Send Profile to WhatsApp</span>
                  </a>
                </div>

                <div className="flex justify-between pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="items-center inline-flex py-2 px-3 rounded-lg bg-white border border-[#CBD5E1] text-[#64748B] hover:text-[#1E293B] font-sans text-xs cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5 mr-1.5" />
                    <span>Start Over</span>
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
