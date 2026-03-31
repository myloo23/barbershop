import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

const looks = [
  ['Before', 'Unstructured growth and uneven silhouette'],
  ['After', 'Crisp taper, balanced linework, and defined beard frame'],
];

export default function StyleShowcaseSection() {
  return (
    <section className="section-border py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Style Showcase"
          title="Transformation Focused Grooming That Performs in Real Life"
          description="Our before and after approach focuses on shape, proportion, and maintainability so your style remains sharp between visits."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {looks.map(([label, text], index) => (
            <motion.article
              key={label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="panel overflow-hidden"
            >
              <div
                className="h-72 bg-[url('https://images.unsplash.com/photo-1503951458645-643d53b5fddf?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center"
                role="img"
                aria-label={`${label} style transformation placeholder`}
              />
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-bronzeSoft">{label}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#d2c2ad]">{text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
