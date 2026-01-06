import { motion } from 'framer-motion';

const techCategories = [
  {
    title: 'Frontend',
    color: 'from-blue-500 to-cyan-500',
    techs: [
      { name: 'TypeScript', icon: '📘' },
      { name: 'React', icon: '⚛️' },
      { name: 'Next.js', icon: '▲' },
      { name: 'Tailwind CSS', icon: '🎨' },
      { name: 'MUI', icon: '🎯' },
    ],
  },
  {
    title: 'Backend',
    color: 'from-blue-600 to-indigo-500',
    techs: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'NestJS', icon: '🐱' },
      { name: 'REST API', icon: '🔗' },
      { name: 'GraphQL', icon: '◈' },
      { name: 'OAuth2 / Keycloak', icon: '🔐' },
    ],
  },
  {
    title: 'Database & Cache',
    color: 'from-sky-500 to-blue-500',
    techs: [
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'Redis', icon: '🔴' },
    ],
  },
  {
    title: 'DevOps & Tools',
    color: 'from-indigo-500 to-purple-500',
    techs: [
      { name: 'Docker', icon: '🐳' },
      { name: 'Kubernetes', icon: '☸️' },
      { name: 'CI/CD', icon: '🔄' },
      { name: 'Nginx', icon: '🌐' },
      { name: 'JMeter', icon: '📊' },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const techItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const TechStackSection = () => {
  return (
    <section id="tech" className="py-24 lg:py-32 gradient-subtle overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Tech Stack
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-4">
            Technologies I work with
          </h2>
          <p className="text-muted-foreground">
            A comprehensive toolkit for building modern, scalable web applications
            from frontend to deployment.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className="bg-card rounded-2xl border border-border p-6 hover-lift hover-glow"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${category.color} mb-4`}
                whileHover={{ scale: 1.05 }}
              >
                {category.title}
              </motion.div>
              <motion.div
                className="space-y-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.techs.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    variants={techItemVariants}
                    className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary hover:shadow-card transition-all duration-300 cursor-default group"
                    whileHover={{ x: 5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <motion.span
                      className="text-xl"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {tech.icon}
                    </motion.span>
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
