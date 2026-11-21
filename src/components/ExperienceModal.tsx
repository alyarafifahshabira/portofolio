import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import type { HighlightItem } from '../data/portfolioData';

interface ExperienceModalProps {
  item: HighlightItem | null;
  onClose: () => void;
}

export function ExperienceModal({ item, onClose }: ExperienceModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (item) {
      if (!dialog.open && typeof dialog.showModal === 'function') {
        dialog.showModal();
      }
    } else if (dialog.open) {
      dialog.close();
    }
  }, [item]);

  return (
    <dialog
      ref={dialogRef}
      id="experience-modal"
      aria-labelledby="modal-title"
      aria-describedby="modal-subtitle modal-body"
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onClick={(e) => {
        if (e.target === dialogRef.current) {
          onClose();
        }
      }}
      className="bg-light-surface text-ink border border-rule-light p-gutter-xl max-w-xl w-full mx-auto my-auto"
    >
      {item && (
        <div>
          <header className="flex items-start justify-between gap-gutter-md pb-gutter-md border-b border-rule-light">
            <div className="flex flex-col gap-gutter-xs">
              <h2
                id="modal-title"
                className="font-headline text-headline-md-mobile md:text-headline-md text-ink"
              >
                {item.title}
              </h2>
              <p
                id="modal-subtitle"
                className="font-eyebrow text-eyebrow text-gold-accessible uppercase"
              >
                {item.modalSubtitle}
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close dialog"
              className="inline-flex items-center justify-center w-10 h-10 border border-rule-light text-ink hover:border-gold hover:text-gold-accessible transition-colors duration-hover-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-accessible shrink-0"
            >
              <X size={16} aria-hidden="true" />
            </button>
          </header>

          <div
            id="modal-body"
            className="py-gutter-lg flex flex-col gap-gutter-md font-body text-body-md text-ink-muted"
          >
            <ul className="flex flex-col gap-gutter-sm">
              {item.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-gutter-sm">
                  <span className="text-gold-accessible shrink-0" aria-hidden="true">
                    •
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <footer className="pt-gutter-md border-t border-rule-light flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-gutter-lg py-gutter-sm border border-ink text-ink font-eyebrow text-eyebrow uppercase hover:bg-gold hover:border-gold hover:text-light-on-primary transition-colors duration-hover-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-accessible"
            >
              Close Ledger
            </button>
          </footer>
        </div>
      )}
    </dialog>
  );
}
