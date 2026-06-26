import { useState, FormEvent, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const AIRTABLE_API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY as string;
const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID as string;
const AIRTABLE_TABLE_ID = import.meta.env.VITE_AIRTABLE_TABLE_ID as string;

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  attending: string;
  bringingGuest: string;
  guestName: string;
  numberOfPeople: string;
  childrenCount: string;
  dietary: string;
  songRequest: string;
  message: string;
}

const initialForm: FormData = {
  fullName: '',
  phone: '',
  email: '',
  attending: '',
  bringingGuest: '',
  guestName: '',
  numberOfPeople: '',
  childrenCount: '',
  dietary: '',
  songRequest: '',
  message: '',
};

export default function RsvpForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [form, setForm] = useState<FormData>(initialForm);

  const attending = form.attending;
  const bringingGuest = form.bringingGuest;

  const set = (field: keyof FormData) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    const fields: Record<string, string | number> = {
      'Name': form.fullName,
      'Phone Number': form.phone,
      'Email Address': form.email,
      'Will You Be Attending?': form.attending === 'yes' ? 'Yes' : 'No',
      'RSVP Submission Status': 'Submitted',
    };

    if (form.attending === 'yes') {
      fields['Bringing a Guest?'] = form.bringingGuest === 'yes' ? 'Yes' : 'No';
      if (form.childrenCount) {
        fields['How Many Children'] = parseInt(form.childrenCount, 10);
      }
      if (form.numberOfPeople) {
        fields['Number of People Attending'] = parseInt(form.numberOfPeople, 10);
      }
      if (form.dietary) {
        fields['Dietary Requirements (Optional)'] = form.dietary;
      }
      if (form.songRequest) {
        fields['Song Request (Optional)'] = form.songRequest;
      }
    }

    if (form.message) {
      fields['Message'] = form.message;
    }

    try {
      const response = await fetch(
        `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${AIRTABLE_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ fields }),
        }
      );

      if (!response.ok) {
        const errorBody = await response.json().catch(() => ({}));
        console.error('Airtable error:', errorBody);
        throw new Error('Airtable submission failed');
      }

      setStatus('success');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id="rsvp" className="bg-paper py-24 md:py-32 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <div className="font-sans text-xs tracking-[0.3em] uppercase text-powder mb-4">
            Join the Celebration
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-navy mb-4">
            Kindly RSVP
          </h2>
        </motion.div>

        <div className="bg-white/40 border border-slate-200/50 rounded-3xl p-8 md:p-12 shadow-sm">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <h3 className="font-serif text-3xl text-navy mb-6">
                  Thank you for your RSVP.
                </h3>
                <p className="font-serif text-xl italic text-navy/80 leading-relaxed">
                  Re a Leboga — Thato and Buhle look forward to celebrating this special and meaningful occasion with you.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Error banner */}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 text-red-700 text-xs px-4 py-3 rounded-xl"
                  >
                    Something went wrong submitting your RSVP. Please try again or contact us directly.
                  </motion.div>
                )}

                <div>
                  <label className="block font-sans text-[10px] uppercase tracking-widest text-text-muted mb-1">Full Name</label>
                  <input required type="text" value={form.fullName} onChange={set('fullName')} className="w-full bg-white/80 border-b border-slate-200 px-3 py-3 text-xs md:text-sm focus:outline-none focus:border-slate-900 transition-colors" placeholder="e.g. Sipho Mahlangu" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-sans text-[10px] uppercase tracking-widest text-text-muted mb-1">Phone Number</label>
                    <input required type="tel" value={form.phone} onChange={set('phone')} className="w-full bg-white/80 border-b border-slate-200 px-3 py-3 text-xs md:text-sm focus:outline-none focus:border-slate-900 transition-colors" />
                  </div>
                  <div>
                    <label className="block font-sans text-[10px] uppercase tracking-widest text-text-muted mb-1">Email Address</label>
                    <input required type="email" value={form.email} onChange={set('email')} className="w-full bg-white/80 border-b border-slate-200 px-3 py-3 text-xs md:text-sm focus:outline-none focus:border-slate-900 transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="block font-sans text-[10px] uppercase tracking-widest text-text-muted mb-4">Will you be attending?</label>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input type="radio" required name="attending" value="yes" checked={attending === 'yes'} onChange={set('attending')} className="w-4 h-4 text-navy border-slate-200 focus:ring-navy appearance-none border rounded-full checked:bg-navy checked:border-navy" />
                      <span className="font-sans text-xs md:text-sm text-text-base">Yes, I will attend</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input type="radio" required name="attending" value="no" checked={attending === 'no'} onChange={set('attending')} className="w-4 h-4 text-navy border-slate-200 focus:ring-navy appearance-none border rounded-full checked:bg-navy checked:border-navy" />
                      <span className="font-sans text-xs md:text-sm text-text-base">No, I won't be able to attend</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-6 pt-4">
                  <div>
                    <label className="block font-sans text-[10px] uppercase tracking-widest text-text-muted mb-4">Are you bringing a guest?</label>
                    <div className="flex space-x-6">
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input type="radio" required={attending === 'yes'} disabled={attending === 'no'} name="guest" value="yes" checked={bringingGuest === 'yes'} onChange={set('bringingGuest')} className="w-4 h-4 text-navy border-slate-200 focus:ring-navy appearance-none border rounded-full checked:bg-navy checked:border-navy disabled:opacity-50" />
                        <span className={`font-sans text-xs md:text-sm text-text-base ${attending === 'no' ? 'opacity-50' : ''}`}>Yes</span>
                      </label>
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input type="radio" required={attending === 'yes'} disabled={attending === 'no'} name="guest" value="no" checked={bringingGuest === 'no'} onChange={set('bringingGuest')} className="w-4 h-4 text-navy border-slate-200 focus:ring-navy appearance-none border rounded-full checked:bg-navy checked:border-navy disabled:opacity-50" />
                        <span className={`font-sans text-xs md:text-sm text-text-base ${attending === 'no' ? 'opacity-50' : ''}`}>No</span>
                      </label>
                    </div>
                  </div>

                  {bringingGuest === 'yes' && attending !== 'no' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      <label className="block font-sans text-[10px] uppercase tracking-widest text-text-muted mb-1">Guest Full Name</label>
                      <input required type="text" value={form.guestName} onChange={set('guestName')} className="w-full bg-white/80 border-b border-slate-200 px-3 py-3 text-xs md:text-sm focus:outline-none focus:border-slate-900 transition-colors" />
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-sans text-[10px] uppercase tracking-widest text-text-muted mb-1">How many Children</label>
                      <input required={attending === 'yes'} disabled={attending === 'no'} type="number" min="0" max="10" placeholder="0" value={form.childrenCount} onChange={set('childrenCount')} className="w-full bg-white/80 border-b border-slate-200 px-3 py-3 text-xs md:text-sm focus:outline-none focus:border-slate-900 transition-colors disabled:opacity-50" />
                    </div>
                    <div>
                      <label className="block font-sans text-[10px] uppercase tracking-widest text-text-muted mb-1">Number of people attending</label>
                      <input required={attending === 'yes'} disabled={attending === 'no'} type="number" min="1" max="10" value={form.numberOfPeople} onChange={set('numberOfPeople')} className="w-full bg-white/80 border-b border-slate-200 px-3 py-3 text-xs md:text-sm focus:outline-none focus:border-slate-900 transition-colors disabled:opacity-50" />
                    </div>
                  </div>

                  <div>
                    <label className="block font-sans text-[10px] uppercase tracking-widest text-text-muted mb-1">Dietary Requirements</label>
                    <input disabled={attending === 'no'} type="text" value={form.dietary} onChange={set('dietary')} className="w-full bg-white/80 border-b border-slate-200 px-3 py-3 text-xs md:text-sm focus:outline-none focus:border-slate-900 transition-colors disabled:opacity-50" placeholder="Optional" />
                  </div>

                  <div>
                    <label className="block font-sans text-[10px] uppercase tracking-widest text-text-muted mb-1">Any song request for the celebration?</label>
                    <input disabled={attending === 'no'} type="text" value={form.songRequest} onChange={set('songRequest')} className="w-full bg-white/80 border-b border-slate-200 px-3 py-3 text-xs md:text-sm focus:outline-none focus:border-slate-900 transition-colors disabled:opacity-50" placeholder="Optional" />
                  </div>
                </div>

                <div className="pt-2">
                  <label className="block font-sans text-[10px] uppercase tracking-widest text-text-muted mb-1">Message to Thato, Buhle, and the family</label>
                  <textarea rows={3} value={form.message} onChange={set('message')} className="w-full bg-white/80 border-b border-slate-200 px-3 py-3 text-xs md:text-sm focus:outline-none focus:border-slate-900 transition-colors resize-none" placeholder="Leave a heartfelt message..."></textarea>
                </div>

                <div className="pt-8 text-center md:text-left">
                  <button
                    disabled={status === 'submitting'}
                    type="submit"
                    className="w-full md:w-auto mt-4 bg-powder text-slate-800 font-bold px-12 py-4 text-[10px] md:text-xs uppercase rounded-xl tracking-[0.2em] hover:bg-powder-dark transition-colors duration-300 disabled:opacity-70 shadow-md"
                  >
                    {status === 'submitting' ? 'Submitting...' : 'Submit RSVP'}
                  </button>
                </div>

              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
