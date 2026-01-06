import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactLinks = [
  {
    name: 'Email',
    icon: Mail,
    value: 'hello@hieunguyen.dev',
    href: 'mailto:hello@hieunguyen.dev',
    color: 'hover:text-red-500',
  },
  {
    name: 'GitHub',
    icon: Github,
    value: 'github.com/hieunguyen',
    href: 'https://github.com/hieunguyen',
    color: 'hover:text-foreground',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    value: 'linkedin.com/in/hieunguyen',
    href: 'https://linkedin.com/in/hieunguyen',
    color: 'hover:text-blue-600',
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* CTA Card */}
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 gradient-primary opacity-90" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />

            <div className="relative p-10 lg:p-16 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
                Let's build something great together
              </h2>
              <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, feel free to reach
                out!
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="group bg-background text-foreground hover:bg-background/90"
              >
                <Mail className="mr-2 w-5 h-5" />
                Get in Touch
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Contact Links */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {contactLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-6 rounded-2xl bg-secondary/50 border border-border hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center shadow-soft">
                  <link.icon
                    className={`w-6 h-6 text-muted-foreground transition-colors ${link.color}`}
                  />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">{link.name}</span>
                  <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                    {link.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
