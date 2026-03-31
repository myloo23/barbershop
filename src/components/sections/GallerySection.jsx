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
          title="Recent Transformations and Signature Cuts"
          description="A curated look at style transformations completed by our team. Each tile is structured for seamless future lightbox integration."
        />

        <div className="mt-10 columns-1 gap-4 sm:columns-2 xl:columns-4">
          {galleryItems.map((item, index) => (
            <motion.figure
              key={item}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="panel group relative mb-4 block cursor-pointer overflow-hidden"
              data-lightbox-target={item}
            >
              <div
                className={`${heights[index % heights.length]} bg-[url('https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=900&q=80')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110`}
                role="img"
                aria-label={`${item} - gallery image placeholder`}
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0b0907eb] to-transparent px-4 py-4 text-sm text-[#f6e9d6]">
                {item}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
