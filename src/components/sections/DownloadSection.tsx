import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Monitor, Apple, Terminal, Download, Cpu, AlertTriangle, Copy, Check } from "lucide-react";
import { useState, useEffect } from "react";

const XATTR_COMMAND = "sudo xattr -rd com.apple.quarantine /Applications/NeuroDB.app";

interface GitHubAsset {
  name: string;
  browser_download_url: string;
}

interface GitHubRelease {
  tag_name: string;
  assets: GitHubAsset[];
}

export const DownloadSection = () => {
  const [downloadLinks, setDownloadLinks] = useState<{
    windows: string;
    macIntel: string;
    macAppleSilicon: string;
    linux: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyCommand = async () => {
    try {
      await navigator.clipboard.writeText(XATTR_COMMAND);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy command:', error);
    }
  };

  useEffect(() => {
    const fetchLatestRelease = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/Omzee15/NeuroDB-releases/releases/latest');
        const release: GitHubRelease = await response.json();
        
        const assets = release.assets;
        const links = {
          windows: assets.find(asset => asset.name.includes('Setup') && asset.name.endsWith('.exe'))?.browser_download_url || '#',
          macIntel: assets.find(asset => asset.name.endsWith('.dmg') && !asset.name.includes('arm64'))?.browser_download_url || '#',
          macAppleSilicon: assets.find(asset => asset.name.includes('arm64') && asset.name.endsWith('.dmg'))?.browser_download_url || '#',
          linux: assets.find(asset => asset.name.endsWith('.AppImage'))?.browser_download_url || '#',
        };
        
        setDownloadLinks(links);
      } catch (error) {
        console.error('Failed to fetch latest release:', error);
        // Fallback to hardcoded links if API fails
        setDownloadLinks({
          windows: 'https://github.com/Omzee15/NeuroDB-releases/releases/latest',
          macIntel: 'https://github.com/Omzee15/NeuroDB-releases/releases/latest',
          macAppleSilicon: 'https://github.com/Omzee15/NeuroDB-releases/releases/latest',
          linux: 'https://github.com/Omzee15/NeuroDB-releases/releases/latest',
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchLatestRelease();
  }, []);

  const downloads = [
    {
      icon: Monitor,
      title: "Windows",
      description: "For Windows 10 and later",
      fileType: ".exe",
      link: downloadLinks?.windows || '#',
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
      link: downloadLinks?.linux || '#',
    },
  ];
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
                      disabled={isLoading || !downloadLinks?.macAppleSilicon}
                    >
                      <a href={downloadLinks?.macAppleSilicon || '#'}>
                        <Cpu className="mr-2 h-4 w-4" />
                        {isLoading ? 'Loading...' : 'Apple Silicon'}
                      </a>
                    </Button>
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-smooth glow-subtle hover:glow-primary"
                      asChild
                      disabled={isLoading || !downloadLinks?.macIntel}
                    >
                      <a href={downloadLinks?.macIntel || '#'}>
                        <Download className="mr-2 h-4 w-4" />
                        {isLoading ? 'Loading...' : 'Intel Mac'}
                      </a>
                    </Button>
                  </div>
                ) : (
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-smooth glow-subtle hover:glow-primary"
                    asChild
                    disabled={isLoading || download.link === '#'}
                  >
                    <a href={download.link}>
                      <Download className="mr-2 h-4 w-4" />
                      {isLoading ? 'Loading...' : `Download ${download.fileType}`}
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <Alert className="border-red-500 bg-red-500/10">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            <AlertTitle className="text-red-500 font-bold text-lg">Important for Mac Users</AlertTitle>
            <AlertDescription className="text-red-400 mt-2">
              After installation, please run this command in Terminal to use NeuroDB successfully:
              <div className="mt-3 flex items-center gap-2 p-3 bg-gray-800/80 rounded-md border border-gray-600">
                <code className="flex-1 text-gray-200 font-mono text-sm break-all">
                  {XATTR_COMMAND}
                </code>
                <Button
                  type="button"
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 shrink-0 text-gray-300 hover:text-white hover:bg-gray-700"
                  onClick={handleCopyCommand}
                  aria-label="Copy command to clipboard"
                >
                  {isCopied ? (
                    <Check className="h-4 w-4 text-green-400" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </AlertDescription>
          </Alert>
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
