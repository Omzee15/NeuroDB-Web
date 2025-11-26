import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <h3 className="text-xl font-bold text-primary">NeuroDB</h3>
            <p className="text-sm text-muted-foreground">
              Built for developers. Powered by AI.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3">
            <a 
              href="https://omzee.codes" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth text-sm font-medium"
              aria-label="Meet the Developer"
            >
              Meet the Developer
            </a>
            <a 
              href="mailto:omzee.codes@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-smooth text-sm font-medium"
              aria-label="Contact Support"
            >
              Contact Support
            </a>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="text-center text-sm text-muted-foreground">
          © 2025 NeuroDB. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
