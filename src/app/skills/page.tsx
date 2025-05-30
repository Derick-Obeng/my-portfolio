import { SkillItem } from '@/components/skills/SkillItem';
import { Code, Database, Cloud, Palette, Search, Briefcase, LucideIcon } from 'lucide-react'; // Added more icons

interface Skill {
  name: string;
  proficiency: number;
  Icon?: LucideIcon;
  category: string;
}

const skillsData: Skill[] = [
  // Programming Languages
  { name: 'JavaScript', proficiency: 95, Icon: Code, category: 'Languages' },
  { name: 'TypeScript', proficiency: 90, Icon: Code, category: 'Languages' },
  { name: 'Python', proficiency: 80, Icon: Code, category: 'Languages' },
  { name: 'HTML5', proficiency: 98, Icon: Code, category: 'Languages' },
  { name: 'CSS3', proficiency: 95, Icon: Code, category: 'Languages' },

  // Frontend Frameworks/Libraries
  { name: 'React', proficiency: 95, Icon: Code, category: 'Frontend' },
  { name: 'Next.js', proficiency: 92, Icon: Code, category: 'Frontend' },
  { name: 'Vue.js', proficiency: 75, Icon: Code, category: 'Frontend' },
  { name: 'Tailwind CSS', proficiency: 90, Icon: Palette, category: 'Frontend' },
  
  // Backend Technologies
  { name: 'Node.js', proficiency: 88, Icon: Code, category: 'Backend' },
  { name: 'Express.js', proficiency: 85, Icon: Code, category: 'Backend' },
  { name: 'Firebase', proficiency: 80, Icon: Cloud, category: 'Backend' },
  
  // Databases
  { name: 'MongoDB', proficiency: 82, Icon: Database, category: 'Databases' },
  { name: 'PostgreSQL', proficiency: 78, Icon: Database, category: 'Databases' },
  { name: 'SQL', proficiency: 85, Icon: Database, category: 'Databases' },

  // Tools & Platforms
  { name: 'Git & GitHub', proficiency: 95, Icon: Briefcase, category: 'Tools' },
  { name: 'Docker', proficiency: 70, Icon: Briefcase, category: 'Tools' },
  { name: 'AWS Basics', proficiency: 65, Icon: Cloud, category: 'Tools' },

  // Other Skills
  { name: 'RESTful APIs', proficiency: 90, Icon: Search, category: 'Concepts' },
  { name: 'Agile Methodologies', proficiency: 85, Icon: Briefcase, category: 'Concepts' },
  { name: 'UI/UX Principles', proficiency: 75, Icon: Palette, category: 'Concepts' },
];

const categories = Array.from(new Set(skillsData.map(skill => skill.category)));

export default function SkillsPage() {
  return (
    <div className="space-y-12">
      <header className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">My Skills</h1>
        <p className="mt-3 text-xl text-muted-foreground">A Breakdown of My Technical Proficiencies</p>
      </header>
      
      {categories.map(category => (
        <section key={category}>
          <h2 className="text-3xl font-semibold text-foreground mb-6 pb-2 border-b border-primary/30">{category}</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {skillsData.filter(skill => skill.category === category).map((skill) => (
              <SkillItem key={skill.name} {...skill} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
