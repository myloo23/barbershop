import { motion } from 'framer-motion';
import { trustStats } from '../../data/siteData';

export default function TrustBar() {
  return (
    <section aria-label="Trust metrics" className="mt-14">
      <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        {trustStats.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="panel p-6"
          >
            <p className="text-3xl font-extrabold text-[#f8ead4]">{item.value}</p>
            <p className="mt-2 text-sm text-[#bda98f]">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
