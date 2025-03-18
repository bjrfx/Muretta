import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import logo1 from '../../assets/partners/1.png'
import logo2 from '../../assets/partners/2.png'
import logo3 from '../../assets/partners/3.png'
import logo4 from '../../assets/partners/4.gif'
import villassteel from '../../assets/partners/villassteel.png'
import lasBrochure from '../../assets/broucher/las-broucher.pdf'
const partnerLogos = [
  {
    id: 1,
    name: "Partner 1",
    logo: logo2,
  },
  {
    id: 2,
    name: "Partner 2",
    logo: logo1,
  },
  {
    id: 3,
    name: "Partner 3",
    logo: villassteel
    // logo: `<svg width="150" height="50" viewBox="0 0 150 50" xmlns="http://www.w3.org/2000/svg">
    //   <circle cx="75" cy="25" r="20" fill="none" stroke="currentColor" strokeWidth="2"/>
    //   <text x="75" y="32" fontSize="16" fill="currentColor" textAnchor="middle">LOGO 2</text>
    // </svg>`
  },
  {
    id: 4,
    name: "Partner 4",
    logo: logo3
    // logo: `<svg width="150" height="50" viewBox="0 0 150 50" xmlns="http://www.w3.org/2000/svg">
    //   <polygon points="75,5 95,45 55,45" fill="none" stroke="currentColor" strokeWidth="2"/>
    //   <text x="75" y="32" fontSize="16" fill="currentColor" textAnchor="middle">LOGO 3</text>
    // </svg>`
  },
  {
    id: 5,
    name: "Partner 5",
    logo: logo4
    // logo: `<svg width="150" height="50" viewBox="0 0 150 50" xmlns="http://www.w3.org/2000/svg">
    //   <rect width="140" height="40" x="5" y="5" rx="20" fill="none" stroke="currentColor" strokeWidth="2"/>
    //   <text x="75" y="32" fontSize="16" fill="currentColor" textAnchor="middle">LOGO 4</text>
    // </svg>`
  },
  {
    id: 6,
    name: "Partner 6",
    logo: villassteel
    // logo: `<svg width="150" height="50" viewBox="0 0 150 50" xmlns="http://www.w3.org/2000/svg">
    //   <path d="M25,25 L75,5 L125,25 L75,45 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
    //   <text x="75" y="32" fontSize="16" fill="currentColor" textAnchor="middle">LOGO 5</text>
    // </svg>`
  },
];

// Duplicate logos to create seamless infinite scroll
const duplicatedLogos = [...partnerLogos, ...partnerLogos];

export default function Partners() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-900 overflow-hidden">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Partners</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Trusted by industry leaders in sustainable construction
          </p>
        </div>
      </Container>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex space-x-4 md:space-x-8 whitespace-nowrap"
          animate={{
            x: ["-100%", "0%"],
          }}
          transition={{
            duration: 15,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedLogos.map((partner) => (
            <div
              key={partner.id}
              className="inline-flex items-center justify-center w-[150px] h-[50px] text-slate-600 dark:text-slate-400 flex-shrink-0"
              title={partner.name}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-full w-auto object-contain cursor-pointer"
                onClick={() => {
                  if (partner.id === 5) {
                    window.open(lasBrochure, '_blank');
                  }
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}