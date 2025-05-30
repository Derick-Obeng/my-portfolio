
"use client";

import { useEffect, useState } from 'react';
import { Montserrat } from 'next/font/google';

// Initialize Montserrat Black (900 weight) for a bold appearance
const montserratBlack = Montserrat({
 // subsets: ['latin'],
  weight: '900',
});

interface ScrollingNameProps {
  name: string;
}

export function ScrollingName({ name }: ScrollingNameProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const nameParts = name.split(' ');
  const firstName = nameParts[0] || '';
  const lastName = nameParts.slice(1).join(' ') || '';

  const nameContent = (
    <>
      <span className="text-primary">{firstName}</span>
      {lastName && <span className="text-primary">&nbsp;{lastName}</span>}
    </>
  );

  // Fallback for SSR or initial render to avoid layout shift / hydration mismatch
  // Applies Montserrat font and new structure for accurate space reservation.
  if (!isMounted) {
    return (
      <div className="scrolling-text-container py-4 md:py-8">
        <h1 className={`${montserratBlack.className} text-5xl md:text-7xl lg:text-8xl tracking-tight opacity-0`}>
          {nameContent}
        </h1>
      </div>
    );
  }
  
  return (
    <div className="scrolling-text-container py-4 md:py-8">
      <h1 className={`scrolling-text ${montserratBlack.className} text-5xl md:text-7xl lg:text-8xl tracking-tight`}>
        {nameContent}
      </h1>
    </div>
  );
}
