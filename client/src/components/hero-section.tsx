import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 to-gray-950 dark:from-gray-950 dark:to-black overflow-hidden">
      {/* Decorative background pattern */}
      <div 
        className="absolute inset-0 opacity-10 dark:opacity-20" 
        aria-hidden="true" 
        style={{
          backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJ3aGl0ZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMzYgMzRoLTJWMGgydjM0em0tNCAwVjBoMnYzNGgtMnoiLz48cGF0aCBkPSJNMzAuOTUgMHYzNGgyVjBoLTJ6TTMwIDBoLTJ2MzRoMlYweiIvPjwvZz48L3N2Zz4=')`,
          backgroundSize: '50px 50px'
        }}
      />
      
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32 relative"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeIn("right", "tween", 0.2, 1)}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Innovative <span className="text-primary-400">Construction</span> Solutions
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-lg">
              Building the future with cutting-edge technologies and sustainable practices that redefine modern construction.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => {
                  const servicesSection = document.getElementById('services');
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="shadow-md"
              >
                Explore Services
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="border-gray-300 dark:border-gray-700 text-white hover:bg-white/10"
              >
                Get a Quote
              </Button>
            </div>
          </motion.div>
          <motion.div variants={fadeIn("left", "tween", 0.4, 1)} className="relative">
            <img 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop" 
              alt="Modern construction project" 
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute -bottom-5 -left-5 bg-amber-500 text-white px-6 py-4 rounded-lg shadow-lg">
              <p className="font-semibold">Trusted by 200+ clients worldwide</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
