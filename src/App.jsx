import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AboutSection from './components/sections/AboutSection';
import BookingSection from './components/sections/BookingSection';
import ContactSection from './components/sections/ContactSection';
import FAQSection from './components/sections/FAQSection';
import FinalCtaSection from './components/sections/FinalCtaSection';
import GallerySection from './components/sections/GallerySection';
import HeroSection from './components/sections/HeroSection';
import PricingSection from './components/sections/PricingSection';
import ServicesSection from './components/sections/ServicesSection';
import StyleShowcaseSection from './components/sections/StyleShowcaseSection';
import TeamSection from './components/sections/TeamSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import TrustBar from './components/sections/TrustBar';
import WhyChooseSection from './components/sections/WhyChooseSection';
import { faqs } from './data/siteData';

function SeoSchema() {
  const faqEntities = faqs.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  }));

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'BarberShop',
    name: 'Imperial Grooming Co.',
    image: 'https://www.imperialgroomingco.com/og-image.jpg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '126 Royal Avenue',
      addressLocality: '[City]',
      postalCode: '1011',
      addressCountry: 'HU',
    },
    telephone: '+36 1 555 0148',
    email: 'appointments@imperialgroomingco.com',
    openingHours: ['Mo-Th 09:00-20:00', 'Fr 09:00-21:00', 'Sa 09:00-18:00', 'Su 10:00-16:00'],
    url: 'https://www.imperialgroomingco.com',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqEntities,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}

export default function App() {
  return (
    <>
      <SeoSchema />
      <Navbar />
      <main>
        <HeroSection />
        <TrustBar />
        <WhyChooseSection />
        <StyleShowcaseSection />
        <AboutSection />
        <ServicesSection />
        <PricingSection />
        <GallerySection />
        <TeamSection />
        <TestimonialsSection />
        <BookingSection />
        <ContactSection />
        <FAQSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
