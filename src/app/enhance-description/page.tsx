import { DescriptionEnhancer } from '@/components/enhance-description/DescriptionEnhancer';

export default function EnhanceDescriptionPage() {
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">Enhance Your Writing</h1>
        <p className="mt-3 text-xl text-muted-foreground">Let AI help you refine your project descriptions.</p>
      </header>
      
      <DescriptionEnhancer />
    </div>
  );
}
