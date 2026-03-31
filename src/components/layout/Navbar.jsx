import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { navLinks } from '../../data/siteData';
import Button from '../ui/Button';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 22);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-[#d2ac7828] bg-[#0f0c09f0] backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#home" className="font-display text-xl font-semibold tracking-wide text-[#f8f2e8]">
          Imperial <span className="gold-text">Grooming</span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#e6d8c3] transition hover:text-[#f6e8d2]"
            >
              {link.label}
            </a>
          ))}
          <Button href="#booking" className="px-5 py-2.5 text-xs uppercase tracking-[0.2em]">
            Book Now
          </Button>
        </nav>

        <button
          aria-label="Toggle Menu"
          className="rounded-lg border border-[#d2ac7840] px-3 py-2 text-xs text-[#f5e7d2] lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          Menu
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="border-t border-[#d2ac7828] bg-[#0e0c0a] px-5 pb-4 pt-3 lg:hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-2 py-2 text-sm text-[#e6d8c3] hover:bg-[#1a1713]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button href="#booking" className="mt-1 w-full text-xs uppercase tracking-[0.2em]" onClick={() => setOpen(false)}>
                Book Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
