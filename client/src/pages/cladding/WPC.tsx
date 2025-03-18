import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import wpcImg from '../../assets/wpc/wpc.avif'
export default function WPC() {
  useEffect(() => {
    // Update metadata for SEO
    document.title = "WPC Cladding - Muretta Construction";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Muretta's Wood-Plastic Composite (WPC) cladding provides low-maintenance facade solutions with natural wood appearance"
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
                src={wpcImg}
                alt="WPC Cladding"
                className="rounded-xl shadow-xl"
              />
            </motion.div>
            
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Wood-Plastic Composite (WPC) Cladding</h1>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                WPC cladding combines the natural aesthetics of wood with the durability of engineered polymers. The result is a beautiful, low-maintenance facade solution that withstands the elements while maintaining its appearance for years.
              </p>
              
              <div className="flex items-center gap-2 mb-6 text-primary-600 dark:text-primary-400">
                <span className="text-lg font-semibold">Weather Resistant</span>
                <span>•</span>
                <span className="text-lg font-semibold">Low Maintenance</span>
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
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">What is Wood-Plastic Composite (WPC)?</h2>
            <p className="text-lg mb-8">
              Wood-Plastic Composite (WPC) is a revolutionary material made from a combination of wood fibers or sawdust and plastic. The resulting material is durable, resistant to moisture, and requires minimal maintenance. WPC decking, in particular, refers to outdoor decking made from WPC material, which is often used as an alternative to traditional wood decking due to its superior durability and weather resistance.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-6">WPC Decking Specifications</h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-slate-300 dark:border-slate-700">
                <tbody>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 p-3 font-semibold bg-slate-100 dark:bg-slate-800">Size</td>
                    <td className="border border-slate-300 dark:border-slate-700 p-3">140mm*23mm</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 p-3 font-semibold bg-slate-100 dark:bg-slate-800">Length</td>
                    <td className="border border-slate-300 dark:border-slate-700 p-3">2.2m, 2.9m, 5.8m/ Customized</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 p-3 font-semibold bg-slate-100 dark:bg-slate-800">Composition</td>
                    <td className="border border-slate-300 dark:border-slate-700 p-3">Wood & plastic composite</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 p-3 font-semibold bg-slate-100 dark:bg-slate-800">Color</td>
                    <td className="border border-slate-300 dark:border-slate-700 p-3">Red, brown, yellow, black, coffee, etc</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 p-3 font-semibold bg-slate-100 dark:bg-slate-800">Surface</td>
                    <td className="border border-slate-300 dark:border-slate-700 p-3">Sanded, brushed</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 p-3 font-semibold bg-slate-100 dark:bg-slate-800">Package</td>
                    <td className="border border-slate-300 dark:border-slate-700 p-3">PE film + Wood Pallet</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 p-3 font-semibold bg-slate-100 dark:bg-slate-800">MOQ</td>
                    <td className="border border-slate-300 dark:border-slate-700 p-3">200 square meters</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 p-3 font-semibold bg-slate-100 dark:bg-slate-800">Certificates</td>
                    <td className="border border-slate-300 dark:border-slate-700 p-3">CE, BSCI, ISO9001, ISO14001</td>
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
                  <h3 className="text-xl font-semibold mb-2">Durability</h3>
                  <p>Resistant to rot, mold, termites, and other pests that damage traditional wood cladding.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                  <Check className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Weather Resistance</h3>
                  <p>Maintains color and integrity despite exposure to sun, rain, snow, and saltwater environments.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                  <Check className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Low Maintenance</h3>
                  <p>No need for regular painting, staining, or sealing, saving time and money over the building lifecycle.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                  <Check className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
                  <p>Contains recycled materials and is itself recyclable, reducing environmental impact.</p>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Design Options</h2>
            <p className="text-lg mb-4">
              Our WPC cladding comes in a variety of:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li><span className="font-semibold">Colors and Finishes:</span> From natural wood tones to contemporary colors</li>
              <li><span className="font-semibold">Textures:</span> Smooth, wood grain, brushed, and more</li>
              <li><span className="font-semibold">Profile Styles:</span> Horizontal, vertical, and customized installation options</li>
              <li><span className="font-semibold">Dimensions:</span> Various widths and lengths to suit your design needs</li>
            </ul>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Applications</h2>
            <p className="text-lg mb-4">
              WPC cladding is versatile and suitable for:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Residential exteriors</li>
              <li>Commercial building facades</li>
              <li>Recreational facilities</li>
              <li>Coastal properties</li>
              <li>High-exposure climate zones</li>
              <li>Renovation and retrofitting projects</li>
            </ul>
            
            <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Ready to enhance your building's exterior?</h3>
              <p className="mb-4">Contact our cladding specialists to discuss how WPC can provide both beauty and protection for your project.</p>
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
