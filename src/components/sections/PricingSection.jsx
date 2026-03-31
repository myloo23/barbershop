import { motion } from 'framer-motion';
import { pricingPlans } from '../../data/siteData';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

export default function PricingSection() {
  return (
    <section id="pricing" className="section-border py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Membership Plans"
          title="Clear Pricing with High-Value Monthly Options"
          description="Choose a plan that matches your routine. No hidden fees, no forced commitment, and consistent barber quality every visit."
          align="center"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className={`panel p-7 ${plan.popular ? 'relative border-[#d2ac7870] bg-[#1a1611ee] shadow-glow' : ''}`}
            >
              {plan.popular && (
                <span className="absolute right-5 top-5 rounded-full border border-[#f2d6a760] bg-[#2b2219] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#f0d6b0]">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-3xl text-[#fbf6ef]">{plan.name}</h3>
              <p className="mt-2 text-sm text-[#cab79d]">{plan.description}</p>
              <p className="mt-5 text-4xl font-extrabold text-[#f6e5ca]">{plan.price}</p>
              <ul className="mt-6 space-y-2 text-sm text-[#d6c6b1]">
                {plan.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
              <Button href="#booking" className="mt-7 w-full">
                {plan.cta}
              </Button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
