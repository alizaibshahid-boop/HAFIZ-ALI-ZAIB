import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface BlurImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  blurSrc?: string;
  alt: string;
}

export function BlurImage({ src, blurSrc, alt, className, ...props }: BlurImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // If no blurSrc is provided, we can generate a tiny blurry version or just use a placeholder background
  return (
    <div className={cn('relative overflow-hidden bg-slate-900', className)}>
      {blurSrc ? (
        <img
          src={blurSrc}
          alt=""
          aria-hidden="true"
          className={cn(
            'absolute inset-0 w-full h-full object-cover filter blur-2xl scale-110 transition-opacity duration-[1.5s] ease-out',
            isLoaded ? 'opacity-0' : 'opacity-100'
          )}
        />
      ) : (
        <div 
          className={cn(
            'absolute inset-0 w-full h-full bg-gradient-to-br from-slate-800 to-slate-950 transition-opacity duration-[1.5s] ease-out',
            isLoaded ? 'opacity-0' : 'opacity-100'
          )}
        />
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={cn(
          'w-full h-full object-cover transition-opacity duration-[1.5s] ease-out',
          isLoaded ? 'opacity-100' : 'opacity-0'
        )}
        loading="lazy"
        {...props}
      />
    </div>
  );
}
