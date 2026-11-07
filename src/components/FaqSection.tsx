import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Is it genuinely true that public universities in Germany and France have zero or minimal tuition fees?",
    answer: "Yes. In Germany, almost all public universities across 15 of 16 federal states charge zero tuition fees for international Bachelor’s and Master’s students; you only pay a nominal semester contribution (Semesterbeitrag) of €150 to €350 which covers regional train transit and student union services. In France, many public universities offer partial fee waivers under the 'Bienvenue en France' framework, setting tuition at €170 for Bachelor's and €243 for Master's degrees. Commercial agencies in Dhaka frequently hide this reality to sell expensive private college courses instead."
  },
  {
    question: "How do blocked accounts (Sperrkonto) work, and will Jum hold my funds?",
    answer: "Never. Jum Study Abroad will NEVER touch, deposit, or hold your living expense funds. For Germany, we guide you to open a federally approved, digital blocked account (such as Fintiba, Expatrio, or Coracle) opened directly in your own legal name. You transfer the funds directly from your Bangladeshi bank under an official student file. For France, we guide your family on official bank sponsorship declarations (Attestation de virement irrévocable). No third-party agency accounts are ever involved."
  },
  {
    question: "How does Jum Study Abroad specifically empower indigenous Jumma students from the Chittagong Hill Tracts?",
    answer: "Our founding team and advisory network have deep roots in the Chakma, Marma, and Tripura communities. We understand the specific socio-economic realities, document challenges (tribal certificates, land lease records, guardian tax papers), and anxiety indigenous students face in Dhaka consultancies. We connect every applicant with current enrolled Jumma seniors in France, Germany, and Hungary for authentic peer mentorship, motivation letter reviews, and arrival support."
  },
  {
    question: "What happens during the embassy visa interview, and how do you prepare students?",
    answer: "Embassy visa interviews (at the German Embassy in Gulshan or the French Embassy / Campus France in Baridhara) fail when students cannot explain why they chose a specific syllabus, how their previous degree links to the new curriculum, or how their financing works. We conduct at least 3 rigorous 1-on-1 mock interviews, dissecting your academic transcript, career trajectory, and financial documents until you can answer every question with composure."
  },
  {
    question: "What are your consulting fees and what is your refund transparency policy?",
    answer: "We charge a single, transparent advisory fee broken into milestone deliverables: profile evaluation & university shortlist, application submission, and visa preparation. We do not take hidden cuts from universities or foreign colleges. If an admission cannot be secured due to verified institutional caps, our written advisory contract stipulates exact transparent refund terms. No surprises, no retained passports."
  }
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-white border-b border-registrar-ink-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-display font-semibold text-registrar-ink tracking-tight mb-4">
            Answers to high-stakes questions from students and parents.
          </h2>
          <p className="text-base text-registrar-ink-muted leading-relaxed font-sans">
            Overseas higher education is a life-changing investment. Here are direct, candid answers about admissions feasibility, embassy procedures, and financial safety.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="divide-y divide-registrar-ink-border border-y border-registrar-ink-border">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-5">
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-start justify-between text-left gap-4 group focus-visible:ring-2 focus-visible:ring-registrar-blue rounded p-1"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-base text-registrar-ink group-hover:text-registrar-blue transition-colors">
                    {faq.question}
                  </span>
                  <span className="shrink-0 p-1 rounded bg-registrar-cream text-registrar-ink-muted group-hover:text-registrar-blue transition-colors mt-0.5">
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180 text-registrar-blue' : ''}`} />
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-3 text-sm text-registrar-ink-muted leading-relaxed pr-6 pl-1 font-sans">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
