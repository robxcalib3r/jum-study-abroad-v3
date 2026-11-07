export interface Destination {
  id: string;
  country: string;
  countryCode: string;
  flag: string;
  headline: string;
  averageTuition: string;
  livingCostMonthly: string;
  blockedAccountReq: string;
  languageRequirement: string;
  topPublicUniversities: string[];
  intakeDeadlines: string;
  tuitionStatus: 'Tuition-Free' | 'Low-Tuition' | 'Full Scholarship';
  highlightBadge: string;
  visaSuccessRate: string;
}

export const destinationsData: Destination[] = [
  {
    id: 'france',
    country: 'France',
    countryCode: 'FR',
    flag: '🇫🇷',
    headline: 'Low-Tuition Public Universities & CROUS Subsidized Living',
    averageTuition: '€170 – €243 / year',
    livingCostMonthly: '€650 – €850 / month',
    blockedAccountReq: '€7,380 / year (Attestation de virement)',
    languageRequirement: 'IELTS 6.0+ or English MOI',
    topPublicUniversities: ['University of Rennes', 'Sorbonne Paris Nord', 'University of Strasbourg', 'Aix-Marseille'],
    intakeDeadlines: 'Autumn: March 15 (Campus France Études en France)',
    tuitionStatus: 'Low-Tuition',
    highlightBadge: 'CAF Housing Subsidy up to 40%',
    visaSuccessRate: '98%'
  },
  {
    id: 'germany',
    country: 'Germany',
    countryCode: 'DE',
    flag: '🇩🇪',
    headline: '100% Tuition-Free State Higher Education for International Students',
    averageTuition: '€0 (Semester fee: €150–€350)',
    livingCostMonthly: '€850 – €950 / month',
    blockedAccountReq: '€11,208 / year (Sperrkonto mandatory)',
    languageRequirement: 'IELTS 6.5+ (STEM courses in English)',
    topPublicUniversities: ['TU Munich', 'RWTH Aachen', 'University of Freiburg', 'TU Berlin'],
    intakeDeadlines: 'Winter: July 15 | Summer: Jan 15',
    tuitionStatus: 'Tuition-Free',
    highlightBadge: '18-Month Post-Study Job Seeker Visa',
    visaSuccessRate: '96%'
  },
  {
    id: 'hungary',
    country: 'Hungary',
    countryCode: 'HU',
    flag: '🇭🇺',
    headline: 'Stipendium Hungaricum Full Scholarship & Modest Living Costs',
    averageTuition: '€0 with Stipendium (or €2,500/yr private/public)',
    livingCostMonthly: '€500 – €650 / month',
    blockedAccountReq: 'Bank balance proof (€6,000 equivalent)',
    languageRequirement: 'IELTS 5.5+ or Duolingo accepted',
    topPublicUniversities: ['Eötvös Loránd University (ELTE)', 'University of Debrecen', 'BME Budapest'],
    intakeDeadlines: 'Scholarship: Jan 15 | Regular: May 31',
    tuitionStatus: 'Full Scholarship',
    highlightBadge: 'Free tuition + Monthly Stipend + Health Insurance',
    visaSuccessRate: '97%'
  },
  {
    id: 'poland',
    country: 'Poland',
    countryCode: 'PL',
    flag: '🇵🇱',
    headline: 'Accessible European Degree with English-Taught Programs',
    averageTuition: '€1,800 – €3,200 / year',
    livingCostMonthly: '€450 – €600 / month',
    blockedAccountReq: 'Sponsorship / Bank guarantee (€8,000)',
    languageRequirement: 'IELTS 6.0 or Medium of Instruction (MOI)',
    topPublicUniversities: ['University of Warsaw', 'Jagiellonian University', 'Wrocław University of Science'],
    intakeDeadlines: 'Autumn: July 30',
    tuitionStatus: 'Low-Tuition',
    highlightBadge: 'Fast embassy appointments in Dhaka',
    visaSuccessRate: '95%'
  },
  {
    id: 'romania',
    country: 'Romania',
    countryCode: 'RO',
    flag: '🇷🇴',
    headline: 'Recognized EU Medical & Engineering Qualifications',
    averageTuition: '€2,000 – €3,500 / year',
    livingCostMonthly: '€400 – €550 / month',
    blockedAccountReq: 'Financial maintenance statement (€5,000)',
    languageRequirement: 'English interview / MOI certificate',
    topPublicUniversities: ['University of Bucharest', 'Babeș-Bolyai University', 'Gheorghe Asachi Technical'],
    intakeDeadlines: 'Autumn: August 15',
    tuitionStatus: 'Low-Tuition',
    highlightBadge: 'Direct ministry validation without middlemen',
    visaSuccessRate: '94%'
  }
];
