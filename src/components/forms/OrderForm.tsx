'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, MessageCircle, Loader2, CheckCircle } from 'lucide-react';
import { orderFormSchema, type OrderFormValues } from '@/lib/validation';
import { siteConfig } from '@/config/site';
import { products } from '@/config/products';
import Modal from '@/components/ui/Modal';

interface OrderFormProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProduct?: string;
}

export default function OrderForm({ isOpen, onClose, preselectedProduct }: OrderFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<OrderFormValues>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      product: preselectedProduct || '',
      quantity: 1,
    },
  });

  const onSubmit = async (data: OrderFormValues) => {
    setStatus('loading');
    try {
      const res = await fetch('/api/order', {
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

  const whatsappMessage = `Hi Aqua Clear, I'd like to place an order:\n\nName: ${formValues.name || ''}\nPhone: ${formValues.phone || ''}\nArea: ${formValues.deliveryArea || ''}\nProduct: ${formValues.product || ''}\nQuantity: ${formValues.quantity || 1}\nPreferred Time: ${formValues.preferredTime || 'Any'}\nNotes: ${formValues.notes || 'None'}`;

  const handleClose = () => {
    setStatus('idle');
    reset();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Order Water" maxWidth="max-w-xl">
      {status === 'success' ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-accent-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-accent-green" />
          </div>
          <h3 className="text-xl font-bold text-deep-blue mb-2">Order Received!</h3>
          <p className="text-muted mb-6">
            Thank you for your order. Our team will contact you shortly to confirm.
          </p>
          <button
            onClick={handleClose}
            className="text-sm font-semibold text-secondary-blue hover:text-deep-blue transition-colors"
          >
            Close
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="order-name" className="block text-sm font-semibold text-deep-blue mb-1.5">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="order-name"
                type="text"
                {...register('name')}
                className="w-full px-4 py-2.5 rounded-lg border border-border text-sm focus:border-water-blue focus:ring-2 focus:ring-water-blue/20 transition-all"
                placeholder="Your name"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="order-phone" className="block text-sm font-semibold text-deep-blue mb-1.5">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                id="order-phone"
                type="tel"
                {...register('phone')}
                className="w-full px-4 py-2.5 rounded-lg border border-border text-sm focus:border-water-blue focus:ring-2 focus:ring-water-blue/20 transition-all"
                placeholder="03001234567"
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="order-area" className="block text-sm font-semibold text-deep-blue mb-1.5">
              Delivery Area <span className="text-red-500">*</span>
            </label>
            <input
              id="order-area"
              type="text"
              {...register('deliveryArea')}
              className="w-full px-4 py-2.5 rounded-lg border border-border text-sm focus:border-water-blue focus:ring-2 focus:ring-water-blue/20 transition-all"
              placeholder="Your area / sector"
            />
            {errors.deliveryArea && <p className="text-red-500 text-xs mt-1">{errors.deliveryArea.message}</p>}
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="order-product" className="block text-sm font-semibold text-deep-blue mb-1.5">
                Product <span className="text-red-500">*</span>
              </label>
              <select
                id="order-product"
                {...register('product')}
                className="w-full px-4 py-2.5 rounded-lg border border-border text-sm focus:border-water-blue focus:ring-2 focus:ring-water-blue/20 transition-all"
              >
                <option value="">Select product</option>
                {products.map((p) => (
                  <option key={p.slug} value={p.name}>
                    {p.name}
                  </option>
                ))}
              </select>
              {errors.product && <p className="text-red-500 text-xs mt-1">{errors.product.message}</p>}
            </div>
            <div>
              <label htmlFor="order-qty" className="block text-sm font-semibold text-deep-blue mb-1.5">
                Quantity <span className="text-red-500">*</span>
              </label>
              <input
                id="order-qty"
                type="number"
                min={1}
                max={100}
                {...register('quantity')}
                className="w-full px-4 py-2.5 rounded-lg border border-border text-sm focus:border-water-blue focus:ring-2 focus:ring-water-blue/20 transition-all"
              />
              {errors.quantity && <p className="text-red-500 text-xs mt-1">{errors.quantity.message}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="order-time" className="block text-sm font-semibold text-deep-blue mb-1.5">
              Preferred Delivery Time
            </label>
            <select
              id="order-time"
              {...register('preferredTime')}
              className="w-full px-4 py-2.5 rounded-lg border border-border text-sm focus:border-water-blue focus:ring-2 focus:ring-water-blue/20 transition-all"
            >
              <option value="">Any time</option>
              <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
              <option value="Afternoon (12 PM - 3 PM)">Afternoon (12 PM - 3 PM)</option>
              <option value="Evening (3 PM - 6 PM)">Evening (3 PM - 6 PM)</option>
            </select>
          </div>

          <div>
            <label htmlFor="order-notes" className="block text-sm font-semibold text-deep-blue mb-1.5">
              Additional Notes
            </label>
            <textarea
              id="order-notes"
              rows={2}
              {...register('notes')}
              className="w-full px-4 py-2.5 rounded-lg border border-border text-sm focus:border-water-blue focus:ring-2 focus:ring-water-blue/20 transition-all resize-y"
              placeholder="Any special instructions..."
            />
          </div>

          {status === 'error' && (
            <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
          )}

          <div className="flex flex-wrap gap-3 pt-2">
            <button
              type="submit"
              disabled={status === 'loading'}
              className="inline-flex items-center gap-2 bg-deep-blue text-white font-semibold px-6 py-3 rounded-lg hover:bg-secondary-blue transition-colors disabled:opacity-50 text-sm"
            >
              {status === 'loading' ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
              Submit Inquiry
            </button>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#20BD5A] transition-colors text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Order Via WhatsApp
            </a>
          </div>
        </form>
      )}
    </Modal>
  );
}
