import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import { siteConfig, phoneLink, emailLink } from '@/config/site';

export default function ContactPreview() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-wide">
        <SectionHeading
          eyebrow="CONTACT US"
          title="Get In Touch"
          subtitle="We'd love to hear from you. Reach out anytime."
        />

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <AnimatedSection>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-light-blue rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-secondary-blue" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-deep-blue mb-0.5">Our Office</p>
                  <a
                    href={siteConfig.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted hover:text-secondary-blue transition-colors block"
                  >
                    {siteConfig.address}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-light-blue rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-secondary-blue" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-deep-blue mb-0.5">Phone / WhatsApp</p>
                  <a
                    href={phoneLink}
                    className="text-sm text-muted hover:text-secondary-blue transition-colors font-medium block"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-light-blue rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-secondary-blue" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-deep-blue mb-0.5">Email</p>
                  <div className="flex flex-col gap-0.5">
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-sm text-muted hover:text-secondary-blue transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                    <a
                      href={`mailto:${siteConfig.salesEmail}`}
                      className="text-xs text-muted hover:text-secondary-blue transition-colors"
                    >
                      {siteConfig.salesEmail}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-light-blue rounded-lg flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-secondary-blue" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-deep-blue mb-0.5">Business Hours</p>
                  <p className="text-sm text-muted whitespace-pre-line">
                    {`${siteConfig.businessHours.weekdays}\n${siteConfig.businessHours.saturday}\n${siteConfig.businessHours.closed}`}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Map */}
          <AnimatedSection delay={0.1}>
            <div className="relative rounded-2xl overflow-hidden border border-border h-72 lg:h-full min-h-[300px] shadow-sm">
              <iframe
                src={siteConfig.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Aqua Clear Office Location"
              />
              <div className="absolute bottom-3 right-3">
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/95 backdrop-blur-sm shadow-md text-deep-blue hover:text-white hover:bg-deep-blue text-xs font-bold px-3 py-2 rounded-lg transition-all border border-border inline-flex items-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5 text-water-blue" />
                  View on Google Maps ↗
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
