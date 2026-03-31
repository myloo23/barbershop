import { useState } from 'react';
import { motion } from 'framer-motion';
import { whyChoosePoints } from '../../data/siteData';
import SectionHeading from '../ui/SectionHeading';

export default function WhyChooseSection() {
  const [imageReady, setImageReady] = useState(true);

  return (
    <section className="section-border py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Why Blackridge"
            title="A Studio Built Around Reliable Results"
            description="Every service is designed to fit your schedule, hair behavior, and personal style goals so your haircut still looks intentional two weeks later."
          />
          <ul className="mt-7 space-y-3">
            {whyChoosePoints.map((point, index) => (
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

        <figure className="panel relative h-[420px] overflow-hidden">
          {imageReady ? (
            <img
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1400&q=80"
              alt="Barber crafting a skin fade with clipper detail"
              className="h-full w-full object-cover"
              loading="lazy"
              onError={() => setImageReady(false)}
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-[linear-gradient(145deg,#1f1812,#0f0c09)] p-6 text-center">
              <p className="text-sm uppercase tracking-[0.2em] text-[#e4cfad]">Blackridge Studio Craft</p>
            </div>
          )}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(10,8,6,0.45),transparent_45%)]" />
        </figure>
      </div>
    </section>
  );
}
