import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Github, Linkedin, Mail, Download, MapPin } from 'lucide-react';
import profileImage from '@/assets/ishfaq-image-main copy.jpeg';
import { TypingAnimationText } from './TypingAnimationText';
import { FlippingCard } from './FlippingCard';
import styled from 'styled-components';

const HeroSection = () => {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:your-email@example.com', label: 'Email' },
  ];

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const texts = [
    'Passionate Full Stack Developer with expertise in modern front-end and back-end technologies.',
    'Always creating innovative solutions and bringing ideas to life through clean, efficient code.',
    'Currently studying Bachelor of Sceince in Computational Finance and Financial Technology at City University of Hong Kong.',
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:w-300 md:w-500 lg:w-900 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="flex flex-col gap-5 w-[320px] sm:w-[400px] md:w-[480px] lg:w-[520px]">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="text-gradient">Ishfaq Malik</span>
              </h1>
            </div>

            {/* Typing Animation Text with animated width */}
            <div className="relative min-h-[98px] sm: min-h-[90px] md:min-h-[80px] lg:min-h-[50px]">
              <div className="inline-block transition-all duration-500 ease-in-out" id="typing-animation-width-wrapper">
                <TypingAnimationText className="introTexts" texts={texts}/>
              </div>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <p style={{textAlign: 'center'}}>Based in Hong Kong</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth hover:scale-105"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:text-primary hover:bg-primary/10 transition-smooth hover:scale-110"
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            {/* <Card className="p-8 bg-gradient-card shadow-card hover-lift"> */}
              <div className="relative">
                <div className="w-80 h-80 rounded-full shadow-card hover-lift bg-gradient-card">
                  <FlippingCard 
                    front={<ContentFront className="flipping-card-front"/>}
                    back={<ContentBack className="flipping-card-back"
                    />}
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            {/* </Card> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

const ContentFront = styled(({ className }: { className?: string }) => (
  <div className={className}>
    <img
      src={profileImage}
      alt="Profile"
      className= 'w-full h-full object-cover'
    />  
    </div>
))`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 100em;


`;

const ContentBack = styled(({ className }: { className?: string }) => (
  <div className={className}>
    <div className="content-back-inner">
      <span className="content-back-greeting">Hey! I'm Ishfaq &#128075;</span>
      <span className="content-back-tagline">
        I am on a mission to make the world a better place. You can talk with me
        about tech, finance and football!
      </span>
    </div>
  </div>
))`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 100em;

  & .content-back-inner {
    display: flex;
    flex-direction: column;
    gap: 1em;
    color: #FFFFFF;
    padding: 1em;
  }

  & .content-back-greeting {
    font-size: 1.5em;
    font-weight: bolder;
  }

  & .content-back-tagline {
    font-size: 1.125em;
  }
`;