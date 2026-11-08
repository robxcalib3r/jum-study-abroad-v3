import React from 'react';
import { ArrowRight, GraduationCap, ShieldCheck, Banknote, BookOpen } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

export const WhyChooseUs: React.FC = () => {
  const articles = [
    {
      id: 1,
      image: getAssetUrl('/images/article-major.png'),
      tag: 'Admissions Intelligence',
      date: 'Autumn 2026',
      title: 'Campus France & Études en France: Step-by-Step Procedure for Bangladeshi Applicants',
      link: '#faq'
    },
    {
      id: 2,
      image: getAssetUrl('/images/article-scholarship.png'),
      tag: 'Scholarships & Grants',
      date: 'Autumn 2026',
      title: 'Stipendium Hungaricum: Crafting a Competitive Motivation Letter from Bangladesh',
      link: '#faq'
    },
    {
      id: 3,
      image: getAssetUrl('/images/article-visa.png'),
      tag: 'Visa Protocols',
      date: 'Autumn 2026',
      title: 'German Blocked Account (Sperrkonto & Fintiba): Verification Without Agency Middlemen',
      link: '#faq'
    }
  ];

  return (
    <section 
      id="why-us" 
      className="items-center flex flex-col w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#E2E8F0]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl w-full gap-8 lg:gap-12 items-stretch">
        
        {/* Left Dossier Card: Parchment Registrar Aesthetic */}
        <div className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl gap-6 bg-[#F5F0E6] border border-[#CBD5E1] shadow-xs">
          
          <div className="flex flex-col gap-3">
            <div className="items-center inline-flex w-fit py-1 px-3 rounded-full gap-2 bg-[#EAF7EE] border border-[#0D5332]/25">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0D5332]" />
              <span className="tracking-wider uppercase font-mono font-semibold text-[#083B23] text-xs">
                Founded 2024 • European Alumni Advisory Board
              </span>
            </div>

            <h2 className="tracking-tight font-display font-semibold text-[#1E293B] text-2xl sm:text-3xl leading-snug">
              Why ambitious students choose Jum Study Abroad
            </h2>

            <p className="font-sans text-[#475569] text-sm sm:text-base leading-relaxed">
              Every year, thousands of students dream of an international degree, but the path is clouded by confusing agency packages and hidden costs. We built JSA on radical transparency and verifiable admissions.
            </p>
          </div>

          {/* 3 Value Pillars */}
          <div className="flex flex-col gap-3.5">
            
            <div className="flex items-start p-4 rounded-xl gap-3.5 bg-white border border-[#E2E8F0] shadow-xs">
              <div className="p-2 rounded-lg bg-[#EFF6FF] text-[#1A56DB] shrink-0 mt-0.5">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-sans font-semibold text-[#1E293B] text-base">
                  Founded &amp; Guided by European Alumni
                </h3>
                <p className="font-sans text-[#475569] text-sm leading-relaxed">
                  Having navigated the university portals and visa hurdles ourselves in France and Germany, our advisors offer empathetic, firsthand guidance rooted in real matriculation experience.
                </p>
              </div>
            </div>

            <div className="flex items-start p-4 rounded-xl gap-3.5 bg-white border border-[#E2E8F0] shadow-xs">
              <div className="p-2 rounded-lg bg-[#EAF7EE] text-[#0D5332] shrink-0 mt-0.5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-sans font-semibold text-[#1E293B] text-base">
                  100% Visa Track Record
                </h3>
                <p className="font-sans text-[#475569] text-sm leading-relaxed">
                  Through rigorous document vetting and 1-on-1 embassy interview preparation, our inaugural student cohort achieved a perfect 100% visa success rate (97.2% cumulative across 1,240+ students).
                </p>
              </div>
            </div>

            <div className="flex items-start p-4 rounded-xl gap-3.5 bg-white border border-[#E2E8F0] shadow-xs">
              <div className="p-2 rounded-lg bg-[#FEF3C7] text-[#B45309] shrink-0 mt-0.5">
                <Banknote className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-sans font-semibold text-[#1E293B] text-base">
                  Direct Tuition &amp; Zero Package Markups
                </h3>
                <p className="font-sans text-[#475569] text-sm leading-relaxed">
                  Students pay official tuition and semester fees directly to European public universities. We operate with a written milestone contract and zero hidden cuts.
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Trust Ticker */}
          <div className="items-center flex flex-wrap justify-between py-2.5 px-4 rounded-lg bg-white/80 border border-[#CBD5E1] text-xs font-mono font-medium text-[#475569]">
            <span className="text-[#083B23]">0% Agency Markups</span>
            <span className="text-[#CBD5E1]">•</span>
            <span className="text-[#1A56DB]">Direct Bank Payments</span>
            <span className="text-[#CBD5E1]">•</span>
            <span className="text-[#1E293B]">CHT Peer Mentorship</span>
          </div>

        </div>

        {/* Right Resources Column */}
        <div className="flex flex-col justify-between gap-6">
          
          <div className="flex flex-col gap-2.5">
            <div className="items-center inline-flex w-fit py-1 px-3 rounded-full gap-2 bg-[#EFF6FF] border border-[#DBEAFE]">
              <BookOpen className="w-3.5 h-3.5 text-[#1A56DB]" />
              <span className="tracking-wider uppercase font-mono font-semibold text-[#1A56DB] text-xs">
                Free Student Intelligence &amp; Briefs
              </span>
            </div>

            <h2 className="tracking-tight font-display font-semibold text-[#1E293B] text-2xl sm:text-3xl leading-snug">
              Practical guides for students &amp; families
            </h2>

            <p className="font-sans text-[#475569] text-sm sm:text-base leading-relaxed">
              Step-by-step admissions intelligence to help students from Bangladesh make informed academic, financial, and visa choices.
            </p>
          </div>

          {/* 3 Articles List */}
          <div className="flex flex-col gap-4">
            {articles.map((art) => (
              <div 
                key={art.id}
                className="items-center flex flex-col sm:flex-row p-3 rounded-xl gap-4 bg-[#FBF9F5] border border-[#E2E8F0] shadow-xs hover:shadow-dossier-hover hover:border-[#CBD5E1] hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
              >
                <div 
                  className="shrink-0 h-28 sm:h-24 w-full sm:w-32 rounded-lg bg-cover bg-center border border-[#E2E8F0]"
                  style={{ backgroundImage: `url(${art.image})` }}
                />
                
                <div className="flex flex-col grow justify-between gap-1.5 w-full">
                  <div className="items-center flex justify-between w-full">
                    <span className="tracking-wider uppercase font-mono font-semibold text-[#1A56DB] text-xs">
                      {art.tag}
                    </span>
                    <span className="font-mono text-[#64748B] text-xs">
                      {art.date}
                    </span>
                  </div>

                  <h3 className="font-display font-semibold text-[#1E293B] text-base leading-snug">
                    {art.title}
                  </h3>

                  <a 
                    href={art.link}
                    className="items-center inline-flex gap-1.5 text-[#1A56DB] hover:text-[#1546B0] text-sm font-sans font-semibold pt-0.5 group"
                  >
                    <span>Read Full Guide</span>
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
