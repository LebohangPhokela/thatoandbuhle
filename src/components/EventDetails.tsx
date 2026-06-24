import { motion } from 'motion/react';
import { Calendar, MapPin, Shirt, Gift, Clock } from 'lucide-react';

export default function EventDetails() {
  const details = [
    {
      icon: <Calendar className="w-6 h-6 stroke-1" />,
      title: "Date",
      value: "17 October 2026"
    },
    {
      icon: <MapPin className="w-6 h-6 stroke-1" />,
      title: "Venue",
      value: "714 Kholofelo Street, Unit D, \nTemba, Hammanskraal"
    },
    {
      icon: <Shirt className="w-6 h-6 stroke-1" />,
      title: "Dress Code",
      value: "Traditional Attire with a Touch of Blue"
    },
    {
      icon: <Clock className="w-6 h-6 stroke-1" />,
      title: "RSVP Deadline",
      value: "Kindly RSVP by 31 July 2026"
    },
    {
      icon: <Gift className="w-6 h-6 stroke-1" />,
      title: "Gift Note",
      value: "Gift cards are warmly welcomed"
    }
  ];

  return (
    <section className="bg-ivory py-24 md:py-32 px-6 border-y border-powder/30">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-navy mb-4 tracking-wide">
            Event Details
          </h2>
          <div className="h-px w-24 bg-powder mx-auto"></div>
        </div>

        <div className="bg-navy text-ivory p-8 md:p-16 shadow-2xl rounded-3xl flex flex-col md:flex-row md:flex-wrap gap-y-12">
          
          {details.map((detail, index) => (
            <div key={index} className="w-full md:w-1/2 flex flex-col items-center text-center px-4">
              <div className="text-powder mb-4 opacity-50">
                {detail.icon}
              </div>
              <h4 className="font-sans text-[10px] tracking-[0.3em] font-medium uppercase text-powder-dark mb-2">
                {detail.title}
              </h4>
              <p className="font-sans text-sm md:text-base text-ivory/90 whitespace-pre-line leading-relaxed">
                {detail.value}
              </p>
            </div>
          ))}
          
        </div>

        <div className="mt-16 text-center">
          <p className="font-serif text-xl md:text-2xl italic text-navy/90 max-w-2xl mx-auto px-4">
            Thato and Buhle look forward to celebrating this special and meaningful occasion with you.
          </p>
        </div>

      </motion.div>
    </section>
  );
}
