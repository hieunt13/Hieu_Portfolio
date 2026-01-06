import { ArrowRight, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 pt-24 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Open to opportunities
              </span>
            </div>

            <h1 className="animate-fade-up-delay-1 text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Building scalable web applications with{' '}
              <span className="text-gradient">clean architecture</span> and real
              business impact.
            </h1>

            <p className="animate-fade-up-delay-2 text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
              Full-stack Software Developer specializing in TypeScript, Node.js, and
              Next.js. Crafting performant, maintainable solutions for modern businesses.
            </p>

            <div className="animate-fade-up-delay-3 flex flex-wrap gap-4">
              <Button size="lg" className="group">
                View Projects
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                <Mail className="mr-2 w-4 h-4" />
                Contact Me
              </Button>
              <Button size="lg" variant="ghost" className="text-muted-foreground">
                <Download className="mr-2 w-4 h-4" />
                Download CV
              </Button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative hidden lg:flex justify-center items-center">
            <div className="relative animate-float">
              {/* Abstract code/developer illustration */}
              <div className="w-80 h-80 xl:w-96 xl:h-96 relative">
                {/* Main circle */}
                <div className="absolute inset-0 rounded-full gradient-primary opacity-10" />
                <div className="absolute inset-4 rounded-full bg-background shadow-elevated flex items-center justify-center">
                  {/* Code window */}
                  <div className="w-48 h-48 xl:w-56 xl:h-56 rounded-2xl bg-secondary/80 shadow-card p-4 overflow-hidden">
                    <div className="flex gap-1.5 mb-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 w-16 bg-primary/30 rounded" />
                      <div className="h-2 w-24 bg-muted-foreground/20 rounded" />
                      <div className="h-2 w-20 bg-primary/20 rounded ml-4" />
                      <div className="h-2 w-28 bg-muted-foreground/20 rounded ml-4" />
                      <div className="h-2 w-16 bg-primary/30 rounded" />
                      <div className="h-2 w-32 bg-muted-foreground/20 rounded" />
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-background shadow-card flex items-center justify-center">
                  <span className="text-2xl">⚛️</span>
                </div>
                <div className="absolute -bottom-2 -left-6 w-14 h-14 rounded-2xl bg-background shadow-card flex items-center justify-center">
                  <span className="text-xl">🚀</span>
                </div>
                <div className="absolute top-1/2 -right-8 w-12 h-12 rounded-full bg-background shadow-card flex items-center justify-center">
                  <span className="text-lg">💻</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
