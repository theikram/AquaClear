'use client';

import { useState } from 'react';
import { Droplets, FlaskConical, ShieldCheck, Package, ClipboardCheck, AlertTriangle, Award, Eye, X, FileText } from 'lucide-react';
import Image from 'next/image';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';
import CertificationCard from '@/components/ui/CertificationCard';
import Modal from '@/components/ui/Modal';

const processSteps = [
  { icon: Droplets, title: 'Source Water Collection', desc: 'Water is sourced from carefully selected natural sources.' },
  { icon: FlaskConical, title: 'Multi-Stage Filtration', desc: 'Advanced filtration including sediment, carbon, and RO membranes.' },
  { icon: ShieldCheck, title: 'UV & Ozone Treatment', desc: 'Additional disinfection for maximum safety.' },
  { icon: ClipboardCheck, title: 'Quality Testing', desc: 'Laboratory testing at multiple stages of production.' },
  { icon: Package, title: 'Hygienic Packaging', desc: 'Sealed in a sanitized, automated bottling environment.' },
  { icon: Eye, title: 'Final Inspection', desc: 'Every batch undergoes visual and quality inspection before dispatch.' },
];

const certificates = [
  {
    title: 'Punjab Food Authority License',
    issuingBody: 'Punjab Food Authority (PFA)',
    year: 'Official Registration',
    image: '/media/pfa-license.jpg',
    isPlaceholder: false,
  },
  {
    title: 'Water Quality & Safety License',
    issuingBody: 'Punjab Food Authority (PFA)',
    year: 'Official License',
    image: '/media/pfa-license.jpg',
    isPlaceholder: false,
  },
  {
    title: 'Commercial Food Safety License',
    issuingBody: 'Punjab Food Authority (PFA)',
    year: 'Verified Authority License',
    image: '/media/pfa-license.jpg',
    isPlaceholder: false,
  },
];

const labReports = [
  { title: 'Water Quality Analysis — Q1 2026', isPlaceholder: true },
  { title: 'Microbiological Testing — Q1 2026', isPlaceholder: true },
  { title: 'Chemical Parameters Report — Q1 2026', isPlaceholder: true },
];

export default function QualityPage() {
  const [viewCert, setViewCert] = useState<string | null>(null);
  const [viewReport, setViewReport] = useState<string | null>(null);

  return (
    <>
      <PageHero
        title="Our Commitment To Quality"
        subtitle="Every drop of Aqua Clear water meets rigorous safety and quality standards."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Quality & Certification', href: '/quality' },
        ]}
      />

      {/* Quality Process */}
      <section className="py-20 md:py-28">
        <div className="container-wide">
          <SectionHeading
            eyebrow="OUR PROCESS"
            title="How We Ensure Quality"
            subtitle="A rigorous multi-step process from source to seal."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map(({ icon: Icon, title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 0.08}>
                <div className="flex gap-4 p-6 rounded-xl border border-border hover:border-water-blue/30 hover:shadow-md transition-all bg-white">
                  <div className="w-12 h-12 bg-light-blue rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-secondary-blue" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-deep-blue mb-1">{title}</h3>
                    <p className="text-sm text-muted">{desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 md:py-28 bg-pale-blue">
        <div className="container-wide">
          <SectionHeading
            eyebrow="CERTIFICATIONS"
            title="Our Certifications"
            subtitle="Documentation of our commitment to quality and safety."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, i) => (
              <CertificationCard
                key={i}
                {...cert}
                onView={() => setViewCert(cert.title)}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lab Reports */}
      <section className="py-20 md:py-28">
        <div className="container-wide">
          <SectionHeading
            eyebrow="LAB REPORTS"
            title="Water Lab Reports"
            subtitle="Regular laboratory testing ensures our water meets the highest standards."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {labReports.map((report, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <button
                  onClick={() => setViewReport(report.title)}
                  className="w-full text-left bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all group"
                >
                  <div className="bg-gradient-to-b from-light-blue to-pale-blue h-40 flex items-center justify-center">
                    <FileText className="w-12 h-12 text-water-blue/50 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="p-5">
                    <p className="text-sm font-semibold text-deep-blue mb-1">{report.title}</p>
                    {report.isPlaceholder && (
                      <span className="text-[10px] text-amber-600 font-bold bg-amber-50 px-2 py-0.5 rounded">
                        PLACEHOLDER
                      </span>
                    )}
                  </div>
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="pb-20">
        <div className="container-wide">
          <AnimatedSection>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 flex gap-4">
              <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-base font-bold text-amber-800 mb-1">Disclaimer</h3>
                <p className="text-sm text-amber-700 leading-relaxed">
                  Certification and laboratory documentation shown on this page are
                  placeholders for demonstration purposes and will be replaced with
                  verified Aqua Clear documentation.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Certificate Modal */}
      <Modal
        isOpen={!!viewCert}
        onClose={() => setViewCert(null)}
        title={viewCert || 'Punjab Food Authority License'}
      >
        <div className="py-2">
          <div className="relative w-full h-[65vh] rounded-xl overflow-hidden shadow-inner border border-border bg-slate-50 flex items-center justify-center">
            <Image
              src="/media/pfa-license.jpg"
              alt="Punjab Food Authority License"
              fill
              className="object-contain p-2"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
          </div>
          <div className="mt-4 flex items-center justify-between px-2">
            <span className="text-xs text-muted">Official Document: Punjab Food Authority License</span>
            <a
              href="/media/pfa-license.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-deep-blue hover:text-water-blue bg-light-blue px-3 py-1.5 rounded-lg transition-colors"
            >
              Open Full Resolution ↗
            </a>
          </div>
        </div>
      </Modal>

      {/* Report Modal */}
      <Modal
        isOpen={!!viewReport}
        onClose={() => setViewReport(null)}
        title={viewReport || 'Lab Report'}
      >
        <div className="text-center py-8">
          <FileText className="w-20 h-20 text-water-blue/30 mx-auto mb-4" />
          <p className="text-muted">
            Lab report placeholder. The actual report document will be displayed here
            once verified reports are uploaded.
          </p>
        </div>
      </Modal>
    </>
  );
}
