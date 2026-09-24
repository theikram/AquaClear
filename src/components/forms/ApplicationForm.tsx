'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, Loader2, CheckCircle, Upload } from 'lucide-react';
import { applicationFormSchema, type ApplicationFormValues } from '@/lib/validation';
import { jobs } from '@/config/jobs';

interface ApplicationFormProps {
  preselectedPosition?: string;
}

export default function ApplicationForm({ preselectedPosition }: ApplicationFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [fileName, setFileName] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationFormSchema),
    defaultValues: {
      position: preselectedPosition || '',
    },
  });

  const onSubmit = async (data: ApplicationFormValues) => {
    setStatus('loading');
    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus('success');
        reset();
        setFileName('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-accent-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-accent-green" />
        </div>
        <h3 className="text-xl font-bold text-deep-blue mb-2">Application Submitted!</h3>
        <p className="text-muted mb-6">
          Thank you for your interest. We&apos;ll review your application and get back to you.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-sm font-semibold text-secondary-blue hover:text-deep-blue transition-colors"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="app-name" className="block text-sm font-semibold text-deep-blue mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="app-name"
            type="text"
            {...register('name')}
            className="w-full px-4 py-3 rounded-lg border border-border text-sm focus:border-water-blue focus:ring-2 focus:ring-water-blue/20 transition-all"
            placeholder="Your full name"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="app-email" className="block text-sm font-semibold text-deep-blue mb-1.5">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="app-email"
            type="email"
            {...register('email')}
            className="w-full px-4 py-3 rounded-lg border border-border text-sm focus:border-water-blue focus:ring-2 focus:ring-water-blue/20 transition-all"
            placeholder="your@email.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="app-phone" className="block text-sm font-semibold text-deep-blue mb-1.5">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            id="app-phone"
            type="tel"
            {...register('phone')}
            className="w-full px-4 py-3 rounded-lg border border-border text-sm focus:border-water-blue focus:ring-2 focus:ring-water-blue/20 transition-all"
            placeholder="03001234567"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
        </div>
        <div>
          <label htmlFor="app-position" className="block text-sm font-semibold text-deep-blue mb-1.5">
            Position <span className="text-red-500">*</span>
          </label>
          <select
            id="app-position"
            {...register('position')}
            className="w-full px-4 py-3 rounded-lg border border-border text-sm focus:border-water-blue focus:ring-2 focus:ring-water-blue/20 transition-all"
          >
            <option value="">Select position</option>
            {jobs.map((job) => (
              <option key={job.id} value={job.title}>
                {job.title}
              </option>
            ))}
          </select>
          {errors.position && <p className="text-red-500 text-xs mt-1">{errors.position.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="app-experience" className="block text-sm font-semibold text-deep-blue mb-1.5">
          Experience <span className="text-red-500">*</span>
        </label>
        <input
          id="app-experience"
          type="text"
          {...register('experience')}
          className="w-full px-4 py-3 rounded-lg border border-border text-sm focus:border-water-blue focus:ring-2 focus:ring-water-blue/20 transition-all"
          placeholder="e.g., 2 years in customer service"
        />
        {errors.experience && <p className="text-red-500 text-xs mt-1">{errors.experience.message}</p>}
      </div>

      <div>
        <label htmlFor="app-cover" className="block text-sm font-semibold text-deep-blue mb-1.5">
          Cover Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="app-cover"
          rows={4}
          {...register('coverMessage')}
          className="w-full px-4 py-3 rounded-lg border border-border text-sm focus:border-water-blue focus:ring-2 focus:ring-water-blue/20 transition-all resize-y"
          placeholder="Tell us why you'd be a great fit..."
        />
        {errors.coverMessage && <p className="text-red-500 text-xs mt-1">{errors.coverMessage.message}</p>}
      </div>

      {/* CV upload placeholder */}
      <div>
        <label className="block text-sm font-semibold text-deep-blue mb-1.5">
          Upload CV
        </label>
        <label
          htmlFor="cv-upload"
          className="flex items-center gap-3 px-4 py-3 rounded-lg border-2 border-dashed border-border hover:border-water-blue/40 cursor-pointer transition-colors"
        >
          <Upload className="w-5 h-5 text-muted" />
          <span className="text-sm text-muted">
            {fileName || 'Choose file (PDF, DOC, DOCX)'}
          </span>
          <input
            id="cv-upload"
            type="file"
            accept=".pdf,.doc,.docx"
            className="hidden"
            onChange={(e) => setFileName(e.target.files?.[0]?.name || '')}
          />
        </label>
        <p className="text-xs text-muted mt-1 italic">
          File upload is for demonstration. Actual storage integration to be connected.
        </p>
      </div>

      {status === 'error' && (
        <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex items-center gap-2 bg-deep-blue text-white font-semibold px-6 py-3 rounded-lg hover:bg-secondary-blue transition-colors disabled:opacity-50"
      >
        {status === 'loading' ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <Send className="w-4 h-4" />
        )}
        {status === 'loading' ? 'Submitting...' : 'Submit Application'}
      </button>
    </form>
  );
}
