import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import aluminumImg from '../../assets/aluminum/aluminum.avif'
import metallicImg from '../../assets/aluminum/metallic.avif'
import designImg from '../../assets/aluminum/design.avif'
import interiorImg from '../../assets/aluminum/interior.avif'
export default function Aluminum() {
  useEffect(() => {
    // Update metadata for SEO
    document.title = "Aluminum Cladding - Muretta Construction";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Muretta's Aluminum Cladding provides lightweight, durable, and weather-resistant exterior systems for modern architecture"
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
                src={aluminumImg}
                alt="Aluminum Cladding"
                className="rounded-xl shadow-xl"
              />
            </motion.div>
            
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Aluminum Cladding Systems</h1>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                Aluminum cladding combines sleek aesthetics with outstanding performance to create striking, durable building exteriors. Our aluminum facade systems offer architects and builders unparalleled design flexibility with exceptional longevity.
              </p>
              
              <div className="flex items-center gap-2 mb-6 text-primary-600 dark:text-primary-400">
                <span className="text-lg font-semibold">Lightweight</span>
                <span>•</span>
                <span className="text-lg font-semibold">Corrosion Resistant</span>
                <span>•</span>
                <span className="text-lg font-semibold">Recyclable</span>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Advanced Aluminum Cladding Solutions</h2>
            <p className="text-lg mb-8">
              Aluminum cladding has revolutionized modern architecture with its perfect balance of aesthetics, performance, and sustainability. Our aluminum facade systems use high-grade alloys and state-of-the-art manufacturing processes to deliver exceptional quality and durability.
            </p>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                  <Check className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Quick and Easy</h3>
                  <p>Interlocking system allows for rapid installation, reducing construction time and labor costs.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                  <Check className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Lightweight</h3>
                  <p>Reduces structural load, making it ideal for retrofits while maintaining excellent structural integrity.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                  <Check className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Precision Fit</h3>
                  <p>Factory-made components ensure consistent quality and perfect alignment during installation.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                  <Check className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Minimal Waste</h3>
                  <p>Efficient use of materials reduces environmental impact, supporting sustainable construction practices.</p>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Feature Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden">
                <img src={metallicImg} alt="Metallic Elegance" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Metallic Elegance</h3>
                  <p>Sleek, modern appearance enhances building aesthetics.</p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden">
                <img src={designImg} alt="Design Flexibility" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Design Flexibility</h3>
                  <p>Available in various colors, patterns, and finishes.</p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden">
                <img src={interiorImg} alt="Interior Applications" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Interior Applications</h3>
                  <p>Stunning visual impact for indoor spaces.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-6">Durability and Longevity</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                  <Check className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Weather Resistance</h3>
                  <p>Withstands extreme temperatures, rain, and UV exposure.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                  <Check className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Corrosion Proof</h3>
                  <p>Aluminum's natural oxide layer prevents rust.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                  <Check className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Low Maintenance</h3>
                  <p>Minimal upkeep required, saving time and money.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                  <Check className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Long-lasting Performance</h3>
                  <p>Lifespan of 50+ years with proper installation.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Aluminum Systems</h2>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li><span className="font-semibold">Aluminum Composite Panels (ACP):</span> Multi-layered panels offering excellent flatness and rigidity</li>
              <li><span className="font-semibold">Solid Aluminum Plate Systems:</span> Robust cladding for prestigious projects</li>
              <li><span className="font-semibold">Cassette Panel Systems:</span> Pre-fabricated panels with folded edges for a frameless appearance</li>
              <li><span className="font-semibold">Extruded Aluminum Profiles:</span> Custom shapes for unique architectural expressions</li>
              <li><span className="font-semibold">Perforated & Expanded Aluminum:</span> For solar shading and aesthetic enhancements</li>
            </ul>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Finish Options</h2>
            <p className="text-lg mb-4">
              Our aluminum cladding is available with various premium finishes:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>PVDF fluoropolymer coatings</li>
              <li>Powder coating in unlimited colors</li>
              <li>Anodized finishes</li>
              <li>Brushed, mirror, and other specialty surface treatments</li>
              <li>Custom patterns and textures</li>
              <li>Wood grain and stone-look finishes</li>
            </ul>
            
            <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Transform your project with aluminum cladding</h3>
              <p className="mb-4">Contact our facade specialists to discover how our aluminum cladding systems can elevate your building's appearance and performance.</p>
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
