import { Container } from "@/components/ui/container";
import ServiceCard from "@/components/common/ServiceCard";
import { serviceItems } from "@/data/servicesData";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function ServicesOverview() {
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
    <section id="services" className="py-16 md:py-24 bg-white dark:bg-slate-900">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Construction Solutions</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Comprehensive services for modern, efficient, and sustainable construction projects.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {serviceItems.slice(0, 3).map((service) => (
            <motion.div key={service.id} variants={item}>
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Prefabs card (spans full width) */}
        <motion.div 
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-slate-800 card-hover lg:col-span-3">
            <div className="h-64 relative">
              <img 
                src={serviceItems[3].image} 
                alt={serviceItems[3].title} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full md:max-w-2xl">
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-0">{serviceItems[3].title}</h3>
                <p className="text-white/90 mb-6">{serviceItems[3].description}</p>
                <Link href="/prefabs">
                  <Button variant="default" className="bg-white hover:bg-slate-100 text-slate-900">
                    Explore Prefab Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
