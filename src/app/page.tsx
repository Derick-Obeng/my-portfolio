
import { Button } from "@/components/ui/button";
import { ScrollingName } from "@/components/home/ScrollingName";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col relative py-8 md:py-12">
      
      <div className="w-full max-w-2xl mx-auto text-left">
        <p className="text-lg text-muted-foreground mb-4">
          Hello, welcome to my portfolio
        </p>
      </div>

      <div className="text-center w-full my-4 md:my-6">
        <ScrollingName name="Derrick Obeng" />
      </div>
      
      <div className="w-full max-w-2xl mx-auto mt-8 text-left">
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

