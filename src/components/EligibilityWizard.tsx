import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, RotateCcw, ShieldCheck, Sparkles, Building, GraduationCap, DollarSign, Award } from 'lucide-react';

interface EligibilityWizardProps {
  initialCountry?: string;
}

export const EligibilityWizard: React.FC<EligibilityWizardProps> = ({ initialCountry }) => {
  const [step, setStep] = useState(1);
  const [degree, setDegree] = useState<'bachelors' | 'masters' | 'phd'>('masters');
  const [field, setField] = useState('stem');
  const [gpa, setGpa] = useState('3.2-3.6');
  const [englishStatus, setEnglishStatus] = useState('ielts-6-5');
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
    const text = `Hello Jum Study Abroad! I just completed the Free Profile Evaluation on your website.%0A%0A*Profile Summary:*%0A- Degree: ${degree.toUpperCase()}%0A- Field: ${field.toUpperCase()}%0A- GPA: ${gpa}%0A- English: ${englishStatus}%0A- Target: ${targetCountry}%0A- Name: ${studentName || 'Prospective Applicant'}%0A- Phone/Email: ${studentContact || 'Not provided'}%0A%0A*Calculated Recommendation:* ${matches.topTrack}%0A%0AI would like to verify my eligibility with an advisor.`;
    return `https://wa.me/880199999789?text=${text}`;
  };

  return (
    <section id="evaluator" className="py-24 bg-dossier-grid border-b border-[#E2E8F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 max-w-2xl text-center mx-auto">
          <h2 className="text-2xl sm:text-3xl font-display font-semibold text-[#1E293B] tracking-[-0.75px] mb-3">
            Free European University Eligibility Checker.
          </h2>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-sans">
            Find out which tuition-free and low-cost European public universities match your academic background, test scores, and budget in under 2 minutes. No credit card, no forced signup.
          </p>
        </div>

        {/* Wizard Card Container */}
        <div className="bg-white rounded-xl border border-[#CBD5E1] shadow-[0_1px_3px_rgba(15,23,42,0.08),0_8px_24px_-4px_rgba(15,23,42,0.06)] overflow-hidden">
          
          {/* Progress Bar Header */}
          <div className="bg-[#F5F0E6] border-b border-[#E2E8F0] px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-semibold text-[#1A56DB] uppercase tracking-[0.6px]">
                Step {step} of 3
              </span>
              <span className="text-xs text-[#475569] font-sans">
                {step === 1 && '• Target Degree & Field'}
                {step === 2 && '• Academic & Language Profile'}
                {step === 3 && '• Verified Results & Recommendations'}
              </span>
            </div>
            
            <div className="flex items-center gap-1.5">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`w-6 h-1.5 rounded-full transition-colors ${
                    step >= s ? 'bg-[#1A56DB]' : 'bg-[#E2E8F0]'
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
                  <label className="block text-sm font-semibold text-[#1E293B] mb-2 font-sans">
                    1. What level of degree are you applying for?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { id: 'bachelors', label: "Bachelor's Degree", sub: 'After HSC / A-Levels' },
                      { id: 'masters', label: "Master's Degree", sub: 'After Bachelor’s' },
                      { id: 'phd', label: 'PhD / Research', sub: 'After Master’s' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setDegree(item.id as any)}
                        className={`p-4 rounded-lg border text-left transition-all font-sans ${
                          degree === item.id
                            ? 'border-[#1A56DB] bg-[#F0F5FF] text-[#1A56DB] font-semibold ring-1 ring-[#1A56DB]'
                            : 'border-[#E2E8F0] bg-white text-[#1E293B] hover:bg-[#FBF9F5]'
                        }`}
                      >
                        <span className="block text-sm">{item.label}</span>
                        <span className="block text-[11px] text-[#475569] mt-0.5">{item.sub}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1E293B] mb-2 font-sans">
                    2. Select your broad field of academic interest:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                    {[
                      { id: 'stem', label: 'Computer Science & Engineering', icon: Building },
                      { id: 'business', label: 'Business & Management', icon: DollarSign },
                      { id: 'social', label: 'Humanities & Social Sciences', icon: GraduationCap },
                      { id: 'health', label: 'Life Sciences & Public Health', icon: Award },
                    ].map((item) => {
                      const Icon = item.icon;
                      const isSelected = field === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setField(item.id)}
                          className={`h-24 flex flex-col justify-between p-3.5 rounded-lg border text-left transition-all ${
                            isSelected
                              ? 'border-[#1A56DB] bg-[#F0F5FF] text-[#1A56DB] font-semibold ring-1 ring-[#1A56DB]'
                              : 'border-[#E2E8F0] bg-white text-[#1E293B] hover:bg-[#FBF9F5]'
                          }`}
                        >
                          <Icon className={`w-4 h-4 shrink-0 mb-2 ${isSelected ? 'text-[#1A56DB]' : 'text-[#1A56DB]'}`} />
                          <span className="text-[12px] leading-[137.5%]">{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="inline-flex items-center justify-center py-2.5 px-5 rounded-lg bg-[#1A56DB] text-white font-semibold text-sm hover:bg-[#1344AF] transition-all shadow-sm"
                  >
                    Next: Academic &amp; Language Profile
                    <ArrowRight className="w-4 h-4 ml-1.5 shrink-0" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-[#1E293B] mb-2 font-sans">
                    3. What is your approximate CGPA or Academic Grade?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { id: '3.6-4.0', label: '3.60 – 4.00', sub: 'First Class / Distinction' },
                      { id: '3.2-3.6', label: '3.20 – 3.59', sub: 'Strong High-Second' },
                      { id: '2.8-3.2', label: '2.80 – 3.19', sub: 'Standard Pass' },
                      { id: 'under-2.8', label: 'Below 2.80', sub: 'Foundation Pathway' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setGpa(item.id)}
                        className={`p-3.5 rounded-lg border text-left transition-all font-sans ${
                          gpa === item.id
                            ? 'border-[#1A56DB] bg-[#F0F5FF] text-[#1A56DB] font-semibold ring-1 ring-[#1A56DB]'
                            : 'border-[#E2E8F0] bg-white text-[#1E293B] hover:bg-[#FBF9F5]'
                        }`}
                      >
                        <span className="block text-sm font-mono font-semibold">{item.label}</span>
                        <span className="block text-[11px] text-[#475569] mt-0.5">{item.sub}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1E293B] mb-2 font-sans">
                    4. What is your English Language Proficiency status?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                    {[
                      { id: 'ielts-7-plus', label: 'IELTS 7.0+', sub: 'Direct Top Tier' },
                      { id: 'ielts-6-5', label: 'IELTS 6.5', sub: 'Eligible for 95% of programs' },
                      { id: 'moi', label: 'English MOI Certificate', sub: 'Accepted in Poland & Hungary' },
                      { id: 'planning', label: 'Planning to Take Exam', sub: 'Conditional evaluation' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setEnglishStatus(item.id)}
                        className={`p-3.5 rounded-lg border text-left transition-all font-sans ${
                          englishStatus === item.id
                            ? 'border-[#1A56DB] bg-[#F0F5FF] text-[#1A56DB] font-semibold ring-1 ring-[#1A56DB]'
                            : 'border-[#E2E8F0] bg-white text-[#1E293B] hover:bg-[#FBF9F5]'
                        }`}
                      >
                        <span className="block text-sm font-semibold">{item.label}</span>
                        <span className="block text-[11px] text-[#475569] mt-0.5">{item.sub}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1E293B] mb-2 font-sans">
                    5. Preferred European Destination:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                    {[
                      { id: 'france', label: 'France 🇫🇷', sub: 'Low-Tuition' },
                      { id: 'germany', label: 'Germany 🇩🇪', sub: 'Tuition-Free' },
                      { id: 'hungary', label: 'Hungary 🇭🇺', sub: 'Scholarship' },
                      { id: 'poland', label: 'Poland 🇵🇱', sub: 'Low-Cost' },
                      { id: 'romania', label: 'Romania 🇷🇴', sub: 'Accessible' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setTargetCountry(item.id)}
                        className={`p-3 rounded-lg border text-left transition-all font-sans ${
                          targetCountry === item.id
                            ? 'border-[#1A56DB] bg-[#F0F5FF] text-[#1A56DB] font-semibold ring-1 ring-[#1A56DB]'
                            : 'border-[#E2E8F0] bg-white text-[#1E293B] hover:bg-[#FBF9F5]'
                        }`}
                      >
                        <span className="block text-sm font-semibold">{item.label}</span>
                        <span className="block text-[11px] text-[#475569] mt-0.5">{item.sub}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="inline-flex items-center justify-center py-2.5 px-4 rounded-lg border border-[#E2E8F0] bg-white text-[#1E293B] text-sm font-medium hover:bg-[#FBF9F5]"
                  >
                    <ArrowLeft className="w-4 h-4 mr-1.5" /> Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="inline-flex items-center justify-center py-2.5 px-5 rounded-lg bg-[#1A56DB] text-white font-semibold text-sm hover:bg-[#1344AF] transition-all shadow-sm"
                  >
                    Calculate My University Matches
                    <ArrowRight className="w-4 h-4 ml-1.5 shrink-0" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3 - RESULTS */}
            {step === 3 && (
              <div className="space-y-6">
                
                {/* Match Banner */}
                <div className="p-5 rounded-xl bg-[#EAF7EE66] border border-[#0D533233] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#0D5332] text-white flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-xs font-semibold text-[#137343] uppercase tracking-wider block">
                      Evaluation Calculated
                    </span>
                    <h3 className="text-lg font-semibold text-[#083B23] font-display mt-0.5">
                      {matches.topTrack}
                    </h3>
                    <p className="text-xs text-[#083B23]/80 mt-1 font-sans">
                      Status: <span className="font-semibold">{matches.feasibility}</span>
                    </p>
                  </div>
                </div>

                {/* Breakdown Ledger */}
                <div className="bg-[#FBF9F5] rounded-xl p-5 border border-[#E2E8F0] space-y-4 text-xs font-sans">
                  <div>
                    <span className="font-semibold text-[#1E293B] block mb-1">
                      Matched Public Higher Education Institutions:
                    </span>
                    <ul className="space-y-1 text-[#475569]">
                      {matches.recommendedInstitutions.map((inst, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#0D5332] shrink-0" />
                          <span className="font-medium text-[#1E293B]">{inst}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-[#E2E8F0] flex flex-col sm:flex-row justify-between gap-2">
                    <div>
                      <span className="text-[#475569] block">Expected Annual University Tuition:</span>
                      <span className="font-mono font-semibold text-[#137343] text-sm">
                        {matches.tuitionSummary}
                      </span>
                    </div>
                    <div>
                      <span className="text-[#475569] block">Visa / Financial Proof Path:</span>
                      <span className="font-medium text-[#1E293B]">
                        {matches.visaReadiness}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Optional Contact Input for 1-Click Verification */}
                <div className="bg-white p-5 rounded-xl border border-[#CBD5E1] space-y-4">
                  <h4 className="text-sm font-semibold text-[#1E293B] font-sans">
                    Verify Your Dossier With an Advisor (Zero Obligation)
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="block text-[#475569] mb-1 font-sans">Your Name:</label>
                      <input 
                        type="text" 
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        placeholder="e.g. Joy Chakma / Tanvir Ahmed"
                        className="w-full px-3 py-2 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1A56DB] text-xs font-sans"
                      />
                    </div>
                    <div>
                      <label className="block text-[#475569] mb-1 font-sans">Phone / WhatsApp / Email:</label>
                      <input 
                        type="text" 
                        value={studentContact}
                        onChange={(e) => setStudentContact(e.target.value)}
                        placeholder="e.g. 018XXXXXXXX or name@gmail.com"
                        className="w-full px-3 py-2 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1A56DB] text-xs font-sans"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <a
                      href={generateWhatsAppMessage()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center py-2.5 px-4 rounded-lg bg-[#0D5332] text-white font-semibold text-xs hover:bg-[#083B23] transition-all shadow-sm"
                    >
                      <ShieldCheck className="w-4 h-4 mr-1.5" />
                      Send Profile to Verified Advisor on WhatsApp
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center justify-center py-2.5 px-4 rounded-lg border border-[#E2E8F0] bg-white text-[#475569] text-xs font-medium hover:bg-[#FBF9F5]"
                    >
                      <RotateCcw className="w-3.5 h-3.5 mr-1.5" />
                      Start Over
                    </button>
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
