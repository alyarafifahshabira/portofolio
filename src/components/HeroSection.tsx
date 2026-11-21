import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { EditorialImage } from './EditorialImage';
import { StarIcon } from './StarIcon';

export function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { nav, hero } = PORTFOLIO_DATA;

  return (
    <header className="relative bg-bg-cream silk-overlay overflow-hidden min-h-screen flex flex-col justify-between">
      {/* Top Utility Bar */}
      <nav
        aria-label="Primary Navigation"
        className="w-full max-w-7xl mx-auto px-gutter-lg md:px-gutter-2xl pt-gutter-lg pb-gutter-md flex items-center justify-between gap-gutter-md relative z-20"
      >
        <span className="font-eyebrow text-eyebrow uppercase text-ink whitespace-nowrap shrink-0">
          {nav.brand}
        </span>

        <div className="hidden lg:flex items-center gap-gutter-xl">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-eyebrow text-eyebrow uppercase text-ink hover:text-gold-accessible transition-colors duration-hover-link whitespace-nowrap shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-accessible"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-gutter-md shrink-0">
          <div className="flex items-center gap-gutter-sm">
            <StarIcon size={14} className="text-gold" />
            <span className="font-eyebrow text-eyebrow uppercase text-ink tabular-nums">
              {nav.year}
            </span>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 border border-rule-light text-ink hover:border-gold hover:text-gold-accessible transition-colors duration-hover-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-accessible"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden relative z-20 mx-gutter-lg mb-gutter-md border border-rule-light bg-bg-cream/95 px-gutter-lg py-gutter-md">
          <div className="flex flex-col gap-gutter-sm">
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-eyebrow text-eyebrow uppercase text-ink hover:text-gold-accessible py-gutter-xs border-b border-rule-light/60 last:border-b-0 transition-colors duration-hover-link"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Giant Masthead Title */}
      <div className="w-full px-gutter-md md:px-gutter-xl mt-gutter-sm relative z-[1] select-none">
        <h1 className="masthead-title text-center text-ink uppercase w-full">
          PORTFOLIO
        </h1>
      </div>

      {/* Hero Foreground Grid */}
      <div className="w-full max-w-7xl mx-auto px-gutter-lg md:px-gutter-2xl lg:-mt-12 grid grid-cols-1 lg:grid-cols-[1fr_1.25fr_0.6fr] items-end gap-gutter-xl relative z-[2]">
        {/* Left Column */}
        <div className="pb-gutter-lg lg:pb-16 flex flex-col items-start order-2 lg:order-1">
          <span className="font-eyebrow text-eyebrow uppercase text-gold-accessible">
            {hero.eyebrow}
          </span>
          <h2 className="subheadline-hero uppercase text-ink mt-gutter-sm mb-gutter-md text-balance">
            {hero.headlineLines[0]}
            <br />
            {hero.headlineLines[1]}
            <br />
            {hero.headlineLines[2]}
          </h2>
          <div className="w-10 h-px bg-gold mb-gutter-md" aria-hidden="true" />
          <p className="font-body text-body-sm text-ink-muted max-w-md text-pretty">
            {hero.about}
          </p>
          <p className="signature-name uppercase text-gold-accessible mt-gutter-lg">
            {hero.signatureLines[0]}
            <br />
            {hero.signatureLines[1]}
          </p>
        </div>

        {/* Center Column: Portrait */}
        <div className="flex justify-center items-end self-end order-1 lg:order-2 relative">
          <div className="w-full max-w-md lg:max-w-lg flex justify-center">
            <EditorialImage
              src={hero.portraitUrl}
              alt={hero.portraitAlt}
              fallbackLabel="Alya Rafifah Shabira"
              variant="light"
              className="w-full max-h-[540px] lg:max-h-[640px] object-contain object-bottom mix-blend-multiply"
            />
          </div>
        </div>

        {/* Right Column: Rotating Circular Seal */}
        <div className="hidden sm:flex justify-end items-end pb-gutter-xl lg:pb-20 order-3">
          <div
            className="relative w-28 h-28 flex items-center justify-center"
            aria-label="Technology, Education, Design monogram seal"
          >
            <svg
              viewBox="0 0 120 120"
              className="w-full h-full seal-spin text-gold-accessible"
              aria-hidden="true"
            >
              <defs>
                <path
                  id="sealPath"
                  d="M 60, 60 m -44, 0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
                />
              </defs>
              <text
                fill="currentColor"
                fontFamily="Plus Jakarta Sans, sans-serif"
                fontSize="8.5"
                fontWeight="500"
                letterSpacing="2.4"
              >
                <textPath href="#sealPath" startOffset="0%">
                  TECHNOLOGY • EDUCATION • DESIGN •{' '}
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="font-display text-headline-md text-gold-accessible leading-none">
                A
              </span>
              <StarIcon
                size={8}
                className="text-gold ml-gutter-xs -mt-gutter-md"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
