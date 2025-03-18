import { motion } from "framer-motion";
import TestimonialCard from "./testimonial-card";
import { staggerContainer, fadeIn } from "@/lib/motion";

const testimonials = [
  {
    content: "\"Muretta transformed our vision into reality with their innovative SIP construction. The building exceeds our energy efficiency expectations and was completed ahead of schedule.\"",
    name: "Alex Brown",
    company: "Eco Developments Inc.",
    initials: "AB"
  },
  {
    content: "\"Working with Muretta on our Solar Greenhouse project was a game-changer. Their expertise in sustainable building practices and attention to detail resulted in a facility that perfectly meets our needs.\"",
    name: "Sarah Martinez",
    company: "GreenGrow Farms",
    initials: "SM"
  },
  {
    content: "\"The prefabricated housing units Muretta delivered for our development project were of exceptional quality. Their team's professionalism and the speed of installation impressed everyone involved.\"",
    name: "Robert Thompson",
    company: "Urban Living Developers",
    initials: "RT"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-800 dark:to-primary-950">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div 
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Client Testimonials</h2>
          <p className="mt-4 text-lg text-primary-100">
            Hear from clients who have experienced our commitment to excellence.
          </p>
        </motion.div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              content={testimonial.content}
              name={testimonial.name}
              company={testimonial.company}
              initials={testimonial.initials}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
