import { Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { fadeIn } from "@/lib/motion";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
  index: number;
}

const ServiceCard = ({ image, title, description, link, index }: ServiceCardProps) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-custom transition-all duration-300 hover:translate-y-[-5px]"
    >
      <img 
        src={image} 
        className="w-full h-48 object-cover" 
        alt={title} 
      />
      <div className="p-6">
        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h4>
        <p className="mt-2 text-gray-700 dark:text-gray-300">{description}</p>
        <Link href={link}>
          <a className="mt-4 inline-flex items-center text-primary-600 dark:text-primary-400 font-medium">
            Learn more
            <ChevronRight className="h-4 w-4 ml-1" />
          </a>
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
