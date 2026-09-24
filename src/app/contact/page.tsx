'use client';

import { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';
import ContactForm from '@/components/forms/ContactForm';
import OrderForm from '@/components/forms/OrderForm';
import { siteConfig, phoneLink, emailLink } from '@/config/site';

const contactCards = [
  {
    icon: Phone,
    title: 'Phone',
    lines: [siteConfig.phone],
    href: phoneLink,
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    lines: ['Chat with us on WhatsApp'],
    href: `https://wa.me/${siteConfig.whatsapp}`,
  },
  {
    icon: Mail,
    title: 'Email',
    lines: [siteConfig.email, siteConfig.salesEmail],
    href: emailLink,
  },
  {
    icon: MapPin,
    title: 'Office',
    lines: [siteConfig.address],
    href: siteConfig.googleMapsUrl,
  },
  {
    icon: Clock,
    title: 'Business Hours',
    lines: [
      siteConfig.businessHours.weekdays,
      siteConfig.businessHours.saturday,
      siteConfig.businessHours.sunday,
      siteConfig.businessHours.closed,
    ],
  },
];

export default function ContactPage() {
  const [orderOpen, setOrderOpen] = useState(false);

  return (
    <>
      <PageHero
        title="Let's Talk"
        subtitle="Have a question or want to place an order? We'd love to hear from you."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact', href: '/contact' },
        ]}
      />

      {/* Contact Cards */}
      <section className="py-20 md:py-28">
        <div className="container-wide">
          <SectionHeading
            eyebrow="REACH US"
            title="Get In Touch"
            subtitle="Choose the most convenient way to reach us."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {contactCards.map(({ icon: Icon, title, lines, href }, i) => (
              <AnimatedSection key={title} delay={i * 0.08}>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-4 p-6 rounded-xl bg-white border border-border hover:border-water-blue/40 hover:shadow-md transition-all h-full"
                  >
                    <div className="w-12 h-12 bg-light-blue rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-secondary-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-deep-blue mb-1">{title}</h3>
                      {lines.map((line, j) => (
                        <p key={j} className="text-sm text-muted">{line}</p>
                      ))}
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-4 p-6 rounded-xl bg-white border border-border h-full">
                    <div className="w-12 h-12 bg-light-blue rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-secondary-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-deep-blue mb-1">{title}</h3>
                      {lines.map((line, j) => (
                        <p key={j} className="text-sm text-muted">{line}</p>
                      ))}
                    </div>
                  </div>
                )}
              </AnimatedSection>
            ))}

            {/* Order Card */}
            <AnimatedSection delay={0.4}>
              <button
                onClick={() => setOrderOpen(true)}
                className="flex items-start gap-4 p-6 rounded-xl bg-deep-blue text-white hover:bg-secondary-blue transition-colors h-full w-full text-left"
                id="order"
              >
                <div className="w-12 h-12 bg-white/15 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Order Water</h3>
                  <p className="text-sm text-blue-200">
                    Place an order online and we&apos;ll deliver to your doorstep.
                  </p>
                </div>
              </button>
            </AnimatedSection>
          </div>

          {/* Contact Form + Map */}
          <div className="grid lg:grid-cols-2 gap-10">
            <AnimatedSection>
              <div className="bg-white rounded-2xl border border-border p-8">
                <h2 className="text-2xl font-bold text-deep-blue mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="relative rounded-2xl overflow-hidden border border-border h-full min-h-[400px] shadow-sm">
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
                <div className="absolute bottom-4 right-4">
                  <a
                    href={siteConfig.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/95 backdrop-blur-sm shadow-lg text-deep-blue hover:text-white hover:bg-deep-blue text-xs font-bold px-4 py-2.5 rounded-xl transition-all border border-border inline-flex items-center gap-2"
                  >
                    <MapPin className="w-4 h-4 text-water-blue" />
                    Open in Google Maps ↗
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <OrderForm isOpen={orderOpen} onClose={() => setOrderOpen(false)} />
    </>
  );
}
