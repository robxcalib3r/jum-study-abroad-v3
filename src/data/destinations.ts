export interface Destination {
  id: string;
  name: string;
  country: string;
  countryCode: string;
  city: string;
  type: string;
  tuitionStructure: string;
  accreditation: string;
  intakeBadge: string;
  tuitionStatus: 'Tuition-Free' | 'Low-Tuition' | 'Full Scholarship';
  visaSuccessRate: string;
  livingCostMonthly: string;
  blockedAccountReq: string;
  languageRequirement: string;
}

export const destinationsData: Destination[] = [
  {
    id: 'rennes-france',
    name: 'University of Rennes',
    country: 'France',
    countryCode: 'FR',
    city: 'Rennes, Brittany',
    type: 'Public State',
    tuitionStructure: '€243 / year',
    accreditation: 'QS Top 250',
    intakeBadge: 'Autumn 2026 Direct',
    tuitionStatus: 'Low-Tuition',
    visaSuccessRate: '98%',
    livingCostMonthly: '€650 – €800 / mo',
    blockedAccountReq: '€7,380 / yr (Attestation de virement)',
    languageRequirement: 'IELTS 6.0+ or English MOI'
  },
  {
    id: 'elte-hungary',
    name: 'Eötvös Loránd Univ.',
    country: 'Hungary',
    countryCode: 'HU',
    city: 'Budapest, Hungary',
    type: 'Stipendium Partner',
    tuitionStructure: '100% Scholarship',
    accreditation: '#1 in Hungary',
    intakeBadge: 'Autumn 2026 Direct',
    tuitionStatus: 'Full Scholarship',
    visaSuccessRate: '97%',
    livingCostMonthly: '€500 – €650 / mo',
    blockedAccountReq: 'Bank balance proof (€6,000 equivalent)',
    languageRequirement: 'IELTS 5.5+ or Duolingo'
  },
  {
    id: 'bourgogne-france',
    name: 'Université de Bourgogne',
    country: 'France',
    countryCode: 'FR',
    city: 'Dijon, Burgundy',
    type: 'Public State',
    tuitionStructure: '€170 / year',
    accreditation: 'Top Public Research',
    intakeBadge: 'Autumn 2026 Direct',
    tuitionStatus: 'Low-Tuition',
    visaSuccessRate: '98%',
    livingCostMonthly: '€600 – €750 / mo',
    blockedAccountReq: '€7,380 / yr',
    languageRequirement: 'IELTS 6.0+ / B2'
  },
  {
    id: 'tum-germany',
    name: 'TU Munich (TUM)',
    country: 'Germany',
    countryCode: 'DE',
    city: 'Munich, Bavaria',
    type: 'TU9 Excellence',
    tuitionStructure: '€0 / yr (State Public)',
    accreditation: 'QS World #28',
    intakeBadge: 'Winter 2026 Direct',
    tuitionStatus: 'Tuition-Free',
    visaSuccessRate: '96%',
    livingCostMonthly: '€850 – €950 / mo',
    blockedAccountReq: '€11,208 / yr (Sperrkonto mandatory)',
    languageRequirement: 'IELTS 6.5+ (English Tracks)'
  },
  {
    id: 'helsinki-finland',
    name: 'University of Helsinki',
    country: 'Finland',
    countryCode: 'FI',
    city: 'Helsinki, Uusimaa',
    type: 'State Research',
    tuitionStructure: '100% Waiver Option',
    accreditation: 'Top 100 Global',
    intakeBadge: 'Autumn 2026 Direct',
    tuitionStatus: 'Full Scholarship',
    visaSuccessRate: '95%',
    livingCostMonthly: '€800 – €950 / mo',
    blockedAccountReq: '€6,720 / yr (Bank statement)',
    languageRequirement: 'IELTS 6.5+'
  }
];
