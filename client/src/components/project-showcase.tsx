import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ProjectCard from "./project-card";
import { fadeIn, staggerContainer } from "@/lib/motion";

const projects = [
  {
    image: "https://images.unsplash.com/photo-1592928302636-c83cf1e1c887?q=80&w=800&auto=format&fit=crop",
    title: "Contemporary Office Complex",
    category: "SIP Construction with Aluminum Cladding"
  },
  {
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=800&auto=format&fit=crop",
    title: "Sustainable Luxury Residence",
    category: "Timber Construction with WPC Cladding"
  },
  {
    image: "https://images.unsplash.com/photo-1546636889-ba9fdd63583e?q=80&w=800&auto=format&fit=crop",
    title: "Commercial Solar Greenhouse",
    category: "Integrated Energy-Efficient Design"
  },
  {
    image: "https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?q=80&w=800&auto=format&fit=crop",
    title: "Boutique Hotel Development",
    category: "CSF Structure with Terracotta Cladding"
  },
  {
    image: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?q=80&w=800&auto=format&fit=crop",
    title: "Modern Prefab Community",
    category: "Modular Construction Solution"
  },
  {
    image: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?q=80&w=800&auto=format&fit=crop",
    title: "Educational Innovation Center",
    category: "Hybrid SIP and CSF Construction"
  }
];

const ProjectShowcase = () => {
  return (
    <section id="projects" className="py-16 bg-white dark:bg-gray-900">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div 
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Featured Projects</h2>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            Explore our portfolio of innovative construction solutions delivered across diverse sectors.
          </p>
        </motion.div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              category={project.category}
              index={index}
            />
          ))}
        </div>
        
        <motion.div 
          variants={fadeIn("up", "tween", 0.6, 1)}
          className="mt-12 text-center"
        >
          <Button size="lg" className="shadow-md">
            View All Projects
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectShowcase;
