import { motion } from "framer-motion";
import ServiceCard from "./service-card";
import { fadeIn, staggerContainer } from "@/lib/motion";

// Structural Solutions
const structuralServices = [
  {
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop",
    title: "SIP",
    description: "Structural Insulated Panels offering superior thermal efficiency and rapid construction capabilities.",
    link: "/structural/sip"
  },
  {
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop",
    title: "CSF",
    description: "Cold-Formed Steel framing systems that provide strength, durability, and design flexibility.",
    link: "/structural/csf"
  },
  {
    image: "https://images.unsplash.com/photo-1564501911891-74a27d949ee1?q=80&w=800&auto=format&fit=crop",
    title: "Timber Construction",
    description: "Sustainable timber construction methods combining traditional craftsmanship with modern engineering.",
    link: "/structural/timber"
  }
];

// Cladding Solutions
const claddingServices = [
  {
    image: "https://images.unsplash.com/photo-1604811779094-ddf3ee92e6ef?q=80&w=800&auto=format&fit=crop",
    title: "WPC",
    description: "Wood-Plastic Composite cladding that offers the aesthetics of wood with enhanced durability and low maintenance.",
    link: "/cladding/wpc"
  },
  {
    image: "https://images.unsplash.com/photo-1516216628859-9bccecab13ca?q=80&w=800&auto=format&fit=crop",
    title: "Aluminum Cladding",
    description: "Lightweight, versatile aluminum cladding systems that provide weather protection and contemporary aesthetics.",
    link: "/cladding/aluminum"
  },
  {
    image: "https://images.unsplash.com/photo-1621352404112-58e2468993a0?q=80&w=800&auto=format&fit=crop",
    title: "Terracotta",
    description: "Traditional terracotta cladding reimagined with modern installation techniques for distinctive architectural facades.",
    link: "/cladding/terracotta"
  }
];

// Other Solutions
const otherServices = [
  {
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=800&auto=format&fit=crop",
    title: "Solar Greenhouse",
    description: "Self-sustaining greenhouse structures that harness solar energy for optimal growing conditions and reduced environmental impact.",
    link: "/solar-greenhouse"
  },
  {
    image: "https://images.unsplash.com/photo-1577493340887-b7bfff550145?q=80&w=800&auto=format&fit=crop",
    title: "Prefabs",
    description: "Factory-built prefabricated structures that offer quality control, reduced construction time, and cost efficiency.",
    link: "/prefabs"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-gray-50 dark:bg-gray-950">
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
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Our Specialized Services</h2>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            Comprehensive construction solutions tailored to meet your specific project requirements.
          </p>
        </motion.div>
        
        <div className="mt-16 space-y-16">
          {/* Structural Solutions */}
          <div>
            <motion.h3 
              variants={fadeIn("right", "tween", 0.3, 1)}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-8 border-l-4 border-primary-600 pl-3"
            >
              Structural Solutions
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {structuralServices.map((service, index) => (
                <ServiceCard 
                  key={service.title}
                  image={service.image}
                  title={service.title}
                  description={service.description}
                  link={service.link}
                  index={index}
                />
              ))}
            </div>
          </div>
          
          {/* Cladding Solutions */}
          <div>
            <motion.h3 
              variants={fadeIn("right", "tween", 0.3, 1)}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-8 border-l-4 border-primary-600 pl-3"
            >
              Cladding Solutions
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {claddingServices.map((service, index) => (
                <ServiceCard 
                  key={service.title}
                  image={service.image}
                  title={service.title}
                  description={service.description}
                  link={service.link}
                  index={index}
                />
              ))}
            </div>
          </div>
          
          {/* Other Solutions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherServices.map((service, index) => (
              <motion.div 
                key={service.title}
                variants={fadeIn("up", "spring", index * 0.1, 0.75)}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-custom transition-all duration-300 hover:translate-y-[-5px]"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="order-2 md:order-1 p-6">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{service.title}</h4>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">{service.description}</p>
                    <a href={service.link} className="mt-4 inline-flex items-center text-primary-600 dark:text-primary-400 font-medium">
                      Learn more
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                  <div className="order-1 md:order-2">
                    <img src={service.image} className="w-full h-full object-cover" alt={service.title} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
