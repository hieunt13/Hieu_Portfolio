import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'LMS SaaS Platform',
    description:
      'A multi-tenant Learning Management System with role-based access control for Tutors, Learning Centers, and Students. Built with a scalable SaaS subscription model.',
    tech: ['Next.js', 'NestJS', 'PostgreSQL', 'Redis', 'Docker'],
    highlights: [
      'Multi-tenant architecture',
      'Role-based access control',
      'SaaS subscription billing',
      'Real-time collaboration',
    ],
    gradient: 'from-blue-500/10 to-cyan-500/10',
    accent: 'bg-blue-500',
  },
  {
    title: 'Admin Dashboard System',
    description:
      'Internal admin system for managing users, workflows, and system operations. Features secure authentication and highly optimized API responses.',
    tech: ['React', 'GraphQL', 'MongoDB', 'Keycloak'],
    highlights: [
      'Secure SSO authentication',
      'Real-time data updates',
      'Complex workflow management',
      'Performance optimized',
    ],
    gradient: 'from-green-500/10 to-emerald-500/10',
    accent: 'bg-green-500',
  },
  {
    title: 'Backend-for-Frontend Service',
    description:
      'BFF services designed to optimize frontend performance through API aggregation, caching strategies, and tailored data transformations.',
    tech: ['Node.js', 'Express', 'Redis', 'REST API'],
    highlights: [
      'API aggregation layer',
      'Redis caching strategy',
      'Response optimization',
      'Microservices ready',
    ],
    gradient: 'from-purple-500/10 to-pink-500/10',
    accent: 'bg-purple-500',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Featured Projects
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-4">
            Work that I'm proud of
          </h2>
          <p className="text-muted-foreground">
            A selection of projects showcasing my expertise in building scalable,
            production-ready applications.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`relative rounded-3xl border border-border overflow-hidden hover-lift bg-gradient-to-br ${project.gradient}`}
            >
              <div className="p-8 lg:p-10">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  {/* Project Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-3 h-3 rounded-full ${project.accent}`} />
                      <span className="text-sm font-medium text-muted-foreground">
                        Project {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" className="group">
                        View Details
                        <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Button>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="lg:w-72 space-y-3">
                    <span className="text-sm font-semibold text-foreground">
                      Key Features
                    </span>
                    <ul className="space-y-2">
                      {project.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
