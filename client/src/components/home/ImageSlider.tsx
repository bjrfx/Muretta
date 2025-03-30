import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';

// Import images directly
import img1 from '@/assets/images-scroll/1.jpg';
import img2 from '@/assets/images-scroll/2.jpg';
import img3 from '@/assets/images-scroll/3.png';
import img4 from '@/assets/images-scroll/4.jpg';
import img5 from '@/assets/images-scroll/5.png';
import img6 from '@/assets/images-scroll/6.jpg';
import img7 from '@/assets/images-scroll/7.png';
import img8 from '@/assets/images-scroll/8.png';
import img9 from '@/assets/images-scroll/9.png';
import img10 from '@/assets/images-scroll/10.jpg';
import img11 from '@/assets/images-scroll/11.png';
import img12 from '@/assets/images-scroll/12.jpeg';
import img13 from '@/assets/images-scroll/13.png';
import img14 from '@/assets/images-scroll/14.jpg';
import img15 from '@/assets/images-scroll/15.png';
import img16 from '@/assets/images-scroll/16.jpeg';
import img17 from '@/assets/images-scroll/17.png';
import img18 from '@/assets/images-scroll/18.png';
import img19 from '@/assets/images-scroll/19.png';
import img20 from '@/assets/images-scroll/20.png';
import img21 from '@/assets/images-scroll/21.png';
import img22 from '@/assets/images-scroll/22.png';
import img23 from '@/assets/images-scroll/23.jpg';
import img24 from '@/assets/images-scroll/24.jpg';
import img25 from '@/assets/images-scroll/25.jpg';
import img26 from '@/assets/images-scroll/26.png';
import img27 from '@/assets/images-scroll/27.jpg';
import img28 from '@/assets/images-scroll/28.jpg';
import img29 from '@/assets/images-scroll/29.png';

// Create an array of all images
const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25, img26, img27, img28, img29
];

export default function ImageSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [duplicatedImages, setDuplicatedImages] = useState([...images, ...images]);

  // No need for manual DOM manipulation with React

  return (
    <section className="py-12 overflow-hidden bg-slate-50 dark:bg-slate-800">
      <Container>
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Projects Gallery</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Explore our diverse portfolio of construction projects
          </p>
        </div>
      </Container>

      <div className="relative w-full overflow-hidden">
        <motion.div
          ref={sliderRef}
          className="flex items-center gap-4 py-4"
          animate={{
            x: [0, -1 * (images.length * 84)], // 80px width + 4px gap per image
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 10,
              ease: "linear",
            },
          }}
        >
          {duplicatedImages.map((image, index) => (
            <div key={index} className="slider-item flex-shrink-0">
              <img
                src={image}
                alt={`Project image ${(index % images.length) + 1}`}
                className="h-64 w-80 object-cover rounded-lg shadow-md"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}