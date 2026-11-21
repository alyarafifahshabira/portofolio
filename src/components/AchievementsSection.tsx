import { PORTFOLIO_DATA } from '../data/portfolioData';
import { StarIcon } from './StarIcon';

export function AchievementsSection() {
  const { achievements, certificates } = PORTFOLIO_DATA;

  return (
    <section id="achievements" className="bg-bg-cream-dark py-section-y">
      <div className="w-full max-w-7xl mx-auto px-gutter-lg md:px-gutter-2xl flex flex-col gap-gutter-2xl">
        {/* Achievements Ledger */}
        <div className="reveal">
          <div className="flex flex-wrap items-end justify-between gap-gutter-md border-b border-rule-light pb-gutter-md">
            <h2 className="font-display text-display-lg-mobile md:text-display-lg text-ink">
              Achievements
            </h2>
            <span className="font-eyebrow text-eyebrow uppercase text-gold-accessible flex items-center gap-gutter-xs">
              COMPETITION HONORS
              <StarIcon size={10} className="text-gold" />
            </span>
          </div>
          <div id="achievements-ledger" className="flex flex-col">
            {achievements.map((item) => (
              <div
                key={item.title}
                className="border-b border-rule-light py-gutter-lg flex flex-col md:flex-row md:items-baseline justify-between gap-gutter-md"
              >
                <h3 className="font-headline text-headline-sm text-ink">
                  {item.title}
                </h3>
                <div className="flex items-baseline gap-gutter-lg shrink-0">
                  <span className="font-body text-body-sm text-ink-muted">
                    {item.detail}
                  </span>
                  <span className="font-eyebrow text-eyebrow uppercase text-gold-accessible tabular-nums">
                    {item.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates Ledger */}
        <div className="reveal">
          <div className="flex flex-wrap items-end justify-between gap-gutter-md border-b border-rule-light pb-gutter-md">
            <h2 className="font-display text-display-lg-mobile md:text-display-lg text-ink">
              Certificates
            </h2>
            <span className="font-eyebrow text-eyebrow uppercase text-gold-accessible flex items-center gap-gutter-xs">
              INTERNATIONAL RECOGNITION
              <StarIcon size={10} className="text-gold" />
            </span>
          </div>
          <div id="certificates-ledger" className="flex flex-col">
            {certificates.map((cert) => (
              <div
                key={cert.title}
                className="border-b border-rule-light py-gutter-lg flex flex-col md:flex-row md:items-baseline justify-between gap-gutter-md"
              >
                <h3 className="font-headline text-headline-sm text-ink max-w-2xl">
                  {cert.title}
                </h3>
                <div className="flex items-baseline gap-gutter-lg shrink-0">
                  <span className="font-body text-body-sm text-ink-muted">
                    {cert.issuer}
                  </span>
                  <span className="font-eyebrow text-eyebrow uppercase text-gold-accessible tabular-nums">
                    {cert.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
