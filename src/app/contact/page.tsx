
import { ContactForm } from '@/components/contact/ContactForm';
import { Button } from '@/components/ui/button';
import { X,Github,Phone, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="space-y-12">
      <header className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">Reach Out To Me!</h1>
        <p className="mt-3 text-xl text-muted-foreground">Let&apos;s Connect and Build things that bring changes</p>
      </header>

      <ContactForm />

      <section className="text-center">
        <h2 className="text-2xl font-semibold text-foreground mb-4">Or reach out directly:</h2>
        <div className="flex justify-center space-x-4">
          <Button variant="outline" size="icon" asChild>
            <Link href="mailto:derrickobeng023@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link href="https://www.linkedin.com/in/derrick-obeng-26b003340/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link href="https://github.com/Derick-Obeng" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link href="https://x.com/drick_dd?s=21&t=WV2GRhZdkS3m9BTRL3nD9Q" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
              <X className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link href="tel:+233593231286" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Phone className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
