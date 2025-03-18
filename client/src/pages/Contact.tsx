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
    </>
  );
}
