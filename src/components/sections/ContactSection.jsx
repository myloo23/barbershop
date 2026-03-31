import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { business, openingHours } from '../../data/siteData';

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="section-border py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title={`Visit ${business.shortName} in ${business.city} ${business.district}`}
          description="Call, email, or send a message and our front desk team will assist with bookings, service guidance, and private event inquiries."
        />

        <div className="mt-10 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="panel p-5">
              <p className="text-xs uppercase tracking-[0.25em] text-bronzeSoft">Address</p>
              <p className="mt-3 text-sm text-[#d8c8b2]">{business.addressLine1}</p>
              <p className="text-sm text-[#d8c8b2]">{business.addressLine2}</p>
            </div>
            <div className="panel p-5">
              <p className="text-xs uppercase tracking-[0.25em] text-bronzeSoft">Phone</p>
              <a href={business.phoneHref} className="mt-3 block text-sm text-[#d8c8b2] hover:text-[#f4e7d2]">
                {business.phoneDisplay}
              </a>
            </div>
            <div className="panel p-5">
              <p className="text-xs uppercase tracking-[0.25em] text-bronzeSoft">Email</p>
              <a href={`mailto:${business.bookingEmail}`} className="mt-3 block text-sm text-[#d8c8b2] hover:text-[#f4e7d2]">
                {business.bookingEmail}
              </a>
            </div>
            <div className="panel p-5">
              <p className="text-xs uppercase tracking-[0.25em] text-bronzeSoft">Social</p>
              <p className="mt-3 text-sm text-[#d8c8b2]">Instagram: {business.socialHandles.instagram}</p>
              <p className="text-sm text-[#d8c8b2]">TikTok: {business.socialHandles.tiktok}</p>
            </div>

            <div className="panel p-5 sm:col-span-2">
              <p className="text-xs uppercase tracking-[0.25em] text-bronzeSoft">Opening Hours</p>
              <ul className="mt-3 space-y-2 text-sm text-[#d8c8b2]">
                {openingHours.map((item) => (
                  <li key={item.label} className="flex items-center justify-between gap-3 border-b border-[#d2ac781a] py-1.5 last:border-0">
                    <span>{item.label}</span>
                    <span>{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="panel h-64 overflow-hidden sm:col-span-2">
              <div className="flex h-full flex-col items-center justify-center bg-[linear-gradient(145deg,#1e1812,#0e0c09)] px-6 text-center">
                <p className="text-xs uppercase tracking-[0.25em] text-bronzeSoft">Studio Location</p>
                <p className="mt-3 text-sm text-[#d8c8b2]">{business.addressLine1}, {business.addressLine2}</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${business.addressLine1}, ${business.addressLine2}`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 text-xs uppercase tracking-[0.2em] text-[#f1dfc2] underline underline-offset-4"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="panel p-6 sm:p-8"
            onSubmit={handleSubmit}
          >
            <p className="font-display text-2xl text-[#fbf4e8]">Send a Message</p>
            <p className="mt-2 text-sm text-[#c6b29a]">We usually respond within one business hour.</p>
            <div className="mt-6 space-y-4">
              <label className="block text-sm text-[#dac8ae]" htmlFor="contact-name">
                Name
                <input id="contact-name" className="input-base mt-2" type="text" placeholder="Your full name" autoComplete="name" required />
              </label>
              <label className="block text-sm text-[#dac8ae]" htmlFor="contact-email">
                Email
                <input id="contact-email" className="input-base mt-2" type="email" placeholder="name@email.com" autoComplete="email" required />
              </label>
              <label className="block text-sm text-[#dac8ae]" htmlFor="contact-message">
                Message
                <textarea id="contact-message" className="input-base mt-2 min-h-40" placeholder="Tell us what you need help with." required />
              </label>
            </div>
            {sent && (
              <p className="mt-4 rounded-lg border border-emerald-400/40 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200" role="status">
                Thanks, your message is in our queue. We will get back to you shortly.
              </p>
            )}
            <Button href={null} type="submit" className="mt-6 w-full">
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
