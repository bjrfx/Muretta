import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Container } from "@/components/ui/container";
import Stats from "@/components/common/Stats";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative bg-slate-100 dark:bg-slate-800 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
          alt="Modern construction site"
          className="w-full h-full object-cover opacity-15 dark:opacity-10"
        />
      </div>
      
      <Container className="py-16 md:py-24 lg:py-32 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 font-poppins">
            Modern Construction Solutions
          </h1>
          <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Building the future with innovative structural systems, sustainable materials, and efficient construction technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="services">
              <Button size="lg" className="px-6">
                Explore Our Services
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="px-6">
                Get in Touch
              </Button>
            </Link>
          </div>
          
          <div className="mt-16">
            <Stats />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
