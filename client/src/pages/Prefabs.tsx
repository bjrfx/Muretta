import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check, ArrowRight, Clock, CheckSquare, DollarSign, Recycle } from "lucide-react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import prefabImg from '../assets/prefab/model1/3.jpg';
export default function Prefabs() {
  useEffect(() => {
    // Update metadata for SEO
    document.title = "Prefabricated Construction - Muretta Construction";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Muretta's Prefabricated Construction solutions offer time savings, quality control, and reduced waste for modern construction projects"
      );
    }
  }, []);

  return (
    <>
      <section className="py-16 md:py-24 bg-slate-100 dark:bg-slate-800">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={prefabImg}
                alt="Prefabricated Construction"
                className="rounded-xl shadow-xl"
              />
            </motion.div>
            
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Prefabricated Construction</h1>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                Prefabricated construction represents the future of building: faster, more precise, and more sustainable. Our factory-built components and modules are engineered for excellence, enabling rapid on-site assembly while maintaining superior quality and reducing environmental impact.
              </p>
              
              <div className="flex items-center gap-2 mb-6 text-primary-600 dark:text-primary-400">
                <span className="text-lg font-semibold">50-70% Faster</span>
                <span>•</span>
                <span className="text-lg font-semibold">Factory Precision</span>
                <span>•</span>
                <span className="text-lg font-semibold">Sustainable</span>
              </div>
              
              <Link href="/contact">
                <Button size="lg" className="mb-8">
                  Request a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>
      
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">The Prefab Advantage</h2>
            <p className="text-lg mb-12 text-center">
              Prefabricated construction is transforming the building industry with its unique combination of speed, quality, efficiency, and sustainability. Our comprehensive prefab solutions can be tailored to meet the needs of virtually any project type.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Time Efficient</h3>
                </div>
                <p className="text-slate-700 dark:text-slate-300">
                  Parallel construction processes significantly reduce project timelines. While site preparation and foundations are being completed on-site, building components are simultaneously manufactured in our controlled factory environment, reducing overall construction time by 50-70%.
                </p>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                    <CheckSquare className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Quality Control</h3>
                </div>
                <p className="text-slate-700 dark:text-slate-300">
                  Factory production enables stringent quality controls, precision manufacturing, and protection from weather during construction. Each component is built to exact specifications in a controlled environment, resulting in superior fit, finish, and structural integrity.
                </p>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Cost Effective</h3>
                </div>
                <p className="text-slate-700 dark:text-slate-300">
                  Prefabrication reduces labor costs through efficient workflows, minimizes material waste through optimized cutting and assembly, and shortens project timelines—all contributing to overall cost savings. The predictability of factory production also reduces the risk of expensive delays and change orders.
                </p>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                    <Recycle className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Waste Reduction</h3>
                </div>
                <p className="text-slate-700 dark:text-slate-300">
                  Factory production significantly reduces construction waste through precise material ordering, optimized cutting, and recyclable off-cuts. This not only benefits the environment but also reduces disposal costs and improves project sustainability metrics.
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Prefab Solutions</h2>
            <div className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                    <Check className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Modular Buildings</h3>
                    <p>Complete building sections manufactured off-site and assembled quickly on location.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                    <Check className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Panelized Systems</h3>
                    <p>Pre-fabricated wall, floor, and roof panels that speed on-site construction.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                    <Check className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Prefabricated Components</h3>
                    <p>Individual elements like trusses, stairs, and pre-finished assemblies.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                    <Check className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Volumetric Construction</h3>
                    <p>Fully-fitted three-dimensional modules including fixtures and finishes.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Applications</h2>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Residential housing (single and multi-family)</li>
              <li>Commercial and office buildings</li>
              <li>Educational facilities</li>
              <li>Healthcare structures</li>
              <li>Hospitality and tourism</li>
              <li>Retail and mixed-use developments</li>
              <li>Industrial facilities</li>
              <li>Emergency and temporary structures</li>
            </ul>
            
            <div className="bg-slate-100 dark:bg-slate-800 p-8 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">Ready to transform your construction process?</h3>
              <p className="mb-6">
                Contact our prefabrication specialists to discuss how our solutions can make your next project faster, more efficient, and more sustainable. We'll guide you through the options and help you determine the best approach for your specific needs.
              </p>
              <Link href="/contact">
                <Button size="lg">
                  Start Your Prefab Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="bg-primary-50 dark:bg-primary-900/20 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Explore Our Prefab Models</h3>
              <p className="mb-6">
                Browse our complete collection of prefabricated building models, designed for various applications from residential homes to commercial spaces. Our prefab models combine innovative design with efficient construction methods, offering you sustainable and cost-effective building solutions.
              </p>
              <Link href="/prefab-models">
                <Button variant="outline" size="lg">
                  View All Prefab Models
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
      
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Featured Prefab Project</h2>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              See how our prefabricated solutions helped complete a 12-unit residential complex in just 4 months.
            </p>
          </div>
          
          <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-full">
                <img
                  src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80"
                  alt="Prefabricated Housing Community"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">Urban Living Apartments</h3>
                <div className="flex items-center text-primary-600 dark:text-primary-400 mb-6">
                  <Clock className="h-5 w-5 mr-2" />
                  <span className="font-semibold">60% Faster Construction</span>
                </div>
                
                <p className="mb-6">
                  This 12-unit apartment complex utilized our modular construction system, allowing for parallel workflows and dramatically reduced on-site construction time. The building envelope was weather-tight in just 2 weeks, and the entire project was completed in 4 months—compared to the 10-12 months typical for traditional construction methods.
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-accent-600 dark:text-accent-400 mr-2 mt-1 flex-shrink-0" />
                    <span>Higher quality through factory production</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-accent-600 dark:text-accent-400 mr-2 mt-1 flex-shrink-0" />
                    <span>75% less construction waste</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-accent-600 dark:text-accent-400 mr-2 mt-1 flex-shrink-0" />
                    <span>20% overall cost savings</span>
                  </div>
                </div>
                
                <Link href="/contact">
                  <Button variant="outline">
                    Explore Similar Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
