import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { useLocation } from "wouter";

const CTASection = () => {
  const [, setLocation] = useLocation();

  return (
    <section className="bg-gray-900 dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="bg-primary-600 dark:bg-primary-700 rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-12 sm:px-12 lg:px-16 lg:py-16 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeIn("right", "tween", 0.2, 1)}
              >
                <h2 className="text-3xl font-bold text-white">Ready to transform your construction project?</h2>
                <p className="mt-4 text-lg text-primary-100">Discover how Muretta's innovative solutions can bring efficiency, sustainability, and exceptional quality to your next build.</p>
              </motion.div>
              <motion.div 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeIn("left", "tween", 0.4, 1)}
                className="lg:text-right"
              >
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="shadow-md"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      setLocation('/#contact');
                    }
                  }}
                >
                  Get Started Today
                </Button>
              </motion.div>
            </div>
            {/* Abstract shapes */}
            <div className="hidden lg:block absolute right-0 top-0 w-40 h-40 transform translate-x-1/2 -translate-y-1/2 opacity-20">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="60" r="60" fill="white"/>
              </svg>
            </div>
            <div className="hidden lg:block absolute left-0 bottom-0 w-24 h-24 transform -translate-x-1/2 translate-y-1/2 opacity-20">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="120" height="120" fill="white"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
