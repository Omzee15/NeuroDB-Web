import { Bot, Bookmark, Database, Filter, Download, Search } from "lucide-react";
import { FeatureCard } from "@/components/FeatureCard";
import aiPromptsImg from "@/assets/features/ai-prompts.jpg";
import savedQueriesImg from "@/assets/features/saved-queries.png";
import databaseViewerImg from "@/assets/features/database-viewer.png";
import quickFiltersImg from "@/assets/features/quick-filters.png";
import exportOptionsImg from "@/assets/features/export-options.png";
import quickSearchImg from "@/assets/features/quick-search.png";

const features = [
  {
    icon: Bot,
    title: "Context-Aware AI Prompts",
    description: "Generate SQL from plain English — NeuroDB understands your schema instantly.",
    image: aiPromptsImg,
    videoUrl: "https://cdn.pixabay.com/video/2023/05/02/159977-821742408_large.mp4",
  },
  {
    icon: Bookmark,
    title: "Saved Queries & Variables",
    description: "Reuse queries and create parameterized variables with easy keyboard shortcuts.",
    image: savedQueriesImg,
    videoUrl: "https://cdn.pixabay.com/video/2024/03/26/205470-925843995_large.mp4",
  },
  {
    icon: Database,
    title: "Smart Database Viewer",
    description: "Visualize schemas, tables, and relationships intuitively.",
    image: databaseViewerImg,
    videoUrl: "https://cdn.pixabay.com/video/2024/02/12/200272-912869803_large.mp4",
  },
  {
    icon: Filter,
    title: "Quick Filters",
    description: "Instantly apply filters without manual SQL.",
    image: quickFiltersImg,
    videoUrl: "https://cdn.pixabay.com/video/2024/03/26/205470-925843995_large.mp4",
  },
  {
    icon: Download,
    title: "Export & Download",
    description: "Export data in CSV, JSON, Excel or download entire tables with one click.",
    image: exportOptionsImg,
    videoUrl: "https://cdn.pixabay.com/video/2023/05/02/159977-821742408_large.mp4",
  },
  {
    icon: Search,
    title: "Quick Results Search",
    description: "Find data instantly with lightning-fast search across all tables.",
    image: quickSearchImg,
    videoUrl: "https://cdn.pixabay.com/video/2024/03/26/205470-925843995_large.mp4",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything you need for{" "}
            <span className="text-primary">intelligent</span> database management
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features that make PostgreSQL management effortless and intuitive
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
