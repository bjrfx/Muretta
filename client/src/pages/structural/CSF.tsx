import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import csfImg from '../../assets/csf/csf1.avif'
export default function CSF() {
  useEffect(() => {
    // Update metadata for SEO
    document.title = "Cold-Formed Steel (CSF) - Muretta Construction";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Muretta's Cold-Formed Steel solutions provide durable, non-combustible framing for commercial and residential construction"
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
                src={csfImg}
                alt="Cold-Formed Steel Construction"
                className="rounded-xl shadow-xl"
              />
            </motion.div>
            
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Cold-Formed Steel (CSF)</h1>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                Cold-formed steel framing offers exceptional strength, durability, and fire resistance for modern construction projects. Our CSF solutions are engineered for precision and performance.
              </p>
              
              <div className="flex items-center gap-2 mb-6 text-primary-600 dark:text-primary-400">
                <span className="text-lg font-semibold">Non-Combustible</span>
                <span>•</span>
                <span className="text-lg font-semibold">Recyclable</span>
                <span>•</span>
                <span className="text-lg font-semibold">Lightweight</span>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">About Cold-Formed Steel</h2>
            <p className="text-lg mb-8">
              Cold-formed steel (CSF) is produced by rolling or pressing thin sheets of steel into desired shapes at room temperature. This creates structural elements that are lightweight yet incredibly strong, making CSF an ideal material for both load-bearing and non-load-bearing applications.
            </p>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Strength and Durability</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                  <Check className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Corrosion Resistant</h3>
                  <p>Galvanized steel withstands harsh environmental conditions.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                  <Check className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Fire Resistant</h3>
                  <p>Non-combustible properties enhance building safety.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                  <Check className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">High Strength-to-Weight Ratio</h3>
                  <p>Enables taller, stronger structures with less material.</p>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                  <Check className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Strength and Durability</h3>
                  <p>Steel framing provides a strong, stable foundation, ensuring that modular units can withstand transportation, installation, and long-term use.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                  <Check className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Precision and Consistency</h3>
                  <p>Steel components are factory-manufactured to precise specifications, ensuring consistent quality and reducing the likelihood of construction errors.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                  <Check className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Lightweight Construction</h3>
                  <p>Despite its strength, light steel is relatively lightweight, which reduces transportation costs and makes handling and assembly easier during the modular building process.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                  <Check className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Speed of Assembly</h3>
                  <p>Steel framing allows for faster assembly in the factory and on-site, helping to meet project deadlines efficiently.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                  <Check className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Design Flexibility</h3>
                  <p>Steel can be easily molded into various shapes, allowing for more diverse and customizable modular designs.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                  <Check className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
                  <p>Steel is highly recyclable, and using steel in modular construction promotes environmentally friendly practices by reducing waste and supporting circular construction.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                  <Check className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Fire Resistance</h3>
                  <p>Steel is non-combustible, improving the fire safety of modular buildings.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                  <Check className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Low Maintenance</h3>
                  <p>Steel is resistant to issues like rot, pests, and warping, reducing long-term maintenance costs compared to traditional materials like wood.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                  <Check className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Cost-Effective</h3>
                  <p>The combination of durability, speed, and low maintenance costs makes light steel framing a cost-effective choice for modular construction over time.</p>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Applications</h2>
            <p className="text-lg mb-4">
              Our cold-formed steel solutions are ideal for:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Multi-story residential buildings</li>
              <li>Commercial construction</li>
              <li>Healthcare facilities</li>
              <li>Educational buildings</li>
              <li>Industrial structures</li>
              <li>Modular construction</li>
            </ul>
            
            <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Interested in CSF for your project?</h3>
              <p className="mb-4">Contact our team to discuss how cold-formed steel can provide the structural integrity and fire safety your project requires.</p>
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
