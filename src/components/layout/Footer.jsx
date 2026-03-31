import { business, openingHours, navLinks } from '../../data/siteData';

export default function Footer() {
  return (
    <footer className="section-border mt-20 bg-[#0b0a08]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl text-[#f8f2e8]">
            {business.shortName} <span className="gold-text">Atelier</span>
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[#baa88f]">
            {business.slogan} Premium barbering for professionals, creatives, and modern gentlemen in {business.city} {business.district}.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-bronzeSoft">Quick Links</p>
          <ul className="mt-4 space-y-2 text-sm text-[#d8c8b2]">
            {navLinks.slice(1, 7).map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-[#f4e7d2]">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-bronzeSoft">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-[#d8c8b2]">
            <li>{business.addressLine1}</li>
            <li>{business.addressLine2}</li>
            <li>
              <a href={business.phoneHref} className="hover:text-[#f4e7d2]">
                {business.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${business.email}`} className="hover:text-[#f4e7d2]">
                {business.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-bronzeSoft">Opening Hours</p>
          <ul className="mt-4 space-y-2 text-sm text-[#d8c8b2]">
            {openingHours.map((item) => (
              <li key={item.label}>
                {item.label}: {item.value}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-[#d2ac7822]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-[#a3927a] sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} {business.legalName}. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#faq" className="hover:text-[#d8c8b2]">
              Privacy Policy
            </a>
            <a href="#booking" className="hover:text-[#d8c8b2]">
              Booking Policy
            </a>
            <a href={business.social.instagram} className="hover:text-[#d8c8b2]" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
