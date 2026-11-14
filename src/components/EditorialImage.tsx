import { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  priority?: boolean;
}

export function EditorialImage({
  src,
  alt,
  className = '',
  fallbackTitle,
  priority = false,
}: EditorialImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-neutral-100 text-neutral-500 p-6 text-center ${className}`}
      >
        <ImageOff className="w-6 h-6 mb-2 text-neutral-400" strokeWidth={1.5} aria-hidden="true" />
        <span className="text-xs font-medium tracking-wide text-neutral-600">
          {fallbackTitle ?? alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading={priority ? 'eager' : 'lazy'}
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
