import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import image1 from '@/assets/images/image1.jpeg';
import image2 from '@/assets/images/image2.jpeg';
import image3 from '@/assets/images/image3.jpeg';
import image4 from '@/assets/images/image4.jpeg';
import image5 from '@/assets/images/image5.jpeg';

const SLIDES = [
  { url: image1, position: 'center 15%' }, // Traditional wedding - faces high up
  { url: image2, position: 'center' },      // Pregnancy photoshoot - default center
  { url: image3, position: 'center' },      // Gazebo photoshoot - default center
  { url: image4, position: 'center 15%' }, // Hallway couple - faces high up
  { url: image5, position: 'center 15%' }  // Mirror selfie couple - faces high up
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const scrollToRsvp = () => {
    document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-[100svh] w-full overflow-hidden bg-navy">
      <AnimatePresence mode="popLayout">
        <motion.img
          key={currentIndex}
          src={SLIDES[currentIndex].url}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.6, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 2.5, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: SLIDES[currentIndex].position }}
          alt="Wedding couple"
        />
      </AnimatePresence>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-light/75 via-navy-light/35 to-transparent z-10" />

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-end text-ivory px-6 pb-20 pt-12 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col items-center max-w-3xl text-center"
        >
          <p className="text-[10px] md:text-xs tracking-[0.2em] font-medium uppercase mb-4 text-powder">
            Ditsebe Family Celebration
          </p>

          <h1 className="font-serif text-3xl md:text-5xl lg:text-5xl tracking-[0.1em] uppercase mb-4">
            Kgoroso Ya Ngwetsi
          </h1>
          
          <div className="w-16 h-[1px] bg-powder-dark mb-4"></div>

          <p className="font-sans text-xs md:text-sm md:leading-relaxed max-w-sm md:max-w-xl mx-auto px-2 font-light opacity-90">
            Thato Ditsebe and family warmly invite you to join them for a special celebration to receive and welcome their makoti
          </p>
          
          <div className="font-script text-[4rem] md:text-[6rem] lg:text-[7rem] my-2 md:my-4 text-ivory drop-shadow-md leading-none py-2">
            Buhle Mekwa
          </div>
          
          <p className="font-sans text-xs md:text-sm md:leading-relaxed max-w-sm md:max-w-xl mx-auto px-2 font-light opacity-90 mb-8">
            and integrate her into the Ditsebe family.
          </p>

          <div className="flex flex-col items-center space-y-4 md:space-y-6">
            <div className="font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase text-powder">
              17 October 2026
            </div>
            
            <button 
              onClick={scrollToRsvp}
              className="bg-navy text-ivory px-8 py-3 uppercase tracking-widest font-bold text-[10px] shadow-lg hover:shadow-xl hover:bg-navy-light rounded-full transition-all duration-300"
            >
              RSVP Online
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
