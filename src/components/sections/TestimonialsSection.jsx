import { motion } from 'framer-motion';
import { testimonials } from '../../data/siteData';
import SectionHeading from '../ui/SectionHeading';

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="section-border py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Client Reviews"
          title="What Clients Say About the Imperial Experience"
          description="Real feedback from loyal clients who trust us for business-ready looks, occasion prep, and ongoing personal style maintenance."
          align="center"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.07 }}
              className="panel p-6"
            >
              <p className="text-lg tracking-wide text-[#f2d8ad]">★★★★★</p>
              <p className="mt-4 text-sm leading-relaxed text-[#d8c9b6]">“{testimonial.quote}”</p>
              <cite className="mt-4 block text-xs font-semibold uppercase tracking-[0.2em] text-[#bda689]">{testimonial.name}</cite>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
