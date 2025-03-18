import { motion } from "framer-motion";
import { ShieldCheck, Zap, Globe } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/motion";

const features = [
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description: "Our rigorous quality control processes ensure that every project meets the highest standards of construction excellence."
  },
  {
    icon: Zap,
    title: "Innovative Solutions",
    description: "We embrace the latest construction technologies and methodologies to deliver cutting-edge building solutions."
  },
  {
    icon: Globe,
    title: "Sustainability Focus",
    description: "Our environmentally conscious approach prioritizes sustainable materials and energy-efficient building designs."
  }
];

const OverviewSection = () => {
  return (
    <section id="overview" className="py-16 bg-white dark:bg-gray-900">
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
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Redefining Construction Standards</h2>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            At Muretta, we combine innovation, sustainability, and precision to deliver construction solutions that meet the demands of tomorrow.
          </p>
        </motion.div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "tween", 0.3 + index * 0.1, 1)}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default OverviewSection;
