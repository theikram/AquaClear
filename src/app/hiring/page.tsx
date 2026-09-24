'use client';

import { useState } from 'react';
import {
  Truck,
  Factory,
  TrendingUp,
  Megaphone,
  Calculator,
  Headphones,
  Wrench,
  MapPin,
  Briefcase,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';
import JobCard from '@/components/ui/JobCard';
import Modal from '@/components/ui/Modal';
import ApplicationForm from '@/components/forms/ApplicationForm';
import { departments, jobs, getJobById } from '@/config/jobs';
import type { Job } from '@/types';

const iconMap: Record<string, React.ElementType> = {
  Truck,
  Factory,
  TrendingUp,
  Megaphone,
  Calculator,
  Headphones,
  Wrench,
};

const expectations = [
  { title: 'Get In Touch', desc: 'Apply online or contact our HR team with your details and resume.' },
  { title: 'Apply For Job', desc: 'Submit your application through our form or via email.' },
  { title: 'Attend The Interview', desc: 'If shortlisted, you\'ll be invited for an interview.' },
  { title: 'Get Selected', desc: 'Congratulations! Join the Aqua Clear team.' },
];

export default function HiringPage() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showJobDetail, setShowJobDetail] = useState(false);
  const [showApply, setShowApply] = useState(false);
  const [applyPosition, setApplyPosition] = useState('');

  const openJobDetail = (jobId: string) => {
    const job = getJobById(jobId);
    if (job) {
      setSelectedJob(job);
      setShowJobDetail(true);
    }
  };

  const openApply = (position: string) => {
    setApplyPosition(position);
    setShowApply(true);
  };

  return (
    <>
      <PageHero
        title="Build Your Career With Aqua Clear"
        subtitle="Join our growing team and make a difference in the lives of thousands."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Careers', href: '/hiring' },
        ]}
      />

      {/* Departments */}
      <section className="py-20 md:py-28">
        <div className="container-wide">
          <SectionHeading
            eyebrow="DEPARTMENTS"
            title="Our Departments"
            subtitle="Explore the teams that make Aqua Clear run."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {departments.map(({ name, description, icon }, i) => {
              const Icon = iconMap[icon] || Briefcase;
              return (
                <AnimatedSection key={name} delay={i * 0.08}>
                  <div className="bg-white rounded-xl border border-border p-6 hover:border-water-blue/30 hover:shadow-md transition-all h-full">
                    <div className="w-12 h-12 bg-light-blue rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-secondary-blue" />
                    </div>
                    <h3 className="text-base font-bold text-deep-blue mb-2">{name}</h3>
                    <p className="text-sm text-muted leading-relaxed">{description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 md:py-28 bg-pale-blue">
        <div className="container-wide">
          <SectionHeading
            eyebrow="HIRING PROCESS"
            title="What To Expect"
            subtitle="Our transparent and straightforward hiring process."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expectations.map(({ title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-14 h-14 bg-deep-blue text-white rounded-2xl mx-auto mb-4 flex items-center justify-center text-lg font-bold">
                    {i + 1}
                  </div>
                  <h3 className="text-base font-bold text-deep-blue mb-2">{title}</h3>
                  <p className="text-sm text-muted">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Current Opportunities */}
      <section className="py-20 md:py-28">
        <div className="container-wide">
          <SectionHeading
            eyebrow="OPEN POSITIONS"
            title="Current Opportunities"
            subtitle="Explore open positions and find your fit at Aqua Clear."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {jobs.map((job, i) => (
              <JobCard
                key={job.id}
                {...job}
                onViewDetails={() => openJobDetail(job.id)}
                onApply={() => openApply(job.title)}
                delay={i * 0.08}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 md:py-28 bg-pale-blue" id="apply">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto">
            <SectionHeading
              eyebrow="APPLY NOW"
              title="Submit Your Application"
              subtitle="Fill out the form below and our HR team will review your application."
            />
            <div className="bg-white rounded-2xl border border-border p-8">
              <ApplicationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Job Detail Modal */}
      <Modal
        isOpen={showJobDetail}
        onClose={() => setShowJobDetail(false)}
        title={selectedJob?.title || 'Job Details'}
      >
        {selectedJob && (
          <div className="space-y-6">
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 text-sm text-muted">
                <MapPin className="w-4 h-4" /> {selectedJob.location}
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm text-muted">
                <Briefcase className="w-4 h-4" /> {selectedJob.department}
              </span>
              <span className="bg-light-blue text-secondary-blue text-xs font-bold px-3 py-1 rounded-full">
                {selectedJob.type}
              </span>
            </div>

            <div>
              <h3 className="text-base font-bold text-deep-blue mb-2">Description</h3>
              <p className="text-sm text-muted leading-relaxed">{selectedJob.description}</p>
            </div>

            <div>
              <h3 className="text-base font-bold text-deep-blue mb-2">Requirements</h3>
              <ul className="space-y-2">
                {selectedJob.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted">
                    <CheckCircle className="w-4 h-4 text-accent-green shrink-0 mt-0.5" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-base font-bold text-deep-blue mb-2">Responsibilities</h3>
              <ul className="space-y-2">
                {selectedJob.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted">
                    <ArrowRight className="w-4 h-4 text-secondary-blue shrink-0 mt-0.5" />
                    {resp}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => {
                setShowJobDetail(false);
                openApply(selectedJob.title);
              }}
              className="w-full bg-deep-blue text-white font-semibold py-3 rounded-lg hover:bg-secondary-blue transition-colors"
            >
              Apply for this position
            </button>
          </div>
        )}
      </Modal>

      {/* Apply Modal */}
      <Modal
        isOpen={showApply}
        onClose={() => setShowApply(false)}
        title={`Apply: ${applyPosition}`}
        maxWidth="max-w-xl"
      >
        <ApplicationForm preselectedPosition={applyPosition} />
      </Modal>
    </>
  );
}
