import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { faqs } from '../../data/siteData';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section-border py-20">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Helpful Answers Before Your Visit"
          description="Everything clients ask most often about bookings, cancellations, and selecting the right barber."
          align="center"
        />

        <div className="mt-10 space-y-3" itemScope itemType="https://schema.org/FAQPage">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <article key={item.question} className="panel" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <button
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  type="button"
                >
                  <span className="font-medium text-[#f5e9d6]" itemProp="name">
                    {item.question}
                  </span>
                  <span className="text-bronzeSoft">{isOpen ? '-' : '+'}</span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden border-t border-[#d2ac7822]"
                      itemScope
                      itemProp="acceptedAnswer"
                      itemType="https://schema.org/Answer"
                    >
                      <p className="px-5 py-4 text-sm leading-relaxed text-[#c9b79f]" itemProp="text">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
