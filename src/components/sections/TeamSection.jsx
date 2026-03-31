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
          title="Experienced Barbers with Distinct Specialties"
          description="Each barber brings a focused technical style so you can book the right specialist for your haircut goals and maintenance needs."
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
              <div className="relative flex h-60 items-center justify-center overflow-hidden bg-[linear-gradient(145deg,#2a2219,#13100c)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(210,172,120,0.3),transparent_45%)]" />
                <p className="relative z-10 font-display text-6xl tracking-wider text-[#f5e6cd]">{barber.initials}</p>
              </div>
              <div className="p-6">
                <h3 className="font-display text-3xl text-[#fbf4e8]">{barber.name}</h3>
                <p className="mt-1 text-sm text-bronzeSoft">{barber.specialty}</p>
                <p className="mt-4 text-sm leading-relaxed text-[#c7b59b]">{barber.bio}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[#b59e80]">Experience: {barber.experience}</p>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <div className="flex gap-2 text-xs text-[#f0ddc2]">
                    <a href={barber.social.instagram} target="_blank" rel="noreferrer" className="rounded-lg border border-[#d2ac7838] px-2 py-1 hover:bg-[#1f1812]">
                      IG
                    </a>
                    <a href={barber.social.facebook} target="_blank" rel="noreferrer" className="rounded-lg border border-[#d2ac7838] px-2 py-1 hover:bg-[#1f1812]">
                      FB
                    </a>
                    <a href={barber.social.tiktok} target="_blank" rel="noreferrer" className="rounded-lg border border-[#d2ac7838] px-2 py-1 hover:bg-[#1f1812]">
                      TT
                    </a>
                  </div>
                  <Button href="#booking" className="px-4 py-2 text-xs">
                    Book {barber.name.split(' ')[0]}
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
