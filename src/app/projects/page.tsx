import { ProjectCard } from '@/components/projects/ProjectCard';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with user authentication, product listings, shopping cart, and Stripe integration for payments. Built with Next.js, Tailwind CSS, and Firebase.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: "online store",
    projectUrl: '#',
    repoUrl: '#',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Firebase', 'Stripe'],
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application allowing users to create, assign, and track tasks. Features include drag-and-drop functionality and real-time updates.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: "productivity app",
    projectUrl: '#',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO'],
  },
  {
    title: 'Personal Portfolio Website',
    description: 'This very portfolio website, designed to showcase my skills and projects. Leverages GenAI for description enhancement and built with a focus on clean design and responsiveness.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: "web design",
    repoUrl: '#',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'GenAI'],
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets. Implemented various chart types and filtering options using D3.js and React.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: "charts graphs",
    projectUrl: '#',
    repoUrl: '#',
    tags: ['React', 'D3.js', 'Data Visualization', 'API Integration'],
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">My Projects</h1>
        <p className="mt-3 text-xl text-muted-foreground">A Showcase of My Work and Passion</p>
      </header>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
