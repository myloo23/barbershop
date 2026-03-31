import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(210,172,120,0.22),transparent_40%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-[0.34em] text-bronzeSoft"
          >
            Premium Barbershop in [City]
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08 }}
            className="mt-5 font-display text-4xl leading-tight text-[#fbf6ef] sm:text-6xl"
          >
            Precision Grooming for Men Who Expect <span className="gold-text">Exceptional Standards</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-[#cdbca4] sm:text-lg"
          >
            At Imperial Grooming Co., every appointment combines craftsmanship, tailored style guidance, and luxury
            service ritual to deliver confidence beyond the chair.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Button href="#booking">Book an Appointment</Button>
            <Button href="#services" variant="secondary">
              View Services
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative"
        >
          <div className="panel relative h-[420px] overflow-hidden border-[#d2ac7844] p-6 sm:h-[500px]">
            <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(38,31,25,0.85),rgba(12,10,8,0.84))]" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-35" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <p className="self-start rounded-full border border-[#d2ac7845] bg-[#100d0a9e] px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#f0deca]">
                Luxury Ambience
              </p>
              <div>
                <p className="text-xs uppercase tracking-[0.26em] text-[#d8c5ac]">
                  Trusted by professionals, founders and creatives
                </p>
                <p className="mt-3 font-display text-3xl text-[#fff6e9]">Award-Worthy Care, Every Visit</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
