import { Container } from "@/components/ui/container";
import { projects } from "@/data/projectsData";
import { Badge } from "@/components/ui/badge";
import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ProjectDetail() {
  const { id } = useParams();
  const currentIndex = projects.findIndex(p => p.id === id);
  const project = projects[currentIndex];
  
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  if (!project) {
    return (
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              The project you're looking for doesn't exist.
            </p>
          </div>
        </Container>
      </section>
    );
  }

  const categoryColors = {
    residential: "bg-secondary-100 dark:bg-secondary-900 text-secondary-800 dark:text-secondary-300",
    commercial: "bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300",
    specialized: "bg-accent-100 dark:bg-accent-900 text-accent-800 dark:text-accent-300",
  };

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="rounded-xl overflow-hidden h-[400px]">
                <img
                  src={project.images.before}
                  alt={`${project.title} - Before`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden h-[400px]">
                <img
                  src={project.images.after}
                  alt={`${project.title} - After`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
                <p className="text-xl text-slate-600 dark:text-slate-400">{project.location}</p>
              </div>
              <Badge className={`text-sm ${categoryColors[project.category]}`}>
                {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
              </Badge>
            </div>

            <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
              {project.description}
            </p>

            <div>
              <h2 className="text-2xl font-bold mb-4">Services Provided</h2>
              <div className="flex flex-wrap gap-3">
                {project.services.map((service) => (
                  <Badge
                    key={service}
                    className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
                  >
                    {service}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="flex justify-between items-center mt-12">
              {prevProject ? (
                <Link href={`/projects/${prevProject.id}`}>
                  <Button variant="outline" className="flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    Previous Model
                  </Button>
                </Link>
              ) : (
                <div></div>
              )}
              
              {nextProject ? (
                <Link href={`/projects/${nextProject.id}`}>
                  <Button variant="outline" className="flex items-center gap-2">
                    Next Model
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}