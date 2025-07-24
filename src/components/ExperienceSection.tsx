import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Payments Intern',
      company: 'Hero Plus Group',
      location: 'Hong Kong',
      period: 'Jun 2025 - Present',
      description: 
      [
        "- Through deep collaboration with the sales, product and design teams, built and deployed a production ready full-stack application from the ground up.", 
        "- Automated and streamlined the merchant onboarding process which drove efficiencies for the sales and business development teams improving merchant management and output which in turn drove higher revenues and margins.",
      ],
      technologies: ['React-native', 'TypeScript', 'Node.js', 'AWS', 'Ruby', 'RestAPIs', 'SQL', 'Confluence', 'Trello', 'Ruby', 'Rails', 'Figma'],
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'PerformVE Limited',
      location: 'Hong Kong',
      period: 'Jul 2024 - Sep 2024',
      description: 
      [
        '- Collaborated with cross-functional teams to design, develop and deploy a production ready full-stack application that fulfilled all client requirements for a healthcare client.',
        '- The application was a complete hospital management system, tracking patient record history, appointments, patient queue management, doctor prescriptions and many more through APIs and database operations. Designed and built to help the hospital manage its patients efficiently and provide attention to ones most in need.',
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'RestAPIs', 'AWS', 'MongoDB','HTML', 'CSS', 'Figma'],
    },
    {
      title: 'Web Development Intern',
      company: 'Deploifai Limited',
      location: 'Hong Kong',
      period: 'Jul 2023 - Sep 2023',
      description: 
      [
        '- Designed, developed, and deployed the front-end web application for a complete MLOps solution, to manage and streamline the process of machine learning lifecycle.',
        '- The application enabled smooth user-interaction providing a simple a clean process of building, training and deploying machine learning projects on the cloud, a complete CI/CD pipeline.'
      ],
      technologies: ['React', 'TypeScript', 'GraphQL', 'MLOps', 'Azure', 'Google Cloud', 'GitHub', 'HTML', 'CSS', 'Apollo', 'AWS', 'Figma'],
    },
    {
      title: 'Financial Technology Intern',
      company: 'Lahore Fashions Limited',
      location: 'Lahore, Pakistan',
      period: 'Jun 2022 - Aug 2022',
      description: 
      [
        '- Conducted in-depth financial and economic data analyses using Python to support strategic financial decisions accross the firm, providing key insights supported by the data through professional reports and presentations.',
        '- Developed a standardized template for financial statements as well as work with cross-functional teams to maintain and improve financial databases and systems to ensure the accuracy of departmental financal reporting.'
      ],
      technologies: ['Python', 'Microsoft Excel', 'SQL', 'Microsoft Powerpoint', 'PowerBI', 'Microsoft Word'],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the impact I've made across different organizations.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card shadow-card hover-lift transition-smooth"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-foreground">
                      {experience.title}
                    </CardTitle>
                    <p className="text-lg font-semibold text-primary mt-1">
                      {experience.company}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {experience.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {experience.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                  {experience.description.map((des, index) => {
                    return (
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {des}
                      </p>
                    )
                  })}
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20 transition-smooth"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;