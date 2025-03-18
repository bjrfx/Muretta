import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check, ArrowRight, Info } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import sipImg from '../../assets/sip/sip1.avif'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SIP() {
  const [activeTab, setActiveTab] = useState("image");
  
  useEffect(() => {
    // Update metadata for SEO
    document.title = "Structural Insulated Panels (SIP) - Muretta Construction";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Muretta's Structural Insulated Panels (SIP) provide superior insulation and structural integrity in a single, easy-to-install component"
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
                    <h3 className="text-lg font-medium">SIP Visualization</h3>

                  </div>
                  
                  <TabsContent value="image" className="m-0">
                    <img
                      src={sipImg}
                      alt="Structural Insulated Panels"
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
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Structural Insulated Panels (SIP)</h1>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                SIPs provide superior insulation and structural integrity in a single, easy-to-install component. Perfect for energy-efficient construction with reduced build times.
              </p>
              
              <div className="flex items-center gap-2 mb-6 text-primary-600 dark:text-primary-400">
                <span className="text-lg font-semibold">70% Faster Construction</span>
                <span>•</span>
                <span className="text-lg font-semibold">40-60% Energy Savings</span>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">How SIPs Work</h2>
            <p className="text-lg mb-8">
              Structural Insulated Panels (SIPs) consist of an insulating foam core sandwiched between two structural facings, typically oriented strand board (OSB). This creates a building system that is exceptionally strong, energy efficient, and cost effective.
            </p>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6">SIPs vs. Traditional Building Method</h2>
            <div className="overflow-x-auto mb-12">
              <table className="w-full border-collapse bg-white dark:bg-slate-900 shadow-sm rounded-lg overflow-hidden">
                <thead className="bg-slate-100 dark:bg-slate-800">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Aspect</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">SIPs</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Conventional Framing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  <tr>
                    <td className="px-6 py-4 text-sm">Thermal performance</td>
                    <td className="px-6 py-4 text-sm font-medium text-primary-600 dark:text-primary-400">Excellent</td>
                    <td className="px-6 py-4 text-sm">Good</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm">Airtightness</td>
                    <td className="px-6 py-4 text-sm font-medium text-primary-600 dark:text-primary-400">Superior</td>
                    <td className="px-6 py-4 text-sm">Variable</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm">Construction Speed</td>
                    <td className="px-6 py-4 text-sm font-medium text-primary-600 dark:text-primary-400">Fast</td>
                    <td className="px-6 py-4 text-sm">Slower</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm">Labour Intensity</td>
                    <td className="px-6 py-4 text-sm font-medium text-primary-600 dark:text-primary-400">Lower</td>
                    <td className="px-6 py-4 text-sm">Higher</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-6">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                  <Check className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Energy Efficiency</h3>
                  <p>Superior R-values and minimal thermal bridging result in substantially lower energy costs.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                  <Check className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Faster Construction</h3>
                  <p>Pre-fabricated panels reduce on-site construction time by up to 70% compared to traditional methods.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                  <Check className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Structural Strength</h3>
                  <p>SIPs create a strong, rigid building envelope that exceeds most building codes for structural performance.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                  <Check className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Design Flexibility</h3>
                  <p>SIPs can be used in various architectural designs, from traditional to contemporary styles.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                  <Check className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Noise Reduction</h3>
                  <p>Their dense, solid structure provides excellent soundproofing, reducing noise from both exterior and interior sources.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                  <Check className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Reduced Material Waste</h3>
                  <p>Manufactured to exact specifications, minimizing construction waste compared to traditional framing methods.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                  <Check className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Sustainability Certifications</h3>
                  <p>Buildings often qualify for green building certifications due to energy efficiency and eco-friendly materials.</p>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Applications</h2>
            <p className="text-lg mb-4">
              SIPs are versatile building components suitable for:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Residential construction (single and multi-family homes)</li>
              <li>Commercial buildings</li>
              <li>Educational facilities</li>
              <li>Healthcare facilities</li>
              <li>Industrial buildings</li>
            </ul>
            
            <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Ready to learn more?</h3>
              <p className="mb-4">Contact our SIP specialists to discuss your project needs and how our structural insulated panels can benefit your construction project.</p>
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
