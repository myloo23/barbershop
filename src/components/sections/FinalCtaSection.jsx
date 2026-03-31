import { motion } from 'framer-motion';
import { business } from '../../data/siteData';
import Button from '../ui/Button';

export default function FinalCtaSection() {
  return (
    <section className="section-border py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65 }}
        className="mx-auto max-w-7xl px-5 sm:px-8"
      >
        <div className="panel overflow-hidden border-[#d2ac7860] bg-[linear-gradient(130deg,#20180f,#0d0b08_60%)] px-7 py-12 sm:px-12">
          <p className="text-xs uppercase tracking-[0.3em] text-bronzeSoft">Ready for your next appointment?</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-[#fdf7ef] sm:text-5xl">
            Book Your Slot at {business.shortName} and Leave Looking Sharp
          </h2>
          <p className="mt-5 max-w-2xl text-base text-[#cab89e]">
            Prime evening and Saturday times fill quickly. Reserve now to secure your preferred barber and schedule.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#booking">Book Appointment</Button>
            <Button href="#contact" variant="secondary">
              Contact Front Desk
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
