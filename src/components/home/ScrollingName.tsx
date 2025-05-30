
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

  // Split the name into first and last parts for separate styling
  // This assumes a simple two-part name for "Derrick Obeng"
  // For more complex names, this logic might need adjustment
  const nameParts = name.split(' ');
  const firstName = nameParts[0] || '';
  const lastName = nameParts.slice(1).join(' ') || '';

  const nameContent = (
    <>
      <span className="text-foreground">{firstName}</span>
      {lastName && <span className="text-primary">&nbsp;{lastName}</span>}
      <span className="text-primary">&nbsp; • &nbsp;</span>
    </>
  );

  if (!isMounted) {
    // Fallback for SSR or initial render to avoid layout shift / hydration mismatch
    // Use font-black for weight consistency. Single color is fine for opacity-0.
    // The content structure should roughly match the visible one for accurate space reservation.
    return (
      <div className="scrolling-text-container py-4 md:py-8">
        <span className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight opacity-0">
          {/* Render the parts for accurate spacing, even if colors differ */}
          <span className="text-foreground">{firstName}</span>
          {lastName && <span className="text-primary">&nbsp;{lastName}</span>}
          <span className="text-primary">&nbsp; • &nbsp;</span>
        </span>
      </div>
    );
  }
  
  return (
    <div className="scrolling-text-container py-4 md:py-8">
      <h1 className="scrolling-text text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
        {nameContent}
      </h1>
    </div>
  );
}
