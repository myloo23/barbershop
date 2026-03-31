import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { openingHours } from '../../data/siteData';

export default function ContactSection() {
  return (
    <section id="contact" className="section-border py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Visit Imperial Grooming Co. in the Heart of [City]"
          description="Call, email, or send a quick message and our front desk team will assist with appointments, service guidance, and group bookings."
        />

        <div className="mt-10 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['Address', '126 Royal Avenue, [City], 1011'],
              ['Phone', '+36 1 555 0148'],
              ['Email', 'appointments@imperialgroomingco.com'],
              ['Instagram', '@imperialgroomingco'],
            ].map(([label, value]) => (
              <div key={label} className="panel p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-bronzeSoft">{label}</p>
                <p className="mt-3 text-sm text-[#d8c8b2]">{value}</p>
              </div>
            ))}

            <div className="panel p-5 sm:col-span-2">
              <p className="text-xs uppercase tracking-[0.25em] text-bronzeSoft">Opening Hours</p>
              <ul className="mt-3 space-y-2 text-sm text-[#d8c8b2]">
                {openingHours.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="panel h-64 overflow-hidden sm:col-span-2">
              <div className="flex h-full items-center justify-center bg-[linear-gradient(145deg,#1e1812,#0e0c09)] text-center">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-bronzeSoft">Google Maps Placeholder</p>
                  <p className="mt-3 text-sm text-[#d8c8b2]">Embed interactive location map here for launch.</p>
                </div>
              </div>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="panel p-6 sm:p-8"
          >
            <p className="font-display text-2xl text-[#fbf4e8]">Send a Message</p>
            <p className="mt-2 text-sm text-[#c6b29a]">We reply quickly during business hours.</p>
            <div className="mt-6 space-y-4">
              <input className="input-base" type="text" placeholder="Your Name" />
              <input className="input-base" type="email" placeholder="Your Email" />
              <textarea className="input-base min-h-40" placeholder="How can we help?" />
            </div>
            <Button href={null} type="button" className="mt-6 w-full">
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
