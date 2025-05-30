
import { Button } from "@/components/ui/button";
import { ScrollingName } from "@/components/home/ScrollingName";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col relative py-8 md:py-12">
      {/* Fading Graph Lines Effect - Top Left */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8 w-32 h-32 md:w-40 md:h-40 pointer-events-none opacity-50">
        <svg width="100%" height="100%" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineFadeGradientLeft" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="1"/> 
              <stop offset="100%" stopColor="currentColor" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="lineFadeGradientRight" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="1"/>
              <stop offset="100%" stopColor="currentColor" stopOpacity="0"/>
            </linearGradient>
          </defs>
          {/* Vertical Lines */}
          <line x1="30" y1="10" x2="30" y2="140" stroke="url(#lineFadeGradientLeft)" strokeWidth="1.5" className="text-primary"/>
          <line x1="70" y1="10" x2="70" y2="140" stroke="url(#lineFadeGradientLeft)" strokeWidth="1" className="text-accent"/>
          <line x1="110" y1="10" x2="110" y2="140" stroke="url(#lineFadeGradientLeft)" strokeWidth="1.5" className="text-primary"/>
          
          {/* Horizontal Lines */}
          <line x1="10" y1="30" x2="140" y2="30" stroke="url(#lineFadeGradientLeft)" strokeWidth="1.5" className="text-accent"/>
          <line x1="10" y1="70" x2="140" y2="70" stroke="url(#lineFadeGradientLeft)" strokeWidth="1" className="text-primary"/>
          <line x1="10" y1="110" x2="140" y2="110" stroke="url(#lineFadeGradientLeft)" strokeWidth="1.5" className="text-accent"/>
        </svg>
      </div>

      {/* Fading Graph Lines Effect - Top Right */}
      <div className="absolute top-4 right-4 md:top-8 md:right-8 w-48 h-48 pointer-events-none opacity-60">
        <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Using the existing lineFadeGradientRight definition */}
          <line x1="50" y1="190" x2="190" y2="50" stroke="url(#lineFadeGradientRight)" strokeWidth="2.5" className="text-primary"/>
          <line x1="80" y1="190" x2="180" y2="80" stroke="url(#lineFadeGradientRight)" strokeWidth="1.5" className="text-accent"/>
          <line x1="110" y1="190" x2="170" y2="110" stroke="url(#lineFadeGradientRight)" strokeWidth="2" className="text-primary"/>
          <line x1="130" y1="190" x2="160" y2="150" stroke="url(#lineFadeGradientRight)" strokeWidth="1" className="text-accent"/>
        </svg>
      </div>

      <div className="w-full max-w-2xl mx-auto text-left">
        <p className="text-lg text-muted-foreground mb-4">
          Hello, welcome to my portfolio
        </p>
      </div>

      <div className="text-center w-full my-4 md:my-6">
        <ScrollingName name="Derrick Obeng" />
      </div>
      
      <div 
        className="w-full max-w-2xl mx-auto mt-8 text-left p-6 
                   bg-gradient-to-br from-primary/5 via-secondary/10 to-transparent
                   dark:from-primary/10 dark:via-secondary/15"
      >
        <p className="mb-8 text-lg text-muted-foreground">
          Craft and showcase your professional journey. Display your projects, skills, and bio with elegance and clarity. Let FolioForge help you make a lasting impression.
        </p>
        <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-4">
          <Button asChild size="lg" className="shadow-md hover:shadow-lg transition-shadow">
            <Link href="/projects">
              View My Work <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="shadow-md hover:shadow-lg transition-shadow">
            <Link href="/contact">
              Get In Touch
            </Link>
          </Button>
        </div>
      </div>

      {/* Dot Splash Effect - Enhanced */}
      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex items-end justify-end w-72 h-72 md:w-96 md:h-96 pointer-events-none opacity-70">
        <div className="relative w-full h-full">
          {/* Big Dots (5) */}
          <div className="absolute w-8 h-8 bg-primary rounded-full opacity-50" style={{ bottom: '5%', right: '55%', animation: 'float 6s ease-in-out infinite 0.2s' }}></div>
          <div className="absolute w-7 h-7 bg-accent rounded-full opacity-40" style={{ bottom: '20%', right: '35%', animation: 'float 7s ease-in-out infinite 0.5s' }}></div>
          <div className="absolute w-8 h-8 bg-primary rounded-full opacity-60" style={{ bottom: '40%', right: '15%', animation: 'float 5s ease-in-out infinite 0.8s' }}></div>
          <div className="absolute w-7 h-7 bg-accent rounded-full opacity-30" style={{ bottom: '10%', right: '5%', animation: 'float 8s ease-in-out infinite 0.3s' }}></div>
          <div className="absolute w-8 h-8 bg-primary rounded-full opacity-45" style={{ bottom: '50%', right: '45%', animation: 'float 6.5s ease-in-out infinite 1.1s' }}></div>
          
          {/* Small Dots (5) */}
          <div className="absolute w-4 h-4 bg-accent rounded-full opacity-35" style={{ bottom: '15%', right: '70%', animation: 'float 5.5s ease-in-out infinite 0.1s' }}></div>
          <div className="absolute w-3 h-3 bg-primary rounded-full opacity-25" style={{ bottom: '30%', right: '60%', animation: 'float 7.5s ease-in-out infinite 0.6s' }}></div>
          <div className="absolute w-4 h-4 bg-accent rounded-full opacity-40" style={{ bottom: '2%', right: '25%', animation: 'float 6s ease-in-out infinite 0.9s' }}></div>
          <div className="absolute w-3 h-3 bg-primary rounded-full opacity-30" style={{ bottom: '45%', right: '0%', animation: 'float 8.5s ease-in-out infinite 0.4s' }}></div>
          <div className="absolute w-4 h-4 bg-accent rounded-full opacity-20" style={{ bottom: '28%', right: '22%', animation: 'float 5s ease-in-out infinite 1.3s' }}></div>
        </div>
      </div>
    </div>
  );
}
