import { motion } from 'framer-motion';
import { styleShowcase } from '../../data/siteData';
import SectionHeading from '../ui/SectionHeading';

export default function StyleShowcaseSection() {
  return (
    <section className="section-border py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Style Showcase"
          title="Before and After Work Built for Everyday Wear"
          description="Our transformation process focuses on proportion, texture, and maintainability so your style performs in meetings, events, and daily life."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {styleShowcase.map((item, index) => (
            <motion.article
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="panel overflow-hidden"
            >
              <div
                className="h-72 bg-cover bg-center"
                style={{ backgroundImage: `url('${item.image}')` }}
                role="img"
                aria-label={item.alt}
              />
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-bronzeSoft">{item.label}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#d2c2ad]">{item.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
