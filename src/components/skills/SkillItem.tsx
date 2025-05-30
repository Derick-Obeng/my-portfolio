import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { LucideIcon } from 'lucide-react';

interface SkillItemProps {
  name: string;
  proficiency: number; // 0-100
  Icon?: LucideIcon;
  category: string;
}

export function SkillItem({ name, proficiency, Icon, category }: SkillItemProps) {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-medium text-primary flex items-center">
          {Icon && <Icon className="mr-2 h-5 w-5 text-accent" />}
          {name}
        </CardTitle>
        <span className="text-xs text-muted-foreground">{category}</span>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">{proficiency}%</div>
        <Progress value={proficiency} className="mt-2 h-2" indicatorClassName="bg-accent" />
        <p className="text-xs text-muted-foreground mt-1">
          Proficiency Level
        </p>
      </CardContent>
    </Card>
  );
}
