import { Button } from "@/components/ui/button";
import { ScrollingName } from "@/components/home/ScrollingName";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="relative flex flex-1 flex-col items-center justify-center text-center -mx-4 -my-8 sm:-mx-6 md:-mx-8">
      <div className="absolute inset-0 animated-gradient-background -z-10 opacity-75"></div>
      <div className="relative z-0 px-4 py-8 sm:px-6 md:px-8 w-full">
        <ScrollingName name="Derrick Obeng" />
        
        <div className="max-w-2xl mx-auto mt-8 p-6 bg-card/25 dark:bg-card/25 backdrop-blur-md rounded-xl shadow-2xl border border-white/20 dark:border-white/10">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl mb-6">
            Hello, welcome to my portfolio
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Craft and showcase your professional journey. Display your projects, skills, and bio with elegance and clarity. Let FolioForge help you make a lasting impression.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
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
      </div>
    </div>
  );
}
