import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

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
    gradient: 'from-sky-500/10 to-blue-500/10',
    accent: 'bg-sky-500',
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
    gradient: 'from-indigo-500/10 to-blue-500/10',
    accent: 'bg-indigo-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
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
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className={`relative rounded-3xl border border-border overflow-hidden hover-lift hover-glow bg-gradient-to-br ${project.gradient} group`}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 animate-shimmer" />
              </div>

              <div className="p-8 lg:p-10 relative">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  {/* Project Info */}
                  <div className="flex-1">
                    <motion.div
                      className="flex items-center gap-3 mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <motion.div
                        className={`w-3 h-3 rounded-full ${project.accent}`}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span className="text-sm font-medium text-muted-foreground">
                        Project {String(index + 1).padStart(2, '0')}
                      </span>
                    </motion.div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t, techIndex) => (
                        <motion.span
                          key={t}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + techIndex * 0.05 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {t}
                        </motion.span>
                      ))}
                    </div>

                    {/* Actions */}
                    <motion.div
                      className="flex gap-3"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Button variant="outline" size="sm" className="group/btn hover:shadow-card">
                        View Details
                        <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </Button>
                    </motion.div>
                  </div>

                  {/* Highlights */}
                  <div className="lg:w-72 space-y-3">
                    <span className="text-sm font-semibold text-foreground">
                      Key Features
                    </span>
                    <ul className="space-y-2">
                      {project.highlights.map((h, hIndex) => (
                        <motion.li
                          key={h}
                          className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + hIndex * 0.1 }}
                        >
                          <motion.div
                            className="w-1.5 h-1.5 rounded-full bg-primary"
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: hIndex * 0.2 }}
                          />
                          {h}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
