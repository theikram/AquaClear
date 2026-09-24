'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, MessageCircle, Loader2, CheckCircle } from 'lucide-react';
import { contactFormSchema, type ContactFormValues } from '@/lib/validation';
import { siteConfig } from '@/config/site';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus('success');
        reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const formValues = watch();

  const whatsappMessage = `Hi Aqua Clear,\n\nName: ${formValues.fullName || ''}\nPhone: ${formValues.phone || ''}\nService: ${formValues.service || 'General Inquiry'}\nMessage: ${formValues.message || ''}`;

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-accent-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-accent-green" />
        </div>
        <h3 className="text-xl font-bold text-deep-blue mb-2">Thank You!</h3>
        <p className="text-muted mb-6">
          Your inquiry has been received. We&apos;ll get back to you shortly.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-sm font-semibold text-secondary-blue hover:text-deep-blue transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-semibold text-deep-blue mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            {...register('fullName')}
            className="w-full px-4 py-3 rounded-lg border border-border bg-white text-dark-text placeholder:text-muted/50 focus:border-water-blue focus:ring-2 focus:ring-water-blue/20 transition-all text-sm"
            placeholder="Your name"
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-deep-blue mb-1.5">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className="w-full px-4 py-3 rounded-lg border border-border bg-white text-dark-text placeholder:text-muted/50 focus:border-water-blue focus:ring-2 focus:ring-water-blue/20 transition-all text-sm"
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-deep-blue mb-1.5">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            {...register('phone')}
            className="w-full px-4 py-3 rounded-lg border border-border bg-white text-dark-text placeholder:text-muted/50 focus:border-water-blue focus:ring-2 focus:ring-water-blue/20 transition-all text-sm"
            placeholder="03001234567"
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-deep-blue mb-1.5">
            Subject <span className="text-red-500">*</span>
          </label>
          <input
            id="subject"
            type="text"
            {...register('subject')}
            className="w-full px-4 py-3 rounded-lg border border-border bg-white text-dark-text placeholder:text-muted/50 focus:border-water-blue focus:ring-2 focus:ring-water-blue/20 transition-all text-sm"
            placeholder="How can we help?"
          />
          {errors.subject && (
            <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>
          )}
        </div>
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-deep-blue mb-1.5">
          Service Interested In
        </label>
        <select
          id="service"
          {...register('service')}
          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-dark-text focus:border-water-blue focus:ring-2 focus:ring-water-blue/20 transition-all text-sm"
        >
          <option value="">Select a service</option>
          <option value="Home Delivery">Home Delivery</option>
          <option value="Office Delivery">Office Delivery</option>
          <option value="Commercial Supply">Commercial Supply</option>
          <option value="Private Label">Private Label</option>
          <option value="General Inquiry">General Inquiry</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-deep-blue mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          {...register('message')}
          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-dark-text placeholder:text-muted/50 focus:border-water-blue focus:ring-2 focus:ring-water-blue/20 transition-all text-sm resize-y"
          placeholder="Tell us about your requirements..."
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      {status === 'error' && (
        <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
      )}

      <div className="flex flex-wrap gap-3 pt-2">
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
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </button>

        <a
          href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#20BD5A] transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          Send via WhatsApp
        </a>
      </div>
    </form>
  );
}
