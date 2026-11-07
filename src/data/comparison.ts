export interface ComparisonRow {
  aspect: string;
  predatoryAgencies: string;
  jumGuarantee: string;
  verificationBadge: string;
}

export const comparisonData: ComparisonRow[] = [
  {
    aspect: 'University Placement Strategy',
    predatoryAgencies: 'Steer students toward high-commission, expensive private colleges or non-accredited language schools with hidden failure rates.',
    jumGuarantee: 'Advising strictly centered on accredited European public universities and government scholarship tracks (Campus France, DAAD, Stipendium).',
    verificationBadge: '100% Public Institutions'
  },
  {
    aspect: 'Tuition & Payment Flow',
    predatoryAgencies: 'Demand bulk cash "package fees" (5–12 Lakh BDT) into agency local accounts before applying.',
    jumGuarantee: 'You pay zero university tuition markups. All university semester fees and embassy visa charges are paid directly by you to the official institutions.',
    verificationBadge: 'Direct Bank Settlement'
  },
  {
    aspect: 'Financial Proof & Blocked Accounts',
    predatoryAgencies: 'Sell risky, temporary "show money" schemes that trigger immediate embassy bans and forgery blacklists.',
    jumGuarantee: 'Lawful, verified financial preparation: legitimate sponsor documentation or official blocked accounts (Sperrkonto/Expatrio/Fintiba) in the student’s own name.',
    verificationBadge: 'Zero Embassy Blacklist Risk'
  },
  {
    aspect: 'Visa Preparation',
    predatoryAgencies: 'Provide generic, templated answers that fail during embassy consular scrutiny.',
    jumGuarantee: 'One-on-one mock interviews tailored to your exact academic transcript, syllabus justification, and regional background.',
    verificationBadge: '97% Embassy Approval'
  },
  {
    aspect: 'Contractual Clarity',
    predatoryAgencies: 'Opaque verbal guarantees with non-refundable deposits and hidden file charges.',
    jumGuarantee: 'Written advisory agreement with transparent milestone deliverables, clear timelines, and explicit scope boundaries.',
    verificationBadge: 'Written Ethical Agreement'
  }
];
