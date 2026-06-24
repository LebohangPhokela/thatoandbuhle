import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-navy text-ivory py-16 md:py-24 text-center px-6">
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        <h3 className="font-serif text-2xl md:text-4xl tracking-[0.2em] mb-6 uppercase">
          Kgoroso Ya Ngwetsi
        </h3>
        
        <div className="font-sans text-xs md:text-sm tracking-[0.2em] uppercase text-powder mb-12">
          17 October 2026
        </div>

        {/* Decorative divider */}
        <div className="flex items-center space-x-4 mb-8">
          <div className="h-px w-12 bg-powder/40"></div>
          <div className="w-2 h-2 rounded-full bg-powder/60"></div>
          <div className="h-px w-12 bg-powder/40"></div>
        </div>

        <p className="font-serif text-xl md:text-2xl tracking-widest uppercase">
          Re a Leboga
        </p>
      </div>
    </footer>
  );
}
