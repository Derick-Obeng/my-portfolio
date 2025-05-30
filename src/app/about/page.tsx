
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Youtube } from 'lucide-react'; // Or PlayCircle if you prefer

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">About Me</h1>
        <p className="mt-3 text-xl text-muted-foreground">A Glimpse Into My Journey</p>
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
              <CardTitle className="text-3xl text-primary">Hello, I&apos;m [Your Name]</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg text-foreground/90">
              <p>
                Welcome to my personal space! I am a passionate and results-driven [Your Profession/Title] 
                with a strong foundation in [Key Skill/Area 1] and [Key Skill/Area 2]. My journey in 
                [Your Field] has been driven by a relentless curiosity and a commitment to creating 
                impactful solutions.
              </p>
              <p>
                Throughout my career, I&apos;ve had the opportunity to work on diverse projects, honing my 
                skills in [Specific Skill/Tool 1], [Specific Skill/Tool 2], and [Specific Skill/Tool 3]. 
                I thrive in collaborative environments and believe in the power of teamwork to achieve 
                extraordinary results.
              </p>
              <p>
                Beyond my professional endeavors, I am an avid [Your Hobby/Interest 1] and enjoy 
                [Your Hobby/Interest 2]. I believe that continuous learning and a well-rounded perspective 
                are key to personal and professional growth.
              </p>
              <p>
                This portfolio is a curated collection of my work, reflecting my skills, experiences, 
                and the passion I bring to every project. Feel free to explore and get in touch!
              </p>
            </CardContent>
          </div>
        </div>
      </Card>

      <section className="space-y-6 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-primary">
          A Little More About Me
        </h2>
        <div className="max-w-3xl mx-auto bg-card p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <p className="text-lg text-muted-foreground mb-6">
            Here you can watch a short video to get to know me and my work better.
          </p>
          <div 
            className="aspect-video w-full max-w-2xl mx-auto bg-muted/50 rounded-lg flex items-center justify-center shadow-inner border border-border"
            aria-label="Video placeholder"
            role="img"
            data-ai-hint="video player interface"
          >
            <Youtube className="h-16 w-16 text-primary/70 sm:h-20 sm:w-20" strokeWidth={1.5} />
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            (YouTube video will be embedded here)
          </p>
        </div>
      </section>

    </div>
  );
}
