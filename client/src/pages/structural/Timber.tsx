import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Timber() {
  useEffect(() => {
    // Update metadata for SEO
    document.title = "Timber Construction - Muretta Construction";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Muretta's Timber Construction solutions provide sustainable and versatile structural solutions using engineered wood"
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
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Timber Construction"
                className="rounded-xl shadow-xl"
              />
            </motion.div>
            
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Timber Construction</h1>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                Modern timber construction combines traditional craftsmanship with advanced engineering to create sustainable, beautiful, and durable structures. Our engineered wood solutions offer strength, versatility, and environmental benefits.
              </p>
              
              <div className="flex items-center gap-2 mb-6 text-primary-600 dark:text-primary-400">
                <span className="text-lg font-semibold">Sustainable</span>
                <span>•</span>
                <span className="text-lg font-semibold">Renewable</span>
                <span>•</span>
                <span className="text-lg font-semibold">Aesthetically Pleasing</span>
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
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Modern Timber Solutions</h2>
            <p className="text-lg mb-8">
              Today's timber construction goes far beyond traditional wood framing. We specialize in engineered wood products like cross-laminated timber (CLT), glue-laminated timber (glulam), and laminated veneer lumber (LVL) that offer superior performance and sustainability.
            </p>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                  <Check className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
                  <p>Wood stores carbon throughout its lifecycle, with trees absorbing CO2 during growth. As a renewable resource, timber can be sustainably sourced with proper forest management.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                  <Check className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Energy Efficiency</h3>
                  <p>Timber's natural insulation properties help regulate indoor temperatures, while its low embodied energy in production contributes to overall building efficiency.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                  <Check className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Speed of Construction</h3>
                  <p>Prefabricated mass timber elements enable faster assembly and require less on-site labor, significantly reducing construction timelines.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                  <Check className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Strength and Durability</h3>
                  <p>Mass timber offers high strength-to-weight ratio and natural fire resistance, with outer layers charring to protect the interior structure.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                  <Check className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Aesthetic Appeal</h3>
                  <p>Timber brings natural warmth and beauty while allowing creative architectural designs with large spans and open layouts.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                  <Check className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Cost-Effectiveness</h3>
                  <p>Reduced labor time, shorter construction periods, and lower maintenance costs contribute to overall project cost savings.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                  <Check className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Environmental Impact</h3>
                  <p>Prefabricated components reduce construction waste, and timber can be reused or recycled at the end of a building's lifecycle.</p>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Timber Systems</h2>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li><span className="font-semibold">Cross-Laminated Timber (CLT):</span> Solid wood panels for walls, floors, and roofs</li>
              <li><span className="font-semibold">Glue-Laminated Timber (Glulam):</span> Engineered beams and columns</li>
              <li><span className="font-semibold">Laminated Veneer Lumber (LVL):</span> High-strength structural elements</li>
              <li><span className="font-semibold">Mass Timber Construction:</span> For mid-rise and taller buildings</li>
              <li><span className="font-semibold">Timber Frame Systems:</span> Traditional and modern techniques</li>
            </ul>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Applications</h2>
            <p className="text-lg mb-4">
              Our timber construction solutions are ideal for:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Residential homes and multi-family buildings</li>
              <li>Commercial offices and retail spaces</li>
              <li>Educational facilities</li>
              <li>Cultural and community buildings</li>
              <li>Recreational facilities</li>
              <li>Sustainable development projects</li>
            </ul>
            
            <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Discover Timber Excellence</h3>
              <p className="mb-4">Contact our timber specialists to explore how our engineered wood solutions can elevate your next construction project.</p>
              <Link href="/contact">
                <Button>
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
