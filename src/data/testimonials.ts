export interface Testimonial {
  id: string;
  name: string;
  roleOrCommunity: string;
  homeRegion: string;
  university: string;
  degree: string;
  country: string;
  countryFlag: string;
  tuitionStructure: string;
  quote: string;
  dossierNumber: string;
  statusBadge: string;
  cardVariant: 'amber' | 'blue' | 'green';
  avatarUrl: string;
}

export interface HeroDossier {
  id: string;
  tabLabel: string;
  country: string;
  name: string;
  homeRegion: string;
  community: string;
  visaIssuedDate: string;
  quote: string;
  enrolledUniversity: string;
  degreeCourse: string;
  tuitionStructure: string;
  dossierId: string;
  matriculationDate: string;
}

export const heroDossiersData: HeroDossier[] = [
  {
    id: 'binoy',
    tabLabel: 'Binoy',
    country: 'France',
    name: 'Binoy Chakma',
    homeRegion: 'Rangamati, CHT',
    community: 'Jumma Community (Chakma)',
    visaIssuedDate: 'August 18, 2024',
    quote: 'Commercial agents in Dhaka demanded 6.5 Lakh BDT just to apply to private colleges in Cyprus. JSA walked me through the official Campus France portal step-by-step. I only paid the direct university matriculation fee of €243. My embassy interview was rehearsed until I passed with ease.',
    enrolledUniversity: 'University of Rennes 🇫🇷',
    degreeCourse: 'M.Sc. in Cloud Computing & Distributed Systems',
    tuitionStructure: '€243 / yr (Partial Fee Exemption)',
    dossierId: 'JSA-FR-2024-084',
    matriculationDate: 'Matriculated Autumn 2024'
  },
  {
    id: 'shima',
    tabLabel: 'Shima',
    country: 'Hungary',
    name: 'Shima Marma',
    homeRegion: 'Bandarban, CHT',
    community: 'Jumma Community (Marma)',
    visaIssuedDate: 'July 26, 2024',
    quote: 'As an indigenous woman from Bandarban, European study seemed impossible financially. JSA helped me craft an authentic motivation letter for Stipendium Hungaricum. Zero agent cuts, zero hidden processing charges.',
    enrolledUniversity: 'Eötvös Loránd Univ. (ELTE) 🇭🇺',
    degreeCourse: 'B.Sc. in Environmental Sciences',
    tuitionStructure: '100% Scholarship + Monthly Stipend',
    dossierId: 'JSA-HU-2024-019',
    matriculationDate: 'Matriculated Autumn 2024'
  },
  {
    id: 'priyo',
    tabLabel: 'Priyo',
    country: 'Germany',
    name: 'Priyo Chakma',
    homeRegion: 'Rangamati, CHT',
    community: 'Jumma Community (Chakma)',
    visaIssuedDate: 'July 14, 2025',
    quote: 'Commercial agencies in Chittagong told me public universities in Munich were impossible without 10 Lakh BDT agency processing. JSA helped me navigate the APS authentication process, structure my German blocked account through Fintiba, and practice my embassy visa interview until I passed on the first attempt with zero agency markups.',
    enrolledUniversity: 'TU Munich (TUM) 🇩🇪',
    degreeCourse: 'M.Sc. in Robotics & Cognition',
    tuitionStructure: '€0 / yr (State Public)',
    dossierId: 'JSA-DE-2025-112',
    matriculationDate: 'Matriculated Autumn 2025'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'ananta-tripura',
    name: 'Ananta Tripura',
    roleOrCommunity: 'Parent • Khagrachari, CHT',
    homeRegion: 'Khagrachari, CHT',
    university: 'Father of Scholar in Germany',
    degree: 'Higher Education Guardian',
    country: 'Germany / Bangladesh',
    countryFlag: '🇧🇩',
    tuitionStructure: 'Zero Hidden Commissions',
    quote: 'The scholarship guidance was incredibly helpful. In the Hill Tracts, commercial brokers try to exploit parents with inflated fees. JSA explained everything honestly and made public university admission achievable with zero commission.',
    dossierNumber: 'JSA-TR-2024',
    statusBadge: 'Community Elder & Parent',
    cardVariant: 'amber',
    avatarUrl: '/images/avatar-ananta.png'
  },
  {
    id: 'binoy-chakma',
    name: 'Binoy Chakma',
    roleOrCommunity: 'University of Rennes 🇫🇷',
    homeRegion: 'Rangamati, CHT',
    university: 'University of Rennes',
    degree: 'M.Sc. Cloud Computing',
    country: 'France',
    countryFlag: '🇫🇷',
    tuitionStructure: 'France • €243/yr Partial Exemption',
    quote: 'The team explained everything clearly and helped me stay on track. I only paid the direct university matriculation fee of €243. I felt fully supported from the first consultation right through my embassy interview.',
    dossierNumber: 'JSA-FR-2024-084',
    statusBadge: 'France • €243/yr Partial Exemption',
    cardVariant: 'blue',
    avatarUrl: '/images/avatar-binoy.png'
  },
  {
    id: 'shima-marma',
    name: 'Shima Marma',
    roleOrCommunity: 'Eötvös Loránd University 🇭🇺',
    homeRegion: 'Bandarban, CHT',
    university: 'Eötvös Loránd University (ELTE)',
    degree: 'B.Sc. Environmental Sciences',
    country: 'Hungary',
    countryFlag: '🇭🇺',
    tuitionStructure: 'Hungary • 100% Free + Stipend',
    quote: "The visa checklist and interview prep were super helpful. As an indigenous student from Bandarban, I didn't feel lost at any point — everything was clearly explained and structured for success.",
    dossierNumber: 'JSA-HU-2024-019',
    statusBadge: 'Hungary • 100% Free + Stipend',
    cardVariant: 'green',
    avatarUrl: '/images/avatar-shima.png'
  }
];
