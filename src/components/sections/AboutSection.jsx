import { useState } from 'react';
import { motion } from 'framer-motion';
import { business } from '../../data/siteData';
import SectionHeading from '../ui/SectionHeading';

export default function AboutSection() {
  const [imageState, setImageState] = useState({
    tools: true,
    interior: true,
    service: true,
  });

  const setFailed = (key) => setImageState((prev) => ({ ...prev, [key]: false }));

  return (
    <section id="about" className="section-border mt-20 py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            eyebrow={`About ${business.shortName}`}
            title="Classic Barber Standards with Modern Technical Precision"
            description={`${business.name} was founded to offer disciplined grooming in a calm, premium environment. Every service is tailored around face shape, hair behavior, and your day-to-day routine.`}
          />
          <div className="mt-8 space-y-5 text-sm leading-relaxed text-[#c4b299]">
            <p>
              Since {business.established}, our team has focused on dependable results, clear communication, and clean
              execution. Most of our clients return on a fixed schedule because the quality is consistent.
            </p>
            <p>
              Whether you need a low-maintenance business cut or full event preparation, we build a plan that suits
              your timeline and keeps you polished between visits.
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="grid gap-4 sm:grid-cols-2"
        >
          <figure className="panel h-48 overflow-hidden">
            {imageState.tools ? (
              <img
                src="https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?auto=format&fit=crop&w=900&q=80"
                alt="Master barber preparing tools before an appointment"
                className="h-full w-full object-cover"
                loading="lazy"
                onError={() => setFailed('tools')}
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-[linear-gradient(145deg,#1f1812,#0f0c09)] p-4 text-center text-xs uppercase tracking-[0.16em] text-[#e4cfad]">
                Tool Preparation
              </div>
            )}
          </figure>
          <figure className="panel h-48 overflow-hidden">
            {imageState.interior ? (
              <img
                src="https://images.unsplash.com/photo-1512690459411-b0fd1c86b8fc?auto=format&fit=crop&w=900&q=80"
                alt="Premium barbershop interior with warm lighting"
                className="h-full w-full object-cover"
                loading="lazy"
                onError={() => setFailed('interior')}
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-[linear-gradient(145deg,#1f1812,#0f0c09)] p-4 text-center text-xs uppercase tracking-[0.16em] text-[#e4cfad]">
                Studio Interior
              </div>
            )}
          </figure>
          <figure className="panel col-span-full h-60 overflow-hidden">
            {imageState.service ? (
              <img
                src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1200&q=80"
                alt="Client receiving a precision haircut"
                className="h-full w-full object-cover"
                loading="lazy"
                onError={() => setFailed('service')}
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-[linear-gradient(145deg,#1f1812,#0f0c09)] p-4 text-center text-xs uppercase tracking-[0.16em] text-[#e4cfad]">
                Precision Service in Progress
              </div>
            )}
          </figure>
        </motion.div>
      </div>
    </section>
  );
}
