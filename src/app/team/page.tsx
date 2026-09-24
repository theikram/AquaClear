import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import TeamCard from '@/components/ui/TeamCard';
import AnimatedSection from '@/components/ui/AnimatedSection';
import type { TeamMember } from '@/types';

export const metadata: Metadata = {
  title: 'Our Team',
  description:
    'Meet the dedicated team behind Aqua Clear. Our leadership, operations, delivery, and support teams work together to bring you quality water.',
};

// PLACEHOLDER: Sample team data for demonstration
const leadership: TeamMember[] = [
  { name: 'Sample Name', role: 'Chief Executive Officer', department: 'Leadership', image: '', level: 'leadership' },
  { name: 'Sample Name', role: 'Operations Manager', department: 'Leadership', image: '', level: 'leadership' },
  { name: 'Sample Name', role: 'Sales Manager', department: 'Leadership', image: '', level: 'leadership' },
  { name: 'Sample Name', role: 'Delivery Manager', department: 'Leadership', image: '', level: 'leadership' },
];

const departments = [
  {
    name: 'Operations',
    members: [
      { name: 'Sample Member', role: 'Plant Supervisor', department: 'Operations', image: '', level: 'team' as const },
      { name: 'Sample Member', role: 'Quality Inspector', department: 'Operations', image: '', level: 'team' as const },
      { name: 'Sample Member', role: 'Plant Operator', department: 'Operations', image: '', level: 'team' as const },
    ],
  },
  {
    name: 'Delivery',
    members: [
      { name: 'Sample Member', role: 'Delivery Coordinator', department: 'Delivery', image: '', level: 'team' as const },
      { name: 'Sample Member', role: 'Senior Driver', department: 'Delivery', image: '', level: 'team' as const },
      { name: 'Sample Member', role: 'Delivery Driver', department: 'Delivery', image: '', level: 'team' as const },
    ],
  },
  {
    name: 'Sales & Marketing',
    members: [
      { name: 'Sample Member', role: 'Sales Executive', department: 'Sales', image: '', level: 'team' as const },
      { name: 'Sample Member', role: 'Marketing Executive', department: 'Marketing', image: '', level: 'team' as const },
    ],
  },
  {
    name: 'Support & Accounts',
    members: [
      { name: 'Sample Member', role: 'Customer Support', department: 'Customer Support', image: '', level: 'team' as const },
      { name: 'Sample Member', role: 'Accounts Manager', department: 'Accounts', image: '', level: 'team' as const },
    ],
  },
];

export default function TeamPage() {
  return (
    <>
      <PageHero
        title="Meet Our Team"
        subtitle="The dedicated people behind every bottle of Aqua Clear."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Our Team', href: '/team' },
        ]}
      />

      {/* Leadership */}
      <section className="py-20 md:py-28">
        <div className="container-wide">
          <SectionHeading
            eyebrow="LEADERSHIP"
            title="Our Leadership Team"
            subtitle="Experienced professionals guiding Aqua Clear's mission."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((member, i) => (
              <TeamCard key={i} {...member} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 md:py-28 bg-pale-blue">
        <div className="container-wide">
          <SectionHeading
            eyebrow="DEPARTMENTS"
            title="The People Behind Our Success"
            subtitle="Our team across departments works together to deliver quality and service."
          />

          <div className="space-y-16">
            {departments.map((dept, deptIndex) => (
              <AnimatedSection key={dept.name} delay={deptIndex * 0.1}>
                <div>
                  <h3 className="text-xl font-bold text-deep-blue mb-6 pb-3 border-b border-border">
                    {dept.name}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {dept.members.map((member, i) => (
                      <TeamCard key={i} {...member} delay={i * 0.05} />
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <p className="text-xs text-muted text-center mt-12 italic">
            * Team member names are placeholders for demonstration purposes.
          </p>
        </div>
      </section>
    </>
  );
}
