import { ContactForm } from '@/components/contact/ContactForm';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="space-y-12">
      <header className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">Contact Me</h1>
        <p className="mt-3 text-xl text-muted-foreground">Let&apos;s Connect and Create Something Amazing</p>
      </header>

      <ContactForm />

      <section className="text-center">
        <h2 className="text-2xl font-semibold text-foreground mb-4">Or reach out directly:</h2>
        <div className="flex justify-center space-x-4">
          <Button variant="outline" size="icon" asChild>
            <Link href="mailto:your.email@example.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
