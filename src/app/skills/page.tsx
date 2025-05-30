import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Skill {
  name: string;
  category: string;
}

// Updated skillsData: removed proficiency and Icon
const skillsData: Skill[] = [
  // Programming Languages
  { name: 'JavaScript', category: 'Languages' },
  { name: 'TypeScript', category: 'Languages' },
  { name: 'Python', category: 'Languages' },
  { name: 'HTML5', category: 'Languages' },
  { name: 'CSS3', category: 'Languages' },
  { name: 'SQL', category: 'Languages' },

  // Frontend Frameworks/Libraries
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Vue.js', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  
  // Backend Technologies
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express.js', category: 'Backend' },
  { name: 'Firebase', category: 'Backend' }, // Firebase can be backend/DB, user has it in Backend
  
  // Databases
  { name: 'MongoDB', category: 'Databases' },
  { name: 'PostgreSQL', category: 'Databases' },

  // Tools & Platforms
  { name: 'Git & GitHub', category: 'Tools' },
  { name: 'Docker', category: 'Tools' },
  { name: 'AWS Basics', category: 'Tools' },

  // Other Skills / Concepts
  { name: 'RESTful APIs', category: 'Concepts' },
  { name: 'Agile Methodologies', category: 'Concepts' },
  { name: 'UI/UX Principles', category: 'Concepts' },
];

const categoryOrder = [
  'Languages',
  'Frontend',
  'Backend',
  'Databases',
  'Tools',
  'Concepts',
];

const categoryDisplayNames: Record<string, string> = {
  Languages: 'Programming Languages & Core',
  Frontend: 'Frontend',
  Backend: 'Backend & Frameworks',
  Databases: 'Databases',
  Tools: 'Dev Tools & Other Technologies',
  Concepts: 'Concepts & Methodologies',
};


export default function SkillsPage() {
  const categories = categoryOrder.filter(cat => skillsData.some(skill => skill.category === cat));

  return (
    <div className="space-y-12">
      <header className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">My Skills</h1>
        <p className="mt-3 text-xl text-muted-foreground">A Showcase of My Technical Expertise</p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map(category => (
          <Card key={category} className="shadow-lg flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">{categoryDisplayNames[category] || category}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2 flex-grow">
              {skillsData
                .filter(skill => skill.category === category)
                .map((skill) => (
                  <Badge 
                    key={skill.name} 
                    variant="secondary" 
                    className="px-3 py-1.5 text-sm rounded-md"
                  >
                    {skill.name}
                  </Badge>
                ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
