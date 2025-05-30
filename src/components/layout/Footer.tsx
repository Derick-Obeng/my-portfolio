
import Link from 'next/link';
import { Twitter, Phone, Mail, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-4 py-6 text-sm text-muted-foreground">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <p>&copy; {new Date().getFullYear()} drick&mdash;All rights reserved.</p>
          <p>Built with continuous curiosity.</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" asChild aria-label="Email Derrick Obeng">
            <Link href="mailto:derrickobeng023@gmail.com">
              <Mail className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild aria-label="Derrick Obeng on LinkedIn">
            <Link href="https://www.linkedin.com/in/derrick-obeng-26b003340/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild aria-label="Derrick Obeng on GitHub">
            <Link href="https://github.com/Derick-Obeng" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild aria-label="Derrick Obeng on X (Twitter)">
            <Link href="https://x.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild aria-label="Call Derrick Obeng">
            <Link href="tel:+1234567890">
              <Phone className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
