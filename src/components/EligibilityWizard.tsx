import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, RotateCcw, ShieldCheck, Sparkles, Send, Building, GraduationCap, DollarSign, Award } from 'lucide-react';

interface EligibilityWizardProps {
  initialCountry?: string;
}

export const EligibilityWizard: React.FC<EligibilityWizardProps> = ({ initialCountry }) => {
  const [step, setStep] = useState(1);
  const [degree, setDegree] = useState<'bachelors' | 'masters' | 'phd'>('masters');
  const [field, setField] = useState('stem');
  const [gpa, setGpa] = useState('3.2-3.6');
  const [englishStatus, setEnglishStatus] = useState('ielts-6-5');
  const [budgetTier, setBudgetTier] = useState('tuition-free');
  const [targetCountry, setTargetCountry] = useState(initialCountry || 'france');
  const [studentName, setStudentName] = useState('');
  const [studentContact, setStudentContact] = useState('');

  // Calculate tailored recommendations
  const getMatches = () => {
    if (degree === 'masters' && (englishStatus === 'ielts-6-5' || englishStatus === 'ielts-7-plus')) {
      return {
        topTrack: 'Germany & France Public University Track',
        feasibility: 'High Feasibility (92% Match)',
        recommendedInstitutions: ['University of Rennes (France)', 'TU Freiburg / RWTH Aachen (Germany)', 'University of Strasbourg'],
        tuitionSummary: '€0 to €243 per year (Subsidized public education)',
        visaReadiness: 'Standard 4-6 week blocked account & embassy prep'
      };
    } else if (degree === 'bachelors' || englishStatus === 'moi') {
      return {
        topTrack: 'Hungary (Stipendium) & Poland English Track',
        feasibility: 'Strong Feasibility (88% Match)',
        recommendedInstitutions: ['ELTE Budapest (Hungary)', 'Wrocław University of Science (Poland)', 'University of Debrecen'],
        tuitionSummary: 'Full scholarship eligible or €1,800–€2,500/yr',
        visaReadiness: 'Direct bank statement or scholarship award letter'
      };
    } else {
      return {
        topTrack: 'European Foundation & Direct Campus France Track',
        feasibility: 'Moderate Feasibility (requires 1-on-1 interview drill)',
        recommendedInstitutions: ['Campus France Partner Universities', 'University of Warsaw', 'University of Bucharest'],
        tuitionSummary: 'Low-cost public framework (€1,500–€3,000/yr)',
        visaReadiness: 'Embassy interview coaching mandatory'
      };
    }
  };

  const matches = getMatches();

  const handleReset = () => {
    setStep(1);
    setStudentName('');
    setStudentContact('');
  };

  const generateWhatsAppMessage = () => {
    const text = `Hello Jum Study Abroad! I just completed the Free Profile Evaluation on your website.%0A%0A*Profile Summary:*%0A- Degree: ${degree.toUpperCase()}%0A- Field: ${field.toUpperCase()}%0A- GPA: ${gpa}%0A- English: ${englishStatus}%0A- Target Budget: ${budgetTier}%0A- Name: ${studentName || 'Prospective Applicant'}%0A- Phone/Email: ${studentContact || 'Not provided'}%0A%0A*Calculated Recommendation:* ${matches.topTrack}%0A%0AI would like to verify my eligibility with an advisor.`;
    return `https://wa.me/880199999789?text=${text}`;
  };

  return (
    <section id="evaluator" className="py-16 sm:py-24 bg-dossier-grid border-b border-registrar-ink-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-display font-semibold text-registrar-ink tracking-tight mb-3">
            Free European University Eligibility Checker.
          </h2>
          <p className="text-sm sm:text-base text-registrar-ink-muted leading-relaxed font-sans">
            Find out which tuition-free and low-cost European public universities match your academic background, test scores, and budget in under 2 minutes. No credit card, no forced signup.
          </p>
        </div>

        {/* Wizard Card Container */}
        <div className="bg-white rounded-xl border border-registrar-ink-borderDossier shadow-dossier overflow-hidden">
          
          {/* Progress Bar Header */}
          <div className="bg-registrar-cream-paper border-b border-registrar-ink-border px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-semibold text-registrar-blue uppercase tracking-wider">
                Step {step} of 3
              </span>
              <span className="text-xs text-registrar-ink-muted">
                {step === 1 && '• Target Degree & Field'}
                {step === 2 && '• Academic & Language Profile'}
                {step === 3 && '• Budget & Destination Preference'}
                {step === 4 && '• Verification & Results Dossier'}
              </span>
            </div>
            
            <div className="flex items-center gap-1.5">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`w-6 h-1.5 rounded-full transition-colors ${
                    step >= s ? 'bg-registrar-blue' : 'bg-registrar-ink-border'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Wizard Body */}
          <div className="p-6 sm:p-8">
            
            {/* STEP 1 */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-registrar-ink mb-2">
                    1. What level of degree are you applying for?
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: 'bachelors', label: "Bachelor's Degree", sub: 'After HSC / A-Levels' },
                      { id: 'masters', label: "Master's Degree", sub: 'After Bachelor’s' },
                      { id: 'phd', label: 'PhD / Research', sub: 'After Master’s' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setDegree(item.id as any)}
                        className={`p-4 rounded-lg border text-left transition-all ${
                          degree === item.id
                            ? 'border-registrar-blue bg-registrar-blue-subtle text-registrar-blue font-semibold ring-1 ring-registrar-blue'
                            : 'border-registrar-ink-border bg-white text-registrar-ink hover:bg-registrar-cream'
                        }`}
                      >
                        <span className="block text-sm">{item.label}</span>
                        <span className="block text-[11px] text-registrar-ink-muted mt-0.5">{item.sub}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-registrar-ink mb-2">
                    2. Select your broad field of academic interest:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                    {[
                      { id: 'stem', label: 'Computer Science & Engineering', icon: Building },
                      { id: 'business', label: 'Business & Management', icon: DollarSign },
                      { id: 'social', label: 'Humanities & Social Sciences', icon: GraduationCap },
                      { id: 'health', label: 'Life Sciences & Public Health', icon: Award },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setField(item.id)}
                        className={`p-3.5 rounded-lg border text-left transition-all flex flex-col justify-between h-24 ${
                          field === item.id
                            ? 'border-registrar-blue bg-registrar-blue-subtle text-registrar-blue font-semibold ring-1 ring-registrar-blue'
                            : 'border-registrar-ink-border bg-white text-registrar-ink hover:bg-registrar-cream'
                        }`}
                      >
                        <item.icon className="w-4 h-4 mb-2 text-registrar-blue" />
                        <span className="text-xs leading-snug">{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold bg-registrar-blue text-white hover:bg-registrar-blue-dark transition-all"
                  >
                    Next: Academic & Language Profile
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-registrar-ink mb-2">
                    3. Your approximate GPA or academic result:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs font-mono">
                    {[
                      { id: '3.6-plus', label: 'CGPA 3.60+ / First Class' },
                      { id: '3.2-3.6', label: 'CGPA 3.20 – 3.59' },
                      { id: '2.8-3.2', label: 'CGPA 2.80 – 3.19' },
                      { id: 'below-2.8', label: 'Below CGPA 2.80' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setGpa(item.id)}
                        className={`p-3 rounded-lg border text-center transition-all ${
                          gpa === item.id
                            ? 'border-registrar-blue bg-registrar-blue-subtle text-registrar-blue font-semibold ring-1 ring-registrar-blue'
                            : 'border-registrar-ink-border bg-white text-registrar-ink hover:bg-registrar-cream'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-registrar-ink mb-2">
                    4. English Language Proficiency Status:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {[
                      { id: 'ielts-6-5', label: 'IELTS 6.5 or higher (or TOEFL 90+)', desc: 'Qualifies directly for German & French TU9/state courses.' },
                      { id: 'ielts-6-0', label: 'IELTS 6.0 (or Duolingo 105+)', desc: 'Qualifies for Hungarian Stipendium & Polish universities.' },
                      { id: 'moi', label: 'English Medium of Instruction (MOI)', desc: 'Accepted by selected institutions in Poland and France.' },
                      { id: 'planning', label: 'Currently Preparing / No Test Yet', desc: 'We will chart your timeline and test waiver pathways.' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setEnglishStatus(item.id)}
                        className={`p-3.5 rounded-lg border text-left transition-all ${
                          englishStatus === item.id
                            ? 'border-registrar-blue bg-registrar-blue-subtle text-registrar-blue font-semibold ring-1 ring-registrar-blue'
                            : 'border-registrar-ink-border bg-white text-registrar-ink hover:bg-registrar-cream'
                        }`}
                      >
                        <span className="block font-medium text-registrar-ink">{item.label}</span>
                        <span className="block text-[11px] text-registrar-ink-muted mt-0.5">{item.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="inline-flex items-center text-xs font-medium text-registrar-ink-muted hover:text-registrar-ink"
                  >
                    <ArrowLeft className="w-3.5 h-3.5 mr-1" /> Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold bg-registrar-blue text-white hover:bg-registrar-blue-dark transition-all"
                  >
                    Next: Budget & Preferences
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-registrar-ink mb-2">
                    5. What is your target annual tuition budget?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    {[
                      { id: 'tuition-free', label: 'Tuition-Free (< €500 / year)', desc: 'Public German state universities or France subsidised.' },
                      { id: 'low-cost', label: 'Low-Tuition (€1,500 – €3,000 / year)', desc: 'Public Polish, Romanian, and French institutions.' },
                      { id: 'scholarship-only', label: '100% Scholarship Dependent', desc: 'Stipendium Hungaricum or Erasmus Mundus.' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setBudgetTier(item.id)}
                        className={`p-3.5 rounded-lg border text-left transition-all ${
                          budgetTier === item.id
                            ? 'border-registrar-blue bg-registrar-blue-subtle text-registrar-blue font-semibold ring-1 ring-registrar-blue'
                            : 'border-registrar-ink-border bg-white text-registrar-ink hover:bg-registrar-cream'
                        }`}
                      >
                        <span className="block font-medium text-registrar-ink">{item.label}</span>
                        <span className="block text-[11px] text-registrar-ink-muted mt-0.5">{item.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-registrar-ink mb-2">
                    6. Preferred destination focus (Optional):
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs font-medium">
                    {[
                      { id: 'france', label: 'France 🇫🇷' },
                      { id: 'germany', label: 'Germany 🇩🇪' },
                      { id: 'hungary', label: 'Hungary 🇭🇺' },
                      { id: 'poland', label: 'Poland 🇵🇱' },
                      { id: 'any', label: 'Best Match 🇪🇺' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setTargetCountry(item.id)}
                        className={`p-2.5 rounded-lg border text-center transition-all ${
                          targetCountry === item.id
                            ? 'border-registrar-blue bg-registrar-blue-subtle text-registrar-blue font-semibold ring-1 ring-registrar-blue'
                            : 'border-registrar-ink-border bg-white text-registrar-ink hover:bg-registrar-cream'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="inline-flex items-center text-xs font-medium text-registrar-ink-muted hover:text-registrar-ink"
                  >
                    <ArrowLeft className="w-3.5 h-3.5 mr-1" /> Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(4)}
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg text-sm font-semibold bg-registrar-green-dark text-white hover:bg-registrar-green transition-all shadow-sm"
                  >
                    <Sparkles className="w-4 h-4 mr-1.5" />
                    Calculate My University Matches
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: RESULT DOSSIER */}
            {step === 4 && (
              <div className="space-y-6">
                
                {/* Result Headline Banner */}
                <div className="bg-registrar-green-light border border-registrar-green/30 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-registrar-green-badge uppercase">
                      <ShieldCheck className="w-4 h-4" /> Evaluated Admission Match
                    </span>
                    <h3 className="text-xl font-display font-semibold text-registrar-ink mt-1">
                      {matches.topTrack}
                    </h3>
                    <p className="text-xs text-registrar-green-dark font-medium mt-0.5">
                      {matches.feasibility}
                    </p>
                  </div>

                  <button
                    onClick={handleReset}
                    type="button"
                    className="inline-flex items-center gap-1 text-xs font-mono text-registrar-ink-muted hover:text-registrar-ink bg-white px-3 py-1.5 rounded border border-registrar-ink-border"
                  >
                    <RotateCcw className="w-3 h-3" /> Re-check
                  </button>
                </div>

                {/* Details Breakdown */}
                <div className="bg-registrar-cream rounded-xl p-5 border border-registrar-ink-border space-y-3.5 text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-registrar-ink-border/60">
                    <span className="text-registrar-ink-muted font-medium">Estimated Tuition Budget</span>
                    <span className="font-mono font-bold text-registrar-green-dark text-sm">
                      {matches.tuitionSummary}
                    </span>
                  </div>

                  <div>
                    <span className="block text-registrar-ink-muted font-medium mb-1.5">
                      Recommended Public Institutions:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {matches.recommendedInstitutions.map((inst, i) => (
                        <span key={i} className="inline-block px-2.5 py-1 rounded bg-white border border-registrar-ink-border text-registrar-ink font-semibold">
                          {inst}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-registrar-ink-border/60">
                    <span className="text-registrar-ink-muted font-medium block mb-1">Visa & Documentation Status:</span>
                    <span className="text-registrar-ink leading-relaxed font-sans">
                      {matches.visaReadiness}
                    </span>
                  </div>
                </div>

                {/* Advisor Consultation Handoff Form */}
                <div className="bg-white rounded-xl p-5 border border-registrar-ink-border space-y-4">
                  <h4 className="text-sm font-semibold text-registrar-ink">
                    Lock in your result with a verified senior advisor:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="block text-registrar-ink-muted mb-1">Your Full Name</label>
                      <input
                        type="text"
                        placeholder="e.g. Priyo Chakma"
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        className="w-full px-3 py-2 rounded border border-registrar-ink-border focus:border-registrar-blue text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-registrar-ink-muted mb-1">WhatsApp or Email</label>
                      <input
                        type="text"
                        placeholder="+880 17XXXXXXXX or email"
                        value={studentContact}
                        onChange={(e) => setStudentContact(e.target.value)}
                        className="w-full px-3 py-2 rounded border border-registrar-ink-border focus:border-registrar-blue text-xs"
                      />
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <a
                      href={generateWhatsAppMessage()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-5 py-3 rounded-lg text-sm font-semibold bg-registrar-green-dark text-white hover:bg-registrar-green transition-all shadow-sm"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send to Advisor on WhatsApp
                    </a>
                    <span className="text-[11px] text-registrar-ink-muted text-center sm:text-left">
                      Direct consultation • 100% free eligibility verification • Dhaka office
                    </span>
                  </div>
                </div>

              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
