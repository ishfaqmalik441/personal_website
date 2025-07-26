import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/ishfaqmalik441', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ishfaq-malik-46bb7a201/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:ishfaqmalik441@gmail.com', label: 'Email' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-gradient mb-2">
              Ishfaq Malik
            </h3>
            <p className="text-muted-foreground">
              3rd Year Undergraduate
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                asChild
                className="hover:text-primary hover:bg-primary/10 transition-smooth hover:scale-110"
              >
                <a href={social.href} aria-label={social.label} target='_blank'>
                  <social.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>

          {/* Back to Top */}
          <div className="text-center md:text-right">
            <Button
              variant='link'
              onClick={scrollToTop}
              className="hover: transition-smooth hover:scale-110"
            >
              Back to Top ↑
            </Button>
          </div>
        </div>

        {/* <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Made with <Heart className="h-4 w-4 text-red-500" /> by Your Name
          </p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;