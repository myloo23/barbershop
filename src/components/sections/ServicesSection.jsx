import { motion } from 'framer-motion';
import { featuredServices } from '../../data/siteData';
import SectionHeading from '../ui/SectionHeading';

export default function ServicesSection() {
  return (
    <section id="services" className="section-border py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Premium Grooming Services Built Around Precision and Personal Style"
          description="Each service includes a short consultation, premium product use, and finishing detail so your look lasts beyond the appointment."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featuredServices.map((service, index) => (
            <motion.article
              key={service.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.04 }}
              className="panel group p-6"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-bronzeSoft">{service.duration}</p>
              <h3 className="mt-3 font-display text-2xl text-[#f8f1e5]">{service.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#c3b096]">{service.description}</p>
              <div className="mt-6 h-0.5 w-10 rounded-full bg-bronze transition-all duration-300 group-hover:w-16" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
