import { useState } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Project } from "@/data/projectsData";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const categoryColors = {
    residential: "bg-secondary-100 dark:bg-secondary-900 text-secondary-800 dark:text-secondary-300",
    commercial: "bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300",
    specialized: "bg-accent-100 dark:bg-accent-900 text-accent-800 dark:text-accent-300",
  };

  return (
    <Card className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-slate-800 card-hover">
      <div className="h-64 relative group cursor-pointer overflow-hidden">
        <img
          src={project.images.before}
          alt={`${project.title} Before`}
          className="w-full h-full object-cover transition-opacity duration-300 absolute inset-0 group-hover:opacity-0"
        />
        <img
          src={project.images.after}
          alt={`${project.title} After`}
          className="w-full h-full object-cover transition-opacity duration-300 absolute inset-0 opacity-0 group-hover:opacity-100"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold mb-1">{project.title}</h3>
            <p className="text-slate-500 dark:text-slate-400">{project.location}</p>
          </div>
          <Badge className={`text-xs ${categoryColors[project.category]}`}>
            {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
          </Badge>
        </div>
        <p className="text-slate-600 dark:text-slate-300 mb-4">
          {project.shortDescription}
        </p>
        <Link href={`/projects/${project.id}`} className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:underline">
          View Prefab Details
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
}
