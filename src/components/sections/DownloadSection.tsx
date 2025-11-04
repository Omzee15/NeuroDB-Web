import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Monitor, Apple, Terminal, Download, Cpu } from "lucide-react";

// GitHub release base URL
const RELEASE_BASE_URL = "https://github.com/Omzee15/NeuroDB-releases/releases/download/V1.1";
const VERSION = "1.0.0";

const downloads = [
  {
    icon: Monitor,
    title: "Windows",
    description: "For Windows 10 and later",
    fileType: ".exe",
    link: `${RELEASE_BASE_URL}/NeuroDB-Setup-${VERSION}.exe`,
  },
  {
    icon: Apple,
    title: "macOS",
    description: "For macOS 11 and later",
    fileType: ".dmg",
    link: "#",
    isMac: true,
  },
  {
    icon: Terminal,
    title: "Linux",
    description: "For Ubuntu, Fedora, and more",
    fileType: ".AppImage",
    link: `${RELEASE_BASE_URL}/NeuroDB-${VERSION}.AppImage`,
  },
];

export const DownloadSection = () => {
  return (
    <section id="download" className="py-24 px-6 relative">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Download <span className="text-primary">NeuroDB</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your version and start managing PostgreSQL intelligently
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {downloads.map((download, index) => (
            <Card 
              key={index}
              className="gradient-card border-primary/10 hover:border-primary/30 transition-smooth hover:scale-105 group"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-smooth">
                  <download.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">{download.title}</CardTitle>
                <CardDescription className="text-base">
                  {download.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                {download.isMac ? (
                  <div className="space-y-3">
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-smooth glow-subtle hover:glow-primary"
                      asChild
                    >
                      <a href={`${RELEASE_BASE_URL}/NeuroDB-${VERSION}-arm64.dmg`}>
                        <Cpu className="mr-2 h-4 w-4" />
                        Apple Silicon
                      </a>
                    </Button>
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-smooth glow-subtle hover:glow-primary"
                      asChild
                    >
                      <a href={`${RELEASE_BASE_URL}/NeuroDB-${VERSION}.dmg`}>
                        <Download className="mr-2 h-4 w-4" />
                        Intel Mac
                      </a>
                    </Button>
                  </div>
                ) : (
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-smooth glow-subtle hover:glow-primary"
                    asChild
                  >
                    <a href={download.link}>
                      <Download className="mr-2 h-4 w-4" />
                      Download {download.fileType}
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Available for Windows 10+, macOS 11+, and most Linux distributions
          </p>
        </div>
      </div>
    </section>
  );
};
