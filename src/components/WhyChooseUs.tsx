import React from 'react';
import { ArrowRight } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const articles = [
    {
      id: 1,
      image: '/images/article-major.png',
      tag: 'Admissions Tips',
      date: 'Oct 12, 2024',
      title: 'How to choose the right university for your major',
      link: '#faq'
    },
    {
      id: 2,
      image: '/images/article-scholarship.png',
      tag: 'Scholarships',
      date: 'Aug 15, 2024',
      title: 'Scholarship tips: how to increase your chances',
      link: '#faq'
    },
    {
      id: 3,
      image: '/images/article-visa.png',
      tag: 'Visa Guide',
      date: 'Sep 28, 2024',
      title: 'Visa interview checklist: what to prepare and what to say',
      link: '#faq'
    }
  ];

  return (
    <section 
      id="why-us" 
      className="items-center flex flex-col w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#E2E8F0]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl w-full gap-8 lg:gap-10">
        
        {/* Left Dark Card */}
        <div className="flex flex-col justify-between py-8 px-6 sm:px-8 rounded-2xl gap-7 bg-[#0F172A] border border-[#1E293B] shadow-[0_4px_20px_-2px_rgba(15,23,42,0.12)]">
          
          <div className="flex flex-col gap-3.5">
            <div className="items-center inline-flex w-fit py-1.25 px-3 rounded-full gap-2 bg-[#1E293B] border border-[#334155]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
              <span className="tracking-[0.8px] uppercase font-mono font-semibold text-[#34D399] text-[11px]">
                Alumni Advisory Founded 2024 • Formalized 2025 • European Board
              </span>
            </div>

            <h2 className="tracking-[-0.8px] font-display font-semibold text-[#F8FAFC] text-[28px] sm:text-[32px] leading-tight">
              Why ambitious students choose Jum Study Abroad
            </h2>

            <p className="font-sans text-[#94A3B8] text-sm sm:text-[15px] leading-relaxed">
              Every year, thousands of students dream of a global degree, but the path is clouded by confusion and conflicting advice. We built JSA on radical transparency and verifiable admissions.
            </p>
          </div>

          {/* 3 Numbered Feature Blocks */}
          <div className="flex flex-col gap-3.5">
            <div className="flex flex-col py-3.5 px-4 rounded-xl gap-1.5 bg-[#1E293B]/60 border border-[#334155]/60">
              <div className="items-center flex gap-2.5">
                <div className="py-0.5 px-2 rounded-sm bg-[#0284C7]/20 border border-[#38BDF8]/40">
                  <span className="font-mono font-semibold text-[#38BDF8] text-[11px]">
                    01
                  </span>
                </div>
                <h3 className="font-sans font-semibold text-white text-[15px]">
                  Founded by European Alumni
                </h3>
              </div>
              <p className="font-sans text-[#CBD5E1] text-[13px] leading-relaxed">
                Having navigated the hurdles ourselves in France and Germany, we founded JSA in 2025 to offer the transparent, empathetic guidance we needed back then.
              </p>
            </div>

            <div className="flex flex-col py-3.5 px-4 rounded-xl gap-1.5 bg-[#1E293B]/60 border border-[#334155]/60">
              <div className="items-center flex gap-2.5">
                <div className="py-0.5 px-2 rounded-sm bg-[#0284C7]/20 border border-[#38BDF8]/40">
                  <span className="font-mono font-semibold text-[#38BDF8] text-[11px]">
                    02
                  </span>
                </div>
                <h3 className="font-sans font-semibold text-white text-[15px]">
                  100% Visa Track Record
                </h3>
              </div>
              <p className="font-sans text-[#CBD5E1] text-[13px] leading-relaxed">
                Through rigorous document vetting and comprehensive 1-on-1 embassy interview preparation, we achieved a perfect 100% visa success rate in our inaugural cohort (97.2% cumulative across 1,240+ students).
              </p>
            </div>

            <div className="flex flex-col py-3.5 px-4 rounded-xl gap-1.5 bg-[#1E293B]/60 border border-[#334155]/60">
              <div className="items-center flex gap-2.5">
                <div className="py-0.5 px-2 rounded-sm bg-[#0284C7]/20 border border-[#38BDF8]/40">
                  <span className="font-mono font-semibold text-[#38BDF8] text-[11px]">
                    03
                  </span>
                </div>
                <h3 className="font-sans font-semibold text-white text-[15px]">
                  Direct Fees &amp; Dedicated Family Support
                </h3>
              </div>
              <p className="font-sans text-[#CBD5E1] text-[13px] leading-relaxed">
                Students pay official tuition and semester fees directly to European universities with zero hidden agency markups. We stand beside families at every step.
              </p>
            </div>
          </div>

          {/* Bottom Ticker */}
          <div className="items-center flex flex-wrap justify-between py-3 px-4 rounded-lg bg-[#1E293B]/80 border border-[#334155]/80 gap-2 text-xs">
            <span className="tracking-[0.5px] uppercase font-mono font-semibold text-[#94A3B8] text-[10px]">
              0% Agency Markups
            </span>
            <span className="text-[#475569]">•</span>
            <span className="tracking-[0.5px] uppercase font-mono font-semibold text-[#94A3B8] text-[10px]">
              Direct Tuition
            </span>
            <span className="text-[#475569]">•</span>
            <span className="tracking-[0.5px] uppercase font-mono font-semibold text-[#94A3B8] text-[10px]">
              CHT Peer Network
            </span>
          </div>

        </div>

        {/* Right Resources Column */}
        <div className="flex flex-col justify-between gap-6">
          
          <div className="flex flex-col gap-2.5">
            <div className="items-center inline-flex w-fit py-1.25 px-3 rounded-full gap-2 bg-[#EFF6FF] border border-[#DBEAFE]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1A56DB]" />
              <span className="tracking-[0.8px] uppercase font-mono font-semibold text-[#1A56DB] text-[11px]">
                Resources &amp; Admissions Briefs
              </span>
            </div>

            <h2 className="tracking-[-0.8px] font-display font-semibold text-[#1E293B] text-[28px] sm:text-[32px] leading-tight">
              Helpful guides and tips
            </h2>

            <p className="font-sans text-[#475569] text-[15px] leading-relaxed">
              Practical, verified advice to help students and parents make informed academic and visa decisions.
            </p>
          </div>

          {/* 3 Articles List */}
          <div className="flex flex-col gap-4">
            {articles.map((art) => (
              <div 
                key={art.id}
                className="items-center flex flex-col sm:flex-row p-3 rounded-xl gap-4 bg-white border border-[#E2E8F0] shadow-xs hover:shadow-md hover:border-[#CBD5E1] transition-all overflow-hidden"
              >
                <div 
                  className="shrink-0 h-28 sm:h-24 w-full sm:w-32 rounded-lg bg-cover bg-center border border-[#E2E8F0]"
                  style={{ backgroundImage: `url(${art.image})` }}
                />
                
                <div className="flex flex-col grow justify-between gap-1.5 w-full">
                  <div className="items-center flex justify-between w-full">
                    <span className="tracking-[0.5px] uppercase font-mono font-semibold text-[#1A56DB] text-[11px]">
                      {art.tag}
                    </span>
                    <span className="font-sans text-[#64748B] text-xs">
                      {art.date}
                    </span>
                  </div>

                  <h3 className="tracking-[-0.2px] font-display font-semibold text-[#1E293B] text-[16px] leading-snug">
                    {art.title}
                  </h3>

                  <a 
                    href={art.link}
                    className="items-center inline-flex gap-1.5 text-[#1A56DB] hover:text-[#1546B0] text-[13px] font-sans font-semibold pt-0.5 group"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
