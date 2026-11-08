import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DestinationsShowcase } from './components/DestinationsShowcase';
import { WhyChooseUs } from './components/WhyChooseUs';
import { EligibilityWizard } from './components/EligibilityWizard';
import { PeerProofRibbon } from './components/PeerProofRibbon';
import { FaqSection } from './components/FaqSection';
import { ClosingConsultation } from './components/ClosingConsultation';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | undefined>(undefined);

  const handleOpenEvaluation = (countryId?: string) => {
    if (countryId) {
      setSelectedCountry(countryId);
    }
    const element = document.getElementById('eligibility');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FBF9F5] text-[#1E293B] antialiased selection:bg-blue-100 selection:text-blue-900">
      <Navbar onOpenEvaluation={() => handleOpenEvaluation()} />
      <main className="flex-grow">
        <Hero onOpenEvaluation={() => handleOpenEvaluation()} />
        <DestinationsShowcase onSelectCountryForEvaluation={(countryId) => handleOpenEvaluation(countryId)} />
        <WhyChooseUs />
        <EligibilityWizard initialCountry={selectedCountry} />
        <PeerProofRibbon />
        <FaqSection />
        <ClosingConsultation onOpenEvaluation={() => handleOpenEvaluation()} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
