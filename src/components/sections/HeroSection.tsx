import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";

export const HeroSection = () => {
  const scrollToDownload = () => {
    document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 gradient-hero overflow-hidden">
      {/* Ambient glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Badge */}
          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium border border-primary/20 bg-card/50 backdrop-blur-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2 animate-pulse" />
            AI-Powered PostgreSQL Assistant
          </Badge>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight max-w-4xl">
            Meet NeuroDB — Your{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              AI-Driven
            </span>{" "}
            Database Partner
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
            Generate, execute, and explore PostgreSQL queries with natural language and one-click intelligence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              size="lg" 
              onClick={scrollToDownload}
              className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 glow-subtle hover:glow-primary transition-smooth"
            >
              Download Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 font-semibold px-8 transition-smooth"
              asChild
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </a>
            </Button>
          </div>

          {/* Hero Image */}
          <div className="mt-16 w-full max-w-5xl">
            <div className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-2xl glow-subtle transition-smooth hover:glow-primary">
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
                alt="NeuroDB Dashboard Interface"
                className="w-full h-auto"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
