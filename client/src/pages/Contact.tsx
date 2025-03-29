import { Container } from "@/components/ui/container";
import CTASection from "@/components/home/CTASection";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  useEffect(() => {
    // Update metadata for SEO
    document.title = "Contact Us - Muretta Construction";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Contact Muretta for innovative building solutions and sustainable construction technologies"
      );
    }
  }, []);

  return (
    <>
      <section className="py-16 md:py-24 bg-slate-100 dark:bg-slate-800">
        <Container>
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-slate-700 dark:text-slate-300 mb-8">
              Reach out to our team to discuss your construction project needs. We're here to help you build a more sustainable future.
            </p>
          </motion.div>
        </Container>
      </section>

      <CTASection />

      <section className="py-8 bg-white dark:bg-slate-900">
        <motion.div
          className="w-full h-[500px] overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.45681651112!2d-73.642308!3d45.500882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc919c440dff617%3A0xdac37903486f7841!2s4120%20Av.%20de%20Courtrai%2C%20Montr%C3%A9al%2C%20QC%20H3S%201E7%2C%20Canada!5e0!3m2!1sen!2sin!4v1743276935862!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Muretta Construction Office Location"
          ></iframe>
        </motion.div>
      </section>
    </>
  );
}
