/**
 * from Paper
 * https://app.paper.design/file/01M6ED75HD2EFSGQRKZZDBN2EX/p-1-0/2H0-0
 * on Nov 8, 2026
 * Exported: Homepage v3 Frame
 */
export default function HomepageV3() {
  return (
    <div className="[font-synthesis:none] wrap-anywhere w-full max-w-full overflow-x-hidden bg-[#FBF9F5] antialiased text-xs/4">
      <div>
        <div className="flex flex-col min-h-[775.2px]">
          <div className="sticky top-0 z-50 [backdrop-filter:blur(12px)] bg-[#FBF9F5F2] [border-bottom-width:0.8px] border-b-solid border-b-[#E2E8F0]">
            <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
              <div className="items-center h-20 flex justify-between flex-wrap gap-4">
                <div className="items-center flex rounded-md gap-3">
                  <div className="items-center flex justify-center rounded-full shrink-0 [box-shadow:#0D533226_0px_2px_8px] bg-[#1A56DB] [border-width:1.6px] border-solid border-[#FFFFFF] size-11">
                    <div className="tracking-[0.7px] wrap-normal font-['JetBrains_Mono',system-ui,sans-serif] font-bold text-white text-xs/4">
                      JSA
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="items-center flex gap-1.5">
                      <div className="inline-block [letter-spacing:-0.45px] wrap-normal font-['Inter',system-ui,sans-serif] font-semibold text-[#1E293B] text-lg/7">
                        Jum Study Abroad
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex items-center gap-8">
                  <a href="#alumni" className="wrap-normal font-['Inter',system-ui,sans-serif] font-medium text-[#475569] hover:text-[#1E293B] transition text-sm/5">
                    Verified Alumni
                  </a>
                  <a href="#destinations" className="wrap-normal font-['Inter',system-ui,sans-serif] font-medium text-[#475569] hover:text-[#1E293B] transition text-sm/5">
                    Destinations
                  </a>
                  <a href="#eligibility" className="wrap-normal font-['Inter',system-ui,sans-serif] font-semibold text-[#1A56DB] hover:text-[#1546B0] transition text-sm/5">
                    Eligibility Check
                  </a>
                  <a href="#faq" className="wrap-normal font-['Inter',system-ui,sans-serif] font-medium text-[#475569] hover:text-[#1E293B] transition text-sm/5">
                    FAQ
                  </a>
                </div>
                <div className="items-center flex gap-3">
                  <a href="#eligibility" className="items-center inline-flex justify-center text-center py-2.5 px-4 rounded-lg [box-shadow:#0000000D_0px_1px_2px] bg-[#1A56DB] hover:bg-[#1546B0] transition cursor-pointer">
                    <span className="inline-block text-center wrap-normal font-['Inter',system-ui,sans-serif] font-semibold text-white text-sm/5">
                      Check Free Eligibility
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" fontSize="14px" fontWeight="600" style={{ height: '16px', width: '16px', marginLeft: '6px', overflow: 'clip', minWidth: '0px', flexShrink: 0 }}>
                      <path d="M5 12h14" fontSize="14px" fontWeight="600" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ boxSizing: 'border-box', transformOrigin: '0px 0px' }} />
                      <path d="m12 5 7 7-7 7" fontSize="14px" fontWeight="600" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ boxSizing: 'border-box', transformOrigin: '0px 0px' }} />
                    </svg>
                  </a>
                  <a href="https://wa.me/880199999789" target="_blank" rel="noopener noreferrer" className="items-center inline-flex justify-center py-2.5 px-3.5 rounded-lg bg-white [border-width:0.8px] border-solid border-[#E2E8F0] hover:bg-slate-50 transition cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" fontSize="14px" fontWeight="500" style={{ height: '16px', width: '16px', marginRight: '6px', overflow: 'clip', minWidth: '0px', flexShrink: 0 }}>
                      <path d="M8 2v3" fontSize="14px" fontWeight="500" fill="none" stroke="#0D5332" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ boxSizing: 'border-box', transformOrigin: '0px 0px' }} />
                      <path d="M16 2v3" fontSize="14px" fontWeight="500" fill="none" stroke="#0D5332" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ boxSizing: 'border-box', transformOrigin: '0px 0px' }} />
                      <rect x="3" y="3" width="18" height="18" rx="2" fontSize="14px" fontWeight="500" fill="none" stroke="#0D5332" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ height: '18px', boxSizing: 'border-box', width: '18px', transformOrigin: '0px 0px' }} />
                      <path d="M3 9h18" fontSize="14px" fontWeight="500" fill="none" stroke="#0D5332" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ boxSizing: 'border-box', transformOrigin: '0px 0px' }} />
                    </svg>
                    <span className="inline-block wrap-normal font-['Inter',system-ui,sans-serif] font-medium text-[#1E293B] text-sm/5">
                      Book Advisor
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="grow">
            {/* HERO SECTION */}
            <div className="items-center flex flex-col w-full pt-12 pb-16 lg:pb-24 bg-origin-border bg-cover bg-position-[50%] [border-bottom-width:0.8px] border-b-solid border-b-[#E2E8F0]" style={{ backgroundImage: 'url(https://app.paper.design/file-assets/01M6ED75HD2EFSGQRKZZDBN2EX/01M6VE36VJDB5DAX6YEG02A6EM.jpg)' }}>
              <div className="flex flex-col lg:flex-row max-w-7xl w-full items-start px-4 sm:px-6 lg:px-8 gap-8">
                {/* Manifesto Banner */}
                <div className="items-start flex basis-[0%] flex-col min-w-0 grow-7 p-6 rounded-2xl gap-5 [backdrop-filter:blur(8px)] [box-shadow:#0F172A14_0px_4px_20px_-2px] bg-[#FFFFFFC7] [border-width:0.8px] border-solid border-[#E2E8F0E6] w-full">
                  <div className="items-center flex w-fit py-1.5 px-3 rounded-[999px] gap-2 bg-[#EAF7EE] [border-width:0.8px] border-solid border-[#0D533233]">
                    <div className="rounded-[999px] shrink-0 bg-[#0D5332] size-2" />
                    <div className="tracking-[0.5px] uppercase inline-block font-['JetBrains_Mono',system-ui,sans-serif] font-semibold text-[#083B23] text-[11px]/3.5">
                      European Public Admissions • Autumn 2026 Intake Open
                    </div>
                  </div>
                  <div className="text-[34px] sm:text-[42px] [letter-spacing:-1px] leading-[115%] font-['Newsreader',system-ui,sans-serif] font-semibold text-[#0F172A]">
                    Study abroad with Expert Advisory and verified European admissions.
                  </div>
                  <div className="font-['Inter',system-ui,sans-serif] text-[#334155] text-base/6.25">
                    We guide Bangladeshi and indigenous Jumma students directly into accredited, tuition-free and low-tuition public universities across France, Germany, Hungary, and Finland. No inflated package fees, no deceptive job promises—only verifiable outcomes and thorough visa interview preparation.
                  </div>
                  <div className="items-center flex flex-wrap w-full gap-3.5">
                    <a href="#eligibility" className="items-center flex justify-center py-3.25 px-5.5 rounded-lg gap-2 [box-shadow:#0000001A_0px_2px_4px] bg-[#1A56DB] hover:bg-[#1546B0] transition cursor-pointer text-white">
                      <span className="inline-block font-['Inter',system-ui,sans-serif] font-semibold text-white text-[15px]/4.5">
                        Check Free University Eligibility 
                      </span>
                      <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', flexShrink: 0 }}>
                        <line x1="5" y1="12" x2="19" y2="12" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <polyline points="12 5 19 12 12 19" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                    <a href="#destinations" className="items-center flex justify-center py-3.25 px-5.5 rounded-lg [box-shadow:#0000000D_0px_1px_2px] bg-white hover:bg-slate-50 transition cursor-pointer [border-width:0.8px] border-solid border-[#CBD5E1]">
                      <span className="inline-block font-['Inter',system-ui,sans-serif] font-medium text-[#1E293B] text-[15px]/4.5">
                        Explore Public Universities
                      </span>
                    </a>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 w-full pt-4 gap-3.5 [border-top-width:0.8px] border-t-solid border-t-[#E2E8F0E6]">
                    <div className="items-start flex gap-2">
                      <div className="items-center flex justify-center shrink-0 rounded-[999px] bg-[#EAF7EE] size-6.5">
                        <svg width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', flexShrink: 0 }}>
                          <circle cx="12" cy="12" r="10" fill="none" stroke="#0D5332" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <polyline points="12 6 12 12 14 14" fill="none" stroke="#0D5332" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <div className="inline-block font-['Inter',system-ui,sans-serif] font-semibold text-[#0F172A] text-[13px]/4">
                          100% Direct Fees
                        </div>
                        <div className="inline-block font-['Inter',system-ui,sans-serif] text-[#1A56DB] text-[11px]/3.5">
                          Pay universities directly
                        </div>
                      </div>
                    </div>
                    <div className="items-start flex gap-2">
                      <div className="items-center flex justify-center shrink-0 rounded-[999px] bg-[#EAF7EE] size-6.5">
                        <svg width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', flexShrink: 0 }}>
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" fill="none" stroke="#0D5332" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <polyline points="22 4 12 14.01 9 11.01" fill="none" stroke="#0D5332" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <div className="inline-block font-['Inter',system-ui,sans-serif] font-semibold text-[#0F172A] text-[13px]/4">
                          100% Visa Record
                        </div>
                        <div className="inline-block font-['Inter',system-ui,sans-serif] text-[#1A56DB] text-[11px]/3.5">
                          Inaugural 100% / 97.2% cum.
                        </div>
                      </div>
                    </div>
                    <div className="items-start flex gap-2">
                      <div className="items-center flex justify-center shrink-0 rounded-[999px] bg-[#EAF7EE] size-6.5">
                        <svg width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', flexShrink: 0 }}>
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" fill="none" stroke="#0D5332" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <circle cx="9" cy="7" r="4" fill="none" stroke="#0D5332" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <div className="inline-block font-['Inter',system-ui,sans-serif] font-semibold text-[#0F172A] text-[13px]/4">
                          CHT Peer Network
                        </div>
                        <div className="inline-block font-['Inter',system-ui,sans-serif] text-[#1A56DB] text-[11px]/3.5">
                          Senior alumni guidance
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Dossier Success Card */}
                <div className="flex basis-[0%] flex-col min-w-0 grow-5 w-full">
                  <div className="flex flex-col w-full rounded-xl overflow-clip min-h-0 [box-shadow:#0F172A14_0px_4px_16px_-2px] bg-white [border-width:0.8px] border-solid border-[#CBD5E1]">
                    <div className="items-center flex justify-between py-3.5 px-5 bg-[#F5F0E6] [border-bottom-width:0.8px] border-b-solid border-b-[#E2E8F0]">
                      <div className="items-center flex gap-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', flexShrink: 0 }}>
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="none" stroke="#1A56DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <polyline points="14 2 14 8 20 8" fill="none" stroke="#1A56DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <line x1="16" y1="13" x2="8" y2="13" stroke="#1A56DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <line x1="16" y1="17" x2="8" y2="17" stroke="#1A56DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="tracking-[0.6px] uppercase inline-block font-['JetBrains_Mono',system-ui,sans-serif] font-semibold text-[#1E293B] text-[11px]/3.5">
                           Success Stories
                        </div>
                      </div>
                      <div className="items-center flex gap-1.5">
                        <div className="rounded-[999px] shrink-0 bg-[#0D5332] size-1.5" />
                        <div className="tracking-[0.5px] uppercase inline-block font-['JetBrains_Mono',system-ui,sans-serif] font-semibold text-[#083B23] text-[11px]/3.5">
                          Enrolled &amp; Verified
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full bg-[#FBF9F5] [border-bottom-width:0.8px] border-b-solid border-b-[#E2E8F0]">
                      <div className="items-center flex flex-col justify-center grow basis-[0%] py-2.5 px-2 gap-0.5 [border-right-width:0.8px] border-r-solid border-r-[#E2E8F0] cursor-pointer">
                        <div className="inline-block font-['Inter',system-ui,sans-serif] font-medium text-[#64748B] text-xs/4">
                          Binoy
                        </div>
                        <div className="inline-block font-['Inter',system-ui,sans-serif] font-medium text-[#94A3B8] text-[10px]/3">
                          France
                        </div>
                      </div>
                      <div className="items-center flex flex-col justify-center grow basis-[0%] py-2.5 px-2 gap-0.5 [border-right-width:0.8px] border-r-solid border-r-[#E2E8F0] cursor-pointer">
                        <div className="inline-block font-['Inter',system-ui,sans-serif] font-medium text-[#64748B] text-xs/4">
                          Shima
                        </div>
                        <div className="inline-block font-['Inter',system-ui,sans-serif] font-medium text-[#94A3B8] text-[10px]/3">
                          Hungary
                        </div>
                      </div>
                      <div className="items-center flex flex-col justify-center grow basis-[0%] py-2.5 px-2 gap-0.5 bg-white border-b-2 border-b-solid border-b-[#1A56DB] cursor-pointer">
                        <div className="inline-block font-['Inter',system-ui,sans-serif] font-semibold text-[#1A56DB] text-xs/4">
                          Priyo
                        </div>
                        <div className="inline-block font-['Inter',system-ui,sans-serif] font-semibold text-[#1A56DB] text-[10px]/3">
                          Germany
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col p-6 gap-4">
                      <div className="items-start flex justify-between w-full">
                        <div className="flex flex-col gap-1">
                          <div className="inline-block font-['Newsreader',system-ui,sans-serif] font-semibold text-[#1E293B] text-xl/6.5">
                            Priyo Chakma 
                          </div>
                          <div className="inline-block font-['Inter',system-ui,sans-serif] text-[#64748B] text-xs/4">
                             Rangamati, CHT • Jumma Community (Chakma)
                          </div>
                        </div>
                        <div className="items-center flex flex-col py-1 px-2.5 rounded-sm gap-0.5 bg-[#EAF7EE] [border-width:0.8px] border-solid border-[#0D533233]">
                          <div className="tracking-[0.5px] uppercase inline-block font-['JetBrains_Mono',system-ui,sans-serif] font-bold text-[#083B23] text-[10px]/3">
                            Visa Issued 
                          </div>
                          <div className="inline-block font-['JetBrains_Mono',system-ui,sans-serif] text-[#083B23] text-[10px]/3">
                             July 14, 2025
                          </div>
                        </div>
                      </div>
                      <div className="pl-3 border-l-2 border-l-solid border-l-[#1A56DB]">
                        <div className="inline-block font-['Inter',system-ui,sans-serif] italic text-[#475569] text-[13px]/5">
                          "Commercial agencies in Chittagong told me public universities in Munich were impossible without 10 Lakh BDT agency processing. JSA helped me navigate the APS authentication process, structure my German blocked account through Fintiba, and practice my embassy visa interview until I passed on the first attempt with zero agency markups."
                        </div>
                      </div>
                      <div className="flex flex-col p-3.5 rounded-lg gap-2 bg-[#FBF9F5] [border-width:0.8px] border-solid border-[#E2E8F0]">
                        <div className="items-center flex justify-between">
                          <div className="inline-block font-['Inter',system-ui,sans-serif] text-[#64748B] text-xs/4">
                            Enrolled University
                          </div>
                          <div className="inline-block font-['Inter',system-ui,sans-serif] font-semibold text-[#1E293B] text-xs/4">
                            TU Munich (TUM) 🇩🇪
                          </div>
                        </div>
                        <div className="items-center flex justify-between">
                          <div className="inline-block font-['Inter',system-ui,sans-serif] text-[#64748B] text-xs/4">
                            Degree Course
                          </div>
                          <div className="inline-block font-['Inter',system-ui,sans-serif] font-medium text-[#1E293B] text-xs/4">
                            M.Sc. in Robotics &amp; Cognition
                          </div>
                        </div>
                        <div className="items-center flex justify-between pt-1.5 [border-top-width:0.8px] border-t-solid border-t-[#E2E8F080]">
                          <div className="inline-block font-['Inter',system-ui,sans-serif] text-[#64748B] text-xs/4">
                            Tuition Structure
                          </div>
                          <div className="inline-block font-['JetBrains_Mono',system-ui,sans-serif] font-semibold text-[#083B23] text-xs/4">
                            €0 / yr (State Public)
                          </div>
                        </div>
                      </div>
                      <div className="items-center flex justify-between pt-2.5 [border-top-width:0.8px] border-t-dashed border-t-[#E2E8F0]">
                        <div className="inline-block font-['JetBrains_Mono',system-ui,sans-serif] text-[#94A3B8] text-[11px]/3.5">
                          Dossier ID: JSA-DE-2025-112
                        </div>
                        <div className="inline-block font-['Inter',system-ui,sans-serif] font-semibold text-[#1A56DB] text-[11px]/3.5">
                          Matriculated Autumn 2025
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* UNIVERSITY DESTINATIONS */}
            <div id="destinations" className="items-center flex flex-col w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#FBF9F5] [border-top-width:0.8px] border-t-solid [border-bottom-width:0.8px] border-b-solid border-y-[#E2E8F0]">
              <div className="flex flex-col max-w-7xl w-full gap-8">
                <div className="items-end flex flex-wrap justify-between w-full gap-5">
                  <div className="flex flex-col max-w-195 gap-2.5">
                    <div className="items-center flex w-fit py-1.25 px-3 rounded-[999px] gap-2 bg-[#EAF7EE] [border-width:0.8px] border-solid border-[#0D533233]">
                      <div className="shrink-0 rounded-[999px] bg-[#0D5332] size-1.5" />
                      <div className="tracking-[0.8px] uppercase inline-block font-['JetBrains_Mono',system-ui,sans-serif] font-semibold text-[#083B23] text-[11px]/3.5">
                        Verified European Public University Admissions
                      </div>
                    </div>
                    <div className="[letter-spacing:-0.8px] font-['Newsreader',system-ui,sans-serif] font-semibold text-[#1E293B] text-[28px] sm:text-[32px]/10">
                      Direct Admissions into Top European Public Universities
                    </div>
                    <div className="font-['Inter',system-ui,sans-serif] text-[#475569] text-[15px]/6">
                      Direct matriculation and tuition-free scholarship pathways into accredited European state institutions across France, Germany, Hungary, and Finland.
                    </div>
                  </div>
                  <div className="items-center flex gap-2.5">
                    <button aria-label="Previous destination" className="items-center flex justify-center rounded-lg shrink-0 [box-shadow:#0F172A0D_0px_1px_2px] bg-white [border-width:0.8px] border-solid border-[#CBD5E1] size-9.5 hover:bg-slate-50 transition">
                      <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', flexShrink: 0 }}>
                        <polyline points="15 18 9 12 15 6" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <button aria-label="Next destination" className="items-center flex justify-center rounded-lg shrink-0 [box-shadow:#1A56DB40_0px_1px_3px] bg-[#1A56DB] [border-width:0.8px] border-solid border-[#1A56DB] size-9.5 hover:bg-[#1546B0] transition">
                      <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', flexShrink: 0 }}>
                        <polyline points="9 18 15 12 9 6" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 w-full gap-5">
                  {/* Card 1: France */}
                  <div className="flex flex-col justify-between p-5 rounded-xl gap-4 [box-shadow:#0F172A0F_0px_1px_3px] bg-white [border-width:0.8px] border-solid border-[#E2E8F0] hover:shadow-md transition">
                    <div className="flex flex-col gap-3.5">
                      <div className="items-center flex justify-between w-full">
                        <div className="items-center flex py-0.75 px-2 rounded-sm bg-[#EFF6FF] [border-width:0.8px] border-solid border-[#DBEAFE]">
                          <div className="tracking-[0.5px] uppercase inline-block font-['JetBrains_Mono',system-ui,sans-serif] font-semibold text-[#1A56DB] text-[11px]/3.5">
                            France
                          </div>
                        </div>
                        <div className="tracking-[0.5px] uppercase inline-block font-['JetBrains_Mono',system-ui,sans-serif] font-medium text-[#64748B] text-[10px]/3">
                          Public State
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="[letter-spacing:-0.3px] font-['Newsreader',system-ui,sans-serif] font-semibold text-[#1E293B] text-lg/6">
                          University of Rennes
                        </div>
                        <div className="font-['Inter',system-ui,sans-serif] text-[#64748B] text-[13px]/4.5">
                          Rennes, Brittany
                        </div>
                      </div>
                      <div className="flex flex-col py-2.5 px-3 rounded-lg gap-1.5 bg-[#FBF9F5] [border-width:0.8px] border-solid border-[#E2E8F0]">
                        <div className="items-center flex justify-between">
                          <div className="inline-block font-['Inter',system-ui,sans-serif] text-[#64748B] text-[11px]/3.5">
                            Tuition Structure
                          </div>
                          <div className="inline-block font-['Inter',system-ui,sans-serif] font-semibold text-[#083B23] text-[11px]/3.5">
                            €243 / year
                          </div>
                        </div>
                        <div className="items-center flex justify-between">
                          <div className="inline-block font-['Inter',system-ui,sans-serif] text-[#64748B] text-[11px]/3.5">
                            Accreditation
                          </div>
                          <div className="inline-block font-['JetBrains_Mono',system-ui,sans-serif] font-semibold text-[#1E293B] text-[10px]/3">
                            QS Top 250
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="items-center flex gap-1.5">
                      <div className="rounded-[999px] shrink-0 bg-[#0D5332] size-1.5" />
                      <div className="tracking-[0.5px] uppercase inline-block font-['JetBrains_Mono',system-ui,sans-serif] font-semibold text-[#083B23] text-[10px]/3">
                        Autumn 2026 Direct
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Hungary */}
                  <div className="flex flex-col justify-between p-5 rounded-xl gap-4 [box-shadow:#0F172A0F_0px_1px_3px] bg-white [border-width:0.8px] border-solid border-[#E2E8F0] hover:shadow-md transition">
                    <div className="flex flex-col gap-3.5">
                      <div className="items-center flex justify-between w-full">
                        <div className="items-center flex py-0.75 px-2 rounded-sm bg-[#EFF6FF] [border-width:0.8px] border-solid border-[#DBEAFE]">
                          <div className="tracking-[0.5px] uppercase inline-block font-['JetBrains_Mono',system-ui,sans-serif] font-semibold text-[#1A56DB] text-[11px]/3.5">
                            Hungary
                          </div>
                        </div>
                        <div className="tracking-[0.5px] uppercase inline-block font-['JetBrains_Mono',system-ui,sans-serif] font-medium text-[#64748B] text-[10px]/3">
                          Stipendium Partner
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="[letter-spacing:-0.3px] font-['Newsreader',system-ui,sans-serif] font-semibold text-[#1E293B] text-lg/6">
                          Eötvös Loránd Univ.
                        </div>
                        <div className="font-['Inter',system-ui,sans-serif] text-[#64748B] text-[13px]/4.5">
                          Budapest, Hungary
                        </div>
                      </div>
                      <div className="flex flex-col py-2.5 px-3 rounded-lg gap-1.5 bg-[#FBF9F5] [border-width:0.8px] border-solid border-[#E2E8F0]">
                        <div className="items-center flex justify-between">
                          <div className="inline-block font-['Inter',system-ui,sans-serif] text-[#64748B] text-[11px]/3.5">
                            Tuition Structure
                          </div>
                          <div className="inline-block font-['Inter',system-ui,sans-serif] font-semibold text-[#083B23] text-[11px]/3.5">
                            100% Scholarship
                          </div>
                        </div>
                        <div className="items-center flex justify-between">
                          <div className="inline-block font-['Inter',system-ui,sans-serif] text-[#64748B] text-[11px]/3.5">
                            Accreditation
                          </div>
                          <div className="inline-block font-['JetBrains_Mono',system-ui,sans-serif] font-semibold text-[#1E293B] text-[10px]/3">
                            #1 in Hungary
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="items-center flex gap-1.5">
                      <div className="rounded-[999px] shrink-0 bg-[#0D5332] size-1.5" />
                      <div className="tracking-[0.5px] uppercase inline-block font-['JetBrains_Mono',system-ui,sans-serif] font-semibold text-[#083B23] text-[10px]/3">
                        Autumn 2026 Direct
                      </div>
                    </div>
                  </div>

                  {/* Card 3: France Bourgogne */}
                  <div className="flex flex-col justify-between p-5 rounded-xl gap-4 [box-shadow:#0F172A0F_0px_1px_3px] bg-white [border-width:0.8px] border-solid border-[#E2E8F0] hover:shadow-md transition">
                    <div className="flex flex-col gap-3.5">
                      <div className="items-center flex justify-between w-full">
                        <div className="items-center flex py-0.75 px-2 rounded-sm bg-[#EFF6FF] [border-width:0.8px] border-solid border-[#DBEAFE]">
                          <div className="tracking-[0.5px] uppercase inline-block font-['JetBrains_Mono',system-ui,sans-serif] font-semibold text-[#1A56DB] text-[11px]/3.5">
                            France
                          </div>
                        </div>
                        <div className="tracking-[0.5px] uppercase inline-block font-['JetBrains_Mono',system-ui,sans-serif] font-medium text-[#64748B] text-[10px]/3">
                          State Excellence
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="[letter-spacing:-0.3px] font-['Newsreader',system-ui,sans-serif] font-semibold text-[#1E293B] text-lg/6">
                          Univ. de Bourgogne
                        </div>
                        <div className="font-['Inter',system-ui,sans-serif] text-[#64748B] text-[13px]/4.5">
                          Dijon, France
                        </div>
                      </div>
                      <div className="flex flex-col py-2.5 px-3 rounded-lg gap-1.5 bg-[#FBF9F5] [border-width:0.8px] border-solid border-[#E2E8F0]">
                        <div className="items-center flex justify-between">
                          <div className="inline-block font-['Inter',system-ui,sans-serif] text-[#64748B] text-[11px]/3.5">
                            Tuition Structure
                          </div>
                          <div className="inline-block font-['Inter',system-ui,sans-serif] font-semibold text-[#083B23] text-[11px]/3.5">
                            €170 / year
                          </div>
                        </div>
                        <div className="items-center flex justify-between">
                          <div className="inline-block font-['Inter',system-ui,sans-serif] text-[#64748B] text-[11px]/3.5">
                            Accreditation
                          </div>
                          <div className="inline-block font-['JetBrains_Mono',system-ui,sans-serif] font-semibold text-[#1E293B] text-[10px]/3">
                            National Research
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="items-center flex gap-1.5">
                      <div className="rounded-[999px] shrink-0 bg-[#0D5332] size-1.5" />
                      <div className="tracking-[0.5px] uppercase inline-block font-['JetBrains_Mono',system-ui,sans-serif] font-semibold text-[#083B23] text-[10px]/3">
                        Autumn 2026 Direct
                      </div>
                    </div>
                  </div>

                  {/* Card 4: Germany TUM */}
                  <div className="flex flex-col justify-between p-5 rounded-xl gap-4 [box-shadow:#0F172A0F_0px_1px_3px] bg-white [border-width:0.8px] border-solid border-[#E2E8F0] hover:shadow-md transition">
                    <div className="flex flex-col gap-3.5">
                      <div className="items-center flex justify-between w-full">
                        <div className="items-center flex py-0.75 px-2 rounded-sm bg-[#EFF6FF] [border-width:0.8px] border-solid border-[#DBEAFE]">
                          <div className="tracking-[0.5px] uppercase inline-block font-['JetBrains_Mono',system-ui,sans-serif] font-semibold text-[#1A56DB] text-[11px]/3.5">
                            Germany
                          </div>
                        </div>
                        <div className="tracking-[0.5px] uppercase inline-block font-['JetBrains_Mono',system-ui,sans-serif] font-medium text-[#64748B] text-[10px]/3">
                          TU9 Member
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="[letter-spacing:-0.3px] font-['Newsreader',system-ui,sans-serif] font-semibold text-[#1E293B] text-lg/6">
                          TU Munich (TUM)
                        </div>
                        <div className="font-['Inter',system-ui,sans-serif] text-[#64748B] text-[13px]/4.5">
                          Munich, Germany
                        </div>
                      </div>
                      <div className="flex flex-col py-2.5 px-3 rounded-lg gap-1.5 bg-[#FBF9F5] [border-width:0.8px] border-solid border-[#E2E8F0]">
                        <div className="items-center flex justify-between">
                          <div className="inline-block font-['Inter',system-ui,sans-serif] text-[#64748B] text-[11px]/3.5">
                            Tuition Structure
                          </div>
                          <div className="inline-block font-['Inter',system-ui,sans-serif] font-semibold text-[#083B23] text-[11px]/3.5">
                            Nominal Semester fee
                          </div>
                        </div>
                        <div className="items-center flex justify-between">
                          <div className="inline-block font-['Inter',system-ui,sans-serif] text-[#64748B] text-[11px]/3.5">
                            Accreditation
                          </div>
                          <div className="inline-block font-['JetBrains_Mono',system-ui,sans-serif] font-semibold text-[#1E293B] text-[10px]/3">
                            QS World Top 35
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="items-center flex gap-1.5">
                      <div className="rounded-[999px] shrink-0 bg-[#0D5332] size-1.5" />
                      <div className="tracking-[0.5px] uppercase inline-block font-['JetBrains_Mono',system-ui,sans-serif] font-semibold text-[#083B23] text-[10px]/3">
                        Autumn 2026 Direct
                      </div>
                    </div>
                  </div>

                  {/* Card 5: Finland */}
                  <div className="flex flex-col justify-between p-5 rounded-xl gap-4 [box-shadow:#0F172A0F_0px_1px_3px] bg-white [border-width:0.8px] border-solid border-[#E2E8F0] hover:shadow-md transition">
                    <div className="flex flex-col gap-3.5">
                      <div className="items-center flex justify-between w-full">
                        <div className="items-center flex py-0.75 px-2 rounded-sm bg-[#EFF6FF] [border-width:0.8px] border-solid border-[#DBEAFE]">
                          <div className="tracking-[0.5px] uppercase inline-block font-['JetBrains_Mono',system-ui,sans-serif] font-semibold text-[#1A56DB] text-[11px]/3.5">
                            Finland
                          </div>
                        </div>
                        <div className="tracking-[0.5px] uppercase inline-block font-['JetBrains_Mono',system-ui,sans-serif] font-medium text-[#64748B] text-[10px]/3">
                          Nordic Research
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="[letter-spacing:-0.3px] font-['Newsreader',system-ui,sans-serif] font-semibold text-[#1E293B] text-lg/6">
                          Univ. of Helsinki
                        </div>
                        <div className="font-['Inter',system-ui,sans-serif] text-[#64748B] text-[13px]/4.5">
                          Helsinki, Finland
                        </div>
                      </div>
                      <div className="flex flex-col py-2.5 px-3 rounded-lg gap-1.5 bg-[#FBF9F5] [border-width:0.8px] border-solid border-[#E2E8F0]">
                        <div className="items-center flex justify-between">
                          <div className="inline-block font-['Inter',system-ui,sans-serif] text-[#64748B] text-[11px]/3.5">
                            Tuition Structure
                          </div>
                          <div className="inline-block font-['Inter',system-ui,sans-serif] font-semibold text-[#083B23] text-[11px]/3.5">
                            Merit Waivers
                          </div>
                        </div>
                        <div className="items-center flex justify-between">
                          <div className="inline-block font-['Inter',system-ui,sans-serif] text-[#64748B] text-[11px]/3.5">
                            Accreditation
                          </div>
                          <div className="inline-block font-['JetBrains_Mono',system-ui,sans-serif] font-semibold text-[#1E293B] text-[10px]/3">
                            Top 1% Global
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="items-center flex gap-1.5">
                      <div className="rounded-[999px] shrink-0 bg-[#0D5332] size-1.5" />
                      <div className="tracking-[0.5px] uppercase inline-block font-['JetBrains_Mono',system-ui,sans-serif] font-semibold text-[#083B23] text-[10px]/3">
                        Autumn 2026 Direct
                      </div>
                    </div>
                  </div>
                </div>

                <div className="items-center flex justify-center w-full pt-2 gap-2">
                  <div className="h-1 w-8 rounded-[999px] shrink-0 bg-[#1A56DB]" />
                  <div className="h-1 w-2 rounded-[999px] shrink-0 bg-[#CBD5E1]" />
                  <div className="h-1 w-2 rounded-[999px] shrink-0 bg-[#CBD5E1]" />
                  <div className="h-1 w-2 rounded-[999px] shrink-0 bg-[#CBD5E1]" />
                </div>
              </div>
            </div>

            {/* WHY CHOOSE US & RESOURCES */}
            <div id="why-us" className="items-center flex flex-col w-full py-20 px-4 sm:px-6 lg:px-8 bg-white [border-bottom-width:0.8px] border-b-solid border-b-[#E2E8F0]">
              <div className="flex flex-col lg:flex-row max-w-7xl w-full gap-10">
                {/* Left Dark Card */}
                <div className="flex flex-col justify-between py-9 px-6 sm:px-8 rounded-2xl gap-7 [box-shadow:#0F172A1F_0px_4px_20px_-2px] bg-[#0F172A] [border-width:0.8px] border-solid border-[#1E293B] lg:w-1/2">
                  <div className="flex flex-col gap-3.5">
                    <div className="items-center flex w-fit py-1.25 px-3 rounded-[999px] gap-2 bg-[#1E293B] [border-width:0.8px] border-solid border-[#334155]">
                      <div className="rounded-[999px] shrink-0 bg-[#34D399] size-1.5" />
                      <div className="tracking-[0.8px] uppercase inline-block font-['JetBrains_Mono',system-ui,sans-serif] font-semibold text-[#34D399] text-[11px]/3.5">
                        Alumni Advisory Founded 2024 • Formalized 2025 • European Board
                      </div>
                    </div>
                    <div className="[letter-spacing:-0.8px] font-['Newsreader',system-ui,sans-serif] font-semibold text-[#F8FAFC] text-[28px] sm:text-[32px]/10">
                      Why ambitious students choose Jum Study Abroad
                    </div>
                    <div className="font-['Inter',system-ui,sans-serif] text-[#94A3B8] text-sm/5.5">
                      Every year, thousands of students dream of a global degree, but the path is clouded by confusion and conflicting advice. We built JSA on radical transparency and verifiable admissions.
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col py-4 px-4.5 rounded-xl gap-1.5 bg-[#1E293B60] [border-width:0.8px] border-solid border-[#33415560]">
                      <div className="items-center flex gap-2.5">
                        <div className="py-0.5 px-2 rounded-sm bg-[#0284C720] [border-width:0.8px] border-solid border-[#38BDF840]">
                          <div className="font-['JetBrains_Mono',system-ui,sans-serif] font-semibold text-[#38BDF8] text-[11px]/3.5">
                            01
                          </div>
                        </div>
                        <div className="font-['Inter',system-ui,sans-serif] font-semibold text-white text-[15px]/5">
                          Founded by European Alumni
                        </div>
                      </div>
                      <div className="font-['Inter',system-ui,sans-serif] text-[#CBD5E1] text-[13px]/5">
                        Having navigated the hurdles ourselves in France and Germany, we founded JSA in 2025 to offer the transparent, empathetic guidance we needed back then.
                      </div>
                    </div>
                    <div className="flex flex-col py-4 px-4.5 rounded-xl gap-1.5 bg-[#1E293B60] [border-width:0.8px] border-solid border-[#33415560]">
                      <div className="items-center flex gap-2.5">
                        <div className="py-0.5 px-2 rounded-sm bg-[#0284C720] [border-width:0.8px] border-solid border-[#38BDF840]">
                          <div className="font-['JetBrains_Mono',system-ui,sans-serif] font-semibold text-[#38BDF8] text-[11px]/3.5">
                            02
                          </div>
                        </div>
                        <div className="font-['Inter',system-ui,sans-serif] font-semibold text-white text-[15px]/5">
                          100% Visa Track Record
                        </div>
                      </div>
                      <div className="font-['Inter',system-ui,sans-serif] text-[#CBD5E1] text-[13px]/5">
                        Through rigorous document vetting and comprehensive 1-on-1 embassy interview preparation, we achieved a perfect 100% visa success rate in our inaugural cohort (97.2% cumulative across 1,240+ students).
                      </div>
                    </div>
                    <div className="flex flex-col py-4 px-4.5 rounded-xl gap-1.5 bg-[#1E293B60] [border-width:0.8px] border-solid border-[#33415560]">
                      <div className="items-center flex gap-2.5">
                        <div className="py-0.5 px-2 rounded-sm bg-[#0284C720] [border-width:0.8px] border-solid border-[#38BDF840]">
                          <div className="font-['JetBrains_Mono',system-ui,sans-serif] font-semibold text-[#38BDF8] text-[11px]/3.5">
                            03
                          </div>
                        </div>
                        <div className="font-['Inter',system-ui,sans-serif] font-semibold text-white text-[15px]/5">
                          Direct Fees &amp; Dedicated Family Support
                        </div>
                      </div>
                      <div className="font-['Inter',system-ui,sans-serif] text-[#CBD5E1] text-[13px]/5">
                        Students pay official tuition and semester fees directly to European universities with zero hidden agency markups. We stand beside families at every step.
                      </div>
                    </div>
                  </div>
                  <div className="items-center flex flex-wrap justify-between py-3 px-4 rounded-lg bg-[#1E293B80] [border-width:0.8px] border-solid border-[#33415580] gap-2">
                    <div className="tracking-[0.5px] uppercase inline-block font-['JetBrains_Mono',system-ui,sans-serif] font-semibold text-[#94A3B8] text-[10px]/3">
                      0% Agency Markups
                    </div>
                    <div className="inline-block font-['Inter',system-ui,sans-serif] text-[#475569] text-base/5">
                      •
                    </div>
                    <div className="tracking-[0.5px] uppercase inline-block font-['JetBrains_Mono',system-ui,sans-serif] font-semibold text-[#94A3B8] text-[10px]/3">
                      Direct Tuition
                    </div>
                    <div className="inline-block font-['Inter',system-ui,sans-serif] text-[#475569] text-base/5">
                      •
                    </div>
                    <div className="tracking-[0.5px] uppercase inline-block font-['JetBrains_Mono',system-ui,sans-serif] font-semibold text-[#94A3B8] text-[10px]/3">
                      CHT Peer Network
                    </div>
                  </div>
                </div>

                {/* Right Resources Column */}
                <div className="flex flex-col justify-between gap-6 lg:w-1/2">
                  <div className="flex flex-col gap-2.5">
                    <div className="items-center flex w-fit py-1.25 px-3 rounded-[999px] gap-2 bg-[#EFF6FF] [border-width:0.8px] border-solid border-[#DBEAFE]">
                      <div className="rounded-[999px] shrink-0 bg-[#1A56DB] size-1.5" />
                      <div className="tracking-[0.8px] uppercase inline-block font-['JetBrains_Mono',system-ui,sans-serif] font-semibold text-[#1A56DB] text-[11px]/3.5">
                        Resources &amp; Admissions Briefs
                      </div>
                    </div>
                    <div className="[letter-spacing:-0.8px] font-['Newsreader',system-ui,sans-serif] font-semibold text-[#1E293B] text-[28px] sm:text-[32px]/10">
                      Helpful guides and tips
                    </div>
                    <div className="font-['Inter',system-ui,sans-serif] text-[#475569] text-[15px]/5.5">
                      Practical, verified advice to help students and parents make informed academic and visa decisions.
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    {/* Article 1 */}
                    <div className="items-center flex flex-col sm:flex-row p-3 rounded-xl overflow-clip min-h-0 gap-4 [box-shadow:#0F172A0A_0px_1px_2px] bg-white [border-width:0.8px] border-solid border-[#E2E8F0] hover:shadow-md transition">
                      <div className="shrink-0 h-28 sm:h-25 w-full sm:w-32.5 rounded-lg bg-cover bg-position-[50%]" style={{ backgroundImage: 'url(https://app.paper.design/file-assets/01M6ED75HD2EFSGQRKZZDBN2EX/7Q402JDPR496D4YY4X3TSQS8AJ.png)' }} />
                      <div className="flex flex-col grow justify-between gap-1.5 w-full">
                        <div className="items-center flex justify-between w-full">
                          <div className="tracking-[0.5px] uppercase inline-block font-['JetBrains_Mono',system-ui,sans-serif] font-semibold text-[#1A56DB] text-[11px]/3.5">
                            Admissions Tips
                          </div>
                          <div className="inline-block font-['Inter',system-ui,sans-serif] text-[#64748B] text-xs/4">
                            Oct 12, 2024
                          </div>
                        </div>
                        <div className="[letter-spacing:-0.2px] font-['Newsreader',system-ui,sans-serif] font-semibold text-[#1E293B] text-[17px]/5.5">
                          How to choose the right university for your major
                        </div>
                        <div className="items-center flex gap-1.5 cursor-pointer text-[#1A56DB] hover:text-[#1546B0]">
                          <span className="inline-block font-['Inter',system-ui,sans-serif] font-semibold text-inherit text-[13px]/4">
                            Read Article
                          </span>
                          <svg width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', flexShrink: 0 }}>
                            <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <polyline points="12 5 19 12 12 19" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Article 2 */}
                    <div className="items-center flex flex-col sm:flex-row p-3 rounded-xl overflow-clip min-h-0 gap-4 [box-shadow:#0F172A0A_0px_1px_2px] bg-white [border-width:0.8px] border-solid border-[#E2E8F0] hover:shadow-md transition">
                      <div className="shrink-0 h-28 sm:h-25 w-full sm:w-32.5 rounded-lg bg-cover bg-position-[50%]" style={{ backgroundImage: 'url(https://app.paper.design/file-assets/01M6ED75HD2EFSGQRKZZDBN2EX/49PHBJ5Q985DV43V7FQBTR1GRE.png)' }} />
                      <div className="flex flex-col grow justify-between gap-1.5 w-full">
                        <div className="items-center flex justify-between w-full">
                          <div className="tracking-[0.5px] uppercase inline-block font-['JetBrains_Mono',system-ui,sans-serif] font-semibold text-[#1A56DB] text-[11px]/3.5">
                            Scholarships
                          </div>
                          <div className="inline-block font-['Inter',system-ui,sans-serif] text-[#64748B] text-xs/4">
                            Aug 15, 2024
                          </div>
                        </div>
                        <div className="[letter-spacing:-0.2px] font-['Newsreader',system-ui,sans-serif] font-semibold text-[#1E293B] text-[17px]/5.5">
                          Scholarship tips: how to increase your chances
                        </div>
                        <div className="items-center flex gap-1.5 cursor-pointer text-[#1A56DB] hover:text-[#1546B0]">
                          <span className="inline-block font-['Inter',system-ui,sans-serif] font-semibold text-inherit text-[13px]/4">
                            Read Article
                          </span>
                          <svg width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', flexShrink: 0 }}>
                            <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <polyline points="12 5 19 12 12 19" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Article 3 */}
                    <div className="items-center flex flex-col sm:flex-row p-3 rounded-xl overflow-clip min-h-0 gap-4 [box-shadow:#0F172A0A_0px_1px_2px] bg-white [border-width:0.8px] border-solid border-[#E2E8F0] hover:shadow-md transition">
                      <div className="shrink-0 h-28 sm:h-25 w-full sm:w-32.5 rounded-lg bg-cover bg-position-[50%]" style={{ backgroundImage: 'url(https://app.paper.design/file-assets/01M6ED75HD2EFSGQRKZZDBN2EX/7YJQ6F6CJ9E2VTCFDMQED93Y0Z.png)' }} />
                      <div className="flex flex-col grow justify-between gap-1.5 w-full">
                        <div className="items-center flex justify-between w-full">
                          <div className="tracking-[0.5px] uppercase inline-block font-['JetBrains_Mono',system-ui,sans-serif] font-semibold text-[#1A56DB] text-[11px]/3.5">
                            Visa Guide
                          </div>
                          <div className="inline-block font-['Inter',system-ui,sans-serif] text-[#64748B] text-xs/4">
                            Sep 28, 2024
                          </div>
                        </div>
                        <div className="[letter-spacing:-0.2px] font-['Newsreader',system-ui,sans-serif] font-semibold text-[#1E293B] text-[17px]/5.5">
                          Visa interview checklist: what to prepare and what to say
                        </div>
                        <div className="items-center flex gap-1.5 cursor-pointer text-[#1A56DB] hover:text-[#1546B0]">
                          <span className="inline-block font-['Inter',system-ui,sans-serif] font-semibold text-inherit text-[13px]/4">
                            Read Article
                          </span>
                          <svg width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', flexShrink: 0 }}>
                            <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <polyline points="12 5 19 12 12 19" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ELIGIBILITY CHECKER */}
            <div id="eligibility" className="py-24 [background:radial-gradient(rgb(203,213,225)_0.75px,rgba(0,0,0,0)_0.75px)_0px_0px/24px_24px,radial-gradient(rgb(203,213,225)_0.75px,rgb(251,249,245)_0.75px)_12px_12px/24px_24px] [border-bottom-width:0.8px] border-b-solid border-b-[#E2E8F0]">
              <div className="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto">
                <div className="mb-10 max-w-2xl text-center mx-auto">
                  <div className="[letter-spacing:-0.75px] mb-3 text-center wrap-normal font-['Newsreader',system-ui,sans-serif] font-semibold text-[#1E293B] text-2xl sm:text-3xl/9">
                    Free European University Eligibility Checker.
                  </div>
                  <div className="text-center wrap-normal font-['Inter',system-ui,sans-serif] text-[#475569] text-base/6">
                    Find out which tuition-free and low-cost European public universities match your academic background, test scores, and budget in under 2 minutes. No credit card, no forced signup.
                  </div>
                </div>
                <div className="rounded-xl overflow-clip [box-shadow:#0F172A14_0px_1px_3px,#0F172A0F_0px_8px_24px_-4px] bg-white [border-width:0.8px] border-solid border-[#CBD5E1]">
                  <div className="items-center flex justify-between py-4 px-6 bg-[#F5F0E6] [border-bottom-width:0.8px] border-b-solid border-b-[#E2E8F0]">
                    <div className="items-center flex gap-3">
                      <div className="tracking-[0.6px] uppercase wrap-normal font-['JetBrains_Mono',system-ui,sans-serif] font-semibold text-[#1A56DB] text-xs/4">
                        Step 1 of 3
                      </div>
                      <div className="wrap-normal font-['Inter',system-ui,sans-serif] text-[#475569] text-xs/4">
                        • Target Degree &amp; Field
                      </div>
                    </div>
                    <div className="items-center flex gap-1.5">
                      <div className="h-1.5 w-6 rounded-full shrink-0 bg-[#1A56DB]" />
                      <div className="h-1.5 w-6 rounded-full shrink-0 bg-[#E2E8F0]" />
                      <div className="h-1.5 w-6 rounded-full shrink-0 bg-[#E2E8F0]" />
                    </div>
                  </div>
                  <div className="p-6 sm:p-8">
                    <div>
                      <div>
                        <div className="mb-2 wrap-normal font-['Inter',system-ui,sans-serif] font-semibold text-[#1E293B] text-sm/5">
                          1. What level of degree are you applying for?
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <div className="content-center p-4 rounded-lg bg-white [border-width:0.8px] border-solid border-[#E2E8F0] cursor-pointer hover:border-slate-400 transition">
                            <div className="wrap-normal font-['Inter',system-ui,sans-serif] text-[#1E293B] text-sm/5">
                              Bachelor's Degree
                            </div>
                            <div className="text-[11px] mt-0.5 leading-[150%] wrap-normal font-['Inter',system-ui,sans-serif] text-[#475569]">
                              After HSC / A-Levels
                            </div>
                          </div>
                          <div className="content-center p-4 rounded-lg [box-shadow:#FFFFFF_0px_0px_0px,#1A56DB_0px_0px_0px_1px] bg-[#F0F5FF] [border-width:0.8px] border-solid border-[#1A56DB] cursor-pointer">
                            <div className="wrap-normal font-['Inter',system-ui,sans-serif] font-semibold text-[#1A56DB] text-sm/5">
                              Master's Degree
                            </div>
                            <div className="text-[11px] mt-0.5 leading-[150%] wrap-normal font-['Inter',system-ui,sans-serif] font-semibold text-[#475569]">
                              After Bachelor’s
                            </div>
                          </div>
                          <div className="content-center p-4 rounded-lg bg-white [border-width:0.8px] border-solid border-[#E2E8F0] cursor-pointer hover:border-slate-400 transition">
                            <div className="wrap-normal font-['Inter',system-ui,sans-serif] text-[#1E293B] text-sm/5">
                              PhD / Research
                            </div>
                            <div className="text-[11px] mt-0.5 leading-[150%] wrap-normal font-['Inter',system-ui,sans-serif] text-[#475569]">
                              After Master’s
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6">
                        <div className="mb-2 wrap-normal font-['Inter',system-ui,sans-serif] font-semibold text-[#1E293B] text-sm/5">
                          2. Select your broad field of academic interest:
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                          <div className="h-auto sm:h-24 flex flex-col justify-between p-3.5 rounded-lg [box-shadow:#FFFFFF_0px_0px_0px,#1A56DB_0px_0px_0px_1px] bg-[#F0F5FF] [border-width:0.8px] border-solid border-[#1A56DB] cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" fontSize="12px" fontWeight="600" style={{ height: '16px', width: '16px', marginBottom: '8px', overflow: 'clip', minHeight: '0px', flexShrink: 0 }}>
                              <path d="M12 10h.01" fontSize="12px" fontWeight="600" fill="none" stroke="#1A56DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ boxSizing: 'border-box', transformOrigin: '0px 0px' }} />
                              <path d="M12 14h.01" fontSize="12px" fontWeight="600" fill="none" stroke="#1A56DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ boxSizing: 'border-box', transformOrigin: '0px 0px' }} />
                              <path d="M12 6h.01" fontSize="12px" fontWeight="600" fill="none" stroke="#1A56DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ boxSizing: 'border-box', transformOrigin: '0px 0px' }} />
                              <path d="M16 10h.01" fontSize="12px" fontWeight="600" fill="none" stroke="#1A56DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ boxSizing: 'border-box', transformOrigin: '0px 0px' }} />
                              <path d="M16 14h.01" fontSize="12px" fontWeight="600" fill="none" stroke="#1A56DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ boxSizing: 'border-box', transformOrigin: '0px 0px' }} />
                              <path d="M16 6h.01" fontSize="12px" fontWeight="600" fill="none" stroke="#1A56DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ boxSizing: 'border-box', transformOrigin: '0px 0px' }} />
                              <path d="M8 10h.01" fontSize="12px" fontWeight="600" fill="none" stroke="#1A56DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ boxSizing: 'border-box', transformOrigin: '0px 0px' }} />
                              <path d="M8 14h.01" fontSize="12px" fontWeight="600" fill="none" stroke="#1A56DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ boxSizing: 'border-box', transformOrigin: '0px 0px' }} />
                              <path d="M8 6h.01" fontSize="12px" fontWeight="600" fill="none" stroke="#1A56DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ boxSizing: 'border-box', transformOrigin: '0px 0px' }} />
                              <path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" fontSize="12px" fontWeight="600" fill="none" stroke="#1A56DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ boxSizing: 'border-box', transformOrigin: '0px 0px' }} />
                              <rect x="4" y="2" width="16" height="20" rx="2" fontSize="12px" fontWeight="600" fill="none" stroke="#1A56DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ height: '20px', boxSizing: 'border-box', width: '16px', transformOrigin: '0px 0px' }} />
                            </svg>
                            <div className="text-[12px] leading-[137.5%] wrap-normal font-['Inter',system-ui,sans-serif] font-semibold text-[#1A56DB]">
                              Computer Science &amp; Engineering
                            </div>
                          </div>
                          <div className="h-auto sm:h-24 flex flex-col justify-between p-3.5 rounded-lg bg-white [border-width:0.8px] border-solid border-[#E2E8F0] cursor-pointer hover:border-slate-400 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" fontSize="12px" style={{ height: '16px', width: '16px', marginBottom: '8px', overflow: 'clip', minHeight: '0px', flexShrink: 0 }}>
                              <path d="M12 3v18" fontSize="12px" fill="none" stroke="#1A56DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ boxSizing: 'border-box', transformOrigin: '0px 0px' }} />
                              <path d="M17 5H9.5a1 1 0 000 7h5a1 1 0 010 7H6" fontSize="12px" fill="none" stroke="#1A56DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ boxSizing: 'border-box', transformOrigin: '0px 0px' }} />
                            </svg>
                            <div className="text-[12px] leading-[137.5%] wrap-normal font-['Inter',system-ui,sans-serif] text-[#1E293B]">
                              Business &amp; Management
                            </div>
                          </div>
                          <div className="h-auto sm:h-24 flex flex-col justify-between p-3.5 rounded-lg bg-white [border-width:0.8px] border-solid border-[#E2E8F0] cursor-pointer hover:border-slate-400 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" fontSize="12px" style={{ height: '16px', width: '16px', marginBottom: '8px', overflow: 'clip', minHeight: '0px', flexShrink: 0 }}>
                              <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" fontSize="12px" fill="none" stroke="#1A56DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ boxSizing: 'border-box', transformOrigin: '0px 0px' }} />
                              <path d="M22 10v6" fontSize="12px" fill="none" stroke="#1A56DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ boxSizing: 'border-box', transformOrigin: '0px 0px' }} />
                              <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" fontSize="12px" fill="none" stroke="#1A56DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ boxSizing: 'border-box', transformOrigin: '0px 0px' }} />
                            </svg>
                            <div className="text-[12px] leading-[137.5%] wrap-normal font-['Inter',system-ui,sans-serif] text-[#1E293B]">
                              Humanities &amp; Social Sciences
                            </div>
                          </div>
                          <div className="h-auto sm:h-24 flex flex-col justify-between p-3.5 rounded-lg bg-white [border-width:0.8px] border-solid border-[#E2E8F0] cursor-pointer hover:border-slate-400 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" fontSize="12px" style={{ height: '16px', width: '16px', marginBottom: '8px', overflow: 'clip', minHeight: '0px', flexShrink: 0 }}>
                              <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" fontSize="12px" fill="none" stroke="#1A56DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ boxSizing: 'border-box', transformOrigin: '0px 0px' }} />
                              <circle cx="12" cy="8" r="6" fontSize="12px" fill="none" stroke="#1A56DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ boxSizing: 'border-box', transformOrigin: '0px 0px' }} />
                            </svg>
                            <div className="text-[12px] leading-[137.5%] wrap-normal font-['Inter',system-ui,sans-serif] text-[#1E293B]">
                              Life Sciences &amp; Public Health
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-end mt-6 pt-4">
                        <button className="items-center flex justify-center text-center py-2.5 px-5 rounded-lg bg-[#1A56DB] hover:bg-[#1546B0] transition cursor-pointer text-white">
                          <span className="inline-block text-center wrap-normal font-['Inter',system-ui,sans-serif] font-semibold text-white text-sm/5">
                            Next: Academic &amp; Language Profile
                          </span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" fontSize="14px" fontWeight="600" style={{ height: '16px', width: '16px', marginLeft: '6px', overflow: 'clip', minWidth: '0px', flexShrink: 0 }}>
                            <path d="M5 12h14" fontSize="14px" fontWeight="600" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ boxSizing: 'border-box', transformOrigin: '0px 0px' }} />
                            <path d="m12 5 7 7-7 7" fontSize="14px" fontWeight="600" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ boxSizing: 'border-box', transformOrigin: '0px 0px' }} />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* TESTIMONIALS */}
            <div id="alumni" className="items-center flex flex-col w-full pt-20 pb-22 bg-[#FAF8F5] [border-top-width:0.8px] border-t-solid [border-bottom-width:0.8px] border-b-solid border-y-[#E2E8F0]">
              <div className="flex flex-col max-w-7xl w-full items-center px-4 sm:px-6 lg:px-8 gap-12">
                <div className="items-center flex flex-col max-w-190 text-center w-full gap-3.5">
                  <div className="items-center flex w-fit py-1.5 px-3.5 rounded-[999px] gap-2 bg-[#EAF7EE] [border-width:0.8px] border-solid border-[#0D533240]">
                    <div className="rounded-[999px] shrink-0 bg-[#0D5332] size-1.75" />
                    <div className="tracking-[0.6px] uppercase inline-block text-center font-['JetBrains_Mono',system-ui,sans-serif] font-semibold text-[#083B23] text-[11px]/3.5">
                      Direct Voices • 100% Authentic Community Proof
                    </div>
                  </div>
                  <div className="text-[32px] sm:text-[38px] [letter-spacing:-0.8px] leading-[118%] text-center font-['Newsreader',system-ui,sans-serif] font-semibold text-[#0F172A]">
                    What students and families say about Jum Study Abroad
                  </div>
                  <div className="text-center font-['Inter',system-ui,sans-serif] text-[#475569] text-base/6.25">
                    Real experiences from Bangladeshi and indigenous Jumma students who navigated admissions, blocked accounts, and embassy interviews with zero agency markups.
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-6">
                  {/* Testimonial 1 */}
                  <div className="flex flex-col justify-between min-w-0 rounded-2xl overflow-clip [box-shadow:#D9770614_0px_4px_20px_-2px] bg-white [border-width:0.8px] border-solid border-[#FDE68A]">
                    <div className="flex flex-col pt-5.5 pb-4.5 gap-3.5 px-5.5 bg-[#FFFDF7] [border-bottom-width:0.8px] border-b-solid border-b-[#FEF3C7]">
                      <div className="items-center flex justify-between w-full">
                        <div className="items-center flex gap-3">
                          <div className="shrink-0 rounded-[999px] bg-origin-border bg-cover bg-position-[50%] border-2 border-solid border-[#F59E0B] size-11" style={{ backgroundImage: 'url(https://app.paper.design/file-assets/01M6ED75HD2EFSGQRKZZDBN2EX/2V8G2VCVVRF65C637DZSVY0GEJ.png)' }} />
                          <div className="flex flex-col gap-0.5">
                            <div className="inline-block font-['Inter',system-ui,sans-serif] font-bold text-[#0F172A] text-[15px]/5">
                              Ananta Tripura
                            </div>
                            <div className="inline-block font-['Inter',system-ui,sans-serif] font-semibold text-[#B45309] text-xs/4">
                              Parent • Khagrachari, CHT
                            </div>
                          </div>
                        </div>
                        <div className="items-center flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', flexShrink: 0 }}>
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="#F59E0B" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <div className="items-center flex w-fit py-1 px-2.5 rounded-md gap-1.5 bg-[#FEF3C7] [border-width:0.8px] border-solid border-[#FDE68A]">
                        <div className="tracking-[0.5px] uppercase inline-block font-['JetBrains_Mono',system-ui,sans-serif] font-bold text-[#92400E] text-[10px]/3">
                          Community Elder &amp; Parent
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col grow basis-[0%] p-5.5 gap-4">
                      <div className="py-3.5 px-4 bg-[#FEF3C740] [border-left-width:3px] border-l-solid border-l-[#D97706] rounded-r-lg">
                        <div className="font-['Inter',system-ui,sans-serif] italic text-[#334155] text-[13.5px]/5.5">
                          "The scholarship guidance was incredibly helpful. In the Hill Tracts, commercial brokers try to exploit parents with inflated fees. JSA explained everything honestly and made public university admission achievable with zero commission."
                        </div>
                      </div>
                    </div>
                    <div className="items-center flex justify-between py-3 px-5.5 bg-[#FFFDF7] [border-top-width:0.8px] border-t-solid border-t-[#FEF3C7]">
                      <div className="inline-block font-['JetBrains_Mono',system-ui,sans-serif] text-[#94A3B8] text-[11px]/3.5">
                        Dossier: JSA-TR-2024
                      </div>
                      <div className="inline-block font-['Inter',system-ui,sans-serif] font-semibold text-[#B45309] text-[11px]/3.5">
                        Verified Parent
                      </div>
                    </div>
                  </div>

                  {/* Testimonial 2 */}
                  <div className="flex flex-col justify-between min-w-0 rounded-2xl overflow-clip [box-shadow:#1A56DB14_0px_4px_20px_-2px] bg-white [border-width:0.8px] border-solid border-[#BFDBFE]">
                    <div className="flex flex-col pt-5.5 pb-4.5 gap-3.5 px-5.5 bg-[#F8FAFF] [border-bottom-width:0.8px] border-b-solid border-b-[#DBEAFE]">
                      <div className="items-center flex justify-between w-full">
                        <div className="items-center flex gap-3">
                          <div className="shrink-0 rounded-[999px] bg-origin-border bg-cover bg-position-[50%] border-2 border-solid border-[#1A56DB] size-11" style={{ backgroundImage: 'url(https://app.paper.design/file-assets/01M6ED75HD2EFSGQRKZZDBN2EX/3H72SG59AWAX3CK44B78YN8KXY.png)' }} />
                          <div className="flex flex-col gap-0.5">
                            <div className="inline-block font-['Inter',system-ui,sans-serif] font-bold text-[#0F172A] text-[15px]/5">
                              Binoy Chakma
                            </div>
                            <div className="inline-block font-['Inter',system-ui,sans-serif] font-semibold text-[#1A56DB] text-xs/4">
                              University of Rennes 🇫🇷
                            </div>
                          </div>
                        </div>
                        <div className="items-center flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', flexShrink: 0 }}>
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="#F59E0B" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <div className="items-center flex w-fit py-1 px-2.5 rounded-md gap-1.5 bg-[#EFF6FF] [border-width:0.8px] border-solid border-[#BFDBFE]">
                        <div className="tracking-[0.5px] uppercase inline-block font-['JetBrains_Mono',system-ui,sans-serif] font-bold text-[#1E40AF] text-[10px]/3">
                          France • €243/yr Partial Exemption
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col grow basis-[0%] p-5.5 gap-4">
                      <div className="py-3.5 px-4 bg-[#EFF6FF59] [border-left-width:3px] border-l-solid border-l-[#1A56DB] rounded-r-lg">
                        <div className="font-['Inter',system-ui,sans-serif] italic text-[#334155] text-[13.5px]/5.5">
                          "The team explained everything clearly and helped me stay on track. I only paid the direct university matriculation fee of €243. I felt fully supported from the first consultation right through my embassy interview."
                        </div>
                      </div>
                    </div>
                    <div className="items-center flex justify-between py-3 px-5.5 bg-[#F8FAFF] [border-top-width:0.8px] border-t-solid border-t-[#DBEAFE]">
                      <div className="inline-block font-['JetBrains_Mono',system-ui,sans-serif] text-[#94A3B8] text-[11px]/3.5">
                        Dossier: JSA-FR-2024-084
                      </div>
                      <div className="inline-block font-['Inter',system-ui,sans-serif] font-semibold text-[#1A56DB] text-[11px]/3.5">
                        Currently in France
                      </div>
                    </div>
                  </div>

                  {/* Testimonial 3 */}
                  <div className="flex flex-col justify-between min-w-0 rounded-2xl overflow-clip [box-shadow:#0D533214_0px_4px_20px_-2px] bg-white [border-width:0.8px] border-solid border-[#BBF7D0]">
                    <div className="flex flex-col pt-5.5 pb-4.5 gap-3.5 px-5.5 bg-[#F7FCF8] [border-bottom-width:0.8px] border-b-solid border-b-[#DCFCE7]">
                      <div className="items-center flex justify-between w-full">
                        <div className="items-center flex gap-3">
                          <div className="shrink-0 rounded-[999px] bg-origin-border bg-cover bg-position-[50%] border-2 border-solid border-[#0D5332] size-11" style={{ backgroundImage: 'url(https://app.paper.design/file-assets/01M6ED75HD2EFSGQRKZZDBN2EX/78WQH1ED7H3R1Z03AA3ZEFK9PB.png)' }} />
                          <div className="flex flex-col gap-0.5">
                            <div className="inline-block font-['Inter',system-ui,sans-serif] font-bold text-[#0F172A] text-[15px]/5">
                              Shima Marma
                            </div>
                            <div className="inline-block font-['Inter',system-ui,sans-serif] font-semibold text-[#083B23] text-xs/4">
                              Eötvös Loránd University 🇭🇺
                            </div>
                          </div>
                        </div>
                        <div className="items-center flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', flexShrink: 0 }}>
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="#F59E0B" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <div className="items-center flex w-fit py-1 px-2.5 rounded-md gap-1.5 bg-[#EAF7EE] [border-width:0.8px] border-solid border-[#BBF7D0]">
                        <div className="tracking-[0.5px] uppercase inline-block font-['JetBrains_Mono',system-ui,sans-serif] font-bold text-[#083B23] text-[10px]/3">
                          Hungary • 100% Free + Stipend
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col grow basis-[0%] p-5.5 gap-4">
                      <div className="py-3.5 px-4 bg-[#EAF7EE59] [border-left-width:3px] border-l-solid border-l-[#0D5332] rounded-r-lg">
                        <div className="font-['Inter',system-ui,sans-serif] italic text-[#334155] text-[13.5px]/5.5">
                          "The visa checklist and interview prep were super helpful. As an indigenous student from Bandarban, I didn't feel lost at any point — everything was clearly explained and structured for success."
                        </div>
                      </div>
                    </div>
                    <div className="items-center flex justify-between py-3 px-5.5 bg-[#F7FCF8] [border-top-width:0.8px] border-t-solid border-t-[#DCFCE7]">
                      <div className="inline-block font-['JetBrains_Mono',system-ui,sans-serif] text-[#94A3B8] text-[11px]/3.5">
                        Dossier: JSA-HU-2024-019
                      </div>
                      <div className="inline-block font-['Inter',system-ui,sans-serif] font-semibold text-[#083B23] text-[11px]/3.5">
                        Currently in Hungary
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQS */}
            <div id="faq" className="py-20 bg-white [border-bottom-width:0.8px] border-b-solid border-b-[#E2E8F0]">
              <div className="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto">
                <div className="mb-12 max-w-3xl">
                  <div className="[letter-spacing:-0.75px] mb-4 wrap-normal font-['Newsreader',system-ui,sans-serif] font-semibold text-[#1E293B] text-2xl sm:text-3xl/9">
                    Answers to high-stakes questions from students and parents.
                  </div>
                  <div className="text-[16px] leading-[162.5%] wrap-normal font-['Inter',system-ui,sans-serif] text-[#475569]">
                    Overseas higher education is a life-changing investment. Here are direct, candid answers about admissions feasibility, embassy procedures, and financial safety.
                  </div>
                </div>
                <div className="[border-top-width:0.8px] border-t-solid [border-bottom-width:0.8px] border-b-solid border-y-[#E2E8F0] divide-y divide-[#E2E8F0]">
                  {/* FAQ 1 */}
                  <details className="py-5 group" open>
                    <summary className="items-start flex w-full justify-between p-1 rounded-sm gap-4 cursor-pointer list-none">
                      <span className="wrap-normal font-['Inter',system-ui,sans-serif] font-semibold text-[#1E293B] text-base/6 group-open:text-[#1A56DB] transition">
                        Is it genuinely true that public universities in Germany and France have zero or minimal tuition fees?
                      </span>
                      <span className="shrink-0 mt-0.5 p-1 rounded-sm bg-[#FBF9F5] group-open:rotate-180 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" fontSize="16px" style={{ height: '16px', width: '16px', overflow: 'clip' }}>
                          <path d="m6 9 6 6 6-6" fontSize="16px" fill="none" stroke="#1A56DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ boxSizing: 'border-box', transformOrigin: '0px 0px' }} />
                        </svg>
                      </span>
                    </summary>
                    <div className="mt-3 pr-6 pl-1">
                      <div className="text-[14px] leading-[162.5%] wrap-normal font-['Inter',system-ui,sans-serif] text-[#475569]">
                        Yes. In Germany, almost all public universities across 15 of 16 federal states charge zero tuition fees for international Bachelor’s and Master’s students; you only pay a nominal semester contribution (Semesterbeitrag) of €150 to €350 which covers regional train transit and student union services. In France, many public universities offer partial fee waivers under the 'Bienvenue en France' framework, setting tuition at €170 for Bachelor's and €243 for Master's degrees. Commercial agencies in Dhaka frequently hide this reality to sell expensive private college courses instead.
                      </div>
                    </div>
                  </details>

                  {/* FAQ 2 */}
                  <details className="py-5 group">
                    <summary className="items-start flex w-full justify-between p-1 rounded-sm gap-4 cursor-pointer list-none">
                      <span className="wrap-normal font-['Inter',system-ui,sans-serif] font-semibold text-[#1E293B] text-base/6 group-open:text-[#1A56DB] transition">
                        How do blocked accounts (Sperrkonto) work, and will Jum hold my funds?
                      </span>
                      <span className="shrink-0 mt-0.5 p-1 rounded-sm bg-[#FBF9F5] group-open:rotate-180 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" fontSize="16px" style={{ height: '16px', width: '16px', overflow: 'clip' }}>
                          <path d="m6 9 6 6 6-6" fontSize="16px" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ boxSizing: 'border-box', transformOrigin: '0px 0px' }} />
                        </svg>
                      </span>
                    </summary>
                    <div className="mt-3 pr-6 pl-1">
                      <div className="text-[14px] leading-[162.5%] wrap-normal font-['Inter',system-ui,sans-serif] text-[#475569]">
                        Jum Study Abroad NEVER holds your blocked account funds. For German student visas, blocked accounts must be opened exclusively with official German federal financial regulatory authority (BaFin)-approved escrow providers such as Fintiba, Coracle, or Expatrio in your own legal name. You transfer living expenses directly to your own account, and once you arrive in Germany, the bank releases your monthly allowance directly to you.
                      </div>
                    </div>
                  </details>

                  {/* FAQ 3 */}
                  <details className="py-5 group">
                    <summary className="items-start flex w-full justify-between p-1 rounded-sm gap-4 cursor-pointer list-none">
                      <span className="wrap-normal font-['Inter',system-ui,sans-serif] font-semibold text-[#1E293B] text-base/6 group-open:text-[#1A56DB] transition">
                        How does Jum Study Abroad specifically empower indigenous Jumma students from the Chittagong Hill Tracts?
                      </span>
                      <span className="shrink-0 mt-0.5 p-1 rounded-sm bg-[#FBF9F5] group-open:rotate-180 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" fontSize="16px" style={{ height: '16px', width: '16px', overflow: 'clip' }}>
                          <path d="m6 9 6 6 6-6" fontSize="16px" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ boxSizing: 'border-box', transformOrigin: '0px 0px' }} />
                        </svg>
                      </span>
                    </summary>
                    <div className="mt-3 pr-6 pl-1">
                      <div className="text-[14px] leading-[162.5%] wrap-normal font-['Inter',system-ui,sans-serif] text-[#475569]">
                        Founded by Jumma community members who walked this path themselves, JSA provides dedicated mentorship, language training resources, and authentic documentation support for ethnic minority applicants across Rangamati, Bandarban, and Khagrachari, connecting them directly with enrolled senior alumni mentors across Europe.
                      </div>
                    </div>
                  </details>

                  {/* FAQ 4 */}
                  <details className="py-5 group">
                    <summary className="items-start flex w-full justify-between p-1 rounded-sm gap-4 cursor-pointer list-none">
                      <span className="wrap-normal font-['Inter',system-ui,sans-serif] font-semibold text-[#1E293B] text-base/6 group-open:text-[#1A56DB] transition">
                        What happens during the embassy visa interview, and how do you prepare students?
                      </span>
                      <span className="shrink-0 mt-0.5 p-1 rounded-sm bg-[#FBF9F5] group-open:rotate-180 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" fontSize="16px" style={{ height: '16px', width: '16px', overflow: 'clip' }}>
                          <path d="m6 9 6 6 6-6" fontSize="16px" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ boxSizing: 'border-box', transformOrigin: '0px 0px' }} />
                        </svg>
                      </span>
                    </summary>
                    <div className="mt-3 pr-6 pl-1">
                      <div className="text-[14px] leading-[162.5%] wrap-normal font-['Inter',system-ui,sans-serif] text-[#475569]">
                        Embassy visa officers evaluate your academic coherence, course module knowledge, and legitimate post-study intentions. We conduct rigorous 1-on-1 mock interviews covering your curriculum, university selection, financial documentation, and career vision so you enter your interview with total confidence.
                      </div>
                    </div>
                  </details>

                  {/* FAQ 5 */}
                  <details className="py-5 group">
                    <summary className="items-start flex w-full justify-between p-1 rounded-sm gap-4 cursor-pointer list-none">
                      <span className="wrap-normal font-['Inter',system-ui,sans-serif] font-semibold text-[#1E293B] text-base/6 group-open:text-[#1A56DB] transition">
                        What are your consulting fees and what is your refund transparency policy?
                      </span>
                      <span className="shrink-0 mt-0.5 p-1 rounded-sm bg-[#FBF9F5] group-open:rotate-180 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" fontSize="16px" style={{ height: '16px', width: '16px', overflow: 'clip' }}>
                          <path d="m6 9 6 6 6-6" fontSize="16px" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ boxSizing: 'border-box', transformOrigin: '0px 0px' }} />
                        </svg>
                      </span>
                    </summary>
                    <div className="mt-3 pr-6 pl-1">
                      <div className="text-[14px] leading-[162.5%] wrap-normal font-['Inter',system-ui,sans-serif] text-[#475569]">
                        We operate with a written, milestone-based advisory contract and zero hidden commissions. Initial eligibility assessments and course research are 100% free. If an eligible applicant receives no public university offer under our agreed shortlist, our performance guarantee provides milestone fee refunds.
                      </div>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>

          {/* FOOTER */}
          <footer className="pt-16 pb-12 bg-[#1E293B] border-t-4 border-t-solid border-t-[#1A56DB]">
            <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 pb-12 gap-10 [border-bottom-width:0.8px] border-b-solid border-b-[#334155CC]">
                <div className="md:col-span-5">
                  <div className="items-center flex gap-3">
                    <div className="items-center flex justify-center rounded-full shrink-0 bg-[#1A56DB] [border-width:0.8px] border-solid border-[#60A5FA] size-10">
                      <div className="tracking-[0.7px] wrap-normal font-['JetBrains_Mono',system-ui,sans-serif] font-bold text-white text-sm/5">
                        JSA
                      </div>
                    </div>
                    <div className="[letter-spacing:-0.5px] wrap-normal font-['Inter',system-ui,sans-serif] font-semibold text-white text-xl/7">
                      Jum Study Abroad
                    </div>
                  </div>
                  <div className="text-[14px] leading-[162.5%] mt-4 [max-width:384px] wrap-normal font-['Inter',system-ui,sans-serif] text-[#CBD5E1]">
                    Rooted in the Chittagong Hill Tracts, dedicated to transparency across Bangladesh. Guiding students into accredited, low-cost European public universities with verified admissions and zero predatory fees.
                  </div>
                  <div className="items-center inline-flex mt-4 py-1.5 px-3 rounded-md gap-2 bg-[#1E293B] [border-width:0.8px] border-solid border-[#334155]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" fontSize="12px" style={{ height: '16px', width: '16px', overflow: 'clip', minWidth: '0px', flexShrink: 0 }}>
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" fontSize="12px" fill="none" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ boxSizing: 'border-box', transformOrigin: '0px 0px' }} />
                      <path d="m9 12 2 2 4-4" fontSize="12px" fill="none" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ boxSizing: 'border-box', transformOrigin: '0px 0px' }} />
                    </svg>
                    <div className="wrap-normal font-['Inter',system-ui,sans-serif] text-[#CBD5E1] text-xs/4">
                      Certified Ethical Educational Advisory
                    </div>
                  </div>
                </div>
                <div className="md:col-span-3">
                  <div className="tracking-[0.6px] uppercase wrap-normal font-['JetBrains_Mono',system-ui,sans-serif] font-semibold text-[#94A3B8] text-xs/4">
                    Destinations &amp; Tracks
                  </div>
                  <div className="mt-3 space-y-2">
                    <div>
                      <a href="#destinations" className="inline-block wrap-normal font-['Inter',system-ui,sans-serif] text-[#CBD5E1] hover:text-white transition text-sm/5">
                        France Public Universities (Campus France)
                      </a>
                    </div>
                    <div>
                      <a href="#destinations" className="inline-block wrap-normal font-['Inter',system-ui,sans-serif] text-[#CBD5E1] hover:text-white transition text-sm/5">
                        Germany State Universities (TU9 &amp; DAAD)
                      </a>
                    </div>
                    <div>
                      <a href="#destinations" className="inline-block wrap-normal font-['Inter',system-ui,sans-serif] text-[#CBD5E1] hover:text-white transition text-sm/5">
                        Hungary Stipendium Hungaricum
                      </a>
                    </div>
                    <div>
                      <a href="#destinations" className="inline-block wrap-normal font-['Inter',system-ui,sans-serif] text-[#CBD5E1] hover:text-white transition text-sm/5">
                        Poland Low-Cost English Tracks
                      </a>
                    </div>
                    <div>
                      <a href="#destinations" className="inline-block wrap-normal font-['Inter',system-ui,sans-serif] text-[#CBD5E1] hover:text-white transition text-sm/5">
                        Romania Medical &amp; Technical Degrees
                      </a>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-4">
                  <div className="tracking-[0.6px] uppercase wrap-normal font-['JetBrains_Mono',system-ui,sans-serif] font-semibold text-[#94A3B8] text-xs/4">
                    Dhaka Advisory Office &amp; Coordinates
                  </div>
                  <div className="mt-3 space-y-2.5">
                    <div className="items-start flex gap-2.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" fontSize="14px" style={{ height: '16px', flexShrink: '0', width: '16px', marginTop: '2px', overflow: 'clip', minWidth: '0px' }}>
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" fontSize="14px" fill="none" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ boxSizing: 'border-box', transformOrigin: '0px 0px' }} />
                        <circle cx="12" cy="10" r="3" fontSize="14px" fill="none" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ boxSizing: 'border-box', transformOrigin: '0px 0px' }} />
                      </svg>
                      <div className="wrap-normal font-['Inter',system-ui,sans-serif] text-[#CBD5E1] text-sm/5">
                        House 42, Road 11, Banani / Gulshan Hub, Dhaka-1213, Bangladesh
                      </div>
                    </div>
                    <div className="items-center flex gap-2.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" fontSize="14px" style={{ height: '16px', flexShrink: '0', width: '16px', overflow: 'clip', minWidth: '0px' }}>
                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" fontSize="14px" fill="none" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ boxSizing: 'border-box', transformOrigin: '0px 0px' }} />
                        <rect x="2" y="4" width="20" height="16" rx="2" fontSize="14px" fill="none" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ height: '16px', boxSizing: 'border-box', width: '20px', transformOrigin: '0px 0px' }} />
                      </svg>
                      <a href="mailto:admissions@jumstudyabroad.com" className="wrap-normal font-['Inter',system-ui,sans-serif] text-[#CBD5E1] hover:text-white transition text-sm/5">
                        admissions@jumstudyabroad.com
                      </a>
                    </div>
                    <div className="items-center flex gap-2.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" fontSize="14px" style={{ height: '16px', flexShrink: '0', width: '16px', overflow: 'clip', minWidth: '0px' }}>
                        <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" fontSize="14px" fill="none" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ boxSizing: 'border-box', transformOrigin: '0px 0px' }} />
                      </svg>
                      <a href="tel:+880199999789" className="wrap-normal font-['JetBrains_Mono',system-ui,sans-serif] text-[#CBD5E1] hover:text-white transition text-sm/5">
                        +880 199999789 (Direct &amp; WhatsApp)
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="items-center flex flex-col sm:flex-row justify-between pt-8 gap-4 border-t border-[#33415560]">
                <div className="wrap-normal font-['Inter',system-ui,sans-serif] text-[#94A3B8] text-xs/4">
                  © 2026 Jum Study Abroad. All rights reserved. Registered Educational Advisory in Bangladesh.
                </div>
                <div className="items-center flex flex-wrap gap-4">
                  <span className="wrap-normal font-['Inter',system-ui,sans-serif] text-[#94A3B8] text-xs/4">
                    Radical Transparency Charter
                  </span>
                  <span className="wrap-normal font-['Inter',system-ui,sans-serif] text-[#475569] text-xs/4">
                    •
                  </span>
                  <span className="wrap-normal font-['Inter',system-ui,sans-serif] text-[#94A3B8] text-xs/4">
                    Privacy Policy
                  </span>
                  <span className="wrap-normal font-['Inter',system-ui,sans-serif] text-[#475569] text-xs/4">
                    •
                  </span>
                  <span className="wrap-normal font-['Inter',system-ui,sans-serif] text-[#94A3B8] text-xs/4">
                    Zero Embassy Bribery Compliance
                  </span>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
