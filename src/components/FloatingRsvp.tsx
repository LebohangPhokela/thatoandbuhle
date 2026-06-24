import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function FloatingRsvp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let shouldShow = false;

      // Show button after scrolling past a portion of the hero section
      if (window.scrollY > window.innerHeight * 0.5) {
        shouldShow = true;
      }

      // Hide when RSVP section is in view
      const rsvpSection = document.getElementById('rsvp');
      if (rsvpSection) {
        const rect = rsvpSection.getBoundingClientRect();
        // Hide if the RSVP section is visible in the viewport
        if (rect.top < window.innerHeight - 100 && rect.bottom > 0) {
          shouldShow = false;
        }
      }

      setIsVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);
    // Call once on mount to set initial state
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToRsvp = () => {
    document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          onClick={scrollToRsvp}
          className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-navy text-ivory px-10 py-4 rounded-xl font-sans text-[10px] uppercase tracking-[0.2em] font-bold shadow-xl shadow-navy/20 active:scale-95 transition-transform"
        >
          RSVP Online
        </motion.button>
      )}
    </AnimatePresence>
  );
}
