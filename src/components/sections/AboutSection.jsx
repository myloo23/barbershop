import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

export default function AboutSection() {
  return (
    <section id="about" className="section-border mt-20 py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            eyebrow="About Imperial"
            title="Crafting Signature Looks Through Discipline, Detail, and Timeless Taste"
            description="Founded with a clear philosophy that grooming should elevate confidence, our studio blends old-school barber discipline with modern styling intelligence. Every cut and shave is engineered around facial structure, lifestyle, and personal identity."
          />
          <div className="mt-8 space-y-5 text-sm leading-relaxed text-[#c4b299]">
            <p>
              Our mission is to help men feel unmistakably prepared for business, social moments, and milestones through
              consistent premium grooming.
            </p>
            <p>
              We believe precision creates presence. From consultation to finishing product, every step is intentional,
              comfortable, and tailored to you.
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
          <div
            className="panel h-48 overflow-hidden bg-[url('https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?auto=format&fit=crop&w=900&q=80')] bg-cover bg-center"
            role="img"
            aria-label="Master barber preparing tools"
          />
          <div
            className="panel h-48 overflow-hidden bg-[url('https://images.unsplash.com/photo-1512690459411-b0fd1c86b8fc?auto=format&fit=crop&w=900&q=80')] bg-cover bg-center"
            role="img"
            aria-label="Luxury barbershop interior"
          />
          <div
            className="panel col-span-full h-60 overflow-hidden bg-[url('https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center"
            role="img"
            aria-label="Client receiving premium haircut"
          />
        </motion.div>
      </div>
    </section>
  );
}
