import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import AboutPreview from '@/components/sections/AboutPreview';
import WhyAquaClear from '@/components/sections/WhyAquaClear';
import ProductShowcase from '@/components/sections/ProductShowcase';
import DeliverySection from '@/components/sections/DeliverySection';
import HowItWorks from '@/components/sections/HowItWorks';
import QualityPreview from '@/components/sections/QualityPreview';
import ClientLogos from '@/components/sections/ClientLogos';
import FAQSection from '@/components/sections/FAQSection';
import Testimonials from '@/components/sections/Testimonials';
import CTASection from '@/components/sections/CTASection';
import ContactPreview from '@/components/sections/ContactPreview';
import BlogPreview from '@/components/sections/BlogPreview';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <AboutPreview />
      <WhyAquaClear />
      <ProductShowcase />
      <DeliverySection />
      <HowItWorks />
      <QualityPreview />
      <ClientLogos />
      <FAQSection />
      <Testimonials />
      <BlogPreview />
      <CTASection />
      <ContactPreview />
    </>
  );
}
