import { ArrowRight, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-8 pt-24 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <motion.span
                  className="w-2 h-2 bg-primary rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                Open to opportunities
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Building scalable web applications with{' '}
              <span className="text-gradient">clean architecture</span> and real
              business impact.
            </motion.h1>

            <motion.p
              className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Full-stack Software Developer specializing in TypeScript, Node.js, and
              Next.js. Crafting performant, maintainable solutions for modern businesses.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button size="lg" className="group shadow-glow hover:shadow-elevated transition-shadow">
                View Projects
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="hover:shadow-card transition-shadow">
                <Mail className="mr-2 w-4 h-4" />
                Contact Me
              </Button>
              <Button size="lg" variant="ghost" className="text-muted-foreground hover:text-foreground">
                <Download className="mr-2 w-4 h-4" />
                Download CV
              </Button>
            </motion.div>
          </div>

          {/* Hero Visual */}
          <div className="relative hidden lg:flex justify-center items-center">
            <motion.div
              className="relative"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Abstract code/developer illustration */}
              <div className="w-80 h-80 xl:w-96 xl:h-96 relative">
                {/* Main circle with glow */}
                <motion.div
                  className="absolute inset-0 rounded-full gradient-primary opacity-10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute inset-4 rounded-full bg-background shadow-elevated flex items-center justify-center animate-pulse-glow">
                  {/* Code window */}
                  <motion.div
                    className="w-48 h-48 xl:w-56 xl:h-56 rounded-2xl bg-secondary/80 shadow-card p-4 overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex gap-1.5 mb-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                    </div>
                    <div className="space-y-2">
                      {[16, 24, 20, 28, 16, 32].map((width, i) => (
                        <motion.div
                          key={i}
                          className={`h-2 bg-primary/30 rounded ${i === 2 || i === 3 ? 'ml-4' : ''}`}
                          style={{ width: `${width * 4}px` }}
                          initial={{ width: 0 }}
                          animate={{ width: `${width * 4}px` }}
                          transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Floating elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-background shadow-card flex items-center justify-center"
                  animate={{ y: [-5, 5, -5], rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-2xl">⚛️</span>
                </motion.div>
                <motion.div
                  className="absolute -bottom-2 -left-6 w-14 h-14 rounded-2xl bg-background shadow-card flex items-center justify-center"
                  animate={{ y: [5, -5, 5], rotate: [0, -5, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <span className="text-xl">🚀</span>
                </motion.div>
                <motion.div
                  className="absolute top-1/2 -right-8 w-12 h-12 rounded-full bg-background shadow-card flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1], y: [-3, 3, -3] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <span className="text-lg">💻</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
