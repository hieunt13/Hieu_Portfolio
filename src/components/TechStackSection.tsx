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
    color: 'from-green-500 to-emerald-500',
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
    color: 'from-orange-500 to-amber-500',
    techs: [
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'Redis', icon: '🔴' },
    ],
  },
  {
    title: 'DevOps & Tools',
    color: 'from-purple-500 to-pink-500',
    techs: [
      { name: 'Docker', icon: '🐳' },
      { name: 'Kubernetes', icon: '☸️' },
      { name: 'CI/CD', icon: '🔄' },
      { name: 'Nginx', icon: '🌐' },
      { name: 'JMeter', icon: '📊' },
    ],
  },
];

const TechStackSection = () => {
  return (
    <section id="tech" className="py-24 lg:py-32 gradient-subtle">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
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
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card rounded-2xl border border-border p-6 hover-lift"
            >
              <div
                className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${category.color} mb-4`}
              >
                {category.title}
              </div>
              <div className="space-y-3">
                {category.techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors duration-200"
                  >
                    <span className="text-xl">{tech.icon}</span>
                    <span className="text-sm font-medium text-foreground">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
