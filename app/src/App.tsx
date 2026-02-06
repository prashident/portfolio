import { useState, useEffect, useRef } from 'react';
import { Download, Github, Linkedin, Twitter, Phone, Mail } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

// Loading Screen Component
function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const duration = 2500;
    const steps = 100;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(onComplete, 800);
          }, 300);
          return 100;
        }
        return prev + 1;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 bg-charcoal z-[200] flex items-end justify-end p-12 transition-transform duration-800 ${
        isExiting ? 'animate-slide-up-exit' : ''
      }`}
      style={{ transitionTimingFunction: 'cubic-bezier(0.76, 0, 0.24, 1)' }}
    >
      <span className="font-display text-[120px] md:text-[180px] font-bold text-cream leading-none">
        {count}
      </span>
    </div>
  );
}

// Rotating Badge Component
function RotatingBadge({ text, className = '' }: { text: string; className?: string }) {
  return (
    <div className={`relative w-24 h-24 ${className}`}>
      <svg className="w-full h-full animate-rotate" viewBox="0 0 100 100">
        <defs>
          <path
            id="circlePath"
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          />
        </defs>
        <text className="fill-teal text-[10px] font-body uppercase tracking-[0.2em]">
          <textPath href="#circlePath">{text}</textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-2 h-2 bg-teal rounded-full" />
      </div>
    </div>
  );
}

// Navigation Component
function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6">
      <div className="flex items-start justify-between">
        {/* Logo */}
        <div className="font-display text-sm font-bold tracking-wider text-charcoal">
          PRASHANT GUPTA
        </div>

        {/* Center - Download CV */}
        <a
          href="#"
          className="hidden md:flex items-center gap-2 text-sm font-body text-charcoal hover:opacity-70 transition-opacity"
        >
          <span>Download CV</span>
          <Download size={16} />
        </a>

        {/* Right - Navigation Links */}
        <div className="flex flex-col items-end gap-1">
          <a href="#works" className="text-sm font-body text-charcoal hover:opacity-70 transition-opacity">
            Work
          </a>
          <a href="#process" className="text-sm font-body text-charcoal hover:opacity-70 transition-opacity">
            About
          </a>
          <a href="#contact" className="text-sm font-body text-charcoal hover:opacity-70 transition-opacity">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 pt-24 pb-12 relative">
      {/* Main Title */}
      <div className="text-center mb-16">
        <div className="overflow-hidden">
          <h1
            className={`font-display text-4xl md:text-6xl lg:text-7xl font-bold text-charcoal tracking-tight transition-all duration-800 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
            style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
          >
            FULL STACK
          </h1>
        </div>
        <div className="overflow-hidden">
          <h1
            className={`font-display text-6xl md:text-8xl lg:text-[120px] font-bold text-charcoal tracking-tight transition-all duration-800 delay-200 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
            style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
          >
            DEVELOPER
          </h1>
        </div>
        <div className="overflow-hidden">
          <h1
            className={`font-display text-7xl md:text-9xl lg:text-[140px] font-bold text-outlined tracking-tight transition-all duration-800 delay-400 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
            style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
          >
            PORTFOLIO
          </h1>
        </div>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-4xl">
        {/* Profile Image */}
        <div
          className={`relative transition-all duration-600 delay-600 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
          style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
        >
          <img
            src="/images/profile.jpg"
            alt="Prashant Gupta"
            className="w-48 md:w-64 h-auto object-cover grayscale"
          />
          {/* Rotating Badge */}
          <div className="absolute -bottom-4 -left-4">
            <RotatingBadge text="CURRENTLY OPEN FOR OPPORTUNITIES • CURRENTLY OPEN FOR OPPORTUNITIES • " />
          </div>
        </div>

        {/* Bio */}
        <div
          className={`max-w-sm text-center md:text-left transition-all duration-600 delay-800 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="font-body text-base md:text-lg text-charcoal leading-relaxed">
            Hi, I'm Prashant — a Full Stack Developer skilled in Python, Django, and modern web
            technologies. I build scalable applications that solve real-world problems and create
            meaningful user experiences.
          </p>
        </div>
      </div>
    </section>
  );
}

// Marquee Section
function MarqueeSection() {
  return (
    <section className="border-y border-charcoal py-5 overflow-hidden">
      <div className="animate-marquee flex items-center whitespace-nowrap">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center">
            <span className="font-display text-2xl md:text-3xl font-bold text-outlined-thin mx-6">
              MY WORKS
            </span>
            <svg
              className="w-6 h-6 mx-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
                className="text-charcoal"
              />
            </svg>
          </div>
        ))}
      </div>
    </section>
  );
}

// Projects Section
function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'PAYJOINT | Team',
      tags: ['Django', 'PostgreSQL', 'Full Stack'],
      description: 'Expense management platform for groups',
      image: '/images/project-payjoint.jpg',
      githubUrl: 'https://github.com/prashident/payjoint',
    },
    {
      title: 'LEARNING LOG | Solo',
      tags: ['Django', 'CRUD', 'Web App'],
      description: 'Track your learning journey',
      image: '/images/project-learninglog.jpg',
      githubUrl: 'https://github.com/prashident/learning-log',
    },
    {
      title: 'SNAKE AI | Solo',
      tags: ['Python', 'PyTorch', 'Machine Learning'],
      description: 'AI-powered snake game agent',
      image: '/images/project-snakeai.jpg',
      githubUrl: 'https://github.com/prashident/SnakeAI-Game',
    },
    {
      title: 'E-YANTRA | Team',
      tags: ['IoT', 'Flutter', 'IIT Bombay'],
      description: 'Innovation challenge project',
      image: '/images/project-eyantra.jpg',
      githubUrl: 'https://youtu.be/tuqRT1E6HJw?si=PgfH122sKTUl2k3Y',
    },
  ];

  return (
    <section id="works" ref={sectionRef} className="px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`border border-charcoal p-6 group block transition-all duration-600 hover:scale-[1.02] ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-charcoal">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 justify-end">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-body border border-charcoal rounded-full text-charcoal"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="font-body text-sm text-gray mb-4">{project.description}</p>

              {/* Image or Placeholder */}
              <div className="overflow-hidden">
                {project.title === 'LEARNING LOG | Solo' ? (
                  <div className="aspect-video bg-charcoal/10 group-hover:bg-cream/10 relative overflow-hidden flex items-center justify-center w-full h-48 md:h-64">
                    <div className="grid grid-cols-2 gap-2 w-3/4 h-3/4 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-teal/20 rounded"></div>
                      <div className="bg-teal/40 rounded"></div>
                      <div className="bg-teal/60 rounded"></div>
                      <div className="bg-teal/80 rounded"></div>
                    </div>
                  </div>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// Process Section
function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stages = [
    {
      stage: 'STAGE 1',
      title: 'PLANNING',
      content:
        'Understanding requirements, defining scope, and creating a roadmap for the project. We discuss goals, target users, and technical constraints.',
    },
    {
      stage: 'STAGE 2',
      title: 'RESEARCH',
      content:
        'Analyzing similar solutions, exploring technologies, and gathering insights to inform the development approach.',
    },
    {
      stage: 'STAGE 3',
      title: 'PROTOTYPING',
      content:
        'Building wireframes and mockups to visualize the user interface and experience before full development.',
    },
    {
      stage: 'STAGE 4',
      title: 'DEVELOPMENT',
      content:
        'Writing clean, efficient code with regular testing. Implementing features iteratively with continuous feedback.',
    },
    {
      stage: 'STAGE 5',
      title: 'TESTING',
      content:
        'Rigorous testing for bugs, performance optimization, and ensuring cross-platform compatibility.',
    },
    {
      stage: 'STAGE 6',
      title: 'DEPLOYMENT',
      content:
        'Launching the application, monitoring performance, and providing ongoing support and maintenance.',
    },
  ];

  return (
    <section id="process" ref={sectionRef} className="px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <h2
          className={`font-display text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal text-center mb-12 transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          STAGES OF PROJECT
          <br />
          DEVELOPMENT
        </h2>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {stages.map((item, index) => (
            <AccordionItem
              key={item.stage}
              value={item.stage}
              className={`border-b border-divider transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                transitionDelay: `${(index + 1) * 100}ms`,
              }}
            >
              <AccordionTrigger className="py-5 hover:no-underline group">
                <div className="flex items-center justify-between w-full pr-4">
                  <span className="font-body text-xs text-gray tracking-wider">{item.stage}</span>
                  <span className="font-display text-base md:text-lg font-semibold text-charcoal uppercase tracking-wider">
                    {item.title}
                  </span>
                  <div className="w-6" />
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-5">
                <p className="font-body text-sm text-gray leading-relaxed pl-16 pr-12">
                  {item.content}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="px-6 md:px-12 py-16 md:py-24 relative">
      {/* Rotating Badge */}
      <div className="absolute top-8 right-8 md:right-16">
        <RotatingBadge text="CURRENTLY OPEN FOR OPPORTUNITIES • CURRENTLY OPEN FOR OPPORTUNITIES • " />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Large Title */}
        <div className="text-center mb-16">
          <div className="overflow-hidden">
            <h2
              className={`font-display text-6xl md:text-8xl lg:text-[120px] font-bold text-charcoal tracking-tight transition-all duration-800 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}
              style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
            >
              CONTACT
            </h2>
          </div>
          <div className="overflow-hidden">
            <h2
              className={`font-display text-7xl md:text-9xl lg:text-[140px] font-bold text-outlined tracking-tight transition-all duration-800 delay-200 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}
              style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
            >
              ME
            </h2>
          </div>
        </div>

        {/* Contact Info */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-2xl mx-auto transition-all duration-600 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Socials */}
          <div>
            <h3 className="font-display text-sm font-bold text-charcoal uppercase tracking-wider mb-4 border-b border-charcoal pb-2">
              Socials
            </h3>
            <div className="flex flex-col gap-2">
              <a
                href="https://github.com/prashident"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-gray hover:text-charcoal transition-colors flex items-center gap-2"
              >
                <Github size={16} />
                github.com/prashident
              </a>
              <a
                href="https://linkedin.com/in/prashant-gupta"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-gray hover:text-charcoal transition-colors flex items-center gap-2"
              >
                <Linkedin size={16} />
                linkedin.com/in/prashant-gupta
              </a>
              <a
                href="#"
                className="font-body text-sm text-gray hover:text-charcoal transition-colors flex items-center gap-2"
              >
                <Twitter size={16} />
                @prashant_dev
              </a>
            </div>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-display text-sm font-bold text-charcoal uppercase tracking-wider mb-4 border-b border-charcoal pb-2">
              Contacts
            </h3>
            <div className="flex flex-col gap-2">
              <a
                href="tel:+919453736388"
                className="font-body text-sm text-gray hover:text-charcoal transition-colors flex items-center gap-2"
              >
                <Phone size={16} />
                +91 9453736388
              </a>
              <a
                href="mailto:prashant2003gupta@gmail.com"
                className="font-body text-sm text-gray hover:text-charcoal transition-colors flex items-center gap-2"
              >
                <Mail size={16} />
                prashant2003gupta@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-charcoal">
        <p className="font-body text-xs text-gray text-right">
          Prashant Gupta © 2025
        </p>
      </div>
    </section>
  );
}

// Main App Component
function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <div className={`${isLoading ? 'overflow-hidden h-screen' : ''}`}>
        <Navigation />
        <main>
          <HeroSection />
          <MarqueeSection />
          <ProjectsSection />
          <ProcessSection />
          <ContactSection />
        </main>
      </div>
    </>
  );
}

export default App;
