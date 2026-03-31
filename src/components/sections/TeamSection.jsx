import { motion } from 'framer-motion';
import { teamMembers } from '../../data/siteData';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

export default function TeamSection() {
  return (
    <section id="team" className="section-border py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Master Team"
          title="Barbers Trusted for Technique, Taste, and Consistency"
          description="Our team combines old-world barber discipline with modern style fluency to deliver high-precision results for every client profile."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {teamMembers.map((barber, index) => (
            <motion.article
              key={barber.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="panel overflow-hidden"
            >
              <div
                className="h-60 bg-[url('https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center"
                role="img"
                aria-label={`${barber.name} portrait placeholder`}
              />
              <div className="p-6">
                <h3 className="font-display text-3xl text-[#fbf4e8]">{barber.name}</h3>
                <p className="mt-1 text-sm text-bronzeSoft">{barber.specialty}</p>
                <p className="mt-4 text-sm leading-relaxed text-[#c7b59b]">{barber.bio}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[#b59e80]">Experience: {barber.experience}</p>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex gap-2 text-xs text-[#f0ddc2]">
                    <a href="#" className="rounded-lg border border-[#d2ac7838] px-2 py-1 hover:bg-[#1f1812]">
                      IG
                    </a>
                    <a href="#" className="rounded-lg border border-[#d2ac7838] px-2 py-1 hover:bg-[#1f1812]">
                      FB
                    </a>
                    <a href="#" className="rounded-lg border border-[#d2ac7838] px-2 py-1 hover:bg-[#1f1812]">
                      TT
                    </a>
                  </div>
                  <Button href="#booking" className="px-4 py-2 text-xs">
                    Book
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
