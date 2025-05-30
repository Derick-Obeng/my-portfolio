import { Button } from "@/components/ui/button";
import { ScrollingName } from "@/components/home/ScrollingName";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <ScrollingName name="Your Name Here" />
      
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl mb-6">
          Welcome to FolioForge
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
  );
}
