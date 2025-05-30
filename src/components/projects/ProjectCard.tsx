import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageHint?: string;
  projectUrl?: string;
  repoUrl?: string;
  tags: string[];
}

export function ProjectCard({ title, description, imageUrl, imageHint, projectUrl, repoUrl, tags }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
      <div className="relative w-full h-48 sm:h-56 md:h-64">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          data-ai-hint={imageHint || "project technology"}
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-2xl text-primary">{title}</CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map(tag => (
            <span key={tag} className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-foreground/80 leading-relaxed">{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2 justify-start pt-4 border-t">
        {projectUrl && (
          <Button asChild variant="outline" size="sm">
            <Link href={projectUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              View Project
            </Link>
          </Button>
        )}
        {repoUrl && (
          <Button asChild variant="ghost" size="sm">
            <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Source Code
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
