import { Code2, Layers, Zap, Users } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, readable code following best practices',
  },
  {
    icon: Layers,
    title: 'Scalable Architecture',
    description: 'Designing systems that grow with your business needs',
  },
  {
    icon: Zap,
    title: 'Performance First',
    description: 'Optimizing for speed and exceptional user experience',
  },
  {
    icon: Users,
    title: 'Team Player',
    description: 'Collaborating effectively with cross-functional teams',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              About Me
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-6">
              Passionate about building exceptional digital experiences
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a Full-stack Software Developer with a passion for creating
                scalable, high-performance web applications. With extensive experience
                in building SaaS platforms, Learning Management Systems, and
                enterprise-grade solutions, I bring both technical expertise and
                business acumen to every project.
              </p>
              <p>
                My approach combines clean architecture principles with modern
                development practices. I believe in writing code that not only works
                but is also maintainable, testable, and a joy for other developers to
                work with.
              </p>
              <p>
                When I'm not coding, I'm exploring new technologies, contributing to
                open-source projects, or sharing knowledge with the developer
                community.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={`p-6 rounded-2xl bg-secondary/50 border border-border hover-lift ${
                  index === 0 ? 'sm:col-span-2' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
