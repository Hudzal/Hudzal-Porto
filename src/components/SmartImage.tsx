import { useState } from 'react';
import { useLightbox } from './Lightbox';

type SmartImageProps = {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  loading?: 'lazy' | 'eager';
  fill?: boolean;
  onError?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
};

export function SmartImage({
  src,
  alt,
  className = '',
  wrapperClassName = '',
  loading = 'lazy',
  fill = false,
  onError,
}: SmartImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const lightbox = useLightbox();

  return (
    <div
      className={`relative overflow-hidden ${fill ? 'absolute inset-0 h-full w-full' : ''} ${wrapperClassName}`}
    >
      {!loaded && <div className="absolute inset-0 shimmer" />}
      <img
        src={src}
        alt={alt}
        className={`${className} ${loaded && !error ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 ${!error ? 'cursor-zoom-in' : ''}`}
        loading={loading}
        onLoad={() => setLoaded(true)}
        onError={(e) => {
          setError(true);
          setLoaded(true);
          onError?.(e);
        }}
        onClick={() => {
          if (loaded && !error) lightbox?.open(src, alt);
        }}
      />
    </div>
  );
}
