import { Blocks, Gauge, Heart, MessageSquare } from 'lucide-react';

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

const ValuesSection = () => {
  return (
    <section id="values" className="py-24 lg:py-32 gradient-subtle">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
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
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group relative bg-card rounded-2xl border border-border p-8 hover-lift overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />

              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>

              {/* Decorative number */}
              <span className="absolute top-4 right-4 text-6xl font-bold text-muted/20">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
