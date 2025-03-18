import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check, Timer } from "lucide-react";
import { featuredService } from "@/data/servicesData";
import { motion } from "framer-motion";

export default function FeaturedSolution() {
  return (
    <section className="py-16 md:py-24 bg-slate-100 dark:bg-slate-800">
      <Container>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img
                  src={featuredService.image}
                  alt={featuredService.title}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-700 rounded-lg shadow-lg p-4 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                    <Timer className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">
                      {featuredService.stats.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {featuredService.stats.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-accent-600 dark:text-accent-400 font-semibold mb-2">
              FEATURED SOLUTION
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {featuredService.title}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
              {featuredService.description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-8">
              {featuredService.features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">{feature.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/structural/sip">
                <Button>
                  Learn More About SIPs
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline">
                  Request a Consultation
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
