"use client";

import { useEffect, useState } from 'react';

interface ScrollingNameProps {
  name: string;
}

export function ScrollingName({ name }: ScrollingNameProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // Fallback for SSR or initial render to avoid layout shift / hydration mismatch
    return (
      <div className="scrolling-text-container py-4 md:py-8">
        <span className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-primary opacity-0">
          {name}
        </span>
      </div>
    );
  }
  
  return (
    <div className="scrolling-text-container py-4 md:py-8">
      <h1 className="scrolling-text text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-primary">
        {name} &nbsp; • &nbsp; {name} &nbsp; • &nbsp;
      </h1>
    </div>
  );
}
