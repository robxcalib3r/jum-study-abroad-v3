import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PeerProofRibbon } from './components/PeerProofRibbon';
import { AntiscamComparison } from './components/AntiscamComparison';
import { DestinationsShowcase } from './components/DestinationsShowcase';
import { EligibilityWizard } from './components/EligibilityWizard';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | undefined>(undefined);

  const handleOpenEvaluation = (countryId?: string) => {
    if (countryId) {
      setSelectedCountry(countryId);
    }
    const element = document.getElementById('evaluator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar onOpenEvaluation={() => handleOpenEvaluation()} />
      <main className="flex-grow">
        <Hero onOpenEvaluation={() => handleOpenEvaluation()} />
        <PeerProofRibbon />
        <AntiscamComparison />
        <DestinationsShowcase onSelectCountryForEvaluation={(countryId) => handleOpenEvaluation(countryId)} />
        <EligibilityWizard initialCountry={selectedCountry} />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
