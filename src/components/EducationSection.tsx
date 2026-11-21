import { PORTFOLIO_DATA } from '../data/portfolioData';

export function EducationSection() {
  const { skillTags, education } = PORTFOLIO_DATA;

  return (
    <section
      id="education"
      className="bg-bg-cream border-t border-rule-light py-section-y"
    >
      <div className="w-full max-w-7xl mx-auto px-gutter-lg md:px-gutter-2xl grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-gutter-2xl reveal">
        {/* Left Column */}
        <div className="flex flex-col items-start">
          <span className="font-eyebrow text-eyebrow uppercase text-gold-accessible">
            ACADEMIC BACKGROUND
          </span>
          <h2 className="font-display text-display-lg-mobile md:text-display-lg text-ink mt-gutter-sm mb-gutter-lg text-balance">
            Education &amp; Academic Foundation.
          </h2>
          <p className="font-body text-body-md text-ink-muted max-w-prose mb-gutter-xl text-pretty">
            Currently pursuing S1 Teknik Informatika at Institut Teknologi PLN,
            building upon foundational schooling and leadership experience in
            Aceh Barat Daya.
          </p>
          <div id="skills-tags" className="flex flex-wrap gap-gutter-sm">
            {skillTags.map((tag) => (
              <span
                key={tag}
                className="border border-rule-light px-gutter-md py-gutter-sm font-eyebrow text-eyebrow-sm uppercase text-ink"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Education Timeline Ledger */}
        <div className="flex flex-col">
          <span className="font-eyebrow text-eyebrow uppercase text-gold-accessible mb-gutter-md">
            EDUCATION
          </span>
          <div id="education-ledger" className="flex flex-col">
            {education.map((item, idx) => (
              <div
                key={item.institution}
                className={`border-t ${
                  idx === education.length - 1 ? 'border-b' : ''
                } border-rule-light py-gutter-lg flex flex-col sm:flex-row sm:items-baseline justify-between gap-gutter-sm`}
              >
                <div>
                  <h3 className="font-headline text-headline-sm text-ink">
                    {item.institution}
                  </h3>
                  {item.program && (
                    <p className="font-body text-body-sm text-ink-muted mt-gutter-xs">
                      {item.program}
                    </p>
                  )}
                </div>
                <span className="font-eyebrow text-eyebrow uppercase text-gold-accessible tabular-nums shrink-0">
                  {item.period}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
