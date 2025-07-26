import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Play } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Personal Website',
      description: 'My personal website built using React, Typescript, Vite, Tailwind CSS, and styled-components. Boasts a modern design with interactive and dynamic features! The website introduces me as a person and is my resume, it showcases my work experience, education history and skills.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
      technologies: ['React', 'TypeScript', 'HTML', 'CSS', 'Node.js', 'Vite', 'GitHub'],
      githubUrl: 'https://github.com/ishfaqmalik441/personal_website',
      showGitHubButton: true,
    },
    {
      title: 'HealthHub',
      description: 'A full-stack health and fitness application that helps user track their health and workout history and fitness goals, and provides them clean visualizations of their health data as well as personalized recommendations to help them achieve their goals. Also provides a custom workout logging calendar where you can track your workout streaks and days worked out in a certain period all built in-app',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
      technologies: ['Python', 'Flask', 'SQL', 'MongoDB', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/ishfaqmalik441/HealthHub',
      showGitHubButton: true,
    },
    {
      title: 'Student Residence Hall Web Application',
      description: 'A front-end website built for my student residence hall at City University of Hong Kong, to introduce the hall to prospective residents, showcase the qualities of hall life, highlights of past hall events in terms of blog posts, information on rules and regulations.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/ishfaqmalik441/jcac-website',
      showGitHubButton: true,
    },
    {
      title: 'Tornado Intensity Prediction Tool',
      description: 'This predictive model was built to predict tornado intensity levels to aide aide emergency services to quickly assess the severity of reported tornadoes and make appropriate logistical decisions and warning system that can minimize the impact of a tornado.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop',
      technologies: ['R', 'Logistic Regression', 'Linear Discriminant Analaysis', 'Quadratic Discriminant Analysis', 'Classification Trees', 'Cross-Validations Tests', 'Microsoft Excel'],
      githubUrl: 'https://github.com/ishfaqmalik441',
      showGitHubButton: false,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical skills and creative problem-solving through real-world applications.
          </p>
        </div>

        <div className="grid gap-8">
          {/* Featured Projects - Large Cards */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="group bg-gradient-card shadow-card hover-lift transition-smooth overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed" style={{minHeight: 155}}>
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20 transition-smooth"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                    {/* <Button 
                      size="sm"
                      asChild
                      className="bg-gradient-primary hover:shadow-glow transition-smooth hover:scale-105"
                    >
                      <a href={project.liveUrl}>
                        <Play className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button> */}
                    {project.showGitHubButton && (
                      <div className="flex gap-3 pt-2">
                        <Button 
                          size="sm"
                          variant="outline"
                          asChild
                          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth hover:scale-105"
                        >
                          <a href={project.githubUrl} target='_blank'>
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </a>
                        </Button>
                      </div>
                    )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Other Projects - Smaller Cards */}
          {/* <div className="grid md:grid-cols-2 gap-6 mt-8">
            {projects.filter(project => !project.featured).map((project, index) => (
              <Card 
                key={index}
                className="group bg-gradient-card shadow-card hover-lift transition-smooth overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 object-cover transition-smooth group-hover:scale-105"
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-foreground">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary"
                        className="text-xs bg-primary/10 text-primary"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-muted/50">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2 pt-1">
                    <Button 
                      size="sm"
                      variant="ghost"
                      asChild
                      className="p-2 h-8 hover:text-primary hover:bg-primary/10"
                    >
                      <a href={project.liveUrl}>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button 
                      size="sm"
                      variant="ghost"
                      asChild
                      className="p-2 h-8 hover:text-primary hover:bg-primary/10"
                    >
                      <a href={project.githubUrl}>
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card> */}
            {/* ))}
          </div> */}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth hover:scale-105"
          >
            <Github className="mr-2 h-5 w-5" />
            Check out my GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
