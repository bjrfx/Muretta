import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

const constructionSolutions = [
  {
    title: "Residential Construction",
    description: "Custom homes, renovations, and residential developments tailored to your needs.",
    icon: "🏠",
  },
  {
    title: "Commercial Construction",
    description: "Office buildings, retail spaces, and industrial facilities built to the highest standards.",
    icon: "🏢",
  },
  {
    title: "Infrastructure Development",
    description: "Roads, bridges, and public facilities that connect and serve communities.",
    icon: "🌉",
  },
  {
    title: "Sustainable Building",
    description: "Eco-friendly construction solutions that minimize environmental impact.",
    icon: "🌱",
  },
];

export default function Services() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
      <Container>
        {/* Construction Solutions Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Construction Solutions</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Comprehensive construction services tailored to meet your specific needs.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {constructionSolutions.map((solution, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              <div className="text-4xl mb-4">{solution.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{solution.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{solution.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Prefabricated Construction Section */}
        <motion.div 
          className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Prefabricated Construction</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
              Modern, efficient, and sustainable prefabricated construction solutions for faster project completion and reduced environmental impact.
            </p>
            <Link href="/prefabs">
              <Button size="lg" className="bg-primary-600 hover:bg-primary-700 text-white">
                Explore Prefab Solutions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link href="/contact">
            <Button variant="outline" size="lg">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}