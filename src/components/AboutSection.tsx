import { Code2, Layers, Zap, Users } from 'lucide-react';
import { motion } from 'framer-motion';

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.span
              className="text-primary font-semibold text-sm uppercase tracking-wider"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              About Me
            </motion.span>
            <motion.h2
              className="text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Passionate about building exceptional digital experiences
            </motion.h2>
            <motion.div
              className="space-y-4 text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
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
            </motion.div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            className="grid sm:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className={`group p-6 rounded-2xl bg-secondary/50 border border-border hover-lift hover-glow cursor-default ${
                  index === 0 ? 'sm:col-span-2' : ''
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4"
                  whileHover={{ rotate: 10 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </motion.div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
