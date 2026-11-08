import React from 'react';
import { Star } from 'lucide-react';
import { testimonialsData } from '../data/testimonials';

export const PeerProofRibbon: React.FC = () => {
  return (
    <section 
      id="alumni" 
      className="items-center flex flex-col w-full py-16 sm:py-20 bg-[#FAF8F5] border-y border-[#E2E8F0]"
    >
      <div className="flex flex-col max-w-7xl w-full items-center px-4 sm:px-6 lg:px-8 gap-12">
        
        {/* Section Header */}
        <div className="items-center flex flex-col max-w-2xl text-center w-full gap-3">
          <div className="items-center inline-flex w-fit py-1 px-3.5 rounded-full gap-2 bg-[#EAF7EE] border border-[#0D5332]/25">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0D5332]" />
            <span className="tracking-wider uppercase font-mono font-semibold text-[#083B23] text-xs">
              Direct Alumni Proof • 100% Authentic Community Verification
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl tracking-tight leading-tight text-center font-display font-semibold text-[#0F172A]">
            What students and families say about Jum Study Abroad
          </h2>
          
          <p className="text-center font-sans text-[#475569] text-base leading-relaxed">
            Real experiences from Bangladeshi and indigenous Jumma students who navigated admissions, blocked accounts, and embassy interviews with zero agency markups.
          </p>
        </div>

        {/* 3 Distinct Styled Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-6">
          
          {/* Card 1: Amber / Parent Card (Ananta Tripura) */}
          <div className="flex flex-col justify-between min-w-0 rounded-2xl overflow-hidden bg-white border border-[#FDE68A] shadow-xs h-full">
            <div className="flex flex-col p-6 gap-3.5 bg-[#FFFDF7] border-b border-[#FEF3C7]">
              <div className="items-center flex justify-between w-full">
                <div className="items-center flex gap-3">
                  <div 
                    className="shrink-0 rounded-full bg-cover bg-center border-2 border-[#F59E0B] w-11 h-11"
                    style={{ backgroundImage: `url(${testimonialsData[0].avatarUrl})` }}
                  />
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-[#0F172A] text-base">
                      {testimonialsData[0].name}
                    </span>
                    <span className="font-sans font-medium text-[#B45309] text-xs">
                      {testimonialsData[0].roleOrCommunity}
                    </span>
                  </div>
                </div>

                <div className="items-center flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
              </div>

              <div className="items-center inline-flex w-fit py-0.5 px-2.5 rounded-md gap-1.5 bg-[#FEF3C7] border border-[#FDE68A]">
                <span className="tracking-wide uppercase font-mono font-bold text-[#92400E] text-[10px]">
                  {testimonialsData[0].statusBadge}
                </span>
              </div>
            </div>

            <div className="flex flex-col grow p-6 gap-4">
              <div className="p-4 rounded-xl bg-[#FEF3C7]/25 border border-[#FEF3C7]">
                <p className="font-sans italic text-[#334155] text-sm leading-relaxed">
                  "{testimonialsData[0].quote}"
                </p>
              </div>
            </div>

            <div className="items-center flex justify-between py-3.5 px-6 bg-[#FFFDF7] border-t border-[#FEF3C7] mt-auto">
              <span className="font-mono text-[#94A3B8] text-xs">
                Dossier: {testimonialsData[0].dossierNumber}
              </span>
              <span className="font-sans font-semibold text-[#B45309] text-xs">
                Verified Parent
              </span>
            </div>
          </div>

          {/* Card 2: Blue / France Scholar Card (Binoy Chakma) */}
          <div className="flex flex-col justify-between min-w-0 rounded-2xl overflow-hidden bg-white border border-[#BFDBFE] shadow-xs h-full">
            <div className="flex flex-col p-6 gap-3.5 bg-[#F8FAFF] border-b border-[#DBEAFE]">
              <div className="items-center flex justify-between w-full">
                <div className="items-center flex gap-3">
                  <div 
                    className="shrink-0 rounded-full bg-cover bg-center border-2 border-[#1A56DB] w-11 h-11"
                    style={{ backgroundImage: `url(${testimonialsData[1].avatarUrl})` }}
                  />
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-[#0F172A] text-base">
                      {testimonialsData[1].name}
                    </span>
                    <span className="font-sans font-medium text-[#1A56DB] text-xs">
                      {testimonialsData[1].roleOrCommunity}
                    </span>
                  </div>
                </div>

                <div className="items-center flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
              </div>

              <div className="items-center inline-flex w-fit py-0.5 px-2.5 rounded-md gap-1.5 bg-[#EFF6FF] border border-[#BFDBFE]">
                <span className="tracking-wide uppercase font-mono font-bold text-[#1E40AF] text-[10px]">
                  {testimonialsData[1].statusBadge}
                </span>
              </div>
            </div>

            <div className="flex flex-col grow p-6 gap-4">
              <div className="p-4 rounded-xl bg-[#EFF6FF]/40 border border-[#DBEAFE]">
                <p className="font-sans italic text-[#334155] text-sm leading-relaxed">
                  "{testimonialsData[1].quote}"
                </p>
              </div>
            </div>

            <div className="items-center flex justify-between py-3.5 px-6 bg-[#F8FAFF] border-t border-[#DBEAFE] mt-auto">
              <span className="font-mono text-[#94A3B8] text-xs">
                Dossier: {testimonialsData[1].dossierNumber}
              </span>
              <span className="font-sans font-semibold text-[#1A56DB] text-xs">
                Currently in France
              </span>
            </div>
          </div>

          {/* Card 3: Forest Green / Hungary Scholar Card (Shima Marma) */}
          <div className="flex flex-col justify-between min-w-0 rounded-2xl overflow-hidden bg-white border border-[#BBF7D0] shadow-xs h-full">
            <div className="flex flex-col p-6 gap-3.5 bg-[#F7FCF8] border-b border-[#DCFCE7]">
              <div className="items-center flex justify-between w-full">
                <div className="items-center flex gap-3">
                  <div 
                    className="shrink-0 rounded-full bg-cover bg-center border-2 border-[#0D5332] w-11 h-11"
                    style={{ backgroundImage: `url(${testimonialsData[2].avatarUrl})` }}
                  />
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-[#0F172A] text-base">
                      {testimonialsData[2].name}
                    </span>
                    <span className="font-sans font-medium text-[#083B23] text-xs">
                      {testimonialsData[2].roleOrCommunity}
                    </span>
                  </div>
                </div>

                <div className="items-center flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
              </div>

              <div className="items-center inline-flex w-fit py-0.5 px-2.5 rounded-md gap-1.5 bg-[#EAF7EE] border border-[#BBF7D0]">
                <span className="tracking-wide uppercase font-mono font-bold text-[#083B23] text-[10px]">
                  {testimonialsData[2].statusBadge}
                </span>
              </div>
            </div>

            <div className="flex flex-col grow p-6 gap-4">
              <div className="p-4 rounded-xl bg-[#EAF7EE]/40 border border-[#BBF7D0]">
                <p className="font-sans italic text-[#334155] text-sm leading-relaxed">
                  "{testimonialsData[2].quote}"
                </p>
              </div>
            </div>

            <div className="items-center flex justify-between py-3.5 px-6 bg-[#F7FCF8] border-t border-[#DCFCE7] mt-auto">
              <span className="font-mono text-[#94A3B8] text-xs">
                Dossier: {testimonialsData[2].dossierNumber}
              </span>
              <span className="font-sans font-semibold text-[#083B23] text-xs">
                Currently in Hungary
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
