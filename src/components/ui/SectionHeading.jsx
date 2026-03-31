import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignClass = align === 'center' ? 'mx-auto text-center' : '';

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <motion.p
          className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-bronzeSoft"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          custom={0}
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        className="font-display text-3xl font-semibold leading-tight text-[#f8f2e8] sm:text-4xl"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        custom={0.05}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          className="mt-4 text-base leading-relaxed text-[#cab89f]"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          custom={0.12}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
