
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Youtube } from 'lucide-react'; // Or PlayCircle if you prefer

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">Know something about Me</h1>
        <p className="mt-3 text-xl text-muted-foreground">meet Me</p>
      </header>

      <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <div className="md:flex">
          <div className="md:w-1/3">
            <div className="relative h-64 w-full md:h-full">
              <Image
                src="https://placehold.co/600x800.png"
                alt="Professional Headshot"
                layout="fill"
                objectFit="cover"
                data-ai-hint="professional portrait"
                className="rounded-l-lg"
              />
            </div>
          </div>
          <div className="md:w-2/3">
            <CardHeader>
              <CardTitle className="text-3xl text-primary">Hello, I&apos;m Derrick Obeng </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg text-foreground/90">
              <p>
                a Software Engineer passionate about solving real-world problems with smart, scalable technology.
                With a solid foundation in Computer Science at the University of Ghana, I specialize in full-stack
                 development and clean architecture powered by strategic AI integration. I build user-centric 
                 systems that automate workflows, enhance predictive capabilities, and turn data into meaningful decisions.
              </p>
              <p>
                My goal has always been helping organizations not just keep up, but staying ahead wiht
                solutions evole, anticipate needs and scale efficiently.

                For teams and clients that means faster development, smater opperations and tech that
                can deliver works to the next level, so you can focus on innovation, not firefighting.
              </p>
              <p>Let&apos;s Build technology that doesn&apos;t just function But makes Impact.
              </p>
            </CardContent>
          </div>
        </div>
      </Card>

      <section className="space-y-6 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-primary">
          watch Me
        </h2>
        <div className="max-w-3xl mx-auto bg-card p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <p className="text-lg text-muted-foreground mb-6">
            play the video.
          </p>
          <div 
            className="aspect-video w-full max-w-2xl mx-auto bg-muted/50 rounded-lg flex items-center justify-center shadow-inner border border-border"
            aria-label="Video placeholder"
            role="img"
            data-ai-hint="video player interface"
          >
            <Youtube className="h-16 w-16 text-primary/70 sm:h-20 sm:w-20" strokeWidth={1.5} />
          </div>
          
        </div>
      </section>

    </div>
  );
}
