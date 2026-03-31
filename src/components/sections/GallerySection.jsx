import { motion } from 'framer-motion';
import { galleryItems } from '../../data/siteData';
import SectionHeading from '../ui/SectionHeading';

const heights = ['h-[260px]', 'h-[320px]', 'h-[220px]', 'h-[280px]'];

export default function GallerySection() {
  return (
    <section id="gallery" className="section-border py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="Recent Work from the Blackridge Floor"
          description="A selection of cuts and beard finishes completed by our team. Gallery tiles are optimized to stay visually complete across screen sizes."
        />

        <div className="mt-10 columns-1 gap-4 sm:columns-2 xl:columns-4">
          {galleryItems.map((item, index) => (
            <motion.figure
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="panel group relative mb-4 block overflow-hidden"
            >
              <div
                className={`${heights[index % heights.length]} bg-cover bg-center transition-transform duration-500 group-hover:scale-105`}
                style={{ backgroundImage: `url('${item.image}')` }}
                role="img"
                aria-label={item.alt}
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0b0907eb] to-transparent px-4 py-4 text-sm text-[#f6e9d6]">
                {item.title}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
