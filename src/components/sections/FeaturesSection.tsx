import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Bookmark, Code2, Database, Filter, FileDown, Download, Sparkles } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Context-Aware AI Prompts",
    description: "Generate SQL from plain English — NeuroDB understands your schema instantly.",
  },
  {
    icon: Bookmark,
    title: "Saved Queries & Snippets",
    description: "Reuse your best queries and code snippets anytime.",
  },
  {
    icon: Code2,
    title: "Dynamic Variables",
    description: "Create parameterized queries for faster automation.",
  },
  {
    icon: Database,
    title: "Smart Database Viewer",
    description: "Visualize schemas, tables, and relationships intuitively.",
  },
  {
    icon: Filter,
    title: "Quick Filters",
    description: "Instantly apply filters without manual SQL.",
  },
  {
    icon: FileDown,
    title: "Flexible Export Options",
    description: "Export data in CSV, JSON, or Excel effortlessly.",
  },
  {
    icon: Download,
    title: "One-Click Downloads",
    description: "Download tables or databases with one click.",
  },
  {
    icon: Sparkles,
    title: "AI Query Optimization",
    description: "Automatically optimize your queries for better performance.",
  },
  {
    icon: Database,
    title: "Real-Time Collaboration",
    description: "Share queries and work together with your team seamlessly.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything you need for{" "}
            <span className="text-primary">intelligent</span> database management
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features that make PostgreSQL management effortless and intuitive
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="gradient-card border-primary/10 hover:border-primary/30 transition-smooth hover:scale-105 group"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
