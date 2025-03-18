import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  content: string;
  name: string;
  company: string;
  initials: string;
  index: number;
}

const TestimonialCard = ({ content, name, company, initials, index }: TestimonialCardProps) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg"
    >
      <div className="flex items-center mb-4">
        <div className="text-amber-400 flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-current" />
          ))}
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-6">{content}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
          <span className="text-primary-600 font-bold text-lg">{initials}</span>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white">{name}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">{company}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
