
export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} drick--All rights reserved.</p>
        <p>Built with  continouos curiosity.</p>
      </div>
    </footer>
  );
}
