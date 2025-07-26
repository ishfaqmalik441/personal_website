import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Code, 
  Database, 
  Cloud, 
  Smartphone, 
  Palette, 
  GitBranch,
  Server,
  Shield
} from 'lucide-react';
import StarRating from './StarRating';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      skills: [
        { name: 'React', level: 4 },
        { name: 'TypeScript', level: 4 },
        { name: 'JavaScript', level: 4},
        { name: 'Next.js', level: 4 },
        { name: 'CSS', level: 4 },
      ],
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 4 },
        { name: 'Python', level: 4 },
        { name: 'Java', level: 4 },
        { name: 'C++', level: 4 },
        { name: 'Ruby', level: 3 },
      ],
    },
    {
      title: 'Data Analytics',
      icon: Palette,
      skills: [
        { name: 'Python', level: 4 },
        { name: 'R', level: 4 },
        { name: 'Matplotlib', level: 4 },
        { name: 'BeautifulSoup', level: 4},
        { name: 'Microsoft Excel', level: 4 },
      ],
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      skills: [
        { name: 'React Native', level: 4 },
        { name: 'Swift', level: 3 },
        { name: 'App Store Connect', level: 4 },
        { name: 'Google Play Console',  level: 4 },
      ],
    },
    {
      title: 'Database & Storage',
      icon: Database,
      skills: [
        { name: 'MySQL', level: 4 },
        { name: 'MongoDB', level: 4 },
        { name: 'GraphQL', level: 4 },
        { name: 'SQLite', level: 4 },
      ],
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: [
        { name: 'AWS', level: 4 },
        { name: 'GitLab', level: 4 },
        { name: 'GitHub CI/CD', level: 4 },
      ],
    },
  ];

  const tools = [
    'Git', 'GitHub', 'GitHub Actions', 'GitHub Pages', 'PowerBI',
    'VS Code', 'Cursor', 'Postman', 'Jira', 'Slack', 
    ,'Trello', 'Confluence', 'Microsoft Excel', 'Microsoft Powerpoint',
  ];

  const softSkills = [
    'Interpersonal Skills','Communication', 'Problem Solving', 'Teamwork',
    'Criticial Thinking','Collaboration','Team Leadership', 'Project Management',
    'Code Review', 'Technical Writing'
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels.
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="bg-gradient-card shadow-card hover-lift transition-smooth"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <StarRating 
                        value = {skill.level}
                        maxStars = {5}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="bg-gradient-card shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <GitBranch className="h-6 w-6 text-primary" />
                </div>
                Tools & Technologies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <Badge 
                    key={index}
                    variant="secondary"
                    className="bg-accent/10 text-accent hover:bg-accent/20 transition-smooth hover:scale-105"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                Soft Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <Badge 
                    key={index}
                    variant="outline"
                    className="border-primary/30 text-muted-foreground hover:border-primary hover:text-primary transition-smooth hover:scale-105"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Summary */}
        <Card className="mt-8 bg-gradient-card shadow-card">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-gradient">
              My Code Of Life
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From my time here, I hope to have a positive impact on the world and the people around me no matter
              how small it might be. I deeply enjoy building things, taking on challenges, and learning new knowledge about
              any topic in the world (especially tech). My aim is use this knowledge and skills I possess, to make this world a bit
              nicer place to live in.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SkillsSection;