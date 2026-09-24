import { ShieldCheck, Droplets, Truck, Heart, Award, FlaskConical } from 'lucide-react';

const items = [
  { icon: ShieldCheck, label: 'Quality Assured' },
  { icon: Droplets, label: 'Pure & Hygienic' },
  { icon: Truck, label: 'Fast Delivery' },
  { icon: Award, label: 'Certified Quality' },
  { icon: FlaskConical, label: 'Lab Tested' },
  { icon: Heart, label: 'Customer First' },
];

export default function TrustBar() {
  return (
    <section className="bg-gradient-to-r from-deep-blue via-secondary-blue to-deep-blue text-white py-4 overflow-hidden">
      <div className="container-wide">
        <div className="flex items-center justify-between gap-6 overflow-x-auto scrollbar-hide">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5 shrink-0 py-1">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                <Icon className="w-4 h-4 text-water-blue" />
              </div>
              <span className="text-sm font-semibold whitespace-nowrap">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
