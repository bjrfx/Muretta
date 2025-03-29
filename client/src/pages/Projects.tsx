import { Container } from "@/components/ui/container";
import ProjectCard from "@/components/common/ProjectCard";
import { projects } from "@/data/projectsData";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = [...new Set(projects.map(project => project.category))];
  
  const filteredProjects = selectedCategory
    ? projects.filter(project => project.category === selectedCategory)
    : projects;

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Prefabs</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Discover our complete portfolio of construction prefabs across various sectors.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <Badge
            className={`cursor-pointer text-sm ${!selectedCategory ? 'bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300' : 'bg-slate-100 dark:bg-slate-800'}`}
            onClick={() => setSelectedCategory(null)}
          >
            All
          </Badge>
          {categories.map((category) => (
            <Badge
              key={category}
              className={`cursor-pointer text-sm ${selectedCategory === category ? 'bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300' : 'bg-slate-100 dark:bg-slate-800'}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}