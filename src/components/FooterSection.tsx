import { PORTFOLIO_DATA } from '../data/portfolioData';
import { StarIcon } from './StarIcon';

export function FooterSection() {
  const { contact } = PORTFOLIO_DATA;

  return (
    <footer id="contact" className="bg-bg-dark text-paper py-section-y">
      <div className="w-full max-w-7xl mx-auto px-gutter-lg md:px-gutter-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.3fr_auto_1.1fr_1fr_0.8fr] gap-gutter-xl items-start reveal">
        {/* Column 1 */}
        <div className="flex flex-col items-start">
          <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg uppercase text-paper">
            LET&apos;S CREATE
            <br />
            SOMETHING
            <br />
            MEANINGFUL
          </h2>
          <StarIcon size={20} className="text-gold mt-gutter-lg" />
        </div>

        {/* Vertical Hairline Divider */}
        <div
          className="hidden lg:block w-px h-full bg-rule-dark self-stretch"
          aria-hidden="true"
        />

        {/* Column 2: Contact Me */}
        <div className="flex flex-col items-start">
          <span className="font-eyebrow text-eyebrow uppercase text-gold mb-gutter-lg">
            CONTACT ME
          </span>
          <div
            id="contact-details"
            className="flex flex-col gap-gutter-md font-body text-body-md text-paper-muted"
          >
            <a
              href={`tel:${contact.phone}`}
              className="hover:text-gold transition-colors duration-hover-link tabular-nums"
            >
              {contact.phone}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="hover:text-gold transition-colors duration-hover-link"
            >
              {contact.email}
            </a>
            <p className="text-paper-muted leading-relaxed">
              {contact.address}
            </p>
          </div>
        </div>

        {/* Column 3: Quick Navigation & Affiliation */}
        <div className="flex flex-col items-start">
          <span className="font-eyebrow text-eyebrow uppercase text-gold mb-gutter-lg">
            ACADEMIC &amp; LINKS
          </span>
          <ul className="flex flex-col gap-gutter-sm font-eyebrow text-eyebrow uppercase text-paper-muted mb-gutter-lg">
            <li>
              <a
                href="#experience"
                className="hover:text-gold transition-colors duration-hover-link"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#capabilities"
                className="hover:text-gold transition-colors duration-hover-link"
              >
                Capabilities
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="hover:text-gold transition-colors duration-hover-link"
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#achievements"
                className="hover:text-gold transition-colors duration-hover-link"
              >
                Achievements
              </a>
            </li>
          </ul>
          <p className="font-body text-body-sm text-paper-muted">
            {contact.affiliation}
          </p>
        </div>

        {/* Column 4: Editorial Monogram Watermark */}
        <div className="flex items-center justify-start lg:justify-end self-center">
          <span className="monogram-watermark select-none" aria-hidden="true">
            {contact.watermark}
          </span>
        </div>
      </div>

      {/* Sub-Footer Bar */}
      <div className="w-full max-w-7xl mx-auto px-gutter-lg md:px-gutter-2xl mt-gutter-2xl pt-gutter-lg border-t border-rule-dark flex flex-col sm:flex-row items-center justify-between gap-gutter-md font-eyebrow text-eyebrow-sm uppercase text-paper-muted">
        <span className="tabular-nums">{contact.copyright}</span>
        <span>ALL RIGHTS RESERVED</span>
      </div>
    </footer>
  );
}
