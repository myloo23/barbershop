import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

const points = [
  'Personalized consultation before every service',
  'Master-level barbers with trend and classic expertise',
  'Premium imported products for scalp and beard health',
  'Consistent appointment quality with strict service standards',
];

export default function WhyChooseSection() {
  return (
    <section className="section-border py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="A Grooming Standard Built for Men Who Value Detail"
            description="We do more than cut hair. We engineer an image that aligns with your personality, profession, and lifestyle."
          />
          <ul className="mt-7 space-y-3">
            {points.map((point, index) => (
              <motion.li
                key={point}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="panel flex items-center gap-3 px-4 py-3 text-sm text-[#d8c8b2]"
              >
                <span className="inline-block h-2 w-2 rounded-full bg-bronze" />
                {point}
              </motion.li>
            ))}
          </ul>
        </div>

        <div
          className="panel h-[420px] overflow-hidden bg-[url('https://images.unsplash.com/photo-1621551122354-e96737d64b70?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center"
          role="img"
          aria-label="Barber crafting a skin fade"
        />
      </div>
    </section>
  );
}
