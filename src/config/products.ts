import type { Product } from '@/types';

export const products: Product[] = [
  {
    slug: '19l',
    name: '19L Premium Water',
    size: '19 Liters',
    shortDescription: 'Our flagship large bottle, perfect for homes and offices.',
    description:
      'The Aqua Clear 19L Premium Water bottle is our most popular product, designed for homes, offices, and commercial spaces. Purified through our advanced multi-stage filtration process, every drop delivers clean, fresh hydration. The durable, reusable bottle is designed for use with standard water dispensers.',
    features: [
      'Multi-stage purification process',
      'Reusable, BPA-free bottle',
      'Compatible with standard dispensers',
      'Sealed with tamper-proof cap',
      'Convenient home & office delivery',
    ],
    idealFor: ['Homes', 'Offices', 'Clinics', 'Schools'],
    image: '/media/19L.png',
    category: 'all',
    order: 1,
  },
  {
    slug: '12l',
    name: '12L Water',
    size: '12 Liters',
    shortDescription: 'A compact option ideal for smaller households and workspaces.',
    description:
      'The Aqua Clear 12L bottle offers the same premium quality in a lighter, more manageable size. Perfect for smaller families or workspaces where a full 19L bottle isn\'t necessary. Easy to handle and store.',
    features: [
      'Lighter and easier to handle',
      'Same premium purification',
      'Space-efficient design',
      'Sealed and hygienic packaging',
      'Regular delivery available',
    ],
    idealFor: ['Small families', 'Personal offices', 'Kitchens', 'Break rooms'],
    image: '/media/12L.png',
    category: 'residential',
    order: 2,
  },
  {
    slug: '1-5l',
    name: '1.5L Bottles',
    size: '1.5 Liters',
    shortDescription: 'Convenient bottles for daily use, meetings, and events.',
    description:
      'Aqua Clear 1.5L bottles are perfect for everyday hydration. Whether it\'s for the dining table, meetings, or outdoor activities, these bottles provide clean water in a convenient, portable format. Available in packs for bulk ordering.',
    features: [
      'Portable and convenient',
      'Available in bulk packs',
      'Perfect for events & meetings',
      'Recyclable packaging',
      'Sealed for freshness',
    ],
    idealFor: ['Daily use', 'Meetings', 'Events', 'Travel'],
    image: '/media/1.5L.png',
    category: 'all',
    order: 3,
  },
  {
    slug: '500ml',
    name: '500ml Bottles',
    size: '500ml',
    shortDescription: 'On-the-go hydration for active lifestyles and retail.',
    description:
      'The Aqua Clear 500ml bottle is designed for people on the move. Compact and lightweight, it fits perfectly in bags, cup holders, and gym kits. Available in cartons for retail and wholesale distribution.',
    features: [
      'Ultra-portable size',
      'Perfect for retail shelves',
      'Available in cartons',
      'Ideal for gyms & sports',
      'Lightweight and convenient',
    ],
    idealFor: ['Retail stores', 'Gyms', 'On-the-go', 'Restaurants'],
    image: '/media/500ML.png',
    category: 'all',
    order: 4,
  },
  {
    slug: 'commercial',
    name: 'Commercial Water Solutions',
    size: 'Custom Volumes',
    shortDescription: 'Tailored water supply for businesses, factories, and institutions.',
    description:
      'Aqua Clear provides customized commercial water solutions for businesses of all sizes. From office buildings and restaurants to factories and institutions, we deliver reliable water supply with flexible scheduling and competitive pricing.',
    features: [
      'Custom delivery schedules',
      'Volume-based pricing',
      'Dedicated account manager',
      'Priority support',
      'Flexible contracts',
    ],
    idealFor: ['Factories', 'Restaurants', 'Hotels', 'Institutions'],
    image: '/images/product-commercial.png',
    category: 'commercial',
    order: 5,
  },
  {
    slug: 'private-label',
    name: 'Private Label Water',
    size: 'Custom Sizes',
    shortDescription: 'Branded bottled water with your company label and identity.',
    description:
      'Aqua Clear offers private label bottled water services. We manufacture and package premium drinking water under your brand name. Perfect for hotels, restaurants, corporate events, and retail businesses looking to offer their own branded water.',
    features: [
      'Custom label design support',
      'Multiple bottle sizes available',
      'Premium water quality',
      'Minimum order quantities apply',
      'Full branding support',
    ],
    idealFor: ['Hotels', 'Corporate events', 'Restaurants', 'Retail brands'],
    image: '/images/product-private-label.png',
    category: 'commercial',
    order: 6,
  },
];

export const getProductBySlug = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug);

export const getRelatedProducts = (currentSlug: string): Product[] =>
  products.filter((p) => p.slug !== currentSlug).slice(0, 3);
