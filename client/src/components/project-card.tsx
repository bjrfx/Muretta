import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  index: number;
}

const ProjectCard = ({ image, title, category, index }: ProjectCardProps) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.075, 0.75)}
      className="group relative overflow-hidden rounded-lg"
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-300">{category}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
