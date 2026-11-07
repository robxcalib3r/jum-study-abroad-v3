export interface Testimonial {
  id: string;
  name: string;
  community: string;
  homeRegion: string;
  university: string;
  degree: string;
  country: string;
  countryFlag: string;
  intakeYear: string;
  scholarshipOrFee: string;
  quote: string;
  dossierNumber: string;
  visaApprovedDate: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 'binoy-chakma',
    name: 'Binoy Chakma',
    community: 'Jumma Community (Chakma)',
    homeRegion: 'Rangamati, CHT',
    university: 'University of Rennes',
    degree: 'M.Sc. in Cloud Computing & Distributed Systems',
    country: 'France',
    countryFlag: '🇫🇷',
    intakeYear: 'Autumn 2024',
    scholarshipOrFee: 'Campus France Partial Fee Exemption (€243/yr)',
    quote: 'Commercial agents in Dhaka demanded 6.5 Lakh BDT just to apply to private colleges in Cyprus. Jum Study Abroad walked me through the official Campus France portal step-by-step. I only paid the direct university matriculation fee of €243. My embassy interview was rehearsed three times until I felt completely confident.',
    dossierNumber: 'JSA-FR-2024-084',
    visaApprovedDate: 'August 18, 2024'
  },
  {
    id: 'shima-marma',
    name: 'Shima Marma',
    community: 'Jumma Community (Marma)',
    homeRegion: 'Bandarban, CHT',
    university: 'Eötvös Loránd University (ELTE)',
    degree: 'B.Sc. in Environmental Sciences',
    country: 'Hungary',
    countryFlag: '🇭🇺',
    intakeYear: 'Autumn 2023',
    scholarshipOrFee: 'Stipendium Hungaricum (100% Tuition + Monthly Stipend)',
    quote: 'As an indigenous woman from Bandarban, studying in central Europe seemed impossible financially. Jum helped me craft an honest motivation letter linking my CHT conservation background to ELTE’s faculty research. Zero agent cuts, zero hidden processing charges.',
    dossierNumber: 'JSA-HU-2023-019',
    visaApprovedDate: 'July 26, 2023'
  },
  {
    id: 'dipika-tripura',
    name: 'Dipika Tripura',
    community: 'Jumma Community (Tripura)',
    homeRegion: 'Khagrachari, CHT',
    university: 'University of Freiburg',
    degree: 'M.Sc. in Sustainable Governance',
    country: 'Germany',
    countryFlag: '🇩🇪',
    intakeYear: 'Winter 2024',
    scholarshipOrFee: 'Tuition-Free State University (€0 tuition, €160 semester ticket)',
    quote: 'The Sperrkonto (blocked account) regulations were terrifying to my family. Jum helped us set up the direct account through Fintiba without passing funds through any third-party agency hands. Clean, legal, and stress-free.',
    dossierNumber: 'JSA-DE-2024-112',
    visaApprovedDate: 'September 04, 2024'
  },
  {
    id: 'ananta-tripura',
    name: 'Ananta Tripura',
    community: 'Guardian / Parent',
    homeRegion: 'Dhaka / Khagrachari',
    university: 'Wrocław University of Science & Technology',
    degree: 'Parent of B.Eng. Student',
    country: 'Poland',
    countryFlag: '🇵🇱',
    intakeYear: 'Autumn 2024',
    scholarshipOrFee: 'Verified Low-Cost Public Rate',
    quote: 'As a parent, your deepest fear is sending your child’s passport and hard-earned savings into a consultancy that disappears when visas get rejected. Jum provided a clear legal agreement, transparent bank documentation guidelines, and direct contact with the university admissions office.',
    dossierNumber: 'JSA-PL-2024-061',
    visaApprovedDate: 'August 29, 2024'
  }
];
