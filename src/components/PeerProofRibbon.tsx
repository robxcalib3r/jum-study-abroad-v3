import React from 'react';
import { testimonialsData } from '../data/testimonials';
import { ShieldCheck, MapPin, Calendar } from 'lucide-react';

export const PeerProofRibbon: React.FC = () => {
  return (
    <section id="alumni" className="py-16 sm:py-20 bg-white border-b border-registrar-ink-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-display font-semibold text-registrar-ink tracking-tight mb-4">
            Direct alumni proof from Bangladesh and the Chittagong Hill Tracts.
          </h2>
          <p className="text-base text-registrar-ink-muted leading-relaxed font-sans">
            Every case below represents an authentic student or parent who navigated admissions, blocked accounts, and embassy interviews with zero agency markups. Verified against actual university matriculation records.
          </p>
        </div>

        {/* Alumni Dossier Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonialsData.map((item) => (
            <article 
              key={item.id}
              className="bg-registrar-cream rounded-xl p-6 border border-registrar-ink-border flex flex-col justify-between hover:border-registrar-ink-borderDossier transition-all shadow-sm"
            >
              <div>
                {/* Header row: Student identity & verified visa stamp */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-registrar-ink font-display">
                      {item.name}
                    </h3>
                    <p className="text-xs text-registrar-ink-muted flex items-center gap-1.5 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-registrar-ink-faint" />
                      {item.homeRegion} • <span className="font-medium text-registrar-green-dark">{item.community}</span>
                    </p>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white border border-registrar-green/30 text-[11px] font-mono text-registrar-green-dark font-medium shadow-xs">
                      <ShieldCheck className="w-3 h-3 text-registrar-green" />
                      Visa Approved
                    </span>
                    <span className="block text-[10px] font-mono text-registrar-ink-faint mt-1">
                      {item.visaApprovedDate}
                    </span>
                  </div>
                </div>

                {/* University & Degree Specs */}
                <div className="bg-white rounded-lg p-3.5 border border-registrar-ink-border/80 mb-4 space-y-1.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-registrar-ink-muted">University</span>
                    <span className="font-semibold text-registrar-ink">
                      {item.university} {item.countryFlag}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-registrar-ink-muted">Program</span>
                    <span className="font-medium text-registrar-ink">{item.degree}</span>
                  </div>
                  <div className="flex items-center justify-between pt-1 border-t border-registrar-ink-border/50">
                    <span className="text-registrar-ink-muted">Financial Structure</span>
                    <span className="font-mono text-registrar-green-badge font-semibold">
                      {item.scholarshipOrFee}
                    </span>
                  </div>
                </div>

                {/* Experience Quote */}
                <p className="text-sm text-registrar-ink-muted leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Dossier Card Footer */}
              <div className="pt-4 mt-5 border-t border-registrar-ink-border/70 flex items-center justify-between text-xs font-mono text-registrar-ink-faint">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  Intake: {item.intakeYear}
                </span>
                <span>Ref: {item.dossierNumber}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Proof metrics row */}
        <div className="mt-12 bg-registrar-cream-paper rounded-xl p-6 border border-registrar-ink-border grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div>
            <span className="block font-mono text-3xl font-bold text-registrar-blue mb-1 tabular-nums">97.2%</span>
            <span className="text-xs text-registrar-ink font-medium">Embassy Visa Approval Rate</span>
            <span className="block text-[11px] text-registrar-ink-muted">Across 2023–2025 cohorts</span>
          </div>
          <div>
            <span className="block font-mono text-3xl font-bold text-registrar-green mb-1 tabular-nums">1,240+</span>
            <span className="text-xs text-registrar-ink font-medium">Students Successfully Advised</span>
            <span className="block text-[11px] text-registrar-ink-muted">Undergraduate & Graduate</span>
          </div>
          <div>
            <span className="block font-mono text-3xl font-bold text-registrar-blue mb-1 tabular-nums">€0</span>
            <span className="text-xs text-registrar-ink font-medium">Hidden Markups or Secret Cuts</span>
            <span className="block text-[11px] text-registrar-ink-muted">Direct institutional billing</span>
          </div>
          <div>
            <span className="block font-mono text-3xl font-bold text-registrar-amber mb-1 tabular-nums">15+</span>
            <span className="text-xs text-registrar-ink font-medium">European Countries Covered</span>
            <span className="block text-[11px] text-registrar-ink-muted">Focus on public universities</span>
          </div>
        </div>

      </div>
    </section>
  );
};
