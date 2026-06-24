import { motion } from 'motion/react';
import image1 from '@/assets/images/image1.jpeg';
import image2 from '@/assets/images/image2.jpeg';
import image3 from '@/assets/images/image3.jpeg';
import image4 from '@/assets/images/image4.jpeg';

const IMAGES = [
  { url: image1, position: 'center 20%' }, // Traditional wedding - faces high up
  { url: image2, position: 'center' },      // Pregnancy photoshoot - default center
  { url: image3, position: 'center' },      // Gazebo photoshoot - default center
  { url: image4, position: 'center 20%' }  // Hallway couple - faces high up
];

export default function Gallery() {
  return (
    <section className="bg-cream py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {IMAGES.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative aspect-[4/5] overflow-hidden group"
            >
              <img
                src={item.url}
                alt="Couple moment"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[8s] group-hover:scale-105"
                style={{ objectPosition: item.position }}
              />
              <div className="absolute inset-0 bg-navy/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
