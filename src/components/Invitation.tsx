import { motion } from 'motion/react';

export default function Invitation() {
  return (
    <section className="bg-paper py-24 px-6 md:py-36 relative flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto relative z-10"
      >
        {/* Top floral divider (SVG) */}
        <div className="mb-12 flex justify-center text-powder">
          <svg width="80" height="30" viewBox="0 0 80 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
            <path d="M40 0C40 0 45 15 60 15C75 15 80 15 80 15C80 15 75 15 60 15C45 15 40 30 40 30C40 30 35 15 20 15C5 15 0 15 0 15C0 15 5 15 20 15C35 15 40 0 40 0Z" fill="currentColor"/>
          </svg>
        </div>

        <p className="font-serif text-slate-500 italic mb-4">Welcoming</p>
        <div className="font-script text-4xl md:text-5xl text-navy mb-8">Buhle Mekwa</div>
        
        <p className="font-serif text-xl md:text-2xl leading-relaxed md:leading-[1.8] text-text-base px-4">
          Thato Ditsebe and family warmly invite you to join them for a special celebration to receive and welcome their makoti, and integrate her into the Ditsebe family.
        </p>

        <p className="font-sans text-[10px] md:text-xs font-medium tracking-widest uppercase mt-12 mb-8 opacity-80 text-text-muted">
          Gift cards are warmly welcomed.
        </p>

        <p className="font-serif text-lg md:text-xl mt-8 italic text-text-base/90">
          We look forward to celebrating this meaningful occasion with you.
        </p>
        
        <h3 className="font-serif text-2xl md:text-4xl mt-12 mb-12 tracking-wider uppercase text-navy">
          Re a Leboga
        </h3>

        {/* Bottom floral divider (SVG) */}
        <div className="mt-8 flex justify-center text-powder">
          <svg width="80" height="30" viewBox="0 0 80 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
            <path d="M40 0C40 0 45 15 60 15C75 15 80 15 80 15C80 15 75 15 60 15C45 15 40 30 40 30C40 30 35 15 20 15C5 15 0 15 0 15C0 15 5 15 20 15C35 15 40 0 40 0Z" fill="currentColor"/>
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
