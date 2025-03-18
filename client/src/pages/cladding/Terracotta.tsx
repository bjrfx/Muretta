import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check, ArrowRight, Info } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import terracottaImg from '../../assets/terracotta/terracotta.avif'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Terracotta() {
  const [activeTab, setActiveTab] = useState("image");
  
  useEffect(() => {
    // Update metadata for SEO
    document.title = "Terracotta Cladding - Muretta Construction";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Muretta's Terracotta Cladding provides traditional yet modern facade solutions with excellent thermal properties"
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
              <div className="rounded-xl shadow-xl overflow-hidden bg-white dark:bg-slate-900">
                <Tabs defaultValue="image" value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <div className="flex justify-between items-center px-4 py-3 border-b">
                    <h3 className="text-lg font-medium">Terracotta</h3>

                  </div>
                  
                  <TabsContent value="image" className="m-0">
                    <img
                      src={terracottaImg}
                      alt="Terracotta Cladding"
                      className="w-full h-auto"
                    />
                  </TabsContent>
                  

                </Tabs>
              </div>
            </motion.div>
            
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Terracotta Cladding</h1>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                Terracotta cladding beautifully balances tradition with innovation. This time-tested material brings warmth, character, and outstanding performance to contemporary architecture, with natural colors that mature gracefully over time.
              </p>
              
              <div className="flex items-center gap-2 mb-6 text-primary-600 dark:text-primary-400">
                <span className="text-lg font-semibold">Natural</span>
                <span>•</span>
                <span className="text-lg font-semibold">Durable</span>
                <span>•</span>
                <span className="text-lg font-semibold">Thermally Efficient</span>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">The Timeless Appeal of Terracotta</h2>
            <p className="text-lg mb-8">
              Terracotta, meaning "baked earth" in Italian, has been used in architecture for millennia. Today's terracotta cladding systems combine this rich heritage with modern manufacturing techniques and installation methods to create facades that are both beautiful and highly functional.
            </p>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                  <Check className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Natural Beauty</h3>
                  <p>Earthy, warm tones that develop a rich patina over time, adding character to buildings.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                  <Check className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Durability</h3>
                  <p>Exceptionally long service life with excellent resistance to weather, pollution, and UV radiation.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                  <Check className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Thermal Performance</h3>
                  <p>Natural properties that help regulate building temperature, reducing energy consumption.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                  <Check className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
                  <p>Made from natural clay with minimal environmental impact and excellent recyclability.</p>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Maintenance and Longevity</h2>
            <div className="overflow-x-auto mb-12">
              <table className="w-full border-collapse border border-slate-300 dark:border-slate-700">
                <tbody>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 p-3 font-semibold bg-slate-100 dark:bg-slate-800">Durability</td>
                    <td className="border border-slate-300 dark:border-slate-700 p-3">Resistant to weather, fading, and wear</td>
                    <td className="border border-slate-300 dark:border-slate-700 p-3 font-semibold bg-slate-100 dark:bg-slate-800">Cleaning</td>
                    <td className="border border-slate-300 dark:border-slate-700 p-3">Simple process, requires only occasional washing</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 p-3 font-semibold bg-slate-100 dark:bg-slate-800">Repairs</td>
                    <td className="border border-slate-300 dark:border-slate-700 p-3">Easy to replace individual pieces if damaged</td>
                    <td className="border border-slate-300 dark:border-slate-700 p-3 font-semibold bg-slate-100 dark:bg-slate-800">Lifespan</td>
                    <td className="border border-slate-300 dark:border-slate-700 p-3">Comparable to traditional brick with proper care</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Terracotta Systems</h2>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li><span className="font-semibold">Rainscreen Panels:</span> Ventilated cladding systems that enhance thermal performance</li>
              <li><span className="font-semibold">Baguettes & Louvers:</span> Linear elements for solar shading and visual appeal</li>
              <li><span className="font-semibold">Terracotta Tiles:</span> Traditional formats with modern installation techniques</li>
              <li><span className="font-semibold">Custom Elements:</span> Bespoke shapes, sizes, and textures for unique architectural expressions</li>
            </ul>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Color & Finish Options</h2>
            <p className="text-lg mb-4">
              Our terracotta products are available in:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Natural earth tones (reds, oranges, browns)</li>
              <li>Custom glazed colors</li>
              <li>Multiple surface textures (smooth, grooved, ribbed)</li>
              <li>Various finishes (matte, glossy, textured)</li>
            </ul>
            
            <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Discover the beauty of terracotta for your project</h3>
              <p className="mb-4">Contact our cladding specialists to explore how terracotta can bring warmth, character, and performance to your building's facade.</p>
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
