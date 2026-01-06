import { Blocks, Gauge, Heart, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const values = [
  {
    icon: Blocks,
    title: 'Clean Architecture & SOLID',
    description:
      'I believe in building software that stands the test of time. Clean architecture and SOLID principles guide every design decision.',
  },
  {
    icon: Gauge,
    title: 'Performance & Scalability',
    description:
      'Every millisecond counts. I optimize for performance while ensuring the architecture can scale with your growing needs.',
  },
  {
    icon: Heart,
    title: 'Developer Experience',
    description:
      'Great DX leads to great products. I write code that other developers enjoy working with and can easily understand.',
  },
  {
    icon: MessageSquare,
    title: 'Clear Communication',
    description:
      'Bridging the gap between business requirements and technical implementation through transparent, effective communication.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const ValuesSection = () => {
  return (
    <section id="values" className="py-24 lg:py-32 gradient-subtle overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            What I Care About
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-4">
            My core values as a developer
          </h2>
          <p className="text-muted-foreground">
            The principles that guide my work and ensure quality in every project I
            undertake.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              variants={cardVariants}
              className="group relative bg-card rounded-2xl border border-border p-8 hover-lift hover-glow overflow-hidden cursor-default"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Background gradient on hover */}
              <motion.div
                className="absolute inset-0 gradient-primary"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.05 }}
                transition={{ duration: 0.3 }}
              />

              <div className="relative">
                <motion.div
                  className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <value.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>

              {/* Decorative number with animation */}
              <motion.span
                className="absolute top-4 right-4 text-6xl font-bold text-muted/10 select-none"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
              >
                {String(index + 1).padStart(2, '0')}
              </motion.span>

              {/* Corner decoration */}
              <motion.div
                className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-primary/5"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesSection;
