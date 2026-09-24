import { PhoneCall, ClipboardList, Truck, Droplets } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';

const steps = [
  {
    icon: PhoneCall,
    title: 'Contact Us',
    description: 'Call, WhatsApp, or fill out our order form online.',
    number: '01',
  },
  {
    icon: ClipboardList,
    title: 'Place Your Order',
    description: 'Select your products, quantity, and preferred delivery schedule.',
    number: '02',
  },
  {
    icon: Truck,
    title: 'We Deliver',
    description: 'Our reliable delivery team brings fresh water to your doorstep.',
    number: '03',
  },
  {
    icon: Droplets,
    title: 'Stay Refreshed',
    description: 'Enjoy premium, pure water with every sip — anytime.',
    number: '04',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-wide">
        <SectionHeading
          eyebrow="GETTING STARTED"
          title="How It Works"
          subtitle="Getting fresh, clean water delivered is as easy as 1-2-3-4."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, title, description, number }, i) => (
            <AnimatedSection key={title} delay={i * 0.1}>
              <div className="relative text-center bg-white rounded-2xl p-7 card-hover card-blue-border h-full">
                {/* Step number */}
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 w-9 h-9 bg-gradient-to-br from-deep-blue to-secondary-blue rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                  {number}
                </span>
                <div className="w-14 h-14 bg-light-blue rounded-2xl mx-auto mb-4 mt-2 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-secondary-blue" />
                </div>
                <h3 className="text-base font-bold text-deep-blue mb-2">{title}</h3>
                <p className="text-sm text-muted leading-relaxed">{description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
