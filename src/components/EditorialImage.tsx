import { useState } from 'react';
import { StarIcon } from './StarIcon';

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
  variant?: 'light' | 'dark';
}

export function EditorialImage({
  src,
  alt,
  className = '',
  fallbackLabel,
  variant = 'dark',
}: EditorialImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    const isLight = variant === 'light';
    return (
      <div
        role="img"
        aria-label={alt}
        className={`w-full h-full flex flex-col items-center justify-center p-gutter-lg text-center ${
          isLight
            ? 'bg-bg-cream-dark text-ink-muted border border-rule-light'
            : 'bg-dark-surface-container text-paper-muted border border-rule-dark'
        }`}
      >
        <StarIcon size={18} className="text-gold mb-gutter-sm" />
        <span className="font-title text-title-lg uppercase tracking-wider">
          {fallbackLabel || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
