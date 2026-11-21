import type { HighlightItem } from '../data/portfolioData';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { EditorialImage } from './EditorialImage';
import { StarIcon } from './StarIcon';

interface ExperienceSectionProps {
  onSelectHighlight: (item: HighlightItem) => void;
}

export function ExperienceSection({ onSelectHighlight }: ExperienceSectionProps) {
  const { highlights, experienceLedger } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="bg-bg-dark text-paper py-section-y">
      <div className="w-full max-w-7xl mx-auto px-gutter-lg md:px-gutter-2xl">
        {/* Section Header */}
        <div className="flex items-center gap-gutter-lg mb-gutter-2xl reveal">
          <span className="font-eyebrow text-eyebrow uppercase text-paper shrink-0">
            ORGANIZATIONAL EXPERIENCE
          </span>
          <div className="flex items-center gap-gutter-sm flex-grow" aria-hidden="true">
            <StarIcon size={12} className="text-gold shrink-0" />
            <div className="h-px bg-rule-dark w-full" />
          </div>
          <span className="font-eyebrow text-eyebrow uppercase text-gold shrink-0 tabular-nums">
            2025 – 2026
          </span>
        </div>

        {/* 4-Column Editorial Showcase Grid */}
        <div
          id="experience-cards"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter-lg reveal"
        >
          {highlights.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelectHighlight(item)}
              className="group cursor-pointer flex flex-col text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-dark-surface-container border border-rule-dark">
                <EditorialImage
                  src={item.image}
                  alt={item.imageAlt}
                  fallbackLabel={item.title}
                  variant="dark"
                  className="w-full h-full object-cover transition-transform duration-card-zoom ease-card-zoom group-hover:scale-105"
                />
                <span className="absolute top-gutter-md right-gutter-md font-eyebrow text-eyebrow-sm text-gold uppercase bg-bg-dark/80 px-gutter-sm py-gutter-xs tabular-nums">
                  {item.indexLabel}
                </span>
              </div>
              <header className="mt-gutter-md w-full text-center flex flex-col items-center gap-gutter-xs">
                <h3 className="font-title text-title-lg text-paper uppercase group-hover:text-gold transition-colors duration-hover-link">
                  {item.title}
                </h3>
                <p className="font-eyebrow text-eyebrow-sm text-gold uppercase">
                  {item.cardSubtitle}
                </p>
                <p className="font-eyebrow text-eyebrow-sm text-paper-muted uppercase tabular-nums">
                  {item.cardPeriod}
                </p>
              </header>
            </button>
          ))}
        </div>

        {/* Full Experience Detail Ledger */}
        <div
          id="experience-ledger"
          className="mt-gutter-2xl pt-gutter-2xl border-t border-rule-dark grid grid-cols-1 lg:grid-cols-2 gap-gutter-2xl reveal"
        >
          {experienceLedger.map((entry) => (
            <article key={entry.role} className="flex flex-col gap-gutter-md">
              <div className="flex flex-wrap items-baseline justify-between gap-gutter-sm border-b border-rule-dark pb-gutter-md">
                <div>
                  <h3 className="font-headline text-headline-md-mobile md:text-headline-md text-paper">
                    {entry.role}
                  </h3>
                  <p className="font-eyebrow text-eyebrow uppercase text-gold mt-gutter-xs">
                    {entry.organization}
                  </p>
                </div>
                <span className="font-eyebrow text-eyebrow uppercase text-paper-muted tabular-nums">
                  {entry.period}
                </span>
              </div>
              <ul className="flex flex-col gap-gutter-sm font-body text-body-md text-paper-muted">
                {entry.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-gutter-sm">
                    <span className="text-gold shrink-0" aria-hidden="true">
                      •
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
