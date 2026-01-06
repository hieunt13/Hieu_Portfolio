const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-foreground">
              Hieu<span className="text-primary">.</span>
            </span>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} Hieu Nguyen. Built with modern web technologies.
          </p>

          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Made with</span>
            <span className="text-destructive">❤️</span>
            <span>using React & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
