import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check, ArrowRight, Sun, Thermometer, Settings, Calendar, Info } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import greenFormImg from '../assets/solargreenhouse/urbanfarming.avif'
import sustainable1 from '../assets/solargreenhouse/sustainable1.avif'
import sustainable2 from '../assets/solargreenhouse/sustainable2.avif'
import sustainable3 from '../assets/solargreenhouse/sustainable3.avif'
import isg1 from '../assets/solargreenhouse/isg1.avif'
import isg2 from '../assets/solargreenhouse/isg2.avif'
import vermiculture from '../assets/solargreenhouse/vermiculture.avif'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SolarGreenhouse() {
  const [activeTab, setActiveTab] = useState("image");
  
  useEffect(() => {
    // Update metadata for SEO
    document.title = "Solar Greenhouse Solutions - Muretta Construction";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Muretta's Solar Greenhouse solutions provide sustainable and energy-efficient structures optimized for solar energy utilization and plant growth"
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
                <img
                  src={greenFormImg}
                  alt="GreenForm Consulting"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
            
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4">GreenForm</h1>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                We are a consulting firm, specializing in climate-smart agricultural practices, with a particular focus on urban and controlled environment farming.
              </p>
              
              <div className="flex items-center gap-2 mb-6 text-primary-600 dark:text-primary-400">
                <span className="text-lg font-semibold">Climate-Smart</span>
                <span>•</span>
                <span className="text-lg font-semibold">Urban Farming</span>
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
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">"Solar-Powered Growth, Sustainable Harmony"</h2>
            <h3 className="text-2xl font-semibold mb-4">It's Time to Grow</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <img src={sustainable1} alt="Sustainable Living" className="rounded-lg shadow-lg w-full h-64 object-cover" />
            <img src={sustainable2} alt="Green Technology" className="rounded-lg shadow-lg w-full h-64 object-cover" />
            <img src={sustainable3} alt="Eco Design" className="rounded-lg shadow-lg w-full h-64 object-cover" />
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
              Imagine a home where innovation and nature exist in perfect balance—designed not just for living, but for thriving. Reach out to us, and together we'll craft your customized, self-sufficient, sustainable green house, engineered to harmonize with the environment while empowering you to live with greater independence. Drawing on the latest advancements in green technology and building practices, we create homes that produce their own energy, harness natural resources, and minimize waste, all while offering unmatched comfort and efficiency. From passive solar design to rainwater harvesting, every detail is carefully tailored to ensure your home not only meets but exceeds your expectations for sustainability. With cutting-edge materials and energy-efficient systems, your green house will be a sanctuary of modern living, a testament to the future of eco-conscious design.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-slate-100 dark:bg-slate-800">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Integrated Solar Greenhouse (ISG) with Advanced Strategies</h2>
            <p className="text-lg mb-8">
              An Integrated Solar Greenhouse (ISG) is a highly sustainable and energy-efficient farming system that combines renewable energy technologies with greenhouse operations. This system uses various strategies like solar panels, photovoltaic cells, geothermal energy, and water tubes to optimize energy use, improve crop yields, and reduce the environmental impact of conventional agriculture. The primary objective of an ISG is to create a self-sustaining environment for growing crops by harnessing natural resources efficiently.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <img src={isg1} alt="ISG Technology" className="rounded-lg shadow-lg w-full h-auto" />
              <img src={isg2} alt="ISG Implementation" className="rounded-lg shadow-lg w-full h-auto" />
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">1. Photovoltaic Systems</h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Solar panels (photovoltaic cells) are installed on the roof or walls of the greenhouse to capture sunlight and convert it into electricity. This electricity can be used to power fans, pumps, lighting systems, and other equipment inside the greenhouse, reducing reliance on external energy sources and lowering operational costs.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">2. Solar Thermal Systems</h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Solar thermal collectors are used to harness the sun's heat to regulate the temperature inside the greenhouse. These systems can be integrated into the greenhouse's structure to collect and store heat, which can then be used during colder months to maintain a consistent growing environment, enhancing the efficiency of energy use.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">3. Geothermal Energy</h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Geothermal systems take advantage of the earth's natural heat. By drilling wells and using geothermal pumps, warm water can be brought up from the earth's crust to heat the greenhouse during the winter months. This method offers a stable and renewable source of heat, providing consistent temperature regulation and reducing the need for fossil fuels or other energy sources.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">4. Water Tubes and Thermal Mass</h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Water tubes are integrated into the greenhouse's structure to act as thermal storage. These tubes absorb and store heat during the day, which can then be released at night to maintain a stable internal climate. This strategy helps reduce temperature fluctuations, ensuring optimal growing conditions for plants, particularly in regions with extreme temperature variations.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={vermiculture}
                alt="Vermiculture Process"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </motion.div>

            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Vermiculture</h2>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                Vermiculture refers to the practice of intentionally cultivating worms, particularly for use in composting systems known as vermicomposting. In this process, worms are raised in gardens and farms to break down organic material. As they digest, beneficial microbes are transferred from the worms' digestive system into their excrement, known as castings.
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                When these castings are added to soil or mixed into compost, they continue to help decompose organic matter. Rich in nutrients, worm castings act as a natural fertilizer, and when steeped in water, they create compost tea. Vermicomposting not only boosts soil productivity and carbon content, but it also helps prevent plant diseases.
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                This method can be used to divert organic waste from landfills, and in some cases, it is effective for treating certain hazardous wastes. Whether practiced at home, on small farms, or in large-scale commercial facilities, worm-based composting plays a significant role in reducing methane emissions and revitalizing soil health.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>
      
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Revolutionary Growing Environments</h2>
            <p className="text-lg mb-12 text-center">
              Our solar greenhouses go beyond traditional structures, incorporating passive solar design principles, advanced materials, and smart climate control systems to create sustainable, productive growing environments.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                    <Sun className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Energy Efficient</h3>
                </div>
                <p className="text-slate-700 dark:text-slate-300">
                  Our solar greenhouses are designed to maximize natural light capture, thermal mass storage, and insulation to minimize or eliminate the need for supplemental heating and cooling. Strategic orientation and advanced glazing materials optimize light transmission while controlling heat gain and loss.
                </p>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                    <Thermometer className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Climate Control</h3>
                </div>
                <p className="text-slate-700 dark:text-slate-300">
                  Automated systems maintain optimal growing conditions by managing ventilation, humidity, temperature, and shading. Optional renewable energy integration with solar panels can power fans, irrigation, and monitoring equipment for a truly sustainable operation.
                </p>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                    <Settings className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Customizable</h3>
                </div>
                <p className="text-slate-700 dark:text-slate-300">
                  Each greenhouse is tailored to your specific needs, location, and climate zone. We offer various structural systems, glazing options, and interior configurations to accommodate different growing methods from traditional soil beds to hydroponics and aquaponics systems.
                </p>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Year-round Production</h3>
                </div>
                <p className="text-slate-700 dark:text-slate-300">
                  Extend your growing season to 365 days a year, even in challenging climates. Our solar greenhouses create microclimates that protect crops from external conditions while maintaining ideal growing environments with minimal energy input.
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Applications</h2>
            <div className="mb-12">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Commercial farming operations</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Market gardening and farm-to-table businesses</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Educational institutions and research facilities</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Community gardens and urban farming</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Eco-tourism and sustainable hospitality</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Residential food production and garden rooms</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-100 dark:bg-slate-800 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Ready to grow sustainably?</h3>
              <p className="mb-6">
                Our team includes greenhouse specialists, agricultural engineers, and sustainable design experts who can guide you through the entire process from conceptualization to completion. We'll help you create a solar greenhouse that meets your growing needs while minimizing environmental impact.
              </p>
              <Link href="/contact">
                <Button size="lg">
                  Schedule a Consultation
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Case Study: Commercial Farm Productivity</h2>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              See how our solar greenhouse solutions helped a commercial farm extend their growing season and reduce energy costs by 65%.
            </p>
          </div>
          
          <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg max-w-4xl mx-auto">
            <div className="h-64 md:h-80">
              <img
                src="https://images.unsplash.com/photo-1566842600175-97dca489844f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                alt="Commercial Solar Greenhouse"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <h3 className="text-2xl font-bold mb-2 md:mb-0">EcoGrow Farms</h3>
                <div className="flex items-center text-accent-600 dark:text-accent-400">
                  <Check className="h-5 w-5 mr-2" />
                  <span className="font-semibold">65% Reduction in Energy Costs</span>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="mb-4">
                  EcoGrow Farms, a 15-acre organic vegetable operation in the Northeast, faced challenges with a short growing season and high energy costs for their traditional greenhouses. They partnered with Muretta to design and build a 3,000 sq ft solar greenhouse that would extend their production period and reduce operational costs.
                </p>
                <p>
                  The result was a custom solar greenhouse featuring passive solar design, thermal mass storage, automated climate controls, and a 7.5kW solar PV system. Within the first year, EcoGrow Farms reported a 65% reduction in energy costs, a 4-month extension to their growing season, and a 40% increase in winter crop yields.
                </p>
              </div>
              
              <Link href="/contact">
                <Button variant="outline">
                  Discuss Your Project
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
