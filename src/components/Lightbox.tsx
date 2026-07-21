import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { X } from 'lucide-react';

type LightboxImage = { src: string; alt: string };
type LightboxContextValue = {
  open: (src: string, alt: string) => void;
  close: () => void;
};

const LightboxContext = createContext<LightboxContextValue | null>(null);

export function useLightbox() {
  return useContext(LightboxContext);
}

export function LightboxProvider({ children }: { children: React.ReactNode }) {
  const [image, setImage] = useState<LightboxImage | null>(null);

  const open = useCallback((src: string, alt: string) => setImage({ src, alt }), []);
  const close = useCallback(() => setImage(null), []);

  useEffect(() => {
    if (!image) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [image, close]);

  return (
    <LightboxContext.Provider value={{ open, close }}>
      {children}
      {image && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/90 p-4 backdrop-blur-sm animate-fade-in"
          onClick={close}
        >
          <button
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-ink-50/10 text-ink-50 ring-1 ring-ink-50/20 transition-all duration-300 hover:scale-110 hover:bg-ink-50/20"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={image.src}
            alt={image.alt}
            className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </LightboxContext.Provider>
  );
}
