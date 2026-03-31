import { motion } from 'framer-motion';
import { testimonials } from '../../data/siteData';
import SectionHeading from '../ui/SectionHeading';

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="section-border py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Client Reviews"
          title="What Regular Clients Say"
          description="Feedback from returning clients who book with us for consistency, professionalism, and long-lasting results."
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
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d2ac7860] bg-[#1a1511] text-sm font-semibold text-[#f2d8ad]">
                  {testimonial.initials}
                </div>
                <div>
                  <cite className="block text-xs font-semibold uppercase tracking-[0.2em] text-[#e6ceb0] not-italic">{testimonial.name}</cite>
                  <p className="text-xs text-[#bda689]">{testimonial.role}</p>
                </div>
              </div>
              <p className="mt-5 text-lg tracking-wide text-[#f2d8ad]">?????</p>
              <p className="mt-4 text-sm leading-relaxed text-[#d8c9b6]">"{testimonial.quote}"</p>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
