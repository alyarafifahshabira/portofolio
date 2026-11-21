import { PORTFOLIO_DATA, type SkillToolItem } from '../data/portfolioData';
import { EditorialImage } from './EditorialImage';
import { StarIcon } from './StarIcon';

function SkillToolGlyph({ icon }: { icon: SkillToolItem['icon'] }) {
  const commonProps = {
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.25,
    className: 'text-gold-accessible shrink-0',
    'aria-hidden': true as const,
  };

  switch (icon) {
    case 'grid':
      return (
        <svg {...commonProps}>
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
        </svg>
      );
    case 'spreadsheet':
      return (
        <svg {...commonProps}>
          <path d="M4 4h16v16H4z" />
          <path d="M4 10h16M10 4v16" />
        </svg>
      );
    case 'document':
      return (
        <svg {...commonProps}>
          <path d="M6 3h9l5 5v13H6z" />
          <path d="M14 3v6h6M9 13h6M9 17h4" />
        </svg>
      );
    case 'design':
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v10M7 12h10" />
        </svg>
      );
    case 'video':
      return (
        <svg {...commonProps}>
          <rect x="3" y="5" width="18" height="14" />
          <path d="M10 9l5 3-5 3z" />
        </svg>
      );
  }
}

export function CapabilitiesSection() {
  const { skillsTools, coreStrengths, capabilitiesFeature } = PORTFOLIO_DATA;

  return (
    <section id="capabilities" className="bg-bg-cream silk-overlay py-section-y">
      <div className="w-full max-w-7xl mx-auto px-gutter-lg md:px-gutter-2xl grid grid-cols-1 lg:grid-cols-[1fr_auto_1.15fr_1.35fr] gap-gutter-xl items-start reveal">
        {/* Column 1: Skills & Tools */}
        <div className="flex flex-col">
          <span className="font-eyebrow text-eyebrow uppercase text-gold-accessible mb-gutter-xl">
            SKILLS &amp; TOOLS
          </span>
          <ul className="flex flex-col gap-gutter-lg">
            {skillsTools.map((skill) => (
              <li
                key={skill.name}
                className="flex items-center gap-gutter-md pb-gutter-md border-b border-rule-light"
              >
                <SkillToolGlyph icon={skill.icon} />
                <span className="font-body text-body-md text-ink">
                  {skill.name}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Vertical Divider Column (Desktop) */}
        <div
          className="hidden lg:flex flex-col items-center justify-between self-stretch py-gutter-md"
          aria-hidden="true"
        >
          <StarIcon size={10} className="text-gold" />
          <div className="w-px flex-grow bg-rule-light my-gutter-sm" />
          <StarIcon size={10} className="text-gold" />
          <div className="w-px flex-grow bg-rule-light my-gutter-sm" />
          <StarIcon size={10} className="text-gold" />
          <div className="w-px flex-grow bg-rule-light my-gutter-sm" />
          <StarIcon size={10} className="text-gold" />
        </div>

        {/* Column 2: Core Competencies */}
        <div className="flex flex-col">
          <span className="font-eyebrow text-eyebrow uppercase text-gold-accessible mb-gutter-xl">
            CORE STRENGTHS
          </span>
          <div className="flex flex-col gap-gutter-xl">
            {coreStrengths.map((strength) => (
              <div key={strength.number} className="flex items-start gap-gutter-lg">
                <span className="font-display text-headline-md-mobile md:text-headline-md text-gold-accessible leading-none tabular-nums shrink-0">
                  {strength.number}
                </span>
                <div className="flex flex-col gap-gutter-xs">
                  <h3 className="font-eyebrow text-eyebrow uppercase text-ink">
                    {strength.title}
                  </h3>
                  <p className="font-body text-body-sm text-ink-muted">
                    {strength.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 3: Editorial Photo & Quote Feature */}
        <div className="relative aspect-[4/3] overflow-hidden bg-bg-dark">
          <EditorialImage
            src={capabilitiesFeature.image}
            alt={capabilitiesFeature.imageAlt}
            fallbackLabel={capabilitiesFeature.initials}
            variant="dark"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-tr from-bg-dark/90 via-bg-dark/45 to-transparent"
            aria-hidden="true"
          />
          <div className="absolute bottom-gutter-lg left-gutter-lg right-gutter-lg flex items-end justify-between gap-gutter-md">
            <div className="flex flex-col max-w-sm">
              <span
                className="font-display text-headline-lg text-gold leading-none"
                aria-hidden="true"
              >
                “
              </span>
              <p className="font-eyebrow text-eyebrow uppercase text-paper leading-relaxed">
                {capabilitiesFeature.quote}
              </p>
            </div>
            <span className="font-display text-title-lg text-paper/80 shrink-0 select-none">
              {capabilitiesFeature.initials}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
