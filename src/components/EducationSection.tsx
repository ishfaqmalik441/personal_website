import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Computational Finance and Financial Technology',
      school: 'City University of Hong Kong',
      location: 'Hong Kong',
      period: '2022 - Present',
      gpa: '4.07/4.30',
      description: 'Comprehensive foundation in software development, data structures, and computer systems. Active member of the Computer Science Society.',
      achievements: 
      [
        '5x Dean\'s List Award', '120% Renewable Scholarship Holder', 'Top 5% of students'
      ],
      coursework: 
      [
        'Python Programming', 'Java Programming', 'Database Systems', 'Web Development (JavaScript, HTML, CSS)',
        'C++ Programming','Data Structures','Machine Learning','R Programming', 'Regression Analysis', 'Calculus and Linear Algebra',
        'Discrete Mathematics', 'Digital Currency and Blockchain Development'
      ],
      schoolLink: 'https://prog.cb.cityu.edu.hk/academics/cfft',
    },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Education</span> & Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My academic journey and professional certifications that shape my expertise.
          </p>
        </div>

        {/* Education */}
        <div className="space-y-8 mb-8">
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card shadow-card hover-lift transition-smooth"
            >
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">
                        {edu.degree}
                      </CardTitle>
                      <p className="text-lg font-semibold text-primary mt-1 hover:text-link underline">
                        <a href={edu.schoolLink} target='_blank'>{edu.school}</a>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {edu.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {edu.period}
                    </div>
                    <div className="font-semibold text-primary">
                      CGPA: {edu.gpa}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {edu.description}
                </p>
                
                {/* Achievements */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    Achievements
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, achIndex) => (
                      <Badge 
                        key={achIndex}
                        variant="secondary"
                        className="bg-accent/10 text-accent hover:bg-accent/20 transition-smooth"
                      >
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Relevant Coursework */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Relevant Coursework
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, courseIndex) => (
                      <Badge 
                        key={courseIndex}
                        variant="outline"
                        className="border-primary/30 text-muted-foreground hover:border-primary hover:text-primary transition-smooth"
                      >
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Certifications */}
        {/* <Card className="bg-gradient-card shadow-card">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              Professional Certifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-3 bg-muted/10 rounded-lg hover:bg-muted/20 transition-smooth"
                >
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card> */}
      </div>
    </section>
  );
};

export default EducationSection;