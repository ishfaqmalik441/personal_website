import Navigation from '@/components/Navigation';
import HeroSection from '@/components/introduction/HeroSection';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <SkillsSection />
      <Footer />
    </div>
  );
};

export default Index;
