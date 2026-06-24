import { motion } from 'motion/react';
import image3 from '@/assets/images/image3.jpeg';
import image4 from '@/assets/images/image4.jpeg';

export default function Story() {
  return (
    <section className="bg-cream py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Image Column */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 relative"
        >
          <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-sm bg-powder/20">
            <img 
              src={image4} 
              alt="Thato and Buhle" 
              className="w-full h-full object-cover transition-transform duration-[10s] hover:scale-105"
              style={{ objectPosition: 'center 15%' }}
            />
            {/* Subtle border framing */}
            <div className="absolute inset-6 border border-white/40 z-10 pointer-events-none" />
          </div>
          {/* Decorative floral element */}
          <div className="absolute -bottom-8 -right-8 w-32 h-32 text-powder opacity-50 -z-10 rotate-12 hidden md:block">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.3,-46.3C90.8,-33.5,96.8,-18.1,95.5,-3.3C94.2,11.5,85.6,25.6,76,38.1C66.4,50.6,55.9,61.4,43.2,69.5C30.5,77.6,15.2,83,0.3,82.5C-14.7,82,-29.4,75.6,-42.6,67.6C-55.8,59.6,-67.5,50,-76.4,37.8C-85.3,25.6,-91.4,10.8,-90.1,-3.5C-88.8,-17.8,-80.1,-31.6,-70.7,-43C-61.3,-54.4,-51.2,-63.4,-39.5,-71.4C-27.8,-79.4,-14.6,-86.4,1.1,-88C16.8,-89.6,30.5,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
            </svg>
          </div>
        </motion.div>

        {/* Text Column */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left bg-white/60 backdrop-blur p-8 md:p-12 border border-white rounded-3xl shadow-lg shadow-slate-200/50"
        >
          <div className="font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold text-text-muted mb-4 opacity-50">
            Their Story
          </div>
          <h3 className="font-serif text-2xl md:text-4xl mb-6 text-navy leading-tight">
            A Journey of Family and Love
          </h3>
          
          <div className="space-y-4 md:space-y-6 font-sans text-text-muted text-sm leading-relaxed md:leading-loose italic">
            <p>
              This celebration is more than a ceremony. It is a homecoming, a joining of families, and a meaningful moment shared with the people who have walked this journey with Thato and Buhle.
            </p>
            <p>
              From the merging of our histories to the building of our future, this day symbolises the deep roots we share and the beautiful branches we will grow together.
            </p>
          </div>

          <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-200">
            <img src={image3} className="w-16 h-16 md:w-20 md:h-20 rounded-2xl object-cover grayscale opacity-80" alt="Established" />
            <div className="flex flex-col justify-center text-left">
              <p className="text-[10px] uppercase font-bold tracking-tighter text-slate-400">Established</p>
              <p className="text-xs font-serif text-text-base">Autumn 2024</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
