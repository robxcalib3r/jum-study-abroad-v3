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
    answer: "Jum Study Abroad NEVER holds your blocked account funds. For German student visas, blocked accounts must be opened exclusively with official German federal financial regulatory authority (BaFin)-approved escrow providers such as Fintiba, Coracle, or Expatrio in your own legal name. You transfer living expenses directly to your own account, and once you arrive in Germany, the bank releases your monthly allowance directly to you."
  },
  {
    question: "How does Jum Study Abroad specifically empower indigenous Jumma students from the Chittagong Hill Tracts?",
    answer: "Founded by Jumma community members who walked this path themselves, JSA provides dedicated mentorship, language training resources, and authentic documentation support for ethnic minority applicants across Rangamati, Bandarban, and Khagrachari, connecting them directly with enrolled senior alumni mentors across Europe."
  },
  {
    question: "What happens during the embassy visa interview, and how do you prepare students?",
    answer: "Embassy visa officers evaluate your academic coherence, course module knowledge, and legitimate post-study intentions. We conduct rigorous 1-on-1 mock interviews covering your curriculum, university selection, financial documentation, and career vision so you enter your interview with total confidence."
  },
  {
    question: "What are your consulting fees and what is your refund transparency policy?",
    answer: "We operate with a written, milestone-based advisory contract and zero hidden commissions. Initial eligibility assessments and course research are 100% free. If an eligible applicant receives no public university offer under our agreed shortlist, our performance guarantee provides milestone fee refunds."
  }
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto">
        
        {/* Section Header */}
        <div className="mb-12 max-w-3xl">
          <div className="items-center inline-flex w-fit py-1.25 px-3 rounded-full gap-2 bg-[#EFF6FF] border border-[#DBEAFE] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A56DB]" />
            <span className="tracking-[0.8px] uppercase font-mono font-semibold text-[#1A56DB] text-[11px]">
              Direct Transparency Q&amp;A
            </span>
          </div>
          
          <h2 className="tracking-[-0.75px] mb-4 font-display font-semibold text-[#1E293B] text-2xl sm:text-3xl leading-snug">
            Answers to high-stakes questions from students and parents.
          </h2>
          
          <p className="font-sans text-[#475569] text-base leading-relaxed">
            Overseas higher education is a life-changing investment. Here are direct, candid answers about admissions feasibility, embassy procedures, and financial safety.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="border-y border-[#E2E8F0] divide-y divide-[#E2E8F0]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-5">
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="items-start flex w-full justify-between p-1 rounded-sm gap-4 cursor-pointer text-left focus-visible:ring-2 focus-visible:ring-[#1A56DB]"
                  aria-expanded={isOpen}
                >
                  <span className={`font-sans font-semibold text-base sm:text-[17px] leading-snug transition-colors ${
                    isOpen ? 'text-[#1A56DB]' : 'text-[#1E293B]'
                  }`}>
                    {faq.question}
                  </span>
                  
                  <span className="shrink-0 mt-0.5 p-1 rounded-sm bg-[#FBF9F5] border border-[#E2E8F0]">
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#1A56DB]' : 'text-[#475569]'
                    }`} />
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-3 pr-6 pl-1 animate-fadeIn">
                    <p className="font-sans text-[#475569] text-sm sm:text-[15px] leading-relaxed">
                      {faq.answer}
                    </p>
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
